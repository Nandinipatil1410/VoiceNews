import React from 'react';

const Header = ({ onVoiceAssist }) => {
  return (
    <header className="header">
      <div className="logo">
    <h1>VoiceNews</h1>
  </div>
  <p className="tagline">Your voice-activated news assistant</p>

      <nav className="nav">
        <button onClick={onVoiceAssist} className="btn voice-assist">
          🎤 Voice Assist
        </button>
      </nav>

      
    </header>
  );
};

export default Header;
