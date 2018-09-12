var blocks = require('./Block');
var chain;


module.exports =
{
	SetChain: function(chain)
	{
		this.chain = chain;
	},
	GetChain: function()
	{
		return this.chain;
	},
	Add: function(data)
	{
		blocks.Add(this.chain, data);
	}
};
