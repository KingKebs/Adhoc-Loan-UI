// src/components/Loan/ApplyLoan.js
import React from 'react';
import { useLoan } from '../../context/LoanContext';
import axios from 'axios';

const LoanForm = () => {
  const { state, dispatch } = useLoan();
  const { loanAmount, purpose, error, loading, success } = state;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!loanAmount || !purpose) {
      dispatch({ type: 'SET_ERROR', payload: 'Please fill in all fields.' });
      return;
    }

    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'SET_ERROR', payload: '' });

      // Example API call
      const response = await axios.post('/api/loans/apply', {
        loanAmount,
        purpose
      });

      dispatch({ type: 'SET_SUCCESS', payload: true });
      dispatch({ type: 'RESET_FORM' });

      // You might want to show a success message or redirect
      console.log('Loan Application Successful:', response.data);

    } catch (err) {
      dispatch({
        type: 'SET_ERROR',
        payload: err.response?.data?.message || 'Failed to submit loan application'
      });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Apply for a Loan</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Loan application submitted successfully!</p>}

      <div>
        <label>Loan Amount:</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => dispatch({
            type: 'SET_LOAN_AMOUNT',
            payload: e.target.value
          })}
          placeholder="Enter loan amount"
          disabled={loading}
        />
      </div>

      <div>
        <label>Purpose:</label>
        <input
          type="text"
          value={purpose}
          onChange={(e) => dispatch({
            type: 'SET_PURPOSE',
            payload: e.target.value
          })}
          placeholder="Enter loan purpose"
          disabled={loading}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default LoanForm;
