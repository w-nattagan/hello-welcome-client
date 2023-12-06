import React, { useState } from "react";
import { Box, Typography, Avatar, Grid, Stack } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { styled } from "@mui/system";
import DeleteConfirmation from "./DeleteUserConfirmation";
import CustomSnackbar from "../Common/CustomSnackbar";

const Item = styled("div")(({ theme }) => ({
    margin: theme.spacing(1),
    textAlign: "left",
    boxShadow: "none",
}));

interface UserDetailsProps {
    selectedUser: {
        id: number;
        name: string;
        username: string;
        email: string;
        address: {
            street: string;
            suite: string;
            city: string;
            zipcode: string;
            geo: {
                lat: string;
                lng: string;
            };
        };
        phone: string;
        website: string;
        company: {
            name: string;
            catchPhrase: string;
            bs: string;
        };
    };
    onDeleteSuccess: () => void;
}

const UserDetails: React.FC<UserDetailsProps> = ({ selectedUser, onDeleteSuccess }) => {
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleDeleteSuccess = () => {
        // Show success
        setSnackbarOpen(true);
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
        
        // Update user list in the parent component
        onDeleteSuccess();
    };

    return (
        <Box className="detail-container">
            <Box className="detail-of-users">
                <Box className="head-list">
                    <Typography>😃 Hello, welcome</Typography>
                </Box>
            </Box>
            <Box className="details">
                <Box className="first-box">
                    <Grid container>
                        <Grid item xs={6} md={5}>
                            <Item>
                                <Typography className="Topic">Name :</Typography>
                                <Typography className="Content">{selectedUser.name}</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={6} md={5}>
                            <Item>
                                <Typography className="Topic">Username :</Typography>
                                <Typography className="Content">{selectedUser.username}</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={6} md={5}>
                            <Item>
                                <Typography className="Topic">Email :</Typography>
                                <Typography className="Content">{selectedUser.email}</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={6} md={5}>
                            <Item>
                                <Typography className="Topic">Phone :</Typography>
                                <Typography className="Content">{selectedUser.phone}</Typography>
                            </Item>
                        </Grid>
                    </Grid>
                    <Stack spacing={2}>
                        <Avatar
                            sx={{
                                bgcolor: deepPurple[500] as string,
                                width: "150px",
                                height: "150px",
                                marginRight: "auto",
                            }}
                        >
                            {selectedUser.username[0].toUpperCase()}
                        </Avatar>
                    </Stack>
                </Box>
                <Typography className="address">Address</Typography>
                <Grid container>
                    <Grid item xs={6} md={3}>
                        <Item>
                            <Typography className="Topic">Street :</Typography>
                            <Typography className="Content">{selectedUser.address.street}</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Item>
                            <Typography className="Topic">Suite :</Typography>
                            <Typography className="Content">{selectedUser.address.suite}</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Item>
                            <Typography className="Topic">City :</Typography>
                            <Typography className="Content">{selectedUser.address.city}</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Item>
                            <Typography className="Topic">Zip code :</Typography>
                            <Typography className="Content">{selectedUser.address.zipcode}</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Item>
                            <Typography className="Topic">Latitude :</Typography>
                            <Typography className="Content">{selectedUser.address.geo.lat}</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Item>
                            <Typography className="Topic">Longitude :</Typography>
                            <Typography className="Content">{selectedUser.address.geo.lng}</Typography>
                        </Item>
                    </Grid>
                </Grid>
                <Typography className="address">Company</Typography>
                <Grid container>
                    <Grid item xs={6} md={5}>
                        <Item>
                            <Typography className="Topic">Company Name :</Typography>
                            <Typography className="Content">{selectedUser.company.name}</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={6} md={5}>
                        <Item>
                            <Typography className="Topic">Catch Phrase :</Typography>
                            <Typography className="Content">{selectedUser.company.catchPhrase}</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Item>
                            <Typography className="Topic">Business :</Typography>
                            <Typography className="Content">{selectedUser.company.bs}</Typography>
                        </Item>
                    </Grid>
                </Grid>
                <Box className="container-button">
                    <DeleteConfirmation userId={selectedUser.id} onDeleteSuccess={handleDeleteSuccess} />
                </Box>
            </Box>
            <CustomSnackbar
                open={snackbarOpen}
                message="User deleted successfully!"
                onClose={handleCloseSnackbar}
            />
        </Box>
    );
};

export default UserDetails;
