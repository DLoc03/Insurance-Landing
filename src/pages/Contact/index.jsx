import React from "react";

import Box from "@mui/material/Box";
import ContactForm from "@/components/ui/ContactForm";
import GuestReview from "@/components/ui/GuestReview";

function Contact() {
  return (
    <Box width={"100%"} display={"flex"} flexDirection={"column"} gap={2}>
      <ContactForm />
      <GuestReview />
    </Box>
  );
}

export default Contact;
