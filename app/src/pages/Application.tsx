import { useState } from 'react';
import './Application.css';
import moment from 'moment';

function Application() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event: { target: { name?: any; value?: any } }) => {
    const { name } = event.target;
    const { value } = event.target;
    setInputs((values: any) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(inputs);
    // handler for email sending
  };

  const today = moment().startOf('day').format('MMM DD YYYY');

  // Business Name -
  // Business Description (what you sell) -
  // Business Owner’s Name -

  // Vendor Signature:                         Date:
  // Vendor email address:                         Vendor Phone #

  return (
    <>
      <h1>Green Acres Market of Alice, TX - Vendor Contract</h1>
      <h2>greenacresmarketcr465@gmail.com</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            Business Name :
            <input
              type="text"
              name="name"
              value={inputs.name || ''}
              onChange={handleChange}
            />
          </label>
          <label>
            Business Description (what you sell) :
            <input
              type="text"
              name="description"
              value={inputs.description || ''}
              onChange={handleChange}
            />
          </label>
          <label>
            Business Owner’s Name :
            <input
              type="text"
              name="ownerName"
              value={inputs.ownerName || ''}
              onChange={handleChange}
            />
          </label>
          <label>
            Vendor Signature:
            <input
              type="text"
              name="signature"
              value={inputs.signature || ''}
              onChange={handleChange}
            />
          </label>
          <label>
            Date:
            <input
              type="text"
              name="date"
              value={today}
              onChange={handleChange}
              disabled
            />
          </label>
          <label>
            Vendor Email Address:
            <input
              type="text"
              name="email"
              value={inputs.email || ''}
              onChange={handleChange}
            />
          </label>
          <label>
            Vendor Phone Number
            <input
              type="text"
              name="phone"
              value={inputs.phone || ''}
              onChange={handleChange}
            />
          </label>
          <input type="submit" />
        </form>
      </div>
      <p>
        Vendor agrees to setup a booth for a NONREFUNDABLE fee of $30 for a
        10’x10’ space or $35 for a 12’x12’. Fees include promotion and
        accommodations to function properly. The market operates from 10 am to 4
        pm; location being 1047 CR 465, Alice, TX. This is a one-day market.
        Booth setup will start at 8 am the morning of the event. Tear down of
        booths may begin at 3:30 pm unless vendor advises management of a
        situation where you may need to leave early. You must provide your own
        tables, chairs or whatever you need to display your items. We are in a
        building that is NOT climate controlled, however, electricity is
        available. You may park near the large overhead doors to unload your
        merchandise then move your vehicle to the designated Vendor’s Parking
        Area. Please do not park in the areas across the overhead doors as this
        area is for shoppers. Please conduct your sales within your designated
        vendor space. Do not walk around the market trying to sell your items.
        The same applies to handing out food samples. Do so only from your
        vendor spaces. Please remember to click “Going” on our Facebook Event
        post and also Share the post. Also, while at the market, remember to
        “Check In” on social media, share your photos and invite your family and
        friends. We want you all to have a successful experience! Vendor Payment
        Disclaimer: Please note that if cancellation by vendor occurs for ANY
        reason after payment is submitted, we will NOT refund your payment, nor
        will it be used as credit towards future markets. We sympathize with any
        situation that is happening, but your attendance is crucial to the
        success of our events. In the event of bad weather, a refund will NOT be
        issued. Instead, a rain check will be offered to vendors for future
        events. If vendor declines or cannot attend new date for market, a
        refund will NOT be provided, and rain check will be invalid for future
        events. Only in the case where we cancel will a refund be issued.
        Attendance for the entire market is crucial so please arrive early for
        your booth set up and stay for the duration of the market. Food and
        Beverage Vendors: It is advisable that a current food handlers permit
        and any county health permit required is in your possession. Vendor spot
        will not be secured until this contract is signed, returned, and paid in
        full. Spaces are limited and secured on a first come first serve basis.
        Payment may be submitted using the following apps. Please contact us if
        you need to use another form of payment. Zelle: 361-533-2590 CashApp:
        $AlvaZambranoGAM PayPal: aiz72 @yahoo.com
      </p>
    </>
  );
}

export default Application;
