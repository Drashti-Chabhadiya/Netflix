import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Image from 'next/image';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { faqArticles } from '../lib/faq/faqArticles';

const FAQContents = () => {
  return (
    <Box
      sx={{
        paddingTop: '32px',
        paddingBottom: '48px',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          padding: {
            lg: '0px !important',
          },
        }}
      >
        <Link href="/faq" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              margin: '24px 0',
            }}
          >
            <ArrowBackIcon
              fontSize={'16px'}
              sx={{
                marginRight: '8px',
              }}
            />
            <Typography
              sx={{
                fontSize: '14px',
                ':hover': {
                  textDecoration: 'underline',
                  color: 'rgba(0,0,0,.7)',
                },
              }}
            >
              Back to Help Home
            </Typography>
          </Box>
        </Link>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: '32px',
                  sm: '36px',
                  lg: '40px',
                },
                fontWeight: 800,
                lineHeight: {
                  xs: '40px',
                  sm: '44px',
                  lg: '50px',
                },
                marginBottom: '16px',
              }}
            >
              What is Netflix?
            </Typography>
          </Grid>
          <Grid
            size={{
              sm: 12,
              lg: 8,
            }}
          >
            <Image
              src="/assets/images/faq/what_is_netflix_1_en.png"
              alt="What is Netflix?"
              width={848}
              height={477}
              style={{ width: '100%', height: 'auto', marginBottom: '32px' }}
            />

            <Typography
              component={'p'}
              sx={{ fontSize: '16px', lineHeight: '24px', margin: '0 0 16px' }}
            >
              Netflix is a subscription-based streaming service that allows our
              members to watch TV shows and movies on an internet-connected
              device.
            </Typography>
            <Typography
              component={'p'}
              sx={{ fontSize: '16px', lineHeight: '24px', margin: '0 0 16px' }}
            >
              Depending on your plan, you can also download TV shows and movies
              to your Android phone or tablet, iPhone, iPad, or Google
              Chromebook device and watch without an internet connection.
            </Typography>
            <Typography
              component={'p'}
              sx={{ fontSize: '16px', lineHeight: '24px', margin: '0 0 16px' }}
            >
              If youre already a member and would like to learn more about using
              Netflix, visit Getting started with Netflix.
            </Typography>
            <Divider
              sx={{
                margin: '0 0 40px 0 !important',
                padding: '40px 0 0 !important',
              }}
            />
            <Typography
              component="h2"
              sx={{
                fontSize: '24px',
                fontWeight: 700,
                lineHeight: '50px',
                marginBottom: '8px',
                marginTop: '40px',
                padding: 'revert',
              }}
            >
              TV Shows & Movies
            </Typography>

            <Image
              src="/assets/images/faq/what_is_netflix_2_en.png"
              alt="TV Shows & Movies"
              width={848}
              height={477}
              style={{ width: '100%', height: 'auto', marginBottom: '32px' }}
            />

            <Typography
              component={'p'}
              sx={{ fontSize: '16px', lineHeight: '24px', margin: '0 0 16px' }}
            >
              Netflix content varies by region and may change over time. You can
              watch a variety of award-winning Netflix originals, TV shows,
              movies, documentaries, and more.
            </Typography>
            <Typography
              component={'p'}
              sx={{ fontSize: '16px', lineHeight: '24px', margin: '0 0 16px' }}
            >
              The more you watch, the better Netflix gets at recommending TV
              shows and movies.
            </Typography>

            <Divider
              sx={{
                margin: '0 0 40px 0 !important',
                padding: '40px 0 0 !important',
              }}
            />

            <Typography
              component="h2"
              sx={{
                fontSize: '24px',
                fontWeight: 700,
                lineHeight: '50px',
                marginBottom: '8px',
                marginTop: '40px',
                padding: 'revert',
              }}
            >
              Supported Devices
            </Typography>

            <Image
              src="/assets/images/faq/what_is_netflix_3_en.png"
              alt="Supported Devices"
              width={848}
              height={477}
              style={{ width: '100%', height: 'auto', marginBottom: '32px' }}
            />
            <Typography
              component={'p'}
              sx={{ fontSize: '16px', lineHeight: '24px', margin: '0 0 16px' }}
            >
              You can watch Netflix through any supported internet-connected
              device that offers the Netflix app, including smart TVs, game
              consoles, streaming media players, cable boxes, smartphones, and
              tablets. You can also watch Netflix on your computer using an
              internet browser. To get the best performance, you can review the
              system requirements for web browser compatibility and check our
              internet speed recommendations.
            </Typography>
            <Box
              sx={{
                margin: '8px 0 24px 0',
                borderLeft: '4px solid #d5d4d1',
                padding: '0 12px',
              }}
            >
              <Typography
                component={'p'}
                sx={{
                  fontSize: '14px',
                  lineHeight: '21px',
                  fontWeight: 400,
                }}
              >
                <Typography
                  component={'span'}
                  sx={{
                    textTransform: 'uppercase',
                    margin: '0 4px 0 0 ',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    lineHeight: '21px',
                  }}
                >
                  Note:
                </Typography>
                A small percentage of devices may not be supported by all plans.
              </Typography>
            </Box>
            <Typography
              component={'p'}
              sx={{ fontSize: '16px', lineHeight: '24px', margin: '0 0 16px' }}
            >
              Need help getting set up? Search our Help Center for the
              manufacturer of the device youre using.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                margin: '8px 0 24px 0',
                borderLeft: '4px solid #d5d4d1',
                padding: '0 12px',
              }}
            >
              <Typography
                component={'p'}
                sx={{
                  fontSize: '14px',
                  lineHeight: '21px',
                  fontWeight: 400,
                }}
              >
                <Typography
                  component={'span'}
                  sx={{
                    textTransform: 'uppercase',
                    margin: '0 4px 0 0 ',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    lineHeight: '21px',
                  }}
                >
                  Note:
                </Typography>
                The Netflix app may come pre-loaded on certain devices, or you
                may need to download the Netflix app onto your device. Netflix
                app functionality may differ between devices.
              </Typography>
            </Box>

            <Divider
              sx={{
                margin: '0 0 40px 0 !important',
                padding: '40px 0 0 !important',
              }}
            />

            <Typography
              component="h2"
              sx={{
                fontSize: '24px',
                fontWeight: 700,
                lineHeight: '50px',
                marginBottom: '8px',
                marginTop: '40px',
                padding: 'revert',
              }}
            >
              Plans and Pricing
            </Typography>

            <Image
              src="/assets/images/faq/what_is_netflix_4_en.png"
              alt="Plans and Pricing"
              width={848}
              height={477}
              style={{ width: '100%', height: 'auto', marginBottom: '32px' }}
            />

            <Typography
              component={'p'}
              sx={{ fontSize: '16px', lineHeight: '24px', margin: '0 0 16px' }}
            >
              Each Netflix plan determines the number of devices you can watch
              Netflix on at the same time and whether you can watch in High
              Definition (HD), Full High Definition (FHD), or Ultra High
              Definition (UHD).
            </Typography>

            <Typography
              component={'p'}
              sx={{ fontSize: '16px', lineHeight: '24px', margin: '0 0 16px' }}
            >
              You can change your plan or cancel online at any time.
            </Typography>

            <Divider
              sx={{
                margin: '0 0 40px 0 !important',
                padding: '40px 0 0 !important',
              }}
            />

            <Typography
              component="h2"
              sx={{
                fontSize: '24px',
                fontWeight: 700,
                lineHeight: '50px',
                marginBottom: '8px',
                marginTop: '40px',
                padding: 'revert',
              }}
            >
              Get Started
            </Typography>

            <Image
              src="/assets/images/faq/what_is_netflix_5_en.png"
              alt="Get Started"
              width={848}
              height={477}
              style={{
                width: '100%',
                height: 'auto',
                marginBottom: '8px',
                marginTop: '40px',
              }}
            />

            <Typography
              component={'p'}
              sx={{ fontSize: '16px', lineHeight: '24px', margin: '0 0 16px' }}
            >
              To start watching Netflix:
            </Typography>
            <Box
              component={'ol'}
              sx={{
                paddingLeft: '20px',
                listStyle: 'decimal',
                margin: '24px 0',
              }}
            >
              <Box component={'li'} sx={{ marginBottom: '8px' }}>
                <Typography
                  component={'p'}
                  sx={{ fontSize: '16px', lineHeight: '24px' }}
                >
                  Visit netflix.com/signup.
                </Typography>
              </Box>
              <Box component={'li'} sx={{ marginBottom: '8px' }}>
                <Typography
                  component={'p'}
                  sx={{ fontSize: '16px', lineHeight: '24px' }}
                >
                  Choose a plan.
                </Typography>
              </Box>
              <Box component={'li'} sx={{ marginBottom: '8px' }}>
                <Typography
                  component={'p'}
                  sx={{ fontSize: '16px', lineHeight: '24px' }}
                >
                  Create an account by entering your email address and creating
                  a password.
                </Typography>
              </Box>
              <Box component={'li'} sx={{ marginBottom: '8px' }}>
                <Typography
                  component={'p'}
                  sx={{ fontSize: '16px', lineHeight: '24px' }}
                >
                  Enter a payment method.
                </Typography>
              </Box>
            </Box>
            <Typography
              component={'p'}
              sx={{ fontSize: '16px', lineHeight: '24px', margin: '0 0 16px' }}
            >
              As a Netflix member, you are charged once a month on the date you
              signed up.
            </Typography>
            <Divider
              sx={{
                marginTop: '45px',
              }}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '16px',
                textAlign: 'center',
                padding: '24px 0px',
              }}
            >
              <Typography
                component={'p'}
                sx={{
                  fontSize: '16px',
                  lineHeight: '24px',
                  fontWeight: 700,
                }}
              >
                Was this article helpful?
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '14px',
                    ':hover': {
                      textDecoration: 'underline',
                      color: 'rgba(0,0,0,.7)',
                    },
                  }}
                >
                  Yes
                </Typography>
                <Typography
                  sx={{
                    fontSize: '14px',
                    ':hover': {
                      textDecoration: 'underline',
                      color: 'rgba(0,0,0,.7)',
                    },
                  }}
                >
                  No
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid
            size={{
              sm: 12,
              lg: 4,
            }}
          >
            <Box
              sx={{
                border: '1px solid rgba(128, 128, 128, .4)',
                borderRadius: '4px',
                padding: '16px',
                borderTop: '6px solid #e50914',
                width: {
                  sm: '100%',
                  lg: '78%',
                },
                margin: {
                  sm: '0 0 16px 0',
                  lg: '20px 0 16px 80px',
                },
              }}
            >
              <Typography
                component={'h3'}
                sx={{ fontSize: '18px', margin: '0 0 16px', fontWeight: 700 }}
              >
                Related Articles
              </Typography>

              {faqArticles.map((article) => {
                return (
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '16px',
                    }}
                    key={article.id}
                  >
                    <ArticleOutlinedIcon />
                    <Link
                      href="/faq/what-is-netflix"
                      style={{ textDecoration: 'underline', color: 'inherit' }}
                    >
                      <Typography
                        sx={{
                          fontSize: '16px',
                          lineHeight: '24px',
                          fontWeight: 400,
                          ':hover': {
                            color: 'rgba(0,0,0,.7)',
                          },
                        }}
                      >
                        {article.name}
                      </Typography>
                    </Link>{' '}
                  </Box>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FAQContents;
