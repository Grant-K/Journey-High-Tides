import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Iterable, $Iterable_ } from "@package/java/lang";
export * as neoforge from "@package/net/mehvahdjukaar/supplementaries/mixins/neoforge";

declare module "@package/net/mehvahdjukaar/supplementaries/mixins" {
    export class $AgeableListAccessor {
    }
    export interface $AgeableListAccessor {
        invokeBodyParts(): $Iterable<$ModelPart>;
    }
    /**
     * Values that may be interpreted as {@link $AgeableListAccessor}.
     */
    export type $AgeableListAccessor_ = (() => $Iterable_<$ModelPart>);
    export class $EntityAccessor {
    }
    export interface $EntityAccessor {
        invokeCanAddPassenger(arg0: $Entity): boolean;
        invokeCanRide(arg0: $Entity): boolean;
    }
    export class $LivingEntityAccessor {
    }
    export interface $LivingEntityAccessor {
        invokeShouldDropLoot(): boolean;
        setUseItem(arg0: $ItemStack_): void;
        set useItem(value: $ItemStack_);
    }
    export class $PlayerAccessor {
    }
    export interface $PlayerAccessor {
        invokeSetShoulderEntityRight(arg0: $CompoundTag_): void;
        invokeSetShoulderEntityLeft(arg0: $CompoundTag_): void;
    }
}
