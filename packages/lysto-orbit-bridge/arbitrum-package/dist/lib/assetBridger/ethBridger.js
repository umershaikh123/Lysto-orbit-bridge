/*
 * Copyright 2021, Offchain Labs, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-env node */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.EthBridger = void 0;
const ethers_1 = require("ethers");
const Inbox__factory_1 = require("../abi/factories/Inbox__factory");
const ERC20Inbox__factory_1 = require("../abi/factories/ERC20Inbox__factory");
const ArbSys__factory_1 = require("../abi/factories/ArbSys__factory");
const constants_1 = require("../dataEntities/constants");
const assetBridger_1 = require("./assetBridger");
const L1Transaction_1 = require("../message/L1Transaction");
const L2Transaction_1 = require("../message/L2Transaction");
const L1ToL2MessageCreator_1 = require("../message/L1ToL2MessageCreator");
const transactionRequest_1 = require("../dataEntities/transactionRequest");
const signerOrProvider_1 = require("../dataEntities/signerOrProvider");
const errors_1 = require("../dataEntities/errors");
const networks_1 = require("../dataEntities/networks");
const ERC20__factory_1 = require("../abi/factories/ERC20__factory");
const lib_1 = require("../utils/lib");
/**
 * Bridger for moving ETH back and forth between L1 to L2
 */
