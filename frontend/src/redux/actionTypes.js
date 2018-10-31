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

export const LOGOUT_USER = 'LOGOUT_USER';
