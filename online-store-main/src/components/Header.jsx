import React, { useState } from "react";
import "./../styles.css";

const Header = ({ onSearch }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const toggleMenu = () => setMobileOpen(!mobileOpen);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch?.(searchValue);
    }
  };

  return (
    <header className="site-header">
      <div className="container header-wrap">
        <div className="left">
          <button className="menu-btn md:hidden" onClick={toggleMenu} aria-label="Toggle navigation">
            ☰
          </button>
          <span className="logo">LuminaStore</span>
        </div>

        <nav className={`nav ${mobileOpen ? "open" : ""}`}>
          <a href="#" className="nav-link">Shop</a>
          <a href="#" className="nav-link">Account</a>
          <a href="#" className="nav-link">Contact Us</a>
        </nav>

        <div className="right">
          <input
            type="text"
            placeholder="Search products"
            className="search-input"
            value={searchValue}
            onChange={(e)=>setSearchValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="icon-btn" aria-label="Cart">
            🛒 <span className="cart-count">0</span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mobile-nav">
          <a href="#" onClick={toggleMenu}>Shop</a>
          <a href="#" onClick={toggleMenu}>Account</a>
          <a href="#" onClick={toggleMenu}>Contact Us</a>
        </div>
      )}
    </header>
  );
};

export default Header;