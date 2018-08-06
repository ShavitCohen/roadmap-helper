import axios from 'axios';
import { groupBy } from '../../utils';
import { SET_USERS, FETCH_COMPLETED, FETCH_REQUEST } from '../types';

const API = "http://localhost:3333/api";

/*
 Set init users list
*/
const setUsers = (items) => ({
    type: SET_USERS,
    payload: groupBy(items)
});

/*
 Set selected user roadmap
*/
export const setUserRoadmap = (roadmap) => ({
  type: FETCH_COMPLETED,
  payload: roadmap
});

/*
 Fetch users list
*/
export const fetchUsers = () => {
  return dispatch => {
    axios.get(`${API}/employees`)
      .then(res => res.data)
      .then(res => dispatch(setUsers(res)))
      .catch(er => console.log(er));
  }
};

/*
 Fetch selected user roadmap
*/
export const fetchUserDetails = (user) => {
  return dispatch => {
    dispatch({ type: FETCH_REQUEST });
    axios.get(`${API}/employees/data`, {
      params: { identifiers: user.identifiers }
    })
      .then(res => res.data)
      .then(res => dispatch(setUserRoadmap(res)))
      .catch(er => console.log(er));
  }
};
