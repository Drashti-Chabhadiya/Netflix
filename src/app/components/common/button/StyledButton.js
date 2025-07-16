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
    },
    save: {
      backgroundColor: '#E50814',
    },
  };

  const commonStyles = {
    textTransform: 'capitalize',
    fontSize: '1rem',
    fontWeight: 500,
    width: '100%',
    minHeight: '2.5rem',
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
