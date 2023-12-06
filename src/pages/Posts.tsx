import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
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
  const [currentPage, setCurrentPage] = useState<number>(0);
  const postsPerPage = 20;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch posts
        const postsResponse = await fetchApi<Post[]>(`/posts?page=${currentPage + 1}&limit=${postsPerPage}`, "get");
        const newPosts = postsResponse.data;

        // Fetch users
        const usersResponse = await fetchApi<User[]>("/users", "get");
        const newUsers = usersResponse.data;

        // Update state
        setPosts(prevPosts => {
          //console.log("Previous Posts:", prevPosts);
          //console.log("New Posts:", newPosts);
          return [...prevPosts, ...newPosts];
        });
        setUsers(prevUsers => [...prevUsers, ...newUsers]);

        // Update currentPage after the initial fetch
        if (currentPage === 0) {
          setCurrentPage(1);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Fetch data only on component mount and when currentPage is updated
    if (currentPage > 0) {
      fetchData();
    }
  }, [currentPage]);

  const onSuccess = async () => {
    try {
      // Reset to the first page when creating a new post
      setCurrentPage(1);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const getUserNameById = (userId: number): string => {
    const user = users.find(user => user.id === userId);
    return user ? user.name : "Unknown User";
  };

  const handleLoadMore = () => {
    // Load the next page of data
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <Box>
      <Container className="container-background">
        <Box className="create-post-button">
          <CreatePost onSuccess={onSuccess} />
        </Box>
        <Box className="container-posts-list">
          {posts.map((post, index) => (
            <Box key={`post_${post.id}_${index}`} className="box-post">
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
          {posts.length % postsPerPage === 0 && (
            <Button variant="outlined" onClick={handleLoadMore}>
              Load More
            </Button>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default PostsList;
