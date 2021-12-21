let express = require('express');

let router = express.Router();


let userController = require('./controllers/userController');

//list des routes vers les contrôlleurs


router.get('/', userController.List);

router.get('/user/add', userController.userFormAdd);

router.post('/user', userController.userNew);

module.exports = router;