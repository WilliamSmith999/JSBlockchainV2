var rp = require('request-promise');

var options = {
    method: 'POST',
    uri: 'http://ec2-18-212-105-175.compute-1.amazonaws.com/catcher',
    body: {
        some: 'payload'
    },
    json: true // Automatically stringifies the body to JSON
};


module.exports = {
	passit: function(){
		rp(options).then(function (parsedBody) {
        	console.log("pass made");
    		}).catch(function (err) {
        	console.log("Pass failed");
    		});
	}
};
