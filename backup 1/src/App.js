import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaymentPage from './pages/PaymentPage';
import QRCodePage from './pages/QRCodePage';
import CardPaymentPage from './pages/CardPaymentPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaymentPage />} />
        <Route path="/qr-code" element={<QRCodePage />} />
        <Route path="/card-payment" element={<CardPaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;