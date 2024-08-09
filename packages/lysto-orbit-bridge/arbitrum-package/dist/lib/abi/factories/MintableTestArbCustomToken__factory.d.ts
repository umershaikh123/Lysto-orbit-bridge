import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MintableTestArbCustomToken, MintableTestArbCustomTokenInterface } from "../MintableTestArbCustomToken";
type MintableTestArbCustomTokenConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MintableTestArbCustomToken__factory extends ContractFactory {
    constructor(...args: MintableTestArbCustomTokenConstructorParams);
    deploy(_l2Gateway: string, _l1Address: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MintableTestArbCustomToken>;
    getDeployTransaction(_l2Gateway: string, _l1Address: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MintableTestArbCustomToken;
    connect(signer: Signer): MintableTestArbCustomToken__factory;
    static readonly contractName: "MintableTestArbCustomToken";
    readonly contractName: "MintableTestArbCustomToken";
    static readonly bytecode = "0x60806040523480156200001157600080fd5b5060405162001e4338038062001e4383398101604081905262000034916200051d565b60005482908290610100900460ff1615808015620000595750600054600160ff909116105b806200008957506200007630620001cf60201b6200071f1760201c565b15801562000089575060005460ff166001145b620000e15760405162461bcd60e51b815260206004820152602e602482015260008051602062001de383398151915260448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff19166001179055801562000105576000805461ff0019166101001790555b80156200013b576000805461ff00191690556040516001815260008051602062001e238339815191529060200160405180910390a15b5060cc80546001600160a01b038085166001600160a01b03199283161790925560cd805492841692909116919091179055604080518082018252600f81526e2a32b9ba21bab9ba37b6aa37b5b2b760891b6020808301919091528251808401909352600483526321a0a92160e11b83820152620001c592906012906200072e620001de821b17901c565b50505050620006c6565b6001600160a01b03163b151590565b600054610100900460ff1615808015620001ff5750600054600160ff909116105b806200022f57506200021c30620001cf60201b6200071f1760201c565b1580156200022f575060005460ff166001145b620002835760405162461bcd60e51b815260206004820152602e602482015260008051602062001de383398151915260448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401620000d8565b6000805460ff191660011790558015620002a7576000805461ff0019166101001790555b620002b28462000309565b620002be848462000393565b6038805460ff191660ff8416179055801562000303576000805461ff00191690556040516001815260008051602062001e238339815191529060200160405180910390a15b50505050565b600054610100900460ff16620003655760405162461bcd60e51b815260206004820152602b602482015260008051602062001e0383398151915260448201526a6e697469616c697a696e6760a81b6064820152608401620000d8565b6200039081604051806040016040528060018152602001603160f81b815250620003ff60201b60201c565b50565b600054610100900460ff16620003ef5760405162461bcd60e51b815260206004820152602b602482015260008051602062001e0383398151915260448201526a6e697469616c697a696e6760a81b6064820152608401620000d8565b620003fb828262000475565b5050565b600054610100900460ff166200045b5760405162461bcd60e51b815260206004820152602b602482015260008051602062001e0383398151915260448201526a6e697469616c697a696e6760a81b6064820152608401620000d8565b815160209283012081519190920120606591909155606655565b600054610100900460ff16620004d15760405162461bcd60e51b815260206004820152602b602482015260008051602062001e0383398151915260448201526a6e697469616c697a696e6760a81b6064820152608401620000d8565b6036620004df8382620005fa565b506037620004ee8282620005fa565b50506038805460ff1916601217905550565b80516001600160a01b03811681146200051857600080fd5b919050565b600080604083850312156200053157600080fd5b6200053c8362000500565b91506200054c6020840162000500565b90509250929050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200058057607f821691505b602082108103620005a157634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620005f557600081815260208120601f850160051c81016020861015620005d05750805b601f850160051c820191505b81811015620005f157828155600101620005dc565b5050505b505050565b81516001600160401b0381111562000616576200061662000555565b6200062e816200062784546200056b565b84620005a7565b602080601f8311600181146200066657600084156200064d5750858301515b600019600386901b1c1916600185901b178555620005f1565b600085815260208120601f198616915b82811015620006975788860151825594840194600190910190840162000676565b5085821015620006b65787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61170d80620006d66000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80637ecebe00116100b8578063a708acce1161007c578063a708acce14610221578063a9059cbb1461028f578063c2eeeebd146102a2578063d505accf146102b5578063dd226802146102c8578063dd62ed3e146102db57600080fd5b80637ecebe00146102235780638c2a993e146102365780638fa74a0e1461024957806395d89b4114610274578063a457c2d71461027c57600080fd5b80633644e515116100ff5780633644e515146101b757806339509351146101bf5780634000aea0146101d257806370a08231146101e557806374f4f5471461020e57600080fd5b806306fdde031461013c578063095ea7b31461015a57806318160ddd1461017d57806323b872dd1461018f578063313ce567146101a2575b600080fd5b6101446102ee565b604051610151919061123c565b60405180910390f35b61016d610168366004611272565b610380565b6040519015158152602001610151565b6035545b604051908152602001610151565b61016d61019d36600461129c565b61039a565b60385460405160ff9091168152602001610151565b6101816103be565b61016d6101cd366004611272565b6103cd565b61016d6101e03660046112ee565b6103ef565b6101816101f33660046113b9565b6001600160a01b031660009081526033602052604090205490565b61022161021c366004611272565b610465565b005b6101816102313660046113b9565b6104a6565b610221610244366004611272565b6104c4565b60cc5461025c906001600160a01b031681565b6040516001600160a01b039091168152602001610151565b6101446104f8565b61016d61028a366004611272565b610507565b61016d61029d366004611272565b610582565b60cd5461025c906001600160a01b031681565b6102216102c33660046113d4565b610590565b6102216102d6366004611272565b6104ee565b6101816102e9366004611447565b6106f4565b6060603680546102fd9061147a565b80601f01602080910402602001604051908101604052809291908181526020018280546103299061147a565b80156103765780601f1061034b57610100808354040283529160200191610376565b820191906000526020600020905b81548152906001019060200180831161035957829003601f168201915b5050505050905090565b60003361038e818585610863565b60019150505b92915050565b6000336103a8858285610988565b6103b38585856109fc565b506001949350505050565b60006103c8610b95565b905090565b60003361038e8185856103e083836106f4565b6103ea91906114ae565b610863565b60006103fb8484610582565b50836001600160a01b0316336001600160a01b03167fe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c1685856040516104419291906114cf565b60405180910390a3833b1561045b5761045b848484610c10565b5060019392505050565b60cc546001600160a01b031633146104985760405162461bcd60e51b815260040161048f906114f0565b60405180910390fd5b6104a28282610c7a565b5050565b6001600160a01b038116600090815260996020526040812054610394565b60cc546001600160a01b031633146104ee5760405162461bcd60e51b815260040161048f906114f0565b6104a28282610d99565b6060603780546102fd9061147a565b6000338161051582866106f4565b9050838110156105755760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161048f565b6103b38286868403610863565b60003361038e8185856109fc565b834211156105e05760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e65000000604482015260640161048f565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c988888861060f8c610e48565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e001604051602081830303815290604052805190602001209050600061066a82610e70565b9050600061067a82878787610ebe565b9050896001600160a01b0316816001600160a01b0316146106dd5760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015260640161048f565b6106e88a8a8a610863565b50505050505050505050565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b6001600160a01b03163b151590565b600054610100900460ff161580801561074e5750600054600160ff909116105b8061076f575061075d3061071f565b15801561076f575060005460ff166001145b6107d25760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161048f565b6000805460ff1916600117905580156107f5576000805461ff0019166101001790555b6107fe84610ee6565b6108088484610f33565b6038805460ff191660ff8416179055801561085d576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50505050565b6001600160a01b0383166108c55760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161048f565b6001600160a01b0382166109265760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161048f565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b600061099484846106f4565b9050600019811461085d57818110156109ef5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161048f565b61085d8484848403610863565b6001600160a01b038316610a605760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161048f565b6001600160a01b038216610ac25760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161048f565b6001600160a01b03831660009081526033602052604090205481811015610b3a5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161048f565b6001600160a01b0380851660008181526033602052604080822086860390559286168082529083902080548601905591516000805160206116b883398151915290610b889086815260200190565b60405180910390a361085d565b60006103c87f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f610bc460655490565b6066546040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b604051635260769b60e11b815283906001600160a01b0382169063a4c0ed3690610c4290339087908790600401611518565b600060405180830381600087803b158015610c5c57600080fd5b505af1158015610c70573d6000803e3d6000fd5b5050505050505050565b6001600160a01b038216610cda5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161048f565b6001600160a01b03821660009081526033602052604090205481811015610d4e5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161048f565b6001600160a01b03831660008181526033602090815260408083208686039055603580548790039055518581529192916000805160206116b8833981519152910161097b565b505050565b6001600160a01b038216610def5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161048f565b8060356000828254610e0191906114ae565b90915550506001600160a01b0382166000818152603360209081526040808320805486019055518481526000805160206116b8833981519152910160405180910390a35050565b6001600160a01b03811660009081526099602052604090208054600181018255905b50919050565b6000610394610e7d610b95565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b6000806000610ecf87878787610f64565b91509150610edc8161101e565b5095945050505050565b600054610100900460ff16610f0d5760405162461bcd60e51b815260040161048f90611548565b610f3081604051806040016040528060018152602001603160f81b815250611163565b50565b600054610100900460ff16610f5a5760405162461bcd60e51b815260040161048f90611548565b6104a282826111a4565b6000806fa2a8918ca85bafe22016d0b997e4df60600160ff1b03831115610f915750600090506003611015565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610fe5573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661100e57600060019250925050611015565b9150600090505b94509492505050565b600081600481111561103257611032611593565b0361103a5750565b600181600481111561104e5761104e611593565b036110965760405162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b604482015260640161048f565b60028160048111156110aa576110aa611593565b036110f75760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161048f565b600381600481111561110b5761110b611593565b03610f305760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161048f565b600054610100900460ff1661118a5760405162461bcd60e51b815260040161048f90611548565b815160209283012081519190920120606591909155606655565b600054610100900460ff166111cb5760405162461bcd60e51b815260040161048f90611548565b60366111d783826115f7565b5060376111e482826115f7565b50506038805460ff1916601217905550565b6000815180845260005b8181101561121c57602081850181015186830182015201611200565b506000602082860101526020601f19601f83011685010191505092915050565b60208152600061124f60208301846111f6565b9392505050565b80356001600160a01b038116811461126d57600080fd5b919050565b6000806040838503121561128557600080fd5b61128e83611256565b946020939093013593505050565b6000806000606084860312156112b157600080fd5b6112ba84611256565b92506112c860208501611256565b9150604084013590509250925092565b634e487b7160e01b600052604160045260246000fd5b60008060006060848603121561130357600080fd5b61130c84611256565b925060208401359150604084013567ffffffffffffffff8082111561133057600080fd5b818601915086601f83011261134457600080fd5b813581811115611356576113566112d8565b604051601f8201601f19908116603f0116810190838211818310171561137e5761137e6112d8565b8160405282815289602084870101111561139757600080fd5b8260208601602083013760006020848301015280955050505050509250925092565b6000602082840312156113cb57600080fd5b61124f82611256565b600080600080600080600060e0888a0312156113ef57600080fd5b6113f888611256565b965061140660208901611256565b95506040880135945060608801359350608088013560ff8116811461142a57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561145a57600080fd5b61146383611256565b915061147160208401611256565b90509250929050565b600181811c9082168061148e57607f821691505b602082108103610e6a57634e487b7160e01b600052602260045260246000fd5b8082018082111561039457634e487b7160e01b600052601160045260246000fd5b8281526040602082015260006114e860408301846111f6565b949350505050565b6020808252600e908201526d4f4e4c595f6c324741544557415960901b604082015260600190565b60018060a01b038416815282602082015260606040820152600061153f60608301846111f6565b95945050505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b634e487b7160e01b600052602160045260246000fd5b601f821115610d9457600081815260208120601f850160051c810160208610156115d05750805b601f850160051c820191505b818110156115ef578281556001016115dc565b505050505050565b815167ffffffffffffffff811115611611576116116112d8565b6116258161161f845461147a565b846115a9565b602080601f83116001811461165a57600084156116425750858301515b600019600386901b1c1916600185901b1785556115ef565b600085815260208120601f198616915b828110156116895788860151825594840194600190910190840161166a565b50858210156116a75787850151600019600388901b60f8161c191681555b5050505050600190811b0190555056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212206c91c0d2b165e49c6bb15ec01caa94d39bff211166fbfb734f1f686b0e265d2664736f6c63430008100033496e697469616c697a61626c653a20636f6e747261637420697320616c726561496e697469616c697a61626c653a20636f6e7472616374206973206e6f7420697f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
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
    static createInterface(): MintableTestArbCustomTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MintableTestArbCustomToken;
}
export {};
