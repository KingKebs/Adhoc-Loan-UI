import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
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