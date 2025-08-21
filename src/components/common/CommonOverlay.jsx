import React from "react";

import Box from "@mui/material/Box";

function CommonOverlay({ backgroundColor = "rgba(0,0,0,0.6)" }) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: backgroundColor,
      }}
    />
  );
}

export default CommonOverlay;
