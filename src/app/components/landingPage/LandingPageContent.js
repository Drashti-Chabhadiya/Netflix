import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const LandingPageContent = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        textAlign: "center",
        top: "60%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
      }}>
      <Typography
        sx={{
          fontSize: { md: "4rem", xs: "2rem" },
          fontWeight: "bold",
          lineHeight: 1.2,
          marginBottom: "24px",
        }}>
        Unlimited movies, TV shows and more
      </Typography>
      <Typography
        sx={{ fontSize: "1.25rem", fontWeight: 500, marginBottom: "32px" }}>
        Starts at ₹149. Cancel at any time.
      </Typography>
      <Typography
        variant="h3"
        sx={{ fontSize: "1rem", fontWeight: 400, lineHeight: 1.5 }}>
        Ready to watch? Enter your email to create or restart your membership.
      </Typography>

      <Box
        sx={{
          paddingTop: "16px",
          display: "flex",
          gap: "8px",
          flexWrap: {
            xs: "wrap",
            sm: "wrap",
            md: "nowrap",
            lg: "nowrap",
          },
          justifyContent: "center",
          alignItems: "center",
        }}>
        <TextField
          // fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "1px solid rgba(255, 255, 255, 0.3)",
              },
              "&:hover fieldset": {
                border: "1px solid rgba(255, 255, 255, 0.3)",
              },
              "&.Mui-focused fieldset": {
                border: "2px solid white",
              },
              minWidth: {
                sm: "auto",
                md: "500px",
              },
            },
            "& #outlined-basic-label": {
              color: "rgba(255, 255, 255, 0.7)",
            },
            "& .MuiOutlinedInput-input": {
              color: "white",
            },
          }}
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#E50814",
            textTransform: "capitalize",
            fontSize: {
              xs: "1.125rem",
              md: "1.5rem",
            },
            fontWeight: 500,
            minWidth: {
              sm: "auto",
              md: "200px",
            },
            height: "56px",
          }}>
          get started
          <ArrowForwardIosIcon fontSize="20px" />
        </Button>
      </Box>
    </Container>
  );
};

export default LandingPageContent;
