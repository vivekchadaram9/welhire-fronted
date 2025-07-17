import React from 'react';
import { Button, type ButtonProps } from '@mui/material';

export interface CommonButtonProps extends ButtonProps {
  startIcon?: React.ReactNode;
}


export default function CommonButton({
  children,
  startIcon,
  variant = 'contained',
  size = 'medium',
  ...rest
}: CommonButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      startIcon={startIcon}
      sx={{ borderRadius: 0.5, textTransform: 'none' }}
      {...rest}
    >
      {children}
    </Button>
  );
}
