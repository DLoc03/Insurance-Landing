import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BannerOverView from "@/components/ui/BannerOverview";
import Introduction from "@/components/ui/Introduction";

function Home() {
  return (
    <Box>
      <Box mb={12}>
        <BannerOverView />
      </Box>
      <Introduction />
    </Box>
  );
}

export default Home;
