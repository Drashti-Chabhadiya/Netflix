'use client';
import React from 'react';
import { languageOptions } from '@/app/lib/header/languageOption';
import { Autocomplete, TextField } from '@mui/material';

const LanguageBtn = ({ height }) => {
  return (
    <Autocomplete
      disablePortal
      disableClearable
      options={languageOptions}
      defaultValue={languageOptions[0]}
      sx={{
        minWidth: { xs: 50, sm: 120 },
        color: 'white',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            border: '1px solid rgba(255, 255, 255, 0.3)',
          },
          '&:hover fieldset': {
            border: '1px solid rgba(255, 255, 255, 0.3)',
          },
          '&.Mui-focused fieldset': {
            border: '2px solid rgba(255, 255, 255, 0.7)',
          },
          height: height ?? '32px',
        },
        '& .MuiInputBase-input': {
          color: 'white',
        },
        '& .MuiSvgIcon-root': {
          color: 'white',
        },
      }}
      renderInput={(params) => <TextField {...params} />}
    />
  );
};

export default LanguageBtn;
