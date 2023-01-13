import React, { useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { H1, QPhoto } from "../../Shared";
import styles from "./about.module.css";
import { useIntersection } from "../../../utils/useIntersection";

export default function About(props) {
  const { title, content, imagePath, setinViewSection } = props;
  const ref = useRef();
  const inViewport = useIntersection(ref);

  useEffect(() => {
    if (inViewport) {
      setinViewSection(ref.current.id);
    }
  }, [inViewport]);

  return (
    <Box id="about" ref={ref} className={styles.aboutWrapper}>
      <Container maxWidth="md">
        <div className={styles.contentWrap}>
          <QPhoto imagePath={imagePath} />
          <div className={styles.textContent}>
            <p className={styles.sectionTitle}>Introduction</p>
            <H1 textAlign={"left"}>{title}</H1>
            <p>{content}</p>
          </div>
        </div>
      </Container>
    </Box>
  );
}
