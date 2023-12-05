import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import bin from '../../icon/icon.png';
import './DeleteConfirmation.css';

const DeleteConfirmation: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button id="delete-user-button" onClick={handleClickOpen}>
        {' '}
        <img
          src={bin}
          alt="Bin"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        Delete User
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="title"
        open={open}
        maxWidth="lg"
      >
        <DialogTitle> Delete Confirmation</DialogTitle>
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
          <Typography className="text-box">
            Are you sure to delete this user ?
          </Typography>
        </DialogContent>
        <DialogActions className="button-reject">
          <Button className="delete-cancel" autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button className="delete-confirm" autoFocus onClick={handleClose}>
            Yes, I'm sure
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default DeleteConfirmation;
