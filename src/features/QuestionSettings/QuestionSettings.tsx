import { Grid } from '@mui/material'

import { interviewOptions } from '../../data/interviewOptions'
// import { useParams } from 'react-router-dom'
import InterviewOptionCard from '../../components/interview/InterviewOptionCard'

export const QuestionSettings = () => {
     // const { jobId } = useParams<{ jobId: string }>()
   
  return (
            <Grid container spacing={2} padding={2} display={'flex'} justifyContent={'space-around'} >
                {interviewOptions.map((opt) => {
                      return (
                            <Grid
                            container spacing={2}
                                >
                                <InterviewOptionCard
                                option={opt}
                           
                                />
                            </Grid>
                        )
                })}
            </Grid>  
            ) 
        }
