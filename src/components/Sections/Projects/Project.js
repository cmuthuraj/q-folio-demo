import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ProjectDetails from "./ProjectDetail";

const Project = ({ data }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <Card
      sx={{
        width: 250,
        height: 350,
        borderRadius: "0",
        borderTopRightRadius: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={data.tileImage}
        alt="Project"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          title={data.title}
          sx={{
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          {data.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "12px" }}
        >
          {data.shortDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={handleClickOpen}
          size="small"
          sx={{ color: "#d0671c" }}
        >
          Read More
        </Button>
      </CardActions>
      <ProjectDetails data={data} open={open} closeCallback={handleClose} />
    </Card>
  );
};

export default Project;
