import React, { useState } from 'react';
import {
  Drawer,
  IconButton,
  Box,
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemIcon,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import LanguageBtn from './LanguageBtn';
import SignInButton from './SignInButton';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '@/app/redux/slice/userSlice';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { getFallbackLetter } from '@/app/utils/helper/getFallbackLetter';

const MobileDrawer = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const userData = useSelector((state) => state.user.userData);
  const isLoggedIn = Boolean(userData?.user);

  const toggleDrawer = (state) => () => setOpen(state);

  const handleLogOut = () => {
    dispatch(logOutUser());
    signOut({ callbackUrl: '/' });
    setOpen(false);
  };

  const handleNavigate = (path) => {
    router.push(path);
    setOpen(false);
  };

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
            backgroundColor: '#181818',
            color: 'white',
            boxShadow: '0px 2px 8px rgba(0,0,0,0.7)',
          },
        }}
      >
        <Box sx={{ padding: 2 }} role="presentation">
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={toggleDrawer(false)} sx={{ color: 'white' }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            <ListItem>
              <LanguageBtn height="32px" />
            </ListItem>

            {!isLoggedIn && (
              <ListItem>
                <SignInButton />
              </ListItem>
            )}

            <ListItem button onClick={() => handleNavigate('/')}>
              {/* <ListItemIcon sx={{ color: 'white' }}> */}
              <HomeIcon
                sx={{
                  marginRight: 1,
                }}
              />
              {/* </ListItemIcon> */}
              <ListItemText primary="Home" />
            </ListItem>

            {isLoggedIn && (
              <ListItem button onClick={() => handleNavigate('/profile')}>
                <Avatar
                  src={userData?.user?.image || ''}
                  alt={userData?.user?.name || 'User'}
                  sx={{
                    width: 24,
                    height: 24,
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    bgcolor: '#333',
                    fontSize: 14,
                    marginRight: 1,
                  }}
                >
                  {!userData?.user?.image &&
                    getFallbackLetter(userData?.user?.email)}
                </Avatar>
                <ListItemText primary="Profile" />
              </ListItem>
            )}

            <ListItem button>
              {/* <ListItemIcon sx={{ color: 'white' }}> */}
              <SettingsIcon
                sx={{
                  marginRight: 1,
                }}
              />
              {/* </ListItemIcon> */}
              <ListItemText primary="Settings" />
            </ListItem>

            {isLoggedIn && (
              <ListItem button onClick={handleLogOut}>
                {/* <ListItemIcon sx={{ color: 'white' }}> */}
                <LogoutIcon
                  sx={{
                    marginRight: 1,
                  }}
                />
                {/* </ListItemIcon> */}
                <ListItemText primary="Logout" />
              </ListItem>
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
