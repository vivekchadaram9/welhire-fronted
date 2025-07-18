import React from 'react';
import { Box, Typography } from '@mui/material';

interface Props {
  questionsSelected: number;
  estimatedTime: number;
}

export default function QuestionBuilderHeader({
  questionsSelected,
  estimatedTime,
}: Props) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={2}
    >
      <Typography variant="h6" fontWeight="bold">
        Question Builder
      </Typography>
      <Box display="flex" gap={4}>
        <Typography variant="body2">
          Questions Selected: {questionsSelected}
        </Typography>
        <Typography variant="body2">
          Estimated Time: {estimatedTime} minutes
        </Typography>
      </Box>
    </Box>
  );
}
