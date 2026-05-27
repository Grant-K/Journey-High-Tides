import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Mob } from "@package/net/minecraft/world/entity";
import { $MobSpawn } from "@package/com/crackerjackbox/mobcontrol/data";
import { $MobExRule } from "@package/com/crackerjackbox/mobcontrol/rule";

declare module "@package/com/crackerjackbox/mobcontrol/iface" {
    export class $IWeightedGroup {
    }
    export interface $IWeightedGroup {
        weight(): number;
        group(): string;
    }
    export class $IBat {
    }
    export interface $IBat {
        mobControl$setTagetPosition(arg0: $BlockPos_): void;
    }
    /**
     * Values that may be interpreted as {@link $IBat}.
     */
    export type $IBat_ = ((arg0: $BlockPos) => void);
    export class $IPlayer {
    }
    export interface $IPlayer {
        mobControl$ticks(): number;
        mobControl$updateDays(arg0: number, arg1: boolean): void;
    }
    export class $IBlock {
    }
    export interface $IBlock {
        mobControl$breakTick(): number;
    }
    /**
     * Values that may be interpreted as {@link $IBlock}.
     */
    export type $IBlock_ = (() => number);
    export class $IMob {
    }
    export interface $IMob {
        mobControl$getRule(): $MobExRule;
        mobControl$setMobSpawn(arg0: $MobSpawn): void;
        mobControl$getMobSpawn(): $MobSpawn;
        mobControl$setRule(arg0: $MobExRule): void;
        mobControl$addMob(arg0: $Mob): void;
        mobControl$setCancelBossFight(arg0: boolean): void;
        mobControl$getCancelBossFight(): boolean;
    }
}
