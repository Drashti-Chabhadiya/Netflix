'use client';
import { Box, Container } from '@mui/material';
import LandingPage from './pages/LandingPage';
import TrendingPage from './pages/TrendingPage';
import MoreReasons from './pages/MoreReasons';
import FAQAskedQuestions from './pages/FAQAskedQuestions';
import UserAvatar from './components/userProfile/UserAvatar';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <Box>
      <LandingPage />
      <Box
        sx={{ backgroundColor: 'black', paddingTop: '2rem', color: 'white' }}
      >
        <Container maxWidth={'lg'}>
          <TrendingPage />
          <MoreReasons />
          <FAQAskedQuestions />
        </Container>
      </Box>
      {session?.user && <UserAvatar />}
    </Box>
  );
}
