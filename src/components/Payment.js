import React, { useState } from 'react';
import './payment.css';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleCardNameChange = (event) => {
    setCardName(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send payment information to the server
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card Number:
        <input type="text" value={cardNumber} onChange={handleCardNumberChange} />
      </label>
      <br />
      <label>
        Card Name:
        <input type="text" value={cardName} onChange={handleCardNameChange} />
      </label>
      <br />
      <label>
        Expiry Date:
        <input type="text" value={expiryDate} onChange={handleExpiryDateChange} />
      </label>
      <br />
      <label>
        CVV:
        <input type="text" value={cvv} onChange={handleCvvChange} />
      </label>
      <br />
      <button type="submit">Submit Payment</button>
    </form>
  );
};

export default PaymentPage;
