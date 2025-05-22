import React from 'react';
import LoginModal from '../components/login/LoginModal';
import Header from '../components/common/Header';
import MainBackground from '../components/common/MainBackground';
import Logo from '../components/common/Logo';
import { Box } from '@mui/material';

const Login = () => {
  return (
    <MainBackground
      color="rgba(0, 0, 0, 0.5)"
      bgImage={'/assets/images/main-image.jpg'}
      height={'100vh'}
    >
      <Header>
        <Logo />
        <Box />
      </Header>
      <LoginModal />
    </MainBackground>
  );
};

export default Login;
