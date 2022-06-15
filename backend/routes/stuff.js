const express=require('express');
const router = express.Router();
const Thing = require('../models/thing');
const stuffControler = require('../controler/stuff')
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');




router.post('/',auth,multer,stuffControler.createThing);

router.get('/:id',auth,stuffControler.viewOneThing);

router.put('/:id',auth,multer,stuffControler.modifyOneThing)

router.delete('/:id',auth,stuffControler.deleteOneThing)

router.get('/',auth,stuffControler.viewEveryThings);


module.exports = router