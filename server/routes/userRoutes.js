const router = require('express').Router();
const userController = require('../controllers/userController/userSignin&Signup');
const docController = require('../controllers/userController/docController')

router.post('/signup',userController.userSignup)
router.post('/signin',userController.userSignin)
router.post('/mobileExist',userController.mobileExist)
router.get('/getUser',userController.getUser)
router.get('/forgotPwd/mobileExist',userController.MobileExistForForgot)
router.post('/forgotPwd',userController.newPassSet)

router.post('/docMobile',docController.mobileExist)
router.post('/docSignup',docController.docSignup)

router.get('/getDoctors',docController.getDoctors)

module.exports = router;