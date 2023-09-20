import WhiteTextField from "../../stickersheet/WhiteTextField";
import PasswordTextField from "../../stickersheet/PasswordTextField";
import { Box, Typography } from "@mui/material";
import CustomButton from "../../stickersheet/CustomButton";

const LoginForm = ({ setToggleLogin }) => {
  return (
    <>
      <WhiteTextField label="Email" />
      <PasswordTextField />
      <Box style={{ width: "80%", marginTop: "-1%" }}>
        <Typography>Forgot Password?</Typography>
      </Box>
      <CustomButton
        text="Login"
        color="white"
        borderColor="white"
        hoverBackground="rgba(255,255,255,0.3)"
        hoverborderColor="white"
      />
      <CustomButton
        text="Don't have an account?"
        background="rgba(0,0,0,0.6)"
        hoverBackground="rgba(0,0,0,7)"
        onClick={() => {
          setToggleLogin(false);
        }}
      />
    </>
  );
};

export default LoginForm;
