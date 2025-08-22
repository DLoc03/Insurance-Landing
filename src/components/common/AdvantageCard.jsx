import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import StarIcon from "@mui/icons-material/Star";

function AdvantageCard({ advantage = {}, advantageHeading = "" }) {
  return (
    <Box
      sx={{
        ":hover": {
          transform: "scale(1.05)",
          transition: "0.3s ease-in-out",
        },
        borderRadius: 2,
        boxShadow: "0 5px 25px 0 rgb(0 0 0 / .1)",
        height: "100%",
      }}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          px: 2,
          py: 1,
          display: "flex",
          alignItems: "center",
          borderRadius: "8px 8px 0 0",
          gap: 3,
        }}
      >
        <Typography variant="h1" color="white" fontWeight={700}>
          {advantageHeading}
        </Typography>
        <Box display={"flex"} flexDirection={"column"} gap={1}>
          <Typography variant="h4" color="white">
            {advantage.heading}
          </Typography>
          {advantage.description && (
            <>
              <Divider sx={{ border: "1px solid white" }} />
              <Typography variant="body2" color="white">
                {advantage.description}
              </Typography>
            </>
          )}
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={"column"} p={2}>
        {advantage.content.map((content, index) => (
          <Box display={"flex"} gap={1} key={index}>
            <StarIcon sx={{ color: "yellow" }} />
            <Typography variant="body1" color="initial">
              {content}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default AdvantageCard;
