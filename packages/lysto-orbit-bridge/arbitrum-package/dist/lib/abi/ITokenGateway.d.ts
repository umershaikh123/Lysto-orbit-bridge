import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ITokenGatewayInterface extends utils.Interface {
    contractName: "ITokenGateway";
    functions: {
        "calculateL2TokenAddress(address)": FunctionFragment;
        "finalizeInboundTransfer(address,address,address,uint256,bytes)": FunctionFragment;
        "getOutboundCalldata(address,address,address,uint256,bytes)": FunctionFragment;
        "outboundTransfer(address,address,uint256,uint256,uint256,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "calculateL2TokenAddress", values: [string]): string;
    encodeFunctionData(functionFragment: "finalizeInboundTransfer", values: [string, string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "getOutboundCalldata", values: [string, string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "outboundTransfer", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    decodeFunctionResult(functionFragment: "calculateL2TokenAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finalizeInboundTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOutboundCalldata", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "outboundTransfer", data: BytesLike): Result;
    events: {};
}
export interface ITokenGateway extends BaseContract {
    contractName: "ITokenGateway";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ITokenGatewayInterface;
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
        calculateL2TokenAddress(l1ERC20: string, overrides?: CallOverrides): Promise<[string]>;
        finalizeInboundTransfer(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getOutboundCalldata(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        outboundTransfer(_token: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    calculateL2TokenAddress(l1ERC20: string, overrides?: CallOverrides): Promise<string>;
    finalizeInboundTransfer(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getOutboundCalldata(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<string>;
    outboundTransfer(_token: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        calculateL2TokenAddress(l1ERC20: string, overrides?: CallOverrides): Promise<string>;
        finalizeInboundTransfer(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        getOutboundCalldata(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<string>;
        outboundTransfer(_token: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        calculateL2TokenAddress(l1ERC20: string, overrides?: CallOverrides): Promise<BigNumber>;
        finalizeInboundTransfer(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getOutboundCalldata(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        outboundTransfer(_token: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        calculateL2TokenAddress(l1ERC20: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        finalizeInboundTransfer(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getOutboundCalldata(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        outboundTransfer(_token: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
