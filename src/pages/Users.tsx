import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import CreateUserModal from '../components/User/CreateUserModal';
import UserTable from '../components/User/UserTable';
import UserDetails from '../components/User/UserDetails';
import { fetchApi } from '../utils/apiUtils';
import { User } from '../types/types';
import './Users.css'

const UsersList: React.FC = () => {
  const [userData, setUserData] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetchApi<User[]>('/users', 'get');
        const users = response.data;
        setUserData(users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    getUsers();
  }, []);

  const handleDetailClick = (user: User) => {
    setSelectedUser(user);
  };

  const handleDeleteSuccess = () => {
    // Update user list
    const updatedUsers = userData.filter(user => user.id !== selectedUser?.id);
    setUserData(updatedUsers);
    // Clear the selected user
    setSelectedUser(null);
  };

  const handleCreateSuccess = async () => {
    try {
      // Fetch users data again
      const response = await fetchApi<User[]>('/users', 'get');
      const updatedUsers = response.data;
  
      // Update user list
      setUserData(updatedUsers);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <Box className="container">
      <Box className="second-container">
        <Box className="list-container">
          <Box className="list-of-users">
            <Box className="head-list">
              <Typography>List of users</Typography>
              <CreateUserModal onSuccess={handleCreateSuccess} />
            </Box>
            <UserTable
              columns={[
                { id: 'name', label: 'Name', minWidth: 50 },
                { id: 'email', label: 'Email', minWidth: 50 },
                { id: 'detail', label: 'Detail', minWidth: 25 },
              ]}
              rows={userData}
              handleDetailClick={handleDetailClick}
            />
          </Box>
        </Box>
        {/* USER DETAILS */}
        {selectedUser &&
          (<UserDetails
            selectedUser={selectedUser}
            onDeleteSuccess={handleDeleteSuccess} />)
        }
      </Box>
    </Box>
  );
};

export default UsersList;
