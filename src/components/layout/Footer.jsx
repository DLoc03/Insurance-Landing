import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import Typography from "@mui/material/Typography";
import CommonIconButton from "../common/CommonIconButton";

import Background from "@assets/background/footer.jpeg";

import { FaTiktok } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

import { CONTACT, PATHS, SOCIAL_URL } from "@/constants";
import { useHandleNavigate } from "@/utils";

const serviceItems = [
  {
    path: PATHS.ABOUT,
    name: "Giới thiệu",
  },
  {
    path: PATHS.SERVICE,
    name: "Dịch vụ Bảo hiểm",
  },
];

const socialItems = [
  { path: SOCIAL_URL.FACEBOOK, icon: <FacebookOutlinedIcon /> },
  { path: SOCIAL_URL.TIKTOK, icon: <FaTiktok /> },
  { path: SOCIAL_URL.ZALO, icon: <SiZalo /> },
];

function Footer() {
  const handleNavigate = useHandleNavigate();
  return (
    <Box
      sx={{
        bottom: 0,
        left: 0,
        width: "100%",
      }}
    >
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPositionY: "bottom",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          px: { xs: 2, sm: 2, md: 2, lg: 0, xl: 0 },
          py: 8,
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundColor: "primary.main",
            opacity: 0.8,
          },
        }}
      >
        <Grid container spacing={4} maxWidth={1360} width="100%" zIndex={10}>
          <Grid
            item
            size={{ xs: 12, sm: 4, md: 4, lg: 4, xl: 4 }}
            display={{ xs: "none", lg: "flex" }}
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={1}
          >
            <Typography
              variant="body1"
              color="white"
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "block",
                  xl: "block",
                },
              }}
            >
              Ms. Phạm Tuyền luôn đặt lợi ích của khách hàng lên hàng đầu, lấy
              sự hiểu biết sâu sắc và tận tâm làm kim chỉ nam trong mọi hoạt
              động tư vấn. Với mong muốn giúp mỗi cá nhân, gia đình Việt xây
              dựng một nền tảng tài chính vững chắc, chị không chỉ tư vấn sản
            </Typography>
          </Grid>
          <Grid
            item
            size={2}
            display={{
              xs: "none",
              sm: "none",
              md: "none",
              lg: "block",
              xl: "block",
            }}
          ></Grid>
          <Grid
            item
            size={{ xs: 12, sm: 12, md: 4, lg: 2, xl: 2 }}
            display={"flex"}
            flexDirection={"column"}
            alignItems={{
              xs: "center",
              sm: "center",
              md: "center",
              lg: "flex-start",
              xl: "flex-start",
            }}
            gap={1}
          >
            <Typography variant="h5" color="white" mb={2} fontWeight={700}>
              Về dịch vụ
            </Typography>
            <Box
              display={"flex"}
              flexDirection={{
                xs: "row",
                sm: "row",
                md: "column",
                lg: "column",
                xl: "column",
              }}
              gap={{ xs: 2, sm: 2, md: 2, lg: 1, xl: 1 }}
            >
              {serviceItems.map((service, index) => (
                <Typography
                  key={index}
                  variant="body3"
                  color="white"
                  sx={{
                    cursor: "pointer",
                    ":hover": { color: "primary.strong" },
                  }}
                  onClick={() => handleNavigate(service.path)}
                >
                  {service.name}
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid
            item
            size={{ xs: 12, sm: 12, md: 4, lg: 2, xl: 2 }}
            display={"flex"}
            flexDirection={"column"}
            alignItems={{
              xs: "center",
              sm: "center",
              md: "flex-start",
              lg: "flex-start",
              xl: "flex-start",
            }}
            gap={1}
          >
            <Typography variant="h5" color="white" mb={2} fontWeight={700}>
              Liên hệ
            </Typography>
            <a
              href={CONTACT.EMAIL}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Typography
                variant="body1"
                color="white"
                sx={{
                  ":hover": { color: "secondary.main", cursor: "pointer" },
                }}
              >
                tuyenpham103@gmail.com
              </Typography>
            </a>
            <a
              href={CONTACT.PHONE}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Typography
                variant="body1"
                color="white"
                sx={{
                  ":hover": { color: "primary.strong", cursor: "pointer" },
                }}
              >
                0938.271.602
              </Typography>
            </a>
          </Grid>
          <Grid
            item
            size={{ xs: 12, sm: 12, md: 4, lg: 2, xl: 2 }}
            display={"flex"}
            flexDirection={"column"}
            alignItems={{
              xs: "center",
              sm: "center",
              md: "flex-start",
              lg: "flex-start",
              xl: "flex-start",
            }}
            gap={1}
          >
            <Typography variant="h5" color="white" fontWeight={700}>
              Kết nối
            </Typography>
            <Box display={"flex"} gap={1}>
              {socialItems.map((item, index) => (
                <a
                  href={item.path}
                  target="_blank"
                  key={index}
                  style={{ color: "white" }}
                >
                  <CommonIconButton sx={{ color: "white", fontSize: 20 }}>
                    {item.icon}
                  </CommonIconButton>
                </a>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        width={"100%"}
        py={1}
        sx={{ backgroundColor: "white" }}
        display={"flex"}
        justifyContent={"center"}
      >
        <Typography fontSize={13} color="third.main">
          © {new Date().getFullYear()} Ms Phạm Tuyền. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
