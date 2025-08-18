import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import CommonIconButton from "../common/CommonIconButton";

import Banner1 from "@assets/banner/banner_1.jpg";
import Banner2 from "@assets/banner/banner_2.jpg";
import Banner3 from "@assets/banner/banner_3.jpg";

const banners = [Banner1, Banner2, Banner3];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  return (
    <Box position="relative" width="100%" height="100vh" overflow="hidden">
      {/* Slides */}
      {banners.map((banner, index) => (
        <Box
          key={index}
          component="img"
          src={banner}
          alt={`Banner ${index}`}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: `${(index - current) * 100}%`,
            transition: "left 0.5s ease-in-out",
          }}
        />
      ))}

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      />

      {/* Prev/Next buttons */}
      <CommonIconButton
        onClick={prevSlide}
        sx={{
          position: "absolute",
          top: "50%",
          left: 16,
          transform: "translateY(-50%)",
          color: "white",
          backgroundColor: "rgba(0,0,0,0.4)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
          zIndex: 10,
        }}
      >
        <ArrowBackIosNewIcon />
      </CommonIconButton>
      <CommonIconButton
        onClick={nextSlide}
        sx={{
          position: "absolute",
          top: "50%",
          right: 16,
          transform: "translateY(-50%)",
          color: "white",
          backgroundColor: "rgba(0,0,0,0.4)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
          zIndex: 10,
        }}
      >
        <ArrowForwardIosIcon />
      </CommonIconButton>

      <Box
        height={"100%"}
        width={"100%"}
        position={"absolute"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        zIndex={2}
      >
        <Box
          maxWidth={1360}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={1}
        >
          <Typography variant="h2" color="white" fontWeight={700}>
            Ms. Tuyền
          </Typography>
          <Typography variant="" color="white">
            Hehe
          </Typography>
        </Box>
      </Box>

      {/* Dots */}
      <Box
        position="absolute"
        bottom={16}
        width="100%"
        display="flex"
        justifyContent="center"
        gap={1}
        zIndex={2}
      >
        {banners.map((_, index) => (
          <FiberManualRecordIcon
            key={index}
            sx={{
              fontSize: 12,
              color: index === current ? "white" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
            }}
            onClick={() => setCurrent(index)}
          />
        ))}
      </Box>
    </Box>
  );
}
