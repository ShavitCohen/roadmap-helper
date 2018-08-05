import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PermContactCalendar from "@material-ui/icons/PermContactCalendar";
import Divider from '@material-ui/core/Divider';

const UserListDetails  = ({ title, onClick }) => (
  <div>
    <ListItem button onClick={onClick}>
      <ListItemText style={{ textAlign: 'right' }} primary={title} />
      <ListItemIcon><PermContactCalendar /></ListItemIcon>
    </ListItem>
    <Divider />
  </div>
);

export default UserListDetails;
