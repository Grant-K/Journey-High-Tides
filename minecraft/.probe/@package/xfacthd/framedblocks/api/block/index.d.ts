import { $SideSkipPredicate_ } from "@package/xfacthd/framedblocks/api/predicate/cull";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $List, $List_ } from "@package/java/util";
import { $ItemInteractionResult, $InteractionHand_ } from "@package/net/minecraft/world";
import { $Supplier_ } from "@package/java/util/function";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $IBlockExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $BlueprintData_ } from "@package/xfacthd/framedblocks/api/blueprint";
import { $CamoList } from "@package/xfacthd/framedblocks/api/util";
import { $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Class } from "@package/java/lang";
import { $LootParams$Builder } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockAndTintGetter, $BlockGetter, $Explosion, $LevelAccessor, $Level_, $LevelReader } from "@package/net/minecraft/world/level";
import { $BlockItem, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MapColor, $FluidState } from "@package/net/minecraft/world/level/material";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $IBlockType } from "@package/xfacthd/framedblocks/api/type";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $ShapeProvider } from "@package/xfacthd/framedblocks/api/shapes";
import { $StateCache } from "@package/xfacthd/framedblocks/api/block/cache";
import { $Rotation_, $SoundType, $EntityBlock, $Block } from "@package/net/minecraft/world/level/block";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as cache from "@package/xfacthd/framedblocks/api/block/cache";
export * as blockentity from "@package/xfacthd/framedblocks/api/block/blockentity";

declare module "@package/xfacthd/framedblocks/api/block" {
    export class $IFramedBlock {
        static isCamoEmissiveRendering(arg0: $ModelData): boolean;
        static toggleYSlope(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player): boolean;
        static createProperties(arg0: $IBlockType): $BlockBehaviour$Properties;
        static LOCK_MESSAGE: string;
        static CAMO_LABEL: string;
        static STATE_UNLOCKED: $Component;
        static STATE_LOCKED: $Component;
    }
    export interface $IFramedBlock extends $EntityBlock, $IBlockExtension {
        addLandingEffects(arg0: $BlockState_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $BlockState_, arg4: $LivingEntity, arg5: number): boolean;
        getSoundType(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Entity): $SoundType;
        getFriction(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Entity): number;
        addRunningEffects(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Entity): boolean;
        isSuffocating(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        getLightEmission(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): number;
        onBlockStateChange(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_): void;
        hidesNeighborFace(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_, arg4: $Direction_): boolean;
        getExplosionResistance(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Explosion): number;
        hasDynamicLightEmission(arg0: $BlockState_): boolean;
        canSustainPlant(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_, arg4: $BlockState_): $TriState;
        getBeaconColorMultiplier(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $BlockPos_): number;
        getFlammability(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        isFlammable(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): boolean;
        getFireSpreadSpeed(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        isFireSource(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Direction_): boolean;
        canEntityDestroy(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Entity): boolean;
        shouldDisplayFluidOverlay(arg0: $BlockState_, arg1: $BlockAndTintGetter, arg2: $BlockPos_, arg3: $FluidState): boolean;
        getMapColor(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $MapColor): $MapColor;
        getAppearance(arg0: $BlockState_, arg1: $BlockAndTintGetter, arg2: $BlockPos_, arg3: $Direction_, arg4: $BlockState_, arg5: $BlockPos_): $BlockState;
        getBlockType(): $IBlockType;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        updateShapeLockable(arg0: $BlockState_, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $Supplier_<$BlockState>): $BlockState;
        updateCulling(arg0: $LevelReader, arg1: $BlockPos_): void;
        isIntangible(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): boolean;
        getItemModelSource(): $BlockState;
        getJadeRenderState(arg0: $BlockState_): $BlockState;
        isCamoEmissiveRendering(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        printCamoData(arg0: $CamoList, arg1: boolean): ($MutableComponent) | undefined;
        runOcclusionTestAndGetLookupState(arg0: $SideSkipPredicate_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockState_, arg5: $Direction_): $BlockState;
        getComponentAtEdge(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_, arg4: $Direction_): $BlockState;
        getComponentBySkipPredicate(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_, arg4: $Direction_): $BlockState;
        unpackNestedModelData(arg0: $ModelData, arg1: $BlockState_, arg2: $BlockState_): $ModelData;
        lockState(arg0: $Level_, arg1: $BlockPos_, arg2: $Player, arg3: $ItemStack_): boolean;
        /**
         * @deprecated
         */
        getCamoOcclusionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): $VoxelShape;
        getCamoOcclusionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $ShapeProvider): $VoxelShape;
        getCamoShadeBrightness(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: number): number;
        doesBlockOccludeBeaconBeam(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        createBlockItem(): $BlockItem;
        tryApplyCamoImmediately(arg0: $Level_, arg1: $BlockPos_, arg2: $LivingEntity, arg3: $ItemStack_): void;
        handleUse(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player, arg4: $InteractionHand_, arg5: $BlockHitResult): $ItemInteractionResult;
        getCamoDrops(arg0: $List_<$ItemStack_>, arg1: $LootParams$Builder): $List<$ItemStack>;
        shouldPreventNeighborCulling(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockState_): boolean;
        handleBlockLeftClick(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player): boolean;
        useCamoOcclusionShapeForLightOcclusion(arg0: $BlockState_): boolean;
        getCamoVisualShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        appendCamoHoverText(arg0: $ItemStack_, arg1: $List_<$Component_>): void;
        printCamoBlock(arg0: $BlueprintData_): ($MutableComponent) | undefined;
        getJadeTargetClass(): $Class<$Block>;
        shouldRenderAsBlockInJadeTooltip(): boolean;
        getJadeRenderScale(arg0: $BlockState_): number;
        shouldApplyGuiTransformFromModel(): boolean;
        initCache(arg0: $BlockState_): $StateCache;
        getCache(arg0: $BlockState_): $StateCache;
        rotate(arg0: $BlockState_, arg1: $BlockHitResult, arg2: $Rotation_): $BlockState;
        rotate(arg0: $BlockState_, arg1: $Direction_, arg2: $Rotation_): $BlockState;
        get blockType(): $IBlockType;
        get itemModelSource(): $BlockState;
        get jadeTargetClass(): $Class<$Block>;
    }
}
