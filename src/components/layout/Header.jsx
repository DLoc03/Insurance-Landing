import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import { alpha } from "@mui/material";

import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HomeIcon from "@mui/icons-material/Home";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";

import CommonIconButton from "../common/CommonIconButton";
import CommonMenuItem from "../common/CommonMenuItem";

import HideOnScroll from "@/contexts/HideOnScroll";
import { PATHS } from "@/constants";
import { useHandleNavigate } from "@/utils";

const navItems = [
  {
    path: PATHS.HOME,
    name: "Trang chủ",
    icon: <HomeIcon />,
  },
  {
    path: PATHS.ABOUT,
    name: "Giới thiệu",
    icon: <PersonOutlineIcon />,
  },
  {
    path: PATHS.SERVICE,
    name: "Dịch vụ Bảo hiểm",
    icon: <HealthAndSafetyIcon />,
  },
  {
    path: PATHS.WHY_CHOOSE_US,
    name: "Tại sao chọn Ms. Phạm Tuyền?",
    icon: <ThumbUpAltIcon />,
  },
  {
    path: PATHS.GUEST_RATING,
    name: "Cảm nghĩ khách hàng",
    icon: <ChatBubbleOutlineIcon />,
  },
  {
    path: PATHS.CONTACT,
    name: "Liên Hệ",
    icon: <PermPhoneMsgIcon />,
  },
];

const socialItems = [
  <FacebookOutlinedIcon />,
  <InstagramIcon />,
  <YouTubeIcon />,
  <TwitterIcon />,
  <LinkedInIcon />,
];

function Header() {
  const handleNavigate = useHandleNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = (state) => () => {
    setMenuOpen(state);
  };

  const handleMenuClick = (path) => {
    handleNavigate(path);
    setMenuOpen(false);
  };

  return (
    <AppBar
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "fixed",
        zIndex: 1100,
        top: 0,
        left: 0,
        width: "100%",
        boxShadow: scrolled ? 4 : "none",
        backgroundColor: "transparent",
      }}
    >
      {/* Top Bar - Hide on scroll */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "primary.main",
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          sx={{
            py: 2,
            px: { xs: 2, sm: 2, md: 2, lg: 0, xl: 0 },
            maxWidth: 1360,
            width: { xs: "100%", sm: "100%", md: "100%", lg: 1360, xl: 1360 },
          }}
        >
          {/* Address and Email */}
          <Box
            display={{
              xs: "none",
              sm: "none",
              md: "none",
              lg: "flex",
              xl: "flex",
            }}
            gap={2}
          >
            <Box display={"flex"} gap={1} alignItems={"center"}>
              <FmdGoodOutlinedIcon />
              <Typography variant="body3" color="white">
                Address
              </Typography>
            </Box>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: "white" }}
            />
            <Box display={"flex"} gap={1} alignItems={"center"}>
              <MailOutlineOutlinedIcon />
              <Typography variant="body3" color="white">
                Email
              </Typography>
            </Box>
          </Box>

          {/* Social Icons */}
          <Box
            display={{
              xs: "none",
              sm: "none",
              md: "none",
              lg: "flex",
              xl: "flex",
            }}
            gap={1}
          >
            {socialItems.map((item, index) => (
              <a
                href="https://www.facebook.com/"
                key={index}
                style={{ color: "white" }}
              >
                <CommonIconButton sx={{ color: "white" }}>
                  {item}
                </CommonIconButton>
              </a>
            ))}
          </Box>

          {/* Logo mobile */}
          <Box
            display={{
              xs: "flex",
              sm: "flex",
              md: "flex",
              lg: "none",
              xl: "none",
            }}
          >
            <Typography variant="h4" color="white">
              Logo
            </Typography>
          </Box>

          {/* Menu Drawer Mobile */}
          <Box
            display={{
              xs: "flex",
              sm: "flex",
              md: "flex",
              lg: "none",
              xl: "none",
            }}
          >
            <CommonIconButton
              sx={{ color: "white" }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </CommonIconButton>
          </Box>
          <Drawer anchor="right" open={menuOpen} onClose={toggleDrawer(false)}>
            <Typography variant="h6" mx={"auto"} my={2}>
              Logo
            </Typography>
            {navItems.map((menu, index) => (
              <CommonMenuItem
                key={index}
                label={menu.name}
                color="primary.strong"
                onClick={() => handleMenuClick(menu.path)}
              >
                {menu.icon}
              </CommonMenuItem>
            ))}
          </Drawer>
        </Box>
      </Box>

      {/* Navigation Menu */}
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "flex",
            xl: "flex",
          },
          backgroundColor: "white",
          transition: "background-color 0.2s ease",
          justifyContent: "center",
          width: "100%",
          px: { xs: 2, sm: 2, md: 2, lg: 0, xl: 0 },
          boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
        }}
      >
        <Box
          maxWidth={1360}
          width={1360}
          py={2}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Typography variant="h4" color="primary.strong">
              Logo
            </Typography>
          </Box>
          <Box display={"flex"}>
            {navItems.map((menu, index) => (
              <CommonMenuItem
                key={index}
                label={menu.name}
                path={menu.path}
                color="primary.strong"
              />
            ))}
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
}

export default Header;
