const { Router } = require('express');
const validate = require('../../common/validator');

const router = new Router();
const schema = require('./employees.joi.schema');
const { getEmployees, getData } = require('./employees.controller');

// e.g: http://localhost:3333/api/employees
router
  .route('/')
  .get(validate(schema.get), getEmployees);

// e.g: http://localhost:3333/api/employees/data?identifiers[]=Shavit Cohen&identifiers[]=שביט כהן&identifiers[]=shavit@tikalk.com&identifiers[]=shavit cohen
router
  .route('/data')
  .get(validate(schema.getData), getData);

module.exports = router;