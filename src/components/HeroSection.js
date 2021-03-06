import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='./videos/video-1.mp4' autoPlay loop muted />
      <h1>Fernando Bloedorn</h1>
      <p>System Developer</p>
      <p>Software Architect</p>
      <p>Data Scientist</p>
      <div className="email">fernandobloedorn@gmail.com</div>
    </div>
  );
}

export default HeroSection;