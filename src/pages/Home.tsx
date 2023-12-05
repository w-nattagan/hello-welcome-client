import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleUsersListClick = () => {
    navigate("/users");
  };

  const handlePostsListClick = () => {
    navigate("/posts");
  };

  return (
    <Box id="container">
      <Container id="second-container">
        <Typography className="app-name">Hello Welcome 😃</Typography>
        <Box id="select-menu-box">
          <Typography id="text-menu">please select menu</Typography>
        </Box>
        <Box id="button-container">
          <Button id="user-list-button" onClick={handleUsersListClick}>
            USERS-LIST
          </Button>
          <Button id="post-list-button" onClick={handlePostsListClick}>
            POSTS-LIST
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
