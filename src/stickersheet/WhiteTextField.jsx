import { TextField } from "@mui/material";

const style = {
  "& .MuiInputLabel-root, & .MuiInputLabel-root.Mui-focused, & .MuiInputBase-root":
    {
      color: "white",
    },
  "& .MuiOutlinedInput-root, & .MuiOutlinedInput-root.Mui-focused": {
    "& > fieldset": { borderColor: "white", backgroundColor: "rgba(255,255,255,0.1)" },
  },
  "& .MuiOutlinedInput-root:hover": {
    "& > fieldset": {
      borderColor: "white",
      backgroundColor: "rgba(255,255,255,0.3)",
    },
  },
  width: "80%"
};

const WhiteTextField = ({
  label,
  variant = "outlined",
  type = "text",
  InputProps = {},
}) => {
  return (
    <TextField
      required
      type={type}
      label={label}
      variant={variant}
      sx={style}
      InputProps={InputProps}
    />
  );
};

export default WhiteTextField;
