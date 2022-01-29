require('@nomiclabs/hardhat-waffle');

module.exports = {
    solidity: '0.8.0',
    networks: {
        ropsten: {
            url: 'https://eth-ropsten.alchemyapi.io/v2/cNSJ9l_UCwf2ctaaijLXe8x6asFU7Jy2',
            accounts: [ 'aa972d931e5c8c780d044f91f551b58e02147d8f3d0659a0aded66a1e960defb']
        },
    },
};