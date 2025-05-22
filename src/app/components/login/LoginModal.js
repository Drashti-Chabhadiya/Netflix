'use client';
import {
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';

const LoginModal = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: {
          sm: '100%',
          md: 480,
        },
      }}
    >
      <Box
        sx={{
          bgcolor: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          border: '2px solid #000',
          p: 7,
        }}
      >
        <Box>
          <Grid container spacing={2}>
            <Grid size={12}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  textAlign: 'start',
                }}
              >
                Sign In
              </Typography>
            </Grid>
            <Grid size={12}>
              <TextField
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: '2px solid rgba(255, 255, 255, 0.7)',
                      borderRadius: '8px',
                    },
                    '&:hover fieldset': {
                      border: '2px solid rgba(255, 255, 255, 0.7)',
                      borderRadius: '8px',
                    },
                    '&.Mui-focused fieldset': {
                      border: '2px solid white',
                      borderRadius: '8px',
                    },
                  },
                  '& #outlined-basic-label': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                  '& .MuiOutlinedInput-input ': {
                    color: 'white',
                  },
                }}
                id="outlined-basic"
                label="Email or mobile number"
                variant="outlined"
              />
            </Grid>
            <Grid size={12}>
              <TextField
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: '2px solid rgba(255, 255, 255, 0.7)',
                      borderRadius: '8px',
                    },
                    '&:hover fieldset': {
                      border: '2px solid rgba(255, 255, 255, 0.7)',
                      borderRadius: '8px',
                    },
                    '&.Mui-focused fieldset': {
                      border: '2px solid white',
                      borderRadius: '8px',
                    },
                  },
                  '& #outlined-basic-label': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                  '& .MuiOutlinedInput-input ': {
                    color: 'white',
                  },
                }}
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
            </Grid>
            <Grid size={12}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#E50814',
                  textTransform: 'capitalize',
                  fontSize: '1rem',
                  fontWeight: 500,
                  width: '100%',
                  minHeight: '2.5rem',
                }}
              >
                Sign in
              </Button>
            </Grid>
            <Grid size={12}>
              <Typography
                component={'p'}
                sx={{
                  fontSize: '1rem',
                  fontWeight: 400,
                  textAlign: 'center',
                  color: 'rgba(255, 255, 255, 0.7)',
                  textTransform: 'uppercase',
                }}
              >
                or
              </Typography>
            </Grid>
            <Grid size={12}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'rgba(128, 128, 128, 0.4)',
                  fontSize: '1rem',
                  textTransform: 'none',
                  fontWeight: 500,
                  width: '100%',
                  minHeight: '2.5rem',
                }}
              >
                Use a sign-in code
              </Button>
            </Grid>
            <Grid size={12}>
              <Link
                href="/loginHelp"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '0.875rem',
                    fontWeight: 400,
                    textAlign: 'center',
                    fontSize: '1rem',
                    textDecoration: 'underline',
                    '&:hover': {
                      color: 'rgba(255, 255, 255, 0.7)',
                    },
                  }}
                >
                  Forgot password?{' '}
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.25,
              my: 1,
            }}
          >
            <Checkbox
              defaultChecked
              sx={{
                '&.Mui-checked': {
                  color: 'white',
                },

                '& .MuiSvgIcon-root': {
                  color: 'white',
                },
              }}
            />
            <Typography
              sx={{
                fontSize: '0.875rem',
                fontWeight: 400,
                textAlign: 'center',
                fontSize: '1rem',
              }}
            >
              Remember me
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: '0.875rem',
              fontWeight: 400,
              fontSize: '1rem',
              color: 'rgba(255, 255, 255, 0.7)',
              mb: 1,
            }}
          >
            New to Netflix?{' '}
            <Link
              href="/"
              style={{
                color: 'white',
              }}
            >
              {' '}
              Sign up now.
            </Link>
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: '0.8125rem',
              color: 'rgba(255, 255, 255, 0.5)',
            }}
          >
            This page is protected by Google reCAPTCHA to ensure you&apos;re not
            a bot.
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: '0.8125rem',
              color: 'rgb(68, 142, 244)',
              textDecoration: 'underline',
            }}
          >
            Learn more.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginModal;
