const { Router } = require('express');
const employees = require('./employees');
const topics = require('./topics');
const router = new Router();

router.use('/employees', employees);
router.use('/topics', topics);

module.exports = router;
