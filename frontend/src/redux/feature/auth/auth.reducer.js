import * as AT from './../../actionTypes';
import store from 'store';

const { AUTH } = AT;

export const INIT_STATE = {
  token: store.get('token'),
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case `${AUTH} ${AT.LOGOUT_USER}`:
      return { ...INIT_STATE };

    default:
      return state;
  }
}
