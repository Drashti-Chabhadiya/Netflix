import { Box, Typography } from "@mui/material";
import React from "react";

const TitleUI = ({ title }) => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: "1.15rem", md: "2rem" },
          fontWeight: 700,
          color: "white",
        }}>
        {title}
      </Typography>
    </Box>
  );
};

export default TitleUI;
