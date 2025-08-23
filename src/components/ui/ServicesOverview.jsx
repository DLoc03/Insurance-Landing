import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Background from "@assets/background/background_2.jpg";

import ServiceSection from "../common/ServiceSection";
import CommonOverlay from "../common/CommonOverlay";

import { motion } from "framer-motion";
import { getServiceByCategories, zoomIn } from "@/utils";

import { items } from "@/datas/service.json";

function ServicesOverview({ label = "Các dịch vụ tư vấn" }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [services, setServices] = useState([]);

  useEffect(() => {
    if (items) {
      const data = getServiceByCategories(items, ["outstanding", "new"]);
      setServices(data);
    }
  }, [items]);

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
        <motion.div
          variants={zoomIn(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2 }}
        >
          <Typography
            variant="h2"
            color="white"
            fontWeight={700}
            textAlign={"center"}
          >
            {label}
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
        </motion.div>
        <motion.div
          variants={zoomIn(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2 }}
        >
          <ServiceSection
            listData={services}
            imageSize={"40px"}
            height={isMobile ? 140 : 274}
          />
        </motion.div>
      </Box>
    </Box>
  );
}

export default ServicesOverview;
