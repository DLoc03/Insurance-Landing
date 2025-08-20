import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import CustomerReviewCard from "./CustomerReviewCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Divider } from "@mui/material";

function CustomerReviewSlider({ reviews }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        width: "100%",
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& .swiper-button-prev, & .swiper-button-next": {
          color: "primary.main",
          top: "50%",
          width: { xs: 24, md: 40 },
          height: { xs: 24, md: 40 },
          "&::after": {
            fontSize: { xs: 16, md: 24 },
          },
        },

        // Center dots
        "& .swiper-pagination": {
          bottom: 10,
          "& .swiper-pagination-bullet": {
            background: "primary.main",
            opacity: 0.7,
            width: { xs: 8, md: 12 },
            height: { xs: 8, md: 12 },
          },
          "& .swiper-pagination-bullet-active": {
            opacity: 1,
            background: "secondary.main",
          },
        },
      }}
    >
      <Typography
        variant="h2"
        color="primary.main"
        fontWeight={700}
        mb={2}
        textAlign={"center"}
      >
        Cảm nghĩ khách hàng về dịch vụ tư vấn của Ms. Phạm Tuyền
      </Typography>
      <Typography variant="body1" color="black" mb={2} textAlign={"center"}>
        Lắng nghe những câu chuyện thực tế từ khách hàng đã trải nghiệm dịch vụ
        tư vấn tài chính của Ms. Phạm Tuyền
      </Typography>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        centeredSlides={true}
        centeredSlidesBounds={true}
        pagination={{ clickable: true }}
        style={{ width: "100%" }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              height: isMobile ? "500px" : "380px",
            }}
          >
            <CustomerReviewCard {...review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default CustomerReviewSlider;
