import React, { Fragment, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { H1 } from "../../Shared";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
import styles from "./skills.module.css";
import { useIntersection } from "../../../utils/useIntersection";

export default function Skills(props) {
  const { content, setinViewSection } = props;
  const ref = useRef();
  const inViewport = useIntersection(ref);

  useEffect(() => {
    if (inViewport) {
      setinViewSection(ref.current.id);
    }
  }, [inViewport]);

  return (
    <Box
      id="skills"
      ref={ref}
      className={styles.skillsWrapper}
      sx={{ py: 4, scrollMarginTop: "7vh" }}
    >
      <Container maxWidth="md">
        <H1>Skills</H1>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="stretch"
          sx={{ marginTop: "10px" }}
        >
          {content?.map((skill) => (
            <Grid
              item
              xs={12}
              sm={4}
              sx={{ flexBasis: { xs: "auto", position: "relative" } }}
              key={skill.category}
            >
              <Card
                sx={{
                  width: 250,
                  height: 180,
                  marginBottom: "25px",
                  borderRadius: "0",
                  borderTopRightRadius: "50px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backgroundColor: "#F5F5F5",
                }}
              >
                <CardContent>
                  <LightbulbCircleIcon
                    sx={{
                      color: "#d0671c",
                      fontSize: 40,
                      position: "absolute",
                      top: 0,
                    }}
                  />
                  <h4>{skill.category}</h4>
                  <Typography sx={{ fontSize: "12px" }}>
                    {skill.items}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
