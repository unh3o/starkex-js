import { ILogger, ILogLevel } from 'js-logger';
declare const getLogger: (name?: string) => ILogger;
declare const getLogLevel: (name?: string) => ILogLevel;
declare const setLogLevel: (level: ILogLevel, name?: string) => void;
export { getLogger, getLogLevel, setLogLevel, ILogger };
