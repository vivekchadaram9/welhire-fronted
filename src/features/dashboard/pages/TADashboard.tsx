import {
  Box,
  Typography,
  Select,
  MenuItem,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,Grid,
  Divider,
} from '@mui/material';
import { ChevronRight, Plus } from 'lucide-react';
import Button from '../../../components/Button';
import Card from '../../../components/Card';
import CandidatesPipeline from '../components/CandidatesPipeline';

const overview = [
  {
    label: 'Active Jobs',
    value: 100,
    color: 'bg-gradient-to-b from-[#B1C5FF] via-[#D0D9F2] to-[#DBE4FE]',
    valueColor: 'text-[#3F89E2]',
  },
  {
    label: 'Applications Received',
    value: 1000,
    color: 'bg-gradient-to-b from-[#FFCD92] via-[#F5E4D1] to-[#FFEEDA]',
    valueColor: 'text-[#EB9C13]',
  },
  {
    label: 'CVs Shortlisted',
    value: 20,
    color: 'bg-gradient-to-b from-[#8FEEB6] via-[#D0F1DD] to-[#D8FAE6]',
    valueColor: 'text-[#38A460]',
  },
  {
    label: 'Interviews Scheduled',
    value: 10,
    color: 'bg-gradient-to-b from-[#F5B4BD] via-[#F5DEE1] to-[#FDE6E9]',
    valueColor: 'text-[#C64768]',
  },
];

const TADashboard = () => {
  return (
    <Box className='p-4 md:p-8 bg-[#f5f7fa]'>
      <Grid container justifyContent='space-between' alignItems='center'>
        <Typography variant='h4' fontWeight={'700'}>
          Good morning! 👋
        </Typography>
        <Button
          label='Candidate'
          icon={<Plus size={15} />}
          onClick={() => {}}
        />
      </Grid>

      <Typography className='text-gray-500 mt-1'>
        Here's what's happening with your recruitment activities today.
      </Typography>

      <Grid container spacing={2} className='mt-6'>
        {/* Overview Cards */}

        {/* <Grid container spacing={2} className='mt-6'> */}
        <Card className='flex-wrap flex-col py-4 px-4'>
          <Typography variant='body1' fontWeight={500}>
            Overview
          </Typography>
          <Grid container spacing={2} className='flex flex-row flex-wrap w-110'>
          {overview.map((item, i) => (   
              <Grid className={`p-4 ${item.color} flex-col rounded-[16px] w-50`} key={i}  >
                <Typography
                  variant='body2'
                  className='text-[#464646]'
                  marginBottom={2}
                >
                  {item.label}
                </Typography>
                <Typography variant='h6' className={item.valueColor}>
                  {item.value}
                </Typography>
              </Grid>
            
          ))}</Grid>
        </Card>
        {/* </Grid> */}
        {/* Candidates Pipeline */}
        {/* <Grid size={{ md: 4, xs: 12 }}>
          <Card className='p-4'>
            <Grid container justifyContent='space-between' alignItems='center'>
              <Typography variant='h6'>Candidates Pipeline</Typography>
              <Select size='small' value={'Select Job'} displayEmpty>
                <MenuItem value='Select Job'>Select Job</MenuItem>
              </Select>
            </Grid>
            <Box className='mt-4 space-y-2'>
              {[
                ['Applications Received', 100, 'text-red-600'],
                ['CVs Shortlisted', 20, 'text-yellow-600'],
                ['Interview Scheduled', 5, 'text-orange-600'],
                ['Interview Not Attended', 2, 'text-blue-600'],
                ['Interview Completed', 3, 'text-green-600'],
                ['Shortlisted by HM', 0, 'text-purple-600'],
              ].map(([label, val, color], i) => (
                <Grid container justifyContent='space-between' key={i}>
                  <Typography className={`${color} text-sm`}>
                    {label}
                  </Typography>
                  <Typography className='font-medium text-sm'>
                    {val.toString().padStart(2, '0')}
                  </Typography>
                </Grid>
              ))}
            </Box>
          </Card>
        </Grid> */}
        <CandidatesPipeline />
        {/* Quick Actions */}
        <Grid size={{ md: 4, xs: 12 }}>
          <Card className='p-4'>
            <Typography variant='h6'>Quick Actions</Typography>
            <Box className='mt-4 space-y-3'>
              {[
                'Scheduled Interview',
                'Review New Application',
                'Send Reminder',
              ].map((action, i) => (
                <Grid
                  container
                  justifyContent='space-between'
                  alignItems='center'
                  key={i}
                >
                  <Typography className='text-sm font-medium'>
                    {action}
                  </Typography>
                  <ChevronRight size={16} />
                </Grid>
              ))}
            </Box>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={2} className='mt-6'>
        {/* Recent Jobs */}
        <Grid size={{ md: 6, xs: 12 }}>
          <Card className='p-4'>
            <Typography variant='h6'>Recent Jobs</Typography>
            <Table size='small'>
              <TableHead>
                <TableRow>
                  {[
                    'Job Title',
                    'Applicant',
                    'Top Match - AI',
                    'Screened',
                    'Status',
                  ].map((head, i) => (
                    <TableCell key={i}>{head}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {[
                  ['Project Manager', 100, 1, 20, 'Active'],
                  ['UI UX Designer', 100, 10, 12, 'Active'],
                  ['Frontend Developer', 100, 4, 0, 'on Hold'],
                  ['Python Developer', 100, 6, 3, 'Active'],
                ].map(([title, app, match, screened, status], i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <Typography>{title}</Typography>
                      <Typography className='text-xs text-gray-500'>
                        Create on: 12/06/25
                      </Typography>
                    </TableCell>
                    <TableCell>{app}</TableCell>
                    <TableCell>{match}</TableCell>
                    <TableCell>
                      {screened.toString().padStart(2, '0')}
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={status}
                        color={status === 'Active' ? 'success' : 'warning'}
                        size='small'
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Typography
              variant='body2'
              className='text-right mt-2 text-gray-500'
            >
              View More...
            </Typography>
          </Card>
        </Grid>

        {/* Activity Logs */}
        <Grid size={{ md: 6, xs: 12 }}>
          <Card className='p-4'>
            <Typography variant='h6'>Activity Logs</Typography>
            <Box className='space-y-2 mt-3'>
              {[
                ['Rutvik Solanki', 'not attended interview.', '04:00 PM'],
                [
                  'Sahal Kazi',
                  'AI interview has been completed & score is 72%.',
                  '02:00 PM',
                ],
                ['Rutvik Solanki', 'not attended interview.', '04:00 PM'],
                ['Sahal Kazi', 'AI interview has been completed.', '02:00 PM'],
              ].map(([name, action, time], i) => (
                <Grid container justifyContent='space-between' key={i}>
                  <Typography variant='body2'>
                    <span className='font-medium'>{name}</span> {action}
                  </Typography>
                  <Typography variant='body2' className='text-gray-500'>
                    {time}, Today
                  </Typography>
                </Grid>
              ))}
            </Box>
            <Typography
              variant='body2'
              className='text-right mt-2 text-gray-500'
            >
              Load More...
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TADashboard;
