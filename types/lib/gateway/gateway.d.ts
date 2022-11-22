import { GatewayBase } from '../gateway-base';
import { StarkExClientConfig } from '../starkex-client';
import { FalseFullWithdrawalRequest, FullWithdrawalRequest, ConditionalTransferRequest, SettlementRequest, TransactionRequest, TransferRequest, MultiTransactionRequest } from './gateway-request';
import { NumericSequence } from './gateway-types';
declare class Gateway extends GatewayBase {
    constructor(config: StarkExClientConfig);
    getTransaction(txId: number): Promise<Record<string, any>>;
    getStarkDexAddress(): Promise<string>;
    getFirstUnusedTxId(): Promise<number>;
    markTransactionForReplacement(txId: NumericSequence): Promise<string>;
    isAlive(): Promise<string>;
    withdrawal(request: TransactionRequest): Promise<Record<string, string>>;
    deposit(request: TransactionRequest): Promise<Record<string, string>>;
    mint(request: TransactionRequest): Promise<Record<string, string>>;
    settlement(request: SettlementRequest): Promise<Record<string, string>>;
    transfer(request: TransferRequest): Promise<Record<string, string>>;
    conditionalTransfer(request: ConditionalTransferRequest): Promise<Record<string, string>>;
    fullWithdrawal(request: FullWithdrawalRequest): Promise<Record<string, string>>;
    falseFullWithdrawal(request: FalseFullWithdrawalRequest): Promise<Record<string, string>>;
    multiTransaction(request: MultiTransactionRequest): Promise<Record<string, string>>;
    private addTransaction;
}
export { Gateway };
