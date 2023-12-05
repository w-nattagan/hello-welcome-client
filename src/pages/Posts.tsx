import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepPurple } from "@mui/material/colors";
import "./Posts.css"
import DeletePostConfirmation from "../components/Post/DeletePostConfirmation";
import CreatePost from "../components/Post/CreatePost";

const PostsList: React.FC = () => {
  return (
    <Box>
      <Container className="container-background">
        <Box className="container-posts-list">
          <Box className="box-post">
            <Box id="section-one">
              <Stack spacing={2}>
                <Avatar
                  sx={{
                    bgcolor: deepPurple[500],
                    width: "64px",
                    height: "64px",
                    marginRight: "auto",
                  }}
                >
                  OP
                </Avatar>
              </Stack>
              <Box className="title-name-box">
                <Typography id="title-post">
                  sunt aut facere repellat provident occaecati excepturi optio
                  reprehenderit
                </Typography>
                <Typography id="name-post">By Leanne Graham</Typography>
              </Box>
            </Box>
            <Box id="detail-box">
              <Typography>
                quia et suscipit\nsuscipit recusandae consequuntur expedita et
                cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est
                autem sunt rem eveniet architecto
              </Typography>
            </Box>
            <Box className="button-box">
              <DeletePostConfirmation />
            </Box>
          </Box>
          <Box className="box-post">
            <Box id="section-one">
              <Stack spacing={2}>
                <Avatar
                  sx={{
                    bgcolor: deepPurple[500],
                    width: "64px",
                    height: "64px",
                    marginRight: "auto",
                  }}
                >
                  OP
                </Avatar>
              </Stack>
              <Box className="title-name-box">
                <Typography id="title-post">
                  sunt aut facere repellat provident occaecati excepturi optio
                  reprehenderit
                </Typography>
                <Typography id="name-post">By Leanne Graham</Typography>
              </Box>
            </Box>
            <Box id="detail-box">
              <Typography>
                quia et suscipit\nsuscipit recusandae consequuntur expedita et
                cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est
                autem sunt rem eveniet architecto
              </Typography>
            </Box>
            <Box className="button-box">
              <DeletePostConfirmation />
            </Box>
          </Box>
        </Box>
        <Box className="create-post-button">
          <CreatePost />
        </Box>
      </Container>
    </Box>
  );
};

export default PostsList;
