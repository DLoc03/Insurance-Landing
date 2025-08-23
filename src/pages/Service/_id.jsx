import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import future from "@assets/icon/finance.png";
import dream from "@assets/icon/dream.png";
import life from "@assets/icon/health.png";
import shield from "@assets/icon/shield.png";
import side from "@assets/icon/smile.png";
import guardian from "@assets/icon/angel.png";
import happy from "@assets/icon/happy.png";
import safe from "@assets/icon/dance.png";
import beautiful from "@assets/icon/life.png";

import { PATHS } from "@/constants";
import ServiceCard from "@/components/common/ServiceCard";
import { useHandleNavigate } from "@/utils";
import ServicesOverview from "@/components/ui/ServicesOverview";
import GuestReview from "@/components/ui/GuestReview";

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

function ServiceDetail() {
  const location = useLocation();
  const [results, setResults] = useState([]);

  const [services, setServices] = useState([]);

  const query = new URLSearchParams(location.search);
  const keyword = query.get("keyword") || "";

  const handleNavigate = useHandleNavigate();

  useEffect(() => {
    if (items) {
      setServices(items);
    }
  }, [items]);

  useEffect(() => {
    if (!keyword) {
      handleNavigate(PATHS.SERVICE);
      return;
    }
    const lowerKeyword = keyword.toLowerCase();
    const data = services.filter(
      (item) => item.name && item.name.toLowerCase().includes(lowerKeyword)
    );
    setResults(data);
  }, [keyword, services]);

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
        width={"100%"}
        maxWidth={1360}
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
              <ServiceCard
                service={service}
                imageSize={"40px"}
                image={imageMap[service.key]}
              />
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
        <ServicesOverview label="Các dịch vụ nổi bật khác" />
      </Box>
      <Box mt={{ xs: 12, md: 16 }} width={"100%"}>
        <GuestReview />
      </Box>
    </Box>
  );
}

export default ServiceDetail;
