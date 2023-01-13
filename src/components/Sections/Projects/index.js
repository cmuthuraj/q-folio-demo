import React, { useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { H1 } from "../../Shared";
import Project from "./Project";
import styles from "./projects.module.css";
import { useIntersection } from "../../../utils/useIntersection";

export default function Projects(props) {
  const { content, setinViewSection } = props;

  const ref = useRef();
  const inViewport = useIntersection(ref); // Trigger as soon as the element becomes visible

  useEffect(() => {
    if (inViewport) {
      setinViewSection(ref.current.id);
    }
  }, [inViewport]);

  return (
    <Box id="projects" ref={ref} className={styles.projectsWrapper}>
      <Container maxWidth="md">
        <H1>Projects</H1>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="stretch"
          sx={{ marginTop: "10px" }}
        >
          {content.map((project, index) => (
            <Grid
              item
              xs={12}
              sm={4}
              sx={{ flexBasis: { xs: "auto" } }}
              key={index}
            >
              <Project data={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
