// src/features/QuestionSettings/QuickSetup/QuickSetup.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  CircularProgress,
  Stack,
} from '@mui/material';
 
import type {
  QuickQuestionSettings,
  JdSkills
} from '../../../types/interview/interview.type';

import {
  fetchQuickSettings,
  fetchJdSkills,
  saveQuickSettings
} from '../services/interviewService';

import SummaryCards from '../components/SummaryCards';
import SkillsCoverage from '../components/SkillsCoverage';
import DefaultQuestions from '../components/DefaultQuestions';
import CommonButton from '../../../components/interview/CommonButton';
import { ArrowLeft, ArrowRight, ArrowRightToLine } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';
import Button from '../../../components/Button';
 
const QuickSetup: React.FC = () => {
  const { jdRefId } = useParams<{ jdRefId: string }>();
  const navigate = useNavigate();

  const [quick,  setQuick]  = useState<QuickQuestionSettings | null>(null);
  const [skills, setSkills] = useState<JdSkills | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving,  setSaving]  = useState(false);
  const [error,   setError]   = useState<string | null>(null);

  useEffect(() => {
    if (!jdRefId) return;
    setLoading(true);
    Promise.all([
      fetchQuickSettings(jdRefId).then(r => r.data.data),
      fetchJdSkills(jdRefId).then(r => r.data),
    ])
      .then(([quickData, skillsData]) => {
        setQuick(quickData);
        setSkills(skillsData);
      })
      .catch((err: any) => {
        if (axios.isAxiosError(err) && err.response?.status === 409) {
          const payload = err.response.data;
          const msgs = Array.isArray(payload.errors)
            ? payload.errors.join(' • ')
            : payload.message ?? 'Conflict occurred';
      
          setError(msgs);
        } else {
          const msg = 'Unable to load interview data.';
          toast.error(msg);
          setError(msg);
        }
      })
      .finally(() => {
        setLoading(false);
      });
   }, [jdRefId]);

const handleSave = async () => {
  if (!jdRefId) return;
  setSaving(true);
  try {
    await saveQuickSettings(jdRefId);
    toast.success('Interview generated successfully!');
  } catch {
    // toast.error already fired in interceptor
  } finally {
    setSaving(false);
  }
};
  if (loading) return <Box textAlign="center" pt={10}><CircularProgress /></Box>;
  if (error)   return <Typography color="error">{error}</Typography>;
  if (!quick || !skills) return null;

  return (
    <Box p={2}>
      <Box textAlign="left" mb={2}>
        <Typography variant="h6" fontWeight="bold">
          Your Interview is Ready
        </Typography>
        <Typography color="text.secondary">
          Auto-generated interview based on your requirements
        </Typography>
      </Box>

      <SummaryCards
        totalQuestions={quick.totalQuestions}
        duration={quick.duration}
        noOfCategories={quick.noOfCategories}
      />

      <SkillsCoverage
        hardSkills={skills.hardSkills}
        softSkills={skills.softSkills}
        behavioralCompetencies={skills.behavioralCompetencies}
        noOfTechSkillQuestions={quick.noOfTechSkillQuestions}
        noOfSoftSkillQuestions={quick.noOfSoftSkillQuestions}
        noOfBehavioralQuestions={quick.noOfBehavioralQuestions}
      />

      <DefaultQuestions questions={quick.defaultQuestions} />

      <Box sx={{ p: 2, pl:5,pr:5,  mt: 3, borderRadius: 1, bgcolor: 'white'}} display={'flex'} justifyContent={'space-between'} >   
         <Button
          label="Back"
          icon={<ArrowLeft />}
          onClick={() => navigate(-1)}
          backgroundColor="#fff"
          textColor="#000"
          border="1px solid rgba(0,0,0,0.12)"
          borderRadius="8px"
          padding="8px 16px"
        />

         <Button
          icon={<ArrowRight />}
          label={
            saving
              ? <CircularProgress size={16} color="inherit" />
              : 'Generate Interview'
          }
          onClick={handleSave}
          disabled={saving}
        />
      </Box>

 
    </Box>
  );
};

export default QuickSetup;
