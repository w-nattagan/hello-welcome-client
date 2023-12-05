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
import createUser from "../../icon/Vector.png";
import "../Common/CreateModal.css";
import { fetchApi } from "../../utils/apiUtils";

interface CreateUserModalProps {
  // Add any necessary props
}

const CreateUserModal: React.FC<CreateUserModalProps> = () => {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (
    field: string,
    value: string | Record<string, any>
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response: any = await fetchApi("/api/users", "post", formData);

      if (response.status === 201) {
        handleClose();
      } else {
        console.error("Failed to create user");
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen}>
        <img src={createUser} alt="Create-User" />
      </Button>
      <Dialog
        className="dialog-container"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="lg"
      >
        <DialogTitle id="customized-dialog-title">Create User</DialogTitle>
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
          {/* Form fields */}
          <Typography style={{ paddingBottom: "15px" }}>
            User
          </Typography>
          <Box className="box-input">
            <Box>
              <TextField
                className="text-field-one"
                label="Name"
                variant="outlined"
                required
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
            </Box>
            <Box>
              <TextField
                className="text-field-two"
                label="Phone Number"
                id="outlined-basic"
                variant="outlined"
                autoComplete="phone"
                required
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />
            </Box>
          </Box>
          <Box className="box-input">
            <Box>
              <TextField
                className="text-field-one"
                label="Username"
                variant="outlined"
                required
                value={formData.username}
                onChange={(e) => handleInputChange("username", e.target.value)}
              /></Box>
            <Box>
              <TextField
                className="text-field-two"
                label="Email"
                variant="outlined"
                required
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </Box>
          </Box>
          <Box className="box-input">
            <Box>
              <TextField
                className="text-field-one"
                label="Website"
                variant="outlined"
                value={formData.website}
                onChange={(e) => handleInputChange("website", e.target.value)}
              />
            </Box>
          </Box>
          <Typography style={{ paddingTop: "30px", paddingBottom: "15px" }}>
            Address
          </Typography>
          <Box className="box-input">
            <Box>
              <TextField
                className="text-field-one"
                label="Street"
                variant="outlined"
                required
                value={formData.address.street}
                onChange={(e) => handleInputChange("address", {
                  ...formData.address,
                  street: e.target.value,
                })}
              />
            </Box>
            <Box>
              <TextField
                className="text-field-one"
                label="Suite"
                variant="outlined"
                required
                value={formData.address.suite}
                onChange={(e) => handleInputChange("address", {
                  ...formData.address,
                  suite: e.target.value,
                })}
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
                required
                value={formData.address.city}
                onChange={(e) => handleInputChange("address", {
                  ...formData.address,
                  city: e.target.value,
                })}
              />
            </Box>
            <Box>
              <Typography>Zip code</Typography>
              <TextField
                className="text-field-two"
                label="Zip code"
                id="outlined-basic"
                variant="outlined"
                required
                value={formData.address.zipcode}
                onChange={(e) => handleInputChange("address", {
                  ...formData.address,
                  zipcode: e.target.value,
                })}
              />
            </Box>
          </Box>
          <Typography style={{ paddingTop: "30px", paddingBottom: "15px" }}>
            Company
          </Typography>
          <Box className="box-input">
            <Box>
              <TextField
                className="text-field-one"
                label="Company Name"
                variant="outlined"
                required
                value={formData.company.name}
                onChange={(e) => handleInputChange("company", {
                  ...formData.company,
                  name: e.target.value,
                })}
              />
            </Box>
            <Box>
              <TextField
                className="text-field-one"
                label="Catch Phrase"
                variant="outlined"
                required
                value={formData.company.catchPhrase}
                onChange={(e) => handleInputChange("company", {
                  ...formData.company,
                  catchPhrase: e.target.value,
                })}
              />
            </Box>
          </Box>
          <Box className="box-input">
            <Box>
              <TextField
                className="text-field-one"
                label="Business Services"
                variant="outlined"
                required
                value={formData.company.bs}
                onChange={(e) => handleInputChange("company", {
                  ...formData.company,
                  bs: e.target.value,
                })}
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button className="submit-button" autoFocus onClick={handleSubmit}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default CreateUserModal;
