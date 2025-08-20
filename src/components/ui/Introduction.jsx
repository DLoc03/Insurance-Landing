import React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

import CommonButton from "../common/CommonButton";

import Image_1 from "@assets/albums/image_1.jpg";
import Image_3 from "@assets/albums/image_2.jpg";
import Image_2 from "@assets/albums/image_3.jpg";

const badgeItems = ["Uy tín", "Tận tâm", "Chuyên nghiệp"];

const listImage = [
  {
    title: "Achievement 1",
    subTitle: "Explore the serene mountains",
    image: Image_1,
  },
  {
    title: "Achievement 2",
    subTitle: "Explore the serene mountains",
    image: Image_2,
  },
  {
    title: "Achievement 3",
    subTitle: "Explore the serene mountains",
    image: Image_3,
  },
];

function Introduction() {
  return (
    <Box
      width={"100%"}
      maxWidth={"100vw"}
      position="relative"
      sx={{ backgroundColor: "white" }}
    >
      <Grid
        container
        spacing={{ xs: 2, lg: 8 }}
        width={{ xs: "100%", sm: "100%", md: "100%", lg: 1360 }}
        px={{ xs: 2, sm: 2, md: 2 }}
        maxWidth={1360}
        mx={"auto"}
      >
        <Grid
          item
          size={{ xs: 12, sm: 12, md: 5, lg: 5, xl: 5 }}
          py={{ xs: 2, lg: 8 }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={{ xs: "center", sm: "center", md: "flex-start" }}
            width={"100%"}
            gap={3}
          >
            <Typography variant="h1" color="primary.main" fontWeight={500}>
              Về Ms. Tuyền
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              textAlign={{ xs: "center", md: "left" }}
            >
              Ms. Phạm Tuyền là chuyên gia tư vấn bảo hiểm với nhiều năm kinh
              nghiệm, luôn đặt lợi ích khách hàng lên hàng đầu. Chúng tôi cung
              cấp các gói bảo hiểm linh hoạt, toàn diện, giúp bạn và gia đình an
              tâm trước mọi rủi ro.
            </Typography>
            <Box
              display={"flex"}
              justifyContent={{ xs: "center", md: "flex-start" }}
              gap={{ xs: 2, sm: 2, md: 4 }}
            >
              {badgeItems.map((badge, index) => (
                <Box
                  key={index}
                  display={"flex"}
                  gap={1}
                  sx={{
                    color: "primary.main",
                    ":hover": { scale: 1.1, transition: "0.3s ease-in-out" },
                  }}
                >
                  <CheckCircleOutlineOutlinedIcon /> {badge}
                </Box>
              ))}
            </Box>
            <CommonButton label={"Xem thêm"}>
              <ArrowRightAltOutlinedIcon />
            </CommonButton>
          </Box>
        </Grid>
        <Grid item size={{ xs: 12, sm: 12, md: 7, lg: 7, xl: 7 }}>
          <Box display={{ xs: "none", sm: "none", md: "block", lg: "block" }}>
            {listImage.map((src, index) => {
              const topPositions = [15, 1, 60];
              const leftPositions = [45, 70, 60];
              const randomTop = topPositions[index] + Math.random() * 5;
              const randomLeft = leftPositions[index] + Math.random() * 5;
              const randomRotate = Math.random() * 60 - 15;
              const randomDuration = 5 + Math.random() * 3;
              const randomDelay = Math.random() * 2;

              return (
                <Box
                  key={index}
                  sx={{
                    position: "absolute",
                    top: `${randomTop}%`,
                    left: `${randomLeft}%`,
                    width: { sm: 260, lg: 320 },
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: 260,
                      borderRadius: 2,
                      overflow: "hidden",
                      boxShadow: "0 15px 25px rgba(0,0,0,0.3)",
                      transform: `rotate(${randomRotate}deg)`,
                      animation: `float ${randomDuration}s ease-in-out ${randomDelay}s infinite alternate`,
                      "&:hover .overlay": {
                        opacity: 0.6,
                      },
                      "&:hover .subtitle": {
                        transform: "translate(-50%, -50%) translateY(0)",
                        opacity: 1,
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={src.image}
                      alt={src.title}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    {/* Overlay */}
                    <Box
                      className="overlay"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "black",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      }}
                    />
                    {/* Title */}
                    <Typography
                      variant="h6"
                      color="white"
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontWeight: 600,
                        textShadow: "0 2px 10px rgba(0,0,0,0.6)",
                        zIndex: 2,
                      }}
                    >
                      {src.title}
                    </Typography>
                    <Typography
                      className="subtitle"
                      variant="subtitle1"
                      color="white"
                      sx={{
                        position: "absolute",
                        bottom: 20,
                        left: "50%",
                        transform: "translate(-50%, 20px)",
                        fontWeight: 500,
                        textShadow: "0 2px 10px rgba(0,0,0,0.6)",
                        opacity: 0,
                        transition: "all 0.3s ease",
                        zIndex: 2,
                      }}
                    >
                      {src.subTitle}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Box
            display={{ xs: "flex", sm: "flex", md: "none", lg: "none" }}
            gap={1}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            {listImage.map((src, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    height: 260,
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: 260,
                      borderRadius: 2,
                      overflow: "hidden",
                      boxShadow: "0 15px 25px rgba(0,0,0,0.3)",

                      "&:hover .overlay": {
                        opacity: 0.6,
                      },
                      "&:hover .subtitle": {
                        transform: "translate(-50%, -50%) translateY(0)",
                        opacity: 1,
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={src.image}
                      alt={src.title}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    {/* Overlay */}
                    <Box
                      className="overlay"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "black",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      }}
                    />
                    {/* Title */}
                    <Typography
                      variant="h6"
                      color="white"
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontWeight: 600,
                        textShadow: "0 2px 10px rgba(0,0,0,0.6)",
                        zIndex: 2,
                      }}
                    >
                      {src.title}
                    </Typography>
                    <Typography
                      className="subtitle"
                      variant="subtitle1"
                      color="white"
                      sx={{
                        position: "absolute",
                        bottom: 20,
                        left: "50%",
                        transform: "translate(-50%, 20px)",
                        fontWeight: 500,
                        textShadow: "0 2px 10px rgba(0,0,0,0.6)",
                        opacity: 0,
                        transition: "all 0.3s ease",
                        zIndex: 2,
                      }}
                    >
                      {src.subTitle}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Grid>

        <style>
          {`
    @keyframes float {
      0% { transform: translateY(0px); }
      100% { transform: translateY(-15px); }
    }
  `}
        </style>
      </Grid>
    </Box>
  );
}

export default Introduction;
