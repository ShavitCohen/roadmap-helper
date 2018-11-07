import * as AT from './../../actionTypes';

const { EMPLOYEES } = AT;

export const getEmployees = ({ force = false }) => {
  return {
    type: `${EMPLOYEES} ${AT.GET_EMPLOYEES.API_REQUEST}`,
    payload: {},
    meta: {
      feature: EMPLOYEES,
      sourceAction: AT.GET_EMPLOYEES,
      url: 'api/employees',
      method: 'GET',
      force,
    },
  };
};

export const setEmployees = (employees) => {
  return {
    type: `${EMPLOYEES} ${AT.SET_EMPLOYEES}`,
    payload: employees,
  };
};

export const setError = (state) => {
  return {
    type: `${EMPLOYEES} ${AT.SET_ERROR}`,
    payload: state,
  };
};




