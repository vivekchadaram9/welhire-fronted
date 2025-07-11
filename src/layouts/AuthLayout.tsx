import { Outlet } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const AuthLayout = () => {
  return (
    <Box
      sx={{
        minHeight: '95vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f5f5f5', // same as your bg-gray-100
      }}
    >
      {/* Main content */}
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Outlet />
      </Box>

      {/* Footer */}
      <Box
        component='footer'
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem',
          backgroundColor: '#292F66',
          fontSize: '0.75rem', // same as 12px
          color: '#FFFFFF',
          fontWeight: 500,
          width: '100%',
        }}
      >
        <Typography variant='body2'>
          © Copyright By Welspun Transformation Services Limited
        </Typography>
        <Typography variant='body2'>
          Privacy Policy | Term & Condition
        </Typography>
      </Box>
    </Box>
  );
};

export default AuthLayout;
