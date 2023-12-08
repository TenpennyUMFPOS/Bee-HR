const router = require('express').Router();
const roleController = require('../controllers/role.controller')
const checkPermission = require('../middlewares/check-permission.middleware');
// checkPermission('PERMISSION_LIST_ROLES'),
router.post('/', checkPermission('PERMISSION_ADD_ROLES'), roleController.createRole);
router.get('/:roleId', checkPermission('PERMISSION_LIST_ROLES'), roleController.findRoleById);
router.get('/', roleController.findAllRole);
router.put('/:roleId', checkPermission('PERMISSION_EDIT_ROLES'), roleController.editRole);
router.delete('/:roleId', checkPermission('PERMISSION_DELETE_ROLES'), roleController.deleteRole);


module.exports = router;