import { useState, useEffect, useRef } from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigationRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (navigationRef.current && !navigationRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleLinkClick = () => {
    setIsOpen(false); 
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = 'auto';
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav ref={navigationRef} className={`${styles.navigation} ${isOpen ? styles.active : ''}`}>
      <div className={styles.burgerMenu} onClick={toggleMenu}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.links}>
        <Link to="/" onClick={handleLinkClick}>Home</Link>
        <Link to="/products" onClick={handleLinkClick}>Our Products</Link>
        <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
        <Link to="/about" onClick={handleLinkClick}>About</Link>
        <Link to="/login" onClick={handleLinkClick}>Log in</Link>
        <Link to="/signup" onClick={handleLinkClick}>Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navigation;