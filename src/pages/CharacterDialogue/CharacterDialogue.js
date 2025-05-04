import React, { useState, useEffect, useRef } from 'react';  
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from '../../components/layouts/MainLayout';
import { SCENES } from '../../constants/scenes';
import './CharacterDialogue.css';

function CharacterDialogue() {
  const { sceneId, characterId } = useParams();
  const navigate = useNavigate();
  const [squareCount, setSquareCount] = useState(0);
  const currentScene = SCENES.find(scene => scene.id === sceneId) || SCENES[0];
  const character = currentScene.characters.find(c => c.id === characterId) || currentScene.characters[0];

  const introText = (character.introduction.zh || '暂无简介') + '\n' + (character.introduction.en || 'No introduction available.');
  const questions = character.questions || [
    { zh: '你是谁？', en: 'Who are you?' },
    { zh: '你从哪里来？', en: 'Where are you from?' }
  ];
  const answers = character.answers || [
    { zh: '我是这个故事中的一个角色。', en: 'I am a character in this story.' },
    { zh: '我来自遥远的东方。', en: 'I come from the distant East.' }
  ];

  const [dialogueHistory, setDialogueHistory] = useState([]); 
  const [showQuestions, setShowQuestions] = useState(false);
  const [selectedQAs, setSelectedQAs] = useState([]);
  const [typingQueue, setTypingQueue] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!character.introduction.video) return;

    setCurrentVideo(character.introduction.video);
    
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(e => console.error("Video play failed:", e));

  }, [character]);

  useEffect(() => {
    if (typingQueue.length === 0 || !typingQueue[0].isCharacter) return;
  
    setIsTyping(true);
    let currentText = '';
    const textToType = typingQueue[0].text;
  
    const interval = setInterval(() => {
      if (currentText.length < textToType.length) {
        currentText += textToType[currentText.length];
        
        setDialogueHistory(prev => [
          ...prev.filter(item => item.completed),
          {
            text: currentText,
            isCharacter: true,
            completed: false
          }
        ]);
      } else {
        clearInterval(interval);
        setIsTyping(false);
        setTypingQueue([]);
        
        setDialogueHistory(prev => [
          ...prev.filter(item => item.completed),
          {
            text: textToType,
            isCharacter: true,
            completed: true
          }
        ]);
        
        if (selectedQAs.length === 0) {
          setTimeout(() => setShowQuestions(true), 500);
        }
      }
    }, 30);
  
    return () => clearInterval(interval);
  }, [typingQueue]);

  const renderDialogueContent = () => {
    return dialogueHistory.map((item, index) => (
      <div key={index}>
        {item.text.split('\n').map((line, lineIndex) => (
          line && (
            <div 
              key={lineIndex} 
              className={`dialogue-bubble ${item.isCharacter ? 'bubble-left' : 'bubble-right'}`}
            >
              {line}
            </div>
          )
        ))}
      </div>
    ));
  };

  useEffect(() => {
    setTypingQueue([{ 
      text: introText, 
      isCharacter: true 
    }]);
  }, []);

  const handleQuestionClick = (idx) => {
    const question = questions[idx];
    const answer = answers[idx];
    
    setDialogueHistory(prev => [
      ...prev,
      {
        text: `${question.zh || '问题'}\n${question.en || 'Question'}`,
        isCharacter: false,
        completed: true
      }
    ]);
    
    if (answer.video) {
      setCurrentVideo(answer.video);
      const video = videoRef.current;
      if (video) {
        video.play().catch(e => console.error("Answer video play failed:", e));
      }
    }
    
    setTypingQueue([{ 
      text: `${answer.zh || '回答'}\n${answer.en || 'Answer'}`, 
      isCharacter: true 
    }]);
    
    setSelectedQAs(prev => [...prev, { question, answer }]);
  };

  const handleBackToScene = () => {
    navigate(`/scene/${sceneId}`, { state: { fromCharacter: true } });
  };

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

  return (
    <MainLayout>
      <div className="character-dialogue-container">
        <div className="black-bar">
          {[...Array(squareCount)].map((_, index) => (
            <div key={index} className="green-square"></div>
          ))}
        </div>

        <button className="back-button" onClick={handleBackToScene}>&lt;</button>

        <div className="content-wrapper">
          <div className="media-panel">
            {currentVideo && (
              <video 
                ref={videoRef}
                src={currentVideo}
                autoPlay
                muted={false}
                className="character-video"
                playsInline
                controls={false}
              />
            )}
          </div>

          <div className="dialogue-panel">
            <div className="character-title">
              {(character.chineseRole || '角色身份')} - {(character.chineseName || '未命名')} <br />
              {(character.englishRole || 'Character Identity')} - {(character.englishName || 'Undefined')}
            </div>
            <div className="dialogue-box">
              <div className="dialogue-container">
                {renderDialogueContent()}
              </div>
            </div>
            {showQuestions && !isTyping && selectedQAs.length < questions.length && (
              <div className="question-options">
                {questions.map((q, idx) =>
                  !selectedQAs.find((_, i) => i === idx) ? (
                    <button
                      key={idx}
                      onClick={() => handleQuestionClick(idx)}
                      className="question-bubble"
                    >
                      {q.zh || '问题'}<br />
                      {q.en || 'Question'}
                    </button>
                  ) : null
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default CharacterDialogue;