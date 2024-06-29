import React, { useState } from 'react';
import Modal from 'react-modal';
import './Auth.css';

Modal.setAppElement('#root');

const Auth = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [loginOption, setLoginOption] = useState('');

  const handleOptionChange = (e) => {
    setLoginOption(e.target.value);
  };

  const handleLoginWithGoogle = () => {
    // Implement your Google login logic here
    console.log('Login with Google');
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      className="auth-modal"
      overlayClassName="auth-overlay"
    >
      <div className="auth-content">
        <h4>Select Login Option</h4>
        <div className="login-options">
          <label>
            <input
              type="checkbox"
              value="customer"
              checked={loginOption === 'customer'}
              onChange={handleOptionChange}
            />
            Customer/Patient
          </label>
          <label>
            <input
              type="checkbox"
              value="deliveryBoy"
              checked={loginOption === 'deliveryBoy'}
              onChange={handleOptionChange}
            />
            Delivery Boy
          </label>
          <label>
            <input
              type="checkbox"
              value="drugSeller"
              checked={loginOption === 'drugSeller'}
              onChange={handleOptionChange}
            />
            Drug Seller
          </label>
        </div>
        <button className="google-login-button" onClick={handleLoginWithGoogle}>
          Login with Google
        </button>
      </div>
    </Modal>
  );
};

export default Auth;
