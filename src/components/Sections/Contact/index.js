import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { H1 } from "../../Shared";
import imageLoader from "../../../utils/imageLoader";
import styles from "./contact.module.css";
import { useIntersection } from "../../../utils/useIntersection";

export default function Contact({ setinViewSection }) {
  const ref = useRef();
  const inViewport = useIntersection(ref);

  useEffect(() => {
    if (inViewport) {
      setinViewSection(ref.current.id);
    }
  }, [inViewport]);

  return (
    <Box id="contact" ref={ref} className={styles.contactWrapper}>
      <div className={styles.contactBgSection}>
        <Image
          loader={imageLoader}
          src="contactBG.jpg"
          alt="contact-bg"
          className={styles.contactBg}
          width="100%"
          height="93vh"
          priority
        />
      </div>
      <Container maxWidth="md">
        <H1 className={styles.contactHeading}>Contact</H1>
        <Box className={styles.contactCardWrapper}>
          <Card className={styles.contactCard}>
            <Grid container spacing={1} sx={{ textAlign: "center" }}>
              <Grid item xs={12}>
                <p>De Bruyn Kopsstraat 9,</p>
                <p>2288 EC Rijswijk (ZH), The Netherlands</p>
                <p>Phone: +31 (0)70 319 50 00</p>
                <p>Email: sales@qualogy.com</p>
              </Grid>
              <Grid item xs={12}>
                <p>Account manager</p>
                <p>Phone: +31 (0)70 319 50 00</p>
                <p>Email: sales@qualogy.com</p>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
