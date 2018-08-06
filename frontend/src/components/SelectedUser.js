import React from 'react';
import { connect } from 'react-redux';
import SelectedUserTabs from './SelectedUserTabs';

import LinearProgress from '@material-ui/core/LinearProgress';

const SelectedUser = ({ roadmap }) => {
  const { selected, isFetching } = roadmap;

  // handling loading/empty users list
  if ( roadmap.isFetching ) return <LinearProgress color="primary" />;
  else if ( !roadmap.selected.length ) return <div>בחר מהרשימה בתפריט</div>;

  return (
    <div>
      <SelectedUserTabs tabs={selected} />
    </div>
  )
}

const mapStateToProps = state => ({
  roadmap: state.userRoadmap
});

export default connect(mapStateToProps)(SelectedUser);
