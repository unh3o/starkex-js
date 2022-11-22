import { GatewayBase } from '../gateway-base';
import { StarkExClientConfig } from '../starkex-client';
import { CommitteeSignature } from './availability-gateway-types';
declare class AvailabilityGateway extends GatewayBase {
    constructor(config: StarkExClientConfig);
    approveNewRoots(data: CommitteeSignature): Promise<string>;
    getBatchData(batchId: number): Promise<Record<string, any>>;
}
export { AvailabilityGateway };
