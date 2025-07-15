import React from 'react';
import Header from '../components/common/Header';
import LandingPageContent from '../components/landingPage/LandingPageContent';
import MainBackground from '../components/common/MainBackground';
import Logo from '../components/common/Logo';
import HeaderButton from '../components/common/HeaderButton';
import SignInButton from '../components/common/SignInButton';
import LanguageBtn from '../components/common/LanguageBtn';


const LandingPage = () => {
  return (
    <MainBackground
      color="rgba(0, 0, 0, 0.7)"
      bgImage={'/assets/images/main-image.jpg'}
      height={'600px'}
    >
      <Header padding={9}>
        <Logo
          width={{ xs: 100, md: 150 }}
          height={{
            xs: 30,
            md: 40,
          }}
        />
        <HeaderButton>
          <LanguageBtn height={'32px'} />
          <SignInButton />
        </HeaderButton>
      </Header>
      <LandingPageContent />
    </MainBackground>
  );
};

export default LandingPage;
