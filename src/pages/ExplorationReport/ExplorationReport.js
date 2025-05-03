import React, { useState, useEffect, useMemo } from 'react';  
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import MainLayout from '../../components/layouts/MainLayout';
import { SCENES } from '../../constants/scenes';
import './ExplorationReport.css';

// 进度条组件
const ProgressBar = ({ total, filled }) => {
  return (
    <div className="progress-bar">
      {Array.from({ length: total }).map((_, i) => (
        <span key={i} className={i < filled ? 'filled-square' : 'empty-square'}>
          {i < filled ? '■' : '□'}
        </span>
      ))}
    </div>
  );
};

function ExplorationReport() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [squareCount, setSquareCount] = useState(0);
  const { sceneId } = useParams();
  const currentScene = SCENES.find(scene => scene.id === sceneId) || SCENES[0];
  const exploredCharacters = state?.exploredCharacters || [];
  
  const [displayedContent, setDisplayedContent] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  
  const totalCharacters = currentScene.characters.length;
  const exploredCount = exploredCharacters.length;
  const unexploredCount = totalCharacters - exploredCount;
  
  // 计算百分比
  const exploredPercent = useMemo(() => 
    ((exploredCount / totalCharacters) * 100).toFixed(1), 
    [exploredCount, totalCharacters]
  );
  
  const unexploredPercent = useMemo(() => 
    ((unexploredCount / totalCharacters) * 100).toFixed(1), 
    [unexploredCount, totalCharacters]
  );
  
  // 汇总角色名称
  const exploredNames = useMemo(() => 
    currentScene.characters
      .filter(c => exploredCharacters.includes(c.id))
      .map(c => c.chineseName),
    [currentScene.characters, exploredCharacters]
  );
  
  const unexploredNames = useMemo(() => 
    currentScene.characters
      .filter(c => !exploredCharacters.includes(c.id))
      .map(c => c.chineseName),
    [currentScene.characters, exploredCharacters]
  );
  
  const exploredEnglishNames = useMemo(() => 
    currentScene.characters
      .filter(c => exploredCharacters.includes(c.id))
      .map(c => c.englishName),
    [currentScene.characters, exploredCharacters]
  );
  
  const unexploredEnglishNames = useMemo(() => 
    currentScene.characters
      .filter(c => !exploredCharacters.includes(c.id))
      .map(c => c.englishName),
    [currentScene.characters, exploredCharacters]
  );

  // 报告内容分段
  const reportContent = useMemo(() => [
    { text: "你看到了他们的边缘故事，但你愿意让谁成为中心？", isChinese: true },
    { isProgressBar: true },
    { 
      text: `【 探索度 】你已探索了 ${exploredCount} 个角色，占场景总角色数的 ${exploredPercent}%。\n` +
            `你与之互动的角色包括：${exploredCount > 0 ? exploredNames.join('， ') : '暂无'}。\n` +
            `这些角色的故事已开始向你展开，你是否准备好深入了解他们的内心世界？`,
      isChinese: true 
    },
    { 
      text: `【 沉默区 】仍有 ${unexploredCount} 个角色未被探索，占场景总角色数的 ${unexploredPercent}%。\n` +
            `这些未探索的角色包括：${unexploredCount > 0 ? unexploredNames.join('， ') : '无'}。\n` +
            `他们仍在沉默中等待，你会选择揭开他们的故事吗？`,
      isChinese: true 
    },
    { text: "You've seen their peripheral stories, but who are you willing to put at the center?", isChinese: false },
    { isProgressBar: true },
    { 
      text: `[ Exploration Progress ] You have explored ${exploredCount} characters, accounting for ${exploredPercent}% of the total characters in this scene.\n` +
            `The characters you've interacted with include: ${exploredCount > 0 ? exploredEnglishNames.join(', ') : 'None'}.\n` +
            `Their stories have begun to unfold before you. Are you ready to dive deeper into their inner worlds?`,
      isChinese: false 
    },
    { 
      text: `[ Silent Zone ] There are still ${unexploredCount} characters unexplored, representing ${unexploredPercent}% of the total characters.\n` +
            `These unexplored characters include: ${unexploredCount > 0 ? unexploredEnglishNames.join(', ') : 'None'}.\n` +
            `They remain in silence, waiting. Will you choose to uncover their stories?`,
      isChinese: false 
    }
  ], [exploredCount, unexploredCount, exploredPercent, unexploredPercent, exploredNames, unexploredNames, exploredEnglishNames, unexploredEnglishNames]);

  useEffect(() => {
    const calculateSquares = () => {
      const barHeight = window.innerHeight;
      const squareHeight = 20;
      const gap = 10;
      const count = Math.floor((barHeight - 10) / (squareHeight + gap));
      setSquareCount(count);
    };
    calculateSquares();
    window.addEventListener('resize', calculateSquares);
    return () => window.removeEventListener('resize', calculateSquares);
  }, []);

  useEffect(() => {
    if (currentIndex >= reportContent.length) return;

    const currentItem = reportContent[currentIndex];
    
    if (currentItem.isProgressBar) {
      setDisplayedContent(prev => [...prev, currentItem]);
      setCurrentIndex(prev => prev + 1);
      return;
    }

    setIsTyping(true);
    let currentText = '';
    const textToType = currentItem.text;

    const interval = setInterval(() => {
      if (currentText.length < textToType.length) {
        currentText += textToType[currentText.length];
        setDisplayedContent(prev => [
          ...prev.slice(0, -1),
          { ...currentItem, text: currentText }
        ]);
      } else {
        clearInterval(interval);
        setIsTyping(false);
        setCurrentIndex(prev => prev + 1);
      }
    }, 20);

    setDisplayedContent(prev => [...prev, { ...currentItem, text: '' }]);

    return () => clearInterval(interval);
  }, [currentIndex, reportContent]);

  const renderContent = () => {
    return displayedContent.map((item, index) => {
      if (item.isProgressBar) {
        return <ProgressBar key={index} total={totalCharacters} filled={exploredCount} />;
      }

      return item.text.split('\n').map((line, lineIndex) => (
        line && (
          <p 
            key={`${index}-${lineIndex}`} 
            className={item.isChinese ? 'chinese-text' : 'english-text'}
          >
            {line}
          </p>
        )
      ));
    });
  };

  return (
    <MainLayout>
      <div className="exploration-report-container">
        <div className="black-bar">
          {[...Array(squareCount)].map((_, index) => (
            <div key={index} className="green-square"></div>
          ))}
        </div>

        <div 
          className="report-content"
          style={{
            backgroundImage: `linear-gradient(rgba(68, 68, 68, 0.7), rgba(68, 68, 68, 0.7)), 
                            url('${process.env.PUBLIC_URL}/assets/images/report-image.png')`,
            backgroundSize: 'auto 100%',
            backgroundPosition: 'left center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="report-header">
            <h1 className="report-title">Exploration Report</h1>
            <img src="/assets/icons/backquote-logo.svg" alt="logo" className="report-logo" />
          </div>

          <hr className="report-divider" />

          <div className="report-body">
            {renderContent()}
            {!isTyping && currentIndex >= reportContent.length && (
              <button className="bottom-back-button" onClick={() => navigate('/scene-selection')}>Back</button>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default ExplorationReport;