const router = require('express').Router();
const adminController = require('../controllers/adminController/adminLogin');
const userController = require('../controllers/adminController/userController')
const docController = require('../controllers/adminController/docController')

router.post('/signin', adminController.adminLogin);

router.get('/users',userController.getUsers);
router.put('/users/blockStatus/:_id',userController.blockUser)

router.get('/docs',docController.getDocs)
router.put('/doc/blockStatus/:_id',docController.blockDoc)
router.put('/doc/approve/:_id',docController.approve);
router.delete('/doc/:_id',docController.deleteDoc)

module.exports = router;