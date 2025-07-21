import React from 'react';
import Header from '../components/common/Header';
import LandingPageContent from '../components/landingPage/LandingPageContent';
import MainBackground from '../components/common/MainBackground';
import Logo from '../components/common/Logo';
import HeaderButton from '../components/common/HeaderButton';
import SignInButton from '../components/common/SignInButton';
import LanguageBtn from '../components/common/LanguageBtn';
import UserAvatar from '../components/userProfile/UserAvatar';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import MobileDrawer from '../components/common/MobileDrawer';

const LandingPage = () => {
  const userData = useSelector((state) => state.user.userData);
  const isLoggedIn = !!userData?.user;

  return (
    <MainBackground
      color="rgba(0, 0, 0, 0.7)"
      bgImage={'/assets/images/main-image.jpg'}
      height={'600px'}
    >
      <Header padding={9}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          flexDirection="row"
        >
         <Logo
          width={{ xs: 100, md: 150 }}
          height={{
            xs: 30,
            md: 40,
          }}
        />

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <HeaderButton>
              <LanguageBtn height={'32px'} />
              {isLoggedIn ? (
                <UserAvatar user={userData.user} />
              ) : (
                <SignInButton />
              )}
            </HeaderButton>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
            <MobileDrawer />
          </Box>
        </Box>
      </Header>

      <LandingPageContent />
    </MainBackground>
  );
};

export default LandingPage;
