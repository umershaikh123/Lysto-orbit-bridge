import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface AbsInboxMockInterface extends utils.Interface {
    contractName: "AbsInboxMock";
    functions: {
        "activeOutbox()": FunctionFragment;
        "bridge()": FunctionFragment;
        "l2ToL1Sender()": FunctionFragment;
        "l2ToL1SenderMock()": FunctionFragment;
        "seqNum()": FunctionFragment;
        "setL2ToL1Sender(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "activeOutbox", values?: undefined): string;
    encodeFunctionData(functionFragment: "bridge", values?: undefined): string;
    encodeFunctionData(functionFragment: "l2ToL1Sender", values?: undefined): string;
    encodeFunctionData(functionFragment: "l2ToL1SenderMock", values?: undefined): string;
    encodeFunctionData(functionFragment: "seqNum", values?: undefined): string;
    encodeFunctionData(functionFragment: "setL2ToL1Sender", values: [string]): string;
    decodeFunctionResult(functionFragment: "activeOutbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l2ToL1Sender", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l2ToL1SenderMock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "seqNum", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setL2ToL1Sender", data: BytesLike): Result;
    events: {
        "InboxRetryableTicket(address,address,uint256,uint256,bytes)": EventFragment;
        "RefundAddresses(address,address)": EventFragment;
        "TicketData(uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "InboxRetryableTicket"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RefundAddresses"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TicketData"): EventFragment;
}
export type InboxRetryableTicketEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    string
], {
    from: string;
    to: string;
    value: BigNumber;
    maxGas: BigNumber;
    data: string;
}>;
export type InboxRetryableTicketEventFilter = TypedEventFilter<InboxRetryableTicketEvent>;
export type RefundAddressesEvent = TypedEvent<[
    string,
    string
], {
    excessFeeRefundAddress: string;
    callValueRefundAddress: string;
}>;
export type RefundAddressesEventFilter = TypedEventFilter<RefundAddressesEvent>;
export type TicketDataEvent = TypedEvent<[
    BigNumber
], {
    maxSubmissionCost: BigNumber;
}>;
export type TicketDataEventFilter = TypedEventFilter<TicketDataEvent>;
export interface AbsInboxMock extends BaseContract {
    contractName: "AbsInboxMock";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AbsInboxMockInterface;
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
        activeOutbox(overrides?: CallOverrides): Promise<[string]>;
        bridge(overrides?: CallOverrides): Promise<[string]>;
        l2ToL1Sender(overrides?: CallOverrides): Promise<[string]>;
        l2ToL1SenderMock(overrides?: CallOverrides): Promise<[string]>;
        seqNum(overrides?: CallOverrides): Promise<[BigNumber]>;
        setL2ToL1Sender(sender: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    activeOutbox(overrides?: CallOverrides): Promise<string>;
    bridge(overrides?: CallOverrides): Promise<string>;
    l2ToL1Sender(overrides?: CallOverrides): Promise<string>;
    l2ToL1SenderMock(overrides?: CallOverrides): Promise<string>;
    seqNum(overrides?: CallOverrides): Promise<BigNumber>;
    setL2ToL1Sender(sender: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        activeOutbox(overrides?: CallOverrides): Promise<string>;
        bridge(overrides?: CallOverrides): Promise<string>;
        l2ToL1Sender(overrides?: CallOverrides): Promise<string>;
        l2ToL1SenderMock(overrides?: CallOverrides): Promise<string>;
        seqNum(overrides?: CallOverrides): Promise<BigNumber>;
        setL2ToL1Sender(sender: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "InboxRetryableTicket(address,address,uint256,uint256,bytes)"(from?: null, to?: null, value?: null, maxGas?: null, data?: null): InboxRetryableTicketEventFilter;
        InboxRetryableTicket(from?: null, to?: null, value?: null, maxGas?: null, data?: null): InboxRetryableTicketEventFilter;
        "RefundAddresses(address,address)"(excessFeeRefundAddress?: null, callValueRefundAddress?: null): RefundAddressesEventFilter;
        RefundAddresses(excessFeeRefundAddress?: null, callValueRefundAddress?: null): RefundAddressesEventFilter;
        "TicketData(uint256)"(maxSubmissionCost?: null): TicketDataEventFilter;
        TicketData(maxSubmissionCost?: null): TicketDataEventFilter;
    };
    estimateGas: {
        activeOutbox(overrides?: CallOverrides): Promise<BigNumber>;
        bridge(overrides?: CallOverrides): Promise<BigNumber>;
        l2ToL1Sender(overrides?: CallOverrides): Promise<BigNumber>;
        l2ToL1SenderMock(overrides?: CallOverrides): Promise<BigNumber>;
        seqNum(overrides?: CallOverrides): Promise<BigNumber>;
        setL2ToL1Sender(sender: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        activeOutbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        l2ToL1Sender(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        l2ToL1SenderMock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        seqNum(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setL2ToL1Sender(sender: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
