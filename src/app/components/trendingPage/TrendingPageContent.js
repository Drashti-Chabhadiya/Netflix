'use client';
import React, { useEffect, useState } from 'react';
import '../../styles/trendingSwiper.css';
import { Box, Grid, Skeleton } from '@mui/material';
import TitleUI from '../common/TitleUI';
import { trendingImages } from '@/app/lib/TrendingPage/trendingImage';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import TrendingModal from './TrendingModal';

const TrendingPageContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTrend, setSelectedTrend] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer); // cleanup
  }, []);

  const handleOpen = (trendData) => {
    setSelectedTrend(trendData);
    setIsOpen(true);
  };

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
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {trendingImages.map((trendData, index) => (
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
                {loading ? (
                  <Skeleton
                    sx={{ bgcolor: 'grey.900', borderRadius: '8px' }}
                    variant="rectangular"
                    width={250}
                    height={350}
                  />
                ) : (
                  <Box
                    data-aos="flip-up"
                    sx={{
                      overflow: 'hidden',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                    onClick={() => handleOpen(trendData)}
                  >
                    <Image
                      src={trendData.src}
                      alt={trendData.alt}
                      width={250}
                      height={250}
                      style={{ borderRadius: '8px' }}
                    />
                  </Box>
                )}
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
      <TrendingModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedTrend={selectedTrend}
      />
    </Box>
  );
};

export default TrendingPageContent;
