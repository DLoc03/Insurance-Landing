import React, { useState } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

import CommonOverlay from "../common/CommonOverlay";

import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import Background from "@assets/background/background_3.png";
import Typography from "@mui/material/Typography";
import CommonInput from "../common/CommonInput";
import CommonSelectInput from "../common/CommonSelectInput";

import { items } from "@/datas/service.json";
import CommonInputAutosize from "../common/CommonInputAutosize";
import CommonButton from "../common/CommonButton";

import { motion } from "framer-motion";
import { fadeIn, scaleUp } from "@/utils";

const contactList = [
  {
    icon: <EmailIcon />,
    name: "Email",
    value: "tuyenpham103@gmail.com",
  },
  {
    icon: <LocalPhoneIcon />,
    name: "Điện thoại",
    value: "098.310.0383",
  },
];

function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    fullName: "",
    service: "",
    text: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.2 }}
    >
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        position={"relative"}
        height={"100%"}
        sx={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: 8,
        }}
      >
        <CommonOverlay />
        <Grid
          container
          spacing={2}
          px={{ xs: 2, lg: 0 }}
          maxWidth={1360}
          width={"100%"}
          zIndex={10}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              variants={scaleUp(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.2 }}
            >
              <Box display={"flex"} flexDirection={"column"} fontWeight={700}>
                <motion.div
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ amount: 0.2 }}
                >
                  <Typography variant="h3" color="white">
                    Liên hệ Ms. Phạm Tuyền
                  </Typography>
                </motion.div>
                <motion.div
                  variants={fadeIn("left", 0.4)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ amount: 0.2 }}
                >
                  <Divider
                    sx={{ width: 360, border: "2px solid white", mt: 1 }}
                  />
                </motion.div>
                <Box
                  sx={{
                    mt: 2,
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                  }}
                >
                  {contactList.map((contact, index) => (
                    <motion.div
                      key={index}
                      variants={fadeIn("left", index * 0.2)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ amount: 0.2 }}
                    >
                      <Box
                        key={index}
                        display={"flex"}
                        gap={4}
                        alignItems={"center"}
                      >
                        <Box
                          height={60}
                          width={60}
                          sx={{
                            border: "2px solid white",
                            color: "primary.main",
                          }}
                          borderRadius={"100%"}
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          {contact.icon}
                        </Box>
                        <Box display={"flex"} flexDirection={"column"}>
                          <Typography variant="h8" color="white">
                            {contact.name}
                          </Typography>
                          <Typography variant="body2" color="white" mt={0.5}>
                            {contact.value}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.2 }}
            >
              <Box
                sx={{ p: 4, borderRadius: 2, backgroundColor: "white", gap: 1 }}
              >
                <motion.div
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ amount: 0.2 }}
                >
                  <Typography variant="h5" color="initial" mb={2}>
                    Thông tin người dùng
                  </Typography>
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ amount: 0.2 }}
                >
                  <CommonInput
                    label="Họ và tên"
                    placeholder="Nhập họ và tên của bạn"
                    value={formData.fullName}
                    onChange={(val) => handleChange("fullName", val)}
                  />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.8)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ amount: 0.2 }}
                >
                  <CommonInput
                    label="Email"
                    placeholder="Nhập email"
                    value={formData.email}
                    onChange={(val) => handleChange("email", val)}
                    isEmail={true}
                  />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ amount: 0.2 }}
                >
                  <CommonInput
                    label="Số điện thoại"
                    placeholder="Nhập số điện thoại"
                    value={formData.phone}
                    onChange={(val) => handleChange("phone", val)}
                    isPhone={true}
                  />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 1.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ amount: 0.2 }}
                >
                  <CommonSelectInput
                    label={"Chọn dịch vụ đăng ký"}
                    data={items}
                  />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 1.4)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ amount: 0.2 }}
                >
                  <CommonInputAutosize
                    label={"Tin nhắn kèm theo (Không bắt buộc)"}
                    placeholder="Nhập tin nhắn kèm theo (Không bắt buộc)"
                    value={formData.text}
                    onChange={(val) => handleChange("text", val)}
                  />
                </motion.div>
                <motion.div
                  variants={scaleUp(1.6)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ amount: 0.2 }}
                >
                  <CommonButton
                    label={"Gửi"}
                    sx={{ width: "100%" }}
                  ></CommonButton>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
}

export default ContactForm;
