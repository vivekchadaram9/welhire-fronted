// src/components/molecules/InterviewOptionCard.tsx
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  Link,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  Box
} from '@mui/material';
import dotImg from '../../assets/images/interview/dot.svg';
import type { InterviewOption } from '../../data/interviewOptions';
import { colors } from '../../styles/themes';

interface Props {
  option: InterviewOption;
}

const InterviewOptionCard: React.FC<Props> = ({ option }) => {
  const navigate = useNavigate();
  const { jdRefId } = useParams<{ jdRefId: string }>();
  // pull the last segment off your route template:
  const segment = option.route.split('/').pop()!;  // "quick-setup", etc.

  const go = () => {
    // absolute path:
    navigate(`/jobs/${jdRefId}/${segment}`);
  };

  return (
    <Card
      onClick={go}
      variant="outlined"
      sx={{
        width: '340px',
        borderRadius: '12px',          
        boxShadow: 1,                  
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        pl: 5,
        pr: 5,
        pt: 2,
        pb: 2,
        '&:hover': { boxShadow: 3 },
      }}
    >
      <CardContent sx={{ p: 0, flexGrow: 1 }}>
  
        <Typography
          variant="subtitle1"
          align="center"
          color={colors.mainBackground}
          gutterBottom
        >
          {option.title}
        </Typography>

         <Box
          component="img"
          src={option.image}
          alt={option.title}
          sx={{
            width: 163,
            height: 143,
            mx: 'auto',
            my: 1,
          }}
        />

         <Box textAlign="left" my={2}>
          <Chip
            label={option.time}
            variant="outlined"
            size="small"
            sx={{
              borderRadius: '16px',
              px: 1.5,
              color: 'text.secondary',
              borderColor: 'grey.300',
            }}
          />
        </Box>

         <Typography
          variant="body2"
          color="text.primary"
          fontWeight="fontWeightMedium"
          mb={1}
        >
          {option.description}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={1}>
          {option.target}
        </Typography>

         <Typography variant="body2" mb={1}>
          <Link
            component="button"
            color="primary"
            underline="hover"
            textAlign={'left'}
            onClick={(e) => {
              e.stopPropagation();
              go();
            }}
            sx={{ fontWeight: 'fontWeightMedium' }}
          >
            {option.goal}
          </Link>
        </Typography>

         <List dense>
          {option.features.map((feat) => (
            <ListItem key={feat} disableGutters sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 24 }}>
                <Box
                  component="img"
                  src={dotImg}
                  alt=""
                  sx={{
                    width: 8,
                    height: 8,
                  }}
                />
              </ListItemIcon>
              <Typography variant="body2" color="text.secondary">
                {feat}
              </Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default InterviewOptionCard;
