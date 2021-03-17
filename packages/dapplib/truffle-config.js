require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace casual flee seed edge rare remind concert grace infant fresh tourist'; 
let testAccounts = [
"0xbe640cae3752115f641891a1116373d6df40f7826dcc562f1ed4e04a837964a0",
"0xfb1ab6b0f1e902bda0c9f6f4bff2f8851da31570753aed2d134e38bfe325dbd5",
"0x6413532f4c8586433b10cccae6b141ee31c89c7c29315461d2ee87527e10220d",
"0xc96e4432e0b44649d08abbb73f5f9cb7d99f9a00d73ed392aa41053247c93623",
"0x141328f8de3124086b03c35614c6a02144ccaed0c1253d4e0730897544518905",
"0x237a7f2258c1d40f88596ec7bd3153fbefbd4dd5e6af0689c2dc1fe82cb66a40",
"0xee010203d534b15acb225f23a6e3acc53cfe2ea0266c020786d9939fde8ca3ff",
"0xc223645c6a7a9ffb3d145a933d65f816777685bd811f827c8cc5027ce7e7f770",
"0xccd29436d913209ef8871901fedc222da33270e1b6743354bafa97878f1bfed4",
"0x5d7a72650a6d98fb8a445222c4e0abcd3bd3a2f2cf65b918d6790637731898e9"
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
