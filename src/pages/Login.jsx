import { Box, Typography, Button, styled, IconButton, Tooltip, Zoom } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhiteTextField from "../stickersheet/WhiteTextField";
import theme from "../constants/theme";
import PasswordTextField from "../stickersheet/PasswordTextField";

const bgLink =
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

const LoginBackgroundBox = styled(Box)({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: `url(${bgLink}) center/100vw`,
  [theme.breakpoints.down("md")]: {
    background: `url(${bgLink}) center/100vh`,
  },
  [theme.breakpoints.down("xs")]: {
    background: `url(${bgLink}) center/200vh`,
    height: "200vh",
  },
});

const Logo = styled("img")({
  width: "50px",
  height: "50px",
});

const LoginBox = styled(Box)({
  width: "25%",
  height: "75%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  background: "rgba(255,255,255, 0.15)",
  boxShadow: "0px 0px 10px white",
  backdropFilter: "blur(15px)",
  [theme.breakpoints.down("lg")]: {
    width: "80%",
  },
  [theme.breakpoints.down("xs")]: {
    width: "90%",
    height: "175vh",
  },
});

const Login = () => {
  return (
    <LoginBackgroundBox>
      <LoginBox component="form">
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <Logo src="https://drive.google.com/thumbnail?id=186PlHb1sL_BwtypVYwnHE2u-uA2iY2Jn" />
          <Typography
            variant="h6"
            color="white"
            style={{ textShadow: "0px 0px 10px white" }}
          >
            Gamified To-Do List
          </Typography>
        </Box>
        <WhiteTextField label="Email" />
        <PasswordTextField />
        <Box style={{ width: "80%", marginTop: "-15px" }}>
          <Typography>Forgot Password?</Typography>
        </Box>
        <Button
          variant="outlined"
          size="large"
          sx={{
            textTransform: "none",
            borderColor: "white",
            color: "white",
            textShadow: "0px 0px 15px black",
            "&:hover": {
              background: "rgba(255,255,255,0.3)",
              borderColor: "white",
            },
          }}
        >
          Sign Up
        </Button>
        <Box>
          <Typography>Other options to login</Typography>
          <Box style={{display: "flex", justifyContent: "center"}}>
            <Tooltip title="Google" TransitionComponent={Zoom} arrow><IconButton size="large"><GoogleIcon style={{ color: "white" }}/></IconButton></Tooltip>
            <Tooltip title="Microsoft" TransitionComponent={Zoom} arrow><IconButton size="large"><MicrosoftIcon style={{ color: "white" }}/></IconButton></Tooltip>
            <Tooltip title="Facebook" TransitionComponent={Zoom} arrow><IconButton size="large"><FacebookIcon style={{ color: "white" }}/></IconButton></Tooltip>
          </Box>
        </Box>
      </LoginBox>
    </LoginBackgroundBox>
  );
};

export default Login;
