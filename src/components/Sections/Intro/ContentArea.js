import * as React from "react";
import Box from "@mui/material/Box";
import VideoDialog from "./VideoDiaolog";
import styles from "./intro.module.css";

export default function ContentArea(props) {
  const { name, role, description } = props;
  return (
    <Box>
      <div className={styles.introText}>Hi! I am</div>
      <div className={styles.introName}>{name}</div>
      <div className={styles.introRole}>{role}</div>
      <div className={styles.introDescription}>{description}</div>
      <VideoDialog />
    </Box>
  );
}
