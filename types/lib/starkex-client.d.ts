import { StarkErrorCode } from './common';
import { GatewayRequestType } from './gateway/gateway-request-type';
import { FeederGateway, Gateway, AvailabilityGateway } from './index';
declare class StarkExClient {
    static readonly StarkErrorCode: typeof StarkErrorCode;
    static readonly GatewayRequestType: typeof GatewayRequestType;
    gateway: Gateway;
    feederGateway: FeederGateway;
    availabilityGateway: AvailabilityGateway;
    constructor(config: StarkExClientConfig);
}
interface StarkExClientConfig {
    endpoint: string;
    certs?: StarkExCertsConfig;
}
declare type StarkExCertsConfig = {
    cert: string;
    key: string;
    ca?: string;
};
export { StarkExClient, StarkExClientConfig, StarkExCertsConfig };
