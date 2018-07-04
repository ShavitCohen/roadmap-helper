const Joi = require('joi');

const get = {
  query: {},
  body: {},
  params: {},
};

const getData = {
  query: {
    identifiers: Joi.array().required(),
  },
};

module.exports = {
  get,
  getData,
};