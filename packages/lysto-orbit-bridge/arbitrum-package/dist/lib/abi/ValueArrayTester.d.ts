import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ValueArrayTesterInterface extends utils.Interface {
    contractName: "ValueArrayTester";
    functions: {
        "test()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "test", values?: undefined): string;
    decodeFunctionResult(functionFragment: "test", data: BytesLike): Result;
    events: {};
}
export interface ValueArrayTester extends BaseContract {
    contractName: "ValueArrayTester";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ValueArrayTesterInterface;
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
        test(overrides?: CallOverrides): Promise<[void]>;
    };
    test(overrides?: CallOverrides): Promise<void>;
    callStatic: {
        test(overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        test(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        test(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
