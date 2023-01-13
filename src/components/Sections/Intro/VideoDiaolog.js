import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import styles from "./intro.module.css";

export default function VideoDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className={styles.openVideoBtn}
        variant="outlined"
        onClick={handleClickOpen}
      >
        Watch my video
      </Button>
      <Dialog
        fullWidth={true}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <div className={styles.videoResponsive}>
            <iframe
              width="900"
              height="500"
              src={`https://www.youtube.com/embed/gtA3rLyFqyM`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Profile intro"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
