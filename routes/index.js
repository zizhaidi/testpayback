var express = require('express');
var router = express.Router();
var multer = require('multer');
const callbackUpload = multer();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/payback', callbackUpload.array(), async (req, res) => {
  console.log(req.body);
  return res.send('fail');
})
module.exports = router;
