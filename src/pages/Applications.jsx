import { useState } from 'react';
import './Application.css';
import moment from 'moment';
import PhoneInput from 'react-phone-input-2';
import './general.css';
import ModalComponent from '../components/ModalComponent';
import './modal.css';
import * as htmlToImage from 'html-to-image';

function Application() {
  const today = moment().startOf('day').format('MMM DD YYYY');
  const [inputs, setInputs] = useState({
    email: '',
    ownerName: '',
    businessName: '',
    businessDescription: '',
    signature: false,
    phoneNumber: '',
    date: today,
  });

  const [data, setData] = useState('');
  const [error, setError] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [hasSigned, setHasSigned] = useState(false);

  const snap = () => {
    // Screenshot
    var node = document.getElementById('sig');
    htmlToImage
      .toPng(node)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        console.log(dataUrl);

        //needa get this dataUrl outside, but the img is correctly applying the return value
      })
      .catch(function (error) {
        console.error(error);
      });
      return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAv5JREFUaEPtmDmrFEEUhb8Hboio4C4q4gauKGaCkRsGgmjimoggLoFiZmAomIhooGIgZiIugQgKLmiouP0C/4Br7NrnUSXz+k1P3dvT7fTAVDYzp6rOuffUrVszRJ+PoT7nz0BArzM4yMAgA+kITAfuAeuAE8DN1ilNt9AM4EkmYE0g/Qc4BlyNIposQOSfAqtzSZKIo8A1fd9UAUXko5bfwCHZqYkCZobIr0ocj1/AwaYJEPlnwMr02R5GfGqSgFmB/AojecGeN0WA1Tat2j4Am5sgwGsbiRgm3wQLyTYqlVbPjyDf6zJaxvP/It/ri6wS8kUZWAScAz4CZ4Efjqpggc5V9QCWWcAB8z54/nN+Tv4QrwceAoqQxl1gD/DTsVkn6OzgeU+pHGWbomZuU+j6JucY3AH2ViBC5HVJLXcEQ5HfompTNCdmYD9wAxhbALwN7AN0fZcZ84JtljgmF9omn4HjwGVDYyeBh7NzoUbKM8qQfxc8/yW1kTLwHcjbpmjedeAIoJbWMuaHyC+2gAPGTF54CbgP7HRscAVQ1lIiFgTPe8i/DZ5PRj7ylYCJwKOsOmx0iLgEnOwgokzkTZ7Pc4yHeEoobyqj1nExs9+pNuAykS9FPlooctDj+QXgqdEXgNMtIkRel5QuQ+soTT4vQJ91S74EPL49D5wBlgYrLrQyB94Ez391zBkBbddOi4BEyMfW8Q2YBIyxTqiCfLsMxP0VTdlpjoOQB6pSqRt2VG/jWaSTAP2mvzPk52neRRN4V51P7Z16ka0NIqamFjL+Xin5VAYipw3A4+BxI8+2sMrJWwUIp/fnA2BCSQXuG9a6T8pCrevsANRaj7MuHnCvga3Zza1KVfnwCNDm20PvNN7IpLbIx/29AjRPjZ/eB0Vvh7j2K2BbXZHvRoDm7gJudRBRe+S7FdBJxH8j76lCRZbfHTIRWwj1Njqw5n7eeJYKYWXOQH4x2Umttf49OBBeeN3yMs+vQoB5szqAAwF1RNWz5iADnmjVge37DPwFRASGR52JQuMAAAAASUVORK5CYII=';
    // TEST SIGNATURE return 'data:image/png;base64,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';
  };
  const handleSignature = () => {
    setHasSigned(!hasSigned);
    setInputs({ ...inputs, signature: true });
    console.log('signed');
    snap();
    console.log(snap());
  };

  function isValidEmail(email) {
    return new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email);
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setInputs({ ...inputs, [e.target.name]: value });
    if (!isValidEmail(inputs.email)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleName = (e) => {
    const value = e.target.value.replace(/'[^a-z ]/gi, '');
    setInputs({ ...inputs, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    if (error == false) {
      e.preventDefault();
      inputs.date = today;
      const jsonData = JSON.stringify(inputs, null, 2);
      setInputs({ ...inputs });
      setData(jsonData);
      console.log(inputs.phoneNumber);
    } else {
      e.preventDefault();
      alert('Please fill out everything correctly.');
    }
    // error={value ? (isValidPhoneNumber(value) ? undefined : 'Invalid phone number') : 'Phone number required'}/>
  };

  const [cell, setCell] = useState('');

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
                  value={inputs.email}
                  onChange={handleChange}
                  placeholder="&nbsp;"
                />
                <span className="placeholder">Vendor Email Address</span>
                <span className="error-message" />
              </label>
              <label className="custom-field">
                <PhoneInput
                  country={'us'}
                  countryCodeEditable={false}
                  value={inputs.phoneNumber}
                  onChange={() =>
                    setInputs({ ...inputs, phoneNumber: inputs.phoneNumber })
                  }
                />
                <span className="error-message" />
              </label>
              <label className="custom-field">
                <input
                  type="text"
                  name="date"
                  value={inputs.date}
                  onChange={handleChange}
                  style={{ cursor: 'not-allowed' }}
                  disabled
                />
                <span className="placeholder" />
                <span className="error-message" />
              </label>
              <label className="custom-field">
                <ModalComponent
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  handlesignature={handleSignature}
                />
                {!hasSigned ? (
                  <div>
                    <input
                      type="text"
                      name="signature"
                      onClick={() => {
                        setModalShow(true);
                      }}
                      placeholder="&nbsp;"
                      readOnly
                    />
                    <span className="placeholder">Vendor Signature</span>
                    <span className="error-message" />
                  </div>
                ) : (
                  <div className="signature-container">
                    <img draggable={false} src={snap()}></img>
                  </div>
                )}
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
                  name="businessName"
                  value={inputs.businessName}
                  onChange={handleName}
                  placeholder="&nbsp;"
                />
                <span className="placeholder">Business Name</span>
                <span className="error-message" />
              </label>
              <label className="custom-field">
                <input
                  type="text"
                  name="businessDescription"
                  value={inputs.businessDescription || ''}
                  onChange={handleChange}
                  placeholder="&nbsp;"
                />
                <span className="placeholder">Business Description</span>
                <span className="error-message" />
              </label>
              <label className="custom-field" id="h">
                <input
                  type="text"
                  name="ownerName"
                  value={inputs.ownerName}
                  onChange={handleName}
                  placeholder="&nbsp;"
                />
                <span className="placeholder">Business Owner's Name</span>
                <span className="error-message" />
              </label>
              <input type="submit" className="button" value="Submit" />
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
          <label>PayPal: aiz72@yahoo.com</label>
        </div>
        <pre>
          <p>{data}</p>
        </pre>
      </div>
    </div>
  );
}

export default Application;