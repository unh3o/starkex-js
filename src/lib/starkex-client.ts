import {StarkErrorCode} from './common';
import {GatewayRequestType} from './gateway/gateway-request-type';
import {FeederGateway, Gateway, AvailabilityGateway} from './index';

class StarkExClient {
  public static readonly StarkErrorCode = StarkErrorCode;
  public static readonly GatewayRequestType = GatewayRequestType;

  public gateway: Gateway;
  public feederGateway: FeederGateway;
  public availabilityGateway: AvailabilityGateway;

  constructor(config: StarkExClientConfig) {
    this.gateway = new Gateway(config);
    this.feederGateway = new FeederGateway(config);
    this.availabilityGateway = new AvailabilityGateway(config);
  }
}

interface StarkExClientConfig {
  endpoint: string;
  certs?: StarkExCertsConfig;
}

type StarkExCertsConfig = {
  cert: string;
  key: string;
  ca?: string;
};

export {StarkExClient, StarkExClientConfig, StarkExCertsConfig};
