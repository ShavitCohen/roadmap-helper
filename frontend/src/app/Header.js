import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const styles = {
  toolbar: {
    backgroundColor: '#fe885f',
    direction: 'rtl'
  },
  font: {
    color: '#ffffff',
  }
};

const Header = () => (
  <AppBar position="static">
    <Toolbar style={styles.toolbar}>
      <Typography variant="title" color="inherit" style={styles.font}>
         Octopus - All sss about Tikal
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Header);
