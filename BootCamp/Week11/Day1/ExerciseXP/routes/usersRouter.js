const {Router} = require('express');

const usersController = require('../controllers/usersController.js');

const { verifyToken } = require('../middleware/verifyToken.js');

const router = Router();

router.post('/register', usersController.registerUser);
router.post('/login', usersController.loginUser);
router.get('/all', verifyToken, usersController.getUsers);
router.delete('/logout', usersController.logoutUser)
router.get('/auth', verifyToken, usersController.verifyAuth);
router.post('/refresh', usersController.refreshToken);

module.exports = router;