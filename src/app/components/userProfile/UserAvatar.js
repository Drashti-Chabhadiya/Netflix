'use client';
import React, { useState } from 'react';
import { Box, IconButton, Tooltip, Avatar } from '@mui/material';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import UserProfile from './UserProfile';

const UserAvatar = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const [openProfile, setOpenProfile] = useState(false);

  const getFallbackLetter = (email) => {
    return email?.charAt(0)?.toUpperCase() || '?';
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '60%',
        right: 0,
        transform: 'translateY(-60%)',
        zIndex: 1300,
        backgroundColor: 'white',
        borderTopLeftRadius: '999px',
        borderBottomLeftRadius: '999px',
        width: 50,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 3,
        cursor: 'pointer',
      }}
    >
      <Tooltip title={user?.email || 'User Avatar'}>
        <IconButton onClick={() => setOpenProfile(true)} sx={{ p: 0 }}>
          {user?.image ? (
            <Image
              src={user?.image}
              alt="User Avatar"
              width={24}
              height={24}
              style={{ width: 24, height: 24, borderRadius: '50%' }}
            />
          ) : (
            <Avatar sx={{ width: 24, height: 24, fontSize: 12 }}>
              {getFallbackLetter(user?.email || '')}
            </Avatar>
          )}
        </IconButton>
      </Tooltip>
      <UserProfile openProfile={openProfile} setOpenProfile={setOpenProfile} />
    </Box>
  );
};

export default UserAvatar;
