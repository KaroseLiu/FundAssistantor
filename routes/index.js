var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/fa', function(req,res, next){

  request('http://fund.eastmoney.com/data/funddataforgznew.aspx?t=basewap&fc=163114',function(err, resp){
  	console.log(resp.body);
   res.jsonp(resp.body);
  })


})

module.exports = router;
