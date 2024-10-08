/*
 * Copyright 2021, Offchain Labs, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-env node */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetNetworksToDefault = exports.addDefaultLocalNetwork = exports.addCustomNetwork = exports.getEthBridgeInformation = exports.getL2Network = exports.getL1Network = exports.getNetwork = exports.l2Networks = exports.l1Networks = exports.getParentForNetwork = exports.isL1Network = exports.networks = void 0;
const signerOrProvider_1 = require("./signerOrProvider");
const errors_1 = require("../dataEntities/errors");
const constants_1 = require("./constants");
const RollupAdminLogic__factory_1 = require("../abi/factories/RollupAdminLogic__factory");
const mainnetTokenBridge = {
    l1GatewayRouter: '0x72Ce9c846789fdB6fC1f34aC4AD25Dd9ef7031ef',
    l2GatewayRouter: '0x5288c571Fd7aD117beA99bF60FE0846C4E84F933',
    l1ERC20Gateway: '0xa3A7B6F88361F48403514059F1F16C8E78d60EeC',
    l2ERC20Gateway: '0x09e9222E96E7B4AE2a407B98d48e330053351EEe',
    l1CustomGateway: '0xcEe284F754E854890e311e3280b767F80797180d',
    l2CustomGateway: '0x096760F208390250649E3e8763348E783AEF5562',
    l1WethGateway: '0xd92023E9d9911199a6711321D1277285e6d4e2db',
    l2WethGateway: '0x6c411aD3E74De3E7Bd422b94A27770f5B86C623B',
    l2Weth: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    l1Weth: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    l1ProxyAdmin: '0x9aD46fac0Cf7f790E5be05A0F15223935A0c0aDa',
    l2ProxyAdmin: '0xd570aCE65C43af47101fC6250FD6fC63D1c22a86',
    l1MultiCall: '0x5ba1e12693dc8f9c48aad8770482f4739beed696',
    l2Multicall: '0x842eC2c7D803033Edf55E478F461FC547Bc54EB2',
};
const mainnetETHBridge = {
    bridge: '0x8315177aB297bA92A06054cE80a67Ed4DBd7ed3a',
    inbox: '0x4Dbd4fc535Ac27206064B68FfCf827b0A60BAB3f',
    sequencerInbox: '0x1c479675ad559DC151F6Ec7ed3FbF8ceE79582B6',
    outbox: '0x0B9857ae2D4A3DBe74ffE1d7DF045bb7F96E4840',
    rollup: '0x5eF0D09d1E6204141B4d37530808eD19f60FBa35',
    classicOutboxes: {
        '0x667e23ABd27E623c11d4CC00ca3EC4d0bD63337a': 0,
        '0x760723CD2e632826c38Fef8CD438A4CC7E7E1A40': 30,
    },
};
/**
 * Storage for all networks, either L1, L2 or L3.
 */
