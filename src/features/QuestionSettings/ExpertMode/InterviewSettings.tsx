import { Box, Typography, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import SectionWrapper from '../../../components/SectionWrapper';
import { Icons } from '../../../assets/icons';

export default function InterviewSettings() {
  return (
    <SectionWrapper>
      <Box display="flex" alignItems="center" mb={2} p={1}>
        <Icons.jobInterview width={24} height={24} />
        <Typography variant="h6" sx={{ ml: 1, fontWeight: 'bold' }}>
          Interview Settings
        </Typography>
      </Box>
      <Box display="flex" gap={2} flexWrap="wrap" p={1}>
        <TextField label="Interview Name" size="small" sx={{ flex: 1 }} />
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Duration</InputLabel>
          <Select label="Duration">
            <MenuItem value="15">15 minutes</MenuItem>
            <MenuItem value="30">30 minutes</MenuItem>
            <MenuItem value="45">45 minutes</MenuItem>
          </Select>
        </FormControl>
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Language</InputLabel>
          <Select label="Language">
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="es">Spanish</MenuItem>
          </Select>
        </FormControl>
        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel>Reviewer</InputLabel>
          <Select label="Reviewer">
            <MenuItem value="r1">Alice</MenuItem>
            <MenuItem value="r2">Bob</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </SectionWrapper>
  );
}
