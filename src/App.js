import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaymentPage from './pages/PaymentPage';
import QRCodePage from './pages/QRCodePage';
import CardPaymentPage from './pages/CardPaymentPage';

function App() {
  return (
    <Router basename="/woovi-mobile-interface">
      <Routes>
        <Route path="/" element={<PaymentPage />} />
        <Route path="/qrcode" element={<QRCodePage />} />
        <Route path="/cartao" element={<CardPaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;