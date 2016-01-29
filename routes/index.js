
var express = require('express'),
router = express.Router(),
bodyParser = require('body-parser'), //parses information from POST
methodOverride = require('method-override'); //used to manipulate POST

var base64 = require('node-base64-image');




/* GET home page. */
router.get('/', function(req, res, next) {
	var options = {string: true};
	base64.base64encoder('http://noderos.com/content/images/2015/07/nodejs2-1.png', options, function (err, image) {
	    if (err) {
	        console.log(err);
	    }
	   // console.log(image);
	    res.render('index', { title: 'Express' ,img:image});
	});
  
});

module.exports = router;
