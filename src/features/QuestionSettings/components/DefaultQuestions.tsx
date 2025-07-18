import {
  Box,
  Typography,
  Stack,
} from '@mui/material';
import { Icons } from '../../../assets/icons';
import type { InterviewQuestion } from '../../../types/interview/interview.type';
import SectionWrapper from '../../../components/SectionWrapper';
import { theme } from '../../../styles/themes';

interface DefaultQuestionsProps {
  questions: InterviewQuestion[];
  displayBorder:boolean;
}

export default function DefaultQuestions({
  questions,
  displayBorder=true
}: DefaultQuestionsProps) { 
  return (
    <SectionWrapper    sx={{    border: displayBorder ? `1px solid ${theme.palette.grey[300]}` : 'none' }} >
     { displayBorder && (<Box display="flex" alignItems="center" mb={2}>
        <Icons.handShakeIcon width={24} height={24} />
        <Typography variant="h6" fontWeight="bold" sx={{ ml: 1 }}>
          Default Intro Questions
        </Typography>
      </Box>)}

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
