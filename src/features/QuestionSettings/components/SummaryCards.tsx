import { Box, Stack, Paper, Typography } from "@mui/material";
import { Icons } from "../../../assets/icons";

interface SummaryCardsProps {
  totalQuestions: number;
  duration: number;
  noOfCategories: number;
}

const bgColors = ["#E0EEFF", "#F2E5FF", "#ECFFF0"];
const textColors = ["#4F7FEE", "#9F51EC", "#58B67A"];

export default function SummaryCards({
  totalQuestions,
  duration,
  noOfCategories,
}: SummaryCardsProps) {
  const items = [
    { label: "Total Questions", value: totalQuestions },
    { label: "Duration ", value: duration+" min" },
    { label: "Categories", value: noOfCategories },
  ];

  return (
    <Paper
      elevation={0}
      sx={{
        bgcolor: "white",
        p: 2,
        borderRadius: 1.5,
      }}
    >
      <Box display="flex" alignItems="center" flexShrink={0} p={1}>
        <Icons.interviewOverviewIcon height={30} width={30}/>,
        <Typography variant="h6" fontWeight="bold" sx={{ m: 1 }}>
          Interview Overview
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" flexWrap="wrap" gap={2}>
        <Stack direction="row" spacing={2} flexWrap="wrap" flexGrow={1}>
          {items.map((item, idx) => (
            <Paper
              key={item.label}
              elevation={0}
              sx={{
                flex: "1 1 160px",
                minWidth: 0,
                p: 1.5,
                textAlign: "center",
                bgcolor: bgColors[idx],
                color:textColors[idx],
                borderRadius: 1.5,
              }}
            >
              <Typography variant="h4" fontWeight="bold">
                {item.value}
              </Typography>
              <Typography color="text.secondary">{item.label}</Typography>
            </Paper>
          ))}
        </Stack>
      </Box>
    </Paper>
  );
}
