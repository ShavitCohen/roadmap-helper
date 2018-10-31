const { Router } = require('express');
const validate = require('../../common/validator');

const schema = require('./employees.joi.schema');
const { getEmployees, getData } = require('./employees.controller');
const router = new Router();

// e.g: http://localhost:3333/api/employees/data?identifiers[]=Shavit Cohen&identifiers[]=שביט כהן&identifiers[]=shavit@tikalk.com&identifiers[]=shavit cohen
router
  .route('/data')
  .get(validate(schema.getData), getData);

// e.g: http://localhost:3333/api/employees
router
  .route('/:groupName')
  .get(validate(schema.get), getEmployees);

module.exports = router;