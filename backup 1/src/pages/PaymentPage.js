import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PaymentOptions from '../components/PaymentOptions';

const PaymentPage = () => {
  return (
    <>
      <Header />
      <PaymentOptions name="João" />
      <Footer />
    </>
  );
};

export default PaymentPage;