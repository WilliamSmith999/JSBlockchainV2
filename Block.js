
const SHA256 = require("crypto-js/sha256");
class Block
{
    constructor(timestamp, Data, previousHash)
	{
        	this.previousHash = previousHash;
        	this.timestamp = timestamp;
        	this.Data = Data;
        	this.hash = this.calculateHash();
		this.nonce = 0;
	}

    calculateHash()
	{
		return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
	}

	mineBlock(diff)
	{
		while(this.hash.substring(0, diff) != Array(diff + 1).join("0"))
		{
			this.nonce++;
			this.hash = this.calculateHash();
		}
	}
}

class Blockchain
{
	constructor()
	{
		this.chain = [this.createGenesisBlock()];
		this.diff = 10;
	}

	createGenesisBlock()
	{
		return new Block(Date.now(), {"BlockName":"Genesis block"}, "0");
	}

	getLatestBlock()
	{
		return this.chain[this.chain.length -1];
	}

	addBlock(newBlock)
	{
	newBlock.previousHash = this.getLatestBlock().hash;
	newBlock.hash = newBlock.calculateHash();
	this.chain.push(newBlock);
	}

	isChainValid()
	{
		for (let i = 1; i < this.chain.length; i++)
		{
			const currentBlock = this.chain[i];
			const previousBlock = this.chain[i - 1];

			if (currentBlock.hash !== currentBlock.calculateHash())
			{

				return false;
			}

			if (currentBlock.previousHash !== previousBlock.hash)
			{
				return false;
			}
		}
	return true;
	}
}

module.exports = {
	Init: function()
	{
		let testchain = new Blockchain();
		testchain.addBlock(new Block(Date.now(), { amount: 4 }, "0"));
		testchain.addBlock(new Block(Date.now(), { amount: 8 }, "0"));
		console.log('Blockchain valid? ' + testchain.isChainValid());
		console.log('\n' + (new Date().toDateString()));
		return testchain;
	},
	Add: function(testchain, data)
	{
		testchain.addBlock(new Block(Date.now(), { data }, "0"));
	},
	Print: function(testchain)
	{
		if(testchain.isChainValid())
		{
			return JSON.stringify(testchain)
		}
		return 0;
	}
};
