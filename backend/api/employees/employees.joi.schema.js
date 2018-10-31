const Joi = require('joi');

const get = {
  params: {
    groupName: Joi.string().required(),
  },
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