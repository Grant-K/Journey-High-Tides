import { $Clearable } from "@package/net/minecraft/world";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $SingleSlotContainer, $ContainerSlot } from "@package/dev/simulated_team/simulated/multiloader/inventory";
import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $NavigationTarget } from "@package/dev/simulated_team/simulated/content/blocks/nav_table/navigation_target";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";
import { $Quaterniond } from "@package/org/joml";
export * as navigation_target from "@package/dev/simulated_team/simulated/content/blocks/nav_table/navigation_target";

declare module "@package/dev/simulated_team/simulated/content/blocks/nav_table" {
    export class $NavTableInventory extends $SingleSlotContainer {
        maxStackSize: number;
        slot: $ContainerSlot;
        constructor(arg0: $NavTableBlockEntity);
    }
    export class $NavTableBlockEntity extends $SmartBlockEntity implements $Clearable {
        clearContent(): void;
        getRedstoneStrength(arg0: $Direction_): number;
        setHeldItem(arg0: $ItemStack_): $ItemStack;
        getNavTableItem(): $NavigationTarget;
        lastDistanceToTarget(): number;
        dropHeldItem(): void;
        getProjectedSelfPos(): $Vec3;
        getSublevelRot(): $Quaterniond;
        getClientTargetAngle(arg0: number): number;
        forceCurrentAngle(arg0: number): void;
        getRelativeAngle(): number;
        getTargetPosition(arg0: boolean): $Vec3;
        distanceToTarget(): number;
        getHeldItem(): $ItemStack;
        isPowering: boolean;
        currentTarget: $Vec3;
        static ATTACHMENTS_NBT_KEY: string;
        inventory: $NavTableInventory;
        lerpedAngleDegrees: $LerpedFloat;
        subLevel: $SubLevel;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get navTableItem(): $NavigationTarget;
        get projectedSelfPos(): $Vec3;
        get sublevelRot(): $Quaterniond;
        get relativeAngle(): number;
    }
}
