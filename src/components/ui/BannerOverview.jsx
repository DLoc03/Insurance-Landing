import React, { useState, useEffect } from "react";

import Wave from "react-wavify";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import CommonIconButton from "../common/CommonIconButton";

import Banner1 from "@assets/banner/banner_1.jpg";
import Banner2 from "@assets/banner/banner_2.jpg";
import Banner3 from "@assets/banner/banner_3.jpg";
import CommonButton from "../common/CommonButton";
import { useHandleNavigate } from "@/utils";
import { PATHS } from "@/constants";
import CommonWave from "../common/CommonWave";

const banners = [Banner1, Banner2, Banner3];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  const handleNavigate = useHandleNavigate();

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
    <Box
      position="relative"
      width="100%"
      height="100vh"
      top={{ xs: 0, sm: 0, md: 0, lg: 100, xl: 100 }}
      overflow="hidden"
    >
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
          width={"100%"}
          mt={"-100px"}
        >
          <Typography
            variant="h1"
            color="white"
            fontWeight={700}
            textAlign={"center"}
            mb={2}
          >
            Ms. Phạm Tuyền
          </Typography>
          <Typography
            variant="h3"
            color="secondary.main"
            textAlign={"center"}
            px={{ xs: 6, sm: 2, md: 0, lg: 0, xl: 0 }}
          >
            Mang đến sự chuyên nghiệp và tận tâm
          </Typography>
          <Typography
            variant="h4"
            color="white"
            textAlign={"center"}
            px={{ xs: 8, md: 0 }}
            mt={1}
          >
            “Dịch vụ bảo hiểm toàn diện, linh hoạt và uy tín – đồng hành cùng
            bạn mỗi bước đường đời.”
          </Typography>
          <Box display={"flex"} gap={4} mt={4}>
            <CommonButton
              label={"Liên hệ"}
              sx={{ width: 140, height: 48 }}
              onClick={() => handleNavigate(PATHS.CONTACT)}
            />
            <CommonButton
              variant="outlined"
              label={"Dịch vụ"}
              sx={{
                width: 140,
                height: 48,
                borderColor: "white",
                color: "white",
              }}
              onClick={() => handleNavigate(PATHS.SERVICE)}
            />
          </Box>
        </Box>
      </Box>

      {/* Dots */}
      <Box
        position="absolute"
        bottom={140}
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
