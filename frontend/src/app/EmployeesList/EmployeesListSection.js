import React from 'react';
import EmployeeListItem from './EmployeeListItem';
import ListSubheader from '@material-ui/core/ListSubheader';

class EmployeesListSection extends React.Component {

  state = {
    selectedEmployee: '',
  };

  setSelectedEmployee = employee => {
    const { selectedEmployee } = this.state;
    this.setState({
      selectedEmployee: selectedEmployee.name === employee.name ? {} : employee,
    });
  };

  onSelectedTopic = (topic) => {
    const { onTopicClick } = this.props;
    const { selectedEmployee: employee } = this.state;
    onTopicClick({ topic, employee });
  };

  renderEmployees = ({ employees, search, selectedEmployee, topics }) => (
    employees
      .filter(user => search == '' || user.name.includes(search))
      .map(employee => (
        <EmployeeListItem
          employee={employee}
          key={employee.name}
          isSelected={employee.name === selectedEmployee.name}
          onExpand={this.setSelectedEmployee}
          topics={topics}
          onSelectedTopic={this.onSelectedTopic}
        />
      ))
  );

  render() {
    const { title, employees, search, topics } = this.props;
    const { selectedEmployee } = this.state;
    return <div>
      <ListSubheader>{title}</ListSubheader>
      {this.renderEmployees({ employees, search, selectedEmployee, topics })}
    </div>;
  }

}

export default EmployeesListSection;
