import React from "react";
import IconButton from "@mui/material/IconButton";
import { iconStyle } from "../styles";

function CommonIconButton({ children, sx = {}, props, onClick = () => {} }) {
  return (
    <IconButton sx={{ ...iconStyle, ...sx }} {...props} onClick={onClick}>
      {children}
    </IconButton>
  );
}

export default CommonIconButton;
