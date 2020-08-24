require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict industry flame street name random noise equip good kangaroo army gauge'; 
let testAccounts = [
"0xb25519974f84a87236e452dca67073c063090d6a6a1e303acfb4ef650dc050c7",
"0x7a2375ea7006c36909c91432aaed988ae59ecd4b07d6be37fad177fe2aa63db5",
"0x60fa6a60a248d85e1da8cfc03cb9ee88c1937f378a72efe9244271016f29a75d",
"0x119492a809a9f8e388cbca278d1a5b1523f2198ceb84227d276d1f5c090ee949",
"0xc61922085fbd11f94df17608693c850490c12ff11f472188c4dfeea54f5f385a",
"0xcc6ac170001847fc1b84a80c6627560b048fa545269e5faa7bbdeb31e1fc2884",
"0xf5a02162c9be41183fbd84089f77b81796f86e27a2d5dc7d6d61dd385e38fc8b",
"0x70dadd48e6bd535d377f9a58fdd7358c175e7e66794797d1cc11ac29b5c07136",
"0xfed36083f3d0dd81b3a619145cdfdab294a984f638c4f3e5b741e64d01172daa",
"0xd6857cafe036fea141263bafaee08576ce8ed83174a7a6a8258ecc2c89d4a593"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
