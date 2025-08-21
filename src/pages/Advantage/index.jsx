import React, { useState } from "react";

import Box from "@mui/material/Box";

import AdvantageSection from "@/components/ui/AdvantageSection";
import GuestReview from "@/components/ui/GuestReview";

function Advantage() {
  return (
    <Box>
      <Box px={{ xs: 2, md: 0 }}>
        <AdvantageSection />
      </Box>
      <Box mt={4}>
        <GuestReview />
      </Box>
    </Box>
  );
}

export default Advantage;
