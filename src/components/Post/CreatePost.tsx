import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Box, TextField } from '@mui/material';
import "../Common/CreateModal.css";
import createPost from '../../icon/CreatePost.png';

const CreatePost: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen}>
        <img
          src={createPost}
          alt="create post button"
          id="create-post-button"
        />
      </Button>
      <Dialog
        className="dialog-container"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="lg"
      >
        <DialogTitle id="customized-dialog-title">Create Post</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
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
              <Typography>Title</Typography>
              <TextField
                className="text-field-one "
                label="Title"
                id="outlined-basic"
                variant="outlined"
              />
            </Box>
          </Box>
          <Box className="box-input">
            <Box>
              <Typography>Content</Typography>
              <TextField
                className="text-field-one "
                label="Content"
                id="outlined-basic"
                variant="outlined"
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button className="submit-button" autoFocus onClick={handleClose}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default CreatePost;
