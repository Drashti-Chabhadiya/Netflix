import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import React from 'react';
import TitleUI from '../common/TitleUI';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { faqData } from '@/app/lib/faq/faqData';

const FAQContent = () => {
  return (
    <Box
      sx={{
        padding: '2rem 0',
      }}
    >
      <Box
        sx={{
          marginBottom: '1rem',
        }}
      >
        <TitleUI title={'Frequently Asked Questions'} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          '& .MuiAccordion-root': {
            margin: '0px !important',
          },
        }}
      >
        {faqData.map((item) => {
          return (
            <Accordion
              key={item.id}
              sx={{
                backgroundColor: '#2D2D2D',
                padding: '1rem',
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ArrowDownwardIcon
                    sx={{
                      color: 'white',
                    }}
                  />
                }
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography
                  component="span"
                  sx={{
                    fontSize: '24px',
                    color: 'white',
                  }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontSize: '1.5rem',
                    color: 'white',
                  }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Box>
  );
};

export default FAQContent;
