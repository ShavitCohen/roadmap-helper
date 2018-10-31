import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserListSection from './UserListSection';
/*import { fetchUsers, fetchUserDetails } from '../store/actions';*/
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

class UsersList extends Component {
  state = { search: '' };

  componentDidMount() {
    // fetch init users list
    const { groupName } = this.props;
    this.props.fetchUsers();
  }

  handleChange = event => {
    this.setState({
      search: event.target.value,
    });
  };

  renderUserDetails() {
    const { users, fetchUserDetails } = this.props;
    return Object.keys(users).map(section => (
      <UserListSection
        key={section}
        title={section}
        search={this.state.search}
        users={users[section]}
        fetch={fetchUserDetails}
      />
    ));
  }

  render() {
    return (
      <List component="nav">
        <TextField
          id="name"
          placeholder="חיפוש"
          value={this.state.search}
          onChange={this.handleChange}
          style={{ margin: '0 30px 10px', paddingBottom: '16px' }}
        />
        <Divider />
        {this.renderUserDetails()}
      </List>
    );
  }
}

const mapStateToProps = state => ({
  users: state.usersList,
});

export default connect(mapStateToProps, {})(UsersList);
