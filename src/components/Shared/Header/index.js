import * as React from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import NavLink from "../NavLink";
import imageLoader from "../../../utils/imageLoader";
import Link from "next/link";

function Header(props) {
  const { window } = props;
  const theme = useTheme();

  const desktopNavMenu = () => (
    <AppBar
      component="nav"
      sx={{ background: theme.palette.background.header }}
    >
      <Toolbar sx={{ justifyContent: { xs: "center", sm: "space-between" } }}>
        <Box style={{ cursor: "pointer" }}>
          <Image
            loader={imageLoader}
            src="qlogo.svg"
            alt="logo"
            width="75%"
            height="50px"
            priority
          />
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {props.navItems.map((item) => (
            <NavLink
              key={item.name}
              href={`${item.route}`}
              inViewSection={props.inViewSection}
            >
              <Button sx={{ color: "inherit" }}>{item.name}</Button>
            </NavLink>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", height: props.height }}>{desktopNavMenu()}</Box>
  );
}

export default Header;
