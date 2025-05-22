'use client';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      src={'/assets/images/download-netflix.svg'}
      alt="logo"
      height={40}
      width={130}
      style={{
        width: 'auto',
        height: '40px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'start',
      }}
      onClick={() => router.push('/')}
    />
  );
};

export default Logo;
