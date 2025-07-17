'use client';
import { Button } from '@mui/material';

export const StyledButton = ({
  variant = 'contained',
  colorType = 'default', // 'cancel' | 'save' | 'default'
  children,
  sx = {},
  ...props
}) => {
  const buttonStyles = {
    default: {
      backgroundColor: '#1976d2',
      color: '#fff',
    },
    cancel: {
      backgroundColor: 'rgba(128, 128, 128, 0.4)',
      color: '#fff',
    },
    save: {
      backgroundColor: '#E50814',
      color: '#fff',
    },
  };

  const commonStyles = {
    textTransform: 'capitalize',
    fontSize: '1rem',
    fontWeight: 500,
    width: '100%',
    minHeight: '2.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
    '&.Mui-disabled': {
      opacity: 1,
      color: '#fff',
      backgroundColor:
        colorType === 'save'
          ? '#E50814'
          : colorType === 'cancel'
            ? 'rgba(128, 128, 128, 0.4)'
            : '#1976d2',
    },
  };

  return (
    <Button
      variant={variant}
      sx={{ ...commonStyles, ...buttonStyles[colorType], ...sx }}
      {...props}
    >
      {children}
    </Button>
  );
};
