import React, { PureComponent } from 'react';

import SelectedUserTab from './SelectedUserTab';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 20 }}>
      {props.children}
    </Typography>
  );
}

export default class SelectedUserTabs extends PureComponent {
  state = { activeTab: 0 }
  handleChange = (event, activeTab) => {
    this.setState({ activeTab });
  };
  render () {
    const { activeTab } = this.state;
    const { tabs } = this.props;
    console.log(tabs[activeTab]);
    return (
      <div>
      <Tabs
        value={activeTab}
        onChange={this.handleChange}
        indicatorColor="primary"
        textColor="primary"
        scrollable
        scrollButtons="auto"
        >
        {tabs.map(tab => (
            <Tab key={tab.title} label={tab.title} />
        ))}
        </Tabs>

        <TabContainer>
          <SelectedUserTab item={tabs[activeTab]} />
        </TabContainer>
      </div>
    )
  }
}
