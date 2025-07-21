'use client';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';
import { signOut } from 'next-auth/react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '@/app/redux/slice/userSlice';

const SignInButton = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  const handleLogOut = () => {
    dispatch(logOutUser());
    signOut({ callbackUrl: '/' });
  };

  if (userData?.user) {
    return (
      <>
        {/* <p>Signed in as {session.user.email}</p> */}
        <Button
          variant="contained"
          onClick={handleLogOut}
          sx={{
            backgroundColor: '#E50814',
            textTransform: 'capitalize',
            textAlign: 'center',
            py: '4px',
          }}
        >
          Sign out
        </Button>
      </>
    );
  }

  return (
    <Button
      variant="contained"
      onClick={() => {
        router.push('/login');
      }}
      sx={{
        backgroundColor: '#E50814',
        textTransform: 'capitalize',
        textAlign: 'center',
        py: '4px',
          minWidth: { xs: 50, sm: 120 },
      }}
    >
      Sign In
    </Button>
  );
};

export default SignInButton;
