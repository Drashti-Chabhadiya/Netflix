import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import TitleUI from '../common/TitleUI';
import { faqData } from '@/app/lib/faq/faqData';
import FAQAccordionSkeleton from '../skeleton/FAQAccordionSkeleton';

const FaqQuestions = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // simulate 2s delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ padding: '2rem 0' }}>
      <Box sx={{ marginBottom: '1rem' }}>
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
        {loading
          ? Array.from({ length: 5 }).map((_, index) => (
              <FAQAccordionSkeleton key={index} />
            ))
          : faqData.map((item, index) => (
              <Accordion
                sx={{
                  backgroundColor: '#2D2D2D',
                  padding: '1rem',
                }}
                key={item.id}
                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                data-aos-duration="1000"
              >
                <AccordionSummary
                  expandIcon={<ArrowDownwardIcon sx={{ color: 'white' }} />}
                  aria-controls={`panel${item.id}-content`}
                  id={`panel${item.id}-header`}
                >
                  <Typography
                    component="span"
                    sx={{ fontSize: '24px', color: 'white' }}
                  >
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ fontSize: '1.5rem', color: 'white' }}>
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
      </Box>
    </Box>
  );
};

export default FaqQuestions;
