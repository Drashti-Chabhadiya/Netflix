import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import TitleUI from '../common/TitleUI';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
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
      <Box>
        {faqData.map((item) => {
          return (
            <Accordion
              key={item.id}
              sx={{
                backgroundColor: '#2D2D2D',
              }}
            >
              <AccordionSummary
                expandIcon={
                  <AddIcon />
                  // <IconButton
                  //   sx={{
                  //     color: "#fff",
                  //   }}>
                  //   <AddIcon />
                  // </IconButton>
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
                    fontSize: '1.2rem',
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
