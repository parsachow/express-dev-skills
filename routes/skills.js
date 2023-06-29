var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controller/skills')

 // All actual paths start with "/skills"
router.get('/', skillsCtrl.index);

router.get('/new', skillsCtrl.newSkill);

router.get('/:id', skillsCtrl.show);

router.post('/', skillsCtrl.create);

router.delete('/:id', skillsCtrl.deleteOne);


module.exports = router;
