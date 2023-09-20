import WhiteTextField from "../../stickersheet/WhiteTextField";
import PasswordTextField from "../../stickersheet/PasswordTextField";
import CustomButton from "../../stickersheet/CustomButton";

const SignupForm = ({setToggleLogin}) => {
  return (
    <>
      <WhiteTextField label="Email" />
      <PasswordTextField />
      <PasswordTextField label="Confirm Password"/>
      <CustomButton
        text="Signup"
        color="white"
        borderColor="white"
        hoverBackground="rgba(255,255,255,0.3)"
        hoverborderColor="white"
      />
      <CustomButton
        text="Already have an account?"
        background="rgba(0,0,0,0.6)"
        hoverBackground="rgba(0,0,0,7)"
        onClick={() => {
          setToggleLogin(true);
        }}
      />
    </>
  );
};

export default SignupForm;
