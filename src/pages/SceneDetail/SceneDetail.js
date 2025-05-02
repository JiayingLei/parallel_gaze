import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from '../../components/layouts/MainLayout';
import './SceneDetail.css';

function SceneDetail() {
  const { sceneId } = useParams();
  const navigate = useNavigate();

  const handleCharacterClick = (characterId) => {
    navigate(`/scene/${sceneId}/character/${characterId}`);
  };

  return (
    <MainLayout>
      <div className="scene-detail-container">
        <h2>场景 {sceneId}</h2>
        <div className="characters">
          <div onClick={() => handleCharacterClick('1')}>角色 1</div>
          <div onClick={() => handleCharacterClick('2')}>角色 2</div>
        </div>
      </div>
    </MainLayout>
  );
}

export default SceneDetail;