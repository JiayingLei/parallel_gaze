import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../../components/layouts/MainLayout';
import useScroll from '../../hooks/useScroll';
import './Introduction.css';

const introductionPages = [
  {
    chineseText: "在信息密集、高曝光的时代，照片往往将注意力锁定在视觉中心：\n那些被刻意构图、聚光、强调的「主角」。\n而身处背景的配角——路人、陪衬、偶然入画的个体——则在观看中被习惯性忽视，沉默无声。",
    englishText: "In this era of information density and high exposure,\nphotographs tend to focus attention on the visual center:\nthose deliberately composed, spotlighted 'protagonists'.\nMeanwhile, the supporting roles remain silent in the viewing process."
  },
  {
    chineseText: "在《平行注视》中，每一个路人都可能成为叙事的核心，\n每一帧画面都蕴含着多重视角的可能性。\n「主角」不再唯一，视觉的边缘亦可成为叙事的入口。",
    englishText: "In <Parallel Gaze>,\nevery passerby can become the narrative focus.\nEach frame contains possibilities of multiple perspectives.\nThe 'protagonist' is no longer singular."
  }
];

function Introduction() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const totalPages = introductionPages.length;
  const navigate = useNavigate();

  const handleNext = () => {
    setCurrentPageIndex(prev => {
      if (prev < totalPages - 1) return prev + 1;
      navigate('/scene-selection');
      return prev;
    });
  };

  const handlePrevious = () => {
    setCurrentPageIndex(prev => {
      if (prev > 0) return prev - 1;
      navigate('/');
      return prev;
    });
  };

  useScroll(handleNext, handlePrevious);

  const currentPage = introductionPages[currentPageIndex];

  return (
    <MainLayout>
      <div className="introduction-container">
        <div className="image-container">
          <img src={`${process.env.PUBLIC_URL}/assets/images/intro-image.png`}  alt="Introduction" className="intro-image" />
        </div>

        <div className="center-marker">
          <img src={`${process.env.PUBLIC_URL}/assets/icons/camera-icon.svg`} alt="Camera" className="camera-icon" />
        </div>

        <div className="content-box">
          <div className="content-text">
            <p className="chinese-text">{currentPage.chineseText}</p>
            <p className="english-text">{currentPage.englishText}</p>
          </div>
        </div>

        <div className="scroll-indicator" onClick={handleNext}>
          <img 
            src={`${process.env.PUBLIC_URL}/assets/icons/arrow-down.svg`}
            alt={currentPageIndex < totalPages - 1 ? "Next" : "Go to Scene Selection"} 
            className="arrow-icon" 
          />
        </div>
      </div>
    </MainLayout>
  );
}

export default Introduction;