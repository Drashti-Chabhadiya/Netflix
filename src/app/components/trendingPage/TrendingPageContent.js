"use client";
import { Box, Grid } from "@mui/material";
import React from "react";
import TitleUI from "../common/TitleUI";
import { trendingImages } from "@/app/lib/TrendingPage/trendingImage";
import Image from "next/image";

const TrendingPageContent = () => {
  return (
    <Box sx={{ padding: "2rem 0" }}>
      <Box
        sx={{
          marginBottom: "1rem",
        }}>
        <TitleUI title={"Trending Now"} />
      </Box>
      <Grid container spacing={2}>
        {trendingImages.map((image, index) => (
          <Grid key={index} size={{ lg: 3, xs: 4, md: 2, sm: 2 }}>
            <Box
              sx={{
                overflow: "hidden",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}>
              <Image
                src={image.src}
                alt={image.alt}
                width={250}
                height={250}
                style={{
                  borderRadius: "8px",
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TrendingPageContent;
