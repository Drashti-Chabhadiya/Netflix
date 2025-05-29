'use client';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useDispatch } from 'react-redux';
import { logOutUser } from '@/app/redux/slice/userSlice';

const SignInButton = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data: session } = useSession();

  const handleLogOut = () => {
    dispatch(logOutUser());
    signOut({ callbackUrl: '/' });
  };

  if (session) {
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
      }}
    >
      Sign In
    </Button>
  );
};

export default SignInButton;
