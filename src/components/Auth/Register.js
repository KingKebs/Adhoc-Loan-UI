import React, { useState } from 'react';
import axios from 'axios';
import config from '../../Config';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone_number: ''
  });

  const { username, email, password, phone_number } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
        const res = await axios.post(`${config.apiBaseUrl}/auth/register`, formData);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="username" value={username} onChange={onChange} placeholder="Username" required />
      <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
      <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
      <input type="text" name="phone_number" value={phone_number} onChange={onChange} placeholder="Phone Number" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;