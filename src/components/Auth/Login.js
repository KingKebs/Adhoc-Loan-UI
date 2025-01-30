import React, { useState } from 'react';
import axios from 'axios';
import config from '../../Config';
import styles from './Login.module.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const [error, setError] = useState(''); // Add this line for error state
  const [loading, setLoading] = useState(false); // Optional: Add loading state

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    setError(''); // Clear any previous errors
    setLoading(true); // Optional: Set loading state

    try {
        const res = await axios.post(`${config.apiBaseUrl}/auth/login`, formData);
      console.log(res.data);
      localStorage.setItem('token', res.data.token);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Login</h2>
      <form onSubmit={onSubmit}>
        <div className={styles.formGroup}>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Email"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <input
            className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Password"
            required
          />
        </div>
        {error && <div className={styles.error}>{error}</div>}
        <button className={styles.button} type="submit" disabled={loading} >Login</button>
      </form>
    </div>
  );
};

export default Login;