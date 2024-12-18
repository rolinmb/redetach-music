import './About.css';
import React from 'react';

const About = () => {
  return (
    <div id="about-wrap" className='page-wrap'>
      <div id='about-content-wrap'>
        <p>Windows or Mac idgaf</p>
        <p>FL Studio</p>
        <p>Behringer U-Phoria UMC204HD Audio Interface</p>
        <p>OBS</p>
        <p>Davinci Resolve</p>
        <div>
          <p>I use my own iphone photos & videos with custom ffmpeg +</p>
          <p>golang / rust / javascript / python algorithms to generate:</p>
          <ul id="about-media-list">
            <li>music promo</li>
            <li>album art</li>
            <li>visualizers</li>
            <li>music videos</li>
          </ul>
        </div>
        <p>All artwork on social media profiles, pages, this website</p>
        <p>videos, and albums/EPs created by me</p>
      </div>
    </div>
  );
}

export default About;