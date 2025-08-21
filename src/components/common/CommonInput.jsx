import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function CommonInput({
  label,
  value,
  onChange,
  placeholder = "",
  type = "text",
  fullWidth = true,
  inputSx = {},
  labelSx = {},
  isPhone = false,
  isEmail = false,
  ...rest
}) {
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("");

  const handleChange = (e) => {
    let val = e.target.value;

    // Phone formatting
    if (isPhone) {
      val = val.replace(/\D/g, "");
      val = val.match(/.{1,3}/g)?.join(".") || val;
    }

    onChange(val);

    // Email validation
    if (isEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (val && !emailRegex.test(val)) {
        setError(true);
        setHelperText("Email phải có dạng `example@gmail.com`");
      } else {
        setError(false);
        setHelperText("");
      }
    }
  };

  return (
    <Box width={fullWidth ? "100%" : "auto"} mb={2}>
      {label && (
        <Typography
          variant="body2"
          fontWeight={500}
          mb={0.5}
          sx={{
            fontSize: { xs: 12, md: 14 },
            ...labelSx,
          }}
        >
          {label}
        </Typography>
      )}
      <TextField
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        type={type}
        fullWidth={fullWidth}
        variant="outlined"
        size="small"
        error={error}
        helperText={helperText}
        InputProps={{
          sx: {
            fontSize: { xs: 12, md: 14 },
            py: 1,
            ...inputSx,
          },
        }}
        InputLabelProps={{
          shrink: false,
        }}
        {...rest}
      />
    </Box>
  );
}

export default CommonInput;