class EthBridger extends assetBridger_1.AssetBridger {
    /**
     * Instantiates a new EthBridger from an L2 Provider
     * @param l2Provider
     * @returns
     */
    static async fromProvider(l2Provider) {
        return new EthBridger(await (0, networks_1.getL2Network)(l2Provider));
    }
    /**
     * Asserts that the provided argument is of type `ApproveGasTokenParams` and not `ApproveGasTokenTxRequest`.
     * @param params
     */
    isApproveGasTokenParams(params) {
        return typeof params.txRequest === 'undefined';
    }
    /**
     * Creates a transaction request for approving the custom gas token to be spent by the inbox on the parent chain
     * @param params
     */
    getApproveGasTokenRequest(params) {
        var _a;
        if (this.nativeTokenIsEth) {
            throw new Error('chain uses ETH as its native/gas token');
        }
        const data = ERC20__factory_1.ERC20__factory.createInterface().encodeFunctionData('approve', [
            // spender
            this.l2Network.ethBridge.inbox,
            // value
            (_a = params === null || params === void 0 ? void 0 : params.amount) !== null && _a !== void 0 ? _a : ethers_1.constants.MaxUint256,
        ]);
        return {
            to: this.nativeToken,
            data,
            value: ethers_1.BigNumber.from(0),
        };
    }
    /**
     * Approves the custom gas token to be spent by the Inbox on the parent chain.
     * @param params
     */
    async approveGasToken(params) {
        if (this.nativeTokenIsEth) {
            throw new Error('chain uses ETH as its native/gas token');
        }
        const approveGasTokenRequest = this.isApproveGasTokenParams(params)
            ? this.getApproveGasTokenRequest(params)
            : params.txRequest;
        return params.l1Signer.sendTransaction(Object.assign(Object.assign({}, approveGasTokenRequest), params.overrides));
    }
    /**
     * Gets transaction calldata for a tx request for depositing ETH or custom gas token
     * @param params
     * @returns
     */
    getDepositRequestData(params) {
        if (!this.nativeTokenIsEth) {
            return ERC20Inbox__factory_1.ERC20Inbox__factory.createInterface().encodeFunctionData('depositERC20(uint256)', [params.amount]);
        }
        return Inbox__factory_1.Inbox__factory.createInterface().encodeFunctionData('depositEth()');
    }
    /**
     * Gets tx request for depositing ETH or custom gas token
     * @param params
     * @returns
     */
    async getDepositRequest(params) {
        return {
            txRequest: {
                to: this.l2Network.ethBridge.inbox,
                value: this.nativeTokenIsEth ? params.amount : 0,
                data: this.getDepositRequestData(params),
                from: params.from,
            },
            isValid: async () => true,
        };
    }
    /**
     * Deposit ETH from L1 onto L2
     * @param params
     * @returns
     */
    async deposit(params) {
        await this.checkL1Network(params.l1Signer);
        const ethDeposit = (0, transactionRequest_1.isL1ToL2TransactionRequest)(params)
            ? params
            : await this.getDepositRequest(Object.assign(Object.assign({}, params), { from: await params.l1Signer.getAddress() }));
        const tx = await params.l1Signer.sendTransaction(Object.assign(Object.assign({}, ethDeposit.txRequest), params.overrides));
        return L1Transaction_1.L1TransactionReceipt.monkeyPatchEthDepositWait(tx);
    }
    /**
     * Get a transaction request for an ETH deposit to a different L2 address using Retryables
     * @param params
     * @returns
     */
    async getDepositToRequest(params) {
        const requestParams = Object.assign(Object.assign({}, params), { to: params.destinationAddress, l2CallValue: params.amount, callValueRefundAddress: params.destinationAddress, data: '0x' });
        // Gas overrides can be passed in the parameters
        const gasOverrides = params.retryableGasOverrides || undefined;
        return L1ToL2MessageCreator_1.L1ToL2MessageCreator.getTicketCreationRequest(requestParams, params.l1Provider, params.l2Provider, gasOverrides);
    }
    /**
     * Deposit ETH from L1 onto a different L2 address
     * @param params
     * @returns
     */
    async depositTo(params) {
        await this.checkL1Network(params.l1Signer);
        await this.checkL2Network(params.l2Provider);
        const retryableTicketRequest = (0, transactionRequest_1.isL1ToL2TransactionRequest)(params)
            ? params
            : await this.getDepositToRequest(Object.assign(Object.assign({}, params), { from: await params.l1Signer.getAddress(), l1Provider: params.l1Signer.provider }));
        const tx = await params.l1Signer.sendTransaction(Object.assign(Object.assign({}, retryableTicketRequest.txRequest), params.overrides));
        return L1Transaction_1.L1TransactionReceipt.monkeyPatchContractCallWait(tx);
    }
    /**
     * Get a transaction request for an eth withdrawal
     * @param params
     * @returns
     */
    async getWithdrawalRequest(params) {
        const iArbSys = ArbSys__factory_1.ArbSys__factory.createInterface();
        const functionData = iArbSys.encodeFunctionData('withdrawEth', [
            params.destinationAddress,
        ]);
        return {
            txRequest: {
                to: constants_1.ARB_SYS_ADDRESS,
                data: functionData,
                value: params.amount,
                from: params.from,
            },
            // todo: do proper estimation
            estimateL1GasLimit: async (l1Provider) => {
                if (await (0, lib_1.isArbitrumChain)(l1Provider)) {
                    // values for L3 are dependent on the L1 base fee, so hardcoding can never be accurate
                    // however, this is only an estimate used for display, so should be good enough
                    //
                    // measured with withdrawals from Xai and Rari then added some padding
                    return ethers_1.BigNumber.from(4000000);
                }
                // measured 126998 - add some padding
                return ethers_1.BigNumber.from(130000);
            },
        };
    }
    /**
     * Withdraw ETH from L2 onto L1
     * @param params
     * @returns
     */
    async withdraw(params) {
        if (!signerOrProvider_1.SignerProviderUtils.signerHasProvider(params.l2Signer)) {
            throw new errors_1.MissingProviderArbSdkError('l2Signer');
        }
        await this.checkL2Network(params.l2Signer);
        const request = (0, transactionRequest_1.isL2ToL1TransactionRequest)(params)
            ? params
            : await this.getWithdrawalRequest(params);
        const tx = await params.l2Signer.sendTransaction(Object.assign(Object.assign({}, request.txRequest), params.overrides));
        return L2Transaction_1.L2TransactionReceipt.monkeyPatchWait(tx);
    }
}
exports.EthBridger = EthBridger;
