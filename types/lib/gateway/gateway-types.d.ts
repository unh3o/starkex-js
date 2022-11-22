declare type NumericSequence = number | string;
interface OrderRequest {
    orderType: OrderTypeObsolete;
    nonce: NumericSequence;
    amountSell: string;
    amountBuy: string;
    tokenSell: string;
    tokenBuy: string;
    vaultIdSell: NumericSequence;
    vaultIdBuy: NumericSequence;
    expirationTimestamp: number;
    feeInfo?: FeeInfoUserRequest;
}
interface Signature {
    r: string;
    s?: string;
}
interface FeeInfoUserRequest {
    feeLimit: number;
    sourceVaultId: NumericSequence;
    tokenId: string;
}
interface FeeInfoExchangeRequest {
    destinationStarkKey: string;
    destinationVaultId: NumericSequence;
    feeTaken: number;
}
declare enum OrderTypeObsolete {
    SETTLEMENT = 0,
    TRANSFER = 1
}
export { OrderRequest, Signature, FeeInfoUserRequest, FeeInfoExchangeRequest, NumericSequence, OrderTypeObsolete };
