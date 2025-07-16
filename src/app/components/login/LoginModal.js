'use client';
import {
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import { StyledTextField } from '../common/texField/StyledTextField';

const LoginModal = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
        callbackUrl: '/',
      });
      if (res?.ok) {
        toast.success('Login successful');
        router.push('/');
      } else {
        toast.error(res?.error || 'Invalid credentials');
      }
    } catch (err) {
      toast.error('Something went wrong. Please try again later.');
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
                    <StyledTextField
                      {...field}
                      fullWidth
                      label="Email or mobile number"
                      variant="outlined"
                      id="outlined-basic"
                      error={!!errors.email}
                      helperText={errors.email ? errors.email.message : ''}
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
                    <StyledTextField
                      {...field}
                      fullWidth
                      label="Password"
                      type="password"
                      id="outlined-basic"
                      error={!!errors.password}
                      helperText={
                        errors.password ? errors.password.message : ''
                      }
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
