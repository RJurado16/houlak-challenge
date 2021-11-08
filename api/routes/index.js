const { Router } = require('express');
const controllers = require('../controllers/index')

const router = Router();

router.get('/', controllers.getArtistAlbums);

module.exports = router;