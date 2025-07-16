import React, { useState, type ChangeEvent } from "react";
import {
  Box,
  Button,
  MenuItem,
  Select,
  type SelectChangeEvent,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import OtpVerification from "./OtpVerification";

interface CreateAccountFormProps {
  onCancel: () => void;
  onNext?: () => void;
}

const CreateAccountForm: React.FC<CreateAccountFormProps> = ({ onCancel, onNext }) => {
  const theme = useTheme();
  const [role, setRole] = useState<string>("");
  const [size, setSize] = useState<string>("");

  const [showOtp, setShowOtp] = useState<boolean>(false);

  const onSubmit = () => {
    setShowOtp(true);
    if (onNext) onNext();
  };

  const handleRoleChange = (event: SelectChangeEvent<string>) => {
    setRole(event.target.value as string);
  };

  const handleSizeChange = (event: SelectChangeEvent<string>) => {
    setSize(event.target.value as string);
  };

  return (
    <>
      {showOtp ? (
        <OtpVerification type="register" onCancel={() => setShowOtp(false)} />
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, mb: 1, color: theme.palette.text.primary }}
          >
            New Account
          </Typography>

          <Select
            value={role}
            onChange={handleRoleChange}
            displayEmpty
            fullWidth
            variant="standard"
            sx={{
              fontSize: "14px",
              color: theme.palette.text.primary,
              "& .MuiSelect-root": { padding: "8px 0" },
            }}
          >
            <MenuItem value="">
              <span style={{ color: "#9E9E9E" }}>Select your Role</span>
            </MenuItem>
            <MenuItem value="HR">HR</MenuItem>
            <MenuItem value="Recruiter">Recruiter</MenuItem>
            <MenuItem value="Hiring Manager">Hiring Manager</MenuItem>
          </Select>

          <TextField
            placeholder="Name"
            fullWidth
            variant="standard"
            InputProps={{
              style: { fontSize: "14px", color: theme.palette.text.primary },
            }}
          />
          <TextField
            placeholder="Email"
            fullWidth
            variant="standard"
            InputProps={{
              style: { fontSize: "14px", color: theme.palette.text.primary },
            }}
          />
          <TextField
            placeholder="Phone"
            fullWidth
            variant="standard"
            InputProps={{
              style: { fontSize: "14px", color: theme.palette.text.primary },
            }}
          />
          <TextField
            placeholder="Company Name"
            fullWidth
            variant="standard"
            InputProps={{
              style: { fontSize: "14px", color: theme.palette.text.primary },
            }}
          />

          <Select
            value={size}
            onChange={handleSizeChange}
            displayEmpty
            fullWidth
            variant="standard"
            sx={{
              fontSize: "14px",
              color: theme.palette.text.primary,
              "& .MuiSelect-root": { padding: "8px 0" },
            }}
          >
            <MenuItem value="">
              <span style={{ color: "#9E9E9E" }}>Size</span>
            </MenuItem>
            <MenuItem value="Small">Small</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Large">Large</MenuItem>
          </Select>

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Button
              onClick={onCancel}
              variant="outlined"
              sx={{
                borderRadius: "6px",
                padding: "6px 24px",
                textTransform: "none",
                fontSize: "14px",
                backgroundColor: "#D4D4D4",
                color: theme.palette.text.primary,
                border: "none",
              }}
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              sx={{
                borderRadius: "6px",
                padding: "6px 32px",
                background:
                  "linear-gradient(90deg, #005AA9 -6.78%, #002443 265.25%)",
                textTransform: "none",
                fontSize: "14px",
                "&.Mui-disabled": {
                  background: "#cccccc !important",
                  color: "#666666 !important",
                },
                "&:hover": {
                  background:
                    "linear-gradient(90deg, #004b8f -6.78%, #001c35 265.25%)",
                },
              }}
              onClick={onSubmit}
            >
              Next
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default CreateAccountForm;
















// import React, { type ChangeEvent, useState } from "react";
// import { FaUser } from "react-icons/fa";
// import { Box, Button, Divider, MenuItem, Select, Typography, useTheme, type SelectChangeEvent } from "@mui/material";
// import GoogleLogo from "../../../assets/icons/googleLogo.svg";
// import MicrosoftLogo from "../../../assets/icons/microsoft.svg";
// import OtpVerification from "./OtpVerification";
// import Input from "../../../components/Input";

// interface CreateAccountFormProps {
//   onCancel: () => void;
//   onNext?: () => void;
// }

// const CreateAccountForm: React.FC<CreateAccountFormProps> = ({ onCancel, onNext }) => {
//   const theme = useTheme();
//   const [userInput, setUserInput] = useState<string>("");
//   const [showOtp, setShowOtp] = useState<boolean>(false);
//   const [role, setRole] = useState<string>("");
//   const [size, setSize] = useState<string>("");

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setUserInput(e.target.value);
//   };

//   const handleSizeChange = (event: SelectChangeEvent<string>) => {
//     setSize(event.target.value as string);
//   }

//   const handleRoleChange = (event: SelectChangeEvent<string>) => {
//     setRole(event.target.value as string);
//   };

//   const cleanInput = userInput.replace(/\s+/g, "").trim();

//   const isEmail = (value: string): boolean =>
//     /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
//   const isMobile = (value: string): boolean => /^\d{10}$/.test(value);

//   const isValidInput = isEmail(cleanInput) || isMobile(cleanInput);

//   const onSubmit = () => {
//     setShowOtp(true);
//     if (onLoginClick) {
//       onLoginClick();
//     }
//   };

//   return (
//     <>
//       {showOtp ? (
//         <OtpVerification type="login" onCancel={() => setShowOtp(false)} />
//       ) : (
//         <Box>
//           <Typography
//             variant="subtitle1"
//             sx={{ fontWeight: 600, mb: 1, color: theme.palette.text.primary }}
//           >
//             New Account
//           </Typography>

//           <Select
//             value={role}
//             onChange={handleRoleChange}
//             displayEmpty
//             fullWidth
//             variant="standard"
//             sx={{
//               fontSize: "14px",
//               color: theme.palette.text.primary,
//               "& .MuiSelect-root": { padding: "8px 0" },
//             }}
//           >
//             <MenuItem value="">
//               <span style={{ color: "#9E9E9E" }}>Select your Role</span>
//             </MenuItem>
//             <MenuItem value="HR">HR</MenuItem>
//             <MenuItem value="Recruiter">Recruiter</MenuItem>
//             <MenuItem value="Hiring Manager">Hiring Manager</MenuItem>
//           </Select>

//           <Input
//             placeholder="Name"
//             value={userInput}
//             onChange={handleInputChange}
//             styles={{
//               padding: '10px 10px 10px 0px',}
//             }
//           />

//           <Input
//             placeholder="Email"
//             value={userInput}
//             onChange={handleInputChange}
//             styles={{
//               padding: '10px 10px 10px 0px',}
//             }
//           />

//           <Input
//             placeholder="Phone"
//             value={userInput}
//             onChange={handleInputChange}
//             styles={{
//               padding: '10px 10px 10px 0px',}
//             }
//           />

//           <Input
//             placeholder="Company Name"
//             value={userInput}
//             onChange={handleInputChange}
//             styles={{
//               padding: '10px 10px 10px 0px',}
//             }
//           />

//           <Select
//             value={size}
//             onChange={handleSizeChange}
//             displayEmpty
//             fullWidth
//             variant="standard"
//             sx={{
//               fontSize: "14px",
//               color: theme.palette.text.primary,
//               "& .MuiSelect-root": { padding: "8px 0" },
//             }}
//           >
//             <MenuItem value="">
//               <span style={{ color: "#9E9E9E" }}>Size</span>
//             </MenuItem>
//             <MenuItem value="Small">Small</MenuItem>
//             <MenuItem value="Medium">Medium</MenuItem>
//             <MenuItem value="Large">Large</MenuItem>
//           </Select>

          
//         </Box>
//       )}
//     </>
//   );
// };

// export default CreateAccountForm;
