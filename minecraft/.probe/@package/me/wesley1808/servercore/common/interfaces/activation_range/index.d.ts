import { $ActivationType } from "@package/me/wesley1808/servercore/common/config/data/activation_range";

declare module "@package/me/wesley1808/servercore/common/interfaces/activation_range" {
    export class $ActivationEntity {
    }
    export interface $ActivationEntity {
        servercore$isInactive(): boolean;
        servercore$getActivationType(): $ActivationType;
        servercore$isExcluded(): boolean;
        servercore$getActivatedTick(): number;
        servercore$setActivatedTick(arg0: number): void;
        servercore$getActivatedImmunityTick(): number;
        servercore$setActivatedImmunityTick(arg0: number): void;
        servercore$setInactive(arg0: boolean): void;
        servercore$getFullTickCount(): number;
        servercore$incFullTickCount(): void;
    }
    export class $Inactive {
    }
    export interface $Inactive {
        servercore$inactiveTick(): void;
    }
}
