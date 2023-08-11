/* eslint-disable no-unused-vars */
import React from 'react';
import visa from '../../assets/images/visa.svg';
import mastercard from '../../assets/images/mastercard.svg';
import stripe from '../../assets/images/stripe.png';
import discover from '../../assets/images/discover.svg';
import playsafecard from '../../assets/images/paysafecard.svg';
import logo from '/logo.png';
import { Link } from 'react-router-dom';
import BgImage from '../../assets/images/background.jpg';

const Footer = () => {
  return (
    <>
      <footer
        className="footer p-10 bg-base-200 text-gray-200"
        style={{
          backgroundImage: `url(${BgImage})`,
        }}>
        <div>
          <img src={logo} alt="a2gc.co" />
          <p>
            NetflixBuy
            <br />
            Providing reliable service since 2020
          </p>
        </div>

        <div>
          <span className="footer-title">Company</span>
          <Link to="/about_us" className="link link-hover">
            About us
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to="/terms" className="link link-hover">
            Terms of use
          </Link>
          <Link to="/terms" className="link link-hover">
            Privacy policy
          </Link>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-white text-base-content border-base-300">
        <div className="items-center grid-flow-col">
          <img src={stripe} alt="visa" className="w-10" />
          <p className="text-gray-800">
            Pay with security <br />
            Trusted and verified from Stripe
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <img src={visa} alt="visa" className="w-10" />
            <img src={mastercard} alt="visa" className="w-16" />
            <img src={discover} alt="visa" className="w-10" />
            <img src={playsafecard} alt="visa" className="w-14" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
