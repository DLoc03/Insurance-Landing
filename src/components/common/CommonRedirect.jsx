import React from "react";

import Box from "@mui/material/Box";

import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import Typography from "@mui/material/Typography";
import CommonIconButton from "./CommonIconButton";
import { useHandleNavigate } from "@/utils";
import { PATHS } from "@/constants";

function CommonRedirect({ path = "" }) {
  const handleNavigate = useHandleNavigate();
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={80}
      sx={{ backgroundColor: "#00283e" }}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        width={"100%"}
        maxWidth={1360}
        px={{ xs: 2, lg: 0 }}
        alignItems={"center"}
      >
        <Typography
          variant="h4"
          color="white"
          display={{ xs: "none", md: "block" }}
        >
          {path}
        </Typography>
        <Box display={"flex"} gap={1} alignItems={"center"}>
          <CommonIconButton onClick={() => handleNavigate(PATHS.HOME)}>
            <HomeIcon sx={{ color: "white" }} />
          </CommonIconButton>
          <NavigateNextIcon sx={{ color: "white" }} />
          <Box>
            <Typography
              variant="body1"
              color="white"
              sx={{ cursor: "pointer", ":hover": { color: "secondary.main" } }}
            >
              {path}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CommonRedirect;
