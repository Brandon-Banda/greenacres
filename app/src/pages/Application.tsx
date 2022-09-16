import { useState } from 'react';
import './Application.css';
import moment from 'moment';

function Application() {
  const today = moment().startOf('day').format('MMM DD YYYY');
  const [inputs, setInputs] = useState({});
  const [data, setData] = useState('');

  const handleChange = (event: {
    target: { name?: any; value?: any; email?: any; date?: any };
  }) => {
    const { name, value, email, date } = event.target;
    setInputs((values: any) => ({ ...values, [name]: value }));
  };

  const handleSubmit = () => {
    event.preventDefault();
    console.log(inputs);
    inputs['date'] = today;
    const jsonData = JSON.stringify(inputs);
    setInputs((values: any) => ({ ...values, [name]: today }));
    setData(jsonData);
  };

  return (
    <div className="main">
      <h1 style={{ color: '#538135', fontWeight: 'bold' }}>
        Green Acres Market of Alice, TX - Vendor Contract
      </h1>
      <h2 style={{ color: '#538135', fontWeight: 'bold' }}>
        greenacresmarketcr465@gmail.com
      </h2>
      <div className="form-container">
        <div className="form-section">
          <div className="form-holder">
            <form onSubmit={handleSubmit}>
              <label className="custom-field">
                <input
                  type="text"
                  name="email"
                  value={inputs.email || ''}
                  onChange={handleChange}
                  placeholder="&nbsp;"
                />
                <span className="placeholder">Vendor Email Address</span>
                <span className="error-message" />
              </label>
              <label className="custom-field">
                <input
                  type="text"
                  name="phone"
                  value={inputs.phone || ''}
                  onChange={handleChange}
                  placeholder="&nbsp;"
                />
                <span className="placeholder">Vendor Phone Number</span>
                <span className="error-message" />
              </label>
              <label className="custom-field">
                <input
                  type="text"
                  name="date"
                  value={`Date: ${today}`}
                  onChange={handleChange}
                  style={{ cursor: 'not-allowed' }}
                  disabled
                />
                <span className="placeholder" />
                <span className="error-message" />
              </label>
              <label className="custom-field">
                <input
                  type="text"
                  name="signature"
                  value={inputs.signature || ''}
                  onChange={handleChange}
                  placeholder="&nbsp;"
                />
                <span className="placeholder">Vendor Signature</span>
                <span className="error-message" />
              </label>
            </form>
          </div>
        </div>
        <div className="form-section">
          <div className="form-holder">
            <form onSubmit={handleSubmit}>
              <label className="custom-field">
                <input
                  type="text"
                  name="name"
                  value={inputs.name || ''}
                  onChange={handleChange}
                  placeholder="&nbsp;"
                />
                <span className="placeholder">Business Name</span>
                <span className="error-message" />
              </label>
              <label className="custom-field">
                <input
                  type="text"
                  name="description"
                  value={inputs.description || ''}
                  onChange={handleChange}
                  placeholder="&nbsp;"
                />
                <span className="placeholder">Business Description</span>
                <span className="error-message" />
              </label>
              <label className="custom-field">
                <input
                  type="text"
                  name="ownerName"
                  value={inputs.ownerName || ''}
                  onChange={handleChange}
                  placeholder="&nbsp;"
                />
                <span className="placeholder">Business Owner's Name</span>
                <span className="error-message" />
              </label>
              <input type="submit" className="button" value="Submit Form" />
            </form>
          </div>
        </div>
      </div>
      <div className="contract-section">
        <p>
          Vendor agrees to setup a booth for a
          <b style={{ color: '#538135' }}> NONREFUNDABLE </b>
          fee of $30 for a 10’x10’ space or $35 for a 12’x12’. Fees include
          promotion and accommodations to function properly. The market operates
          from 10 am to 4 pm; location being
          <b style={{ color: '#538135' }}> 1047 CR 465, Alice, TX. </b>. This is
          a one-day market. Booth setup will start at 8 am the morning of the
          event. Tear down of booths may begin at 3:30 pm unless the vendor
          advises management of a situation where you may need to leave early.
          You must provide your own tables, chairs or whatever you need to
          display your items. We are in a building that is NOT climate
          controlled, however, electricity is available. You may park near the
          large overhead doors to unload your merchandise then move your vehicle
          to the designated Vendor’s Parking Area. Please do not park in the
          areas across the overhead doors as this area is for shoppers. Please
          conduct your sales within your designated vendor space. Do not walk
          around the market trying to sell your items. The same applies to
          handing out food samples. Do so only from your vendor spaces. Please
          remember to click “Going” on our Facebook Event post and also Share
          the post. Also, while at the market, remember to “Check In” on social
          media, share your photos and invite your family and friends. We want
          you all to have a successful experience!
        </p>
        <h3
          style={{ fontWeight: '1000', fontSize: '24px', paddingLeft: '10px' }}
        >
          Vendor Payment Disclaimer:
        </h3>
        <p>
          Please note that if cancellation by vendor occurs for <b> ANY </b>
          reason after payment is submitted, we will <b> NOT </b> refund your
          payment, nor will it be used as credit towards future markets. We
          sympathize with any situation that is happening, but your attendance
          is crucial to the success of our events. In the event of bad weather,
          a refund will
          <b> NOT </b>
          be issued. Instead, a rain check will be offered to vendors for future
          events. If the vendor declines or cannot attend a new date for a
          market, a refund will <b>NOT</b> be provided, and rain check will be
          invalid for future events. Only in the case where we cancel will a
          refund be issued. Attendance for the entire market is crucial so
          please arrive early for your booth set up and stay for the duration of
          the market. Food and Beverage Vendors: It is advisable that a current
          food handlers permit and any county health permit required is in your
          possession.
        </p>
        <p style={{ color: '#538135', fontWeight: 'bold', fontSize: '20px' }}>
          Vendor spot will not be secured until this contract is signed,
          returned, and paid in full. Spaces are limited and secured on a first
          come first serve basis. Payment may be submitted using the following
          apps. Please contact us if you need to use another form of payment.
        </p>
        <div className="payment-methods">
          <label>Zelle: 361-533-2590 </label>
          <label>CashApp: $AlvaZambranoGAM </label>
          <label>PayPal: aiz72 @yahoo.com</label>
        </div>
        <p>{data}</p>
      </div>
    </div>
  );
}

export default Application;
