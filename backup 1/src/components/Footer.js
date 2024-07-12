import React from 'react';
import verify from '../assets/verify.png'; // Adicione o logo na pasta assets

const Footer = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '70px'}}>
      <img src={verify} alt="Woovi Logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </div>
  );
};

export default Footer;