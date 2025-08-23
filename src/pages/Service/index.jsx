import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import LabelIcon from "@mui/icons-material/Label";
import Divider from "@mui/material/Divider";

import future from "@assets/icon/finance.png";
import dream from "@assets/icon/dream.png";
import life from "@assets/icon/health.png";
import shield from "@assets/icon/shield.png";
import side from "@assets/icon/smile.png";
import guardian from "@assets/icon/angel.png";
import happy from "@assets/icon/happy.png";
import safe from "@assets/icon/dance.png";
import beautiful from "@assets/icon/life.png";

import ServiceCard from "@/components/common/ServiceCard";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import ServiceGuest from "@assets/albums/image_3.png";
import GuestReview from "@/components/ui/GuestReview";

import { motion } from "framer-motion";
import { fadeIn, getServiceByCategories, scaleUp, zoomIn } from "@/utils";
import ServiceDetailSection from "@/components/ui/ServiceDetailSection";

import { items } from "@/datas/service.json";

const imageMap = {
  future,
  dream,
  life,
  shield,
  side,
  guardian,
  happy,
  safe,
  beautiful,
};

function Service() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);
  const [services, setServices] = useState([]);
  const [topService, setTopService] = useState([]);
  const [newService, setNewService] = useState([]);
  const [mostService, setMostService] = useState([]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (items) {
      setServices(items);
    }
  }, [items]);

  useEffect(() => {
    if (items) {
      const data = getServiceByCategories(items, ["outstanding", "name"]);
      setMostService(data);
    }
  }, [items]);

  useEffect(() => {
    if (items) {
      const data = getServiceByCategories(items, ["new"]);
      setNewService(data);
    }
  }, [items]);

  useEffect(() => {
    if (items) {
      const data = getServiceByCategories(items, ["top"]);
      setTopService(data);
    }
  }, [items]);

  const handleChange = (e) => {
    const value = e.target.value;
    setKeyword(value);
    setResults(
      services.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

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
        width={"100%"}
        maxWidth={1360}
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
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.2 }}
              >
                <Box
                  height={{ xs: 200, sm: 258, lg: 184 }}
                  width={"100%"}
                  sx={{
                    backgroundImage: `url(${ServiceGuest})`,
                    backgroundSize: "cover",
                  }}
                />
              </motion.div>
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
                Các gói dịch vụ nổi bật
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
              <Grid size={{ xs: 6, md: 3, lg: 2 }} key={index}>
                <motion.div
                  variants={fadeIn("up", index * 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ amount: 0.2 }}
                >
                  <ServiceCard
                    service={service}
                    imageSize="40px"
                    height={280}
                    image={imageMap[service.key]}
                  />
                </motion.div>
              </Grid>
            ))
          ) : (
            <Typography variant="body1" color="secondary.main">
              Không có kết quả cho <span>"{keyword}"</span>
            </Typography>
          )
        ) : (
          mostService.map((service, index) => (
            <Grid size={{ xs: 6, md: 3, lg: 2 }} key={index}>
              <motion.div
                variants={fadeIn("up", index * 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.2 }}
              >
                <ServiceCard
                  service={service}
                  imageSize="40px"
                  image={imageMap[service.key]}
                  height={isMobile ? 260 : 280}
                />
              </motion.div>
            </Grid>
          ))
        )}
        {!keyword && (
          <Grid size={12} mt={4}>
            <motion.div
              variants={scaleUp(0.4)}
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
                “Bộ tứ giải pháp xanh” – các gói mới ra mắt đầu năm 2025
              </Typography>
            </motion.div>
            <Grid
              container
              spacing={2}
              display={"flex"}
              justifyContent={"center"}
              width={"100%"}
            >
              {newService.map((service, index) => (
                <Grid size={{ xs: 6, md: 3, lg: 2 }} key={index}>
                  <motion.div
                    variants={fadeIn("up", index * 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.2 }}
                  >
                    <ServiceCard
                      service={service}
                      imageSize="40px"
                      image={imageMap[service.key]}
                      height={isMobile ? 260 : 280}
                    />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
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
              {topService?.map((service, index) => (
                <Grid size={{ xs: 6, md: 3, lg: 2 }} key={index}>
                  <motion.div
                    variants={fadeIn("up", index * 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.2 }}
                  >
                    <ServiceCard
                      service={service}
                      imageSize="40px"
                      image={imageMap[service.key]}
                      height={isMobile ? 260 : 280}
                    />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
            <Grid size={12} mt={4}>
              <ServiceDetailSection />
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
