import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

const SectionWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(2),
  marginBottom:theme.spacing(2),
  borderRadius: theme.spacing(1.5),
  border: `1px solid ${theme.palette.grey[300]}`,
}))

export default SectionWrapper
