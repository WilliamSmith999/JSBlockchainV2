const publicIp = require('public-ip');
 
publicIp.v4().then(ip => {
    console.log(ip);
    //=> '46.5.21.123'
});
 
publicIp.v6().then(ip => {
    console.log(ip);
    //=> 'fe80::200:f8ff:fe21:67cf'
});

module.exports = {
	whoami: function(){
		publicIp.v4().then(ip => {return ip});
	}
	isorigin: function(){
		publicIp.v4().then(ip => {
			if(!(ip == '18.215.178.82')){
				//ask origin for blockchain
			}
		});
	}
};
