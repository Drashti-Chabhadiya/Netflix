import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { StyledTextField } from '../common/texField/StyledTextField';

const LandingPageContent = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        textAlign: 'center',
        top: '64%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: { md: '4rem', xs: '2rem' },
            fontWeight: 'bold',
            lineHeight: 1.2,
            marginBottom: '24px',
          }}
          // data-aos="fade-up"
          className="animate__rotateInDownLeft animate__animated"
          //  data-aos="zoom-in"
        >
          Unlimited movies, TV shows and more
        </Typography>
        <Typography
          sx={{ fontSize: '1.25rem', fontWeight: 500, marginBottom: '32px' }}
          className="animate__rotateInDownRight animate__animated"
        >
          Starts at ₹149. Cancel at any time.
        </Typography>
        <Typography
          variant="h3"
          sx={{ fontSize: '1rem', fontWeight: 400, lineHeight: 1.5 }}
          className="animate__rotateInDownLeft animate__animated"
        >
          Ready to watch? Enter your email to create or restart your membership.
        </Typography>
        <Box
          sx={{
            paddingTop: '16px',
            display: 'flex',
            gap: '8px',
            flexWrap: {
              xs: 'wrap',
              sm: 'wrap',
              md: 'nowrap',
              lg: 'nowrap',
            },
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <StyledTextField
            label="Email Address"
            variant="outlined"
            id="outlined-basic"
            sx={{
              minWidth: {
                sm: 'auto',
                md: '500px',
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#E50814',
              textTransform: 'capitalize',
              fontSize: {
                xs: '1.125rem',
                md: '1.5rem',
              },
              fontWeight: 500,
              minWidth: {
                sm: 'auto',
                md: '200px',
              },
              height: '56px',
            }}
          >
            get started
            <ArrowForwardIosIcon fontSize="20px" />
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LandingPageContent;
