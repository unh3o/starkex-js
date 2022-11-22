declare enum ApiVersion {
    V1 = "v1",
    V2 = "v2"
}
declare const mapApiVersionToUrlPrefix: {
    v1: string;
    v2: string;
};
interface ApiGatewayPath {
    gatewayRoute: string;
    defaultVersion: ApiVersion;
}
export { ApiVersion, mapApiVersionToUrlPrefix, ApiGatewayPath };
