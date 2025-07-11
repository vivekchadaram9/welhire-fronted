import React, { useState, type ChangeEvent } from 'react';
import { FaUser } from 'react-icons/fa';
import { Box, Button, Divider, Typography } from '@mui/material';
import Input from '../../../components/Input';
import googleLogo from '../../../assets/icons/googleLogo.svg';
import microsoftLogo from '../../../assets/icons/microsoft.svg';

interface LoginFormProps {
  onLoginClick: (input: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginClick }) => {
  const [userInput, setUserInput] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const cleanInput = userInput.replace(/\s+/g, '').trim();

  const isEmail = (value: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const isMobile = (value: string): boolean => /^\d{10}$/.test(value);

  const isValidInput = isEmail(cleanInput) || isMobile(cleanInput);

  return (
    <Box>
      <Input
        placeholder='Email ID/Mobile Number'
        icon={<FaUser />}
        value={userInput}
        onChange={handleInputChange}
      />

      <Box sx={{ margin: '20px 0' }}>
        <Button
          variant='contained'
          sx={{
            backgroundColor: '#005AA9',
            textTransform: 'none',
            width: '100%',
            '&:disabled': {
              backgroundColor: '#cccccc',
              color: '#666666',
            },
          }}
          onClick={() => isValidInput && onLoginClick(cleanInput)}
          disabled={!isValidInput}
        >
          Login with OTP
        </Button>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          margin: '20px 0',
          fontSize: '12px',
          color: '#999',
        }}
      >
        <Divider sx={{ flex: 1, borderTop: '1px dashed #bbbaba' }} />
        <Typography
          sx={{
            mx: 2,
            fontSize: '14px',
            color: '#000',
            fontWeight: 400,
          }}
        >
          or continue with
        </Typography>
        <Divider sx={{ flex: 1, borderTop: '1px dashed #bbbaba' }} />
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '14px',
          flexWrap: 'nowrap',
          padding: '20px',
        }}
      >
        <Button
          variant='outlined'
          sx={{
            textTransform: 'none',
            backgroundColor: '#fff',
            color: '#000',
            border: '1px solid #ddd',
            fontSize: '14px',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '140px',
          }}
        >
          <img
            src={googleLogo}
            alt='Google'
            style={{ width: '24px', marginRight: '8px' }}
          />
          Google
        </Button>

        <Button
          variant='outlined'
          sx={{
            textTransform: 'none',
            backgroundColor: '#fff',
            color: '#000',
            border: '1px solid #ddd',
            fontSize: '14px',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '140px',
          }}
        >
          <img
            src={microsoftLogo}
            alt='Microsoft'
            style={{ width: '24px', marginRight: '8px' }}
          />
          Microsoft
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