exports.networks = {
    1: {
        chainID: 1,
        name: 'Mainnet',
        explorerUrl: 'https://etherscan.io',
        partnerChainIDs: [42161, 42170],
        blockTime: 14,
        isCustom: false,
        isArbitrum: false,
    },

    84532: {
        chainID: 84532,
        name: 'Base Sepolia',
        explorerUrl: `${process.env.NEXT_PUBLIC_BASE_SEPOLIA_EXPLORER}`,
        partnerChainIDs: [5918836757],
        blockTime: 12,
        isCustom: false,
        isArbitrum: false,
    },
    5918836757: {
        chainID: 5918836757,
        confirmPeriodBlocks: 20,
        ethBridge: {
            bridge: '0xC06f9abbc5Aa7B746b1E6473FF3b153789D1e7E7',
            inbox: '0x6EaDDF737e5596e9548783207d62f8AA70b44c64',
            outbox: '0xe56DBA887A29E5B1f0af8430e09bA4e1AE50aEb6',
            rollup: '0x637677A8120ABdcdF06B0706AB1E8201d433A799',
            sequencerInbox: '0xCe4DA52c9dD9BBe5d3e13Ee72BcBe38EbF521574',
        },
        explorerUrl: `${process.env.NEXT_PUBLIC_NEXUS_ORBIT_EXPLORER_URL}`,
        isArbitrum: true,
        isCustom: true,
        name: 'Complare chain',
        partnerChainID: 84532,
        partnerChainIDs: [84532],
        retryableLifetimeSeconds: constants_1.SEVEN_DAYS_IN_SECONDS,
        tokenBridge: {
            l1CustomGateway: '0xee6714063aBd05D295380a8fB21135f305dE2404',
            l1ERC20Gateway: '0x5DA248A5e1FB3523F6A305f0D34F8f40fA7e8C8D', // standard gatway
            l1GatewayRouter: '0x9650FAe0125BdD92626786Dc1dfC6554a01c9e26', // router
            l1MultiCall: '0xE0753Df74d86D6B25aCd2d049389c7E52e2dd728',
            l1ProxyAdmin: '0x7Af2E75678E4B6f82EFCF573f7B32e65bA77489E', // adminProxy 
            l1Weth: '0x1BDD24840e119DC2602dCC587Dd182812427A5Cc',
            l1WethGateway: '0x3D1AF9bce5F1597a3A925cEB7725a4DBcb0eB4C1',
            l2CustomGateway: '0x8BE2B72ddAceC8957f1f1C8c28093BCF3d85Dc6f',
            l2ERC20Gateway: '0xd539cb65D8848782A285333e584E4b8dA02ac945', // standard
            l2GatewayRouter: '0x401Dc22876ff8Bc1837857c698D98Dd88991F1eB',
            l2Multicall: '0x0C97cBE5bF9D153b5FdA807187452861D61fD52f',
            l2ProxyAdmin: '0xfC95A7f751E912020AC3aE9aCa988943ef271df5',
            l2Weth: '0x27d7adF6957d6976F6cb812232eCD9a29EfE3Bdf',
            l2WethGateway: '0xcA90173Bb68FCc22bc6847de0C7Aa439f19c5c87'
          },
        nitroGenesisBlock: 0,
        nitroGenesisL1Block: 0,
        depositTimeout: 1800000,
        blockTime: constants_1.ARB_MINIMUM_BLOCK_TIME_IN_SECONDS,
    },
    // 84532: {
    //     chainID: 84532,
    //     name: 'Base Sepolia',
    //     explorerUrl: `${process.env.NEXT_PUBLIC_BASE_SEPOLIA_EXPLORER}`,
    //     partnerChainIDs: [451451234],
    //     blockTime: 12,
    //     isCustom: false,
    //     isArbitrum: false,
    // },
    // 451451234: {
    //     chainID: 451451234,
    //     confirmPeriodBlocks: 20,
    //     ethBridge: {
    //         bridge: '0xcF23aE50D42664981697cE8eCdB3820198425326',
    //         inbox: '0x8Fa699394c59613b0fA2725BE8c4AD5cb863a7f0',
    //         outbox: '0xCc736d1A9C5F1c21C3209af7C7f9876B5C03F5B3',
    //         rollup: '0xFc70B21D8b10091e34E21901002cc6b739b57a46',
    //         sequencerInbox: '0x24DCda9d06BcDF14e83bC2a3d23d75c91B49Ab86',
    //     },
    //     explorerUrl: `${process.env.NEXT_PUBLIC_L3_EXPLORER}`,
    //     isArbitrum: true,
    //     isCustom: true,
    //     name: 'complere-chain',
    //     partnerChainID: 84532,
    //     partnerChainIDs: [84532],
    //     retryableLifetimeSeconds: constants_1.SEVEN_DAYS_IN_SECONDS,
    //     tokenBridge: {
    //         l1CustomGateway: '0x67f1dCf32f22583C24501ffD9a6DC657eEc27e62',
    //         l1ERC20Gateway: '0x363631e85fC470bb9AB038cBe14082A1601Adf9f', // standard gatway
    //         l1GatewayRouter: '0xD345845633b37B9D4241F7b134c62143bDbd3bB8', // router
    //         l1MultiCall: '0xE0753Df74d86D6B25aCd2d049389c7E52e2dd728',
    //         l1ProxyAdmin: '0x977dC362E64598Bea0c792E23240d4ff02F3D64B', // adminProxy 
    //         l1Weth: '0x1BDD24840e119DC2602dCC587Dd182812427A5Cc',
    //         l1WethGateway: '0xaa9218236820025eBB217103Af7a813fc3e5284A',

    //         l2CustomGateway: '0x0fec5B021B8e47c0c2B8d6Bd937aDe4bd68512aa',
    //         l2ERC20Gateway: '0x7abe445952B009B264b29777a57554b4CF8B9906', // standard
    //         l2GatewayRouter: '0x85E3d52733154c1538c167f519914fC50ac15AAf',
    //         l2Multicall: '0x7bf784D7C7081489cDe0227F9EfCA83844fbC979',
    //         l2ProxyAdmin: '0x766b6d02DCED9193552a98448Fe612e85a9f7D5F',
    //         l2Weth: '0x5499fA9Fa221B08FAb23E08c6F80Ddd52074Da48',
    //         l2WethGateway: '0xf9367E751324274fE0eA54140dbD60811f1CACe6'
    //       },
    //     nitroGenesisBlock: 0,
    //     nitroGenesisL1Block: 0,
    //     depositTimeout: 1800000,
    //     blockTime: constants_1.ARB_MINIMUM_BLOCK_TIME_IN_SECONDS,
    // },
    17000: {
        chainID: 17000,
        name: 'holesky',
        explorerUrl: 'https://holesky.etherscan.io',
        partnerChainIDs: [13331370],
        blockTime: 12,
        isCustom: false,
        isArbitrum: false,
    },
    13331370: {
        chainID: 13331370,
        confirmPeriodBlocks: 20,
        ethBridge: {
            bridge: '0x85deaBEa8c6b45ff1f21C128b1f6Ed971bC122b3',
            inbox: '0x4cA0aF77F59949E338bcd878B809E01d50B96D00',
            outbox: '0x411A39A8EEC80E63F29A98882aDF17Eb4636a490',
            rollup: '0x1f36f44a377C0D48706F0726608724d1E884D5c7',
            sequencerInbox: '0x2813f740FF6A6c09839951855CaDfA814129B6A9',
        },
        explorerUrl: `${process.env.NEXT_PUBLIC_NEXUS_ORBIT_EXPLORER_URL || "null Explorer url"}`,
        isArbitrum: true,
        isCustom: true,
        name: 'nexus-orbit-chain',
        partnerChainID: 17000,
        partnerChainIDs: [17000],
        retryableLifetimeSeconds: constants_1.SEVEN_DAYS_IN_SECONDS,
        tokenBridge: {
            l1CustomGateway: '0x2fB2f4438E58Adf2317A8E01D7A9147c35E8B17C',
            l1ERC20Gateway: '0xf124911E6FEbB02e306594176B95Eebab6a2DB07', // standard gatway
            l1GatewayRouter: '0x49256233ea0e7f335b0709BeE166d7A7833697f0',
            l1MultiCall: '0xF3cA368BeF5252476E84de2A835167c90262D3C1',
            l1ProxyAdmin: '0x1633e1BFb0F2f4A1A13Cde3B815C8009d54B070c', // only l2 given
            l1Weth: '0x9E2433a112E8011FCA089eD97941dCb1bE913e48',
            l1WethGateway: '0x223395709C1299457374B8b54e911039fb896c38',
            l2CustomGateway: '0xeD558B2d34be97df05b63DbA53F19C5aD64bEFbB',
            l2ERC20Gateway: '0x7fFf8201D972BDCD8A0567842253919360481BD7', // standard
            l2GatewayRouter: '0x5Ce08541F5D77753b10af23c6ac1e416792d6617',
            l2Multicall: '0x38Ba7826Ef36bC41A964cAc620af0D396B47b84a',
            l2ProxyAdmin: '0x872DF1b8Fe95652335d919bbD6716E972dE143A2',
            l2Weth: '0x50104764A914Aa3a080a42d0D2E6E19E26312A2F',
            l2WethGateway: '0xEB3dAf274301fbBD120151BdfD99404b616d8E9A'
          },
        nitroGenesisBlock: 0,
        nitroGenesisL1Block: 0,
        depositTimeout: 1800000,
        blockTime: constants_1.ARB_MINIMUM_BLOCK_TIME_IN_SECONDS,
    },
    1338: {
        chainID: 1338,
        name: 'Hardhat_Mainnet_Fork',
        explorerUrl: 'https://etherscan.io',
        partnerChainIDs: [42161],
        blockTime: 1,
        isCustom: false,
        isArbitrum: false,
    },
    11155111: {
        chainID: 11155111,
        name: 'Sepolia',
        explorerUrl: 'https://sepolia.etherscan.io',
        partnerChainIDs: [14013869778],
        blockTime: 12,
        isCustom: false,
        isArbitrum: false,
    },
    14013869778: {
        chainID: 14013869778,
        confirmPeriodBlocks: 50,
        ethBridge: {
            bridge: "0xb2C7C8fCeC27Bdbf0537fc72C1cb51cb09189ae9",
             inbox : "0xAf8e1d9498e184718678A1cc292604B1d7CD73A8",
             outbox : "0xe15a48cf78ABAd286A9bdD34cFAa222C6C81C524",
             rollup : "0xa1f331993b70D791050efC6f926aADD7f64947F2",
             sequencerInbox : "0x1f087100412ED71F2D8816CF2782e9f51b0A421b"
          },
        explorerUrl: `${process.env.NEXT_PUBLIC_L3_EXPLORER}`,
        isArbitrum: true,
        isCustom: true,
        name: "OrbitChain",
        partnerChainID: 11155111,
        partnerChainIDs: [],
        retryableLifetimeSeconds: 604800,
        tokenBridge: {
            "l1CustomGateway": "0x1458003e19435760B9363DdfF778c0A9830a0b39",
            "l1ERC20Gateway": "0x540cE06E67f1c433b1dF335514c254AF97Ceb878",
            "l1GatewayRouter": "0xdD7c75b980b6ed5832CbBf3665316f98C924a5C0",
            "l1MultiCall": "0x73465577E9FD7Cd585E4270F23A9eBa99B92b6eD",
            "l1ProxyAdmin": "0x0000000000000000000000000000000000000000",
            "l1Weth": "0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9",
            "l1WethGateway": "0xDB4B8C320E6DdA76B46C002b7538a4DE502d2A30",
            "l2CustomGateway": "0x7176a776c1A030296E2D1FFE1492a153D1dF0CFf",
            "l2ERC20Gateway": "0xBa1814622E4a474a04416eC765a60B85096FE752",
            "l2GatewayRouter": "0xeD5d26dB973C5a5F58356Fcd22D1Da533A8855E9",
            "l2Multicall": "0xDf042099642c90cC54B0d51b767d679cA7b64F9a",
            "l2ProxyAdmin": "0xA6D5942e929C4becB859650a8Add0c50c21e468D",
            "l2Weth": "0x1ACF7Fe5Fe43CB45E89F97E87E8AC683B523bE2b",
            "l2WethGateway": "0x6D8a66A6bFaF57485C343163ac9E62005C6B4E78"
          },
        nitroGenesisBlock: 0,
        nitroGenesisL1Block: 0,
        depositTimeout: 900000,
        blockTime: 0.25,
    },
    42161: {
        chainID: 42161,
        name: 'Arbitrum One',
        explorerUrl: 'https://arbiscan.io',
        partnerChainID: 1,
        partnerChainIDs: [],
        isArbitrum: true,
        tokenBridge: mainnetTokenBridge,
        ethBridge: mainnetETHBridge,
        confirmPeriodBlocks: 45818,
        isCustom: false,
        retryableLifetimeSeconds: constants_1.SEVEN_DAYS_IN_SECONDS,
        nitroGenesisBlock: 22207817,
        nitroGenesisL1Block: 15447158,
        /**
         * Finalisation on mainnet can be up to 2 epochs = 64 blocks on mainnet
         * We add 10 minutes for the system to create and redeem the ticket, plus some extra buffer of time
         * (Total timeout: 30 minutes)
         */
        depositTimeout: 1800000,
        blockTime: constants_1.ARB_MINIMUM_BLOCK_TIME_IN_SECONDS,
    },
    42170: {
        chainID: 42170,
        confirmPeriodBlocks: 45818,
        ethBridge: {
            bridge: '0xC1Ebd02f738644983b6C4B2d440b8e77DdE276Bd',
            inbox: '0xc4448b71118c9071Bcb9734A0EAc55D18A153949',
            outbox: '0xD4B80C3D7240325D18E645B49e6535A3Bf95cc58',
            rollup: '0xFb209827c58283535b744575e11953DCC4bEAD88',
            sequencerInbox: '0x211E1c4c7f1bF5351Ac850Ed10FD68CFfCF6c21b',
        },
        explorerUrl: 'https://nova.arbiscan.io',
        isArbitrum: true,
        isCustom: false,
        name: 'Arbitrum Nova',
        partnerChainID: 1,
        partnerChainIDs: [],
        retryableLifetimeSeconds: constants_1.SEVEN_DAYS_IN_SECONDS,
        tokenBridge: {
            l1CustomGateway: '0x23122da8C581AA7E0d07A36Ff1f16F799650232f',
            l1ERC20Gateway: '0xB2535b988dcE19f9D71dfB22dB6da744aCac21bf',
            l1GatewayRouter: '0xC840838Bc438d73C16c2f8b22D2Ce3669963cD48',
            l1MultiCall: '0x8896D23AfEA159a5e9b72C9Eb3DC4E2684A38EA3',
            l1ProxyAdmin: '0xa8f7DdEd54a726eB873E98bFF2C95ABF2d03e560',
            l1Weth: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            l1WethGateway: '0xE4E2121b479017955Be0b175305B35f312330BaE',
            l2CustomGateway: '0xbf544970E6BD77b21C6492C281AB60d0770451F4',
            l2ERC20Gateway: '0xcF9bAb7e53DDe48A6DC4f286CB14e05298799257',
            l2GatewayRouter: '0x21903d3F8176b1a0c17E953Cd896610Be9fFDFa8',
            l2Multicall: '0x5e1eE626420A354BbC9a95FeA1BAd4492e3bcB86',
            l2ProxyAdmin: '0xada790b026097BfB36a5ed696859b97a96CEd92C',
            l2Weth: '0x722E8BdD2ce80A4422E880164f2079488e115365',
            l2WethGateway: '0x7626841cB6113412F9c88D3ADC720C9FAC88D9eD',
        },
        nitroGenesisBlock: 0,
        nitroGenesisL1Block: 0,
        /**
         * Finalisation on mainnet can be up to 2 epochs = 64 blocks on mainnet
         * We add 10 minutes for the system to create and redeem the ticket, plus some extra buffer of time
         * (Total timeout: 30 minutes)
         */
        depositTimeout: 1800000,
        blockTime: constants_1.ARB_MINIMUM_BLOCK_TIME_IN_SECONDS,
    },
    421614: {
        chainID: 421614,
        confirmPeriodBlocks: 20,
        ethBridge: {
            bridge: '0x38f918D0E9F1b721EDaA41302E399fa1B79333a9',
            inbox: '0xaAe29B0366299461418F5324a79Afc425BE5ae21',
            outbox: '0x65f07C7D521164a4d5DaC6eB8Fac8DA067A3B78F',
            rollup: '0xd80810638dbDF9081b72C1B33c65375e807281C8',
            sequencerInbox: '0x6c97864CE4bEf387dE0b3310A44230f7E3F1be0D',
        },
        explorerUrl: 'https://sepolia-explorer.arbitrum.io',
        isArbitrum: true,
        isCustom: false,
        name: 'Arbitrum Rollup Sepolia Testnet',
        partnerChainID: 11155111,
        partnerChainIDs: [23011913],
        retryableLifetimeSeconds: constants_1.SEVEN_DAYS_IN_SECONDS,
        tokenBridge: {
            l1CustomGateway: '0xba2F7B6eAe1F9d174199C5E4867b563E0eaC40F3',
            l1ERC20Gateway: '0x902b3E5f8F19571859F4AB1003B960a5dF693aFF',
            l1GatewayRouter: '0xcE18836b233C83325Cc8848CA4487e94C6288264',
            l1MultiCall: '0xded9AD2E65F3c4315745dD915Dbe0A4Df61b2320',
            l1ProxyAdmin: '0xDBFC2FfB44A5D841aB42b0882711ed6e5A9244b0',
            l1Weth: '0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9',
            l1WethGateway: '0xA8aD8d7e13cbf556eE75CB0324c13535d8100e1E',
            l2CustomGateway: '0x8Ca1e1AC0f260BC4dA7Dd60aCA6CA66208E642C5',
            l2ERC20Gateway: '0x6e244cD02BBB8a6dbd7F626f05B2ef82151Ab502',
            l2GatewayRouter: '0x9fDD1C4E4AA24EEc1d913FABea925594a20d43C7',
            l2Multicall: '0xA115146782b7143fAdB3065D86eACB54c169d092',
            l2ProxyAdmin: '0x715D99480b77A8d9D603638e593a539E21345FdF',
            l2Weth: '0x980B62Da83eFf3D4576C647993b0c1D7faf17c73',
            l2WethGateway: '0xCFB1f08A4852699a979909e22c30263ca249556D',
        },
        nitroGenesisBlock: 0,
        nitroGenesisL1Block: 0,
        depositTimeout: 1800000,
        blockTime: constants_1.ARB_MINIMUM_BLOCK_TIME_IN_SECONDS,
    },
    23011913: {
        chainID: 23011913,
        confirmPeriodBlocks: 20,
        ethBridge: {
            bridge: '0x35aa95ac4747D928E2Cd42FE4461F6D9d1826346',
            inbox: '0xe1e3b1CBaCC870cb6e5F4Bdf246feB6eB5cD351B',
            outbox: '0x98fcA8bFF38a987B988E54273Fa228A52b62E43b',
            rollup: '0x94db9E36d9336cD6F9FfcAd399dDa6Cc05299898',
            sequencerInbox: '0x00A0F15b79d1D3e5991929FaAbCF2AA65623530c',
        },
        explorerUrl: 'https://stylus-testnet-explorer.arbitrum.io',
        isArbitrum: true,
        isCustom: false,
        name: 'Stylus Testnet',
        partnerChainID: 421614,
        partnerChainIDs: [],
        retryableLifetimeSeconds: constants_1.SEVEN_DAYS_IN_SECONDS,
        tokenBridge: {
            l1CustomGateway: '0xd624D491A5Bc32de52a2e1481846752213bF7415',
            l1ERC20Gateway: '0x7348Fdf6F3e090C635b23D970945093455214F3B',
            l1GatewayRouter: '0x0057892cb8bb5f1cE1B3C6f5adE899732249713f',
            l1MultiCall: '0xBEbe3BfBF52FFEA965efdb3f14F2101c0264c940',
            l1ProxyAdmin: '0xB9E77732f32831f09e2a50D6E71B2Cca227544bf',
            l1Weth: '0x980B62Da83eFf3D4576C647993b0c1D7faf17c73',
            l1WethGateway: '0x39845e4a230434D218b907459a305eBA61A790d4',
            l2CustomGateway: '0xF6dbB0e312dF4652d59ce405F5E00CC3430f19c5',
            l2ERC20Gateway: '0xe027f79CE40a1eF8e47B51d0D46Dc4ea658C5860',
            l2GatewayRouter: '0x4c3a1f7011F02Fe4769fC704359c3696a6A60D89',
            l2Multicall: '0xEb4A260FD16aaf18c04B1aeaDFE20E622e549bd3',
            l2ProxyAdmin: '0xE914c0d417E8250d0237d2F4827ed3612e6A9C3B',
            l2Weth: '0x61Dc4b961D2165623A25EB775260785fE78BD37C',
            l2WethGateway: '0x7021B4Edd9f047772242fc948441d6e0b9121175',
        },
        nitroGenesisBlock: 0,
        nitroGenesisL1Block: 0,
        depositTimeout: 900000,
        blockTime: constants_1.ARB_MINIMUM_BLOCK_TIME_IN_SECONDS,
    },
};
/**
 * Determines if a chain is a parent of *any* other chain. Could be an L1 or an L2 chain.
 */
