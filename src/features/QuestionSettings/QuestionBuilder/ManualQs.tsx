import { Box, Typography, TextField, Button } from '@mui/material';
import QuickTemplates from '../ExpertMode/QuickTemplates';

export default function ManualQs() {
  return (
    <Box mt={2}>
      <Typography variant="subtitle1" fontWeight="bold" mb={1}>
        Manual Questions
      </Typography>
      <TextField
        label="Type your question"
        fullWidth
        multiline
        rows={3}
        size="small"
      />
      <Button variant="contained" sx={{ mt: 1 }}>
        Add Question
      </Button>

       <QuickTemplates />
    </Box>
  );
}
