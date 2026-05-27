
declare module "@package/com/github/alexthe666/citadel/server/world" {
    export class $ModifiableTickRateServer {
    }
    export interface $ModifiableTickRateServer {
        setGlobalTickLengthMs(arg0: number): void;
        getMasterMs(): number;
        resetGlobalTickLengthMs(): void;
        set globalTickLengthMs(value: number);
        get masterMs(): number;
    }
}
