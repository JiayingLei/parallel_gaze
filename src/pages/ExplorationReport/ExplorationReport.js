import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { SCENES } from '../../constants/scenes';
import './ExplorationReport.css'

function ExplorationReport() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const exploredCharacters = state?.exploredCharacters || [];
  
  // 从场景数据中获取角色名称（假设你能访问到SCENES）
  const { sceneId } = useParams();
  const currentScene = SCENES.find(scene => scene.id === sceneId) || SCENES[0];
  
  const getCharacterName = (id) => {
    return currentScene.characters.find(c => c.id === id)?.chineseName || '未知角色';
  };

  return (
    <div className="report-container">
      <h2>探索完成！</h2>
      <p>您总共探索了 {exploredCharacters.length} 个角色：</p>
      
      <ul className="character-list">
        {exploredCharacters.map((charId) => (
          <li key={charId}>{getCharacterName(charId)}</li>
        ))}
      </ul>

      <button 
        className="back-button"
        onClick={() => navigate('/scene-selection')}
      >
        返回场景选择
      </button>
    </div>
  );
}

export default ExplorationReport;