import {
  Box,
  Paper,
  Typography,
  Stack,
} from '@mui/material';
import { Icons } from '../../../assets/icons';
import type { QuickQuestionSettings } from '../../../types/interview/interview.type';
import { theme } from '../../../styles/themes';
import SectionWrapper from '../../../components/SectionWrapper';

interface DefaultQuestionsProps {
  questions: QuickQuestionSettings['defaultQuestions'];
}

export default function DefaultQuestions({
  questions,
}: DefaultQuestionsProps) {
  return (
    <SectionWrapper>
      <Box display="flex" alignItems="center" mb={2}>
        <Icons.handShakeIcon width={24} height={24} />
        <Typography variant="h6" fontWeight="bold" sx={{ ml: 1 }}>
          Default Intro Questions
        </Typography>
      </Box>

      <Stack spacing={1}>
        {questions.length > 0 ? (
          questions.map((q) => (
            <Box
              key={q.id}
              component="span"
              sx={{
                display: 'block',
                p: 1.5,
                borderRadius: 1,
                bgcolor: 'grey.100',
              }}
            >
              <Typography variant="body2">{q.text}</Typography>
            </Box>
          ))
        ) : (
          <Typography color="text.secondary">No default questions</Typography>
        )}
      </Stack>
    </SectionWrapper>
  );
}
