import { $Level_ } from "@package/net/minecraft/world/level";
import { $Item_, $ItemStack_, $ProjectileItem, $ItemStack, $ProjectileItem$DispenseConfig } from "@package/net/minecraft/world/item";
import { $Logger } from "@package/org/slf4j";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $IMovingBlockSource } from "@package/net/mehvahdjukaar/supplementaries/common/misc";
import { $ProjectileDispenseBehaviorAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $BlockPos, $BlockPos_, $Direction_, $Position } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $DefaultDispenseItemBehaviorInvoker } from "@package/com/telepathicgrunt/the_bumblezone/mixin/blocks";
import { $Record } from "@package/java/lang";
import { $Boat$Type_ } from "@package/net/minecraft/world/entity/vehicle";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $DispenserBlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/core/dispenser" {
    export class $DefaultDispenseItemBehavior implements $DispenseItemBehavior, $DefaultDispenseItemBehaviorInvoker {
        static spawnItem(arg0: $Level_, arg1: $ItemStack_, arg2: number, arg3: $Direction_, arg4: $Position): void;
        dispense(arg0: $BlockSource_, arg1: $ItemStack_): $ItemStack;
        bumblezone$invokeExecute(arg0: $BlockSource_, arg1: $ItemStack_): $ItemStack;
        constructor();
    }
    export class $ShulkerBoxDispenseBehavior extends $OptionalDispenseItemBehavior {
        constructor();
    }
    export class $BoatDispenseItemBehavior extends $DefaultDispenseItemBehavior {
        execute(arg0: $BlockSource_, arg1: $ItemStack_): $ItemStack;
        constructor(arg0: $Boat$Type_);
        constructor(arg0: $Boat$Type_, arg1: boolean);
    }
    export class $BlockSource extends $Record implements $IMovingBlockSource {
        blockEntity(): $DispenserBlockEntity;
        supp$setEntity(entity: $Entity): void;
        supp$getEntity(): $Entity;
        pos(): $BlockPos;
        level(): $ServerLevel;
        center(): $Vec3;
        state(): $BlockState;
        constructor(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: $DispenserBlockEntity);
    }
    /**
     * Values that may be interpreted as {@link $BlockSource}.
     */
    export type $BlockSource_ = { state?: $BlockState_, level?: $ServerLevel, pos?: $BlockPos_, blockEntity?: $DispenserBlockEntity,  } | [state?: $BlockState_, level?: $ServerLevel, pos?: $BlockPos_, blockEntity?: $DispenserBlockEntity, ];
    export class $ShearsDispenseItemBehavior extends $OptionalDispenseItemBehavior {
        constructor();
    }
    export class $OptionalDispenseItemBehavior extends $DefaultDispenseItemBehavior {
        isSuccess(): boolean;
        setSuccess(arg0: boolean): void;
        constructor();
    }
    export class $DispenseItemBehavior {
        static bootStrap(): void;
        static NOOP: $DispenseItemBehavior;
        static LOGGER: $Logger;
    }
    export interface $DispenseItemBehavior {
        dispense(arg0: $BlockSource_, arg1: $ItemStack_): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $DispenseItemBehavior}.
     */
    export type $DispenseItemBehavior_ = ((arg0: $BlockSource, arg1: $ItemStack) => $ItemStack_);
    export class $ProjectileDispenseBehavior extends $DefaultDispenseItemBehavior implements $ProjectileDispenseBehaviorAccessor {
        execute(arg0: $BlockSource_, arg1: $ItemStack_): $ItemStack;
        create$getProjectileItem(): $ProjectileItem;
        create$getDispenseConfig(): $ProjectileItem$DispenseConfig;
        constructor(arg0: $Item_);
    }
}
