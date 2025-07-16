'use client';
import React, { useState, useEffect } from 'react';
import { Box, Avatar, Stack, Container, Grid } from '@mui/material';
import { useSession } from 'next-auth/react';
import { Controller, useForm } from 'react-hook-form';
import { CommonModal } from '../common/CommonModal';
import { StyledTextField } from '../common/texField/StyledTextField';
import { StyledButton } from '../common/button/StyledButton';
import EditIcon from '@mui/icons-material/Edit';

const UserProfile = ({ openProfile, setOpenProfile }) => {
  const { data: session } = useSession();
  const loginUser = session?.user;
  const [selectedImage, setSelectedImage] = useState(null);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      image: selectedImage || loginUser?.image || null,
    },
  });

  useEffect(() => {
    if (loginUser) {
      setValue('name', loginUser.name || '');
      setValue('email', loginUser.email || '');

      if (loginUser.image) {
        setSelectedImage(loginUser.image);
      }
    }
  }, [loginUser, setValue]);

  const onSubmit = (data) => {
    // Here you can send `data` and `selectedImage` to your backend
    console.log('Form Data:', data);
    console.log('Selected Image:', selectedImage);
    setOpenProfile(false);
  };

  const Body = () => (
    <Container maxWidth="lg" sx={{ padding: { xs: '0px !important' } }}>
      <Box
        id="user-profile-form"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2}
        sx={{ color: 'white', border: '2px solid #000' }}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="image"
          control={control}
          defaultValue={null}
          rules={{
            required: 'Image is required',
          }}
          render={({ field }) => (
            <Box
              position="relative"
              sx={{
                width: 120,
                height: 120,
                '&:hover .edit-overlay': {
                  display: 'flex',
                },
              }}
            >
              <Avatar
                alt={loginUser?.name || 'User'}
                src={selectedImage || loginUser?.image || ''}
                sx={{ width: '100%', height: '100%' }}
                imgProps={{
                  crossOrigin: 'anonymous',
                  referrerPolicy: 'no-referrer',
                }}
              >
                {!selectedImage && !loginUser?.image && loginUser?.name?.[0]}
              </Avatar>

              <input
                accept="image/*"
                id="avatar-upload"
                type="file"
                hidden
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setSelectedImage(URL.createObjectURL(file));
                    setValue('image', file, { shouldValidate: true });
                  }
                }}
              />

              <label htmlFor="avatar-upload">
                <Box
                  className="edit-overlay"
                  sx={{
                    display: 'none',
                    position: 'absolute',
                    top: 5,
                    right: 5,
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    borderRadius: '50%',
                    padding: '4px',
                    cursor: 'pointer',
                  }}
                >
                  <EditIcon sx={{ fontSize: 18, color: 'white' }} />
                </Box>
              </label>
            </Box>
          )}
        />

        <Grid item xs={12} width="100%">
          <Controller
            name="name"
            control={control}
            rules={{
              required: 'Name is required',
              minLength: {
                value: 3,
                message: 'Name must be at least 3 characters',
              },
            }}
            render={({ field }) => (
              <StyledTextField
                {...field}
                fullWidth
                label="Name"
                variant="outlined"
                error={!!errors.name}
                helperText={errors.name?.message}
                id="outlined-basic"
              />
            )}
          />
        </Grid>

        <Grid item xs={12} width="100%">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <StyledTextField
                {...field}
                fullWidth
                label="Email"
                variant="outlined"
                InputProps={{ readOnly: true }}
                id="outlined-basic"
              />
            )}
          />
        </Grid>

        <Footer />
      </Box>
    </Container>
  );

  const Footer = () => (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="flex-end"
      mt={2}
      width="100%"
    >
      <StyledButton colorType="cancel" onClick={() => setOpenProfile(false)}>
        Cancel
      </StyledButton>
      <StyledButton type="submit" form="user-profile-form" colorType="save">
        Save
      </StyledButton>
    </Stack>
  );

  return (
    <CommonModal
      open={openProfile}
      body={Body()}
      footer={null}
      handleClose={() => setOpenProfile(false)}
    />
  );
};

export default UserProfile;
