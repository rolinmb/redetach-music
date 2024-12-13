import { QRCodeCanvas } from 'qrcode.react';

const Donations = () => {
  const btcAddress = '3E2TTKqHSWhqV31W9VrETN3sbn7czM83FJ';
  return (
    <div id="donations-wrap" className="page-wrap">
      <p>I know we gettin' money, but I still live in my parents' basement...</p>
      <p>Limitations breed creativity, but I also feel like I need to get out into the world to meet up with so many people I respect and love.</p>
      <p>If you are able to donate, please do so via cryptocurrencies (preferably ETH and BTC).</p>
      <div id="donations-address-wrap">
        <div className="donation-option">
          <h3>Bitcoin (BTC)</h3>
          <QRCodeCanvas value={btcAddress} size={128} />
        </div>
        <div className="donation-option">
          <h3>Venmo</h3>
          <a href="https://venmo.com/u/Rolin-Blake">https://venmo.com/u/Rolin-Blake</a>
        </div>
        <div className="donation-option">
          <h3>PayPal</h3>
          <a href="https://paypal.com/RolinBlake">https://paypal.com/RolinBlake</a>
        </div>
        <div href="donation-option">
          <h3>Robinhood Referral Link</h3>
          <a href="https://join.robinhood.com/rolinmb">https://join.robinhood.com/rolinmb</a>
        </div>
      </div>
    </div>
  );
}

export default Donations;