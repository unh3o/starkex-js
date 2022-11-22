import { GatewayBase } from '../gateway-base';
import { StarkExClientConfig } from '../starkex-client';
import { BatchIdsRequest } from './feeder-gateway-request';
declare class FeederGateway extends GatewayBase {
    constructor(config: StarkExClientConfig);
    isAlive(): Promise<string>;
    isReady(): Promise<string>;
    getBatchEnclosingIds(batchId: number): Promise<number[]>;
    DEPRECATED_getBatchIds(request: BatchIdsRequest): Promise<number[]>;
    DEPRECATED_getBatchInfo(batchId: number): Promise<Record<string, any>>;
    getBatchInfo(batchId: number): Promise<Record<string, any>>;
    getLastBatchId(): Promise<number>;
    getPrevBatchId(batchId: number): Promise<number>;
}
export { FeederGateway };
