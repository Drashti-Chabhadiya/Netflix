import React from "react";
import { Box } from "@mui/material";

const HeaderButton = ({ children }) => {
  return <Box sx={{ display: "flex", gap: "8px" }}>{children}</Box>;
};

export default HeaderButton;
