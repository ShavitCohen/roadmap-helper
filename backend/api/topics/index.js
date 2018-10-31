const { Router } = require('express');
const validate = require('../../common/validator');

const schema = require('./topics.joi.schema');
const { getTopics } = require('./topics.controller');
const router = new Router();

router
  .route('/')
  .get(validate(schema.getTopics), getTopics);

module.exports = router;