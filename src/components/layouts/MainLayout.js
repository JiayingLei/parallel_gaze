import React from 'react';
import './MainLayout.css';

const MainLayout = ({ children, style }) => {
  return (
    <div className="main-layout" style={style}>
      <div className="top-bar">
        PARALLEL GAZE
      </div>
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;