import React, { type ChangeEvent, useState } from "react";
import { FaUser } from "react-icons/fa";
import { Box, Button, Divider, Typography, useTheme } from "@mui/material";
import GoogleLogo from "../../../assets/icons/googleLogo.svg";
import MicrosoftLogo from "../../../assets/icons/microsoft.svg";
import OtpVerification from "./OtpVerification";
import Input from "../../../components/Input";

interface LoginFormProps {
  onLoginClick?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginClick }) => {
  const theme = useTheme();
  const [userInput, setUserInput] = useState<string>("");
  const [showOtp, setShowOtp] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const cleanInput = userInput.replace(/\s+/g, "").trim();

  const isEmail = (value: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const isMobile = (value: string): boolean => /^\d{10}$/.test(value);

  const isValidInput = isEmail(cleanInput) || isMobile(cleanInput);

  const onSubmit = () => {
    setShowOtp(true);
    if (onLoginClick) {
      onLoginClick();
    }
  };

  return (
    <>
      {showOtp ? (
        <OtpVerification type="login" onCancel={() => setShowOtp(false)} />
      ) : (
        <Box>
          <Input
            placeholder="Email ID/Mobile Number"
            icon={<FaUser />}
            value={userInput}
            onChange={handleInputChange}
          />

          <Box sx={{ margin: "20px 0" }}>
            <Button
              variant="contained"
              sx={{
                background:
                  "linear-gradient(90deg, #005AA9 -6.78%, #002443 265.25%)",
                textTransform: "none",
                width: "100%",
                "&.Mui-disabled": {
                  background: "#cccccc !important",
                  color: "#666666 !important",
                },
                "&:hover": {
                  background:
                    "linear-gradient(90deg, #004b8f -6.78%, #001c35 265.25%)",
                },
              }}
              onClick={() => isValidInput && onSubmit()}
              disabled={!isValidInput}
            >
              Login with OTP
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              margin: "20px 0",
              fontSize: "12px",
              color: "#999",
            }}
          >
            <Divider sx={{ flex: 1, borderTop: "1px dashed #bbbaba" }} />
            <Typography
              sx={{
                mx: 2,
                fontSize: "14px",
                color: theme.palette.text.primary,
                fontWeight: 400,
              }}
            >
              or continue with
            </Typography>
            <Divider sx={{ flex: 1, borderTop: "1px dashed #bbbaba" }} />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "14px",
              flexWrap: "nowrap",
              padding: "20px",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                backgroundColor: "#fff",
                color: theme.palette.text.primary,
                border: "1px solid #ddd",
                fontSize: "14px",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "140px",
              }}
            >
              <img
                src={GoogleLogo}
                alt="Google"
                style={{ width: "24px", marginRight: "8px" }}
              />
              Google
            </Button>

            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                backgroundColor: "#fff",
                color: theme.palette.text.primary,
                border: "1px solid #ddd",
                fontSize: "14px",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "140px",
              }}
            >
              <img
                src={MicrosoftLogo}
                alt="Microsoft"
                style={{ width: "24px", marginRight: "8px" }}
              />
              Microsoft
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default LoginForm;
