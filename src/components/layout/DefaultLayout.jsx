import React from "react";

import Box from "@mui/material/Box";

import Header from "./Header";
import Footer from "./Footer";

import Background from "@assets/background/background_3.jpg";

function DefaultLayout({ children }) {
  return (
    <Box
      // sx={{
      //   backgroundImage: `url(${Background})`,
      //   backgroundRepeat: "repeat-y",
      // }}
      width={"100%"}
    >
      <Header />
      <Box display={"flex"} flexDirection={"column"} mb={20}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}

export default DefaultLayout;
