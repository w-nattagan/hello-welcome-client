import React, { useState, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepPurple } from "@mui/material/colors";
import "./Posts.css";
import DeletePostConfirmation from "../components/Post/DeletePostConfirmation";
import CreatePost from "../components/Post/CreatePost";
import { fetchApi } from "../utils/apiUtils";
import { Post, User } from '../types/types';

const PostsList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsResponse, usersResponse] = await Promise.all([
          fetchApi<Post[]>("/posts", "get"),
          fetchApi<User[]>("/users", "get"),
        ]);

        setPosts(postsResponse.data);
        setUsers(usersResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const onSuccess = async () => {
    try {
      const response = await fetchApi<Post[]>("/posts", "get");
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const getUserNameById = (userId: number): string => {
    const user = users.find(user => user.id === userId);
    return user ? user.name : "Unknown User";
  };

  return (
    <Box>
      <Container className="container-background">
        <Box className="container-posts-list">
          {posts.map((post) => (
            <Box key={post.id} className="box-post">
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
                    {getUserNameById(post.userId)[0].toUpperCase()}
                  </Avatar>
                </Stack>
                <Box className="title-name-box">
                  <Typography id="title-post">{post.title}</Typography>
                  <Typography id="name-post">{`By ${getUserNameById(post.userId)}`}</Typography>
                </Box>
              </Box>
              <Box id="detail-box">
                <Typography>{post.body}</Typography>
              </Box>
              <Box className="button-box">
                <DeletePostConfirmation postId={post.id} onDeleteSuccess={onSuccess} />
              </Box>
            </Box>
          ))}
        </Box>
        <Box className="create-post-button">
          <CreatePost onSuccess={onSuccess} />
        </Box>
      </Container>
    </Box>
  );
};

export default PostsList;
