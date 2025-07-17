 import SectionWrapper from "../../../components/SectionWrapper"
import { Box, Typography } from "@mui/material"
import { Icons } from "../../../assets/icons"

export const ExpertMode = () => {
  return (
    <Box p={2}>
      <SectionWrapper>
          <Box display="flex" alignItems="center" flexShrink={0} p={1}>
            <Icons.jobInterview height={30} width={30}/>,
            <Typography variant="h6" fontWeight="bold" sx={{ m: 1 }}>
              Interview Settings
            </Typography>
          </Box>
      </SectionWrapper>
  </Box>
  )
}
