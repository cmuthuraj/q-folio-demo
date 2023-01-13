import React from "react";
import Box from "@mui/material/Box";
import Header from "../Header";

export default function Layout({ children, navItems, inViewSection }) {
  return (
    <>
      <Header
        height="7vh"
        navItems={navItems}
        inViewSection={inViewSection}
      />
      <Box id="contentArea">
        {children}
      </Box>
    </>
  );
}
