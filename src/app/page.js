'use client';
import { Box, Container } from '@mui/material';
import LandingPage from './pages/LandingPage';
import TrendingPage from './pages/TrendingPage';
import MoreReasons from './pages/MoreReasons';
import FAQAskedQuestions from './pages/FAQAskedQuestions';
import 'animate.css';

export default function Home() {
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
    </Box>
  );
}
