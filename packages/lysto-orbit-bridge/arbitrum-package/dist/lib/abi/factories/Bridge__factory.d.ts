import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Bridge, BridgeInterface } from "../Bridge";
type BridgeConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Bridge__factory extends ContractFactory {
    constructor(...args: BridgeConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Bridge>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Bridge;
    connect(signer: Signer): Bridge__factory;
    static readonly contractName: "Bridge";
    readonly contractName: "Bridge";
    static readonly bytecode = "0x60a06040523060805234801561001457600080fd5b506080516118186100306000396000610db801526118186000f3fe60806040526004361061013f5760003560e01c80639e5d4c49116100b6578063d5719dc21161006f578063d5719dc214610393578063e76f5c8d146103b3578063e77145f4146101d8578063eca067ad146103d3578063ee35f327146103e8578063f81ff3b31461040857600080fd5b80639e5d4c49146102d0578063ab5d8943146102fe578063ae60bd1314610313578063c4d66de814610333578063cb23bcb514610353578063cee3d7281461037357600080fd5b80635fca4a16116101085780635fca4a16146101fa5780637a88b1071461021057806386598a56146102305780638db5993b14610270578063919cc70614610283578063945e1147146102a357600080fd5b806284120c1461014457806316bf557914610168578063413b35bd1461018857806347fb24c5146101b85780634f61f850146101da575b600080fd5b34801561015057600080fd5b506007545b6040519081526020015b60405180910390f35b34801561017457600080fd5b506101556101833660046114cc565b610428565b34801561019457600080fd5b506101a86101a33660046114fa565b610449565b604051901515815260200161015f565b3480156101c457600080fd5b506101d86101d3366004611517565b61046a565b005b3480156101e657600080fd5b506101d86101f53660046114fa565b610760565b34801561020657600080fd5b50610155600a5481565b34801561021c57600080fd5b5061015561022b366004611555565b610885565b34801561023c57600080fd5b5061025061024b366004611581565b6108cb565b60408051948552602085019390935291830152606082015260800161015f565b61015561027e3660046115b3565b610a32565b34801561028f57600080fd5b506101d861029e3660046114fa565b610a48565b3480156102af57600080fd5b506102c36102be3660046114cc565b610b62565b60405161015f91906115fa565b3480156102dc57600080fd5b506102f06102eb36600461160e565b610b8c565b60405161015f9291906116c3565b34801561030a57600080fd5b506102c3610cc1565b34801561031f57600080fd5b506101a861032e3660046114fa565b610ce7565b34801561033f57600080fd5b506101d861034e3660046114fa565b610d09565b34801561035f57600080fd5b506008546102c3906001600160a01b031681565b34801561037f57600080fd5b506101d861038e366004611517565b610e7d565b34801561039f57600080fd5b506101556103ae3660046114cc565b611196565b3480156103bf57600080fd5b506102c36103ce3660046114cc565b6111a6565b3480156103df57600080fd5b50600654610155565b3480156103f457600080fd5b506009546102c3906001600160a01b031681565b34801561041457600080fd5b506101d86104233660046114cc565b6111b6565b6007818154811061043857600080fd5b600091825260209091200154905081565b6001600160a01b031660009081526002602052604090206001015460ff1690565b6008546001600160a01b031633146105425760085460408051638da5cb5b60e01b815290516000926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b1580156104c157600080fd5b505afa1580156104d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f991906116ff565b9050336001600160a01b0382161461054057600854604051630739600760e01b81526105379133916001600160a01b0390911690849060040161171c565b60405180910390fd5b505b6001600160a01b0382166000818152600160208181526040928390209182015492518515158152919360ff90931692917f6675ce8882cb71637de5903a193d218cc0544be9c0650cb83e0955f6aa2bf521910160405180910390a282151581151514156105af5750505050565b821561063d57604080518082018252600380548252600160208084018281526001600160a01b038a166000818152928490529582209451855551938201805460ff1916941515949094179093558154908101825591527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0180546001600160a01b0319169091179055610759565b6003805461064d9060019061173f565b8154811061065d5761065d611764565b6000918252602090912001548254600380546001600160a01b0390931692909190811061068c5761068c611764565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555081600001546001600060038560000154815481106106da576106da611764565b60009182526020808320909101546001600160a01b0316835282019290925260400190205560038054806107105761071061177a565b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b03861682526001908190526040822091825501805460ff191690555b50505b5050565b6008546001600160a01b0316331461082f5760085460408051638da5cb5b60e01b815290516000926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b1580156107b757600080fd5b505afa1580156107cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ef91906116ff565b9050336001600160a01b0382161461082d57600854604051630739600760e01b81526105379133916001600160a01b0390911690849060040161171c565b505b600980546001600160a01b0319166001600160a01b0383161790556040517f8c1e6003ed33ca6748d4ad3dd4ecc949065c89dceb31fdf546a5289202763c6a9061087a9083906115fa565b60405180910390a150565b6009546000906001600160a01b031633146108b5573360405163223e13c160e21b815260040161053791906115fa565b6108c4600d844342488761128a565b9392505050565b6009546000908190819081906001600160a01b03163314610901573360405163223e13c160e21b815260040161053791906115fa565b85600a541415801561091257508515155b801561091f5750600a5415155b1561094b57600a5460405163e2051feb60e01b8152600481019190915260248101879052604401610537565b600a85905560075493508315610989576007805461096b9060019061173f565b8154811061097b5761097b611764565b906000526020600020015492505b86156109ba57600661099c60018961173f565b815481106109ac576109ac611764565b906000526020600020015491505b60408051602081018590529081018990526060810183905260800160408051601f198184030181529190528051602090910120600780546001810182556000919091527fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c688018190559398929750909550919350915050565b6000610a4084848434611419565b949350505050565b6008546001600160a01b03163314610b175760085460408051638da5cb5b60e01b815290516000926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b158015610a9f57600080fd5b505afa158015610ab3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad791906116ff565b9050336001600160a01b03821614610b1557600854604051630739600760e01b81526105379133916001600160a01b0390911690849060040161171c565b505b600880546001600160a01b0319166001600160a01b0383161790556040517fae1f5aa15f6ff844896347ceca2a3c24c8d3a27785efdeacd581a0a95172784a9061087a9083906115fa565b60048181548110610b7257600080fd5b6000918252602090912001546001600160a01b0316905081565b60006060610b9933610449565b610bb857336040516332ea82ab60e01b815260040161053791906115fa565b8215801590610bcf57506001600160a01b0386163b155b15610bef578560405163b5cf5b8f60e01b815260040161053791906115fa565b600580546001600160a01b031981163317909155604080516020601f87018190048102820181019092528581526001600160a01b0390921691610c509189918991899089908190840183828082843760009201919091525061145d92505050565b600580546001600160a01b0319166001600160a01b038581169190911790915560405192955090935088169033907f2d9d115ef3e4a606d698913b1eae831a3cdfe20d9a83d48007b0526749c3d46690610caf908a908a908a90611790565b60405180910390a35094509492505050565b6005546000906001600160a01b0390811690811415610ce257600091505090565b919050565b6001600160a01b03166000908152600160208190526040909120015460ff1690565b600054610100900460ff16610d245760005460ff1615610d28565b303b155b610d8b5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610537565b600054610100900460ff16158015610dad576000805461ffff19166101011790555b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415610e3b5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608401610537565b600580546001600160a01b036001600160a01b0319918216811790925560088054909116918416919091179055801561075c576000805461ff00191690555050565b6008546001600160a01b03163314610f4c5760085460408051638da5cb5b60e01b815290516000926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b158015610ed457600080fd5b505afa158015610ee8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f0c91906116ff565b9050336001600160a01b03821614610f4a57600854604051630739600760e01b81526105379133916001600160a01b0390911690849060040161171c565b505b6001600160a01b038281161415610f78578160405163077abed160e41b815260040161053791906115fa565b6001600160a01b038216600081815260026020908152604091829020600181015492518515158152909360ff90931692917f49477e7356dbcb654ab85d7534b50126772d938130d1350e23e2540370c8dffa910160405180910390a28215158115151415610fe65750505050565b821561107557604080518082018252600480548252600160208084018281526001600160a01b038a16600081815260029093529582209451855551938201805460ff1916941515949094179093558154908101825591527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0180546001600160a01b0319169091179055610759565b600480546110859060019061173f565b8154811061109557611095611764565b6000918252602090912001548254600480546001600160a01b039093169290919081106110c4576110c4611764565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550816000015460026000600485600001548154811061111257611112611764565b60009182526020808320909101546001600160a01b0316835282019290925260400190205560048054806111485761114861177a565b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b03861682526002905260408120908155600101805460ff1916905550505050565b6006818154811061043857600080fd5b60038181548110610b7257600080fd5b6008546001600160a01b031633146112855760085460408051638da5cb5b60e01b815290516000926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b15801561120d57600080fd5b505afa158015611221573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061124591906116ff565b9050336001600160a01b0382161461128357600854604051630739600760e01b81526105379133916001600160a01b0390911690849060040161171c565b505b600a55565b600654604080516001600160f81b031960f88a901b166020808301919091526bffffffffffffffffffffffff1960608a901b1660218301526001600160c01b031960c089811b8216603585015288901b16603d830152604582018490526065820186905260858083018690528351808403909101815260a59092019092528051910120600091906000821561134457600661132660018561173f565b8154811061133657611336611764565b906000526020600020015490505b6040805160208082018490528183018590528251808303840181526060830180855281519190920120600680546001810182556000919091527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f015533905260ff8c1660808201526001600160a01b038b1660a082015260c0810187905260e0810188905267ffffffffffffffff89166101008201529051829185917f5e3c1311ea442664e8b1611bfabef659120ea7a0a2cfc0667700bebc69cbffe1918190036101200190a3509098975050505050505050565b600061142433610ce7565b611443573360405163b6c60ea360e01b815260040161053791906115fa565b600061145386864342488961128a565b9695505050505050565b60006060846001600160a01b0316848460405161147a91906117c6565b60006040518083038185875af1925050503d80600081146114b7576040519150601f19603f3d011682016040523d82523d6000602084013e6114bc565b606091505b5090969095509350505050565b50565b6000602082840312156114de57600080fd5b5035919050565b6001600160a01b03811681146114c957600080fd5b60006020828403121561150c57600080fd5b81356108c4816114e5565b6000806040838503121561152a57600080fd5b8235611535816114e5565b91506020830135801515811461154a57600080fd5b809150509250929050565b6000806040838503121561156857600080fd5b8235611573816114e5565b946020939093013593505050565b6000806000806080858703121561159757600080fd5b5050823594602084013594506040840135936060013592509050565b6000806000606084860312156115c857600080fd5b833560ff811681146115d957600080fd5b925060208401356115e9816114e5565b929592945050506040919091013590565b6001600160a01b0391909116815260200190565b6000806000806060858703121561162457600080fd5b843561162f816114e5565b935060208501359250604085013567ffffffffffffffff8082111561165357600080fd5b818701915087601f83011261166757600080fd5b81358181111561167657600080fd5b88602082850101111561168857600080fd5b95989497505060200194505050565b60005b838110156116b257818101518382015260200161169a565b838111156107595750506000910152565b821515815260406020820152600082518060408401526116ea816060850160208701611697565b601f01601f1916919091016060019392505050565b60006020828403121561171157600080fd5b81516108c4816114e5565b6001600160a01b0393841681529183166020830152909116604082015260600190565b60008282101561175f57634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fd5b83815260406020820152816040820152818360608301376000818301606090810191909152601f909201601f1916010192915050565b600082516117d8818460208701611697565b919091019291505056fea264697066735822122036229552e25569ee81b36ff0079ed482a0f5114c34695a273717057e68b7c22c64736f6c63430008090033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        anonymous?: undefined;
        outputs?: undefined;
        stateMutability?: undefined;
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
    static createInterface(): BridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Bridge;
}
export {};
