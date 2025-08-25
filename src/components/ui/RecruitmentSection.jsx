import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { motion } from "framer-motion";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";

import { item } from "@/datas/recruitment.json";
import { ALBUM_MAP, BANNER_MAP, PATHS } from "@/constants";
import CommonButton from "../common/CommonButton";
import { bounceIn, fadeIn, scaleUp, useHandleNavigate } from "@/utils";

function RecruitmentSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const handleNavigate = useHandleNavigate();
  return (
    <Grid container width={"100%"} maxWidth={1360} mx={"auto"} spacing={2}>
      <Grid size={12}>
        <motion.div
          variants={scaleUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2 }}
          style={{ width: "100%" }}
        >
          <Typography
            variant="h2"
            color="primary.main"
            textAlign={"center"}
            fontWeight={700}
          >
            {item.title}
          </Typography>
        </motion.div>
      </Grid>
      <Grid size={12}>
        {item.description.map((desc, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", index * 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.2 }}
          >
            <Typography
              variant="body1"
              key={index}
              color="third.main"
              textAlign={"center"}
            >
              {desc}
            </Typography>
          </motion.div>
        ))}
      </Grid>
      <Grid size={12}>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2 }}
        >
          <img
            src={BANNER_MAP["banner"]}
            alt="banner"
            style={{ width: "100%", height: 320, objectFit: "cover" }}
          />
        </motion.div>
      </Grid>
      <Grid size={{ xs: 12, md: 7 }} pr={{ xs: 0, md: 12, lg: 24 }}>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2 }}
        >
          <Typography variant="h4" color="primary.main" fontWeight={700}>
            {item.content[0].heading}
          </Typography>
        </motion.div>
        {item.content[0].text.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", index * 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.2 }}
          >
            <Box display={"flex"} gap={2} alignItems={"center"} my={1}>
              <ThumbUpIcon sx={{ color: "primary.main" }} />
              <Typography variant="body1" color="initial" textAlign={"justify"}>
                {item}
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Grid>
      <Grid size={{ xs: 12, md: 5 }}>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2 }}
        >
          <img
            src={ALBUM_MAP[item.content[0].key]}
            alt={item.content[0].heading}
            style={{
              width: "100%",
              height: 320,
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        </motion.div>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <motion.div
          variants={scaleUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2 }}
          style={{ width: "100%", height: "100%" }}
        >
          <Box
            sx={{
              boxShadow: "0 5px 25px 0 rgb(0 0 0 / .1)",
              p: 2,
              borderRadius: 2,
            }}
            height={"100%"}
          >
            <Typography
              variant="h4"
              color="primary.main"
              fontWeight={700}
              textAlign={"center"}
            >
              {item.content[1].heading}
            </Typography>
            <Divider sx={{ my: 2 }} />
            {item.content[1].text.map((item, index) => (
              <Box display={"flex"} gap={2} key={index} my={1}>
                <FiberManualRecordOutlinedIcon sx={{ color: "primary.main" }} />
                <Typography variant="body1" color="initial">
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <motion.div
          variants={scaleUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2 }}
          style={{ width: "100%", height: "100%" }}
        >
          <Box
            sx={{
              boxShadow: "0 5px 25px 0 rgb(0 0 0 / .1)",
              p: 2,
              borderRadius: 2,
            }}
            height={"100%"}
          >
            <Typography
              variant="h4"
              color="primary.main"
              fontWeight={700}
              textAlign={"center"}
            >
              {item.content[2].heading}
            </Typography>
            <Divider sx={{ my: 2 }} />
            {item.content[2].text.map((item, index) => (
              <Box display={"flex"} gap={2} key={index} my={1}>
                <FiberManualRecordOutlinedIcon sx={{ color: "primary.main" }} />
                <Typography variant="body1" color="initial">
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Grid>
      <Grid size={12}>
        <Grid container>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.2 }}
              style={{ width: "100%" }}
            >
              <img
                src={ALBUM_MAP[item.content[2].key]}
                alt={item.content.heading}
                title={item.content.heading}
                style={{
                  width: "100%",
                  height: 320,
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </motion.div>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            display={"flex"}
            flexDirection={"column"}
            alignItems={{ xs: "center", md: "flex-end" }}
          >
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.2 }}
              style={{ width: "100%" }}
            >
              <Typography
                variant="h4"
                color="primary.main"
                fontWeight={700}
                textAlign={{ xs: "center", md: "right" }}
                mb={2}
                mt={{ xs: 2, md: 0 }}
              >
                {item.content[3].heading}
              </Typography>
            </motion.div>
            {item.content[3].text.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", index * 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.2 }}
                style={{ width: "100%" }}
              >
                <Box
                  display={"flex"}
                  gap={2}
                  key={index}
                  my={1}
                  justifyContent={"flex-end"}
                  pl={{ xs: 4, lg: 0 }}
                >
                  <Typography
                    variant="body1"
                    color="initial"
                    textAlign={"justify"}
                  >
                    {item}
                  </Typography>
                  <FiberManualRecordOutlinedIcon
                    sx={{ color: "primary.main" }}
                  />
                </Box>
              </motion.div>
            ))}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.2 }}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: isMobile ? "center" : "flex-end",
              }}
            >
              <CommonButton
                label={"Liên hệ ứng tuyển ngay"}
                sx={{ mt: 4 }}
                onClick={() => handleNavigate(PATHS.CONTACT)}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default RecruitmentSection;
