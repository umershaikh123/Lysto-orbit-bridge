import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { L2Called, L2CalledInterface } from "../L2Called";
type L2CalledConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class L2Called__factory extends ContractFactory {
    constructor(...args: L2CalledConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<L2Called>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): L2Called;
    connect(signer: Signer): L2Called__factory;
    static readonly contractName: "L2Called";
    readonly contractName: "L2Called";
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610243806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80632cf07f821461003b578063a4c0ed3614610050575b600080fd5b61004e61004936600461015f565b610063565b005b61004e61005e366004610178565b610099565b6040518181527ffea238a9794376fb3707dbbabe56f0fad5e4110a7839485387c458f2d1aa5d509060200160405180910390a150565b60006100a78284018461015f565b9050806005036100bf576100ba81610063565b610158565b8060070361010c5760405162461bcd60e51b815260206004820152601560248201527473686f756c64206661696c2062656361757365203760581b60448201526064015b60405180910390fd5b80600903610122575b60005a1161011557610158565b60405162461bcd60e51b815260206004820152600b60248201526a1cda1bdd5b190819985a5b60aa1b6044820152606401610103565b5050505050565b60006020828403121561017157600080fd5b5035919050565b6000806000806060858703121561018e57600080fd5b84356001600160a01b03811681146101a557600080fd5b935060208501359250604085013567ffffffffffffffff808211156101c957600080fd5b818701915087601f8301126101dd57600080fd5b8135818111156101ec57600080fd5b8860208285010111156101fe57600080fd5b9598949750506020019450505056fea26469706673582212209b1666e342cf53f48c18680a240c000a367af15bbef1b3eb54c4b6ff67d1ec3264736f6c63430008100033";
    static readonly abi: ({
        inputs: never[];
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
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): L2CalledInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): L2Called;
}
export {};
