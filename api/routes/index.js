const { Router } = require('express');
const controllers = require('../controllers/index')

const router = Router();

router.get('/', controllers.testingConnection);

module.exports = router;