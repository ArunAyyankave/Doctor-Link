const router = require('express').Router();
const doctorController = require('../controllers/doctorController/doctorSignin');
const docProfile = require('../controllers/doctorController/doctorProfile')

router.post('/signin', doctorController.signin);
router.post('/completeprofile/:_id',docProfile.completeprofile)

module.exports = router;