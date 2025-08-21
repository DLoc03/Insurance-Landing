import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextareaAutosize from "@mui/material/TextareaAutosize";

function CommonInputAutosize({
  label,
  value,
  onChange,
  placeholder = "",
  fullWidth = true,
  inputSx = {},
  labelSx = {},
  minRows = 3,
  ...rest
}) {
  return (
    <Box width={fullWidth ? "100%" : "auto"} mb={2}>
      {label && (
        <Typography
          variant="body2"
          fontWeight={500}
          mb={0.5}
          sx={{ fontSize: { xs: 12, md: 14 }, ...labelSx }}
        >
          {label}
        </Typography>
      )}
      <TextareaAutosize
        minRows={minRows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: "100%",
          fontSize: "14px",
          border: "1px solid #ccc",
          borderRadius: 4,
          fontFamily: "'Open Sans', sans-serif",
          padding: "8px 12px",
          resize: "none",
          ...inputSx,
        }}
        {...rest}
      />
    </Box>
  );
}

export default CommonInputAutosize;
