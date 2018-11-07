import { replace } from 'react-router-redux';
import store from 'store';
import * as AT from './../../actionTypes';
import { setLoadTopicsError, setTopics } from './topics.actions';

const { TOPICS } = AT;

const { AUTH } = AT;
export const topicsMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  next(action);

  switch (true) {
    case action.type.includes(`${TOPICS} ${AT.GET_TOPICS.SUCCESS}`): {
      const { data } = action.payload;
      dispatch(setTopics(data));
    }
      break;

    case action.type.includes(`${TOPICS} ${AT.GET_TOPICS.ERROR}`): {
      dispatch(setLoadTopicsError(true));
    }
      break;

    case action.type.includes(`${TOPICS} ${AT.GET_TOPIC_DATA.SUCCESS}`): {

    }
      break;

    case action.type.includes(`${TOPICS} ${AT.GET_TOPIC_DATA.ERROR}`): {

    }
      break;

  }
};