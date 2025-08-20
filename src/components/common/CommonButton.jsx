import React from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function CommonButton({
  sx = {},
  children,
  variant = "contained",
  label,
  onClick = () => {},
}) {
  return (
    <Button variant={variant} onClick={onClick} sx={{ ...sx, borderRadius: 0 }}>
      {children}
      <Typography
        variant="body1"
        fontWeight={100}
        sx={{ textTransform: "none" }}
      >
        {label}
      </Typography>
    </Button>
  );
}

export default CommonButton;
