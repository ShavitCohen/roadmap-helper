import React from 'react';
import { connect } from 'react-redux';
import UserCard from './UserCard';

import LinearProgress from '@material-ui/core/LinearProgress';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const SelectedUser = ({ roadmap }) => {
  const { selected, isFetching } = roadmap;
  const renderCards = () => (
    selected.map(item => (
      <UserCard key={item.title} item={item} />
    ))
  );

  if ( roadmap.isFetching ) return <LinearProgress color="primary" />;
  return (
    <div>
      {renderCards()}
    </div>
  )
}

const mapStateToProps = state => ({
  roadmap: state.userRoadmap
});

export default connect(mapStateToProps)(SelectedUser);
