// src/features/QuestionSettings/SkillsEvaluator.tsx
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Typography,
  Paper,
  Chip,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import SectionWrapper from "../../../components/SectionWrapper";
import type {
  InterviewQuestion,
  JdSkills,
  QuestionSettingsCounts,
} from "../../../types/interview/interview.type";
import { theme } from "../../../styles/themes";
import { useAppSelector } from "../../../store/hooks";
import {
  selectDefaultQuestions,
  selectJdSkills,
  updateQuestionSettings,
} from "../reducer/interviewSlice";
import DefaultQuestions from "../components/DefaultQuestions";

interface SkillsEvaluatorProps {
  showSelectors: boolean;
}

interface FormValues {
  hardCount: number;
  softCount: number;
  behavioralCount: number;
}

export default function SkillsEvaluator({
  showSelectors,
}: SkillsEvaluatorProps) {
  const dispatch = useDispatch();
  const skills = useAppSelector(selectJdSkills) as JdSkills | null;
  const defaultIntroQuestions = useAppSelector(
    selectDefaultQuestions
  ) as InterviewQuestion[];
  const { control } = useForm<FormValues>({
    defaultValues: { hardCount: 0, softCount: 0, behavioralCount: 0 },
  });

  if (!skills) {
    return (
      <Box textAlign="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  const sections = [
    {
      title: "Hard Skills",
      data: skills.hardSkills,
      field: "hardCount" as const,
      reduxKey: "noOfTechnicalSkillQuestions" as const,
    },
    {
      title: "Soft Skills",
      data: skills.softSkills,
      field: "softCount" as const,
      reduxKey: "noOfSoftSkillQuestions" as const,
    },
    {
      title: "Behavioral Competencies",
      data: skills.behavioralCompetencies,
      field: "behavioralCount" as const,
      reduxKey: "noOfBehavioralQuestions" as const,
    },
  ];
  const countOptions: React.ReactNode[] = [];
  for (let i = 0; i <= 10; i++) {
    countOptions.push(
      <MenuItem key={i} value={i}>
        {i}
      </MenuItem>
    );
  }
  return (
    <SectionWrapper sx={{ mt: 2 }}>
      <Typography variant="subtitle1" fontWeight="bold">
        Dynamic Question Generation
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={2}>
        Dynamic questions are generated per candidate just before the interview
        based on their CV and job context. These questions cannot be previewed
        or edited here.
      </Typography>

      <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
        Skills Evaluated (Grouped by Category)
      </Typography>
      <Stack spacing={2}>
        {sections.map(({ title, data, field, reduxKey }) => (
          <Paper key={title} variant="outlined" sx={{ p: 2, borderRadius: 1 }}>
            <Box display="flex" alignItems="center" mb={1}>
              <Typography variant="subtitle1" fontWeight="bold">
                {title}
              </Typography>

              {showSelectors && (
                <Controller
                  name={field}
                  control={control}
                  render={({ field: ctl }) => (
                    <FormControl size="small" sx={{ minWidth: 80, ml: "auto" }}>
                      <InputLabel>#Qs</InputLabel>
                      <Select
                        label="#Qs"
                        {...ctl}
                        onChange={(e) => {
                          const v = Number(e.target.value);
                          // update RHF form state
                          ctl.onChange(v);
                          // merge this single count into Redux
                          dispatch(updateQuestionSettings({ [reduxKey]: v }));
                        }}
                      >
                        {countOptions}
                      </Select>
                    </FormControl>
                  )}
                />
              )}
            </Box>

            <Stack direction="row" spacing={1} flexWrap="wrap">
              {data.map((s, idx) => {
                const label = typeof s === "string" ? s : s.skillName;
                const key =
                  typeof s === "string" ? `${title}-${idx}` : s.skillName;
                return (
                  <Chip
                    key={key}
                    label={label}
                    sx={{
                      bgcolor: `${theme.palette.secondary}`,
                      px: 1.5,
                      border: `1px solid ${theme.palette.grey[500]}`,
                    }}
                  />
                );
              })}
            </Stack>
          </Paper>
        ))}
      </Stack>

      {/* Estimated Output & Default Intro */}
      <Box display="flex" mt={3}>
        {/* left half */}
        <Box
          sx={{
            flex: "0 0 50%", // take exactly half
            pr: 1, // small right padding
          }}
        >
          <Typography variant="body2" fontWeight="bold" mb={1}>
            Estimated Output
          </Typography>
          <Box
            mt={3}
            sx={{
               border: `1px solid ${theme.palette.grey[300]}`,
                display: 'block',
                p: 1.5,
                borderRadius: 1,
                bgcolor: 'grey.100'
                
            }}
          >
            <Typography variant="body2">
              Questions:{" "}
              {skills.hardSkills.length +
                skills.softSkills.length +
                skills.behavioralCompetencies.length}
            </Typography>
            <Typography variant="body2">Time: 6 mins</Typography>
          </Box>
        </Box>

        {/* right half */}
        <Box
          sx={{
            flex: "0 0 50%", // take exactly half
            pl: 1, // small left padding
          }}
        >
          <Typography variant="body2" fontWeight="bold" mb={1} pl={2} >
           Default Intro Questions Included
          </Typography>
          <DefaultQuestions
            questions={defaultIntroQuestions}
            displayBorder={false}
          />
        </Box>
      </Box>
    </SectionWrapper>
  );
}
