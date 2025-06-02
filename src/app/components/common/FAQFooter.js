import { faqFooterData } from '@/app/lib/footer/faqFooterData';
import { Box, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import LanguageBtn from './LanguageBtn';

const FAQFooter = () => {
  return (
    <Container
      maxWidth={'lg'}
      sx={{
        padding: '0 0 48px !important',
        margin: '0 auto !important',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          alignItems: 'center',
          paddingBottom: '16px',
          borderBottom: '1px solid rgba(255, 255, 255, .4)',
          paddingTop: '24px',
        }}
      >
        <Typography
          component={'h3'}
          sx={{
            fontSize: '20px',
            margin: '0 32px 8px 0',
          }}
        >
          Need more help?
        </Typography>
        <Button
          sx={{
            backgroundColor: '#fff',
            color: '#000',
            minWidth: '160px',
            marginBottom: '8px',
            textTransform: 'capitalize',
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: '22px',
            borderRadius: '4px',
            padding: '8px 20px',
            whiteSpace: 'nowrap',
          }}
        >
          Contact Us
        </Button>
      </Box>
      <Box
        sx={{
          marginTop: '32px',
          width: '198px',
        }}
      >
        <LanguageBtn height={'48px'} />
      </Box>

      <Box
        sx={{
          paddingTop: '40px',
        }}
      >
        {faqFooterData.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.url}
              style={{
                color: 'rgba(255,255,255,.7)',
                fontSize: '14px',
                display: 'block',
                margin: '0 0 16px',
                lineHeight: '21px',
                textTransform: 'capitalize',
              }}
            >
              {item.name}
            </Link>
          );
        })}
      </Box>
    </Container>
  );
};

export default FAQFooter;
