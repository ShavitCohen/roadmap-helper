import React from 'react';

import {
  ListItem,
  ListItemText,
  ListItemIcon,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  List,
} from '@material-ui/core';

import { PermContactCalendar, ExpandMore } from '@material-ui/icons';
import Divider from '@material-ui/core/Divider';

const _renderSubItems = (topics, onSelectedTopic) => topics.map((topic) =>
  <ListItem button onClick={() => onSelectedTopic(topic)} key={topic.id}>
    <ListItemText style={{ textAlign: 'right' }} primary={topic.title} />
    <ListItemIcon><PermContactCalendar /></ListItemIcon>
  </ListItem>);

const EmployeeListItem = ({ employee, isSelected, onSelectedTopic, onExpand, topics }) => {
  return (
    <div>
      <ExpansionPanel expanded={isSelected} onChange={() => onExpand(employee)}>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <div style={{ marginRight: 5 }}>{employee.name}</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List>
            {isSelected && _renderSubItems(topics, onSelectedTopic)}
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <Divider />
    </div>);
};

export default EmployeeListItem;
