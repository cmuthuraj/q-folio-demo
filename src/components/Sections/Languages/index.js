import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import styles from "./languages.module.css";
import LanguageItem from "./LanguageItem";
import Divider from "@mui/material/Divider";

export default function Languages(props) {
  const { languages } = props;

  return (
    <Box
      id="languages"
      className={styles.languages}
      sx={{
        marginTop: "-75px",
      }}
    >
      <Container maxWidth="md" className={styles.languageContainer}>
        <Grid
          container
          justifyContent="space-evenly"
          width="100%"
          marginLeft="0"
        >
          {Object.entries(languages).map(([key, value], index) => (
            <React.Fragment key={`language-item-${index}`}>
              <Grid
                item
                xs={12}
                sm={4}
                sx={{
                  flexBasis: { xs: "auto", padding: "0" },
                  display: "flex",
                }}
              >
                <LanguageItem language={key} percentage={value} />
              </Grid>
              {index !== Object.entries(languages).length - 1 ? (
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ borderRightWidth: "3px", borderColor: "#B21218" }}
                />
              ) : null}
            </React.Fragment>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
