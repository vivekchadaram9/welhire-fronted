import {
  Box,
  Stack,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import Card from '../../../components/Card';

const pipelineStages = [
  { label: 'Applications Received', color: 'bg-[#FF3B30]', count: '100' },
  { label: 'CVs Shortlisted', color: 'bg-[#FF9500]', count: '20' },
  { label: 'Interview Scheduled', color: 'bg-[#FFCC00]', count: '05' },
  { label: 'Interview Not Attended', color: 'bg-[#5856D6]', count: '02' },
  { label: 'Interview Completed', color: 'bg-[#34C759]', count: '03' },
  { label: 'Shortlisted by HM', color: 'bg-gray-600', count: '00' },
];

const total = pipelineStages.reduce((sum, stage) => sum + Number(stage.count), 0);

export default function CandidatesPipeline() {
  return (
    <Card className='p-4 space-y-1.5 flex-col'>
      <div className='flex justify-between items-center'>
        <Typography variant='body1' fontWeight={500}>Candidates Pipeline</Typography>
        {/* Dropdown */}
        <FormControl size='small' className='mb-4 w-30 '>
          <InputLabel sx={{ fontSize: 12 }}>Select Job</InputLabel>
          <Select label='Select Job' defaultValue='' sx={{ fontSize: 12 }}>
            <MenuItem value='aj'>All Jobs</MenuItem>
            <MenuItem value='pm'>Project Manager</MenuItem>
            <MenuItem value='dev'>Frontend Developer</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* Horizontal stacked progress bar */}
      <div className='flex h-2 overflow-hidden mb-4'>
        {pipelineStages.map((stage, i) => {
          const percent = total ? (Number(stage.count) / total) * 100 : 0;
          return (
            <div
              key={i}
              className={`${stage.color} h-full`}
              style={{ width: `${percent}%` }}
            />
          );
        })}
      </div>

      {/* Legend */}
      <Stack spacing={1}>
        {pipelineStages.map((stage, i) => (
          <div key={i} className='flex items-center justify-between text-sm'>
            <div className='flex items-center'>
              <span className={`w-2 h-2 mr-2 ${stage.color}`} />
              <Typography variant='body2' className='text-[#717171]'>
                {stage.label}
              </Typography>
            </div>
            <Typography variant='body2' fontWeight={700}>
              {stage.count}
            </Typography>
          </div>
        ))}
      </Stack>
    </Card>
  );
}
