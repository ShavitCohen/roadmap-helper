const { Router } = require('express');
const validate = require('../../common/validator');

const schema = require('./employees.joi.schema');
const { getEmployees } = require('./employees.controller');
const router = new Router();

router
  .route('/')
  .get(validate(schema.getEmployees), getEmployees);

module.exports = router;