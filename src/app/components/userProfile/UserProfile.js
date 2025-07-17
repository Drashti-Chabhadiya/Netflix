'use client';
import React, { useState, useEffect } from 'react';
import { Box, Avatar, Stack, Container, Grid } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { CommonModal } from '../common/CommonModal';
import { StyledTextField } from '../common/texField/StyledTextField';
import { StyledButton } from '../common/button/StyledButton';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, updateUserProfile } from '@/app/redux/slice/userSlice';
import { getFallbackLetter } from '@/app/utils/helper/getFallbackLetter';

const UserProfile = ({ openProfile, setOpenProfile }) => {
  const { user } = useSelector((state) => state.user.userData);
  const loginUser = user;

  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      image: null,
    },
  });

  useEffect(() => {
    if (loginUser) {
      setValue('name', loginUser.name || '');
      setValue('email', loginUser.email || '');
      if (loginUser.image) {
        setSelectedImageUrl(loginUser.image);
      }
    }
  }, [loginUser, setValue]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    if (selectedFile) {
      formData.append('image', selectedFile);
    }
    formData.append('userId', loginUser?.id || '');

    const resultAction = await dispatch(updateUserProfile(formData));

    if (updateUserProfile.fulfilled.match(resultAction)) {
      dispatch(setUser(resultAction.payload));
      setOpenProfile(false);
    }

    setOpenProfile(false);
  };

  const handleClose = () => {
    setOpenProfile(false);
    reset({
      name: loginUser.name || '',
      email: loginUser.email || '',
      image: loginUser.image || null,
    });
    setSelectedImageUrl(loginUser.image || null);
    setSelectedFile(null);
    clearErrors();
  };

  const Body = () => (
    <Container maxWidth="lg">
      <Box
        id="user-profile-form"
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={3}
        sx={{
          width: '100%',
          border: '2px solid #000',
          color: 'white',
          borderRadius: 2,
        }}
      >
        <Controller
          name="image"
          control={control}
          defaultValue={null}
          render={({ field }) => (
            <Box>
              <Box
                position="relative"
                sx={{
                  width: { xs: 80, sm: 100, md: 120 },
                  height: { xs: 80, sm: 100, md: 120 },
                  '&:hover .edit-overlay': {
                    display: 'flex',
                  },
                }}
              >
                <Avatar
                  alt={loginUser?.name || 'User'}
                  src={selectedImageUrl || loginUser?.image || undefined}
                  sx={{ width: '100%', height: '100%' }}
                  imgProps={{
                    crossOrigin: 'anonymous',
                    referrerPolicy: 'no-referrer',
                  }}
                >
                  {getFallbackLetter(user?.email || '')}
                </Avatar>

                <input
                  accept="image/*"
                  id="avatar-upload"
                  type="file"
                  hidden
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setSelectedImageUrl(URL.createObjectURL(file)); // preview
                      setSelectedFile(file); // binary
                      setValue('image', file, { shouldValidate: true }); // update form
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
            </Box>
          )}
        />

        <Grid container spacing={2}>
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
                />
              )}
            />
          </Grid>
        </Grid>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="flex-end"
          alignItems="stretch"
          mt={2}
          width="100%"
        >
          <StyledButton colorType="cancel" fullWidth onClick={handleClose}>
            Cancel
          </StyledButton>
          <StyledButton
            type="submit"
            form="user-profile-form"
            colorType="save"
            fullWidth
          >
            Save
          </StyledButton>
        </Stack>
      </Box>
    </Container>
  );

  return (
    <CommonModal
      open={openProfile}
      body={Body()}
      footer={null}
      handleClose={handleClose}
    />
  );
};

export default UserProfile;
