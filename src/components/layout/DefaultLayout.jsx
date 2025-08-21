import React from "react";

import { useLocation } from "react-router-dom";

import Box from "@mui/material/Box";

import Header from "./Header";
import Footer from "./Footer";
import { PATHS } from "@/constants";
import CommonRedirect from "../common/CommonRedirect";

const pathName = [
  {
    path: PATHS.ABOUT,
    name: "Giới thiệu",
  },
  {
    path: PATHS.SERVICE,
    name: "Dịch vụ bảo hiểm",
  },
  {
    path: PATHS.WHY_CHOOSE_US,
    name: "Tại sao chọn Ms. Phạm Tuyền?",
  },
  {
    path: PATHS.CONTACT,
    name: "Liên hệ",
  },
];

function DefaultLayout({ children }) {
  const location = useLocation();
  return (
    <Box width={"100%"}>
      <Header />
      {location.pathname !== PATHS.HOME && (
        <Box mt={{ xs: 8, lg: 17 }}>
          {pathName.map((url, index) => {
            if (location.pathname === url.path) {
              return <CommonRedirect key={index} path={url.name} />;
            }
            return null;
          })}
        </Box>
      )}
      <Box display={"flex"} flexDirection={"column"}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}

export default DefaultLayout;
