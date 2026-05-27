import { $BlockAndTintGetter, $BlockGetter, $LevelReader } from "@package/net/minecraft/world/level";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $Block_, $Block, $SoundType } from "@package/net/minecraft/world/level/block";
import { $ItemAbility_ } from "@package/net/neoforged/neoforge/common";

declare module "@package/org/violetmoon/zeta/block/ext" {
    export class $BlockExtensionFactory {
        static DEFAULT: $BlockExtensionFactory;
    }
    export interface $BlockExtensionFactory {
        getInternal(arg0: $Block_): $IZetaBlockExtensions;
        get(arg0: $Block_): $IZetaBlockExtensions;
        get(arg0: $BlockState_): $IZetaBlockExtensions;
    }
    /**
     * Values that may be interpreted as {@link $BlockExtensionFactory}.
     */
    export type $BlockExtensionFactory_ = ((arg0: $Block) => $IZetaBlockExtensions);
    export class $IZetaBlockExtensions {
        static DEFAULT: $IZetaBlockExtensions;
    }
    export interface $IZetaBlockExtensions {
        getFlammabilityZeta(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        getLightEmissionZeta(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): number;
        isLadderZeta(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $LivingEntity): boolean;
        makesOpenTrapdoorAboveClimbableZeta(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $BlockState_): boolean;
        canSustainPlantZeta(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_, arg4: $BlockState_): $TriState;
        isConduitFrameZeta(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $BlockPos_): boolean;
        getEnchantPowerBonusZeta(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): number;
        getSoundTypeZeta(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Entity): $SoundType;
        isStickyBlockZeta(arg0: $BlockState_): boolean;
        canStickToZeta(arg0: $BlockState_, arg1: $BlockState_): boolean;
        isFlammableZeta(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): boolean;
        getFireSpreadSpeedZeta(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        collisionExtendsVerticallyZeta(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Entity): boolean;
        shouldDisplayFluidOverlayZeta(arg0: $BlockState_, arg1: $BlockAndTintGetter, arg2: $BlockPos_, arg3: $FluidState): boolean;
        getToolModifiedStateZeta(arg0: $BlockState_, arg1: $UseOnContext, arg2: $ItemAbility_, arg3: boolean): $BlockState;
        isScaffoldingZeta(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $LivingEntity): boolean;
        getBeaconColorMultiplierZeta(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $BlockPos_): number;
    }
}
