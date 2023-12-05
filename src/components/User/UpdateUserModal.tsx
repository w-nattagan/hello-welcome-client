import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box, TextField } from "@mui/material";
import "../Common/CreateModal.css";

const UpdateUserModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button id="update-user-button" onClick={handleClickOpen}>
        Update User
      </Button>

      <Dialog
        className="dialog-container"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="lg"
      >
        <DialogTitle id="customized-dialog-title">Update User</DialogTitle>
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

        <DialogContent>
          <Box className="box-input">
            <Box>
              <Typography>Name</Typography>
              <TextField
                className="text-field-one "
                label="Account Name"
                id="outlined-basic"
                variant="outlined"
              />
            </Box>
            <Box>
              <Typography>Phone Number</Typography>
              <TextField
                className="text-field-two"
                label="Phone Number"
                id="outlined-basic"
                variant="outlined"
                autoComplete="phone"
                required
              />
            </Box>
          </Box>
          <Box className="box-input">
            <Box>
              <Typography>Email</Typography>
              <TextField
                className="text-field-one "
                label="Email"
                id="outlined-basic"
                variant="outlined"
              />
            </Box>
            <Box>
              <Typography>Website</Typography>
              <TextField
                className="text-field-two"
                label="Website"
                id="outlined-basic"
                variant="outlined"
              />
            </Box>
          </Box>
          <Typography style={{ paddingTop: "30px", paddingBottom: "15px" }}>
            Adress
          </Typography>
          <Box className="box-input">
            <Box>
              <Typography>Street</Typography>
              <TextField
                className="text-field-one "
                label="Street"
                id="outlined-basic"
                variant="outlined"
              />
            </Box>
            <Box>
              <Typography>Suite</Typography>
              <TextField
                className="text-field-two"
                label="Suite"
                id="outlined-basic"
                variant="outlined"
                autoComplete="phone"
                required
              />
            </Box>
          </Box>
          <Box className="box-input">
            <Box>
              <Typography>City</Typography>
              <TextField
                className="text-field-one "
                label="City"
                id="outlined-basic"
                variant="outlined"
              />
            </Box>
            <Box>
              <Typography>Zip code</Typography>
              <TextField
                className="text-field-two"
                label="Zip code"
                id="outlined-basic"
                variant="outlined"
              />
            </Box>
          </Box>
          <Typography style={{ paddingTop: "30px", paddingBottom: "15px" }}>
            Company
          </Typography>
          <Box className="box-input">
            <Box>
              <Typography>Name</Typography>
              <TextField
                className="text-field-one "
                label="Name"
                id="outlined-basic"
                variant="outlined"
              />
            </Box>
            <Box>
              <Typography>BS</Typography>
              <TextField
                className="text-field-two"
                label="BS"
                id="outlined-basic"
                variant="outlined"
                autoComplete="phone"
              />
            </Box>
          </Box>
          <Box className="box-input">
            <Box>
              <Typography>Catch phrase</Typography>
              <TextField
                className="text-field-one "
                label="Catch phrase"
                id="outlined-basic"
                variant="outlined"
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button className="submit-button" autoFocus onClick={handleClose}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default UpdateUserModal;
