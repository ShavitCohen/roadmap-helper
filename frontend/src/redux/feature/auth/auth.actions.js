import * as AT from './../../actionTypes';

const { AUTH } = AT;

export const signUpUser = (profile) => {
  return {
    type: `${AUTH} ${AT.SIGNUP_USER.API_REQUEST}`,
    payload: profile,
    meta: {
      feature: AUTH,
      sourceAction: AT.SIGNUP_USER,
      url: 'me/sign-up',
      method: 'POST',
      onSuccess: {
        title: 'toast.signup.title.success',
        text: 'toast.signup.success',
        relationshipType: profile.relationshipType,
      },
      onError: { title: 'toast.title.error', text: 'toast.title.error' },
    },
  };
};

export const authByToken = () => {
  return {
    type: `${AUTH} ${AT.AUTH_BY_TOKEN.API_REQUEST}`,
    meta: {
      sourceAction: AT.AUTH_BY_TOKEN,
      feature: AUTH,
      url: 'auth',
      method: 'GET',
    },
  };
};

export const setUser = ({ user }) => {
  return {
    type: `${AUTH} ${AT.SET_USER}`,
    payload: user,
  };
};

export const userLogOut = () => {
  return {
    type: `${AUTH} ${AT.LOGOUT_USER}`,
    meta: {
      feature: AUTH,
    },
  };
};

