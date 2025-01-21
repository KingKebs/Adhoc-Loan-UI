import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Dashboard from './components/Dashboard/Dashboard';
import ApplyLoan from './components/Loan/ApplyLoan';
import LoanCalculator from './components/Loan/LoanCalculator';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/apply-loan" component={ApplyLoan} />
        <Route path="/loan-calculator" component={LoanCalculator} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;