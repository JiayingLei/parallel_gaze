import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from '../../components/layouts/MainLayout';
import { SCENES } from '../../constants/scenes';
import './SceneDetail.css';

function SceneDetail() {
  const { sceneId } = useParams();
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const [hoveredCharacter, setHoveredCharacter] = useState(null);
  const [maskImages, setMaskImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const currentScene = SCENES.find(scene => scene.id === sceneId) || SCENES[0];

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
      </div>
    </MainLayout>
  );
}

export default SceneDetail;