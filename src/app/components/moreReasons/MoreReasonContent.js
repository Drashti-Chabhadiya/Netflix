'use client';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import TitleUI from '../common/TitleUI';
import { moreReasonData } from '@/app/lib/moreReasons/moreReasonData';
import Image from 'next/image';
import MoreReasonSkeletonCard from '../skeleton/MoreReasonSkeletonCard';

const MoreReasonContent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer); // cleanup
  }, []);

  return (
    <Box sx={{ padding: '2rem 0' }}>
      <Box
        sx={{
          marginBottom: '1rem',
        }}
      >
        <TitleUI title={'More reasons to join'} />
      </Box>
      <Grid container spacing={2}>
        {moreReasonData.map((item, index) => {
          return (
            <Grid key={index} size={{ lg: 3, sm: 12, md: 6 }} width={'100%'}>
              {loading ? (
                <MoreReasonSkeletonCard />
              ) : (
                <Card
                  sx={{
                    backgroundColor: '#1E162A',
                    minHeight: '250px',
                  }}
                  data-aos={index % 2 === 0 ? 'fade-up' : 'fade-down'} // 👈 alternate animations
                  data-aos-duration="1000"
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Box
                        sx={{
                          minHeight: {
                            sm: 0,
                            md: '128px',
                            lg: '215px',
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: '24px',
                            color: 'white',
                            marginBottom: '15px',
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '16px',
                            color: 'rgba(255, 255, 255, 0.7)',
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: 'flex',
                      justifyContent: 'end',
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      width={72}
                      height={72}
                    />
                  </CardActions>
                </Card>
              )}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default MoreReasonContent;
