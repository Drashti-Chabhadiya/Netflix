'use client';

import React from 'react';
import Header from '../components/common/Header';
import Logo from '../components/common/Logo';
import HeaderButton from '../components/common/HeaderButton';
import MainBackground from '../components/common/MainBackground';
import SignInButton from '../components/common/SignInButton';
import LoginHelpBox from '../components/login/LoginHelpBox';

const page = () => {
  return (
    <MainBackground
      color="rgba(0, 0, 0, 0.5)"
      bgImage={'/assets/images/login-help-bg.jpg'}
      height={'100vh'}
    >
      <Header>
        <Logo
          width={{ xs: 100, md: 150 }}
          height={{
            xs: 30,
            md: 40,
          }}
        />
        <HeaderButton>
          <SignInButton />
        </HeaderButton>
      </Header>
      <LoginHelpBox />
    </MainBackground>
  );
};

export default page;
