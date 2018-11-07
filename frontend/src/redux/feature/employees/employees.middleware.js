import * as AT from './../../actionTypes';
import { setEmployees, setError } from './employees.actions';

const { EMPLOYEES } = AT;
export const employeesMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  next(action);

  switch (true) {
    case action.type.includes(`${EMPLOYEES} ${AT.GET_EMPLOYEES.SUCCESS}`): {
      const { data } = action.payload;
      dispatch([
        setEmployees(data),
      ]);
    }
      break;

    case action.type.includes(`${EMPLOYEES} ${AT.GET_EMPLOYEES.ERROR}`): {
      dispatch(setError(true));
    }
      break;

  }
};