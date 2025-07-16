import React, { useRef, useState, type ChangeEvent } from "react";
import { Typography, Box, Link, useTheme } from "@mui/material";
import CountdownTimer from "../../../components/CountDownTimer";

interface OtpFieldProps {
  formType: string;
  type?: "email" | "phone";
  label?: string;
  size?: number;
  user: string;
  errorMssg?: string;
  countdownDuration?: number;
}

const OtpField: React.FC<OtpFieldProps> = ({
  formType,
  type = "email",
  size = 6,
  user,
  countdownDuration = 45,
}) => {
  const theme = useTheme();
  const [otp, setOtp] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [otpErrorMessage, setOtpErrorMessage] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOtpChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    
    const otpValue = e.target.value.replace(/\D/g,"");
    console.log("otpValue",otpValue);
    if(otpValue.length>size)return;
    setOtp(otpValue);
    setError("");
    setOtpErrorMessage("");
  };

  const handleResendOtp = () => {
    setOtp("");
    setError("");
    setOtpErrorMessage("");
  };

  const displayOtp = () => {
    return otp.length>0 ? otp+"*".repeat(size - otp.length) : Array(size).fill("*").join("")
  }

  return (
    <Box>
      {formType === "login" && <Typography
        sx={{ color: theme.palette.text.secondary, fontSize: 12, mt: 1 }}
      >
        We’ve sent an OTP to your {type === "email" ? "email" : "phone"}:{" "}
        <Link href={ type === "email" ? `mailto:${user}` : `tel:${user}`}>{user}</Link>.<br />
        Please check your inbox.
      </Typography>}

      <Typography
        sx={{ color: theme.palette.text.secondary, fontSize: 12, mt: 2 }}
      >
        {type === "email" ? "Enter Email OTP" : "Enter Phone OTP"}
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid #ddd",
          pb: 1,
          flexWrap: "wrap",
          mt: 2,
          justifyContent:"space-between",
          gap:"1rem"
        }}
      >
        <Box
        sx={{
          position:"relative",
          flex: 1,
          userSelect:"none",
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          marginRight: "1rem",
          fontSize:"1rem",
          color:"#ddd"
        }}
        onClick={()=>inputRef?.current?.focus()}
        >
        {displayOtp().split("").map((letter)=><span style={{color: letter == "*" ? "#ddd" : "#000"}}>{letter}</span>)}
        <input
          type="text"
          ref={inputRef}
          maxLength={size}
          inputMode="numeric"
          pattern="[0-9]*"
          value={otp}
          onChange={handleOtpChange}
          style={{
            position:"absolute",
            opacity:0,
            pointerEvents:"none"
          }}
        />
        </Box>
        <div style={{height:"1.5rem",width:"0.1rem",background:"#ddd",color:"#ddd",display:"inline-block"}}></div>
        <CountdownTimer
          initialSeconds={countdownDuration}
          onResend={handleResendOtp}
          setOtpErrorMessage={setOtpErrorMessage}
        />
      </Box>

      {(error || otpErrorMessage) && (
        <Typography
          sx={{ color: theme.palette.text.primary, fontSize: 12, mt: 1 }}
        >
          {error || otpErrorMessage}
        </Typography>
      )}
    </Box>
  );
};

export default OtpField;
