var express = require('express');
var router = express.Router();
var data = require('../data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*GET test*/
router.get('/test', function(req, res, next){
	res.send('test passed');
});

router.post('/add', function(req, res, next){
	var dataFrom = req.body.data;
	data.Add(dataFrom);
	res.redirect('/Print');
});

router.get('/addItem', function(req, res, next){
        res.render('addBlockPage', { title: data });
});

router.get('/Print', function(req, res, next){
	res.render('print', {body: JSON.stringify(data.GetChain())});
});

module.exports = router;
