import { Box, CircularProgress } from '@mui/material'
 import type { ReactNode } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Button from '../../../components/Button'

interface ActionButtonsProps {
  onBack: () => void
  onNext: () => void
  backLabel?: string
  nextLabel?: string | ReactNode
  backDisabled?: boolean
  nextDisabled?: boolean
  nextLoading?: boolean
  backIcon?: ReactNode
  nextIcon?: ReactNode
}

export default function ActionButtons({
  onBack,
  onNext,
  backLabel = 'Back',
  nextLabel = 'Next',
  backDisabled = false,
  nextDisabled = false,
  nextLoading = false,
  backIcon = <ArrowLeft />,
  nextIcon = <ArrowRight />,
}: ActionButtonsProps) {
  return (
    <Box
      sx={{
        p: 2,
        pl: 5,
        pr: 5,
        mt: 3,
        borderRadius: 1,
        bgcolor: 'white',
      }}
      display="flex"
      justifyContent="space-between"
    >
      <Button
        label={backLabel}
        icon={backIcon}
        onClick={onBack}
        disabled={backDisabled}
        backgroundColor="#fff"
        textColor="#000"
        border="1px solid rgba(0,0,0,0.12)"
        borderRadius="8px"
        padding="8px 16px"
      />

      <Button
        icon={nextIcon}
        label={nextLoading ? <CircularProgress size={16} color="inherit" /> : nextLabel}
        onClick={onNext}
        disabled={nextDisabled || nextLoading}
      />
    </Box>
  )
}
