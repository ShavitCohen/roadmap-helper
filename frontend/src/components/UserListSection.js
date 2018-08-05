import React from 'react';
import UserListDetails from './UserListDetails';
import ListSubheader from '@material-ui/core/ListSubheader';

const UserListSection  = ({ title, users, fetch }) => {
  const renderUsers = () => (
    users.map(user => (
      <UserListDetails
        title={user.name}
        key={user.name}
        onClick={() => fetch(user)}
      />
    ))
  );

  return (
    <div>
      <ListSubheader>{title}</ListSubheader>
      {renderUsers()}
    </div>
  )
};

export default UserListSection;
