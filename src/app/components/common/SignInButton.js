'use client';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useSession, signOut } from 'next-auth/react';

const SignInButton = () => {
  const router = useRouter();
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {/* <p>Signed in as {session.user.email}</p> */}
        <Button
          variant="contained"
          onClick={() => {
            signOut({ callbackUrl: '/' });
          }}
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
