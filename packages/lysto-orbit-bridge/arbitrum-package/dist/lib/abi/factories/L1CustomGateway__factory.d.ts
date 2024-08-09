import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { L1CustomGateway, L1CustomGatewayInterface } from "../L1CustomGateway";
type L1CustomGatewayConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class L1CustomGateway__factory extends ContractFactory {
    constructor(...args: L1CustomGatewayConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<L1CustomGateway>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): L1CustomGateway;
    connect(signer: Signer): L1CustomGateway__factory;
    static readonly contractName: "L1CustomGateway";
    readonly contractName: "L1CustomGateway";
    static readonly bytecode = "0x608060405234801561001057600080fd5b50612ac4806100206000396000f3fe6080604052600436106101355760003560e01c8063a0c76a96116100ab578063d2ce7d651161006f578063d2ce7d6514610378578063f26bdead1461038b578063f68a90821461039e578063f887ea40146103cc578063f8c8765e146103ec578063fb0e722b1461040c57600080fd5b8063a0c76a96146102bd578063a7e28d48146102dd578063bcf2e6eb14610316578063bd5f3e7d14610345578063ca346d4a1461036557600080fd5b80632e567b36116100fd5780632e567b36146101ff5780634fb1a07b146102125780638a2dc014146102325780638da5cb5b1461026857806393e59dc11461028857806395fcea78146102a857600080fd5b806301ffc9a71461013a578063020a60581461016f57806313af40351461019d5780631d3a689f146101bf5780632db09c1c146101d2575b600080fd5b34801561014657600080fd5b5061015a610155366004611dab565b61042c565b60405190151581526020015b60405180910390f35b34801561017b57600080fd5b5061018f61018a366004611dea565b610463565b604051908152602001610166565b3480156101a957600080fd5b506101bd6101b8366004611e1a565b6104a8565b005b61018f6101cd366004611e7b565b610543565b3480156101de57600080fd5b506000546101f2906001600160a01b031681565b6040516101669190611f01565b6101bd61020d366004611f56565b61058c565b610225610220366004611fda565b6105ce565b60405161016691906120c1565b34801561023e57600080fd5b506101f261024d366004611e1a565b6004602052600090815260409020546001600160a01b031681565b34801561027457600080fd5b506005546101f2906001600160a01b031681565b34801561029457600080fd5b506006546101f2906001600160a01b031681565b3480156102b457600080fd5b506101bd610619565b3480156102c957600080fd5b506102256102d8366004612197565b610691565b3480156102e957600080fd5b506101f26102f8366004611e1a565b6001600160a01b039081166000908152600460205260409020541690565b34801561032257600080fd5b50610336610331366004612215565b61070b565b6040516101669392919061222e565b34801561035157600080fd5b506101bd61036036600461225a565b6107c4565b61018f6103733660046122f8565b610a24565b61022561038636600461234e565b610a3e565b61018f6103993660046123c0565b610a50565b3480156103aa57600080fd5b506103be6103b93660046123fb565b610a6a565b604051610166929190612453565b3480156103d857600080fd5b506001546101f2906001600160a01b031681565b3480156103f857600080fd5b506101bd610407366004612477565b610b5a565b34801561041857600080fd5b506002546101f2906001600160a01b031681565b60006001600160e01b03198216634fb1a07b60e01b148061045d57506301ffc9a760e01b6001600160e01b03198316145b92915050565b6000828260405160200161048a9291909182526001600160a01b0316602082015260400190565b60405160208183030381529060405280519060200120905092915050565b6005546001600160a01b031633146104db5760405162461bcd60e51b81526004016104d2906124d3565b60405180910390fd5b6001600160a01b0381166105215760405162461bcd60e51b815260206004820152600d60248201526c24a72b20a624a22fa7aba722a960991b60448201526064016104d2565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b6005546000906001600160a01b031633146105705760405162461bcd60e51b81526004016104d2906124d3565b6105808888888888888834610b96565b98975050505050505050565b6002600754036105ae5760405162461bcd60e51b81526004016104d2906124f7565b60026007556105c1868686868686610d90565b5050600160075550505050565b60606002600754036105f25760405162461bcd60e51b81526004016104d2906124f7565b60026007556106078989898989898989610ef8565b60016007559998505050505050505050565b60006106437fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b9050336001600160a01b0382161461068e5760405162461bcd60e51b815260206004820152600e60248201526d2727aa2fa32927a6afa0a226a4a760911b60448201526064016104d2565b50565b60408051602081019091526000815260609063172b3d9b60e11b878787876106b98689611162565b6040516024016106cd95949392919061252e565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915291505095945050505050565b6003602052600090815260409020805460018201805460ff8316936101009093046001600160a01b031692919061074190612569565b80601f016020809104026020016040519081016040528092919081815260200182805461076d90612569565b80156107ba5780601f1061078f576101008083540402835291602001916107ba565b820191906000526020600020905b81548152906001019060200180831161079d57829003601f168201915b5050505050905083565b60006107e0888860405180602001604052806000815250610a6a565b509050336001600160a01b038216146108315760405162461bcd60e51b81526020600482015260136024820152722727aa2fa2ac2822a1aa22a22fa9a2a72222a960691b60448201526064016104d2565b83156108715760405162461bcd60e51b815260206004820152600f60248201526e1393d7d110551057d0531313d5d151608a1b60448201526064016104d2565b6108b388888888888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061118e92505050565b81156109c0576001600160a01b0386163b6109025760405162461bcd60e51b815260206004820152600f60248201526e1513d7d393d517d0d3d395149050d5608a1b60448201526064016104d2565b604051630592e20760e41b81526000906001600160a01b0388169063592e2070906109379085908d90899089906004016125cc565b6020604051808303816000875af1158015610956573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097a91906125f4565b9050806109be5760405162461bcd60e51b81526020600482015260126024820152711514905394d1915497d213d3d2d7d190525360721b60448201526064016104d2565b505b87866001600160a01b0316826001600160a01b03167f56735ccb9dc7d2222ce4177fc3aea44c33882e2a2c73e0fb1c6b93c9c13a04d48888888860008b8b905011604051610a12959493929190612616565b60405180910390a45050505050505050565b6000610a34868686868634611220565b9695505050505050565b606061058088888989898989896105ce565b6000610a5f8585858533610a24565b90505b949350505050565b600060606000610a7a8686610463565b600081815260036020526040902080549192509060ff1615610b49578060000160019054906101000a90046001600160a01b031681600101808054610abe90612569565b80601f0160208091040260200160405190810160405280929190818152602001828054610aea90612569565b8015610b375780601f10610b0c57610100808354040283529160200191610b37565b820191906000526020600020905b815481529060010190602001808311610b1a57829003601f168201915b50505050509050935093505050610b52565b85859350935050505b935093915050565b610b6584848461150a565b600580546001600160a01b039092166001600160a01b03199283161790556006805490911690555050600160075550565b6000878614610bd95760405162461bcd60e51b815260206004820152600f60248201526e494e56414c49445f4c454e4754485360881b60448201526064016104d2565b60005b88811015610d0557878782818110610bf657610bf6612652565b9050602002016020810190610c0b9190611e1a565b600460008c8c85818110610c2157610c21612652565b9050602002016020810190610c369190611e1a565b6001600160a01b039081168252602082019290925260400160002080546001600160a01b03191692909116919091179055878782818110610c7957610c79612652565b9050602002016020810190610c8e9190611e1a565b6001600160a01b03168a8a83818110610ca957610ca9612652565b9050602002016020810190610cbe9190611e1a565b6001600160a01b03167f0dd664a155dd89526bb019e22b00291bb7ca9d07ba3ec4a1a76b410da9797ceb60405160405180910390a380610cfd8161267e565b915050610bdc565b50600063d4f5532f60e01b8a8a8a8a604051602401610d2794939291906126e0565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915260025460008054929350610d82926001600160a01b0392831692169033908790898c8c896115bd565b9a9950505050505050505050565b6002546001600160a01b03166000610da7826115d1565b9050336001600160a01b03821614610df35760405162461bcd60e51b815260206004820152600f60248201526e4e4f545f46524f4d5f42524944474560881b60448201526064016104d2565b6000610dfe83611635565b6000549091506001600160a01b03808316911614610e595760405162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b60448201526064016104d2565b600080610e668787611753565b915091508051600014610e8457506040805160208101909152600081525b610e8f828a83610a6a565b509850610e9d8b8a8a61176e565b81896001600160a01b03168b6001600160a01b03167f891afe029c75c4f8c5855fc3480598bc5a53739344f6ae575bdb7ea2a79f56b38e8c604051610ee3929190612707565b60405180910390a45050505050505050505050565b6001546060906001600160a01b03163314610f475760405162461bcd60e51b815260206004820152600f60248201526e2727aa2fa32927a6afa927aaaa22a960891b60448201526064016104d2565b6000806060600080610f67336001546001600160a01b0391821691161490565b15610f8057610f768888611787565b9095509250610fbd565b33945087878080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505050505b610fc6836117a3565b8151919550919350909150156110145760405162461bcd60e51b8152602060048201526013602482015272115615149057d110551057d11254d050931151606a1b60448201526064016104d2565b6001600160a01b038e163b61105d5760405162461bcd60e51b815260206004820152600f60248201526e130c57d393d517d0d3d395149050d5608a1b60448201526064016104d2565b6001600160a01b038e811660009081526004602052604090205416806110b75760405162461bcd60e51b815260206004820152600f60248201526e1393d7d30c97d513d2d15397d4d155608a1b60448201526064016104d2565b6110c28f878e6117c9565b9b506110d18f878f8f88610691565b96506110e38e878e8e8e88888e6118cc565b9450505050818a6001600160a01b0316846001600160a01b03167fb8910b9960c443aac3240b98585384e3a6f109fbf6969e264c3f183d69aba7e18f8d60405161112e929190612707565b60405180910390a4604080516020810184905201604051602081830303815290604052935050505098975050505050505050565b60608282604051602001611177929190612720565b604051602081830303815290604052905092915050565b600061119a8585610463565b6040805160608101825260018082526001600160a01b038781166020808501918252848601898152600088815260039092529590208451815492516001600160a81b0319909316901515610100600160a81b0319161761010092909316919091029190911781559251939450909290820190611216908261279c565b5050505050505050565b600060b160ff16336001600160a01b0316638e5f5ad16040518163ffffffff1660e01b8152600401602060405180830381865afa158015611265573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611289919061285b565b60ff16146112cb5760405162461bcd60e51b815260206004820152600f60248201526e1393d517d0549097d1539050931151608a1b60448201526064016104d2565b336000908152600460205260409020546001600160a01b0316801561134b57876001600160a01b0316816001600160a01b03161461134b5760405162461bcd60e51b815260206004820152601b60248201527f4e4f5f5550444154455f544f5f444946464552454e545f41444452000000000060448201526064016104d2565b5033600090815260046020908152604080832080546001600160a01b0319166001600160a01b038c1617905580516001808252818301909252918281019080368337505060408051600180825281830190925292935060009291506020808301908036833701905050905033826000815181106113ca576113ca612652565b60200260200101906001600160a01b031690816001600160a01b03168152505088816000815181106113fe576113fe612652565b60200260200101906001600160a01b031690816001600160a01b0316815250508060008151811061143157611431612652565b60200260200101516001600160a01b03168260008151811061145557611455612652565b60200260200101516001600160a01b03167f0dd664a155dd89526bb019e22b00291bb7ca9d07ba3ec4a1a76b410da9797ceb60405160405180910390a3600063d4f5532f60e01b83836040516024016114af9291906128b7565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915260025460008054929350610d82926001600160a01b03928316921690899089908c8f8f896115bd565b61151483836118ea565b6001600160a01b0382166115575760405162461bcd60e51b815260206004820152600a6024820152692120a22fa927aaaa22a960b11b60448201526064016104d2565b6001600160a01b0381166115995760405162461bcd60e51b81526020600482015260096024820152680848288be929c849eb60bb1b60448201526064016104d2565b600280546001600160a01b0319166001600160a01b03929092169190911790555050565b6000610d828a8a8a8b8b8b8b8b8b8b6119ac565b6000816001600160a01b031663e78cea926040518163ffffffff1660e01b8152600401602060405180830381865afa158015611611573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061045d91906128dc565b600080611641836115d1565b6001600160a01b031663ab5d89436040518163ffffffff1660e01b8152600401602060405180830381865afa15801561167e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116a291906128dc565b90506000816001600160a01b03166380648b026040518163ffffffff1660e01b8152600401602060405180830381865afa1580156116e4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061170891906128dc565b90506001600160a01b03811661174c5760405162461bcd60e51b81526020600482015260096024820152682727afa9a2a72222a960b91b60448201526064016104d2565b9392505050565b60006060611763838501856128f9565b909590945092505050565b6117826001600160a01b0384168383611a1e565b505050565b600060606117978385018561293f565b915091505b9250929050565b600060606000838060200190518101906117bd9190612978565b90959094509092509050565b600080846001600160a01b03166370a08231306040518263ffffffff1660e01b81526004016117f89190611f01565b602060405180830381865afa158015611815573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061183991906129fa565b90506118506001600160a01b038616853086611a74565b6040516370a0823160e01b81526000906001600160a01b038716906370a082319061187f903090600401611f01565b602060405180830381865afa15801561189c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118c091906129fa565b9050610a348282612a13565b60006118dd89898989898988611ab2565b9998505050505050505050565b6001600160a01b0382166119365760405162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b60448201526064016104d2565b6000546001600160a01b03161561197e5760405162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b60448201526064016104d2565b600080546001600160a01b039384166001600160a01b03199182161790915560018054929093169116179055565b6000806119c18c8c8c8c8c8c8c8c8c8c611b07565b9050808b6001600160a01b03168a6001600160a01b03167fc1d1490cf25c3b40d600dfb27c7680340ed1ab901b7e8f3551280968a3b372b086604051611a0791906120c1565b60405180910390a49b9a5050505050505050505050565b6117828363a9059cbb60e01b8484604051602401611a3d929190612707565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611b96565b6040516001600160a01b0380851660248301528316604482015260648101829052611aac9085906323b872dd60e01b90608401611a3d565b50505050565b6000610580600260009054906101000a90046001600160a01b031660008054906101000a90046001600160a01b03168a8a34600060405180606001604052808b81526020018d81526020018c81525089611c68565b60008a6001600160a01b031663679b6ded888c89898e8e8b8b8b6040518a63ffffffff1660e01b8152600401611b44989796959493929190612a26565b60206040518083038185885af1158015611b62573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190611b8791906129fa565b9b9a5050505050505050505050565b6000611beb826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611c889092919063ffffffff16565b8051909150156117825780806020019051810190611c0991906125f4565b6117825760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016104d2565b60006118dd89898989898989600001518a602001518b604001518b6119ac565b6060610a62848460008585600080866001600160a01b03168587604051611caf9190612a72565b60006040518083038185875af1925050503d8060008114611cec576040519150601f19603f3d011682016040523d82523d6000602084013e611cf1565b606091505b5091509150611d0287838387611d0d565b979650505050505050565b60608315611d7c578251600003611d75576001600160a01b0385163b611d755760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104d2565b5081610a62565b610a628383815115611d915781518083602001fd5b8060405162461bcd60e51b81526004016104d291906120c1565b600060208284031215611dbd57600080fd5b81356001600160e01b03198116811461174c57600080fd5b6001600160a01b038116811461068e57600080fd5b60008060408385031215611dfd57600080fd5b823591506020830135611e0f81611dd5565b809150509250929050565b600060208284031215611e2c57600080fd5b813561174c81611dd5565b60008083601f840112611e4957600080fd5b5081356001600160401b03811115611e6057600080fd5b6020830191508360208260051b850101111561179c57600080fd5b600080600080600080600060a0888a031215611e9657600080fd5b87356001600160401b0380821115611ead57600080fd5b611eb98b838c01611e37565b909950975060208a0135915080821115611ed257600080fd5b50611edf8a828b01611e37565b989b979a50986040810135976060820135975060809091013595509350505050565b6001600160a01b0391909116815260200190565b60008083601f840112611f2757600080fd5b5081356001600160401b03811115611f3e57600080fd5b60208301915083602082850101111561179c57600080fd5b60008060008060008060a08789031215611f6f57600080fd5b8635611f7a81611dd5565b95506020870135611f8a81611dd5565b94506040870135611f9a81611dd5565b93506060870135925060808701356001600160401b03811115611fbc57600080fd5b611fc889828a01611f15565b979a9699509497509295939492505050565b60008060008060008060008060e0898b031215611ff657600080fd5b883561200181611dd5565b9750602089013561201181611dd5565b9650604089013561202181611dd5565b9550606089013594506080890135935060a0890135925060c08901356001600160401b0381111561205157600080fd5b61205d8b828c01611f15565b999c989b5096995094979396929594505050565b60005b8381101561208c578181015183820152602001612074565b50506000910152565b600081518084526120ad816020860160208601612071565b601f01601f19169290920160200192915050565b60208152600061174c6020830184612095565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715612112576121126120d4565b604052919050565b60006001600160401b03821115612133576121336120d4565b50601f01601f191660200190565b600082601f83011261215257600080fd5b81356121656121608261211a565b6120ea565b81815284602083860101111561217a57600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a086880312156121af57600080fd5b85356121ba81611dd5565b945060208601356121ca81611dd5565b935060408601356121da81611dd5565b92506060860135915060808601356001600160401b038111156121fc57600080fd5b61220888828901612141565b9150509295509295909350565b60006020828403121561222757600080fd5b5035919050565b83151581526001600160a01b0383166020820152606060408201819052600090610a5f90830184612095565b600080600080600080600060a0888a03121561227557600080fd5b87359650602088013561228781611dd5565b9550604088013561229781611dd5565b945060608801356001600160401b03808211156122b357600080fd5b6122bf8b838c01611f15565b909650945060808a01359150808211156122d857600080fd5b506122e58a828b01611f15565b989b979a50959850939692959293505050565b600080600080600060a0868803121561231057600080fd5b853561231b81611dd5565b9450602086013593506040860135925060608601359150608086013561234081611dd5565b809150509295509295909350565b600080600080600080600060c0888a03121561236957600080fd5b873561237481611dd5565b9650602088013561238481611dd5565b955060408801359450606088013593506080880135925060a08801356001600160401b038111156123b457600080fd5b6122e58a828b01611f15565b600080600080608085870312156123d657600080fd5b84356123e181611dd5565b966020860135965060408601359560600135945092505050565b60008060006060848603121561241057600080fd5b83359250602084013561242281611dd5565b915060408401356001600160401b0381111561243d57600080fd5b61244986828701612141565b9150509250925092565b6001600160a01b0383168152604060208201819052600090610a6290830184612095565b6000806000806080858703121561248d57600080fd5b843561249881611dd5565b935060208501356124a881611dd5565b925060408501356124b881611dd5565b915060608501356124c881611dd5565b939692955090935050565b6020808252600a908201526927a7262cafa7aba722a960b11b604082015260600190565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b6001600160a01b0386811682528581166020830152841660408201526060810183905260a060808201819052600090611d0290830184612095565b600181811c9082168061257d57607f821691505b60208210810361259d57634e487b7160e01b600052602260045260246000fd5b50919050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60018060a01b0385168152836020820152606060408201526000610a346060830184866125a3565b60006020828403121561260657600080fd5b8151801515811461174c57600080fd5b60608152600061262a6060830187896125a3565b828103602084015261263d8186886125a3565b91505082151560408301529695505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006001820161269057612690612668565b5060010190565b8183526000602080850194508260005b858110156126d55781356126ba81611dd5565b6001600160a01b0316875295820195908201906001016126a7565b509495945050505050565b6040815260006126f4604083018688612697565b8281036020840152611d02818587612697565b6001600160a01b03929092168252602082015260400190565b6040815260006127336040830185612095565b82810360208401526127458185612095565b95945050505050565b601f82111561178257600081815260208120601f850160051c810160208610156127755750805b601f850160051c820191505b8181101561279457828155600101612781565b505050505050565b81516001600160401b038111156127b5576127b56120d4565b6127c9816127c38454612569565b8461274e565b602080601f8311600181146127fe57600084156127e65750858301515b600019600386901b1c1916600185901b178555612794565b600085815260208120601f198616915b8281101561282d5788860151825594840194600190910190840161280e565b508582101561284b5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60006020828403121561286d57600080fd5b815160ff8116811461174c57600080fd5b600081518084526020808501945080840160005b838110156126d55781516001600160a01b031687529582019590820190600101612892565b6040815260006128ca604083018561287e565b8281036020840152612745818561287e565b6000602082840312156128ee57600080fd5b815161174c81611dd5565b6000806040838503121561290c57600080fd5b8235915060208301356001600160401b0381111561292957600080fd5b61293585828601612141565b9150509250929050565b6000806040838503121561295257600080fd5b823561295d81611dd5565b915060208301356001600160401b0381111561292957600080fd5b6000806040838503121561298b57600080fd5b8251915060208301516001600160401b038111156129a857600080fd5b8301601f810185136129b957600080fd5b80516129c76121608261211a565b8181528660208385010111156129dc57600080fd5b6129ed826020830160208601612071565b8093505050509250929050565b600060208284031215612a0c57600080fd5b5051919050565b8181038181111561045d5761045d612668565b600061010060018060a01b03808c1684528a602085015289604085015280891660608501528088166080850152508560a08401528460c08401528060e0840152611b8781840185612095565b60008251612a84818460208701612071565b919091019291505056fea26469706673582212209b507c11bf1533913afc8e2860af060391ce0149dccc972368d2fd950082e55a64736f6c63430008100033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): L1CustomGatewayInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): L1CustomGateway;
}
export {};
