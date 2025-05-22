"use client";
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react'

const SignInButton = () => {
  const router = useRouter();
  return (
    <Button
      variant="contained"
      onClick={() => {
        router.push("/login");
      }}
      sx={{
        backgroundColor: "#E50814",
        textTransform: "capitalize",
        textAlign: "center",
        py: "4px",
      }}>
      Sign In
    </Button>
  );
}

export default SignInButton
