import './About.css';
import React from 'react';

const About = () => {
  return (
    <div id="about-wrap" className='page-wrap'>
      <div id='about-content-wrap'>  
        <p>FL Studio for audio recording/mixing/mastering.</p>
        <p>OBS for video recording and streaming.</p>
        <p>Davinci Resolve for video editing.</p>
        <p>All artwork on social media profiles, pages, this website and albums/EPs created by me.</p>
        <p>Website also created by me using react.js and Google Firebase.</p>
        <p>Art made with golang, javascript and python. I also use photos taken over the years.</p>
      </div>
    </div>
  );
}

export default About;