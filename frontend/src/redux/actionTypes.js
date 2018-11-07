//******************************
//****       Core           ****
//******************************

//core - API
export const API_REQUEST = 'API_REQUEST';
const apiAction = (action) => ({
  SOURCE: `${action}`,
  API_REQUEST: `${action}.${API_REQUEST}`,
  SUCCESS: `${action}.SUCCESS`,
  ERROR: `${action}.ERROR`,
});

export const SET_ERROR = 'SET_ERROR';

// Auth
export const AUTH = '[AUTH]';
export const LOGOUT_USER = 'LOGOUT_USER';

// Topics
export const TOPICS = '[TOPICS]';
export const GET_TOPICS = apiAction('GET_TOPICS');
export const SET_TOPICS = 'SET_TOPICS';
export const SET_LOAD_TOPICS_ERROR = 'SET_LOAD_TOPICS_ERROR';

export const GET_TOPIC_DATA = apiAction('GET_TOPIC_DATA');
export const SET_TOPIC_DATA = 'SET_TOPIC_DATA';
export const SET_LOAD_TOPIC_DATA_ERROR = 'SET_LOAD_TOPIC_DATA_ERROR';

//EMPLOYEES
export const EMPLOYEES = '[EMPLOYEES]';
export const GET_EMPLOYEES = apiAction('GET_EMPLOYEES');
export const SET_EMPLOYEES = 'SET_EMPLOYEES';

export const SET_LOADER = 'SET_LOADER';


