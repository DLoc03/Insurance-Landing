import React from "react";

import Box from "@mui/material/Box";

import BannerOverView from "@/components/ui/BannerOverview";
import Introduction from "@/components/ui/Introduction";
import ServicesOverview from "@/components/ui/ServicesOverview";
import AdvantageSection from "@/components/ui/AdvantageSection";
import GuestReview from "@/components/ui/GuestReview";
import ContactForm from "@/components/ui/ContactForm";

function Home() {
  return (
    <Box>
      <Box mb={{ xs: 0, md: 8 }} position={"relative"}>
        <BannerOverView />
      </Box>
      <Introduction />
      <Box mt={{ xs: 4, md: 8 }}>
        <ServicesOverview label="Các gói sản phẩm nổi bật của Ms. Phạm Tuyền" />
      </Box>
      <Box mt={{ xs: 0, lg: 20 }}>
        <AdvantageSection />
      </Box>
      <Box my={8}>
        <GuestReview />
      </Box>
      <ContactForm />
    </Box>
  );
}

export default Home;
