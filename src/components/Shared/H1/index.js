import React from "react";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import styles from "./h1.module.css";

export default function H1({ color, className, children, textAlign }) {
  const theme = useTheme();
  const align = textAlign ?? "center";
  return (
    <div className={styles.h1Wrapper} style={{textAlign: align}}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        className={className}
        sx={{
          textAlign: align,
          color: color ?? theme.palette.primary.heading,
        }}
      >
        {children}
      </Typography>
      <div className={styles.h1Underline} style={align === "center" ? {margin: 'auto'} : undefined}></div>
    </div>
  );
}
