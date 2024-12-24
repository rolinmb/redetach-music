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

      // Trippy visual effect: Color-changing background
      ctx.fillStyle = `hsl(${frame % 360}, 50%, 50%)`;
      ctx.fillRect(0, 0, width, height);

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