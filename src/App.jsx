import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./screens/Layout";
import SignIn from "./screens/signIn/SignIn";
import SignUp from "./screens/signup/SignUp";
import Dashboard from "./screens/Layout";
import Client from "./screens/client/Client";
import Invoice from "./screens/invoice/Invoice";
import Payment from "./screens/payment/Payment";
import Report from "./screens/report/Report";
import Assistent from "./screens/aiAssistent/Assistent";
import Setting from "./screens/setting/Setting";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />}>
            
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="client" element={<Client />} />
            <Route path="invoice" element={<Invoice />} />
            <Route path="payment" element={<Payment />} />
            <Route path="report" element={<Report />} />
            <Route path="ai-assistant" element={<Assistent />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
      </AuthProvider>
    </Router>
  );
}

export default App;
