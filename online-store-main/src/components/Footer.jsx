import React from "react";
import "./../styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h3 className="brand-name">LuminaStore</h3>
          <p className="brand-desc">
            Your one‑stop destination for premium modern goods.
            We source the finest materials to bring you quality products.
          </p>
        </div>

        <div className="footer-cols">
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Store Locations</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Contact Support</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <ul className="social">
              <li><a href="#">FB</a></li>
              <li><a href="#">IG</a></li>
              <li><a href="#">TW</a></li>
            </ul>

            <h4 className="pay-title">Payment</h4>
            <ul className="payment">
              <li>VISA</li>
              <li>MC</li>
              <li>UPI</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Lumina Store Inc. All rights reserved.</p>
        <div className="legal">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;