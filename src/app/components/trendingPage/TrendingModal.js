'use client';
import { Box, Button, Chip, Container, Modal, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';

const chipSx = {
  backgroundColor: 'rgb(65, 65, 65)',
  color: 'rgba(255, 255, 255, 0.8)',
  borderRadius: '0.25rem',
  padding: '0.1875rem 0.25rem',
  fontSize: '0.8rem',
  fontWeight: 500,
  height: 'auto',
  '& .MuiChip-label': {
    padding: 0,
    lineHeight: 1.5,
  },
};

const TrendingModal = ({ isOpen, setIsOpen, selectedTrend }) => {
  const handleClose = () => setIsOpen(false);

  if (!isOpen || !selectedTrend || !Array.isArray(selectedTrend.images)) {
    return null;
  }

  const bgImage = selectedTrend?.images?.[0]?.backgroundImage;
  const titleImage = selectedTrend?.images?.[1]?.titleImage;

  if (!bgImage || !titleImage) {
    return null;
  }

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: 668,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: 700,
            height: 376,
            borderTopLeftRadius: '0.5rem',
            borderTopRightRadius: '0.5rem',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 0,
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(40deg, rgb(22, 22, 22) 24.16%, rgba(6, 10, 23, 0) 56.61%),
            linear-gradient(0deg, rgb(22, 22, 22) 3.91%, rgba(6, 10, 23, 0) 69.26%)`,
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              padding: '1rem 1rem 0.5rem 0.5rem',
              zIndex: 3,
            }}
          >
            <Button
              onClick={handleClose}
              sx={{
                color: 'white',
                minWidth: 'auto',
                minHeight: 'auto',
                width: '2.5rem !important',
                height: '2.5rem !important',
                borderWidth: '0.0625rem',
                borderRadius: '50%',
                padding: '2px 7px',

                '&:hover': {
                  backgroundColor: 'rgba(128, 128, 128, 0.4)',
                },
              }}
            >
              <CloseIcon
                sx={{
                  fontSize: 'xx-large',
                }}
              />
            </Button>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 2,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Container
              maxWidth={'lg'}
              sx={{
                paddingLeft: '40px !important',
              }}
            >
              <Image
                src={titleImage}
                alt={selectedTrend?.title}
                width={350}
                height={100}
                style={{
                  height: 'auto',
                  width: 'auto',
                  maxHeight: '6.25rem',
                  maxWidth: '60%',
                }}
              />
            </Container>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: 'rgb(22, 22, 22)',
            padding: '1rem 2.5rem 2.5rem',
          }}
        >
          <Box
            sx={{
              marginBottom: '0.75rem',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1,
                mb: '0.75rem',
              }}
            >
              {selectedTrend?.year && (
                <Chip label={selectedTrend.year} sx={chipSx} />
              )}
              {selectedTrend?.rating && (
                <Chip label={selectedTrend.rating} sx={chipSx} />
              )}
              {selectedTrend?.type && (
                <Chip label={selectedTrend.type} sx={chipSx} />
              )}
              {selectedTrend?.genres?.map((genre, index) => (
                <Chip key={index} label={genre} sx={chipSx} />
              ))}
            </Box>
          </Box>
          <Typography
            component={'p'}
            sx={{
              color: 'rgb(255, 255, 255)',
              lineHeight: 'normal',
              paddingTop: '1rem',
            }}
          >
            {selectedTrend.description}
          </Typography>
          <Box
            sx={{
              paddingTop: '2.5rem',
            }}
          >
            <Button
              sx={{
                backgroundColor: '#E50814',
                color: 'white',
                minHeight: '3rem',
                width: { xs: '100%', sm: 'auto' },
                padding: '0.5rem 1rem',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
              >
                <Typography
                  component={'span'}
                  sx={{
                    fontSize: '1.125rem',
                    fontWeight: 500,
                    textTransform: 'capitalize',
                    lineHeight: 1,
                  }}
                >
                  Get started
                </Typography>
                <ArrowForwardIosIcon
                  sx={{
                    fontSize: 'x-large',
                  }}
                />
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default TrendingModal;
