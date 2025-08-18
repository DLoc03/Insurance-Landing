import React from "react";

import Box from "@mui/material/Box";

import { useHandleNavigate } from "@/utils";
import { PATHS } from "@/constants";

function CommonLogo({ logo, size }) {
  const handleNavigate = useHandleNavigate();
  return (
    <Box onClick={() => handleNavigate(PATHS.HOME)}>
      <img
        src={logo}
        alt={"Logo"}
        style={{
          height: size,
          width: size,
          objectFit: "contain",
          cursor: "pointer",
        }}
      />
    </Box>
  );
}

export default CommonLogo;
