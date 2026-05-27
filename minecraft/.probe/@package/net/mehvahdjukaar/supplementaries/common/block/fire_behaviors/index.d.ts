import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/mehvahdjukaar/supplementaries/common/block/fire_behaviors" {
    export class $IFireItemBehaviorRegistry {
    }
    export interface $IFireItemBehaviorRegistry {
        registerCannonBehavior(arg0: $ItemLike_, arg1: $IFireItemBehavior_): void;
        registerPresentBehavior(arg0: $ItemLike_, arg1: $IFireItemBehavior_): void;
    }
    export class $IFireItemBehavior {
    }
    export interface $IFireItemBehavior {
        fire(stack: $ItemStack_, level: $ServerLevel, pos: $BlockPos_, fireOffset: number, direction: $Vec3_, power: number, inaccuracy: number, owner: $Player): boolean;
        fire(stack: $ItemStack_, level: $ServerLevel, pos: $Vec3_, fireOffset: number, direction: $Vec3_, power: number, inaccuracy: number, owner: $Player): boolean;
        fire(arg0: $ItemStack_, arg1: $ServerLevel, arg2: $Vec3_, arg3: $Vec3_, arg4: number, arg5: number, arg6: $Player): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IFireItemBehavior}.
     */
    export type $IFireItemBehavior_ = ((arg0: $ItemStack, arg1: $ServerLevel, arg2: $Vec3, arg3: $Vec3, arg4: number, arg5: number, arg6: $Player) => boolean);
}
