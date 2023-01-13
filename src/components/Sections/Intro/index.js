import React, { useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ContentArea from "./ContentArea";
import ImageArea from "./ImageArea";
import { QualogyHero } from "../../Shared";
import styles from "./intro.module.css";
import { useIntersection } from "../../../utils/useIntersection";

export default function Intro(props) {
  const { setinViewSection } = props;
  const ref = useRef();
  const inViewport = useIntersection(ref);

  useEffect(() => {
    if (inViewport) {
      setinViewSection(ref.current.id);
    }
  }, [inViewport]);

  return (
    <Box id="intro" ref={ref} className={styles.introWrapper}>
      <Container maxWidth="md" className={styles.introContainer}>
        <ContentArea {...props} />
        <ImageArea {...props} />
      </Container>
    </Box>
  );
}
