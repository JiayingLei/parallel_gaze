import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../../components/layouts/MainLayout';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const [squareCount, setSquareCount] = useState(0);

  const handleStartClick = () => {
    navigate('/introduction');
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

  return (
    <MainLayout
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/background-character.png')`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="home-container">
        <div className="black-bar">
          {[...Array(squareCount)].map((_, index) => (
            <div key={index} className="green-square"></div>
          ))}
        </div>
        <div className="content">
          <div className="content-inner">
            <h1 className="title-chinese">平行注视</h1>
            <h1 className="title-english">Parallel Gaze</h1>
            <p className="subtitle">WHAT DO YOU USUALLY LOOK AT ...</p>
            <button className="start-button" onClick={handleStartClick}>
              START
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;