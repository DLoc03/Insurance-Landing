import React from "react";

import Box from "@mui/material/Box";
import Header from "./Header";
import Footer from "./Footer";

function DefaultLayout({ children }) {
  return (
    <Box>
      <Header />
      <Box display={"flex"} flexDirection={"column"}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}

export default DefaultLayout;