const isParentChain = (chain) => {
    return chain.partnerChainIDs.length > 0;
};
/**
 * Determines if a chain is an Arbitrum chain. Could be an L2 or an L3 chain.
 */
const isArbitrumNetwork = (chain) => {
    return chain.isArbitrum;
};
/**
 * Determines if a chain is specifically an L1 chain (not L2 or L3).
 */
const isL1Network = (chain) => {
    return !chain.isArbitrum;
};
exports.isL1Network = isL1Network;
/**
 * Builds an object that is a list of chains filtered by the provided predicate function indexed by their chain id
 * @param filterFn - A predicate function to determine if a chain should be included.
 * @return An object with only the filtered chains.
 */
const getChainsByType = (filterFn) => {
    return Object.entries(exports.networks).reduce((accumulator, [chainId, chainData]) => {
        if (filterFn(chainData)) {
            accumulator[chainId] = chainData;
        }
        return accumulator;
    }, {});
};
const getL1Chains = () => getChainsByType(exports.isL1Network);
const getArbitrumChains = () => getChainsByType(isArbitrumNetwork);
/**
 * Returns the parent chain for the given chain.
 */
const getParentForNetwork = (chain) => {
    if (!isArbitrumNetwork(chain)) {
        throw new errors_1.ArbSdkError(`Chain ${chain.chainID} is not an Arbitrum chain.`);
    }
    const parentChain = exports.networks[chain.partnerChainID];
    if (!parentChain || !isParentChain(parentChain)) {
        throw new errors_1.ArbSdkError(`Parent chain ${chain.partnerChainID} not recognized for chain ${chain.chainID}.`);
    }
    return parentChain;
};
exports.getParentForNetwork = getParentForNetwork;
/**
 * Returns a list of children chains for the given chain.
 */
