import React from 'react';

import {connect} from 'react-redux';

import Header from './Header';
import EmployeesList from './EmployeesList/index';

import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import {getEmployees} from '../redux/feature/employees/employees.actions';
import {getTopicData, getTopics} from '../redux/feature/topics/topics.actions';
import TopicView from './TopicView';

const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        position: 'relative',
        display: 'flex',
        direction: 'rtl',
        height: '90vh',
    },
    drawerPaper: {
        position: 'relative',
        width: 280
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0,
        width: '100%',
        overflow:'auto'
    },
});

class Home extends React.Component {
    state = {
        groupName: null,
        selectedTopic: {},
        selectedEmployee: {},
    };

    componentDidMount() {
        const {getEmployees, getTopics} = this.props;
        getEmployees({});
        getTopics({});
    }

    handleTopicClick = ({topic, employee}) => {
        const {getTopicData} = this.props;
        const {identifiers} = employee;
        const {id: topicId} = topic;
        this.setState({
            selectedTopic: {...topic},
            selectedEmployee: employee,
        });
        getTopicData({topicId, identifiers});
    };

    render() {
        const {classes} = this.props;
        const {employees, topics, topicData} = this.props;
        const {selectedTopic, selectedEmployee} = this.state;
        return <div>
            <Header/>

            <div className={classes.root}>
                <Drawer
                    variant="permanent"
                    style={{borderLeft: '1px solid #ECECEC'}}
                    classes={{paper: classes.drawerPaper}}
                >
                    <EmployeesList
                        employees={employees}
                        topics={topics}
                        onTopicClick={this.handleTopicClick}
                    />
                </Drawer>

                <main className={classes.content}>
                    {topicData &&
                    <TopicView topic={selectedTopic} employee={selectedEmployee} topicData={topicData}/>}
                </main>
            </div>


        </div>;
    };
}

const mapStateToProps = ({employees: employeesStore, topics: topicsStore}) => {
    const {employees} = employeesStore;
    const {topics, topicData} = topicsStore;
    return {employees, topics, topicData};
};

export default connect(mapStateToProps, {
    getEmployees,
    getTopics,
    getTopicData,
})(withStyles(styles)(Home));
