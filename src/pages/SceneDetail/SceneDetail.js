import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from '../../components/layouts/MainLayout';
import { SCENES } from '../../constants/scenes';
import './SceneDetail.css';

function SceneDetail() {
  const { sceneId } = useParams();
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const audioRef = useRef(null); 
  const [hoveredCharacter, setHoveredCharacter] = useState(null);
  const [maskImages, setMaskImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [exploredCharacters, setExploredCharacters] = useState([]);
  const [showCompletionModal, setShowCompletionModal] = useState(false);

  const currentScene = SCENES.find(scene => scene.id === sceneId) || SCENES[0];

  const allCharactersExplored = currentScene.characters.every(char => 
    exploredCharacters.includes(char.id)
  );

  useEffect(() => {
    if (!currentScene?.backgroundMusic) return;
  
    const audio = new Audio(currentScene.backgroundMusic);
    audio.loop = true;
    audioRef.current = audio;
  
    audio.addEventListener('canplaythrough', () => {
      audio.play().catch((e) => {
        console.error("Autoplay blocked. Waiting for user interaction...", e);
        const handleClick = () => audio.play().catch(console.error);
        document.addEventListener('click', handleClick, { once: true });
      });
    });
  
    return () => {
      audio.pause();
      audio.removeEventListener('canplaythrough', () => {});
      audioRef.current = null;
    };
  }, [currentScene.backgroundMusic]);

  useEffect(() => {
    const savedProgress = JSON.parse(localStorage.getItem(`scene_${sceneId}_progress`)) || [];
    setExploredCharacters(savedProgress);
  }, [sceneId]);

  useEffect(() => {
    if (exploredCharacters.length > 0 && allCharactersExplored) {
      setShowCompletionModal(true);
    }
  }, [exploredCharacters, allCharactersExplored]);

  useEffect(() => {
    const loadMasks = async () => {
      const loadedMasks = await Promise.all(
        currentScene.characters.map(async (character) => {
          const img = new Image();
          img.src = character.mask;
          await img.decode();
          return {
            id: character.id,
            name: character.name,
            image: img,
            maskData: null
          };
        })
      );
      setMaskImages(loadedMasks);
      setIsLoading(false);
    };

    loadMasks();
  }, [currentScene]);

  useEffect(() => {
    if (isLoading || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    const bgImg = new Image();
    bgImg.src = currentScene.full;
    bgImg.onload = () => {
      canvas.width = bgImg.width;
      canvas.height = bgImg.height;
      canvas.style.width = '100%';
      canvas.style.height = 'auto';
    };

    const drawMasks = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      maskImages.forEach(mask => {
        if (mask.id === hoveredCharacter) {
          ctx.globalAlpha = 1.0;
          ctx.filter = "blur(3px)";
          ctx.drawImage(mask.image, 0, 0, canvas.width, canvas.height);
          ctx.filter = "blur(3px)";
          ctx.drawImage(mask.image, 0, 0, canvas.width, canvas.height);
          ctx.filter = "none";
        } else {
          ctx.globalAlpha = 0.3;
          ctx.drawImage(mask.image, 0, 0, canvas.width, canvas.height);
        }
      });
    };

    drawMasks();
  }, [isLoading, hoveredCharacter, currentScene.full, maskImages]);

  const handleCanvasClick = (e) => {
    if (isLoading) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);

    const ctx = canvas.getContext('2d');
    
    for (const mask of maskImages) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(mask.image, 0, 0, canvas.width, canvas.height);
      const pixel = ctx.getImageData(x, y, 1, 1).data;
      
      if (pixel[3] > 0) {
        if (!exploredCharacters.includes(mask.id)) {
          const newExplored = [...exploredCharacters, mask.id];
          setExploredCharacters(newExplored);
          localStorage.setItem(`scene_${sceneId}_progress`, JSON.stringify(newExplored));
        }
        navigate(`/scene/${sceneId}/character/${mask.id}`);
        return;
      }
    }
  };

  const handleCanvasMouseMove = (e) => {
    if (isLoading) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);

    const ctx = canvas.getContext('2d');
    let foundHover = null;

    for (const mask of maskImages) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(mask.image, 0, 0, canvas.width, canvas.height);
      const pixel = ctx.getImageData(x, y, 1, 1).data;
      
      if (pixel[3] > 0) {
        foundHover = mask.id;
        break;
      }
    }

    setHoveredCharacter(foundHover);
  };

  const handleBack = () => {
    localStorage.removeItem(`scene_${sceneId}_progress`);
    navigate('/scene-selection');
  };

  const handleFinish = () => {
    localStorage.removeItem(`scene_${sceneId}_progress`);
    navigate(`/scene/${sceneId}/report`, {
      state: { 
        exploredCharacters 
      }
    });
  };

  return (
    <MainLayout>
      <div className="scene-detail-container">
        {isLoading ? (
          <div className="loading">Loading scene...</div>
        ) : (
          <div className="scene-background-wrapper">
            <img 
              src={currentScene.full} 
              alt={currentScene.name} 
              className="scene-background" 
            />
            <canvas
              ref={canvasRef}
              className={`character-mask-canvas ${hoveredCharacter ? 'character-hovered' : ''}`}
              onClick={handleCanvasClick}
              onMouseMove={handleCanvasMouseMove}
              onMouseLeave={() => setHoveredCharacter(null)}
            />
          </div>
        )}

        <button className="back-button" onClick={handleBack}>&lt;</button>

        {exploredCharacters.length > 0 && !showCompletionModal && (
          <button className="finish-button" onClick={handleFinish}>
            End exploration
          </button>
        )}

        {showCompletionModal && (
          <div className="completion-modal">
            <div className="modal-content">
              <button 
                className="close-modal"
                onClick={() => setShowCompletionModal(false)}
              >
                ×
              </button>
              <h2>恭喜你<br />Congratulations</h2>
              <p>
                您已完成本场景中<br />
                平行注视的全部探索<br />
                You have completed all the<br />
                explorations of parallel gazing<br />
                in this scene
              </p>
              <button 
                className="modal-finish-button"
                onClick={handleFinish}
              >
                End exploration
              </button>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export default SceneDetail;