const getChildrenForNetwork = (chain) => {
    const arbitrumChains = getArbitrumChains();
    return Object.values(arbitrumChains).filter(arbitrumChain => arbitrumChain.partnerChainID === chain.chainID);
};
/**
 * Index of *only* L1 chains that have been added.
 */
exports.l1Networks = getL1Chains();
/**
 * Index of all Arbitrum chains that have been added.
 */
exports.l2Networks = getArbitrumChains();
/**
 * Returns the network associated with the given Signer, Provider or chain id.
 * @note Throws if the chain is not recognized.
 */
const getNetwork = async (signerOrProviderOrChainID, layer) => {
    const chainID = await (async () => {
        if (typeof signerOrProviderOrChainID === 'number') {
            return signerOrProviderOrChainID;
        }
        const provider = signerOrProvider_1.SignerProviderUtils.getProviderOrThrow(signerOrProviderOrChainID);
        const { chainId } = await provider.getNetwork();
        return chainId;
    })();
    let network = undefined;
    if (layer === 1) {
        network = getL1Chains()[chainID];
    }
    else {
        network = getArbitrumChains()[chainID];
    }
    if (!network) {
        throw new errors_1.ArbSdkError(`Unrecognized network ${chainID}.`);
    }
    return network;
};
exports.getNetwork = getNetwork;
/**
 * Returns the L1 chain associated with the given signer, provider or chain id.
 *
 * @note Throws if the chain is not an L1 chain.
 */
