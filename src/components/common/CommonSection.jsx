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
          spaceBetween={16}
          slidesPerView={"auto"}
          centeredSlides={true}
          centeredSlidesBounds={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          style={{
            width: "100%",
            height: 320,
          }}
        >
          {listData.map((item, index) => (
            <SwiperSlide key={index}>
              <ServiceCard
                service={item}
                labelColor={labelColor}
                variant={variant}
                imageSize={imageSize}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Grid container spacing={2} width={1360} px={{ sm: 2, lg: 0 }}>
          {listData.map((item, index) => (
            <Grid item size={{ xs: 12, sm: 4, lg: 2 }} key={index}>
              <ServiceCard
                service={item}
                labelColor={labelColor}
                variant={variant}
                imageSize={imageSize}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}
