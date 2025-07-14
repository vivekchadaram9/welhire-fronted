import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Chip from '@mui/material/Chip'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Box from '@mui/material/Box'
import dotImg from '../../assets/images/interview/dot.svg'
import type { InterviewOption } from '../../data/interviewOptions'
 
interface Props {
  option: InterviewOption
}

const InterviewOptionCard: React.FC<Props> = ({ option }) => {
  const navigate = useNavigate()
  const go = () => navigate(option.route.replace(':jobId',  ''))

  return (
    <Card
      onClick={go}
      variant="outlined"
      sx={{
        borderRadius: 4,
        boxShadow: 1,
        cursor: 'pointer',
        display: 'flex',
        padding:4,
        flexDirection: 'column',
        '&:hover': { boxShadow: 3 },
      }}
    >
      <CardContent sx={{ p: 2, flexGrow: 1 }}>
        <Typography
          variant="subtitle1"
          align="center"
          fontWeight={600}
          gutterBottom
          color='#292F66'
        >
          {option.title}
        </Typography>

        <CardMedia
          component="img"
          image={option.image}
          alt={option.title}
          sx={{ width: 163, height: 143, mx: 'auto', my: 1 }}
        />


        <Box textAlign="left" mb={2} mt={2}>
          <Chip
            label={option.time}
            variant="outlined"
            size="small"
             sx={{ borderRadius: '12px', px: 1.5,color:'#5D5C6D' }}
          />
        </Box>

        <Typography variant="body2" color='#5D5D5D' fontWeight={600} mb={2}>
          {option.description}
        </Typography>
        <Typography variant="body2" color="#838383" mb={1} sx={{fontWeight:'700'}} >
          {option.target}
        </Typography>

        <Typography variant="body2" color='#4B78FD' mb={1}>
          <Link
            component="button"
            underline="hover"
            onClick={(e) => {
              e.stopPropagation()
              go()
            }}
            sx={{ fontWeight: 500 }}
          >
            {option.goal }
          </Link>
        </Typography>

        <List dense>
          {option.features.map((feat) => (
            <ListItem key={feat} disableGutters sx={{ py: 0.5 }}  >
              <ListItemIcon sx={{ minWidth: 24 }}>
                 <Box
                  component="img"
                  src={dotImg}
                  alt="dot"
                  sx={{ width: 8, height: 8 }}
                />
              </ListItemIcon>
              <Typography variant="body2" color='#656576' >{feat}</Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}

export default InterviewOptionCard
