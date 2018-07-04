const { Router } = require('express');
const validate = require('../../common/validator');

const router = new Router();
const schema = require('./employees.joi.schema');
const { getEmployees, getData } = require('./employees.controller');
router
  .route('/')
  .get(validate(schema.get), getEmployees);

router
  .route('/data')
  .get(validate(schema.getData), getData);

module.exports = router;