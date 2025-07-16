import React from 'react';
import { Skeleton, Box } from '@mui/material';

const FAQAccordionSkeleton = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'grey.900',
        borderRadius: '8px',
        padding: '1rem',
        marginBottom: '0.5rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '0.75rem',
        }}
      >
        <Skeleton
          variant="text"
          width="40%"
          height={32}
          sx={{ bgcolor: 'grey.800' }}
        />
        <Skeleton
          variant="circular"
          width={24}
          height={24}
          sx={{ bgcolor: 'grey.800' }}
        />
      </Box>
    </Box>
  );
};

export default FAQAccordionSkeleton;
