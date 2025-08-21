import React, { useState } from "react";
import {
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
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
  sx = {},
}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Card */}
      <Box
        onClick={handleOpen}
        sx={{
          ...sx,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          backgroundColor: "white",
          p: 2,
          height: { xs: 220, lg: 280 },
          borderRadius: 2,
          boxShadow: "0 5px 25px 0 rgb(0 0 0 / .1)",
          width: "100%",
          mx: "auto",
          cursor: "pointer",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "secondary.main",
            transform: "translateY(-10px)",
            "& img": {
              animation: `${flipX} 1s linear infinite`,
              filter: "brightness(0.8)",
            },
            "& h4, & h5, & h6, & .MuiTypography-root": {
              color: "white",
            },
            "& p": { color: "white" },
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

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>
          Thông tin gói <span style={{ fontWeight: 700 }}>{service.name}</span>
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="body1" gutterBottom>
            {service.desc}
          </Typography>
          {service.fullInfo && (
            <Typography variant="body2" color="text.secondary">
              {service.fullInfo}
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Đóng
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ServiceCard;
