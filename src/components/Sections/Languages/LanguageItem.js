import React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

export default function LanguageItem(props) {
  const { language, percentage } = props;

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "90px",
          width: "90px",
        }}
      >
        <CircularProgress
          variant="determinate"
          size={90}
          color={"inherit"}
          value={100}
          thickness={6}
          sx={{
            position: "absolute",
            inset: "0",
            color: "#d0671c",
          }}
        />
        <CircularProgress
          variant="determinate"
          size={86}
          color={"inherit"}
          value={100}
          thickness={4}
          sx={{
            position: "absolute",
            inset: "2px",
            color: "#fff",
          }}
        />
        <CircularProgress
          variant="determinate"
          size={90}
          color={"inherit"}
          value={percentage}
          thickness={6}
          sx={{
            position: "absolute",
            inset: "0",
            color: "#d0671c",
          }}
        />
        <Typography
          variant="caption"
          component="div"
          sx={{ fontWeight: "700", fontSize: "16px" }}
        >
          {percentage}%
        </Typography>
      </Box>
      <Typography
        variant="caption"
        component="div"
        sx={{ marginTop: "10px", color: "#D0671C", fontSize: "18px" }}
      >
        {language}
      </Typography>
    </Box>
  );
}
