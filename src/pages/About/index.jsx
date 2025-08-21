import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import MsTuyen_1 from "@assets/content/image_1.jpg";
import MsTuyen_2 from "@assets/content/image_2.jpg";

import Typography from "@mui/material/Typography";

import LabelIcon from "@mui/icons-material/Label";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Image_1 from "@assets/albums/image_1.png";
import Image_3 from "@assets/albums/image_2.png";
import Image_2 from "@assets/albums/image_3.png";

import Finance from "@assets/icon/finance.png";
import Dream from "@assets/icon/dream.png";
import Health from "@assets/icon/health.png";
import Shield from "@assets/icon/shield.png";
import Smile from "@assets/icon/smile.png";
import Angel from "@assets/icon/angel.png";

import ServiceCard from "@/components/common/ServiceCard";
import CommonButton from "@/components/common/CommonButton";

import { PATHS } from "@/constants";
import { bounceIn, fadeIn, scaleUp, useHandleNavigate, zoomIn } from "@/utils";

import { motion } from "framer-motion";

const badgeItems = ["Lắng nghe ", "Thấu hiểu ", "Chuyên nghiệp"];

const listImage = [
  {
    title: "Lắng Nghe",
    subTitle: "Hiểu rõ nhu cầu bảo vệ của bạn và gia đình",
    image: Image_1,
  },
  {
    title: "Thấu hiểu",
    subTitle: "Đưa ra giải pháp bảo hiểm phù hợp",
    image: Image_2,
  },
  {
    title: "Chuyên nghiệp",
    subTitle: "Đảm bảo quyền lợi tối ưu với dịch vụ tận tâm",
    image: Image_3,
  },
];

const listShortDesc = [
  {
    title: "Chuyên môn",
    description:
      "Tư vấn giải pháp bảo hiểm nhân thọ, sức khỏe, giáo dục, hưu trí và đầu tư.",
  },
  {
    title: "Phong cách làm việc",
    description:
      "Lắng nghe – Thấu hiểu – Đề xuất giải pháp cá nhân hóa phù hợp từng giai đoạn cuộc sống.",
  },
  {
    title: "Sứ mệnh",
    description:
      "Giúp khách hàng an tâm trước rủi ro, bảo vệ tài chính và kiến tạo tương lai vững chắc cho gia đình.",
  },
];

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

function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleNavigate = useHandleNavigate();

  return (
    <Box
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      mt={{ xs: 4, lg: 2 }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        width={{ xs: "100%", lg: 1360 }}
        px={{ xs: 2, lg: 0 }}
      >
        <Grid size={12}>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.2 }}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography variant="h3" color="black" mb={2} textAlign={"center"}>
              Giới thiệu Chuyên gia tư vấn Bảo hiểm – Ms. Phạm Tuyền
            </Typography>
          </motion.div>
        </Grid>
        <Grid size={4} position={"relative"}>
          <motion.div
            variants={zoomIn(0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.2 }}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={isMobile ? MsTuyen_1 : MsTuyen_2}
              alt="Ms. Phạm Tuyền"
              title="Ms. Phạm Tuyền"
              style={{
                width: "100%",
                height: isMobile ? 120 : 360,
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
          </motion.div>
        </Grid>
        <Grid size={8} display={"flex"} flexDirection={"column"} gap={2}>
          <motion.div
            variants={scaleUp(0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.2 }}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography
              fontSize={{ xs: 12, md: 16 }}
              color="initial"
              textAlign={"right"}
            >
              Với nhiều năm kinh nghiệm trong lĩnh vực{" "}
              <span style={{ fontWeight: 700, color: "#0097b2" }}>
                tư vấn tài chính & bảo hiểm
              </span>
              , Ms. Phạm Tuyền đã đồng hành cùng hàng trăm khách hàng trên hành
              trình xây dựng kế hoạch tài chính an toàn và bền vững.
            </Typography>
          </motion.div>
          {!isMobile && (
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.2 }}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box>
                <Box
                  sx={{
                    width: "100%",
                    backgroundColor: "primary.main",
                    borderLeft: "8px solid",
                    borderColor: "secondary.main",
                    p: 4,
                    gap: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {listShortDesc.map((desc, index) => (
                    <motion.div
                      key={index}
                      variants={fadeIn("up", index * 0.2)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ amount: 0.2 }}
                    >
                      <Box key={index} display={"flex"} gap={1}>
                        <LabelIcon sx={{ color: "white" }} />{" "}
                        <Typography variant="body2" color="white">
                          <span style={{ fontWeight: 700 }}>{desc.title}</span>
                          {": "} {desc.description}
                        </Typography>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
                <motion.div
                  variants={fadeIn("up", 1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ amount: 0.2 }}
                >
                  <Typography
                    fontSize={{ xs: 12, md: 16 }}
                    color="black"
                    textAlign={"right"}
                    mt={2}
                  >
                    "Ms. Phạm Tuyên không chỉ là một{" "}
                    <span style={{ fontWeight: 700, color: "#0097b2" }}>
                      người tư vấn bảo hiểm
                    </span>
                    , mà còn là{" "}
                    <span style={{ fontWeight: 700, color: "#0097b2" }}>
                      người bạn đồng hành tin cậy
                    </span>
                    , luôn đặt lợi ích của khách hàng lên hàng đầu và cam kết
                    mang đến những giá trị lâu dài."
                  </Typography>
                </motion.div>
              </Box>
            </motion.div>
          )}
        </Grid>
        <Grid
          size={12}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <motion.div
            variants={zoomIn(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.2 }}
          >
            <Typography
              variant="h5"
              color="initial"
              textAlign={"center"}
              mb={2}
            >
              Một số gói dịch vụ nổi bật
            </Typography>
          </motion.div>
          <Grid
            container
            spacing={2}
            my={2}
            display={"flex"}
            justifyContent={"center"}
          >
            {topServices.slice(0, 4).map((service, index) => (
              <Grid size={{ xs: 6, md: 2 }} key={index}>
                <motion.div
                  variants={zoomIn(index * 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ amount: 0.2 }}
                >
                  <ServiceCard service={service} imageSize="40px" />
                </motion.div>
              </Grid>
            ))}
          </Grid>
          <motion.div
            variants={zoomIn(0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.2 }}
          >
            <CommonButton
              label={"Xem thêm"}
              onClick={() => handleNavigate(PATHS.SERVICE)}
              sx={{ mx: "auto", mb: 4 }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
