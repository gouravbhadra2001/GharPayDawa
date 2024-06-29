// TrailingIcons.js
import React, { useState, useContext } from 'react';
import cart from '../../../assets/cart3.png';
import offers from '../../../assets/offers2.png';
import authIcon from '../../../assets/auth3.png';
import './TrailingIcons.css';
import { AuthContext } from '../../../AuthContext'; // Adjust the path as necessary
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth as firebaseAuth } from '../../../firebaseConfig'; // Adjust the path as necessary
import { NavLink } from 'react-router-dom';

const provider = new GoogleAuthProvider();

const TrailingIcons = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loginOption, setLoginOption] = useState('');
  const { authData, setAuthData } = useContext(AuthContext);

  const handleAuthClick = () => {
    setModalIsOpen(true);
  };

  const handleClose = () => {
    setModalIsOpen(false);
  };

  const handleLoginWithGoogle = () => {
    signInWithPopup(firebaseAuth, provider)
      .then((result) => {
        const user = result.user;
        const userData = {
          loggedAs: loginOption,
          mail: user.email,
          name: user.displayName,
          others: { additionalInfo: "Some info", photoURL: user.photoURL }
        };
        setAuthData(userData);
        console.log('Login with Google as:', userData);
        handleClose();
      })
      .catch((error) => {
        console.error("Error during sign in:", error);
      });
  };

  const handleOptionChange = (e) => {
    setLoginOption(e.target.value);
  };

  return (
    <div className='topAppBarTrainlingIcons' id='topAppBarTrailingIcons'>
      <img height={30} width={30} src={cart} alt="Cart" />
      <img height={25} width={25} src={offers} alt="Offers" />
      {authData ? (
        <a  href = "/profile"><img height={25} width={25} src={authData.others.photoURL} alt="Avatar"/></a>
      ) : (
        <img height={25} width={25} src={authIcon} alt="Auth" onClick={handleAuthClick} />
      )}



      {modalIsOpen && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">Select Login Option</h5>
                <button type="button" className="close" aria-label="Close" onClick={handleClose}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="loginOption"
                    value="customer"
                    id="customerRadio"
                    checked={loginOption === 'customer'}
                    onChange={handleOptionChange}
                  />
                  <label className="form-check-label" htmlFor="customerRadio">
                    Customer/Patient
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="loginOption"
                    value="deliveryBoy"
                    id="deliveryBoyRadio"
                    checked={loginOption === 'deliveryBoy'}
                    onChange={handleOptionChange}
                  />
                  <label className="form-check-label" htmlFor="deliveryBoyRadio">
                    Delivery Boy
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="loginOption"
                    value="drugSeller"
                    id="drugSellerRadio"
                    checked={loginOption === 'drugSeller'}
                    onChange={handleOptionChange}
                  />
                  <label className="form-check-label" htmlFor="drugSellerRadio">
                    Drug Seller
                  </label>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={handleLoginWithGoogle}>
                  Login with Google
                </button>
                <button type="button" className="btn btn-secondary" onClick={handleClose}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

    
  );
};

export default TrailingIcons;
