import React from "react";

import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { useHandleNavigate } from "@/utils";

function CommonMenuItem({
  children,
  variant = "body3",
  color = "white",
  label = "Menu",
  path = "/",
  sx = {},
}) {
  const handleNavigate = useHandleNavigate();
  return (
    <MenuItem
      sx={{ ...sx, display: "flex", alignItems: "center", gap: 1 }}
      onClick={() => handleNavigate(path)}
    >
      <Box sx={{ color: color }}>{children}</Box>
      <Typography variant={variant} color={color}>
        {label}
      </Typography>
    </MenuItem>
  );
}

export default CommonMenuItem;
