'use client';
import React from 'react';
import { Card, CardContent, CardActions, Skeleton, Box } from '@mui/material';

const MoreReasonSkeletonCard = () => {
  return (
    <Card
      sx={{
        backgroundColor: 'grey.900',
        minHeight: '250px',
        // width: 270,
        borderRadius: '8px',
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Box
            sx={{
              minHeight: {
                sm: 0,
                md: '128px',
                lg: '215px',
              },
              width: '100%',
            }}
          >
            <Skeleton
              variant="text"
              height={32}
              width="70%"
              sx={{ bgcolor: 'grey.800', mb: 2 }}
            />
            <Skeleton
              variant="text"
              height={24}
              width="100%"
              sx={{ bgcolor: 'grey.800', mb: 2 }}
            />
            <Skeleton
              variant="text"
              height={24}
              width="90%"
              sx={{ bgcolor: 'grey.800', mb: 2 }}
            />
          </Box>
        </Box>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'end',
        }}
      >
        <Skeleton
          variant="circular"
          width={72}
          height={72}
          sx={{ bgcolor: 'grey.800' }}
        />
      </CardActions>
    </Card>
  );
};

export default MoreReasonSkeletonCard;
