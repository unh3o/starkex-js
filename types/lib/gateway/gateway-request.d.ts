import { GatewayRequestType } from './gateway-request-type';
import { FeeInfoExchangeRequest, FeeInfoUserRequest, NumericSequence, OrderRequest, Signature } from './gateway-types';
declare type GatewayRequest = TransactionRequest | TransferRequest | SettlementRequest | FullWithdrawalRequest | FalseFullWithdrawalRequest | ConditionalTransferRequest | MultiTransactionRequest;
interface Request {
    txId: NumericSequence;
}
interface WithVault {
    vaultId: NumericSequence;
}
interface WithStarkKey {
    starkKey: string;
}
interface WithAmount {
    tokenId: string;
    amount: string;
}
interface TransactionRequest extends Request, WithAmount, WithVault, WithStarkKey {
}
interface FullWithdrawalRequest extends Request, WithVault, WithStarkKey {
}
interface FalseFullWithdrawalRequest extends Request, WithVault {
    requesterStarkKey: string;
}
interface TransferRequest extends Request {
    amount: string;
    nonce: NumericSequence;
    senderPublicKey: string;
    senderVaultId: NumericSequence;
    token: string;
    receiverPublicKey: string;
    receiverVaultId: NumericSequence;
    expirationTimestamp: number;
    signature: Signature;
    feeInfoUser?: FeeInfoUserRequest;
    feeInfoExchange?: FeeInfoExchangeRequest;
}
interface ConditionalTransferRequest extends TransferRequest {
    factRegistryAddress: string;
    fact: string;
}
interface SettlementRequest extends Request {
    settlementInfo: SettlementInfoRequest;
    partyAOrder: OrderRequest;
    partyBOrder: OrderRequest;
}
interface SettlementInfoRequest {
    partyASold: number;
    partyBSold: number;
    partyAFeeInfo?: FeeInfoExchangeRequest;
    partyBFeeInfo?: FeeInfoExchangeRequest;
}
declare type ExcludeRequest<T> = Pick<T, Exclude<keyof T, keyof Request>>;
declare type WithdrawalTransaction = ExcludeRequest<TransactionRequest> & {
    type: GatewayRequestType.WITHDRAWAL_REQUEST;
};
declare type DepositTransaction = ExcludeRequest<TransactionRequest> & {
    type: GatewayRequestType.DEPOSIT_REQUEST;
};
declare type MintTransaction = ExcludeRequest<TransactionRequest> & {
    type: GatewayRequestType.MINT_REQUEST;
};
declare type SettlementTransaction = ExcludeRequest<SettlementRequest> & {
    type: GatewayRequestType.SETTLEMENT_REQUEST;
};
declare type TransferTransaction = ExcludeRequest<TransferRequest> & {
    type: GatewayRequestType.TRANSFER_REQUEST;
};
declare type ConditionalTransferTransaction = ExcludeRequest<ConditionalTransferRequest> & {
    type: GatewayRequestType.CONDITIONAL_TRANSFER_REQUEST;
};
declare type FullWithdrawalTransaction = ExcludeRequest<FullWithdrawalRequest> & {
    type: GatewayRequestType.FULL_WITHDRAWAL_REQUEST;
};
declare type FalseFullWithdrawalTransaction = ExcludeRequest<FalseFullWithdrawalRequest> & {
    type: GatewayRequestType.FALSE_FULL_WITHDRAWAL_REQUEST;
};
declare type MultiTransactionTransaction = DepositTransaction | WithdrawalTransaction | MintTransaction | SettlementTransaction | TransferTransaction | ConditionalTransferTransaction | FullWithdrawalTransaction | FalseFullWithdrawalTransaction;
interface MultiTransactionRequest extends Request {
    txs: Array<MultiTransactionTransaction>;
}
export { GatewayRequest, FalseFullWithdrawalRequest, FullWithdrawalRequest, TransactionRequest, TransferRequest, SettlementRequest, ConditionalTransferRequest, SettlementInfoRequest, MultiTransactionRequest, MultiTransactionTransaction, DepositTransaction, WithdrawalTransaction, MintTransaction, SettlementTransaction, TransferTransaction, ConditionalTransferTransaction, FullWithdrawalTransaction, FalseFullWithdrawalTransaction, ExcludeRequest, Request };
