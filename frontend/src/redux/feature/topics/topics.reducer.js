import * as AT from './../../actionTypes';

const { TOPICS } = AT;

export const INIT_STATE = {
  topics: [],
  loadTopicsError: false,
  loadTopicsDataError: false,
  topicData: {},
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case `${TOPICS} ${AT.SET_TOPICS}`:
      return { ...state, topics: action.payload, loadTopicsError: false };

    case `${TOPICS} ${AT.SET_LOAD_TOPICS_ERROR}`:
      return { ...state, loadTopicsDataError: true };

    case `${TOPICS} ${AT.SET_LOAD_TOPIC_DATA_ERROR}`:
      return { ...state, loadTopicsDataError: true };

    case `${TOPICS} ${AT.SET_TOPIC_DATA}`:
      return { ...state, topicData: action.payload };

    default:
      return state;
  }
}
