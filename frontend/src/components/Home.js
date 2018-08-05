import React from 'react';

import Header from './Header';
import SelectedUser from './SelectedUser';
import UsersList from './UsersList';

import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    direction: "rtl"
  },
  drawerPaper: {
    position: "relative",
    width: 240
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0
  }
});

const Home = ({ classes }) => (
  <div>
    <Header />

    <div className={classes.root}>
      <Drawer
        variant="permanent"
        style={{ borderLeft: "1px solid #ECECEC" }}
        classes={{ paper: classes.drawerPaper }}
      >
        <UsersList />
      </Drawer>

      <main className={classes.content}>
        <SelectedUser />
      </main>
    </div>
  </div>
)

export default withStyles(styles)(Home);