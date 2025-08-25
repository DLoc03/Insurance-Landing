import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

import AdvantageCard from "./AdvantageCard";

import { motion } from "framer-motion";
import { fadeIn, scaleUp, zoomIn } from "@/utils";

export default function ServiceDetailCard({
  data,
  image,
  category,
  layout = "default",
  advantageHeading,
}) {
  if (!data) return null;

  if (category && !data.category.includes(category)) return null;

  const getAdvantageHeading = (adv, index) => {
    if (typeof advantageHeading === "function") {
      return advantageHeading(adv, index);
    } else if (Array.isArray(advantageHeading)) {
      return advantageHeading[index] ?? index + 1;
    } else if (advantageHeading) {
      return advantageHeading;
    }
    return index + 1;
  };

  const renderContent = () => (
    <Box>
      {data.content?.map((block) => (
        <Box key={block.headID} mb={4}>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.2 }}
          >
            <Typography
              variant="h6"
              fontWeight={600}
              gutterBottom
              color="primary.main"
            >
              {block.heading}
            </Typography>
          </motion.div>

          {block.content?.map((para, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn("up", idx * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.2 }}
            >
              <Typography
                key={idx}
                variant="body1"
                color="text.primary"
                paragraph
              >
                {para}
              </Typography>
            </motion.div>
          ))}
        </Box>
      ))}
    </Box>
  );

  const renderAdvantages = () => (
    <Grid container spacing={3} height="100%">
      {data.advantage?.map((adv, index) => (
        <Grid key={adv.headID ?? index} item size={{ xs: 12, lg: 6 }}>
          <motion.div
            key={index}
            variants={fadeIn("up", index * 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.2 }}
            style={{ height: "100%" }}
          >
            <AdvantageCard
              advantage={adv}
              advantageHeading={getAdvantageHeading(adv, index)}
            />
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box sx={{ py: 2, px: { xs: 2, md: 0 } }}>
      {/* Name & Description */}

      <Divider>
        <motion.div
          variants={scaleUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2 }}
        >
          <Typography
            variant="h2"
            fontWeight={700}
            color="primary.main"
            textAlign="center"
            gutterBottom
          >
            {data.name}
          </Typography>
        </motion.div>
      </Divider>
      <motion.div
        variants={scaleUp(0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.2 }}
      >
        <Typography
          variant="body1"
          textAlign="center"
          maxWidth={700}
          mx="auto"
          color="text.secondary"
          mb={4}
        >
          {data.description}
        </Typography>
      </motion.div>
      <motion.div
        variants={scaleUp(0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.2 }}
      >
        <img
          src={image}
          alt={data.name}
          title={data.description}
          style={{ width: "100%", objectFit: "contain", marginBottom: "8px" }}
        />
      </motion.div>

      {/* Switch layout */}
      {layout === "default" && (
        <>
          {renderContent()}
          <Grid container spacing={2}>
            {data.advantage?.map((adv, index) => (
              <Grid
                key={adv.headID ?? index}
                item
                size={{ xs: 12, md: 4, lg: 3 }}
              >
                <motion.div
                  key={index}
                  variants={fadeIn("up", index * 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ amount: 0.2 }}
                  style={{ height: "100%" }}
                >
                  <AdvantageCard
                    advantage={adv}
                    advantageHeading={getAdvantageHeading(adv, index)}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </>
      )}

      {layout === "left" && (
        <Grid container spacing={4} alignItems="flex-start">
          <Grid item size={{ xs: 12, md: 6 }}>
            {renderContent()}
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            {renderAdvantages()}
          </Grid>
        </Grid>
      )}

      {layout === "right" && (
        <Grid container spacing={4} alignItems="flex-start">
          <Grid size={{ xs: 12, md: 6 }} order={{ xs: 2, md: 1 }}>
            {renderAdvantages()}
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 2 }}>
            {renderContent()}
          </Grid>
        </Grid>
      )}

      {layout === "split" && (
        <Box>
          {data.content?.map((block, i) => (
            <Grid
              container
              spacing={2}
              key={block.headID}
              alignItems="flex-start"
              mb={6}
            >
              <Grid item size={{ xs: 12, md: 6 }}>
                <Box id={`content-${i}`} height="100%">
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {block.heading}
                  </Typography>
                  {block.content?.map((para, idx) => (
                    <Typography key={idx} variant="body1" paragraph>
                      {para}
                    </Typography>
                  ))}
                </Box>
              </Grid>

              {/* Right Advantage */}
              <Grid item size={{ xs: 12, md: 6 }}>
                <Box
                  height="100%"
                  maxHeight="100%"
                  overflowY="auto"
                  overflowX="hidden"
                  pr={1}
                >
                  {data.advantage?.map((adv, idx) => (
                    <Box key={adv.headID ?? idx} mb={2}>
                      <AdvantageCard
                        advantage={adv}
                        advantageHeading={getAdvantageHeading(adv, idx)}
                      />
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
          ))}
        </Box>
      )}

      {layout === "minimal" && renderAdvantages()}
    </Box>
  );
}
