'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { CustomBackdrop } from '../backdrop/CustomBackdrop';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'rgba(0, 0, 0, 0.7)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const CommonModal = ({ open, handleClose, body, footer }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      // BackdropComponent={CustomBackdrop}
    >
      <Box sx={style}>
        {body}
        {footer}
      </Box>
    </Modal>
  );
};
