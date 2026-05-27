import { $BlockAndTintGetter, $BlockGetter, $ItemLike_, $LevelReader } from "@package/net/minecraft/world/level";
import { $CreativeModeTab } from "@package/net/minecraft/world/item";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $IDisableable } from "@package/org/violetmoon/zeta/module";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IBlockExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $IZetaBlockExtensions } from "@package/org/violetmoon/zeta/block/ext";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Block, $SoundType } from "@package/net/minecraft/world/level/block";
import { $ItemAbility_ } from "@package/net/neoforged/neoforge/common";
export * as ext from "@package/org/violetmoon/zeta/block/ext";

declare module "@package/org/violetmoon/zeta/block" {
    export class $IZetaBlock {
    }
    export interface $IZetaBlock extends $IZetaBlockExtensions, $IDisableable<$IZetaBlock>, $IBlockExtension {
        setCreativeTab(arg0: $ResourceKey_<$CreativeModeTab>, arg1: $ItemLike_, arg2: boolean): $Block;
        setCreativeTab(arg0: $ResourceKey_<$CreativeModeTab>): $Block;
        getSoundType(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Entity): $SoundType;
        isScaffolding(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $LivingEntity): boolean;
        collisionExtendsVertically(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Entity): boolean;
        getLightEmission(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): number;
        isLadder(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $LivingEntity): boolean;
        makesOpenTrapdoorAboveClimbable(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $BlockState_): boolean;
        canSustainPlant(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_, arg4: $BlockState_): $TriState;
        isConduitFrame(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $BlockPos_): boolean;
        getEnchantPowerBonus(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): number;
        getBeaconColorMultiplier(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $BlockPos_): number;
        isStickyBlock(arg0: $BlockState_): boolean;
        canStickTo(arg0: $BlockState_, arg1: $BlockState_): boolean;
        getFlammability(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        isFlammable(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): boolean;
        getFireSpreadSpeed(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        shouldDisplayFluidOverlay(arg0: $BlockState_, arg1: $BlockAndTintGetter, arg2: $BlockPos_, arg3: $FluidState): boolean;
        getToolModifiedState(arg0: $BlockState_, arg1: $UseOnContext, arg2: $ItemAbility_, arg3: boolean): $BlockState;
        getBlock(): $Block;
        getFlammabilityZeta(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        getFireSpreadSpeedZeta(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        get block(): $Block;
    }
}
