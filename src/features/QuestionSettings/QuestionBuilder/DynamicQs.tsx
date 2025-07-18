import {
  Box,
} from '@mui/material';
import SkillsEvaluator from './SkillsEvaluator';

export default function DynamicQs() {
  return (
    <Box mt={2}>
       <SkillsEvaluator showSelectors/>
    </Box>
  );
}
