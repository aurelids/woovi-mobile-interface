import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import wooviLogo from '../assets/woovi-logo.png'; // Adicione o logo na pasta assets

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0} style={{ boxShadow: 'none' }}>
      <Toolbar style={{ justifyContent: 'center', backgroundColor: 'transparent', paddingTop: 36}}>
        <img src={wooviLogo} alt="Woovi Logo" style={{ width: 123.51, height: 36.65 }} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
