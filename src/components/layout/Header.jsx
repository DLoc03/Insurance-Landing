import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";

import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HomeIcon from "@mui/icons-material/Home";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";

import { FaTiktok } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

import CommonIconButton from "../common/CommonIconButton";
import CommonMenuItem from "../common/CommonMenuItem";

import HideOnScroll from "@/contexts/HideOnScroll";
import { CONTACT, PATHS, SOCIAL_URL } from "@/constants";
import { useLocation } from "react-router-dom";
import CommonSearchBar from "../common/CommonSearchBar";

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
    path: PATHS.CONTACT,
    name: "Liên Hệ",
    icon: <PermPhoneMsgIcon />,
  },
];

const socialItems = [
  { path: SOCIAL_URL.FACEBOOK, icon: <FacebookOutlinedIcon /> },
  { path: SOCIAL_URL.TIKTOK, icon: <FaTiktok /> },
  { path: SOCIAL_URL.ZALO, icon: <SiZalo /> },
];

function Header() {
  const location = useLocation();
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

  return (
    <HideOnScroll>
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
              width: "100%",
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
                <LocalPhoneIcon />
                <a
                  href={CONTACT.PHONE}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    variant="body2"
                    color="white"
                    sx={{
                      ":hover": { color: "secondary.main", cursor: "pointer" },
                    }}
                  >
                    0938.271.602
                  </Typography>
                </a>
              </Box>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: "white" }}
              />
              <Box display={"flex"} gap={1} alignItems={"center"}>
                <MailOutlineOutlinedIcon />
                <a
                  href={CONTACT.EMAIL}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    variant="body2"
                    color="white"
                    sx={{
                      ":hover": { color: "secondary.main", cursor: "pointer" },
                    }}
                  >
                    tuyenpham103@gmail.com
                  </Typography>
                </a>
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

            {/* Menu Drawer Mobile */}
            <Box
              display={{
                xs: "flex",
                sm: "flex",
                md: "flex",
                lg: "none",
                xl: "none",
              }}
              justifyContent={"space-between"}
              width={"100%"}
            >
              <CommonSearchBar />
              <CommonIconButton
                sx={{ color: "white" }}
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </CommonIconButton>
            </Box>
            <Drawer anchor="left" open={menuOpen} onClose={toggleDrawer(false)}>
              {navItems.map((menu, index) => (
                <CommonMenuItem
                  key={index}
                  label={menu.name}
                  color="primary.strong"
                  path={menu.path}
                  active={location.pathname === menu.path}
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
            width={"100%"}
            py={2}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <CommonSearchBar />
            <Box display={"flex"}>
              {navItems.map((menu, index) => (
                <CommonMenuItem
                  key={index}
                  label={menu.name}
                  path={menu.path}
                  color="primary.strong"
                  active={location.pathname === menu.path}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </AppBar>
    </HideOnScroll>
  );
}

export default Header;
