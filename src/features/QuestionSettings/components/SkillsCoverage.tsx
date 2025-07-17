import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Chip,
  Stack,
} from '@mui/material';
import { Icons } from '../../../assets/icons';
import type { SkillEntry } from '../../../types/interview/interview.type';

interface SkillsCoverageProps {
  hardSkills: SkillEntry[];
  softSkills: SkillEntry[];
  behavioralCompetencies: string[];
  noOfTechSkillQuestions: number;
  noOfSoftSkillQuestions: number;
  noOfBehavioralQuestions: number;
}

const getDifficulty = (level: number, max: number) => {
  const pct = level / max;
  if (pct < 0.4) {
    return { label: 'Beginner', bg: '#D7F9D7', color: '#2E7D32' };
  } else if (pct < 0.75) {
    return { label: 'Intermediate', bg: '#FFF9C4', color: '#F9A825' };
  } else {
    return { label: 'Advanced', bg: '#FFCDD2', color: '#C62828' };
  }
};

export default function SkillsCoverage({
  hardSkills,
  softSkills,
  behavioralCompetencies,
  noOfTechSkillQuestions,
  noOfSoftSkillQuestions,
  noOfBehavioralQuestions,
}: SkillsCoverageProps) {
  const sections: {
    title: string;
    icon: React.ReactNode;
    data: SkillEntry[] | string[];
    count: number;
    bg: string;
    countBg:string;
  }[] = [
 
    {
      title: 'Hard Skills',
      icon: <Icons.hardSkills width={24} height={24} />,
      data: hardSkills,
      count: noOfTechSkillQuestions,
      bg: '#E0EEFF',
      countBg:'#4F7FEE'
    },
    {
      title: 'Soft Skills',
      icon: <Icons.softSkills width={24} height={24} />,
      data: softSkills,
      count: noOfSoftSkillQuestions,
      bg: '#ECFFF0',
      countBg:'#58B67A'
    },
    {
      title: 'Behavioral Competencies',
      icon: <Icons.behavior width={24} height={24} />,
      data: behavioralCompetencies,
      count: noOfBehavioralQuestions,
      bg: '#F2E5FF',
      countBg:'#9F51EC'
    },
  ];

  return (
    <Paper
      elevation={0}
      sx={{
        bgcolor: 'white',
        p: 3,
        borderRadius: 2,
        mt: 4,
      }}
    >
      <Box display="flex" alignItems="center" mb={2}>
        <Icons.multiTasking width={24} height={24} />
        <Typography variant="h6" fontWeight="bold" sx={{ ml: 1 }}>
          Skills Coverage
        </Typography>
      </Box>

      <Stack direction="row" spacing={2} flexWrap="wrap">
        {sections.map((sec) => (
          <Paper
            key={sec.title}
            elevation={0}
            sx={{
              flex: '1 1 240px',
              minWidth: 0,
              p: 2,
              bgcolor: sec.bg,
              borderRadius: 1.5,
            }}
          >
            <Box display="flex" alignItems="center" mb={1}>
              {sec.icon}
              <Typography variant="subtitle1" fontWeight="bold" sx={{ ml: 1 }}>
                {sec.title}
              </Typography>
              <Chip
                label={`${sec.count} Qs`}
                size="small"
                sx={{ ml: 'auto', bgcolor: sec.countBg,fontWeight:'bold' }}
              />
            </Box>

            {sec.data.length > 0 ? (
              (sec.data as (SkillEntry | string)[]).map((item) =>
                typeof item === 'string' ? (
                  <Box
                    key={item}
                    sx={{
                      p: 1,
                      mb: 1,
                      borderRadius: 1,
                      bgcolor: 'white',
                    }}
                  >
                    <Typography variant="body2">{item}</Typography>
                  </Box>
                ) : (
                  <Box
                    key={item.skillName}
                    sx={{
                      p: 1,
                      mb: 1,
                      borderRadius: 1,
                      bgcolor: 'white',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography variant="body2">
                      {item.skillName}
                    </Typography>
                    {(() => {
                      const diff = getDifficulty(
                        item.skillLevel,
                        item.skillLevelMax
                      );
                      return (
                        <Box
                          component="span"
                          sx={{
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 1,
                            bgcolor: diff.bg,
                            color: diff.color,
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {diff.label}
                        </Box>
                      );
                    })()}
                  </Box>
                )
              )
            ) : (
              <Typography color="text.secondary">No data</Typography>
            )}
          </Paper>
        ))}
      </Stack>
    </Paper>
  );
}
