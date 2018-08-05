import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserListDetails from './UserListDetails';
import { fetchUsers, fetchUserDetails } from '../store/actions';
import List from '@material-ui/core/List';

class UsersList extends Component {
  componentDidMount() {
    // fetch init users list
    this.props.fetchUsers();
  }
  renderUserDetails () {
    const { users, fetchUserDetails } = this.props;
    return users.map(user => (
      <UserListDetails
        title={user.name}
        key={user.name}
        onClick={() => fetchUserDetails(user)}
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
