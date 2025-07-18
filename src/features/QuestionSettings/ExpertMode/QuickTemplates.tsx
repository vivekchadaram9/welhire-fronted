import { Box, Typography, Paper } from '@mui/material';
import SectionWrapper from '../../../components/SectionWrapper';

export default function QuickTemplates() {
  const templates = [
    'Tell me about your experience with (TECHNOLOGY)',
    'Describe a challenge you solved using (TECHNOLOGY)',
    // …etc
  ];

  return (
    <SectionWrapper sx={{ mt: 2 }}>
      <Typography variant="subtitle1" mb={1}>
        Quick Question Templates
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={1}>
        {templates.map((t) => (
          <Paper
            key={t}
            variant="outlined"
            sx={{ p: 1, flex: '1 1 45%', cursor: 'pointer' }}
          >
            {t}
          </Paper>
        ))}
      </Box>
    </SectionWrapper>
  );
}
