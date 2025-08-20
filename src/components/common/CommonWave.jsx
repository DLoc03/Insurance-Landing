import React from "react";

import Box from "@mui/material/Box";

function CommonWave({ waveCustom, sx = {}, color = "white" }) {
  return (
    <Box
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        display: "block",
        ...sx,
      }}
    >
      <path fill={color} fillOpacity="1" d={waveCustom}></path>
    </Box>
  );
}

export default CommonWave;
