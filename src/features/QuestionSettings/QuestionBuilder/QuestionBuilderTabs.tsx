import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';

interface Props {
  value: number;
  onChange: (e: React.SyntheticEvent, v: number) => void;
}

const labels = ['Dynamic Qs', 'Pre-generated AI Qs', 'Manual Qs'];

export default function QuestionBuilderTabs({ value, onChange }: Props) {
  return (
    <Box
      sx={{
        bgcolor: '#DFE7EF',
        borderRadius: 0.5,
        width:'70%',
        
      }}
    >
      <Tabs
        value={value}
        onChange={onChange}
        variant="fullWidth"
        TabIndicatorProps={{ sx: { display: 'none', } }}
      >
        {labels.map((label, idx) => (
          <Tab
            key={idx}
            label={label}
            sx={{
              textTransform: 'none',
              fontWeight: 500,
              bgcolor: value === idx ? '#FFFFFF' : 'transparent',
              borderRadius: 0.5,
              border:value === idx ?'1px solid #DFE7EF':'',
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
}
