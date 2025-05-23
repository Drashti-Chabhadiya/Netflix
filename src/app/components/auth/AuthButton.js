'use client';

import { Button } from '@mui/material';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <p>Signed in as {session.user.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  //   return <button onClick={() => signIn('google')}>Sign in with Google</button>;
  return (
    <Button
      variant="contained"
      onClick={() => {
        signIn('google');
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
}
