import { $MapCodec_, $Codec } from "@package/com/mojang/serialization";
import { $FluidVariantCache } from "@package/net/fabricmc/fabric/impl/transfer/fluid";
import { $LivingEntity, $Mob } from "@package/net/minecraft/world/entity";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $FlowingFluidAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $List, $Map$Entry } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $FluidInvokerMixin } from "@package/com/teamabnormals/blueprint/core/mixin";
import { $Function } from "@package/java/util/function";
import { $Reference2ObjectArrayMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $HolderSet_, $Holder, $BlockPos_, $Direction_, $Holder$Reference, $Registry, $IdMapper } from "@package/net/minecraft/core";
import { $PathType, $PathType_ } from "@package/net/minecraft/world/level/pathfinder";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IFluidStateExtension, $IFluidExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $StateDefinition, $BlockState_, $StateHolder, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $FlowingFluidAccessor as $FlowingFluidAccessor$1 } from "@package/com/telepathicgrunt/the_bumblezone/mixin/blocks";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Enum, $Comparable_, $Comparable, $Object } from "@package/java/lang";
import { $IFlowableFluid } from "@package/com/ishland/c2me/base/mixin/access";
import { $Explosion, $LevelReader, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item } from "@package/net/minecraft/world/item";
import { $FluidLike } from "@package/dev/latvian/mods/kubejs/fluid";
import { $FlowingFluidAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors";
import { $Property, $IntegerProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $InjectedFluidExtension } from "@package/dev/architectury/extensions/injected";
import { $FluidVariant } from "@package/net/fabricmc/fabric/api/transfer/v1/fluid";
import { $FluidKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Boat } from "@package/net/minecraft/world/entity/vehicle";

declare module "@package/net/minecraft/world/level/material" {
    export class $EmptyFluid extends $Fluid {
        getFlow(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $FluidState): $Vec3;
        canBeReplacedWith(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Fluid_, arg4: $Direction_): boolean;
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        constructor();
    }
    export class $LavaFluid$Flowing extends $LavaFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static MIN_LEVEL_CUTOFF: number;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        constructor();
    }
    export interface $Fluid extends RegistryMarked<RegistryTypes.FluidTag, RegistryTypes.Fluid> {}
    export class $LavaFluid$Source extends $LavaFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static MIN_LEVEL_CUTOFF: number;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        constructor();
    }
    export class $WaterFluid extends $FlowingFluid {
        animateTick(arg0: $Level_, arg1: $BlockPos_, arg2: $FluidState, arg3: $RandomSource): void;
        createLegacyBlock(arg0: $FluidState): $BlockState;
        getDripParticle(): $ParticleOptions;
        canBeReplacedWith(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Fluid_, arg4: $Direction_): boolean;
        getDropOff(arg0: $LevelReader): number;
        getSlopeFindDistance(arg0: $LevelReader): number;
        wrapOperation$lak000$sable$addUnderwaterParticle(arg0: $Level_, arg1: $ParticleOptions_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $Operation_<any>): void;
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        constructor();
        get dripParticle(): $ParticleOptions;
    }
    export class $MapColor$Brightness extends $Enum<$MapColor$Brightness> {
        static byId(arg0: number): $MapColor$Brightness;
        static values(): $MapColor$Brightness[];
        static valueOf(arg0: string): $MapColor$Brightness;
        static LOWEST: $MapColor$Brightness;
        static HIGH: $MapColor$Brightness;
        static LOW: $MapColor$Brightness;
        modifier: number;
        id: number;
        static NORMAL: $MapColor$Brightness;
    }
    /**
     * Values that may be interpreted as {@link $MapColor$Brightness}.
     */
    export type $MapColor$Brightness_ = "low" | "normal" | "high" | "lowest";
    export class $Fluid implements $IFluidExtension, $FluidVariantCache, $InjectedFluidExtension, $FluidInvokerMixin, $FluidKJS {
        getKey(): $ResourceKey<any>;
        getStateDefinition(): $StateDefinition<$Fluid, $FluidState>;
        getAmount(arg0: $FluidState): number;
        getFluidType(): $FluidType;
        getId(): string;
        getOwnHeight(arg0: $FluidState): number;
        defaultFluidState(): $FluidState;
        /**
         * @deprecated
         */
        builtInRegistryHolder(): $Holder$Reference<$Fluid>;
        isSource(arg0: $FluidState): boolean;
        asHolder(): $Holder$Reference<any>;
        fabric_getCachedFluidVariant(): $FluidVariant;
        getTickDelay(arg0: $LevelReader): number;
        getPickupSound(): ($SoundEvent) | undefined;
        handler$eem000$fabric_transfer_api_v1$hookGetBucketFillSound(arg0: $CallbackInfoReturnable<any>): void;
        getHeight(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_): number;
        getShape(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_): $VoxelShape;
        /**
         * @deprecated
         */
        is(arg0: $TagKey_<$Fluid>): boolean;
        isSame(arg0: $Fluid_): boolean;
        getBucket(): $Item;
        canExtinguish(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        canHydrate(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockPos_): boolean;
        canConvertToSource(arg0: $FluidState, arg1: $Level_, arg2: $BlockPos_): boolean;
        supportsBoating(arg0: $FluidState, arg1: $Boat): boolean;
        getBlockPathType(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Mob, arg4: boolean): $PathType;
        getAdjacentBlockPathType(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Mob, arg4: $PathType_): $PathType;
        getExplosionResistance(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Explosion): number;
        move(arg0: $FluidState, arg1: $LivingEntity, arg2: $Vec3_, arg3: number): boolean;
        arch$holder(): $Holder<$Fluid>;
        isEmpty(): boolean;
        getFluid(): $Fluid;
        getAmount(): number;
        getRegistryId(): $ResourceKey<$Registry<$Fluid>>;
        getRegistry(): $Registry<$Fluid>;
        arch$registryName(): $ResourceLocation;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getIdLocation(): $ResourceLocation;
        getMod(): string;
        getTagKeys(): $List<$TagKey<$Fluid>>;
        getTags(): $List<$ResourceLocation>;
        hasTag(tag: $ResourceLocation_): boolean;
        copy(amount: number): $FluidLike;
        callAnimateTick(arg0: $Level_, arg1: $BlockPos_, arg2: $FluidState, arg3: $RandomSource): void;
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        get key(): $ResourceKey<any>;
        get stateDefinition(): $StateDefinition<$Fluid, $FluidState>;
        get fluidType(): $FluidType;
        get id(): string;
        get pickupSound(): ($SoundEvent) | undefined;
        get bucket(): $Item;
        get empty(): boolean;
        get fluid(): $Fluid;
        get registryId(): $ResourceKey<$Registry<$Fluid>>;
        get registry(): $Registry<$Fluid>;
        get idLocation(): $ResourceLocation;
        get mod(): string;
        get tagKeys(): $List<$TagKey<$Fluid>>;
        get tags(): $List<$ResourceLocation>;
    }
    /**
     * Values that may be interpreted as {@link $Fluid}.
     */
    export type $Fluid_ = RegistryTypes.Fluid;
    export class $MapColor {
        static byId(arg0: number): $MapColor;
        calculateRGBColor(arg0: $MapColor$Brightness_): number;
        static getColorFromPackedId(arg0: number): number;
        getPackedId(arg0: $MapColor$Brightness_): number;
        col: number;
        static WOOD: $MapColor;
        static CRIMSON_STEM: $MapColor;
        static TERRACOTTA_LIGHT_BLUE: $MapColor;
        static PODZOL: $MapColor;
        static WARPED_WART_BLOCK: $MapColor;
        static COLOR_LIGHT_GREEN: $MapColor;
        static COLOR_BLACK: $MapColor;
        static TERRACOTTA_GREEN: $MapColor;
        static WARPED_NYLIUM: $MapColor;
        static FIRE: $MapColor;
        static GRASS: $MapColor;
        static TERRACOTTA_ORANGE: $MapColor;
        static GLOW_LICHEN: $MapColor;
        static COLOR_CYAN: $MapColor;
        id: number;
        static NONE: $MapColor;
        static WOOL: $MapColor;
        static QUARTZ: $MapColor;
        static WATER: $MapColor;
        static TERRACOTTA_YELLOW: $MapColor;
        static SAND: $MapColor;
        static SNOW: $MapColor;
        static DIRT: $MapColor;
        static LAPIS: $MapColor;
        static DEEPSLATE: $MapColor;
        static COLOR_YELLOW: $MapColor;
        static COLOR_LIGHT_GRAY: $MapColor;
        static TERRACOTTA_LIGHT_GRAY: $MapColor;
        static CRIMSON_NYLIUM: $MapColor;
        static TERRACOTTA_BLUE: $MapColor;
        static WARPED_HYPHAE: $MapColor;
        static METAL: $MapColor;
        static TERRACOTTA_GRAY: $MapColor;
        static WARPED_STEM: $MapColor;
        static PLANT: $MapColor;
        static GOLD: $MapColor;
        static DIAMOND: $MapColor;
        static COLOR_RED: $MapColor;
        static COLOR_ORANGE: $MapColor;
        static COLOR_BLUE: $MapColor;
        static NETHER: $MapColor;
        static TERRACOTTA_BLACK: $MapColor;
        static TERRACOTTA_PINK: $MapColor;
        static COLOR_MAGENTA: $MapColor;
        static TERRACOTTA_WHITE: $MapColor;
        static COLOR_GRAY: $MapColor;
        static COLOR_LIGHT_BLUE: $MapColor;
        static TERRACOTTA_LIGHT_GREEN: $MapColor;
        static COLOR_GREEN: $MapColor;
        static COLOR_PURPLE: $MapColor;
        static EMERALD: $MapColor;
        static ICE: $MapColor;
        static COLOR_BROWN: $MapColor;
        static TERRACOTTA_PURPLE: $MapColor;
        static TERRACOTTA_BROWN: $MapColor;
        static TERRACOTTA_MAGENTA: $MapColor;
        static RAW_IRON: $MapColor;
        static COLOR_PINK: $MapColor;
        static TERRACOTTA_RED: $MapColor;
        static CRIMSON_HYPHAE: $MapColor;
        static STONE: $MapColor;
        static TERRACOTTA_CYAN: $MapColor;
        static CLAY: $MapColor;
    }
    export class $WaterFluid$Source extends $WaterFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        constructor();
    }
    export class $FlowingFluid extends $Fluid implements $FlowingFluidAccessor$1, $FlowingFluidAccess, $FlowingFluidAccessor, $IFlowableFluid {
        getFlow(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $FluidState): $Vec3;
        getFlowing(): $Fluid;
        getFlowing(arg0: number, arg1: boolean): $FluidState;
        canHoldFluid(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Fluid_): boolean;
        handler$cfb000$lithium$getSpread(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $CallbackInfoReturnable<any>): void;
        tick(arg0: $Level_, arg1: $BlockPos_, arg2: $FluidState): void;
        getSource(): $Fluid;
        getSource(arg0: boolean): $FluidState;
        bumblezone$callSpreadToSides(arg0: $Level_, arg1: $BlockPos_, arg2: $FluidState, arg3: $BlockState_): void;
        bumblezone$callSourceNeighborCount(arg0: $LevelReader, arg1: $BlockPos_): number;
        bumblezone$callCanPassThroughWall(arg0: $Direction_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockPos_, arg5: $BlockState_): boolean;
        callCanPassThroughWall(arg0: $Direction_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockPos_, arg5: $BlockState_): boolean;
        create$getNewLiquid(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $FluidState;
        invokeGetLevelDecreasePerBlock(arg0: $LevelReader): number;
        invokeReceivesFlow(arg0: $Direction_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockPos_, arg5: $BlockState_): boolean;
        invokeIsMatchingAndStill(arg0: $FluidState): boolean;
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        constructor();
    }
    export class $PushReaction extends $Enum<$PushReaction> {
        static values(): $PushReaction[];
        static valueOf(arg0: string): $PushReaction;
        static DESTROY: $PushReaction;
        static BLOCK: $PushReaction;
        static PUSH_ONLY: $PushReaction;
        static IGNORE: $PushReaction;
        static NORMAL: $PushReaction;
    }
    /**
     * Values that may be interpreted as {@link $PushReaction}.
     */
    export type $PushReaction_ = "normal" | "destroy" | "block" | "ignore" | "push_only";
    export class $FluidState extends $StateHolder<$Fluid, $FluidState> implements $IFluidStateExtension {
        getTags(): $Stream<$TagKey<$Fluid>>;
        animateTick(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        getAmount(): number;
        getFlow(arg0: $BlockGetter, arg1: $BlockPos_): $Vec3;
        getOwnHeight(): number;
        createLegacyBlock(): $BlockState;
        getDripParticle(): $ParticleOptions;
        isSource(): boolean;
        /**
         * @deprecated
         */
        getExplosionResistance(): number;
        isRandomlyTicking(): boolean;
        canBeReplacedWith(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Fluid_, arg3: $Direction_): boolean;
        randomTick(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        isSourceOfType(arg0: $Fluid_): boolean;
        shouldRenderBackwardUpFace(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        getHeight(arg0: $BlockGetter, arg1: $BlockPos_): number;
        tick(arg0: $Level_, arg1: $BlockPos_): void;
        getShape(arg0: $BlockGetter, arg1: $BlockPos_): $VoxelShape;
        is(arg0: $TagKey_<$Fluid>): boolean;
        is(arg0: $Fluid_): boolean;
        is(arg0: $HolderSet_<$Fluid>): boolean;
        isEmpty(): boolean;
        holder(): $Holder<$Fluid>;
        getType(): $Fluid;
        getFluidType(): $FluidType;
        canExtinguish(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        canHydrate(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockPos_): boolean;
        canConvertToSource(arg0: $Level_, arg1: $BlockPos_): boolean;
        supportsBoating(arg0: $Boat): boolean;
        getBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob, arg3: boolean): $PathType;
        getAdjacentBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob, arg3: $PathType_): $PathType;
        getExplosionResistance(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Explosion): number;
        move(arg0: $LivingEntity, arg1: $Vec3_, arg2: number): boolean;
        static PROPERTIES_TAG: string;
        static AMOUNT_MAX: number;
        static CODEC: $Codec<$FluidState>;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static AMOUNT_FULL: number;
        static NAME_TAG: string;
        constructor(arg0: $Fluid_, arg1: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, arg2: $MapCodec_<$FluidState>);
        get tags(): $Stream<$TagKey<$Fluid>>;
        get amount(): number;
        get ownHeight(): number;
        get dripParticle(): $ParticleOptions;
        get source(): boolean;
        get randomlyTicking(): boolean;
        get empty(): boolean;
        get type(): $Fluid;
        get fluidType(): $FluidType;
    }
    export class $WaterFluid$Flowing extends $WaterFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        constructor();
    }
    export class $Fluids {
        static LAVA: $FlowingFluid;
        static FLOWING_WATER: $FlowingFluid;
        static EMPTY: $Fluid;
        static FLOWING_LAVA: $FlowingFluid;
        static WATER: $FlowingFluid;
        constructor();
    }
    export class $LavaFluid extends $FlowingFluid {
        animateTick(arg0: $Level_, arg1: $BlockPos_, arg2: $FluidState, arg3: $RandomSource): void;
        createLegacyBlock(arg0: $FluidState): $BlockState;
        getDripParticle(): $ParticleOptions;
        canBeReplacedWith(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Fluid_, arg4: $Direction_): boolean;
        randomTick(arg0: $Level_, arg1: $BlockPos_, arg2: $FluidState, arg3: $RandomSource): void;
        getSpreadDelay(arg0: $Level_, arg1: $BlockPos_, arg2: $FluidState, arg3: $FluidState): number;
        getDropOff(arg0: $LevelReader): number;
        getSlopeFindDistance(arg0: $LevelReader): number;
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static MIN_LEVEL_CUTOFF: number;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        constructor();
        get dripParticle(): $ParticleOptions;
    }
    export class $FogType extends $Enum<$FogType> {
        static values(): $FogType[];
        static valueOf(arg0: string): $FogType;
        static LAVA: $FogType;
        static POWDER_SNOW: $FogType;
        static NONE: $FogType;
        static WATER: $FogType;
    }
    /**
     * Values that may be interpreted as {@link $FogType}.
     */
    export type $FogType_ = "lava" | "water" | "powder_snow" | "none";
}
