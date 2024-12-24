import React, { useRef, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const TrippyCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let frame = 0;

    const render = () => {
      frame++;
      const { width, height } = canvas;

      // Clear the canvas slightly for trailing effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, width, height);

      // Lissajous curve parameters
      const a = 3; // frequency in x direction
      const b = 2; // frequency in y direction
      const delta = (Math.PI / 2) * Math.sin(frame / 200); // phase shift that changes over time

      const scale = Math.min(width, height) / 3; // scaling factor for the curves
      const centerX = width / 2;
      const centerY = height / 2;

      ctx.beginPath();
      for (let t = 0; t <= Math.PI * 2; t += 0.01) {
        const x = centerX + scale * Math.sin(a * t + delta);
        const y = centerY + scale * Math.sin(b * t);
        ctx.lineTo(x, y);
      }

      // Color based on frame
      ctx.strokeStyle = `hsl(${frame % 360}, 70%, 60%)`;
      ctx.lineWidth = 2;
      ctx.stroke();

      requestAnimationFrame(render);
    };

    render();

    // Cleanup on unmount
    return () => cancelAnimationFrame(render);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
}

const Donations = () => {
  const btcAddress = '3E2TTKqHSWhqV31W9VrETN3sbn7czM83FJ';
  return (
    <div id="donations-wrap" className="page-wrap">
      <TrippyCanvas />
      <p>I know we gettin' money, but I still live in my parents' basement...</p>
      <p>Limitations breed creativity, but I also feel like I need to get out into the world to meet up with so many people I respect and love.</p>
      <p>If you are able to donate, please do so via cryptocurrencies (preferably BTC).</p>
      <div id="donations-address-wrap">
        <div className="donation-option">
          <h3>Bitcoin (BTC)</h3>
          <QRCodeCanvas value={btcAddress} size={128} />
        </div>
      </div>
    </div>
  );
}

export default Donations;