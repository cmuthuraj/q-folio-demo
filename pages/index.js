import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CircleBG, NavLink } from "../src/components/Shared";

const linkColor = "#bfae9f";

export default function Index() {
  return (
    <>
      <div className="backgroundImage"></div>
      <Box
        sx={{
          overflowY: "hidden",
          position: "relative",
        }}
      >
       
        <Box sx={{ textAlign: "center", paddingTop: "5vh", height: "100vh" }}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ color: "#6E1704" }}
          >
            Welcome to Qfolio
          </Typography>
          <div
            style={{ color: "#6e1704", fontSize: "14px", marginBottom: "30px" }}
          >
            The digital portfolio for the Qualogy employee
          </div>
          <NavLink href="/users/anton" color={linkColor}>
            Anton
          </NavLink>
          <br />
          <br />
          <NavLink href="/users/chandru" color={linkColor}>
            Chandru
          </NavLink>
          <br />
          <br />
          <NavLink href="/users/vahid" color={linkColor}>
            Vahid
          </NavLink>
          <br />
          <br />
          <NavLink href="/users/vlad" color={linkColor}>
            Vlad
          </NavLink>
          <CircleBG />
        </Box>
      </Box>
    </>
  );
}
