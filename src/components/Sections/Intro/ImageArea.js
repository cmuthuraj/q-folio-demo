import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import imageLoader from "../../../utils/imageLoader";
import styles from "./intro.module.css";

export default function ImageArea(props) {
  const { myAvatar } = props;
  return (
    <Box className={styles.imageArea}>
      <div className={styles.introBgSection}>
        <Image
          loader={imageLoader}
          src="introbg.svg"
          alt="intro-bg"
          className={styles.introBg}
          objectFit="cover"
          objectPosition="center bottom"
          width="350px"
          height="337px"
          priority
        />
        <div className={styles.myImageSection}>
          <Image
            loader={imageLoader}
            src={myAvatar}
            className={styles.myImage}
            alt="my-image"
            width="250px"
            height="250px"
          />
        </div>
      </div>
    </Box>
  );
}
