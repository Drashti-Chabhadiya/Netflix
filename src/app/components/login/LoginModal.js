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
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const LoginModal = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
      callbackUrl: '/',
    });
    console.log('res in onSubmit:', res);
    if (res?.ok) {
      router.push('/');
    }
  };

  const handleLoginWithGoogle = async () => {
    try {
      await signIn('google', {
        callbackUrl: '/',
        prompt: 'select_account',
      });
    } catch (error) {
      console.error('Error during Google sign-in:', error);
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: {
          xs: '0px !important',
        },
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
          bgcolor: {
            xs: 'black',
            sm: 'rgba(0, 0, 0, 0.7)',
          },
          color: 'white',
          border: '2px solid #000',
          p: 7,
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          {' '}
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
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: 'Email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Email pattern
                      message: 'Invalid email address',
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      id="outlined-basic"
                      label="Email or mobile number"
                      variant="outlined"
                      error={!!errors.email}
                      helperText={errors.email ? errors.email.message : ''}
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
                    />
                  )}
                />
              </Grid>

              <Grid size={12}>
                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters',
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      type="password"
                      error={!!errors.password}
                      helperText={
                        errors.password ? errors.password.message : ''
                      }
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
                    />
                  )}
                />
              </Grid>

              <Grid size={12}>
                <Button
                  variant="contained"
                  type="submit"
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
                  onClick={handleLoginWithGoogle}
                >
                  <Image
                    src="/assets/images/google.png"
                    alt="Google Icon"
                    width={20}
                    height={20}
                    style={{ marginRight: '8px' }}
                  />
                  Sign in with Google
                </Button>
              </Grid>
              <Grid size={12}>
                <Link
                  href="/loginHelp"
                  style={{ textDecoration: 'none', color: 'white' }}
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
                    Forgot password?
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
              This page is protected by Google reCAPTCHA to ensure you&apos;re
              not a bot.
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
        </form>
      </Box>
    </Container>
  );
};

export default LoginModal;
