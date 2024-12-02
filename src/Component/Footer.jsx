import React from 'react';
import './footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h2 className="footer__logo">Our Sponsor MovieMate</h2>
          <p className="footer__description">
            Discover your next favorite movie with MovieMate. Personalized recommendations, top picks, and trending movies all in one place. Full Masti...
          </p>
        </div>

        <div className="footer__section">
          <h3 className="footer__heading">Quick Links</h3>
          <ul className="footer__links">
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer__section">
          <h3 className="footer__heading">Follow Us</h3>
          <div className="footer__socials">
            <a href="https://www.facebook.com/profile.php?id=100087289724035" className="footer__social"><FaFacebookF /></a>
            <a href="https://x.com/iAmRounakBakshi" className="footer__social"><FaTwitter /></a>
            <a href="https://www.instagram.com/pradipta_banerjee30/" className="footer__social"><FaInstagram /></a>
            <a href="https://www.youtube.com/" className="footer__social"><FaYoutube /></a>
          </div>
        </div>

        <div className="footer__section">
          <h3 className="footer__heading">Subscribe! It doesn't cost Money..</h3>
          <p>Get the latest updates and movie recommendations.</p>
          <form className="footer__form">
            <input type="email" placeholder="Enter your email" className="footer__input" />
            <button type="submit" className="footer__button">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© 2024 Watch a good movie. All rights reserved.</p>
        <p className='lastText'>Made by Rounak Bakshi & Pradipta Banerjee</p>
      </div>
    </footer>
  );
};

export default Footer;
