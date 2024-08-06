
// this scrpt handles exicution of Script.



const Blockchain = require('./blockchain');

// start/Initialize the blockchain
const myBlockchain = new Blockchain();

// here this func add a new block
function addBlock(data) {
    const newBlock = new Blockchain().createGenesisBlock(); // first block which used for starting the blockchain.
    newBlock.index = myBlockchain.chain.length;
    newBlock.timestamp = new Date().toISOString();
    newBlock.data = data;
    newBlock.previousHash = myBlockchain.getLatestBlock().hash;
    myBlockchain.addBlock(newBlock);
}

// using this Function to validate the blockchain
function validateBlockchain() {
    if (myBlockchain.isChainValid()) {
        console.log("Blockchain is valid.");
    } else {
        console.log("Blockchain is invalid.");
    }
}

// Function to query the blockchain
function queryBlockchain() {
    console.log(JSON.stringify(myBlockchain, null, 4));
}

// start/Initialize the blockchain with genesis block
console.log("Initializing blockchain...");
queryBlockchain();

//thi will add new blocks
console.log("Adding new blocks...");
addBlock({ amount: 100 , Added_By: 'sandy'});
addBlock({ amount: 50 , Added_By: 'rom'});
addBlock({ amount: 800, Added_By: 'david' });
addBlock({ amount: 200, Added_By: 'pramod' });
addBlock({ amount: 300, Added_By: 'ram' });
addBlock({ amount: 2300, Added_By: 'jason' });

// Validate the blockchain
console.log("Validating a blockchain...");
validateBlockchain();

// Query the blockchain
console.log("Querying a blockchain...");
queryBlockchain();
