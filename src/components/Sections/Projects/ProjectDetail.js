import React from "react";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import styles from "./projects.module.css";

const PopupTransition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProjectDetails = ({ data, open, closeCallback }) => {
  const handleClose = () => {
    closeCallback();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      minWidth="md"
      TransitionComponent={PopupTransition}
    >
      <DialogTitle id="customized-dialog-title" className={styles.popupTitle}>
        {data.title}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <TableContainer>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell className={styles.popupRowHeading}>Period</TableCell>
                <TableCell>{data.period}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={styles.popupRowHeading}>Client</TableCell>
                <TableCell>{data.client}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={styles.popupRowHeading}>Role</TableCell>
                <TableCell>{data.role}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography
          className={styles.popupSubTitle}
          gutterBottom
          sx={{ marginTop: "20px" }}
        >
          Description
        </Typography>
        <p className={styles.popupContent}>{data.longDescription}</p>
        <Typography className={styles.popupSubTitle} gutterBottom>
          Tasks / Responsibilities
        </Typography>
        <ul className={styles.popupContent}>
          {data.tasks.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <Typography className={styles.popupSubTitle} gutterBottom>
          Tools / Techniques
        </Typography>
        <ul className={styles.popupContent}>
          {data.technology.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetails;
