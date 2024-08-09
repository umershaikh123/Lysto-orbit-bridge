import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface HashProofHelperInterface extends utils.Interface {
    contractName: "HashProofHelper";
    functions: {
        "clearSplitProof()": FunctionFragment;
        "getPreimagePart(bytes32,uint64)": FunctionFragment;
        "keccakStates(address)": FunctionFragment;
        "proveWithFullPreimage(bytes,uint64)": FunctionFragment;
        "proveWithSplitPreimage(bytes,uint64,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "clearSplitProof", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPreimagePart", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "keccakStates", values: [string]): string;
    encodeFunctionData(functionFragment: "proveWithFullPreimage", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "proveWithSplitPreimage", values: [BytesLike, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "clearSplitProof", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPreimagePart", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "keccakStates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proveWithFullPreimage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proveWithSplitPreimage", data: BytesLike): Result;
    events: {
        "PreimagePartProven(bytes32,uint64,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "PreimagePartProven"): EventFragment;
}
export type PreimagePartProvenEvent = TypedEvent<[
    string,
    BigNumber,
    string
], {
    fullHash: string;
    offset: BigNumber;
    part: string;
}>;
export type PreimagePartProvenEventFilter = TypedEventFilter<PreimagePartProvenEvent>;
export interface HashProofHelper extends BaseContract {
    contractName: "HashProofHelper";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: HashProofHelperInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        clearSplitProof(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getPreimagePart(fullHash: BytesLike, offset: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        keccakStates(arg0: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            BigNumber
        ] & {
            offset: BigNumber;
            part: string;
            length: BigNumber;
        }>;
        proveWithFullPreimage(data: BytesLike, offset: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        proveWithSplitPreimage(data: BytesLike, offset: BigNumberish, flags: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    clearSplitProof(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getPreimagePart(fullHash: BytesLike, offset: BigNumberish, overrides?: CallOverrides): Promise<string>;
    keccakStates(arg0: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        string,
        BigNumber
    ] & {
        offset: BigNumber;
        part: string;
        length: BigNumber;
    }>;
    proveWithFullPreimage(data: BytesLike, offset: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    proveWithSplitPreimage(data: BytesLike, offset: BigNumberish, flags: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        clearSplitProof(overrides?: CallOverrides): Promise<void>;
        getPreimagePart(fullHash: BytesLike, offset: BigNumberish, overrides?: CallOverrides): Promise<string>;
        keccakStates(arg0: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            BigNumber
        ] & {
            offset: BigNumber;
            part: string;
            length: BigNumber;
        }>;
        proveWithFullPreimage(data: BytesLike, offset: BigNumberish, overrides?: CallOverrides): Promise<string>;
        proveWithSplitPreimage(data: BytesLike, offset: BigNumberish, flags: BigNumberish, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "PreimagePartProven(bytes32,uint64,bytes)"(fullHash?: BytesLike | null, offset?: BigNumberish | null, part?: null): PreimagePartProvenEventFilter;
        PreimagePartProven(fullHash?: BytesLike | null, offset?: BigNumberish | null, part?: null): PreimagePartProvenEventFilter;
    };
    estimateGas: {
        clearSplitProof(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getPreimagePart(fullHash: BytesLike, offset: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        keccakStates(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        proveWithFullPreimage(data: BytesLike, offset: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        proveWithSplitPreimage(data: BytesLike, offset: BigNumberish, flags: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        clearSplitProof(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getPreimagePart(fullHash: BytesLike, offset: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        keccakStates(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proveWithFullPreimage(data: BytesLike, offset: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        proveWithSplitPreimage(data: BytesLike, offset: BigNumberish, flags: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
