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
        const users: User[] = await fetchApi('/users');
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

  return (
    <Box className="container">
      <Box className="second-container">
        <Box className="list-container">
          <Box className="list-of-users">
            <Box className="head-list">
              <Typography>List of users</Typography>
              <CreateUserModal />
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
        {selectedUser && <UserDetails selectedUser={selectedUser} />}
      </Box>
    </Box>
  );
};

export default UsersList;
