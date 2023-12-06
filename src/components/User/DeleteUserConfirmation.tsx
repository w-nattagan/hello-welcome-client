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
import '../Common/DeleteConfirmation.css';
import { fetchApi } from '../../utils/apiUtils';

interface DeleteConfirmationProps {
  userId: number; 
  onDeleteSuccess: () => void;
}

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({ userId, onDeleteSuccess }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    try {
      await fetchApi(`/users/${userId}`, 'delete');
      onDeleteSuccess();
    } catch (error) {
      console.error('Error deleting user:', error);
    } finally {
      handleClose();
    }
  };

  return (
    <React.Fragment>
      <Button id="delete-user-button" onClick={handleClickOpen}>
        <img src={bin} alt="Bin" style={{ maxWidth: '100%', height: 'auto' }} />
        Delete User
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="title" open={open} maxWidth="lg">
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
          <Typography className="text-box">Are you sure to delete this user?</Typography>
        </DialogContent>
        <DialogActions className="button-reject">
          <Button className="delete-cancel" autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button className="delete-confirm" autoFocus onClick={handleDelete}>
            Yes, I'm sure
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default DeleteConfirmation;
