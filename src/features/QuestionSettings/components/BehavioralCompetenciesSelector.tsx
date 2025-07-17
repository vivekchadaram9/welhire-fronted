import React from 'react';
import { Paper, Typography, Checkbox, Box } from '@mui/material';

interface Props {
  items: string[];
  selected: Set<string>;
  onToggle: (name: string) => void;
}

export default function BehavioralCompetenciesSelector({ items, selected, onToggle }: Props) {
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
        Behavioral Competencies
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
        {items.map(name => (
          <React.Fragment key={name}>
            <Box display="flex" alignItems="center">
              <Checkbox
                size="small"
                checked={selected.has(name)}
                onChange={() => onToggle(name)}
                sx={{ mr: 1 }}
              />
              <Typography noWrap variant='body2'>{name}</Typography>
            </Box>
            {/* empty placeholder to keep the grid aligned */}
            <Box />
          </React.Fragment>
        ))}
      </Box>
    </Paper>
  );
}
