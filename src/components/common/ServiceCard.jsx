import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { keyframes } from "@mui/system";

const flipX = keyframes`
  from { transform: rotateY(0deg); }
  to { transform: rotateY(360deg); }
`;

function ServiceCard({
  service,
  labelColor = "primary.main",
  variant = "h4",
  imageSize = "100%",
  isShowDesc = true,
  height = 280,
  sx = {},
}) {
  return (
    <>
      {/* Card */}
      <Box
        sx={{
          ...sx,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          backgroundColor: "white",
          p: 2,
          height: height,
          borderRadius: 2,
          boxShadow: "0 5px 25px 0 rgb(0 0 0 / .1)",
          width: "100%",
          mx: "auto",
          cursor: "pointer",
          transition: "all 0.3s ease",
          "&:hover": {
            background:
              "linear-gradient(0deg,rgba(153, 240, 255, 1) 0%, rgba(252, 255, 204, 1) 100%)",
            transform: "translateY(-10px)",
            "& img": {
              animation: `${flipX} 1s linear infinite`,
              filter: "brightness(0.8)",
            },
          },
        }}
      >
        <img
          src={service.image}
          alt={service.name}
          title={service.name}
          width={imageSize}
          style={{ pointerEvents: "none" }}
        />

        <Typography
          variant={variant}
          color={labelColor}
          fontWeight={700}
          textAlign="center"
          minHeight={{ xs: 20, lg: 50 }}
        >
          {service.name}
        </Typography>

        {isShowDesc && (
          <Typography
            variant="body1"
            color="text.primary"
            mt={2}
            textAlign="center"
          >
            {service.desc}
          </Typography>
        )}
      </Box>
    </>
  );
}

export default ServiceCard;
