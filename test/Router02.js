const { assert } = require("chai");

const UniswapV2Router02 = artifacts.require('UniswapV2Router02')

contract('UniswapV2Router02', () => {
    it('should deploy smart contract properly', async () => {
        const uniswapV2Router02 = await UniswapV2Router02.deployed();
        console.log(uniswapV2Router02.address);
        assert(uniswapV2Router02.address !== '');
    })

    it('Should return factory address', async () => {
        const uniswapV2Router02 = await UniswapV2Router02.deployed();
        const result = await uniswapV2Router02.getFactoryAddress();
        console.log(result);
        assert(result === '0x0032CaE5Dfe674F6CDCe6413e63A7e45009A50fF');
    })
})