'use client';
import React, { useState, useEffect } from 'react';
import {
  Box,
  Avatar,
  Stack,
  Container,
  Grid,
  CircularProgress,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { StyledTextField } from '../common/texField/StyledTextField';
import { StyledButton } from '../common/button/StyledButton';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, updateUserProfile } from '@/app/redux/slice/userSlice';
import { getFallbackLetter } from '@/app/utils/helper/getFallbackLetter';
import { useRouter } from 'next/navigation';

const UserProfile = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  const loading = useSelector((state) => state.user.updateUserLoading);

  const loginUser = userData?.user;
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

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
      router.push('/');
      handleClose();
    }
  };

  const handleClose = () => {
    reset({
      name: loginUser.name || '',
      email: loginUser.email || '',
      image: loginUser.image || null,
    });
    setSelectedImageUrl(loginUser.image || null);
    setSelectedFile(null);
    clearErrors();
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: {
          xs: '0px !important',
        },
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: {
          sm: '100%',
          md: 480,
        },
      }}
    >
      <Box
        sx={{
          bgcolor: {
            xs: 'black',
            sm: 'rgba(0, 0, 0, 0.7)',
          },
          color: 'white',
          border: '2px solid #000',
          p: 7,
        }}
        data-aos="zoom-in"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
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
                      {getFallbackLetter(loginUser?.email || '')}
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
                      id="outlined-basic"
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
                colorType="save"
                fullWidth
                disabled={loading}
              >
                Save
                {loading && (
                  <CircularProgress
                    size={18}
                    thickness={4}
                    sx={{ color: '#fff' }}
                  />
                )}
              </StyledButton>
            </Stack>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default UserProfile;