const getL1Network = (signerOrProviderOrChainID) => {
    return (0, exports.getNetwork)(signerOrProviderOrChainID, 1);
};
exports.getL1Network = getL1Network;
/**
 * Returns the Arbitrum chain associated with the given signer, provider or chain id.
 *
 * @note Throws if the chain is not an Arbitrum chain.
 */
const getL2Network = (signerOrProviderOrChainID) => {
    return (0, exports.getNetwork)(signerOrProviderOrChainID, 2);
};
exports.getL2Network = getL2Network;
/**
 * Returns the addresses of all contracts that make up the ETH bridge
 * @param rollupContractAddress Address of the Rollup contract
 * @param l1SignerOrProvider A parent chain signer or provider
 * @returns EthBridge object with all information about the ETH bridge
 */
const getEthBridgeInformation = async (rollupContractAddress, l1SignerOrProvider) => {
    const rollup = RollupAdminLogic__factory_1.RollupAdminLogic__factory.connect(rollupContractAddress, l1SignerOrProvider);
    const [bridge, inbox, sequencerInbox, outbox] = await Promise.all([
        rollup.bridge(),
        rollup.inbox(),
        rollup.sequencerInbox(),
        rollup.outbox(),
    ]);
    return {
        bridge,
        inbox,
        sequencerInbox,
        outbox,
        rollup: rollupContractAddress,
    };
};
exports.getEthBridgeInformation = getEthBridgeInformation;
/**
 * Adds any chain to the global index of networks and updates the parent/child relationships.
 */
