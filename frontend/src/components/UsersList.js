import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserListSection from './UserListSection';
import { fetchUsers, fetchUserDetails } from '../store/actions';
import List from '@material-ui/core/List';

class UsersList extends Component {
  componentDidMount() {
    // fetch init users list
    this.props.fetchUsers();
  }
  renderUserDetails () {
    const { users, fetchUserDetails } = this.props;
    return Object.keys(users).map(section => (
        <UserListSection
          key={section}
          title={section}
          users={users[section]}
          fetch={fetchUserDetails}
        />
    ));
  }
  render() {
    return (
      <List component="nav">
        {this.renderUserDetails()}
      </List>
    )
  }
}

const mapStateToProps = state => ({
  users: state.usersList
});

export default connect(mapStateToProps, { fetchUsers, fetchUserDetails })(UsersList);
