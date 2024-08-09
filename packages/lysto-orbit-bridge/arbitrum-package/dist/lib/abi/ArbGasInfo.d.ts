import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ArbGasInfoInterface extends utils.Interface {
    contractName: "ArbGasInfo";
    functions: {
        "getAmortizedCostCapBips()": FunctionFragment;
        "getCurrentTxL1GasFees()": FunctionFragment;
        "getGasAccountingParams()": FunctionFragment;
        "getGasBacklog()": FunctionFragment;
        "getGasBacklogTolerance()": FunctionFragment;
        "getL1BaseFeeEstimate()": FunctionFragment;
        "getL1BaseFeeEstimateInertia()": FunctionFragment;
        "getL1FeesAvailable()": FunctionFragment;
        "getL1GasPriceEstimate()": FunctionFragment;
        "getL1PricingSurplus()": FunctionFragment;
        "getL1RewardRate()": FunctionFragment;
        "getL1RewardRecipient()": FunctionFragment;
        "getMinimumGasPrice()": FunctionFragment;
        "getPerBatchGasCharge()": FunctionFragment;
        "getPricesInArbGas()": FunctionFragment;
        "getPricesInArbGasWithAggregator(address)": FunctionFragment;
        "getPricesInWei()": FunctionFragment;
        "getPricesInWeiWithAggregator(address)": FunctionFragment;
        "getPricingInertia()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "getAmortizedCostCapBips", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCurrentTxL1GasFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGasAccountingParams", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGasBacklog", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGasBacklogTolerance", values?: undefined): string;
    encodeFunctionData(functionFragment: "getL1BaseFeeEstimate", values?: undefined): string;
    encodeFunctionData(functionFragment: "getL1BaseFeeEstimateInertia", values?: undefined): string;
    encodeFunctionData(functionFragment: "getL1FeesAvailable", values?: undefined): string;
    encodeFunctionData(functionFragment: "getL1GasPriceEstimate", values?: undefined): string;
    encodeFunctionData(functionFragment: "getL1PricingSurplus", values?: undefined): string;
    encodeFunctionData(functionFragment: "getL1RewardRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "getL1RewardRecipient", values?: undefined): string;
    encodeFunctionData(functionFragment: "getMinimumGasPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPerBatchGasCharge", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPricesInArbGas", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPricesInArbGasWithAggregator", values: [string]): string;
    encodeFunctionData(functionFragment: "getPricesInWei", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPricesInWeiWithAggregator", values: [string]): string;
    encodeFunctionData(functionFragment: "getPricingInertia", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getAmortizedCostCapBips", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentTxL1GasFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGasAccountingParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGasBacklog", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGasBacklogTolerance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getL1BaseFeeEstimate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getL1BaseFeeEstimateInertia", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getL1FeesAvailable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getL1GasPriceEstimate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getL1PricingSurplus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getL1RewardRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getL1RewardRecipient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMinimumGasPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPerBatchGasCharge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPricesInArbGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPricesInArbGasWithAggregator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPricesInWei", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPricesInWeiWithAggregator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPricingInertia", data: BytesLike): Result;
    events: {};
}
export interface ArbGasInfo extends BaseContract {
    contractName: "ArbGasInfo";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ArbGasInfoInterface;
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
        getAmortizedCostCapBips(overrides?: CallOverrides): Promise<[BigNumber]>;
        getCurrentTxL1GasFees(overrides?: CallOverrides): Promise<[BigNumber]>;
        getGasAccountingParams(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        getGasBacklog(overrides?: CallOverrides): Promise<[BigNumber]>;
        getGasBacklogTolerance(overrides?: CallOverrides): Promise<[BigNumber]>;
        getL1BaseFeeEstimate(overrides?: CallOverrides): Promise<[BigNumber]>;
        getL1BaseFeeEstimateInertia(overrides?: CallOverrides): Promise<[BigNumber]>;
        getL1FeesAvailable(overrides?: CallOverrides): Promise<[BigNumber]>;
        getL1GasPriceEstimate(overrides?: CallOverrides): Promise<[BigNumber]>;
        getL1PricingSurplus(overrides?: CallOverrides): Promise<[BigNumber]>;
        getL1RewardRate(overrides?: CallOverrides): Promise<[BigNumber]>;
        getL1RewardRecipient(overrides?: CallOverrides): Promise<[string]>;
        getMinimumGasPrice(overrides?: CallOverrides): Promise<[BigNumber]>;
        getPerBatchGasCharge(overrides?: CallOverrides): Promise<[BigNumber]>;
        getPricesInArbGas(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        getPricesInArbGasWithAggregator(aggregator: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        getPricesInWei(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ]>;
        getPricesInWeiWithAggregator(aggregator: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ]>;
        getPricingInertia(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    getAmortizedCostCapBips(overrides?: CallOverrides): Promise<BigNumber>;
    getCurrentTxL1GasFees(overrides?: CallOverrides): Promise<BigNumber>;
    getGasAccountingParams(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
    getGasBacklog(overrides?: CallOverrides): Promise<BigNumber>;
    getGasBacklogTolerance(overrides?: CallOverrides): Promise<BigNumber>;
    getL1BaseFeeEstimate(overrides?: CallOverrides): Promise<BigNumber>;
    getL1BaseFeeEstimateInertia(overrides?: CallOverrides): Promise<BigNumber>;
    getL1FeesAvailable(overrides?: CallOverrides): Promise<BigNumber>;
    getL1GasPriceEstimate(overrides?: CallOverrides): Promise<BigNumber>;
    getL1PricingSurplus(overrides?: CallOverrides): Promise<BigNumber>;
    getL1RewardRate(overrides?: CallOverrides): Promise<BigNumber>;
    getL1RewardRecipient(overrides?: CallOverrides): Promise<string>;
    getMinimumGasPrice(overrides?: CallOverrides): Promise<BigNumber>;
    getPerBatchGasCharge(overrides?: CallOverrides): Promise<BigNumber>;
    getPricesInArbGas(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
    getPricesInArbGasWithAggregator(aggregator: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
    getPricesInWei(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ]>;
    getPricesInWeiWithAggregator(aggregator: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ]>;
    getPricingInertia(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        getAmortizedCostCapBips(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentTxL1GasFees(overrides?: CallOverrides): Promise<BigNumber>;
        getGasAccountingParams(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        getGasBacklog(overrides?: CallOverrides): Promise<BigNumber>;
        getGasBacklogTolerance(overrides?: CallOverrides): Promise<BigNumber>;
        getL1BaseFeeEstimate(overrides?: CallOverrides): Promise<BigNumber>;
        getL1BaseFeeEstimateInertia(overrides?: CallOverrides): Promise<BigNumber>;
        getL1FeesAvailable(overrides?: CallOverrides): Promise<BigNumber>;
        getL1GasPriceEstimate(overrides?: CallOverrides): Promise<BigNumber>;
        getL1PricingSurplus(overrides?: CallOverrides): Promise<BigNumber>;
        getL1RewardRate(overrides?: CallOverrides): Promise<BigNumber>;
        getL1RewardRecipient(overrides?: CallOverrides): Promise<string>;
        getMinimumGasPrice(overrides?: CallOverrides): Promise<BigNumber>;
        getPerBatchGasCharge(overrides?: CallOverrides): Promise<BigNumber>;
        getPricesInArbGas(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        getPricesInArbGasWithAggregator(aggregator: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        getPricesInWei(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ]>;
        getPricesInWeiWithAggregator(aggregator: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ]>;
        getPricingInertia(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        getAmortizedCostCapBips(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentTxL1GasFees(overrides?: CallOverrides): Promise<BigNumber>;
        getGasAccountingParams(overrides?: CallOverrides): Promise<BigNumber>;
        getGasBacklog(overrides?: CallOverrides): Promise<BigNumber>;
        getGasBacklogTolerance(overrides?: CallOverrides): Promise<BigNumber>;
        getL1BaseFeeEstimate(overrides?: CallOverrides): Promise<BigNumber>;
        getL1BaseFeeEstimateInertia(overrides?: CallOverrides): Promise<BigNumber>;
        getL1FeesAvailable(overrides?: CallOverrides): Promise<BigNumber>;
        getL1GasPriceEstimate(overrides?: CallOverrides): Promise<BigNumber>;
        getL1PricingSurplus(overrides?: CallOverrides): Promise<BigNumber>;
        getL1RewardRate(overrides?: CallOverrides): Promise<BigNumber>;
        getL1RewardRecipient(overrides?: CallOverrides): Promise<BigNumber>;
        getMinimumGasPrice(overrides?: CallOverrides): Promise<BigNumber>;
        getPerBatchGasCharge(overrides?: CallOverrides): Promise<BigNumber>;
        getPricesInArbGas(overrides?: CallOverrides): Promise<BigNumber>;
        getPricesInArbGasWithAggregator(aggregator: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPricesInWei(overrides?: CallOverrides): Promise<BigNumber>;
        getPricesInWeiWithAggregator(aggregator: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPricingInertia(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getAmortizedCostCapBips(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentTxL1GasFees(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGasAccountingParams(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGasBacklog(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGasBacklogTolerance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getL1BaseFeeEstimate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getL1BaseFeeEstimateInertia(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getL1FeesAvailable(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getL1GasPriceEstimate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getL1PricingSurplus(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getL1RewardRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getL1RewardRecipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMinimumGasPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPerBatchGasCharge(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPricesInArbGas(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPricesInArbGasWithAggregator(aggregator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPricesInWei(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPricesInWeiWithAggregator(aggregator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPricingInertia(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
