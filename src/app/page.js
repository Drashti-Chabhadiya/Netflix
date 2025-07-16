'use client';
import { Box, Container } from '@mui/material';
import LandingPage from './pages/LandingPage';
import TrendingPage from './pages/TrendingPage';
import MoreReasons from './pages/MoreReasons';
import FAQAskedQuestions from './pages/FAQAskedQuestions';
import UserAvatar from './components/userProfile/UserAvatar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setUser } from './redux/slice/userSlice';
import { useSession } from 'next-auth/react';

export default function Home() {
  const userData = useSelector((state) => state.user.userData);
  const { data: session } = useSession();

  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (userData?.user) {
  //     dispatch(fetchUserById(userData.user.id));
  //   }
  // }, [userData?.user?.id, dispatch]);

  useEffect(() => {
    if (session?.user) {
      dispatch(
        setUser({
          user: {
            id: session.user.id,
            email: session.user.email,
            name: session.user.name,
            image: session.user.image,
            token: session.user.token,
          },
        })
      );
    }
  }, [session, dispatch]);

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
      {userData?.user && <UserAvatar />}
    </Box>
  );
}