const addNetwork = (network) => {
    // store the network with the rest of the networks
    exports.networks[network.chainID] = network;
    // if it's a parent chain (L1 or L2), assign it as parent to all the children
    if (isParentChain(network)) {
        const children = getChildrenForNetwork(network);
        children.forEach(child => {
            child.partnerChainID = network.chainID;
        });
    }
    // if it's an arbitrum chain, add it to the parent's list of children
    if (isArbitrumNetwork(network)) {
        const parent = exports.networks[network.partnerChainID];
        if (!parent) {
            throw new errors_1.ArbSdkError(`Network ${network.chainID}'s parent network ${network.partnerChainID} is not recognized`);
        }
        parent.partnerChainIDs = [...parent.partnerChainIDs, network.chainID];
    }
    exports.l1Networks = getL1Chains();
    exports.l2Networks = getArbitrumChains();
};
/**
 * Registers a pair of custom L1 and L2 chains, or a single custom Arbitrum chain (L2 or L3).
 *
 * @param customL1Network the custom L1 chain (optional)
 * @param customL2Network the custom L2 or L3 chain
 */
const addCustomNetwork = ({ customL1Network, customL2Network, }) => {
    if (customL1Network) {
        if (customL1Network.chainID !== customL2Network.partnerChainID) {
            throw new errors_1.ArbSdkError(`Partner chain id for L2 network ${customL2Network.chainID} doesn't match the provided L1 network. Expected ${customL1Network.chainID} but got ${customL2Network.partnerChainID}.`);
        }
        // check the if the parent chain is in any of the lists
        if (exports.l1Networks[customL1Network.chainID]) {
            throw new errors_1.ArbSdkError(`Network ${customL1Network.chainID} already included`);
        }
        else if (!customL1Network.isCustom) {
            throw new errors_1.ArbSdkError(`Custom network ${customL1Network.chainID} must have isCustom flag set to true`);
        }
        addNetwork(customL1Network);
    }
    if (exports.l2Networks[customL2Network.chainID]) {
        throw new errors_1.ArbSdkError(`Network ${customL2Network.chainID} already included`);
    }
    else if (!customL2Network.isCustom) {
        throw new errors_1.ArbSdkError(`Custom network ${customL2Network.chainID} must have isCustom flag set to true`);
    }
    addNetwork(customL2Network);
};
exports.addCustomNetwork = addCustomNetwork;
/**
 * Registers a custom network that matches the one created by a Nitro local node. Useful in development.
 *
 * @see {@link https://github.com/OffchainLabs/nitro}
 */
