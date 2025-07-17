import React, { useState, type ChangeEvent } from "react";
import { Typography, Box, Checkbox, Link, useTheme } from "@mui/material";
import OtpField from "./OtpField";
import Button from "../../../components/Button";

interface OtpVerificationProps {
  type?: "login" | "register";
  onCancel: () => void;
}

const OtpVerification: React.FC<OtpVerificationProps> = ({ type = "login", onCancel }) => {
  const theme = useTheme();
  const [otp, setOtp] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [termsAccepted, setTermsAccepted] = useState<boolean>(true);

  const handleTermsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTermsAccepted(e.target.checked);
    setError("");
  };

  const handleSubmit = () => {
    if (!termsAccepted) {
      setError("Please accept the terms to proceed.");
    } else if (otp.length !== 6) {
      setError("Please enter a 6-digit OTP.");
    } else if (otp !== "123456") {
      setError("The entered OTP is invalid. Please try again.");
    } else {
      setError("");
      alert("OTP Verified: " + otp);
    }
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
        OTP Verification
      </Typography>

      {type === "login" ? (
        <OtpField
        formType={type}
          type="email"
          label="Enter Email OTP"
          size={6}
          user="vish.pc3@gmail.com"
          errorMssg="Otp Expired"
          countdownDuration={45}
        />
      ) : (
        <>
          <OtpField
            formType={type}
            type="email"
            label="Enter Email OTP"
            size={6}
            user="vish.pc3@gmail.com"
            errorMssg="Otp Expired"
            countdownDuration={45}
          />
          <OtpField
            formType={type}
            type="phone"
            label="Enter Phone OTP"
            size={4}
            user="9876543210"
            errorMssg="Otp Expired"
            countdownDuration={30}
          />
        </>
      )}

       <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          mt: 2,
          flexWrap: "wrap",
        }}
      >
        <Checkbox
          id="terms"
          checked={termsAccepted}
          onChange={handleTermsChange}
          sx={{
            boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.15)',
            borderRadius: "4px",
            p: 0,
            mr: 1,
            mt: "2px",
             '& .MuiSvgIcon-root': {
       borderRadius: 1,
       backgroundColor: 'white',
       borderColor:"red",
       color:"white",
       boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.15)',
     },
     '&.Mui-checked .MuiSvgIcon-root': {
      color: 'blue',
    }
          }}
        />
        <Typography
          variant="body2"
          sx={{
            fontSize: "13px",
            color: theme.palette.text.primary,
            lineHeight: 1.5,
            flex: 1,
            minWidth: 0,
          }}
        >
          By signing up, you agree to our{" "}
          <Link href="#" sx={{ color: "#007AFF", textDecoration: "none" }}>
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="#" sx={{ color: "#007AFF", textDecoration: "none" }}>
            Privacy Policy
          </Link>
          .
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
          mt: 3,
        }}
      >
        <Button
          label="Cancel"
          backgroundColor="#f0f0f0"
          textColor={theme.palette.text.primary}
          onClick={onCancel}
        />
        <Button
          label="Submit"
          onClick={handleSubmit}
        />
      </Box>
    </Box>
  );
};

export default OtpVerification;
