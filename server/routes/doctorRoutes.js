const router = require('express').Router();
const doctorController = require('../controllers/doctorController/doctorSignin');
const docProfile = require('../controllers/doctorController/doctorProfile')
const verifyToken = require('../middlewares/managerAuth')


router.post('/signin', doctorController.signin);
router.post('/completeprofile',verifyToken,docProfile.completeprofile)

module.exports = router;