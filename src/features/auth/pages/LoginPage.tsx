import React, { useState } from "react";
import { Box, Button, useTheme } from "@mui/material";
import WelhireLogo from "../../../assets/icons/welhireLogo.svg";
import LoginForm from "../components/LoginForm";
import CreateNewAccountImg from "../../../assets/icons/createNewAccount.svg";
import CreateAccountForm from "../components/CreateAccountForm";

const LoginPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"login" | "create">("login");
  const [showOtp, setShowOtp] = useState<boolean>(false);
  const theme = useTheme();

  const handleLoginClick = () => setShowOtp(true);
  const handleRegisterClick = () => setShowOtp(true);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        width:"100%",
        backgroundColor: "#f5f5f5",
        padding: "18px",
      }}
    >
      <Box
        component="img"
        src={WelhireLogo}
        alt="WeHire Logo"
        sx={{ maxWidth: "180px", mb: 2 }}
      />

      <Box
        sx={{
          display: "flex",
          backgroundColor: "#fff",
          borderRadius: "12px",
          overflow: "hidden",
          width: { xs: "100%", sm: "95%", md: "75%" },
          // maxWidth: "900px",
          // minWidth: "60vw",
          height: { xs: "auto", md: "80vh" },
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Left Panel */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: { xs: "20px", md: "18px" },
          }}
        >
          <Box
            component="img"
            src={CreateNewAccountImg}
            alt="Illustration"
            sx={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>

        {/* Right Panel */}
        <Box
          sx={{
            flex: 1,
            padding: { xs: "10px 30px", sm: "30px 20px", md: "35px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              borderRadius: "8px",
              overflow: "hidden",
              marginBottom: "20px",
              padding: "4px",
              backgroundColor: "#f0f4f8",
            }}
          >
            <Button
              onClick={() => setActiveTab("login")}
              sx={{
                flex: 1,
                color: "#000",
                backgroundColor: activeTab === "login" ? "#fff" : "transparent",
                fontWeight: activeTab === "login" ? "bold" : "normal",
                textTransform: "none",
                borderRadius: "0.2rem",
                boxShadow:activeTab === "login" ? "0 1.2rem 0.8rem -1rem rgba(0,0,0,0.4)" : "none",
              }}
              disableElevation
            >
              Log in
            </Button>

            <Button
              onClick={() => setActiveTab("create")}
              sx={{
                flex: 1,
                backgroundColor: activeTab === "create" ? "#fff" : "transparent",
                fontWeight: activeTab === "create" ? "bold" : "normal",
                color: "#000",
                textTransform: "none",
                boxShadow:activeTab === "create" ? "0 1.2rem 0.8rem -1rem rgba(0,0,0,0.4)" : "none",
              }}
              disableElevation
            >
              Create New Account
            </Button>
          </Box>

          {activeTab === "login" ? (
            <LoginForm onLoginClick={handleLoginClick} />
          ) : (
            <CreateAccountForm
              onCancel={() => setActiveTab("login")}
              onNext={handleRegisterClick}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
