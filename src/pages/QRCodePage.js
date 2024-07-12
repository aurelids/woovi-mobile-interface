import React from 'react';
import Header from '../components/Header';
import QRCodePayment from '../components/QRCodePayment';
import Footer from '../components/Footer';

const QRCodePage = () => {
  return (
    <>
      <Header />
      <QRCodePayment />
      <Footer />
    </>
  );
};

export default QRCodePage;