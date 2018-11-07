import React, { Component } from 'react';
import { groupBy } from 'lodash';
import EmployeesListSection from './EmployeesListSection';

import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

class EmployeesList extends Component {
  state = { search: '' };

  handleChange = event => {
    this.setState({
      search: event.target.value,
    });
  };

  renderEmployeesDetails(employees, topics) {
    const groups = groupBy(employees, 'group');
    const { onTopicClick } = this.props;
    return Object.keys(groups).map(groupName => (
      <EmployeesListSection
        key={groupName}
        title={groupName}
        search={this.state.search}
        employees={groups[groupName]}
        topics={topics}
        onTopicClick={onTopicClick}
      />
    ));
  }

  render() {
    const { employees, topics } = this.props;
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
        {this.renderEmployeesDetails(employees, topics)}
      </List>
    );
  }
}

export default EmployeesList;
