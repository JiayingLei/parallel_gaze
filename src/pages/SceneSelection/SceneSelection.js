import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../../components/layouts/MainLayout';
import useScroll from '../../hooks/useScroll';
import './SceneSelection.css';

function SceneSelection() {
  const navigate = useNavigate();
  const [squareCount, setSquareCount] = useState(0);
  
  const handleSceneClick = (sceneId) => {
    navigate(`/scene/${sceneId}`);
  };

  const scenes = [
    { 
      id: '1',
      chineseName: '会议',
      englishName: 'Meeting',
      bgColor: '#CCF656',
      thumbnail: `${process.env.PUBLIC_URL}/assets/images/01-meeting.png`
    },
    { 
      id: '2',
      chineseName: '派对', 
      englishName: 'Party',
      bgColor: '#F230AA', 
      thumbnail: `${process.env.PUBLIC_URL}/assets/images/02-party.png`
    },
    { 
      id: '3',
      chineseName: '活动',
      englishName: 'Activity',
      bgColor: '#48937E', 
      thumbnail: `${process.env.PUBLIC_URL}/assets/images/03-activity.png`
    },
    { 
      id: '4',
      chineseName: '仪式',
      englishName: 'Ceremony',
      bgColor: '#FE7733', 
      thumbnail: `${process.env.PUBLIC_URL}/assets/images/04-ceremony.png`
    },
    { 
      id: '5',
      chineseName: '现场',
      englishName: 'Scene',
      bgColor: '#6ECE8F', 
      thumbnail: `${process.env.PUBLIC_URL}/assets/images/05-scene.png`
    },
    { 
      id: '6',
      chineseName: '舞台',
      englishName: 'Stage',
      bgColor: '#B2A1FF', 
      thumbnail: `${process.env.PUBLIC_URL}/assets/images/06-stage.png`
    },
  ];

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
            {scenes.map((scene) => (
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