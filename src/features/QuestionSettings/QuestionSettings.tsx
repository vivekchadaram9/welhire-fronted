import { Box, Grid, Typography } from "@mui/material";

import { interviewOptions } from "../../data/interviewOptions";
// import { useParams } from 'react-router-dom'
import InterviewOptionCard from "../../components/interview/InterviewOptionCard";

export const QuestionSettings = () => {
  // const { jobId } = useParams<{ jobId: string }>()

  return (
    <Box sx={{ py: 6, px: 2 }}>
      <Box textAlign="center" mb={4}>
        <Typography
           component="h2"
          gutterBottom
          sx={{ fontWeight: 700,fontSize: '20px' }}
        >
          How do you prefer to build interviews?
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Choose the approach that fits your workflow
        </Typography>
      </Box>
      <Grid
        container
        spacing={2}
        padding={2}
        display={"flex"}
        justifyContent={"space-around"}
      >
        {interviewOptions.map((opt) => {
          return (
            <Grid container spacing={2}>
              <InterviewOptionCard option={opt} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
