const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const _ = require('lodash');

const { auth0: { domain } } = require('../serverConfig');

const checkJwt = jwt({
  // Dynamically provide a signing key based on the kid in the header and the singing keys provided by the JWKS endpoint
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${domain}/.well-known/jwks.json`,
  }),
  algorithms: ['RS256'],
});

const tokenToUserMW = (req, res, next) => {

  return checkJwt(req, res, () => {
    if (!req.user) {
      return res.status(401).json({ message: 'Not Authorized' });
    }

    const auth = {
      user_id: _.get(req, 'user.sub'),
      email: _.get(req, 'user.email'),
    };
    req.auth = { ...auth, ...req.user['https://octopus.com/user_metadata'] };
    return next();
  });
};

module.exports = {
  tokenToUserMW,
};