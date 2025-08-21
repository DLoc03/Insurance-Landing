import React from "react";

import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils";

function CustomerReviewCard({ avatar, name, location, review, sx = {} }) {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.2 }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          p: 3,
          borderRadius: 2,
          boxShadow: "0 5px 25px 0 rgb(0 0 0 / .1)",
          backgroundColor: "white",
          maxWidth: 800,
          textAlign: "center",
          height: { xs: 360, md: 240 },
          mt: 4,
          ...sx,
        }}
      >
        <Avatar src={avatar} alt={name} sx={{ width: 64, height: 64 }} />
        <Typography variant="h6" fontWeight={700}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {location}
        </Typography>
        <Divider sx={{ width: { xs: 120, md: 200 }, mb: 2 }} />
        <Typography variant="body1" color="text.primary" px={{ xs: 2, md: 0 }}>
          {review}
        </Typography>
      </Box>
    </motion.div>
  );
}

export default CustomerReviewCard;
