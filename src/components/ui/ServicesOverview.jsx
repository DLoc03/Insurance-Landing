import React from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import Background from "@assets/background/background_2.jpg";

import Finance from "@assets/icon/finance.png";
import Dream from "@assets/icon/dream.png";
import Health from "@assets/icon/health.png";
import Shield from "@assets/icon/shield.png";
import Smile from "@assets/icon/smile.png";
import Angel from "@assets/icon/angel.png";
import CommonSection from "../common/CommonSection";
import CommonOverlay from "../common/CommonOverlay";

const topServices = [
  {
    name: "Xanh Tương Lai",
    image: Finance,
    desc: "Giải pháp tài chính linh hoạt, mục tiêu đa dạng.",
  },
  {
    name: "Xanh Ước Mơ",
    image: Dream,
    desc: "Giải pháp bảo vệ và tích lũy cho 2 thế hệ cùng lúc.",
  },
  {
    name: "Sống Khoẻ Mỗi Ngày",
    image: Health,
    desc: "Bảo hiểm linh hoạt với quyền lợi tới 2 tỷ đồng mỗi năm; có thể thêm quyền lợi tùy nhu cầu.",
  },
  {
    name: "Lá Chắn Xanh",
    image: Shield,
    desc: "Cung cấp 3 lớp bảo vệ cho đến 143 bệnh lý nghiêm trọng. ",
  },
  {
    name: "Dự Phòng Xanh",
    image: Smile,
    desc: "Chi trả 100% số tiền bảo hiểm mỗi ngày nằm viện và 300% nếu điều trị tích cực.",
  },
  {
    name: "Hộ Vệ xanh",
    image: Angel,
    desc: "Bảo vệ tai nạn cá nhân với mở rộng chi trả gãy xương, bỏng, nội tạng… ",
  },
];

function ServicesOverview() {
  return (
    <Box
      width={"100%"}
      height={{ xs: "100%", lg: 320 }}
      sx={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        py: 8,
      }}
    >
      <CommonOverlay />
      <Box zIndex={10} width={"100%"}>
        <Typography
          variant="h2"
          color="white"
          fontWeight={700}
          textAlign={"center"}
        >
          Các gói sản phẩm nổi bật
          <Divider
            sx={{
              border: "3px solid",
              borderColor: "secondary.main",
              width: 200,
              mx: "auto",
              mt: 1,
            }}
          />
        </Typography>
        <CommonSection listData={topServices} imageSize={"40px"} />
      </Box>
    </Box>
  );
}

export default ServicesOverview;
