import './Footer.css';
import React from 'react';

const Footer = () => {
  return (
    <footer id='footer-wrap'>
      <ul id='footer-links'>
        <li key='youtube'><a href='https://www.youtube.com/@re_detach'>YouTube</a></li>
        <li key='instagram'><a href='https://www.instagram.com/re_detach/'>Instagram</a></li>
        <li key='soundcloud'><a href='https://www.soundcloud.com/re_detach'>Soundcloud</a></li>
        <li key='spotify'><a href='https://open.spotify.com/artist/2SXB5jBuiaVygAZ4s16s5D?si=NWGzYb0_SnixXedu6h9KHQ'>Spotify</a></li>
        <li key='tiktok'><a href='https://www.tiktok.com/@re_detach'>TikTok</a></li>
        <li key='twitch'><a href='https://www.twitch.tv/re_detach'>Twitch.tv</a></li>
        <li key='discord'><a href='https://discord.gg/qcsJPjQ8'>Discord</a></li>
      </ul>
    </footer>
  )
}

export default Footer;