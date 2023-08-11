import './Footer.css';
import React from 'react';

const Footer = () => {
  return (
    <footer id='footer-wrap'>
      <ul id='footer-links'>
        <li key='twitch'><a href='https://www.twitch.tv/re_detach'>Twitch.tv</a></li>
        <li key='youtube'><a href='https://www.youtube.com/@re_detach'>YouTube</a></li>
        <li key='instagram'><a href='https://www.instagram.com/re_detach/'>Instagram</a></li>
        <li key='soundcloud'><a href='https://www.soundcloud.com/re_detach'>Soundcloud</a></li>
        <li key='tiktok'><a href='https://www.tiktok.com/@re_detach'>TikTok</a></li>
      </ul>
    </footer>
  )
}

export default Footer;