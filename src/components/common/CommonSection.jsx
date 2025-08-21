import React from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";

// Swiper
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import ServiceCard from "./ServiceCard";

import { fadeIn } from "@/utils";

import { motion } from "framer-motion";

export default function CommonSection({
  listData = [],
  labelColor = "primary.main",
  variant = "h4",
  imageSize = "100%",
  sx = {},
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 40,
      }}
    >
      {isMobile ? (
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          centeredSlidesBounds={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          style={{
            width: "100%",
          }}
        >
          {listData.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                height: isMobile ? "240px" : "300px",
              }}
            >
              <motion.div
                variants={fadeIn("up", index * 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.2 }}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ServiceCard
                  service={item}
                  labelColor={labelColor}
                  variant={variant}
                  imageSize={imageSize}
                  height={160}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Grid container spacing={2} width={1360} px={{ sm: 2, lg: 0 }}>
          {listData.map((item, index) => (
            <Grid item size={{ xs: 12, sm: 4, lg: 2 }} key={index}>
              <motion.div
                variants={fadeIn("up", index * 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.2 }}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ServiceCard
                  service={item}
                  labelColor={labelColor}
                  variant={variant}
                  imageSize={imageSize}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}
