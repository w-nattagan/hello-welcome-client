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
import { fetchApi } from '../../utils/apiUtils';
import CustomSnackbar from '../Common/CustomSnackbar';
interface CreateModalProps {
  onSuccess: () => void;
}

const CreatePost: React.FC<CreateModalProps> = ({ onSuccess }) => {
  const [open, setOpen] = useState(false);
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onSuccess();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === 'title') {
      setPostTitle(value);
    } else if (name === 'content') {
      setPostContent(value);
    }
  };

  const handleCreatePost = async () => {
    try {
      const postData = {
        title: postTitle,
        body: postContent,
        userId: 1,
      };

      const response: any = await fetchApi("/posts", "post", postData);

      if (response.status === 201) {
        setSnackbarOpen(true);
      } else {
        // Extract and display the error details
        const errorDetails = response.data.errors || [];
        setErrorMessage(`Failed to create post. Error details: ${JSON.stringify(errorDetails)}`);
      }
    } catch (error) {
      setErrorMessage(`Error creating post: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
    handleClose();
  };

  const handleCloseErrorSnackbar = () => {
    setErrorMessage("");
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
                className="text-field-multi"
                label="Title"
                id="title"
                name="title"
                variant="outlined"
                required
                onChange={handleInputChange}
                inputProps={{ maxLength: 100 }}
              />
            </Box>
          </Box>
          <Box className="box-input">
            <Box>
              <Typography>Content</Typography>
              <TextField
                className="text-field-multi"
                label="Content"
                id="content"
                name="content"
                variant="outlined"
                multiline
                rows={7}
                required
                onChange={handleInputChange}
                inputProps={{ maxLength: 1000 }}
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button className="submit-button" autoFocus onClick={handleCreatePost}>
            Submit
          </Button>
        </DialogActions>
        <CustomSnackbar
          open={snackbarOpen}
          message="Post created successfully!"
          onClose={handleCloseSnackbar}
        />
        <CustomSnackbar
          open={!!errorMessage}
          onClose={handleCloseErrorSnackbar}
          message={errorMessage || ''}
        />
      </Dialog>
    </React.Fragment>
  );
};

export default CreatePost;
