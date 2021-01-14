const Web3 = require('web3');

const fs = require('fs');
let rawdata = fs.readFileSync('./data.json');
let cfg = JSON.parse(rawdata);

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider(cfg.infura_project));
}

async function c() {
    let balanceWei = await web3.eth.getBalance(cfg.account_address)
    console.log(balanceWei)
}

c();
