import { ILogger, ApiGatewayPath, ApiVersion } from '../utils';
import { StarkExClientConfig } from './starkex-client';
import { Method } from 'axios';
declare class GatewayBase {
    private readonly path;
    protected logger: ILogger;
    private readonly endpoint;
    private readonly certs;
    constructor(config: StarkExClientConfig, path: ApiGatewayPath);
    private getEndpoint;
    private initLogger;
    protected makeRequest(path: string, method?: Method, data?: Record<string, any>, version?: ApiVersion): Promise<any>;
}
export { GatewayBase };
