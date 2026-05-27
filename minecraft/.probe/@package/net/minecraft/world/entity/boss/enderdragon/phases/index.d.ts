import { $EndCrystal, $EnderDragon } from "@package/net/minecraft/world/entity/boss/enderdragon";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/minecraft/world/entity/boss/enderdragon/phases" {
    export class $DragonPhaseInstance {
    }
    export interface $DragonPhaseInstance {
        onHurt(arg0: $DamageSource_, arg1: number): number;
        onCrystalDestroyed(arg0: $EndCrystal, arg1: $BlockPos_, arg2: $DamageSource_, arg3: $Player): void;
        isSitting(): boolean;
        doClientTick(): void;
        doServerTick(): void;
        getFlyTargetLocation(): $Vec3;
        getFlySpeed(): number;
        getTurnSpeed(): number;
        getPhase(): $EnderDragonPhase<$DragonPhaseInstance>;
        begin(): void;
        end(): void;
        get sitting(): boolean;
        get flyTargetLocation(): $Vec3;
        get flySpeed(): number;
        get turnSpeed(): number;
        get phase(): $EnderDragonPhase<$DragonPhaseInstance>;
    }
    export class $DragonLandingPhase extends $AbstractDragonPhaseInstance {
        constructor(arg0: $EnderDragon);
    }
    export class $AbstractDragonSittingPhase extends $AbstractDragonPhaseInstance {
        constructor(arg0: $EnderDragon);
    }
    export class $DragonHoverPhase extends $AbstractDragonPhaseInstance {
        constructor(arg0: $EnderDragon);
    }
    export class $DragonStrafePlayerPhase extends $AbstractDragonPhaseInstance {
        setTarget(arg0: $LivingEntity): void;
        constructor(arg0: $EnderDragon);
        set target(value: $LivingEntity);
    }
    export class $DragonSittingFlamingPhase extends $AbstractDragonSittingPhase {
        resetFlameCount(): void;
        constructor(arg0: $EnderDragon);
    }
    export class $EnderDragonPhaseManager {
        setPhase(arg0: $EnderDragonPhase<never>): void;
        getCurrentPhase(): $DragonPhaseInstance;
        getPhase<T extends $DragonPhaseInstance>(arg0: $EnderDragonPhase<T>): T;
        constructor(arg0: $EnderDragon);
        get currentPhase(): $DragonPhaseInstance;
    }
    export class $EnderDragonPhase<T extends $DragonPhaseInstance> {
        static getById(arg0: number): $EnderDragonPhase<never>;
        createInstance(arg0: $EnderDragon): $DragonPhaseInstance;
        getId(): number;
        static getCount(): number;
        static HOVERING: $EnderDragonPhase<$DragonHoverPhase>;
        static STRAFE_PLAYER: $EnderDragonPhase<$DragonStrafePlayerPhase>;
        static SITTING_FLAMING: $EnderDragonPhase<$DragonSittingFlamingPhase>;
        static HOLDING_PATTERN: $EnderDragonPhase<$DragonHoldingPatternPhase>;
        static LANDING: $EnderDragonPhase<$DragonLandingPhase>;
        static CHARGING_PLAYER: $EnderDragonPhase<$DragonChargePlayerPhase>;
        static LANDING_APPROACH: $EnderDragonPhase<$DragonLandingApproachPhase>;
        static DYING: $EnderDragonPhase<$DragonDeathPhase>;
        static SITTING_SCANNING: $EnderDragonPhase<$DragonSittingScanningPhase>;
        static TAKEOFF: $EnderDragonPhase<$DragonTakeoffPhase>;
        static SITTING_ATTACKING: $EnderDragonPhase<$DragonSittingAttackingPhase>;
        get id(): number;
        static get count(): number;
    }
    export class $DragonSittingAttackingPhase extends $AbstractDragonSittingPhase {
        constructor(arg0: $EnderDragon);
    }
    export class $DragonChargePlayerPhase extends $AbstractDragonPhaseInstance {
        setTarget(arg0: $Vec3_): void;
        constructor(arg0: $EnderDragon);
        set target(value: $Vec3_);
    }
    export class $DragonLandingApproachPhase extends $AbstractDragonPhaseInstance {
        constructor(arg0: $EnderDragon);
    }
    export class $DragonSittingScanningPhase extends $AbstractDragonSittingPhase {
        constructor(arg0: $EnderDragon);
    }
    export class $DragonDeathPhase extends $AbstractDragonPhaseInstance {
        constructor(arg0: $EnderDragon);
    }
    export class $DragonTakeoffPhase extends $AbstractDragonPhaseInstance {
        constructor(arg0: $EnderDragon);
    }
    export class $DragonHoldingPatternPhase extends $AbstractDragonPhaseInstance {
        constructor(arg0: $EnderDragon);
    }
    export class $AbstractDragonPhaseInstance implements $DragonPhaseInstance {
        onHurt(arg0: $DamageSource_, arg1: number): number;
        onCrystalDestroyed(arg0: $EndCrystal, arg1: $BlockPos_, arg2: $DamageSource_, arg3: $Player): void;
        isSitting(): boolean;
        doClientTick(): void;
        doServerTick(): void;
        getFlyTargetLocation(): $Vec3;
        getFlySpeed(): number;
        getTurnSpeed(): number;
        begin(): void;
        end(): void;
        constructor(arg0: $EnderDragon);
        get sitting(): boolean;
        get flyTargetLocation(): $Vec3;
        get flySpeed(): number;
        get turnSpeed(): number;
    }
}
