'use client';
import { TextField } from '@mui/material';

const whiteThemeStyles = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: '1px solid rgba(255, 255, 255, 0.3)',
    },
    '&:hover fieldset': {
      border: '1px solid rgba(255, 255, 255, 0.3)',
    },
    '&.Mui-focused fieldset': {
      border: '2px solid white',
    },
  },
  '& .MuiOutlinedInput-input': {
    color: 'white',
  },
  '& #outlined-basic-label': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
};

const grayThemeStyles = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: '2px solid rgb(128, 128, 128)',
      borderRadius: '8px',
    },
    '&:hover fieldset': {
      border: '2px solid rgb(128, 128, 128)',
      borderRadius: '8px',
    },
    '&.Mui-focused fieldset': {
      border: '2px solid rgb(128, 128, 128)',
      borderRadius: '8px',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgb(128, 128, 128)',
  },
  '& #outlined-basic-label': {
    color: 'rgb(128, 128, 128)',
  },
};

export const StyledTextField = ({
  variantStyle = 'white',
  sx = {},
  ...props
}) => {
  const themeStyles =
    variantStyle === 'gray' ? grayThemeStyles : whiteThemeStyles;

  return <TextField {...props} sx={{ ...themeStyles, ...sx }} />;
};
