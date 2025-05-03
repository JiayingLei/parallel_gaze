import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../../components/layouts/MainLayout';
import useScroll from '../../hooks/useScroll';
import { SCENES } from '../../constants/scenes';
import './SceneSelection.css';

function SceneSelection() {
  const navigate = useNavigate();
  const [squareCount, setSquareCount] = useState(0);
  
  const handleSceneClick = (sceneId) => {
    navigate(`/scene/${sceneId}`);
  };

  useEffect(() => {
    const updateSquareCount = () => {
      const screenWidth = window.innerWidth;
      const squareSize = 20; 
      const gapSize = 10; 
      const totalWidth = screenWidth - 20; 
      const count = Math.floor(totalWidth / (squareSize + gapSize)); 
      setSquareCount(count);
    };
    
    updateSquareCount();
    window.addEventListener('resize', updateSquareCount);
    return () => window.removeEventListener('resize', updateSquareCount);
  }, []);

  useScroll(null, () => navigate('/introduction'));

  return (
    <MainLayout>
      <div className="scene-selection-container">
        <div className="black-bar">
          {[...Array(squareCount)].map((_, index) => (
            <div key={index} className="grey-square"></div>
          ))}
        </div>
        
        <div className="instruction">
          <div className="chinese">请选择场景进行探索</div>
          <div className="english">Choose a scene to explore</div>
        </div>
        
        <div className="scenes-grid-container">
          <div className="scenes-grid">
            {SCENES.map(scene => (
              <div
                key={scene.id}
                className="scene-item"
                onClick={() => handleSceneClick(scene.id)}
              >
                <div 
                  className="scene-thumbnail"
                  style={{ backgroundColor: scene.bgColor }} 
                >
                  <img 
                    src={scene.thumbnail} 
                    alt={scene.chineseName} 
                    className="scene-image"
                  />
                  <div className="scene-name-overlay">
                    <div className="scene-name-chinese">{scene.chineseName}</div>
                    <div className="scene-name-english">{scene.englishName}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default SceneSelection;