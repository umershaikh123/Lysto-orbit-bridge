import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ArbSysMockInterface extends utils.Interface {
    contractName: "ArbSysMock";
    functions: {
        "sendTxToL1(address,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "sendTxToL1", values: [string, BytesLike]): string;
    decodeFunctionResult(functionFragment: "sendTxToL1", data: BytesLike): Result;
    events: {
        "ArbSysL2ToL1Tx(address,address,uint256,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ArbSysL2ToL1Tx"): EventFragment;
}
export type ArbSysL2ToL1TxEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string
], {
    from: string;
    to: string;
    value: BigNumber;
    data: string;
}>;
export type ArbSysL2ToL1TxEventFilter = TypedEventFilter<ArbSysL2ToL1TxEvent>;
export interface ArbSysMock extends BaseContract {
    contractName: "ArbSysMock";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ArbSysMockInterface;
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
        sendTxToL1(destination: string, calldataForL1: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    sendTxToL1(destination: string, calldataForL1: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        sendTxToL1(destination: string, calldataForL1: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "ArbSysL2ToL1Tx(address,address,uint256,bytes)"(from?: null, to?: null, value?: null, data?: null): ArbSysL2ToL1TxEventFilter;
        ArbSysL2ToL1Tx(from?: null, to?: null, value?: null, data?: null): ArbSysL2ToL1TxEventFilter;
    };
    estimateGas: {
        sendTxToL1(destination: string, calldataForL1: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        sendTxToL1(destination: string, calldataForL1: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
