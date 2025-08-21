import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import LabelIcon from "@mui/icons-material/Label";

import Finance from "@assets/icon/finance.png";
import Dream from "@assets/icon/dream.png";
import Health from "@assets/icon/health.png";
import Shield from "@assets/icon/shield.png";
import Smile from "@assets/icon/smile.png";
import Angel from "@assets/icon/angel.png";
import Happy from "@assets/icon/happy.png";
import Dance from "@assets/icon/dance.png";
import Life from "@assets/icon/life.png";

import ServiceCard from "@/components/common/ServiceCard";
import { Divider } from "@mui/material";

import ServiceGuest from "@assets/albums/image_3.png";
import GuestReview from "@/components/ui/GuestReview";

import { motion } from "framer-motion";
import { fadeIn, scaleUp, zoomIn } from "@/utils";

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

function Service() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);
  const [topService, setTopService] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setKeyword(value);
    setResults(
      topServices.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    const data = topServices.filter((service) => service.key === "top");
    setTopService(data);
  }, []);

  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      my={4}
    >
      <Grid
        container
        spacing={2}
        width={{ xs: "100%", lg: 1360 }}
        px={{ xs: 2, lg: 0 }}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.2 }}
          >
            <Typography
              variant="h3"
              color="initial"
              textAlign={{ xs: "center", md: "left" }}
            >
              Các gói dịch vụ cung cấp
            </Typography>
          </motion.div>
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }}>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.2 }}
          >
            <TextField
              fullWidth
              size="small"
              label="Tìm dịch vụ..."
              variant="outlined"
              value={keyword}
              onChange={handleChange}
              InputProps={{ style: { fontSize: 12 } }}
              InputLabelProps={{ style: { fontSize: 12 } }}
            />
          </motion.div>
        </Grid>
        {!keyword && (
          <>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                variants={zoomIn(0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.2 }}
              >
                <Box
                  p={2}
                  sx={{
                    backgroundColor: "primary.main",
                    borderLeft: "8px solid",
                    borderColor: "secondary.main",
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  <motion.div
                    variants={fadeIn("left", 0.6)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.2 }}
                  >
                    <Typography variant="h5" color="white">
                      Bộ tư vấn theo nhu cầu (nhu cầu của bạn)
                    </Typography>
                  </motion.div>
                  <motion.div
                    variants={fadeIn("left", 0.8)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.2 }}
                  >
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: "white",
                        border: "1px solid white",
                      }}
                    />
                  </motion.div>
                  <motion.div
                    variants={fadeIn("left", 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.2 }}
                  >
                    <Typography variant="body2" color="white">
                      Manulife đưa ra phương pháp tư vấn dựa trên mục tiêu của
                      khách hàng như:
                    </Typography>
                  </motion.div>
                  <motion.div
                    variants={fadeIn("left", 1.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.2 }}
                  >
                    <Typography variant="body2" color="white">
                      <LabelIcon sx={{ fontSize: 12 }} /> Bảo vệ (tử vong,
                      thương tật, bệnh hiểm nghèo, sức khỏe…)
                    </Typography>
                  </motion.div>
                  <motion.div
                    variants={fadeIn("left", 1.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.2 }}
                  >
                    <Typography variant="body2" color="white">
                      <LabelIcon sx={{ fontSize: 12 }} /> Đầu tư, tiết kiệm cho
                      giáo dục, hưu trí…
                    </Typography>
                  </motion.div>
                  <motion.div
                    variants={fadeIn("left", 1.6)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.2 }}
                  >
                    <Typography variant="body2" color="white">
                      Khách hàng được hướng dẫn chọn sản phẩm phù hợp nhất thông
                      qua tư vấn cá nhân hóa.
                    </Typography>
                  </motion.div>
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                height={{ xs: 200, md: "100%" }}
                width={"100%"}
                sx={{
                  backgroundImage: `url(${ServiceGuest})`,
                  backgroundSize: "cover",
                }}
              />
            </Grid>
          </>
        )}
        {!keyword && (
          <Grid size={12} mt={4}>
            <motion.div
              variants={scaleUp(0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.2 }}
            >
              <Typography variant="h3" color="initial" textAlign={"center"}>
                Các sản phẩm nổi bật
              </Typography>
            </motion.div>
          </Grid>
        )}
        {keyword && results.length > 0 && (
          <Grid size={12}>
            <Typography
              variant="body1"
              color="initial"
              textAlign={{ xs: "center", md: "left" }}
            >
              Kết quả cho <span style={{ fontWeight: 700 }}>"{keyword}"</span>
            </Typography>{" "}
          </Grid>
        )}
        {keyword ? (
          results.length > 0 ? (
            results.map((service, index) => (
              <Grid size={{ xs: 4, md: 2 }} key={index}>
                <motion.div
                  variants={fadeIn("up", index * 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ amount: 0.2 }}
                >
                  <ServiceCard service={service} imageSize="40px" />
                </motion.div>
              </Grid>
            ))
          ) : (
            <Typography variant="body1" color="secondary.main">
              Không có kết quả cho <span>"{keyword}"</span>
            </Typography>
          )
        ) : (
          topServices
            .filter((service) => service.key === "normal")
            .map((service, index) => (
              <Grid size={{ xs: 4, md: 2 }} key={index}>
                <motion.div
                  variants={fadeIn("up", index * 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ amount: 0.2 }}
                >
                  <ServiceCard service={service} imageSize="40px" />
                </motion.div>
              </Grid>
            ))
        )}
        {!keyword && (
          <Grid size={12} mt={4}>
            <motion.div
              variants={zoomIn(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.2 }}
            >
              <Typography
                variant="h3"
                color="initial"
                textAlign={"center"}
                mb={2}
              >
                Một số gói được nhắc đến trong các bài viết trực tuyến
              </Typography>
            </motion.div>
            <Grid
              container
              spacing={2}
              display={"flex"}
              justifyContent={"center"}
            >
              {topService.map((service, index) => (
                <Grid key={index} size={{ xs: 4, md: 2 }}>
                  <motion.div
                    variants={fadeIn("up", index * 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.2 }}
                  >
                    <ServiceCard service={service} imageSize="40px" />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        )}
      </Grid>
      <Box mt={4} width={"100%"}>
        <GuestReview />
      </Box>
    </Box>
  );
}

export default Service;
