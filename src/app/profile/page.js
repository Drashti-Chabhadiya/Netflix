import React from 'react';
import Header from '../components/common/Header';
import MainBackground from '../components/common/MainBackground';
import Logo from '../components/common/Logo';
import { Box } from '@mui/material';
import UserProfile from '../components/userProfile/UserProfile';

const Login = () => {
  
  return (
    <MainBackground
      color="rgba(0, 0, 0, 0.5)"
      bgImage={'/assets/images/main-image.jpg'}
      height={'100vh'}
      mainBgColor={true}
    >
      <Header>
        <Logo
          width={{ xs: 100, md: 150 }}
          height={{
            xs: 30,
            md: 40,
          }}
        />
        <Box />
      </Header>
      <UserProfile />
    </MainBackground>
  );
};

export default Login;
