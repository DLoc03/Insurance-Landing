import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BannerOverView from "@/components/ui/BannerOverview";
import Introduction from "@/components/ui/Introduction";
import ServicesOverview from "@/components/ui/ServicesOverview";
import AdvantageSection from "@/components/ui/AdvantageSection";
import GuestReview from "@/components/ui/GuestReview";

function Home() {
  return (
    <Box>
      <Box mb={{ xs: 0, md: 8 }} position={"relative"}>
        <BannerOverView />
      </Box>
      <Introduction />
      <Box mt={{ xs: 4, md: 8 }}>
        <ServicesOverview />
      </Box>
      <Box mt={{ xs: 0, lg: 20 }}>
        <AdvantageSection />
      </Box>
      <Box my={8}>
        <GuestReview />
      </Box>
    </Box>
  );
}

export default Home;
