import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Finance from "@assets/icon/finance.png";
import Dream from "@assets/icon/dream.png";
import Health from "@assets/icon/health.png";
import Shield from "@assets/icon/shield.png";
import Smile from "@assets/icon/smile.png";
import Angel from "@assets/icon/angel.png";
import Happy from "@assets/icon/happy.png";
import Dance from "@assets/icon/dance.png";
import Life from "@assets/icon/life.png";

import { PATHS } from "@/constants";
import ServiceCard from "@/components/common/ServiceCard";
import { useHandleNavigate } from "@/utils";
import ServicesOverview from "@/components/ui/ServicesOverview";
import GuestReview from "@/components/ui/GuestReview";

const topServices = [
  {
    name: "Xanh Tương Lai",
    image: Finance,
    desc: "Giải pháp tài chính linh hoạt, mục tiêu đa dạng.",
    key: "normal",
  },
  {
    name: "Xanh Ước Mơ",
    image: Dream,
    desc: "Giải pháp bảo vệ và tích lũy cho 2 thế hệ cùng lúc.",
    key: "normal",
  },
  {
    name: "Sống Khoẻ Mỗi Ngày",
    image: Health,
    desc: "Bảo hiểm linh hoạt với quyền lợi tới 2 tỷ đồng mỗi năm; có thể thêm quyền lợi tùy nhu cầu.",
    key: "normal",
  },
  {
    name: "Lá Chắn Xanh",
    image: Shield,
    desc: "Cung cấp 3 lớp bảo vệ cho đến 143 bệnh lý nghiêm trọng. ",
    key: "normal",
  },
  {
    name: "Dự Phòng Xanh",
    image: Smile,
    desc: "Chi trả 100% số tiền bảo hiểm mỗi ngày nằm viện và 300% nếu điều trị tích cực.",
    key: "normal",
  },
  {
    name: "Hộ Vệ xanh",
    image: Angel,
    desc: "Bảo vệ tai nạn cá nhân với mở rộng chi trả gãy xương, bỏng, nội tạng… ",
    key: "normal",
  },
  {
    name: "Hành trình hạnh phúc",
    image: Happy,
    desc: "Liên kết chung, linh hoạt thời gian đóng phí, bảo vệ tối ưu, thưởng lên đến 400%, miễn phí quản lý hợp đồng sau 85 tuổi.",
    key: "top",
  },
  {
    name: "An tâm vui sống",
    image: Dance,
    desc: "Bảo hiểm tử kỳ, đóng phí 3–10 năm nhưng bảo vệ đến 30 năm.",
    key: "top",
  },
  {
    name: "Cuộc sống tươi đẹp",
    image: Life,
    desc: "Bảo vệ bệnh hiểm nghèo toàn diện, chi trả đến 300%, thêm lợi ích cho trẻ hoặc theo giới tính, đóng phí ngắn hạn, bảo vệ đến 99 tuổi.",
    key: "top",
  },
];

function ServiceDetail() {
  const location = useLocation();
  const [results, setResults] = useState([]);

  const query = new URLSearchParams(location.search);
  const keyword = query.get("keyword") || "";

  const handleNavigate = useHandleNavigate();

  useEffect(() => {
    if (!keyword) {
      handleNavigate(PATHS.SERVICE);
      return;
    }
    const lowerKeyword = keyword.toLowerCase();
    const data = topServices.filter(
      (item) => item.name && item.name.toLowerCase().includes(lowerKeyword)
    );
    setResults(data);
  }, [keyword]);

  return (
    <Box
      py={2}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={2}
      mt={2}
    >
      <Grid
        container
        spacing={2}
        width={{ xs: "100%", lg: 1360 }}
        px={{ xs: 2, lg: 0 }}
      >
        {results.length > 0 && (
          <Grid size={12}>
            {" "}
            <Typography
              variant="body1"
              color="initial"
              textAlign={{ xs: "center", md: "left" }}
            >
              Kết quả cho <span style={{ fontWeight: 700 }}>"{keyword}"</span>
            </Typography>
          </Grid>
        )}
        {results.length > 0 ? (
          results.map((service, index) => (
            <Grid key={index} size={{ xs: 6, md: 2 }}>
              <ServiceCard service={service} imageSize={"40px"} />
            </Grid>
          ))
        ) : (
          <Grid size={12}>
            <Typography
              variant="body1"
              color="black"
              textAlign={"center"}
              my={4}
            >
              Không tìm thấy dịch vụ{" "}
              <span style={{ fontWeight: 700 }}>"{keyword}"</span>
            </Typography>
          </Grid>
        )}
      </Grid>
      <Box width={"100%"}>
        <ServicesOverview />
      </Box>
      <Box mt={{ xs: 12, md: 16 }} width={"100%"}>
        <GuestReview />
      </Box>
    </Box>
  );
}

export default ServiceDetail;
