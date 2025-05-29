'use client';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';

const LoginHelpBox = () => {
  const [resetType, setResetType] = useState('email');

  const handleChange = (event) => {
    setResetType(event.target.value);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        position: 'absolute',
        top: {
          xs: 'auto',
          sm: '50%',
        },
        left: {
          xs: 'auto',
          sm: '50%',
        },
        transform: {
          xs: 'none',
          sm: 'translate(-50%, -50%)',
        },
        width: {
          sm: '100%',
          md: 480,
        },
      }}
    >
      <Box>
        <Box
          sx={{
            bgcolor: 'rgb(242, 242, 242)',
            color: 'rgb(0, 0, 0)',
            border: '2px solid #000',
            p: 5,
          }}
        >
          <Stack spacing={2}>
            <Typography
              variant="body"
              sx={{
                fontSize: '2rem',
                fontWeight: 700,
                lineHeight: '2.5rem',
              }}
            >
              Update password, email or phone
            </Typography>
            <Typography
              sx={{
                fontSize: '1rem',
                fontWeight: 400,
              }}
            >
              How would you like to reset your password?
            </Typography>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={resetType}
                onChange={handleChange}
                sx={{
                  '& .MuiRadio-root.Mui-checked': {
                    color: 'black',
                  },
                }}
              >
                <FormControlLabel
                  value="email"
                  control={<Radio />}
                  label="Email"
                />
                <FormControlLabel
                  value="sms"
                  control={<Radio />}
                  label="Text Message (SMS)"
                />
              </RadioGroup>
            </FormControl>
            <Typography
              sx={{
                fontSize: '1rem',
                fontWeight: 400,
              }}
            >
              We will text you a verification code to reset your password.
              Message and data rates may apply.
            </Typography>
            <TextField
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    border: '2px solid rgb(128, 128, 128)',
                    borderRadius: '8px',
                  },
                  '&:hover fieldset': {
                    border: '2px solid rgb(128, 128, 128)',
                    borderRadius: '8px',
                  },
                  '&.Mui-focused fieldset': {
                    border: '2px solid rgb(128, 128, 128)',
                    borderRadius: '8px',
                  },
                },
                '& #outlined-basic-label': {
                  color: 'rgb(128, 128, 128)',
                },
              }}
              id="outlined-basic"
              label="Mobile number"
              variant="outlined"
            />
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
              message me
            </Button>
            <Typography
              sx={{
                fontSize: '1rem',
                fontWeight: 400,
                textDecoration: 'underline',
                cursor: 'pointer',
                '&:hover': {
                  color: 'rgba(0, 0, 0, 0.7)',
                },
              }}
            >
              I can&apos;t remember my email address or phone number.
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            my: 2,
          }}
        >
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: '0.8125rem',
              fontWeight: 400,
            }}
          >
            This page is protected by Google reCAPTCHA to ensure you&apos;re not
            a bot.
          </Typography>
          <Typography>
            <Link
              href="https://www.google.com/recaptcha/about/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'white',
                textDecoration: 'underline',
                fontSize: '0.8125rem',
                fontWeight: 400,
              }}
            >
              Learn more.
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginHelpBox;
