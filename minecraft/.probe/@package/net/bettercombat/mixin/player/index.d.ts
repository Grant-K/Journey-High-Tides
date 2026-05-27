import { $Inventory } from "@package/net/minecraft/world/entity/player";

declare module "@package/net/bettercombat/mixin/player" {
    export class $LivingEntityAccessor {
    }
    export interface $LivingEntityAccessor {
        getAttackStrengthTicker(): number;
        setLastAttackedTicks(arg0: number): void;
        invokeTurnHead(arg0: number, arg1: number): number;
        get attackStrengthTicker(): number;
        set lastAttackedTicks(value: number);
    }
    export class $PlayerEntityAccessor {
    }
    export interface $PlayerEntityAccessor {
        getInventory(): $Inventory;
        get inventory(): $Inventory;
    }
    /**
     * Values that may be interpreted as {@link $PlayerEntityAccessor}.
     */
    export type $PlayerEntityAccessor_ = (() => $Inventory);
}
