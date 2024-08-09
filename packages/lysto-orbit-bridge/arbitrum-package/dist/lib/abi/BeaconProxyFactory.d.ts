import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface BeaconProxyFactoryInterface extends utils.Interface {
    contractName: "BeaconProxyFactory";
    functions: {
        "beacon()": FunctionFragment;
        "calculateExpectedAddress(bytes32)": FunctionFragment;
        "cloneableProxyHash()": FunctionFragment;
        "createProxy(bytes32)": FunctionFragment;
        "getSalt(address,bytes32)": FunctionFragment;
        "initialize(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "beacon", values?: undefined): string;
    encodeFunctionData(functionFragment: "calculateExpectedAddress", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "cloneableProxyHash", values?: undefined): string;
    encodeFunctionData(functionFragment: "createProxy", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getSalt", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string]): string;
    decodeFunctionResult(functionFragment: "beacon", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateExpectedAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cloneableProxyHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createProxy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSalt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    events: {};
}
export interface BeaconProxyFactory extends BaseContract {
    contractName: "BeaconProxyFactory";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BeaconProxyFactoryInterface;
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
        beacon(overrides?: CallOverrides): Promise<[string]>;
        "calculateExpectedAddress(bytes32)"(salt: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        "calculateExpectedAddress(address,bytes32)"(user: string, userSalt: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        cloneableProxyHash(overrides?: CallOverrides): Promise<[string]>;
        createProxy(userSalt: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getSalt(user: string, userSalt: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        initialize(_beacon: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    beacon(overrides?: CallOverrides): Promise<string>;
    "calculateExpectedAddress(bytes32)"(salt: BytesLike, overrides?: CallOverrides): Promise<string>;
    "calculateExpectedAddress(address,bytes32)"(user: string, userSalt: BytesLike, overrides?: CallOverrides): Promise<string>;
    cloneableProxyHash(overrides?: CallOverrides): Promise<string>;
    createProxy(userSalt: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getSalt(user: string, userSalt: BytesLike, overrides?: CallOverrides): Promise<string>;
    initialize(_beacon: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        beacon(overrides?: CallOverrides): Promise<string>;
        "calculateExpectedAddress(bytes32)"(salt: BytesLike, overrides?: CallOverrides): Promise<string>;
        "calculateExpectedAddress(address,bytes32)"(user: string, userSalt: BytesLike, overrides?: CallOverrides): Promise<string>;
        cloneableProxyHash(overrides?: CallOverrides): Promise<string>;
        createProxy(userSalt: BytesLike, overrides?: CallOverrides): Promise<string>;
        getSalt(user: string, userSalt: BytesLike, overrides?: CallOverrides): Promise<string>;
        initialize(_beacon: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        beacon(overrides?: CallOverrides): Promise<BigNumber>;
        "calculateExpectedAddress(bytes32)"(salt: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "calculateExpectedAddress(address,bytes32)"(user: string, userSalt: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        cloneableProxyHash(overrides?: CallOverrides): Promise<BigNumber>;
        createProxy(userSalt: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getSalt(user: string, userSalt: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_beacon: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        beacon(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "calculateExpectedAddress(bytes32)"(salt: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "calculateExpectedAddress(address,bytes32)"(user: string, userSalt: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cloneableProxyHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createProxy(userSalt: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getSalt(user: string, userSalt: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_beacon: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
