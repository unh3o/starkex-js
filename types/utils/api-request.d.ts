import { StarkExCertsConfig } from '../lib';
import { AxiosResponse, Method } from 'axios';
/**
 *  helper method to perform an api requests
 */
export declare const apiRequest: ({ path, method, data, headers, certs }: {
    path: string;
    method?: Method;
    data?: any;
    headers?: Record<string, string>;
    certs?: StarkExCertsConfig;
}) => Promise<AxiosResponse>;
