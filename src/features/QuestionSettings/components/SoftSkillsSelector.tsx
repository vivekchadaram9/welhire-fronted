// src/features/QuestionSettings/QuickSetup/components/SoftSkillsSelector.tsx
import React from 'react';
import { Paper, Typography, Checkbox, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import type { Level } from '../../../utils/constants';

interface Skill { skillName: string; skillLevelMax?: number; experienceYears?: number }
interface Props {
  items: Skill[];
  levels: Record<string, Level>;
  selected: Set<string>;
  onToggle: (name: string) => void;
  onLevelChange: (name: string, lvl: Level) => void;
}

export default function SoftSkillsSelector({ items, levels, selected, onToggle, onLevelChange }: Props) {
  return (
    <Paper
      elevation={0}
      sx={{
        flex: '1 1 300px',
        border: '1px solid',
        borderColor: 'grey.300',
        borderRadius: 2,
        p: 2,
      }}
    >
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        Soft Skills
      </Typography>
      <Box
        component="div"
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          rowGap: 1,
          columnGap: 2,
        }}
      >
        {items.map(item => (
          <React.Fragment key={item.skillName}>
            <Box display="flex" alignItems="center">
              <Checkbox
                size="small"
                checked={selected.has(item.skillName)}
                onChange={() => onToggle(item.skillName)}
                sx={{ mr: 1 }}
              />
              <Typography noWrap variant='body2'>{item.skillName}</Typography>
            </Box>
            <FormControl size="small"  fullWidth>
              <InputLabel sx={{fontSize:'12px'}}>Level</InputLabel>
              <Select
                value={levels[item.skillName] ?? ''}
                label="Not Set"
                onChange={e => onLevelChange(item.skillName, e.target.value as Level)}
                disabled={!selected.has(item.skillName)}
                 sx={{ height: 32 }}
              >
                <MenuItem value="Beginner">Beginner</MenuItem>
                <MenuItem value="Intermediate">Intermediate</MenuItem>
                <MenuItem value="Advanced">Advanced</MenuItem>
              </Select>
            </FormControl>
          </React.Fragment>
        ))}
      </Box>
    </Paper>
  );
}
