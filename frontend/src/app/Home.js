import React from 'react';

import { connect } from 'react-redux';

import Header from './Header';
import SelectedUser from './SelectedUser';
import EmployeesList from './EmployeesList/index';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { getEmployees } from '../redux/feature/employees/employees.actions';
import { getTopics } from '../redux/feature/topics/topics.actions';

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    direction: 'rtl',
  },
  drawerPaper: {
    position: 'relative',
    width: 240,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0,
  },
});

class Home extends React.Component {
  state = {
    groupName: null,
  };

  componentDidMount() {
    const { getEmployees, getTopics } = this.props;
    getEmployees({});
    getTopics({});
  }

  handleTopicClick = ({ topic, employee }) => {
    console.log(topic, employee);
  };

  render() {
    const { classes } = this.props;
    const { employees, topics, topicData } = this.props;
    return <div>
      <Header />

      <div className={classes.root}>
        <Drawer
          variant="permanent"
          style={{ borderLeft: '1px solid #ECECEC' }}
          classes={{ paper: classes.drawerPaper }}
        >
          <EmployeesList
            employees={employees}
            topics={topics}
            onTopicClick={this.handleTopicClick}
          />
        </Drawer>

        <main className={classes.content}>
          {/*<SelectedUser />*/}
        </main>
      </div>


    </div>;
  };
}

const mapStateToProps = ({ employees: employeesStore, topics: topicsStore }) => {
  const { employees } = employeesStore;
  const { topics, topicData } = topicsStore;
  return { employees, topics, topicData };
};

export default connect(mapStateToProps, {
  getEmployees,
  getTopics,
})(withStyles(styles)(Home));
