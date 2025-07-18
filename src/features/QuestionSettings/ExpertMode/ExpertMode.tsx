// src/features/QuestionSettings/ExpertMode/ExpertMode.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, CircularProgress, Typography } from '@mui/material';
 
import { fetchDefaultIntroQuestions, fetchJdSkills } from '../services/interviewService';

import InterviewSettings from './InterviewSettings';
import QuestionBuilder    from '../QuestionBuilder/QuestionBuilder';
import FinalInterview     from './FinalInterview';
import { useDispatch } from 'react-redux';
import { setDefaultQuestions, setJdSkills } from '../reducer/interviewSlice';
import SectionWrapper from '../../../components/SectionWrapper';

export const ExpertMode: React.FC = () => {
  const { jdRefId } = useParams<{ jdRefId: string }>();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState<string | null>(null);

  useEffect(() => {
    if (!jdRefId) return;
    setLoading(true);

    Promise.all([
      fetchJdSkills(jdRefId).then((r) => r.data),
      fetchDefaultIntroQuestions().then((res) => res.data.data),
    ])
      .then(([ skillsData,defaultQuestions]) => {
        dispatch(setJdSkills(skillsData));
        dispatch(setDefaultQuestions(defaultQuestions));

      })
      .catch((e) => {
        console.error(e);
        setError('Failed to load interview data.');
      })
      .finally(() => setLoading(false));
  }, [jdRefId]);

  if (loading) return (
    <Box p={2} textAlign="center">
      <CircularProgress />
    </Box>
  );
  if (error) return (
    <Box p={2}>
      <Typography color="error">{error}</Typography>
    </Box>
  );

  return (
    <Box p={2}>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-2/3 space-y-4">
          <InterviewSettings />
            <SectionWrapper>
              <QuestionBuilder />
            </SectionWrapper>
        </div>
        <div className="w-full md:w-1/3">
          <FinalInterview />
        </div>
      </div>
    </Box>
  );
};