const addDefaultLocalNetwork = () => {
    const defaultLocalL1Network = {
        blockTime: 10,
        chainID: 1337,
        explorerUrl: '',
        isCustom: true,
        name: 'EthLocal',
        partnerChainIDs: [412346],
        isArbitrum: false,
    };
    const defaultLocalL2Network = {
        chainID: 412346,
        confirmPeriodBlocks: 20,
        ethBridge: {
            bridge: '0x2b360A9881F21c3d7aa0Ea6cA0De2a3341d4eF3C',
            inbox: '0xfF4a24b22F94979E9ba5f3eb35838AA814bAD6F1',
            outbox: '0x49940929c7cA9b50Ff57a01d3a92817A414E6B9B',
            rollup: '0x65a59D67Da8e710Ef9A01eCa37f83f84AEdeC416',
            sequencerInbox: '0xE7362D0787b51d8C72D504803E5B1d6DcdA89540',
        },
        explorerUrl: '',
        isArbitrum: true,
        isCustom: true,
        name: 'ArbLocal',
        partnerChainID: 1337,
        partnerChainIDs: [],
        retryableLifetimeSeconds: 604800,
        nitroGenesisBlock: 0,
        nitroGenesisL1Block: 0,
        depositTimeout: 900000,
        tokenBridge: {
            l1CustomGateway: '0x3DF948c956e14175f43670407d5796b95Bb219D8',
            l1ERC20Gateway: '0x4A2bA922052bA54e29c5417bC979Daaf7D5Fe4f4',
            l1GatewayRouter: '0x525c2aBA45F66987217323E8a05EA400C65D06DC',
            l1MultiCall: '0xDB2D15a3EB70C347E0D2C2c7861cAFb946baAb48',
            l1ProxyAdmin: '0xe1080224B632A93951A7CFA33EeEa9Fd81558b5e',
            l1Weth: '0x408Da76E87511429485C32E4Ad647DD14823Fdc4',
            l1WethGateway: '0xF5FfD11A55AFD39377411Ab9856474D2a7Cb697e',
            l2CustomGateway: '0x525c2aBA45F66987217323E8a05EA400C65D06DC',
            l2ERC20Gateway: '0xe1080224B632A93951A7CFA33EeEa9Fd81558b5e',
            l2GatewayRouter: '0x1294b86822ff4976BfE136cB06CF43eC7FCF2574',
            l2Multicall: '0xDB2D15a3EB70C347E0D2C2c7861cAFb946baAb48',
            l2ProxyAdmin: '0xda52b25ddB0e3B9CC393b0690Ac62245Ac772527',
            l2Weth: '0x408Da76E87511429485C32E4Ad647DD14823Fdc4',
            l2WethGateway: '0x4A2bA922052bA54e29c5417bC979Daaf7D5Fe4f4',
        },
        blockTime: constants_1.ARB_MINIMUM_BLOCK_TIME_IN_SECONDS,
    };
    (0, exports.addCustomNetwork)({
        customL1Network: defaultLocalL1Network,
        customL2Network: defaultLocalL2Network,
    });
    return {
        l1Network: defaultLocalL1Network,
        l2Network: defaultLocalL2Network,
    };
};
exports.addDefaultLocalNetwork = addDefaultLocalNetwork;
/**
 * Creates a function that resets the networks index to default. Useful in development.
 */
const createNetworkStateHandler = () => {
    const initialState = JSON.parse(JSON.stringify(exports.networks));
    return {
        resetNetworksToDefault: () => {
            Object.keys(exports.networks).forEach(key => delete exports.networks[key]);
            Object.assign(exports.networks, JSON.parse(JSON.stringify(initialState)));
            exports.l1Networks = getL1Chains();
            exports.l2Networks = getArbitrumChains();
        },
    };
};
const { resetNetworksToDefault } = createNetworkStateHandler();
exports.resetNetworksToDefault = resetNetworksToDefault;
