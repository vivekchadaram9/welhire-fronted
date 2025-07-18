import { Box, Typography } from '@mui/material';
import SkillsEvaluator from './SkillsEvaluator';

export default function PreGeneratedAIQs() {
  return (
    <Box mt={2}>
      <Typography variant="subtitle1" fontWeight="bold">
        Pre-generated AI Questions
      </Typography>
      <Typography variant="body2" color="text.secondary">
        (Here you could display AI-generated questions and allow editing…)
      </Typography>

       <SkillsEvaluator showSelectors={false} />

      <Typography variant="subtitle1" fontWeight="bold">
        Pre-generated Questions
      </Typography>

    </Box>
  );
}
