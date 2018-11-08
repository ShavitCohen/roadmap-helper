import React from 'react';

import {
    ListItem, ListItemText, ListItemIcon,
    ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails,
    ListItemSecondaryAction, List,
} from '@material-ui/core';

import {ThumbUpAlt, ExpandMore} from '@material-ui/icons';
import Divider from '@material-ui/core/Divider';

const _renderSubItems = (topics, onSelectedTopic, selectedTopic) => topics.map((topic) => {
    const isSelected = selectedTopic === topic.id;
    return <ListItem
        button onClick={() => onSelectedTopic(topic)} key={topic.id}
    >
        <ListItemText
            style={{textAlign: 'right', fontWeight: isSelected && 'bold'}} primary={topic.title}
        />
        {isSelected &&
        <ListItemSecondaryAction><ListItemIcon><ThumbUpAlt/></ListItemIcon></ListItemSecondaryAction>}
    </ListItem>;
});

class EmployeeListItem extends React.Component {
    state = {
        selectedTopic: '',
    };

    onSelectedItem = (topic) => {
        const {onSelectedTopic} = this.props;
        this.setState({selectedTopic: topic.id});
        onSelectedTopic(topic);
    };

    onExpand = (employee) => {
        const {onExpand, topics} = this.props;
        onExpand(employee);
        this.onSelectedItem(topics[0]);
    }

    render() {
        const {employee, isSelected, topics} = this.props;
        const {selectedTopic} = this.state;
        return <div>
            <ExpansionPanel expanded={isSelected} onChange={() => this.onExpand(employee)}>
                <ExpansionPanelSummary expandIcon={<ExpandMore/>}>
                    <div style={{marginRight: 5}}>{employee.name}</div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <List style={{minHeight: 200}}>
                        {isSelected && _renderSubItems(topics, this.onSelectedItem, selectedTopic)}
                    </List>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <Divider/>
        </div>;
    }
};

export default EmployeeListItem;
