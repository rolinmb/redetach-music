import './About.css';
import React from 'react';

const About = () => {
  return (
    <div id="about-wrap" className='page-wrap'>
      <div id='about-content-wrap'>  
        <p>FL Studio for audio recording/mixing/mastering</p>
        <p>Behringer U-Phoria UMC204HD Audio Interface for</p>
        <p>line/xlr Audio Recording</p>
        <p>OBS for streaming</p>
        <p>Logitech 720p Webcam (current streaming mic)</p>
        <p>Davinci Resolve for video editing</p>
        <p>All artwork on social media profiles, pages, this website</p>
        <p>and albums/EPs created by me</p>
        <p>Website also developed by myself with react.js, hosted on Google Firebase for free</p>
        <div>
          <p>I use my own photos & videos and custom ffmpeg +</p>
          <p>golang / rust / javascript / python algorithms to generate:</p>
          <ul id="about-media-list">
            <li>music promo</li>
            <li>album art</li>
            <li>visualizers</li>
            <li>music videos</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;