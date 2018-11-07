const { Auth0Lock } = window;
import config from './../config';

const { auth0: { domain, clientId }, clientURL } = config;

export const loginLock = container => new Auth0Lock(clientId, domain, {
  container,
  auth: {
    redirectUrl: `${clientURL}/callback.html`,    // If not specified, defaults to the current page
    responseType: 'token id_token',
    params: {
      scope: 'openid email user_metadata app_metadata picture',                // Learn about scopes: https://auth0.com/docs/scopes
    },
  },
  language: 'en',
  disableSignupAction: true,

});
