import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header} >
      <nav  className={styles.nav} >
        <ul  className={styles.navList} >
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/apply-loan">Apply for Loan</Link></li>
          <li><Link to="/loan-calculator">Loan Calculator</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;