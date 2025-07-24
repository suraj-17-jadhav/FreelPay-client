import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignIn from './screens/signIn/SignIn';
import SignUp from './screens/signup/SignUp';
import Dashboard from './screens/Dashboard/Dashboard';
import Client from './screens/client/Client';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route should redirect to /signin */}
        <Route path="/" element={<Navigate to="/signin" />} />

        {/* Sign In Route */}
        <Route path="/signin" element={<SignIn />} />

        {/* Sign Up Route */}
        <Route path="/signup" element={<SignUp />} />

        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;
