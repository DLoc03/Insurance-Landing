import React, { useState } from "react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import MsTuyen from "@assets/content/image_1.jpg";

import Exp from "@assets/icon/exp.png";
import Language from "@assets/icon/language.png";
import Reputation from "@assets/icon/reputation.png";
import Smile from "@assets/icon/black_smile.png";
import Together from "@assets/icon/together.png";
import CommonOverlay from "../common/CommonOverlay";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils";

const advantageList = [
  {
    icon: Exp,
    name: "Kinh nghiệm vững vàng",
    desc: "Với nhiều năm gắn bó trong ngành tài chính – bảo hiểm, Ms. Phạm Tuyền thấu hiểu đa dạng nhu cầu từ cá nhân, gia đình đến doanh nghiệp.",
  },
  {
    icon: Smile,
    name: "Tư vấn cá nhân hóa",
    desc: "Luôn lắng nghe, phân tích tình hình tài chính và mục tiêu của từng khách hàng để đưa ra giải pháp tối ưu, thay vì gói chung chung.",
  },
  {
    icon: Language,
    name: "Ngôn ngữ dễ hiểu ",
    desc: "Biến những điều khoản phức tạp thành lời giải thích rõ ràng, giúp khách hàng an tâm khi lựa chọn.",
  },
  {
    icon: Together,
    name: "Đồng hành lâu dài ",
    desc: "Không chỉ ký hợp đồng, Ms. Phạm Tuyền luôn theo sát, hỗ trợ trong suốt quá trình tham gia bảo hiểm, từ lúc tư vấn đến khi giải quyết quyền lợi.",
  },
  {
    icon: Reputation,
    name: "Uy tín & tận tâm",
    desc: "Luôn đặt lợi ích của khách hàng lên hàng đầu, cam kết minh bạch, trung thực và mang lại giá trị bền vững.",
  },
];

function AdvantageSection() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <Box width={"100%"}>
      <Grid
        container
        display={"flex"}
        position={"relative"}
        justifyContent={"center"}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.2 }}
          >
            <Box
              sx={{
                backgroundImage: `url(${MsTuyen})`,
                height: { xs: 320, md: 800 },
                backgroundSize: "cover",
                boxShadow: "0 5px 25px 0 rgb(0 0 0 / .1)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                px: { xs: 6, md: 12 },
              }}
            >
              <CommonOverlay />
              <motion.div
                variants={fadeIn("left", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.2 }}
                style={{ zIndex: 10 }}
              >
                <Typography
                  fontSize={{ xs: 20, md: 32 }}
                  color="secondary.main"
                  fontWeight={700}
                  textAlign={"center"}
                  zIndex={10}
                >
                  " Tại sao nên chọn tư vấn bảo hiểm cùng Ms. Phạm Tuyền? "
                </Typography>
              </motion.div>
              <motion.div
                variants={fadeIn("left", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.2 }}
                style={{ zIndex: 10 }}
              >
                <Divider
                  sx={{
                    border: "1px solid",
                    borderColor: "secondary.main",
                    mt: 1,
                    mb: 2,
                    transition: "all 0.3s ease",
                    width: 200,
                    zIndex: 10,
                  }}
                />
              </motion.div>
              <motion.div
                variants={fadeIn("left", 0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.2 }}
                style={{ zIndex: 10 }}
              >
                <Typography
                  fontSize={{ xs: 14, md: 20 }}
                  color="white"
                  zIndex={10}
                  textAlign={"center"}
                  mt={2}
                >
                  Khi chọn Ms. Phạm Tuyền, bạn không chỉ nhận được một hợp đồng
                  bảo hiểm, mà còn có một người bạn đồng hành đáng tin cậy trên
                  hành trình bảo vệ sức khỏe và tài chính cho bản thân & gia
                  đình.
                </Typography>
              </motion.div>
            </Box>
          </motion.div>
        </Grid>
        <Box
          flex={1}
          display={{ xs: "none", md: "flex" }}
          flexDirection={"column"}
          position={"absolute"}
          justifyContent={"space-around"}
          height={"100%"}
        >
          {advantageList.map((advantage, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", index * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.2 }}
            >
              <Box key={index} display={"flex"} gap={2}>
                <Box
                  borderRadius={1}
                  boxShadow="0 5px 25px 0 rgb(0 0 0 / .1)"
                  height={120}
                  width={120}
                  p={{ xs: 2, md: 4 }}
                  sx={{
                    backgroundColor: "white",
                    cursor: "pointer",
                    transform: hoverIndex === index ? "scale(1.1)" : "scale(1)",
                    color:
                      hoverIndex === index ? "secondary.main" : "primary.main",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <img
                    src={advantage.icon}
                    alt={advantage.name}
                    title={advantage.name}
                    style={{ width: "100%" }}
                  />
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
        <Grid
          size={{ xs: 12, md: 6 }}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-around"}
          height={{ xs: "100%", md: 800 }}
          px={{ xs: 2, md: 12 }}
          gap={{ xs: 1, md: 0 }}
        >
          {advantageList.map((advantage, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", index * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.2 }}
            >
              <Box
                key={index}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                alignItems={{ xs: "center", md: "flex-start" }}
              >
                <Box
                  borderRadius={1}
                  boxShadow="0 5px 25px 0 rgb(0 0 0 / .1)"
                  height={120}
                  width={120}
                  p={{ xs: 2, md: 4 }}
                  sx={{
                    my: { xs: 2 },
                    display: { xs: "block", md: "none" },
                    backgroundColor: "white",
                    cursor: "pointer",
                    transform: hoverIndex === index ? "scale(1.1)" : "scale(1)",
                    color:
                      hoverIndex === index ? "secondary.main" : "primary.main",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <img
                    src={advantage.icon}
                    alt={advantage.name}
                    title={advantage.name}
                    style={{ width: "100%" }}
                  />
                </Box>
                <Typography
                  fontSize={{ xs: 18, md: 20 }}
                  color={
                    hoverIndex === index ? "secondary.main" : "primary.main"
                  }
                  fontWeight={700}
                  sx={{ transition: "all 0.3s ease" }}
                  textAlign={{ xs: "center", md: "left" }}
                >
                  {advantage.name}
                </Typography>
                <Divider
                  sx={{
                    border: "1px solid",
                    borderColor:
                      hoverIndex === index ? "secondary.main" : "primary.main",
                    mt: 1,
                    mb: 2,
                    transition: "all 0.3s ease",
                    width: { xs: 100, md: "100%" },
                  }}
                />
                <Box>
                  <Typography
                    variant="body1"
                    color="black"
                    textAlign={{ xs: "center", md: "left" }}
                  >
                    {advantage.desc}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default AdvantageSection;
