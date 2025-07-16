'use client';
import React, { useState, useEffect } from 'react';
import { Box, Avatar, Button, Stack, Container, Grid } from '@mui/material';
import { useSession } from 'next-auth/react';
import { Controller, useForm } from 'react-hook-form';
import { CommonModal } from '../common/CommonModal';
import { StyledTextField } from '../common/texField/StyledTextField';
import { StyledButton } from '../common/button/StyledButton';

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
        <Avatar
          alt={loginUser?.name || 'User'}
          src={selectedImage || loginUser?.image}
          sx={{ width: 100, height: 100 }}
          imgProps={{
            crossOrigin: 'anonymous',
            referrerPolicy: 'no-referrer',
          }}
        >
          {loginUser?.name?.[0]}
        </Avatar>

        <Controller
          name="image"
          control={control}
          defaultValue={null}
          rules={{
            required: 'Image is required',
            validate: {
              isImage: (file) =>
                !file ||
                (file && file.type.startsWith('image/')) ||
                'Only image files are allowed',
            },
          }}
          render={({ field }) => (
            <>
              <Button variant="outlined" component="label" size="small">
                Upload Image
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setSelectedImage(URL.createObjectURL(file));
                      field.onChange(file);
                    }
                  }}
                />
              </Button>
              {errors.image && (
                <span style={{ color: 'red', fontSize: '0.8rem' }}>
                  {errors.image.message}
                </span>
              )}
            </>
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
