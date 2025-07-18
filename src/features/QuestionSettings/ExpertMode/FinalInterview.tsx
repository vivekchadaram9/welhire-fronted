import React from 'react';
import { Box, Typography, Paper, Checkbox, Button } from '@mui/material';
import SectionWrapper from '../../../components/SectionWrapper';

export default function FinalInterview() {
  const defaultQuestions = [
    { id: 'q1', text: 'Tell me about yourself' },
    { id: 'q2', text: 'Walk me through your resume' },
  ];

  return (
    <SectionWrapper sx={{ mt: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" p={1}>
        <Typography variant="h6" fontWeight="bold">
          Final Interview Set
        </Typography>
        <Button variant="contained">Save Template</Button>
      </Box>

      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography>Questions: {defaultQuestions.length}</Typography>
        <Typography>Time: 12 minutes</Typography>
      </Paper>

      <Typography variant="subtitle1" mb={1}>
        Default Intro Questions
      </Typography>
      {defaultQuestions.map((q) => (
        <Paper key={q.id} sx={{ p: 1, mb: 1, display: 'flex', alignItems: 'center' }}>
          <Checkbox defaultChecked />
          <Typography>{q.text}</Typography>
        </Paper>
      ))}

      {/* Buttons */}
      <Box mt={2} display="flex" flexDirection="column" gap={1}>
        <Button variant="outlined">Save Template</Button>
        <Button variant="outlined">Download</Button>
        <Button variant="outlined">Preview Interview</Button>
      </Box>
    </SectionWrapper>
  );
}
