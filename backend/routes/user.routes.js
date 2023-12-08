const router = require('express').Router();
const userController = require('../controllers/user.controller');
const checkPermission = require('../middlewares/check-permission.middleware');
const isAuthenticated = require('../middlewares/is-authenticated.middleware');

router.post('/', checkPermission('PERMISSION_ADD_USERS'), userController.createUser);
router.get('/:userId', checkPermission('PERMISSION_LIST_USERS'), userController.findUserById);
router.get('/', checkPermission('PERMISSION_LIST_USERS'), userController.findAllUsers);
router.put('/:userId', checkPermission('PERMISSION_EDIT_USERS'), userController.editUser);
router.delete('/:userId', checkPermission('PERMISSION_DELETE_USERS'), userController.deleteUser);


module.exports = router;