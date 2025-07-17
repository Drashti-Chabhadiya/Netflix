'use client';
import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Divider,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { logOutUser } from '@/app/redux/slice/userSlice';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { getFallbackLetter } from '@/app/utils/helper/getFallbackLetter';

const UserAvatar = ({ user }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleLogout = () => {
    handleMenuClose();
    dispatch(logOutUser());
    signOut({ callbackUrl: '/' });
  };

  const handleProfileUpdate = () => {
    handleMenuClose();
    router.push('/profile');
  };

  const menuOptions = [
    {
      label: 'Update Profile',
      action: handleProfileUpdate,
      color: 'white',
      backgroundColor: '#333',
    },
    {
      label: 'Logout',
      action: handleLogout,
      color: '#E50914',
      backgroundColor: '#3a0000',
    },
  ];

  return (
    <>
      <IconButton onClick={handleMenuOpen} sx={{ p: 0 }}>
        <Avatar
          src={user?.image || ''}
          alt={user?.name || 'User'}
          sx={{
            width: 36,
            height: 36,
            border: '2px solid rgba(255, 255, 255, 0.3)',
            bgcolor: '#333',
            fontSize: '14px',
          }}
        >
          {!user?.image && getFallbackLetter(user?.email || '')}
        </Avatar>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        disableScrollLock={true}
        PaperProps={{
          sx: {
            backgroundColor: '#181818',
            color: 'white',
            borderRadius: '8px',
            minWidth: 180,
            boxShadow: '0px 2px 8px rgba(0,0,0,0.7)',
          },
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Box sx={{ px: 2, py: 1 }}>
          <Typography variant="subtitle2" color="gray">
            Signed in as
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            {user?.name}
          </Typography>
        </Box>

        <Divider sx={{ borderColor: '#333' }} />

        {menuOptions.map((option, index) => (
          <MenuItem
            key={index}
            onClick={option.action}
            sx={{
              color: option.color,
              '&:hover': { backgroundColor: option.backgroundColor },
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default UserAvatar;
