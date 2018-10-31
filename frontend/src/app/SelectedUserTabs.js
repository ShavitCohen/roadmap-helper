import React, { PureComponent } from 'react';

import SelectedUserTab from './SelectedUserTab';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default class SelectedUserTabs extends PureComponent {
  state = { activeTab: 0 }
  handleChange = (event, activeTab) => {
    this.setState({ activeTab });
  };
  render () {
    const { activeTab } = this.state;
    const { tabs } = this.props;
    const renderTabs = () => (
      tabs.map(tab => (
          <Tab key={tab.title} label={tab.title} />
      ))
    );
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
          {renderTabs()}
        </Tabs>

        <Typography component="div" style={{ padding: 20 }}>
          <SelectedUserTab item={tabs[activeTab]} />
        </Typography>
      </div>
    )
  }
}
