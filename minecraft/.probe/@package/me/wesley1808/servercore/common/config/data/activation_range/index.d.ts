
declare module "@package/me/wesley1808/servercore/common/config/data/activation_range" {
    export class $ActivationType {
    }
    export interface $ActivationType {
        activationRange(): number;
        tickInterval(): number;
        wakeupInterval(): number;
        extraHeightUp(): boolean;
        extraHeightDown(): boolean;
    }
}
