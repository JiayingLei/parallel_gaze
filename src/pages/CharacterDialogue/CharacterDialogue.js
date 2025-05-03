import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SCENES } from '../../constants/scenes';
import './CharacterDialogue.css';

function CharacterDialogue() {
  const { sceneId, characterId } = useParams();
  const navigate = useNavigate();

  // 获取当前场景和角色信息
  const currentScene = SCENES.find(scene => scene.id === sceneId) || SCENES[0];
  const character = currentScene.characters.find(c => c.id === characterId) || currentScene.characters[0];

  // 返回场景详情页
  const handleBackToScene = () => {
    navigate(`/scene/${sceneId}`, { state: { fromCharacter: true } });
  };

  return (
    <div className="character-dialogue-container">
      <div className="dialogue-box">
        <h3>{character.name}</h3>
          <button 
            className="back-button"
            onClick={handleBackToScene}
          >
            返回场景
          </button>
      </div>
    </div>
  );
}

export default CharacterDialogue;