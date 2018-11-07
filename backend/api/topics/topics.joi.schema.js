const Joi = require('joi');

const getTopics = {
  params: {},
  query: {},
  body: {},
};

const getTopicData = {
  params: {
    topicId: Joi.string().required(),
  },
  query: {
    identifiers: Joi.array().required(),
  },
};

module.exports = {
  getTopics,
  getTopicData,
};