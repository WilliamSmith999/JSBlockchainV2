const test;
var rp = require('request-promise');

var options = {
    method: 'POST',
    uri: 'http://api.posttestserver.com/post',
    body: {
        some: 'payload'
    },
    json: true // Automatically stringifies the body to JSON
};


module.exports = {
	passit: function{
		rp(options).then(function (parsedBody) {
        	counsole.out("pass made");
    		}).catch(function (err) {
        	counsole.out("Pass failed");
    		});
	}
};
