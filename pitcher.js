const test;
var rp = require('request-promise');

var options = {
    method: 'POST',
    uri: 'ec2-34-229-116-79.compute-1.amazonaws.com/catcher',
    body: {
        some: 'payload'
    },
    json: true // Automatically stringifies the body to JSON
};


module.exports = {
	passit: function{
		rp(options).then(function (parsedBody) {
        	console.out("pass made");
    		}).catch(function (err) {
        	console.out("Pass failed");
    		});
	}
};
