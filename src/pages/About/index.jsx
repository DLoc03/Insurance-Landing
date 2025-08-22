import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import MsTuyen_1 from "@assets/content/image_1.jpg";
import MsTuyen_2 from "@assets/content/image_2.jpg";

import Typography from "@mui/material/Typography";

import LabelIcon from "@mui/icons-material/Label";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import future from "@assets/icon/finance.png";
import dream from "@assets/icon/dream.png";
import life from "@assets/icon/health.png";
import shield from "@assets/icon/shield.png";
import side from "@assets/icon/smile.png";
import guardian from "@assets/icon/angel.png";

import ServiceCard from "@/components/common/ServiceCard";
import CommonButton from "@/components/common/CommonButton";

import { PATHS } from "@/constants";
import {
  fadeIn,
  getServiceByCategories,
  scaleUp,
  useHandleNavigate,
  zoomIn,
} from "@/utils";

import { motion } from "framer-motion";

import { items } from "@/datas/service.json";

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

const imageMap = {
  future,
  dream,
  life,
  shield,
  side,
  guardian,
};

function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleNavigate = useHandleNavigate();
  const [services, setServices] = useState([]);

  useEffect(() => {
    if (items) {
      const data = getServiceByCategories(items, ["outstanding", "new"]);
      console.log(data);
      setServices(data);
    }
  }, [items]);

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
            {services.map((service, index) => (
              <Grid size={{ xs: 6, md: 3, lg: 2 }} key={index}>
                <motion.div
                  variants={zoomIn(index * 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ amount: 0.2 }}
                >
                  <ServiceCard
                    service={service}
                    imageSize="40px"
                    image={imageMap[service.key]}
                  />
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
