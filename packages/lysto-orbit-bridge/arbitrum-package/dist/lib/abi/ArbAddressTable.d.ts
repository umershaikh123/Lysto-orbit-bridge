import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ArbAddressTableInterface extends utils.Interface {
    contractName: "ArbAddressTable";
    functions: {
        "addressExists(address)": FunctionFragment;
        "compress(address)": FunctionFragment;
        "decompress(bytes,uint256)": FunctionFragment;
        "lookup(address)": FunctionFragment;
        "lookupIndex(uint256)": FunctionFragment;
        "register(address)": FunctionFragment;
        "size()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "addressExists", values: [string]): string;
    encodeFunctionData(functionFragment: "compress", values: [string]): string;
    encodeFunctionData(functionFragment: "decompress", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "lookup", values: [string]): string;
    encodeFunctionData(functionFragment: "lookupIndex", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "register", values: [string]): string;
    encodeFunctionData(functionFragment: "size", values?: undefined): string;
    decodeFunctionResult(functionFragment: "addressExists", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decompress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lookupIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "size", data: BytesLike): Result;
    events: {};
}
export interface ArbAddressTable extends BaseContract {
    contractName: "ArbAddressTable";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ArbAddressTableInterface;
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
        addressExists(addr: string, overrides?: CallOverrides): Promise<[boolean]>;
        compress(addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        decompress(buf: BytesLike, offset: BigNumberish, overrides?: CallOverrides): Promise<[string, BigNumber]>;
        lookup(addr: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        lookupIndex(index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        register(addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        size(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    addressExists(addr: string, overrides?: CallOverrides): Promise<boolean>;
    compress(addr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    decompress(buf: BytesLike, offset: BigNumberish, overrides?: CallOverrides): Promise<[string, BigNumber]>;
    lookup(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
    lookupIndex(index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    register(addr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    size(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        addressExists(addr: string, overrides?: CallOverrides): Promise<boolean>;
        compress(addr: string, overrides?: CallOverrides): Promise<string>;
        decompress(buf: BytesLike, offset: BigNumberish, overrides?: CallOverrides): Promise<[string, BigNumber]>;
        lookup(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        lookupIndex(index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        register(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        size(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        addressExists(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        compress(addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        decompress(buf: BytesLike, offset: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        lookup(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        lookupIndex(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        register(addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        size(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addressExists(addr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        compress(addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        decompress(buf: BytesLike, offset: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lookup(addr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lookupIndex(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        register(addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        size(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
