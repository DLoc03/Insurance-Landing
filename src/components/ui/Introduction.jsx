import React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import LabelIcon from "@mui/icons-material/Label";

import CommonButton from "../common/CommonButton";

import Image_1 from "@assets/albums/image_1.png";
import Image_3 from "@assets/albums/image_2.png";
import Image_2 from "@assets/albums/image_3.png";
import { useHandleNavigate } from "@/utils";
import { PATHS } from "@/constants";

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

function Introduction() {
  const handleNavigate = useHandleNavigate();
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
        {/* Introduction */}
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
              textAlign={{ xs: "justify", md: "left" }}
            >
              Với nhiều năm kinh nghiệm trong lĩnh vực{" "}
              <span style={{ fontWeight: 700, color: "#0097b2" }}>
                tư vấn tài chính & bảo hiểm
              </span>
              , Ms. Phạm Tuyền đã đồng hành cùng hàng trăm khách hàng trên hành
              trình xây dựng kế hoạch tài chính an toàn và bền vững.
            </Typography>
            <Box
              display={"flex"}
              justifyContent={{ xs: "space-between", md: "flex-start" }}
              gap={{ xs: 1, sm: 2, md: 4 }}
              width={"100%"}
            >
              {badgeItems.map((badge, index) => (
                <Box
                  key={index}
                  display={"flex"}
                  alignItems={"center"}
                  gap={{ xs: 0.5, md: 1 }}
                  sx={{
                    color: "primary.main",
                    ":hover": { scale: 1.1, transition: "0.3s ease-in-out" },
                  }}
                >
                  <CheckCircleOutlineOutlinedIcon
                    sx={{ fontSize: { xs: 16, md: 18 } }}
                  />{" "}
                  <Typography variant="body2" color="primary.main">
                    {badge}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "primary.main",
                borderLeft: "8px solid",
                borderColor: "secondary.main",
                p: 2,
                gap: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {listShortDesc.map((desc, index) => (
                <Box key={index} display={"flex"} gap={1}>
                  <LabelIcon sx={{ color: "white" }} />{" "}
                  <Typography variant="body2" color="white">
                    <span style={{ fontWeight: 700 }}>{desc.title}</span>
                    {": "} {desc.description}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* <Typography
              variant="body1"
              color="black"
              textAlign={{ xs: "center", md: "left" }}
            >
              "Ms. Phạm Tuyên không chỉ là một{" "}
              <span style={{ fontWeight: 700, color: "#0097b2" }}>
                người tư vấn bảo hiểm
              </span>
              , mà còn là{" "}
              <span style={{ fontWeight: 700, color: "#0097b2" }}>
                người bạn đồng hành tin cậy
              </span>
              , luôn đặt lợi ích của khách hàng lên hàng đầu và cam kết mang đến
              những giá trị lâu dài."
            </Typography> */}

            <CommonButton
              label={"Xem thêm"}
              onClick={() => handleNavigate(PATHS.ABOUT)}
            >
              <ArrowRightAltOutlinedIcon />
            </CommonButton>
          </Box>
        </Grid>
        {/* Album Animation */}
        <Grid item size={{ xs: 12, sm: 12, md: 7, lg: 7, xl: 7 }}>
          <Box
            display={{ xs: "none", sm: "none", md: "flex", lg: "flex" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                backgroundColor: "third.light",
                height: 300,
                width: 480,
                mt: 20,
              }}
            />
            {listImage.map((src, index) => {
              const topPositions = [15, 1, 50];
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
                        transform: "translate(-50%, -10%) translateY(0)",
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
                      variant="h4"
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
      100% { transform: translateY(-60px); }
    }
  `}
        </style>
      </Grid>
    </Box>
  );
}

export default Introduction;
