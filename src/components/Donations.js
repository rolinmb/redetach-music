import { QRCodeCanvas } from 'qrcode.react';

const Donations = () => {
  const ethAddress = '0x1f1FACFc727b0236e8faEa6B3C0C670448A7B0e2';
  const btcAddress = '3E2TTKqHSWhqV31W9VrETN3sbn7czM83FJ';
  return (
    <div id="donations-wrap" className="page-wrap">
      <p>I know we gettin' money, but I still live in my parents' basement...</p>
      <p>Limitations breed creativity, but I also feel like I need to get out into the world to meet up with so many people I respect and love.</p>
      <p>If you are able to donate, please do so via cryptocurrencies (preferably ETH and BTC).</p>
      <div id="donations-address-wrap">
        <div className="donation-option">
          <h3>Ethereum (ETH)</h3>
          <QRCodeCanvas value={ethAddress} size={128} />
        </div>
        <div className="donation-option">
          <h3>Bitcoin (BTC)</h3>
          <QRCodeCanvas value={btcAddress} size={128} />
        </div>
      </div>
    </div>
  );
}

export default Donations;