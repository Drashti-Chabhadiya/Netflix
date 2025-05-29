'use client';
import React from 'react';
import '../../styles/trendingSwiper.css';
import { Box, Grid } from '@mui/material';
import TitleUI from '../common/TitleUI';
import { trendingImages } from '@/app/lib/TrendingPage/trendingImage';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

const TrendingPageContent = () => {
  return (
    <Box sx={{ padding: '2rem 0' }}>
      <Box
        sx={{
          marginBottom: '1rem',
        }}
      >
        <TitleUI title={'Trending Now'} />
      </Box>
      <Grid container spacing={2}>
        <Swiper
          navigation={true}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {trendingImages.map((image, index) => (
            <Grid key={index} size={{ lg: 3, xs: 4, md: 2, sm: 2 }}>
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    overflow: 'hidden',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={250}
                    height={250}
                    style={{
                      borderRadius: '8px',
                    }}
                  />
                </Box>
              </SwiperSlide>
            </Grid>
          ))}
        </Swiper>
      </Grid>
    </Box>
  );
};

export default TrendingPageContent;
