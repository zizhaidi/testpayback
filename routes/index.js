var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/payback', async (req, res) => {
  console.log(req.body);
  return res.send('fail');
})
module.exports = router;
