import { $NoiseChunkAccessor, $NoiseGeneratorSettingsAccessor as $NoiseGeneratorSettingsAccessor$2 } from "@package/com/telepathicgrunt/the_bumblezone/mixin/world";
import { $JigsawJunction } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $MapCodec_, $DataResult, $DynamicOps, $Codec, $Lifecycle, $MapCodec } from "@package/com/mojang/serialization";
import { $IExtendedNoiseChunk, $IExtendedNoiseChunk$AquifierNuke_, $IExtendedNoiseChunk$AquifierNuke } from "@package/io/redspace/ironsspellbooks/worldgen";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $HeightmapAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/world/combined_heightmap_update";
import { $NoiseChunkExtension } from "@package/com/telepathicgrunt/the_bumblezone/worldgen/dimension";
import { $RandomStateAccessor, $NoiseGeneratorSettingsAccessor, $NoiseBasedChunkGeneratorAccessor } from "@package/dev/worldgen/lithostitched/mixin/common";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $RandomSource, $CubicSpline, $ToFloatFunction, $KeyDispatchDataCodec, $StringRepresentable } from "@package/net/minecraft/util";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BeardifierAccessor } from "@package/com/github/L_Ender/cataclysm/mixin/accessor";
import { $CarvingContext } from "@package/net/minecraft/world/level/levelgen/carver";
import { $TerrainAdjustment_, $BoundingBox, $TerrainAdjustment } from "@package/net/minecraft/world/level/levelgen/structure";
import { $NoiseGeneratorSettingsAccessor as $NoiseGeneratorSettingsAccessor$1 } from "@package/com/blackgear/vanillabackport/core/mixin/access";
import { $BiomeResolver_, $BiomeSource, $Climate$ParameterPoint, $Climate$Sampler, $Biome, $FeatureSorter$StepFeatureData, $BiomeManager, $BiomeResolver, $Climate$Sampler_, $Climate$ParameterPoint_, $Biome_ } from "@package/net/minecraft/world/level/biome";
import { $FlatLevelGeneratorSettings } from "@package/net/minecraft/world/level/levelgen/flat";
import { $BlockStateProvider } from "@package/net/minecraft/world/level/levelgen/feature/stateproviders";
import { $ProtoChunk, $ChunkGenerator, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $PrimaryLevelData$SpecialWorldProperty, $PrimaryLevelData$SpecialWorldProperty_ } from "@package/net/minecraft/world/level/storage";
import { $IExtendedNoiseGeneratorSettings } from "@package/terrablender/worldgen";
import { $CaveSurface_ } from "@package/net/minecraft/world/level/levelgen/placement";
import { $Double2DoubleFunction } from "@package/it/unimi/dsi/fastutil/doubles";
import { $EnhancedBeardifierData } from "@package/com/craisinlord/integrated_api/world/terrainadaptation/beardifier";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $LevelStem_, $DimensionType, $LevelStem, $DimensionType_ } from "@package/net/minecraft/world/level/dimension";
import { $ContextAccessor, $SurfaceSystemAccessor } from "@package/dev/worldgen/lithostitched/duck";
import { $NormalNoise$NoiseParameters, $NormalNoise$NoiseParameters_, $NormalNoise } from "@package/net/minecraft/world/level/levelgen/synth";
import { $Set_, $Map, $OptionalInt, $List, $Map_, $List_, $OptionalLong, $BitSet } from "@package/java/util";
import { $NoiseGeneratorSettingsMixin } from "@package/com/teamabnormals/blueprint/core/mixin";
import { $SurfaceRuleManager$RuleCategory_ } from "@package/terrablender/api";
import { $Function, $Supplier, $Predicate_, $Predicate, $Function_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Holder$Reference, $RegistryAccess$Frozen, $Holder, $BlockPos$MutableBlockPos, $RegistryAccess, $Registry, $HolderGetter, $Holder_, $HolderGetter$Provider_ } from "@package/net/minecraft/core";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $ObjectListIterator } from "@package/it/unimi/dsi/fastutil/objects";
import { $ChunkStatus } from "@package/net/minecraft/world/level/chunk/status";
import { $StringBuilder, $Enum, $Record } from "@package/java/lang";
import { $ISimpleRandom, $IAtomicSimpleRandomDeriver, $IBelowZeroRetrogen, $IXoroshiro128PlusPlusRandomImpl, $IDensityFunctionTypesWeirdScaledSamplerRarityValueMapper, $IAquiferSamplerFluidLevel, $IXoroshiro128PlusPlusRandom, $IXoroshiro128PlusPlusRandomDeriver, $IDensityFunctionsCaveScaler, $IChunkNoiseSamplerDensityInterpolator, $IStructureWeightSampler, $IChunkNoiseSampler } from "@package/com/ishland/c2me/base/mixin/access";
import { $MixinChunkGeneratorSettings } from "@package/com/terraformersmc/biolith/impl/mixin";
import { $ChunkPos, $LevelSimulatedReader, $CustomSpawner, $LevelHeightAccessor, $Level, $StructureManager } from "@package/net/minecraft/world/level";
import { $TagKey_, $TagKey } from "@package/net/minecraft/tags";
import { $Logger } from "@package/org/slf4j";
import { $Blender } from "@package/net/minecraft/world/level/levelgen/blending";
import { $ImmutableList$Builder, $ImmutableSet } from "@package/com/google/common/collect";
import { $Stream } from "@package/java/util/stream";
import { $DebugChunkGeneratorAccessor } from "@package/net/fabricmc/fabric/mixin/registry/sync";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_ } from "@package/net/minecraft/resources";
import { $BeardifierAccessor as $BeardifierAccessor$1 } from "@package/com/craisinlord/integrated_api/mixins/structures";
export * as structure from "@package/net/minecraft/world/level/levelgen/structure";
export * as placement from "@package/net/minecraft/world/level/levelgen/placement";
export * as feature from "@package/net/minecraft/world/level/levelgen/feature";
export * as blockpredicates from "@package/net/minecraft/world/level/levelgen/blockpredicates";
export * as blending from "@package/net/minecraft/world/level/levelgen/blending";
export * as synth from "@package/net/minecraft/world/level/levelgen/synth";
export * as carver from "@package/net/minecraft/world/level/levelgen/carver";
export * as heightproviders from "@package/net/minecraft/world/level/levelgen/heightproviders";
export * as flat from "@package/net/minecraft/world/level/levelgen/flat";
export * as presets from "@package/net/minecraft/world/level/levelgen/presets";
export * as material from "@package/net/minecraft/world/level/levelgen/material";

declare module "@package/net/minecraft/world/level/levelgen" {
    export class $DensityFunctions$HolderHolder extends $Record implements $DensityFunction {
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        compute(arg0: $DensityFunction$FunctionContext): number;
        function(): $Holder<$DensityFunction>;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        square(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        constructor(arg0: $Holder_<$DensityFunction>);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$HolderHolder}.
     */
    export type $DensityFunctions$HolderHolder_ = { function?: $Holder_<$DensityFunction>,  } | [function?: $Holder_<$DensityFunction>, ];
    export class $Xoroshiro128PlusPlus implements $IXoroshiro128PlusPlusRandomImpl {
        nextLong(): number;
        getSeedLo(): number;
        getSeedHi(): number;
        setSeedLo(arg0: number): void;
        setSeedHi(arg0: number): void;
        static CODEC: $Codec<$Xoroshiro128PlusPlus>;
        constructor(arg0: $RandomSupport$Seed128bit_);
        constructor(arg0: number, arg1: number);
    }
    export class $DensityFunctions$Constant extends $Record implements $DensityFunction$SimpleFunction {
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        value(): number;
        compute(arg0: $DensityFunction$FunctionContext): number;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        square(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Constant}.
     */
    export type $DensityFunctions$Constant_ = { value?: number,  } | [value?: number, ];
    export class $SurfaceRules$ConditionSource {
        static bootstrap(arg0: $Registry<$MapCodec_<$SurfaceRules$ConditionSource>>): $MapCodec<$SurfaceRules$ConditionSource>;
        static CODEC: $Codec<$SurfaceRules$ConditionSource>;
    }
    export interface $SurfaceRules$ConditionSource extends $Function<$SurfaceRules$Context, $SurfaceRules$Condition> {
        codec(): $KeyDispatchDataCodec<$SurfaceRules$ConditionSource>;
    }
    export class $NoiseChunk$CacheOnce implements $DensityFunctions$MarkerOrMarked, $NoiseChunk$NoiseChunkDensityFunction {
        wrapped(): $DensityFunction;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        type(): $DensityFunctions$Marker$Type;
        compute(arg0: $DensityFunction$FunctionContext): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        square(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
    }
    export class $OreVeinifier$VeinType extends $Enum<$OreVeinifier$VeinType> {
        static values(): $OreVeinifier$VeinType[];
        static valueOf(arg0: string): $OreVeinifier$VeinType;
        minY: number;
        maxY: number;
        static COPPER: $OreVeinifier$VeinType;
        static IRON: $OreVeinifier$VeinType;
    }
    /**
     * Values that may be interpreted as {@link $OreVeinifier$VeinType}.
     */
    export type $OreVeinifier$VeinType_ = "copper" | "iron";
    export class $DensityFunctions$ShiftB extends $Record implements $DensityFunctions$ShiftNoise {
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        offsetNoise(): $DensityFunction$NoiseHolder;
        compute(arg0: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        compute(arg0: number, arg1: number, arg2: number): number;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        square(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$ShiftB}.
     */
    export type $DensityFunctions$ShiftB_ = { offsetNoise?: $DensityFunction$NoiseHolder_,  } | [offsetNoise?: $DensityFunction$NoiseHolder_, ];
    export class $DensityFunctions$ShiftA extends $Record implements $DensityFunctions$ShiftNoise {
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        offsetNoise(): $DensityFunction$NoiseHolder;
        compute(arg0: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        compute(arg0: number, arg1: number, arg2: number): number;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        square(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$ShiftA}.
     */
    export type $DensityFunctions$ShiftA_ = { offsetNoise?: $DensityFunction$NoiseHolder_,  } | [offsetNoise?: $DensityFunction$NoiseHolder_, ];
    export class $SurfaceRules$VerticalGradientConditionSource$1VerticalGradientCondition extends $SurfaceRules$LazyYCondition {
    }
    export class $NoiseRouter extends $Record {
        temperature(): $DensityFunction;
        mapAll(arg0: $DensityFunction$Visitor_): $NoiseRouter;
        initialDensityWithoutJaggedness(): $DensityFunction;
        erosion(): $DensityFunction;
        ridges(): $DensityFunction;
        vegetation(): $DensityFunction;
        finalDensity(): $DensityFunction;
        barrierNoise(): $DensityFunction;
        fluidLevelFloodednessNoise(): $DensityFunction;
        fluidLevelSpreadNoise(): $DensityFunction;
        lavaNoise(): $DensityFunction;
        veinToggle(): $DensityFunction;
        veinRidged(): $DensityFunction;
        veinGap(): $DensityFunction;
        continents(): $DensityFunction;
        depth(): $DensityFunction;
        static CODEC: $Codec<$NoiseRouter>;
        constructor(arg0: $DensityFunction_, arg1: $DensityFunction_, arg2: $DensityFunction_, arg3: $DensityFunction_, arg4: $DensityFunction_, arg5: $DensityFunction_, arg6: $DensityFunction_, arg7: $DensityFunction_, arg8: $DensityFunction_, arg9: $DensityFunction_, arg10: $DensityFunction_, arg11: $DensityFunction_, arg12: $DensityFunction_, arg13: $DensityFunction_, arg14: $DensityFunction_);
    }
    /**
     * Values that may be interpreted as {@link $NoiseRouter}.
     */
    export type $NoiseRouter_ = { fluidLevelFloodednessNoise?: $DensityFunction_, lavaNoise?: $DensityFunction_, veinToggle?: $DensityFunction_, initialDensityWithoutJaggedness?: $DensityFunction_, continents?: $DensityFunction_, veinGap?: $DensityFunction_, veinRidged?: $DensityFunction_, finalDensity?: $DensityFunction_, temperature?: $DensityFunction_, barrierNoise?: $DensityFunction_, vegetation?: $DensityFunction_, depth?: $DensityFunction_, ridges?: $DensityFunction_, erosion?: $DensityFunction_, fluidLevelSpreadNoise?: $DensityFunction_,  } | [fluidLevelFloodednessNoise?: $DensityFunction_, lavaNoise?: $DensityFunction_, veinToggle?: $DensityFunction_, initialDensityWithoutJaggedness?: $DensityFunction_, continents?: $DensityFunction_, veinGap?: $DensityFunction_, veinRidged?: $DensityFunction_, finalDensity?: $DensityFunction_, temperature?: $DensityFunction_, barrierNoise?: $DensityFunction_, vegetation?: $DensityFunction_, depth?: $DensityFunction_, ridges?: $DensityFunction_, erosion?: $DensityFunction_, fluidLevelSpreadNoise?: $DensityFunction_, ];
    export class $RandomState implements $RandomStateAccessor {
        sampler(): $Climate$Sampler;
        router(): $NoiseRouter;
        surfaceSystem(): $SurfaceSystem;
        getOrCreateNoise(arg0: $ResourceKey_<$NormalNoise$NoiseParameters>): $NormalNoise;
        getOrCreateRandomFactory(arg0: $ResourceLocation_): $PositionalRandomFactory;
        aquiferRandom(): $PositionalRandomFactory;
        oreRandom(): $PositionalRandomFactory;
        static create(arg0: $HolderGetter$Provider_, arg1: $ResourceKey_<$NoiseGeneratorSettings>, arg2: number): $RandomState;
        static create(arg0: $NoiseGeneratorSettings_, arg1: $HolderGetter<$NormalNoise$NoiseParameters_>, arg2: number): $RandomState;
        getRandom(): $PositionalRandomFactory;
        get random(): $PositionalRandomFactory;
    }
    export class $WorldgenRandom$Algorithm extends $Enum<$WorldgenRandom$Algorithm> {
        static values(): $WorldgenRandom$Algorithm[];
        static valueOf(arg0: string): $WorldgenRandom$Algorithm;
        newInstance(arg0: number): $RandomSource;
        static LEGACY: $WorldgenRandom$Algorithm;
        static XOROSHIRO: $WorldgenRandom$Algorithm;
    }
    /**
     * Values that may be interpreted as {@link $WorldgenRandom$Algorithm}.
     */
    export type $WorldgenRandom$Algorithm_ = "legacy" | "xoroshiro";
    export class $DensityFunctions$MulOrAdd extends $Record implements $DensityFunctions$PureTransformer, $DensityFunctions$TwoArgumentSimpleFunction {
        specificType(): $DensityFunctions$MulOrAdd$Type;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        argument1(): $DensityFunction;
        argument2(): $DensityFunction;
        argument(): number;
        input(): $DensityFunction;
        maxValue(): number;
        minValue(): number;
        type(): $DensityFunctions$TwoArgumentSimpleFunction$Type;
        transform(arg0: number): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        compute(arg0: $DensityFunction$FunctionContext): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        square(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        constructor(arg0: $DensityFunctions$MulOrAdd$Type_, arg1: $DensityFunction_, arg2: number, arg3: number, arg4: number);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$MulOrAdd}.
     */
    export type $DensityFunctions$MulOrAdd_ = { argument?: number, maxValue?: number, specificType?: $DensityFunctions$MulOrAdd$Type_, minValue?: number, input?: $DensityFunction_,  } | [argument?: number, maxValue?: number, specificType?: $DensityFunctions$MulOrAdd$Type_, minValue?: number, input?: $DensityFunction_, ];
    export class $DensityFunctions$PureTransformer {
    }
    export interface $DensityFunctions$PureTransformer extends $DensityFunction {
        input(): $DensityFunction;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        transform(arg0: number): number;
        compute(arg0: $DensityFunction$FunctionContext): number;
    }
    export class $RandomState$1NoiseWiringHelper implements $DensityFunction$Visitor {
        visitNoise(arg0: $DensityFunction$NoiseHolder_): $DensityFunction$NoiseHolder;
    }
    export class $DensityFunctions$MulOrAdd$Type extends $Enum<$DensityFunctions$MulOrAdd$Type> {
        static values(): $DensityFunctions$MulOrAdd$Type[];
        static valueOf(arg0: string): $DensityFunctions$MulOrAdd$Type;
        static ADD: $DensityFunctions$MulOrAdd$Type;
        static MUL: $DensityFunctions$MulOrAdd$Type;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$MulOrAdd$Type}.
     */
    export type $DensityFunctions$MulOrAdd$Type_ = "mul" | "add";
    export class $SurfaceRules$BlockRuleSource extends $Record implements $SurfaceRules$RuleSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$SurfaceRule>;
        andThen<V>(arg0: $Function_<$SurfaceRules$SurfaceRule, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$BlockRuleSource}.
     */
    export type $SurfaceRules$BlockRuleSource_ = { rule?: $SurfaceRules$StateRule_, resultState?: $BlockState_,  } | [rule?: $SurfaceRules$StateRule_, resultState?: $BlockState_, ];
    export class $GenerationStep$Decoration extends $Enum<$GenerationStep$Decoration> implements $StringRepresentable {
        getSerializedName(): string;
        getName(): string;
        static values(): $GenerationStep$Decoration[];
        static valueOf(arg0: string): $GenerationStep$Decoration;
        getRemappedEnumConstantName(): string;
        static RAW_GENERATION: $GenerationStep$Decoration;
        static UNDERGROUND_STRUCTURES: $GenerationStep$Decoration;
        static LOCAL_MODIFICATIONS: $GenerationStep$Decoration;
        static TOP_LAYER_MODIFICATION: $GenerationStep$Decoration;
        static CODEC: $Codec<$GenerationStep$Decoration>;
        static UNDERGROUND_DECORATION: $GenerationStep$Decoration;
        static LAKES: $GenerationStep$Decoration;
        static SURFACE_STRUCTURES: $GenerationStep$Decoration;
        static STRONGHOLDS: $GenerationStep$Decoration;
        static FLUID_SPRINGS: $GenerationStep$Decoration;
        static VEGETAL_DECORATION: $GenerationStep$Decoration;
        static UNDERGROUND_ORES: $GenerationStep$Decoration;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $GenerationStep$Decoration}.
     */
    export type $GenerationStep$Decoration_ = "raw_generation" | "lakes" | "local_modifications" | "underground_structures" | "surface_structures" | "strongholds" | "underground_ores" | "underground_decoration" | "fluid_springs" | "vegetal_decoration" | "top_layer_modification";
    export class $SurfaceRules$TestRule extends $Record implements $SurfaceRules$SurfaceRule {
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$TestRule}.
     */
    export type $SurfaceRules$TestRule_ = { condition?: $SurfaceRules$Condition_, followup?: $SurfaceRules$SurfaceRule_,  } | [condition?: $SurfaceRules$Condition_, followup?: $SurfaceRules$SurfaceRule_, ];
    export class $Aquifer$FluidPicker {
    }
    export interface $Aquifer$FluidPicker {
        computeFluid(arg0: number, arg1: number, arg2: number): $Aquifer$FluidStatus;
    }
    /**
     * Values that may be interpreted as {@link $Aquifer$FluidPicker}.
     */
    export type $Aquifer$FluidPicker_ = ((arg0: number, arg1: number, arg2: number) => $Aquifer$FluidStatus);
    export class $DensityFunctions$RangeChoice extends $Record implements $DensityFunction {
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        minInclusive(): number;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        maxExclusive(): number;
        whenInRange(): $DensityFunction;
        whenOutOfRange(): $DensityFunction;
        input(): $DensityFunction;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        compute(arg0: $DensityFunction$FunctionContext): number;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        square(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$RangeChoice>;
        static DATA_CODEC: $MapCodec<$DensityFunctions$RangeChoice>;
        constructor(arg0: $DensityFunction_, arg1: number, arg2: number, arg3: $DensityFunction_, arg4: $DensityFunction_);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$RangeChoice}.
     */
    export type $DensityFunctions$RangeChoice_ = { whenOutOfRange?: $DensityFunction_, whenInRange?: $DensityFunction_, minInclusive?: number, maxExclusive?: number, input?: $DensityFunction_,  } | [whenOutOfRange?: $DensityFunction_, whenInRange?: $DensityFunction_, minInclusive?: number, maxExclusive?: number, input?: $DensityFunction_, ];
    export class $DensityFunctions$BeardifierMarker extends $Enum<$DensityFunctions$BeardifierMarker> implements $DensityFunctions$BeardifierOrMarker {
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        static values(): $DensityFunctions$BeardifierMarker[];
        static valueOf(arg0: string): $DensityFunctions$BeardifierMarker;
        compute(arg0: $DensityFunction$FunctionContext): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        square(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        static INSTANCE: $DensityFunctions$BeardifierMarker;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$BeardifierMarker}.
     */
    export type $DensityFunctions$BeardifierMarker_ = "instance";
    export class $WorldDimensions$Complete extends $Record {
        lifecycle(): $Lifecycle;
        specialWorldProperty(): $PrimaryLevelData$SpecialWorldProperty;
        dimensionsRegistryAccess(): $RegistryAccess$Frozen;
        dimensions(): $Registry<$LevelStem>;
        constructor(dimensions: $Registry<$LevelStem_>, specialWorldProperty: $PrimaryLevelData$SpecialWorldProperty_);
    }
    /**
     * Values that may be interpreted as {@link $WorldDimensions$Complete}.
     */
    export type $WorldDimensions$Complete_ = { dimensions?: $Registry<$LevelStem_>, specialWorldProperty?: $PrimaryLevelData$SpecialWorldProperty_,  } | [dimensions?: $Registry<$LevelStem_>, specialWorldProperty?: $PrimaryLevelData$SpecialWorldProperty_, ];
    export class $RandomSupport {
        static generateUniqueSeed(): number;
        static seedFromHashOf(arg0: string): $RandomSupport$Seed128bit;
        static upgradeSeedTo128bitUnmixed(arg0: number): $RandomSupport$Seed128bit;
        static upgradeSeedTo128bit(arg0: number): $RandomSupport$Seed128bit;
        static mixStafford13(arg0: number): number;
        static GOLDEN_RATIO_64: number;
        static SILVER_RATIO_64: number;
        constructor();
    }
    export class $XoroshiroRandomSource$XoroshiroPositionalRandomFactory implements $PositionalRandomFactory, $IXoroshiro128PlusPlusRandomDeriver {
        parityConfigString(arg0: $StringBuilder): void;
        fromHashOf(arg0: string): $RandomSource;
        fromSeed(arg0: number): $RandomSource;
        at(arg0: number, arg1: number, arg2: number): $RandomSource;
        fromHashOf(arg0: $ResourceLocation_): $RandomSource;
        at(arg0: $BlockPos_): $RandomSource;
        getSeedLo(): number;
        getSeedHi(): number;
        constructor(arg0: number, arg1: number);
        get seedLo(): number;
        get seedHi(): number;
    }
    export class $DensityFunctions$Mapped extends $Record implements $DensityFunctions$PureTransformer {
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunctions$Mapped;
        static create(arg0: $DensityFunctions$Mapped$Type_, arg1: $DensityFunction_): $DensityFunctions$Mapped;
        input(): $DensityFunction;
        maxValue(): number;
        minValue(): number;
        type(): $DensityFunctions$Mapped$Type;
        transform(arg0: number): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        compute(arg0: $DensityFunction$FunctionContext): number;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        square(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        constructor(arg0: $DensityFunctions$Mapped$Type_, arg1: $DensityFunction_, arg2: number, arg3: number);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Mapped}.
     */
    export type $DensityFunctions$Mapped_ = { input?: $DensityFunction_, type?: $DensityFunctions$Mapped$Type_, maxValue?: number, minValue?: number,  } | [input?: $DensityFunction_, type?: $DensityFunctions$Mapped$Type_, maxValue?: number, minValue?: number, ];
    export interface $SurfaceRules$RuleSource extends RegistryMarked<RegistryTypes.LithostitchedSurfaceRuleTag, RegistryTypes.LithostitchedSurfaceRule> {}
    export class $SurfaceRules$SequenceRule extends $Record implements $SurfaceRules$SurfaceRule {
        tryApply(i: number, j: number, k: number): $BlockState;
        rules(): $List<$SurfaceRules$SurfaceRule>;
        constructor(arg0: $List_<$SurfaceRules$SurfaceRule_>);
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$SequenceRule}.
     */
    export type $SurfaceRules$SequenceRule_ = { rules?: $List_<$SurfaceRules$SurfaceRule_>,  } | [rules?: $List_<$SurfaceRules$SurfaceRule_>, ];
    export class $PhantomSpawner implements $CustomSpawner {
        tick(arg0: $ServerLevel, arg1: boolean, arg2: boolean): number;
        nextTick: number;
        constructor();
    }
    export class $SurfaceRules$StoneDepthCheck extends $Record implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$StoneDepthCheck}.
     */
    export type $SurfaceRules$StoneDepthCheck_ = { offset?: number, secondaryDepthRange?: number, surfaceType?: $CaveSurface_, addSurfaceDepth?: boolean,  } | [offset?: number, secondaryDepthRange?: number, surfaceType?: $CaveSurface_, addSurfaceDepth?: boolean, ];
    export class $NoiseRouterData$QuantizedSpaghettiRarity implements $IDensityFunctionsCaveScaler {
        static invokeScaleCaves$c2me_base_$md$68cb88$0(arg0: number): number;
        static invokeScaleTunnels$c2me_base_$md$68cb88$1(arg0: number): number;
    }
    export class $Density {
        static UNRECOVERABLY_DENSE: number;
        static UNRECOVERABLY_THIN: number;
        static SURFACE: number;
        constructor();
    }
    export class $DensityFunction$SimpleFunction {
    }
    export interface $DensityFunction$SimpleFunction extends $DensityFunction {
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
    }
    export class $SurfaceRules$StateRule extends $Record implements $SurfaceRules$SurfaceRule {
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$StateRule}.
     */
    export type $SurfaceRules$StateRule_ = { state?: $BlockState_,  } | [state?: $BlockState_, ];
    export class $SurfaceRules$RuleSource {
        static bootstrap(arg0: $Registry<$MapCodec_<$SurfaceRules$RuleSource_>>): $MapCodec<$SurfaceRules$RuleSource>;
        static CODEC: $Codec<$SurfaceRules$RuleSource>;
    }
    export interface $SurfaceRules$RuleSource extends $Function<$SurfaceRules$Context, $SurfaceRules$SurfaceRule> {
        codec(): $KeyDispatchDataCodec<$SurfaceRules$RuleSource>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$RuleSource}.
     */
    export type $SurfaceRules$RuleSource_ = RegistryTypes.LithostitchedSurfaceRule;
    export class $Aquifer {
        static createDisabled(arg0: $Aquifer$FluidPicker_): $Aquifer;
        static create(arg0: $NoiseChunk, arg1: $ChunkPos, arg2: $NoiseRouter_, arg3: $PositionalRandomFactory, arg4: number, arg5: number, arg6: $Aquifer$FluidPicker_): $Aquifer;
    }
    export interface $Aquifer {
        shouldScheduleFluidUpdate(): boolean;
        computeSubstance(arg0: $DensityFunction$FunctionContext, arg1: number): $BlockState;
    }
    export class $DensityFunction$Visitor {
    }
    export interface $DensityFunction$Visitor {
        visitNoise(arg0: $DensityFunction$NoiseHolder_): $DensityFunction$NoiseHolder;
        apply(arg0: $DensityFunction_): $DensityFunction;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunction$Visitor}.
     */
    export type $DensityFunction$Visitor_ = ((arg0: $DensityFunction) => $DensityFunction_);
    export class $Column$Ray extends $Column {
        constructor(arg0: number, arg1: boolean);
    }
    export class $PatrolSpawner implements $CustomSpawner {
        tick(arg0: $ServerLevel, arg1: boolean, arg2: boolean): number;
        constructor();
    }
    export class $DensityFunction {
        static CODEC: $Codec<$Holder<$DensityFunction>>;
        static DIRECT_CODEC: $Codec<$DensityFunction>;
        static HOLDER_HELPER_CODEC: $Codec<$DensityFunction>;
    }
    export interface $DensityFunction {
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        square(): $DensityFunction;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        compute(arg0: $DensityFunction$FunctionContext): number;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunction}.
     */
    export type $DensityFunction_ = RegistryTypes.WorldgenDensityFunction;
    export class $NoiseChunk$CacheAllInCell implements $DensityFunctions$MarkerOrMarked, $NoiseChunk$NoiseChunkDensityFunction {
        wrapped(): $DensityFunction;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        type(): $DensityFunctions$Marker$Type;
        compute(arg0: $DensityFunction$FunctionContext): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        square(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
    }
    export class $DensityFunction$SinglePointContext extends $Record implements $DensityFunction$FunctionContext {
        blockX(): number;
        blockY(): number;
        blockZ(): number;
        getBlender(): $Blender;
        constructor(arg0: number, arg1: number, arg2: number);
        get blender(): $Blender;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunction$SinglePointContext}.
     */
    export type $DensityFunction$SinglePointContext_ = { blockX?: number, blockY?: number, blockZ?: number,  } | [blockX?: number, blockY?: number, blockZ?: number, ];
    export class $LegacyRandomSource$LegacyPositionalRandomFactory implements $PositionalRandomFactory, $IAtomicSimpleRandomDeriver {
        parityConfigString(arg0: $StringBuilder): void;
        fromHashOf(string: string): $RandomSource;
        fromSeed(arg0: number): $RandomSource;
        at(x: number, y: number, z: number): $RandomSource;
        fromHashOf(arg0: $ResourceLocation_): $RandomSource;
        at(arg0: $BlockPos_): $RandomSource;
        getSeed(): number;
        constructor(arg0: number);
        get seed(): number;
    }
    export class $WorldGenerationContext {
        getMinGenY(): number;
        getGenDepth(): number;
        constructor(arg0: $ChunkGenerator, arg1: $LevelHeightAccessor);
        get minGenY(): number;
        get genDepth(): number;
    }
    export class $NoiseChunk$NoiseInterpolator implements $DensityFunctions$MarkerOrMarked, $NoiseChunk$NoiseChunkDensityFunction, $IChunkNoiseSamplerDensityInterpolator {
        wrapped(): $DensityFunction;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        type(): $DensityFunctions$Marker$Type;
        compute(arg0: $DensityFunction$FunctionContext): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        square(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        invokeInterpolateX(arg0: number): void;
        invokeInterpolateY(arg0: number): void;
        invokeInterpolateZ(arg0: number): void;
    }
    export class $NoiseChunk$BlockStateFiller {
    }
    export interface $NoiseChunk$BlockStateFiller {
        calculate(arg0: $DensityFunction$FunctionContext): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $NoiseChunk$BlockStateFiller}.
     */
    export type $NoiseChunk$BlockStateFiller_ = ((arg0: $DensityFunction$FunctionContext) => $BlockState_);
    export class $DensityFunctions$Mapped$Type extends $Enum<$DensityFunctions$Mapped$Type> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $DensityFunctions$Mapped$Type[];
        static valueOf(arg0: string): $DensityFunctions$Mapped$Type;
        getRemappedEnumConstantName(): string;
        static HALF_NEGATIVE: $DensityFunctions$Mapped$Type;
        static ABS: $DensityFunctions$Mapped$Type;
        static SQUARE: $DensityFunctions$Mapped$Type;
        static QUARTER_NEGATIVE: $DensityFunctions$Mapped$Type;
        static SQUEEZE: $DensityFunctions$Mapped$Type;
        static CUBE: $DensityFunctions$Mapped$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Mapped$Type}.
     */
    export type $DensityFunctions$Mapped$Type_ = "abs" | "square" | "cube" | "half_negative" | "quarter_negative" | "squeeze";
    export class $NoiseChunk$BlendAlpha implements $NoiseChunk$NoiseChunkDensityFunction {
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        wrapped(): $DensityFunction;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        compute(arg0: $DensityFunction$FunctionContext): number;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        square(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
    }
    export class $GenerationStep$Carving extends $Enum<$GenerationStep$Carving> implements $StringRepresentable {
        getSerializedName(): string;
        getName(): string;
        static values(): $GenerationStep$Carving[];
        static valueOf(arg0: string): $GenerationStep$Carving;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$GenerationStep$Carving>;
        static LIQUID: $GenerationStep$Carving;
        static AIR: $GenerationStep$Carving;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $GenerationStep$Carving}.
     */
    export type $GenerationStep$Carving_ = "air" | "liquid";
    export class $WorldDimensions extends $Record {
        static withOverworld(arg0: $Registry<$DimensionType_>, arg1: $Map_<$ResourceKey_<$LevelStem>, $LevelStem_>, arg2: $ChunkGenerator): $Map<$ResourceKey<$LevelStem>, $LevelStem>;
        static withOverworld(arg0: $Map_<$ResourceKey_<$LevelStem>, $LevelStem_>, arg1: $Holder_<$DimensionType>, arg2: $ChunkGenerator): $Map<$ResourceKey<$LevelStem>, $LevelStem>;
        overworld(): $ChunkGenerator;
        bake(arg0: $Registry<$LevelStem_>): $WorldDimensions$Complete;
        replaceOverworldGenerator(arg0: $RegistryAccess, arg1: $ChunkGenerator): $WorldDimensions;
        levels(): $ImmutableSet<$ResourceKey<$Level>>;
        static keysInOrder(arg0: $Stream<$ResourceKey_<$LevelStem>>): $Stream<$ResourceKey<$LevelStem>>;
        isDebug(): boolean;
        get(arg0: $ResourceKey_<$LevelStem>): ($LevelStem) | undefined;
        dimensions(): $Map<$ResourceKey<$LevelStem>, $LevelStem>;
        static CODEC: $MapCodec<$WorldDimensions>;
        constructor(dimensions: $Map_<$ResourceKey_<$LevelStem>, $LevelStem_>);
        constructor(arg0: $Registry<$LevelStem_>);
        get debug(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WorldDimensions}.
     */
    export type $WorldDimensions_ = { dimensions?: $Map_<$ResourceKey_<$LevelStem>, $LevelStem_>,  } | [dimensions?: $Map_<$ResourceKey_<$LevelStem>, $LevelStem_>, ];
    export class $DensityFunctions$Marker extends $Record implements $DensityFunctions$MarkerOrMarked {
        wrapped(): $DensityFunction;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        type(): $DensityFunctions$Marker$Type;
        compute(arg0: $DensityFunction$FunctionContext): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        square(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        constructor(arg0: $DensityFunctions$Marker$Type_, arg1: $DensityFunction_);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Marker}.
     */
    export type $DensityFunctions$Marker_ = { wrapped?: $DensityFunction_, type?: $DensityFunctions$Marker$Type_,  } | [wrapped?: $DensityFunction_, type?: $DensityFunctions$Marker$Type_, ];
    export class $WorldGenSettings extends $Record {
        options(): $WorldOptions;
        static encode<T>(arg0: $DynamicOps<T>, arg1: $WorldOptions, arg2: $RegistryAccess): $DataResult<T>;
        static encode<T>(arg0: $DynamicOps<T>, arg1: $WorldOptions, arg2: $WorldDimensions_): $DataResult<T>;
        dimensions(): $WorldDimensions;
        static CODEC: $Codec<$WorldGenSettings>;
        constructor(arg0: $WorldOptions, arg1: $WorldDimensions_);
    }
    /**
     * Values that may be interpreted as {@link $WorldGenSettings}.
     */
    export type $WorldGenSettings_ = { dimensions?: $WorldDimensions_, options?: $WorldOptions,  } | [dimensions?: $WorldDimensions_, options?: $WorldOptions, ];
    export class $SurfaceRules$LazyXZCondition extends $SurfaceRules$LazyCondition {
    }
    export class $NoiseGeneratorSettings extends $Record implements $MixinChunkGeneratorSettings, $NoiseGeneratorSettingsAccessor$2, $IExtendedNoiseGeneratorSettings, $NoiseGeneratorSettingsAccessor$1, $NoiseGeneratorSettingsAccessor, $NoiseGeneratorSettingsMixin {
        static overworld(arg0: $BootstrapContext<never>, arg1: boolean, arg2: boolean): $NoiseGeneratorSettings;
        defaultBlock(): $BlockState;
        seaLevel(): number;
        surfaceRule(): $SurfaceRules$RuleSource;
        defaultFluid(): $BlockState;
        spawnTarget(): $List<$Climate$ParameterPoint>;
        static nether(arg0: $BootstrapContext<never>): $NoiseGeneratorSettings;
        noiseSettings(): $NoiseSettings;
        useLegacyRandomSource(): boolean;
        noiseRouter(): $NoiseRouter;
        aquifersEnabled(): boolean;
        oreVeinsEnabled(): boolean;
        isAquifersEnabled(): boolean;
        getRandomSource(): $WorldgenRandom$Algorithm;
        static caves(arg0: $BootstrapContext<never>): $NoiseGeneratorSettings;
        static floatingIslands(arg0: $BootstrapContext<never>): $NoiseGeneratorSettings;
        setRuleCategory(arg0: $SurfaceRuleManager$RuleCategory_): void;
        /**
         * @deprecated
         */
        disableMobGeneration(): boolean;
        static bootstrap(arg0: $BootstrapContext<$NoiseGeneratorSettings_>): void;
        static end(arg0: $BootstrapContext<never>): $NoiseGeneratorSettings;
        static dummy(): $NoiseGeneratorSettings;
        biolith$setSurfaceRule(arg0: $SurfaceRules$RuleSource_): void;
        bumblezone$setNoiseRouter(arg0: $NoiseRouter_): void;
        setSurfaceRule(arg0: $SurfaceRules$RuleSource_): void;
        setNoiseRouter(noiseRouter: $NoiseRouter_): void;
        static AMPLIFIED: $ResourceKey<$NoiseGeneratorSettings>;
        static CODEC: $Codec<$Holder<$NoiseGeneratorSettings>>;
        static OVERWORLD: $ResourceKey<$NoiseGeneratorSettings>;
        static NETHER: $ResourceKey<$NoiseGeneratorSettings>;
        static CAVES: $ResourceKey<$NoiseGeneratorSettings>;
        static DIRECT_CODEC: $Codec<$NoiseGeneratorSettings>;
        static END: $ResourceKey<$NoiseGeneratorSettings>;
        static FLOATING_ISLANDS: $ResourceKey<$NoiseGeneratorSettings>;
        static LARGE_BIOMES: $ResourceKey<$NoiseGeneratorSettings>;
        constructor(arg0: $NoiseSettings_, arg1: $BlockState_, arg2: $BlockState_, arg3: $NoiseRouter_, arg4: $SurfaceRules$RuleSource_, arg5: $List_<$Climate$ParameterPoint_>, arg6: number, arg7: boolean, arg8: boolean, arg9: boolean, arg10: boolean);
        get randomSource(): $WorldgenRandom$Algorithm;
        set ruleCategory(value: $SurfaceRuleManager$RuleCategory_);
    }
    /**
     * Values that may be interpreted as {@link $NoiseGeneratorSettings}.
     */
    export type $NoiseGeneratorSettings_ = RegistryTypes.WorldgenNoiseSettings | { seaLevel?: number, aquifersEnabled?: boolean, useLegacyRandomSource?: boolean, disableMobGeneration?: boolean, surfaceRule?: $SurfaceRules$RuleSource_, oreVeinsEnabled?: boolean, defaultBlock?: $BlockState_, noiseSettings?: $NoiseSettings_, defaultFluid?: $BlockState_, spawnTarget?: $List_<$Climate$ParameterPoint_>, noiseRouter?: $NoiseRouter_,  } | [seaLevel?: number, aquifersEnabled?: boolean, useLegacyRandomSource?: boolean, disableMobGeneration?: boolean, surfaceRule?: $SurfaceRules$RuleSource_, oreVeinsEnabled?: boolean, defaultBlock?: $BlockState_, noiseSettings?: $NoiseSettings_, defaultFluid?: $BlockState_, spawnTarget?: $List_<$Climate$ParameterPoint_>, noiseRouter?: $NoiseRouter_, ];
    export class $DensityFunctions$Shift extends $Record implements $DensityFunctions$ShiftNoise {
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        offsetNoise(): $DensityFunction$NoiseHolder;
        compute(arg0: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        compute(arg0: number, arg1: number, arg2: number): number;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        square(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Shift}.
     */
    export type $DensityFunctions$Shift_ = { offsetNoise?: $DensityFunction$NoiseHolder_,  } | [offsetNoise?: $DensityFunction$NoiseHolder_, ];
    /**
     * @deprecated
     */
    export class $DebugLevelSource extends $ChunkGenerator implements $DebugChunkGeneratorAccessor {
        static initValidStates(): void;
        static getBlockStateFor(arg0: number, arg1: number): $BlockState;
        static setBLOCK_STATES$fabric_registry_sync_v0_$md$68cb88$0(arg0: $List_<any>): void;
        static setX_SIDE_LENGTH$fabric_registry_sync_v0_$md$68cb88$1(arg0: number): void;
        static setZ_SIDE_LENGTH$fabric_registry_sync_v0_$md$68cb88$2(arg0: number): void;
        featuresPerStep: $Supplier<$List<$FeatureSorter$StepFeatureData>>;
        static CODEC: $MapCodec<$DebugLevelSource>;
        static BARRIER_HEIGHT: number;
        biomeSource: $BiomeSource;
        static HEIGHT: number;
        constructor(arg0: $Holder$Reference<$Biome_>);
        static set BLOCK_STATES$fabric_registry_sync_v0_$md$68cb88$0(value: $List_<any>);
        static set x_SIDE_LENGTH$fabric_registry_sync_v0_$md$68cb88$1(value: number);
        static set z_SIDE_LENGTH$fabric_registry_sync_v0_$md$68cb88$2(value: number);
    }
    export class $WorldOptions {
        withBonusChest(arg0: boolean): $WorldOptions;
        withStructures(arg0: boolean): $WorldOptions;
        withSeed(arg0: $OptionalLong): $WorldOptions;
        generateBonusChest(): boolean;
        static parseSeed(arg0: string): $OptionalLong;
        generateStructures(): boolean;
        static randomSeed(): number;
        static defaultWithRandomSeed(): $WorldOptions;
        isOldCustomizedWorld(): boolean;
        seed(): number;
        static CODEC: $MapCodec<$WorldOptions>;
        static DEMO_OPTIONS: $WorldOptions;
        constructor(arg0: number, arg1: boolean, arg2: boolean);
        get oldCustomizedWorld(): boolean;
    }
    export class $GeodeLayerSettings {
        filling: number;
        static CODEC: $Codec<$GeodeLayerSettings>;
        outerLayer: number;
        innerLayer: number;
        middleLayer: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    export class $Beardifier implements $DensityFunctions$BeardifierOrMarker, $EnhancedBeardifierData, $BeardifierAccessor$1, $BeardifierAccessor, $IStructureWeightSampler {
        static forStructuresInChunk(arg0: $StructureManager, arg1: $ChunkPos): $Beardifier;
        handler$cmb000$integrated_api$intapi_calculateDensity(ctx: $DensityFunction$FunctionContext, cir: $CallbackInfoReturnable<any>): void;
        getEnhancedRigidIterator(): $ObjectListIterator<any>;
        setEnhancedRigidIterator(enhancedRigidIterator: $ObjectListIterator<any>): void;
        getEnhancedJunctionIterator(): $ObjectListIterator<any>;
        setEnhancedJunctionIterator(enhancedJunctionIterator: $ObjectListIterator<any>): void;
        maxValue(): number;
        minValue(): number;
        compute(pos: $DensityFunction$FunctionContext): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        square(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        getPieceIterator(): $ObjectListIterator<$Beardifier$Rigid>;
        getJunctionIterator(): $ObjectListIterator<$JigsawJunction>;
        static BEARD_KERNEL_RADIUS: number;
        constructor(arg0: $ObjectListIterator<$Beardifier$Rigid_>, arg1: $ObjectListIterator<$JigsawJunction>);
        get pieceIterator(): $ObjectListIterator<$Beardifier$Rigid>;
        get junctionIterator(): $ObjectListIterator<$JigsawJunction>;
    }
    export class $SurfaceRules$YConditionSource extends $Record implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$YConditionSource}.
     */
    export type $SurfaceRules$YConditionSource_ = { addStoneDepth?: boolean, anchor?: $VerticalAnchor_, surfaceDepthMultiplier?: number,  } | [addStoneDepth?: boolean, anchor?: $VerticalAnchor_, surfaceDepthMultiplier?: number, ];
    export class $SurfaceRules$WaterConditionSource extends $Record implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$WaterConditionSource}.
     */
    export type $SurfaceRules$WaterConditionSource_ = { offset?: number, addStoneDepth?: boolean, surfaceDepthMultiplier?: number,  } | [offset?: number, addStoneDepth?: boolean, surfaceDepthMultiplier?: number, ];
    export class $SurfaceRules$NoiseThresholdConditionSource extends $Record implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$NoiseThresholdConditionSource}.
     */
    export type $SurfaceRules$NoiseThresholdConditionSource_ = { minThreshold?: number, noise?: $ResourceKey_<$NormalNoise$NoiseParameters>, maxThreshold?: number,  } | [minThreshold?: number, noise?: $ResourceKey_<$NormalNoise$NoiseParameters>, maxThreshold?: number, ];
    export class $Heightmap implements $HeightmapAccessor {
        static primeHeightmaps(arg0: $ChunkAccess, arg1: $Set_<$Heightmap$Types_>): void;
        getFirstAvailable(arg0: number, arg1: number): number;
        getHighestTaken(arg0: number, arg1: number): number;
        setRawData(arg0: $ChunkAccess, arg1: $Heightmap$Types_, arg2: number[]): void;
        getRawData(): number[];
        update(arg0: number, arg1: number, arg2: number, arg3: $BlockState_): boolean;
        callSet(arg0: number, arg1: number, arg2: number): void;
        getBlockPredicate(): $Predicate<$BlockState>;
        constructor(arg0: $ChunkAccess, arg1: $Heightmap$Types_);
        get blockPredicate(): $Predicate<$BlockState>;
    }
    export class $SurfaceRules$LazyCondition implements $SurfaceRules$Condition {
        test(): boolean;
    }
    export class $NoiseRouterData {
        static peaksAndValleys(arg0: number): number;
        static bootstrap(arg0: $BootstrapContext<$DensityFunction_>): $Holder<$DensityFunction>;
        static ISLAND_CHUNK_DISTANCE: number;
        static CONTINENTS: $ResourceKey<$DensityFunction>;
        static JAGGEDNESS: $ResourceKey<$DensityFunction>;
        static GLOBAL_OFFSET: number;
        static RIDGES_FOLDED: $ResourceKey<$DensityFunction>;
        static FACTOR: $ResourceKey<$DensityFunction>;
        static EROSION: $ResourceKey<$DensityFunction>;
        static ISLAND_CHUNK_DISTANCE_SQR: number;
        static EROSION_LARGE: $ResourceKey<$DensityFunction>;
        static OFFSET: $ResourceKey<$DensityFunction>;
        static CONTINENTS_LARGE: $ResourceKey<$DensityFunction>;
        static RIDGES: $ResourceKey<$DensityFunction>;
        static DEPTH: $ResourceKey<$DensityFunction>;
        constructor();
    }
    export class $SurfaceRules$StoneDepthCheck$1StoneDepthCondition extends $SurfaceRules$LazyYCondition {
    }
    export class $BelowZeroRetrogen implements $IBelowZeroRetrogen {
        static replaceOldBedrock(arg0: $ProtoChunk): void;
        hasBedrockHoles(): boolean;
        applyBedrockMask(arg0: $ProtoChunk): void;
        targetStatus(): $ChunkStatus;
        static getBiomeResolver(arg0: $BiomeResolver_, arg1: $ChunkAccess): $BiomeResolver;
        hasBedrockHole(arg0: number, arg1: number): boolean;
        static read(arg0: $CompoundTag_): $BelowZeroRetrogen;
        getMissingBedrock(): $BitSet;
        invokeGetTargetStatus(): $ChunkStatus;
        static CODEC: $Codec<$BelowZeroRetrogen>;
        static UPGRADE_HEIGHT_ACCESSOR: $LevelHeightAccessor;
        get missingBedrock(): $BitSet;
    }
    export class $PositionalRandomFactory {
    }
    export interface $PositionalRandomFactory {
        parityConfigString(arg0: $StringBuilder): void;
        fromHashOf(arg0: string): $RandomSource;
        fromHashOf(arg0: $ResourceLocation_): $RandomSource;
        fromSeed(arg0: number): $RandomSource;
        at(arg0: number, arg1: number, arg2: number): $RandomSource;
        at(arg0: $BlockPos_): $RandomSource;
    }
    export class $DensityFunctions$ShiftNoise {
    }
    export interface $DensityFunctions$ShiftNoise extends $DensityFunction {
        offsetNoise(): $DensityFunction$NoiseHolder;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        compute(arg0: number, arg1: number, arg2: number): number;
    }
    export class $SurfaceRules$Context$TemperatureHelperCondition extends $SurfaceRules$LazyYCondition {
    }
    export class $DensityFunctions$Spline$Coordinate extends $Record implements $ToFloatFunction<$DensityFunctions$Spline$Point> {
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunctions$Spline$Coordinate;
        maxValue(): number;
        minValue(): number;
        apply(arg0: $DensityFunctions$Spline$Point_): number;
        function(): $Holder<$DensityFunction>;
        comap<C2>(arg0: $Function_<C2, $DensityFunctions$Spline$Point>): $ToFloatFunction<C2>;
        static CODEC: $Codec<$DensityFunctions$Spline$Coordinate>;
        constructor(arg0: $Holder_<$DensityFunction>);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Spline$Coordinate}.
     */
    export type $DensityFunctions$Spline$Coordinate_ = { function?: $Holder_<$DensityFunction>,  } | [function?: $Holder_<$DensityFunction>, ];
    export class $SurfaceRules$Steep extends $Enum<$SurfaceRules$Steep> implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$Steep}.
     */
    export type $SurfaceRules$Steep_ = "instance";
    export class $Heightmap$Usage extends $Enum<$Heightmap$Usage> {
        static values(): $Heightmap$Usage[];
        static valueOf(arg0: string): $Heightmap$Usage;
        static WORLDGEN: $Heightmap$Usage;
        static LIVE_WORLD: $Heightmap$Usage;
        static CLIENT: $Heightmap$Usage;
    }
    /**
     * Values that may be interpreted as {@link $Heightmap$Usage}.
     */
    export type $Heightmap$Usage_ = "worldgen" | "live_world" | "client";
    export class $VerticalAnchor$AboveBottom extends $Record implements $VerticalAnchor {
        resolveY(arg0: $WorldGenerationContext): number;
        offset(): number;
        static CODEC: $Codec<$VerticalAnchor$AboveBottom>;
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $VerticalAnchor$AboveBottom}.
     */
    export type $VerticalAnchor$AboveBottom_ = { offset?: number,  } | [offset?: number, ];
    export class $Beardifier$Rigid extends $Record {
        terrainAdjustment(): $TerrainAdjustment;
        groundLevelDelta(): number;
        box(): $BoundingBox;
        constructor(box: $BoundingBox, terrainAdjustment: $TerrainAdjustment_, groundLevelDelta: number);
    }
    /**
     * Values that may be interpreted as {@link $Beardifier$Rigid}.
     */
    export type $Beardifier$Rigid_ = { terrainAdjustment?: $TerrainAdjustment_, groundLevelDelta?: number, box?: $BoundingBox,  } | [terrainAdjustment?: $TerrainAdjustment_, groundLevelDelta?: number, box?: $BoundingBox, ];
    export class $XoroshiroRandomSource implements $RandomSource, $IXoroshiro128PlusPlusRandom {
        forkPositional(): $PositionalRandomFactory;
        consumeCount(arg0: number): void;
        setSeed(arg0: number): void;
        nextFloat(): number;
        nextGaussian(): number;
        fork(): $RandomSource;
        nextDouble(): number;
        nextInt(arg0: number): number;
        nextInt(): number;
        nextLong(): number;
        nextBoolean(): boolean;
        nextIntBetweenInclusive(arg0: number, arg1: number): number;
        triangle(arg0: number, arg1: number): number;
        nextInt(arg0: number, arg1: number): number;
        getImplementation(): $Xoroshiro128PlusPlus;
        static CODEC: $Codec<$XoroshiroRandomSource>;
        constructor(arg0: number);
        constructor(arg0: $RandomSupport$Seed128bit_);
        constructor(arg0: number, arg1: number);
        set seed(value: number);
        get implementation(): $Xoroshiro128PlusPlus;
    }
    export class $SurfaceRules$AbovePreliminarySurface extends $Enum<$SurfaceRules$AbovePreliminarySurface> implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$AbovePreliminarySurface}.
     */
    export type $SurfaceRules$AbovePreliminarySurface_ = "instance";
    export class $DensityFunctions$BlendDensity extends $Record implements $DensityFunctions$TransformerWithContext {
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        input(): $DensityFunction;
        maxValue(): number;
        minValue(): number;
        transform(arg0: $DensityFunction$FunctionContext, arg1: number): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        compute(arg0: $DensityFunction$FunctionContext): number;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        square(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$BlendDensity}.
     */
    export type $DensityFunctions$BlendDensity_ = { input?: $DensityFunction_,  } | [input?: $DensityFunction_, ];
    export class $SurfaceRules$NoiseThresholdConditionSource$1NoiseThresholdCondition extends $SurfaceRules$LazyXZCondition {
    }
    export class $SurfaceRules$VerticalGradientConditionSource extends $Record implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$VerticalGradientConditionSource}.
     */
    export type $SurfaceRules$VerticalGradientConditionSource_ = { trueAtAndBelow?: $VerticalAnchor_, falseAtAndAbove?: $VerticalAnchor_, randomName?: $ResourceLocation_,  } | [trueAtAndBelow?: $VerticalAnchor_, falseAtAndAbove?: $VerticalAnchor_, randomName?: $ResourceLocation_, ];
    export class $DensityFunctions$BlendOffset extends $Enum<$DensityFunctions$BlendOffset> implements $DensityFunction$SimpleFunction {
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        static values(): $DensityFunctions$BlendOffset[];
        static valueOf(arg0: string): $DensityFunctions$BlendOffset;
        compute(arg0: $DensityFunction$FunctionContext): number;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        square(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunction>;
        static INSTANCE: $DensityFunctions$BlendOffset;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$BlendOffset}.
     */
    export type $DensityFunctions$BlendOffset_ = "instance";
    export class $VerticalAnchor {
        static aboveBottom(arg0: number): $VerticalAnchor;
        static belowTop(arg0: number): $VerticalAnchor;
        static absolute(arg0: number): $VerticalAnchor;
        static top(): $VerticalAnchor;
        static bottom(): $VerticalAnchor;
        static CODEC: $Codec<$VerticalAnchor>;
        static TOP: $VerticalAnchor;
        static BOTTOM: $VerticalAnchor;
    }
    export interface $VerticalAnchor {
        resolveY(arg0: $WorldGenerationContext): number;
    }
    /**
     * Values that may be interpreted as {@link $VerticalAnchor}.
     */
    export type $VerticalAnchor_ = ((arg0: $WorldGenerationContext) => number);
    export class $VerticalAnchor$BelowTop extends $Record implements $VerticalAnchor {
        resolveY(arg0: $WorldGenerationContext): number;
        offset(): number;
        static CODEC: $Codec<$VerticalAnchor$BelowTop>;
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $VerticalAnchor$BelowTop}.
     */
    export type $VerticalAnchor$BelowTop_ = { offset?: number,  } | [offset?: number, ];
    export class $DensityFunctions$TransformerWithContext {
    }
    export interface $DensityFunctions$TransformerWithContext extends $DensityFunction {
        input(): $DensityFunction;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        transform(arg0: $DensityFunction$FunctionContext, arg1: number): number;
        compute(arg0: $DensityFunction$FunctionContext): number;
    }
    export class $SurfaceRules$SurfaceRule {
    }
    export interface $SurfaceRules$SurfaceRule {
        tryApply(arg0: number, arg1: number, arg2: number): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$SurfaceRule}.
     */
    export type $SurfaceRules$SurfaceRule_ = ((arg0: number, arg1: number, arg2: number) => $BlockState_);
    export class $DensityFunction$NoiseHolder extends $Record {
        noise(): $NormalNoise;
        noiseData(): $Holder<$NormalNoise$NoiseParameters>;
        maxValue(): number;
        getValue(arg0: number, arg1: number, arg2: number): number;
        static CODEC: $Codec<$DensityFunction$NoiseHolder>;
        constructor(arg0: $Holder_<$NormalNoise$NoiseParameters>, arg1: $NormalNoise);
        constructor(arg0: $Holder_<$NormalNoise$NoiseParameters>);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunction$NoiseHolder}.
     */
    export type $DensityFunction$NoiseHolder_ = { noise?: $NormalNoise, noiseData?: $Holder_<$NormalNoise$NoiseParameters>,  } | [noise?: $NormalNoise, noiseData?: $Holder_<$NormalNoise$NoiseParameters>, ];
    export class $NoiseChunk implements $DensityFunction$ContextProvider, $DensityFunction$FunctionContext, $NoiseChunkAccessor, $NoiseChunkExtension, $IExtendedNoiseChunk, $IChunkNoiseSampler {
        the_bumblezone$getBiomeSource(): $BiomeSource;
        the_bumblezone$getCachedClimateSampler(): $Climate$Sampler;
        the_bumblezone$setBiomeSource(arg0: $BiomeSource): void;
        the_bumblezone$setCachedClimateSampler(arg0: $Climate$Sampler_): void;
        blockX(): number;
        blockY(): number;
        blockZ(): number;
        getBlender(): $Blender;
        static forChunk(arg0: $ChunkAccess, arg1: $RandomState, arg2: $DensityFunctions$BeardifierOrMarker, arg3: $NoiseGeneratorSettings_, arg4: $Aquifer$FluidPicker_, arg5: $Blender): $NoiseChunk;
        initializeForFirstCellX(): void;
        advanceCellX(arg0: number): void;
        selectCellYZ(arg0: number, arg1: number): void;
        updateForY(arg0: number, arg1: number): void;
        updateForX(arg0: number, arg1: number): void;
        updateForZ(arg0: number, arg1: number): void;
        stopInterpolation(): void;
        aquifer(): $Aquifer;
        fillAllDirectly(arg0: number[], arg1: $DensityFunction_): void;
        swapSlices(): void;
        irons_spellbooks$setAquifierStatus(arg0: $IExtendedNoiseChunk$AquifierNuke_): void;
        preliminarySurfaceLevel(arg0: number, arg1: number): number;
        handler$mog000$spectrum$init(arg0: number, arg1: $RandomState, arg2: number, arg3: number, arg4: $NoiseSettings_, arg5: $DensityFunctions$BeardifierOrMarker, arg6: $NoiseGeneratorSettings_, arg7: $Aquifer$FluidPicker_, arg8: $Blender, arg9: $CallbackInfo, arg10: $NoiseRouter_, arg11: $ImmutableList$Builder<any>): void;
        irons_spellbooks$getAquifierStatus(): $IExtendedNoiseChunk$AquifierNuke;
        bumblezone$callCachedClimateSampler(arg0: $NoiseRouter_, arg1: $List_<$Climate$ParameterPoint_>): $Climate$Sampler;
        bumblezone$callGetInterpolatedState(): $BlockState;
        forIndex(arg0: number): $DensityFunction$FunctionContext;
        getStartBlockX(): number;
        getStartBlockY(): number;
        getHorizontalCellBlockCount(): number;
        getVerticalCellBlockCount(): number;
        getIsInInterpolationLoop(): boolean;
        getIsSamplingForCaches(): boolean;
        getStartBiomeX(): number;
        getStartBiomeZ(): number;
        getHorizontalCellCount(): number;
        getVerticalCellCount(): number;
        getMinimumCellY(): number;
        getCellBlockX(): number;
        getCellBlockY(): number;
        getCellBlockZ(): number;
        getStartBlockZ(): number;
        constructor(arg0: number, arg1: $RandomState, arg2: number, arg3: number, arg4: $NoiseSettings_, arg5: $DensityFunctions$BeardifierOrMarker, arg6: $NoiseGeneratorSettings_, arg7: $Aquifer$FluidPicker_, arg8: $Blender);
        get blender(): $Blender;
        get startBlockX(): number;
        get startBlockY(): number;
        get horizontalCellBlockCount(): number;
        get verticalCellBlockCount(): number;
        get isInInterpolationLoop(): boolean;
        get isSamplingForCaches(): boolean;
        get startBiomeX(): number;
        get startBiomeZ(): number;
        get horizontalCellCount(): number;
        get verticalCellCount(): number;
        get minimumCellY(): number;
        get cellBlockX(): number;
        get cellBlockY(): number;
        get cellBlockZ(): number;
        get startBlockZ(): number;
    }
    export class $DensityFunctions$Marker$Type extends $Enum<$DensityFunctions$Marker$Type> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $DensityFunctions$Marker$Type[];
        static valueOf(arg0: string): $DensityFunctions$Marker$Type;
        getRemappedEnumConstantName(): string;
        static CacheAllInCell: $DensityFunctions$Marker$Type;
        static CacheOnce: $DensityFunctions$Marker$Type;
        static FlatCache: $DensityFunctions$Marker$Type;
        static Interpolated: $DensityFunctions$Marker$Type;
        static Cache2D: $DensityFunctions$Marker$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Marker$Type}.
     */
    export type $DensityFunctions$Marker$Type_ = "interpolated" | "flat_cache" | "cache_2d" | "cache_once" | "cache_all_in_cell";
    export class $DensityFunctions$WeirdScaledSampler extends $Record implements $DensityFunctions$TransformerWithContext {
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        noise(): $DensityFunction$NoiseHolder;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        rarityValueMapper(): $DensityFunctions$WeirdScaledSampler$RarityValueMapper;
        input(): $DensityFunction;
        maxValue(): number;
        minValue(): number;
        transform(arg0: $DensityFunction$FunctionContext, arg1: number): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        compute(arg0: $DensityFunction$FunctionContext): number;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        square(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$WeirdScaledSampler>;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$WeirdScaledSampler}.
     */
    export type $DensityFunctions$WeirdScaledSampler_ = { input?: $DensityFunction_, noise?: $DensityFunction$NoiseHolder_, rarityValueMapper?: $DensityFunctions$WeirdScaledSampler$RarityValueMapper_,  } | [input?: $DensityFunction_, noise?: $DensityFunction$NoiseHolder_, rarityValueMapper?: $DensityFunctions$WeirdScaledSampler$RarityValueMapper_, ];
    export class $VerticalAnchor$Absolute extends $Record implements $VerticalAnchor {
        resolveY(arg0: $WorldGenerationContext): number;
        y(): number;
        static CODEC: $Codec<$VerticalAnchor$Absolute>;
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $VerticalAnchor$Absolute}.
     */
    export type $VerticalAnchor$Absolute_ = { y?: number,  } | [y?: number, ];
    export class $LegacyRandomSource implements $BitRandomSource {
        forkPositional(): $PositionalRandomFactory;
        setSeed(arg0: number): void;
        nextGaussian(): number;
        fork(): $RandomSource;
        next(arg0: number): number;
        nextFloat(): number;
        nextDouble(): number;
        nextInt(): number;
        nextInt(arg0: number): number;
        nextLong(): number;
        nextBoolean(): boolean;
        nextIntBetweenInclusive(arg0: number, arg1: number): number;
        consumeCount(arg0: number): void;
        triangle(arg0: number, arg1: number): number;
        nextInt(arg0: number, arg1: number): number;
        constructor(arg0: number);
        set seed(value: number);
    }
    export class $Aquifer$NoiseBasedAquifer implements $Aquifer {
        shouldScheduleFluidUpdate(): boolean;
        computeSubstance(pos: $DensityFunction$FunctionContext, density: number): $BlockState;
    }
    export class $SurfaceRules$BiomeConditionSource$1BiomeCondition extends $SurfaceRules$LazyYCondition {
    }
    export class $SurfaceRules$TestRuleSource extends $Record implements $SurfaceRules$RuleSource {
        codec(): $KeyDispatchDataCodec<$SurfaceRules$RuleSource>;
        ifTrue(): $SurfaceRules$ConditionSource;
        thenRun(): $SurfaceRules$RuleSource;
        apply(arg0: $SurfaceRules$Context): $SurfaceRules$SurfaceRule;
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$SurfaceRule>;
        andThen<V>(arg0: $Function_<$SurfaceRules$SurfaceRule, V>): $Function<$SurfaceRules$Context, V>;
        constructor(arg0: $SurfaceRules$ConditionSource, arg1: $SurfaceRules$RuleSource_);
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$TestRuleSource}.
     */
    export type $SurfaceRules$TestRuleSource_ = { thenRun?: $SurfaceRules$RuleSource_, ifTrue?: $SurfaceRules$ConditionSource,  } | [thenRun?: $SurfaceRules$RuleSource_, ifTrue?: $SurfaceRules$ConditionSource, ];
    export class $DensityFunctions$YClampedGradient extends $Record implements $DensityFunction$SimpleFunction {
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        fromY(): number;
        toY(): number;
        maxValue(): number;
        minValue(): number;
        toValue(): number;
        fromValue(): number;
        compute(arg0: $DensityFunction$FunctionContext): number;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        square(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$YClampedGradient>;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$YClampedGradient}.
     */
    export type $DensityFunctions$YClampedGradient_ = { toY?: number, toValue?: number, fromValue?: number, fromY?: number,  } | [toY?: number, toValue?: number, fromValue?: number, fromY?: number, ];
    export class $WorldDimensions$1Entry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $WorldDimensions$1Entry}.
     */
    export type $WorldDimensions$1Entry_ = { value?: $LevelStem_, key?: $ResourceKey_<$LevelStem>,  } | [value?: $LevelStem_, key?: $ResourceKey_<$LevelStem>, ];
    export class $Column$Range extends $Column {
        ceiling(): number;
        height(): number;
        floor(): number;
    }
    export class $FlatLevelSource extends $ChunkGenerator {
        settings(): $FlatLevelGeneratorSettings;
        featuresPerStep: $Supplier<$List<$FeatureSorter$StepFeatureData>>;
        static CODEC: $MapCodec<$FlatLevelSource>;
        biomeSource: $BiomeSource;
        constructor(arg0: $FlatLevelGeneratorSettings);
    }
    export class $SingleThreadedRandomSource implements $BitRandomSource, $ISimpleRandom {
        forkPositional(): $PositionalRandomFactory;
        setSeed(arg0: number): void;
        nextGaussian(): number;
        fork(): $RandomSource;
        next(arg0: number): number;
        nextFloat(): number;
        nextDouble(): number;
        nextInt(): number;
        nextInt(arg0: number): number;
        nextLong(): number;
        nextBoolean(): boolean;
        nextIntBetweenInclusive(arg0: number, arg1: number): number;
        consumeCount(arg0: number): void;
        triangle(arg0: number, arg1: number): number;
        nextInt(arg0: number, arg1: number): number;
        getSeed(): number;
        invokeSetSeed(arg0: number): void;
        constructor(arg0: number);
    }
    export class $SurfaceRules$WaterConditionSource$1WaterCondition extends $SurfaceRules$LazyYCondition {
    }
    export class $WorldgenRandom extends $LegacyRandomSource {
        static seedSlimeChunk(arg0: number, arg1: number, arg2: number, arg3: number): $RandomSource;
        setLargeFeatureSeed(arg0: number, arg1: number, arg2: number): void;
        setLargeFeatureWithSalt(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setDecorationSeed(arg0: number, arg1: number, arg2: number): number;
        setFeatureSeed(arg0: number, arg1: number, arg2: number): void;
        getCount(): number;
        constructor(arg0: $RandomSource);
        get count(): number;
    }
    export class $DensityFunction$FunctionContext {
    }
    export interface $DensityFunction$FunctionContext {
        blockX(): number;
        blockY(): number;
        blockZ(): number;
        getBlender(): $Blender;
        get blender(): $Blender;
    }
    export class $RandomSupport$Seed128bit extends $Record {
        seedHi(): number;
        seedLo(): number;
        mixed(): $RandomSupport$Seed128bit;
        xor(arg0: number, arg1: number): $RandomSupport$Seed128bit;
        xor(arg0: $RandomSupport$Seed128bit_): $RandomSupport$Seed128bit;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $RandomSupport$Seed128bit}.
     */
    export type $RandomSupport$Seed128bit_ = { seedHi?: number, seedLo?: number,  } | [seedHi?: number, seedLo?: number, ];
    export class $SurfaceRules$BiomeConditionSource implements $SurfaceRules$ConditionSource {
        codec(): $KeyDispatchDataCodec<$SurfaceRules$ConditionSource>;
        apply(arg0: $SurfaceRules$Context): $SurfaceRules$Condition;
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
        biomes: $List<$ResourceKey<$Biome>>;
        constructor(arg0: $List_<$ResourceKey_<$Biome>>);
    }
    /**
     * @deprecated
     */
    export class $ThreadSafeLegacyRandomSource implements $BitRandomSource {
        forkPositional(): $PositionalRandomFactory;
        setSeed(arg0: number): void;
        nextGaussian(): number;
        fork(): $RandomSource;
        next(arg0: number): number;
        nextFloat(): number;
        nextDouble(): number;
        nextInt(): number;
        nextInt(arg0: number): number;
        nextLong(): number;
        nextBoolean(): boolean;
        nextIntBetweenInclusive(arg0: number, arg1: number): number;
        consumeCount(arg0: number): void;
        triangle(arg0: number, arg1: number): number;
        nextInt(arg0: number, arg1: number): number;
        constructor(arg0: number);
        set seed(value: number);
    }
    export class $DensityFunctions$EndIslandDensityFunction implements $DensityFunction$SimpleFunction {
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        maxValue(): number;
        minValue(): number;
        compute(arg0: $DensityFunction$FunctionContext): number;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        square(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$EndIslandDensityFunction>;
        constructor(arg0: number);
    }
    export class $DensityFunctions$Spline$Point extends $Record {
        context(): $DensityFunction$FunctionContext;
        constructor(arg0: $DensityFunction$FunctionContext);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Spline$Point}.
     */
    export type $DensityFunctions$Spline$Point_ = { context?: $DensityFunction$FunctionContext,  } | [context?: $DensityFunction$FunctionContext, ];
    export class $MarsagliaPolarGaussian {
        nextGaussian(): number;
        reset(): void;
        randomSource: $RandomSource;
        constructor(arg0: $RandomSource);
    }
    export interface $NoiseGeneratorSettings extends RegistryMarked<RegistryTypes.WorldgenNoiseSettingsTag, RegistryTypes.WorldgenNoiseSettings> {}
    export class $GeodeBlockSettings {
        static CODEC: $Codec<$GeodeBlockSettings>;
        outerLayerProvider: $BlockStateProvider;
        innerLayerProvider: $BlockStateProvider;
        alternateInnerLayerProvider: $BlockStateProvider;
        innerPlacements: $List<$BlockState>;
        cannotReplace: $TagKey<$Block>;
        middleLayerProvider: $BlockStateProvider;
        invalidBlocks: $TagKey<$Block>;
        fillingProvider: $BlockStateProvider;
        constructor(arg0: $BlockStateProvider, arg1: $BlockStateProvider, arg2: $BlockStateProvider, arg3: $BlockStateProvider, arg4: $BlockStateProvider, arg5: $List_<$BlockState_>, arg6: $TagKey_<$Block>, arg7: $TagKey_<$Block>);
    }
    export class $NoiseChunk$BlendOffset implements $NoiseChunk$NoiseChunkDensityFunction {
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        wrapped(): $DensityFunction;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        compute(arg0: $DensityFunction$FunctionContext): number;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        square(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
    }
    export class $DensityFunctions {
        static lerp(arg0: $DensityFunction_, arg1: $DensityFunction_, arg2: $DensityFunction_): $DensityFunction;
        static lerp(arg0: $DensityFunction_, arg1: number, arg2: $DensityFunction_): $DensityFunction;
        static noise(arg0: $Holder_<$NormalNoise$NoiseParameters>, arg1: number): $DensityFunction;
        static noise(arg0: $Holder_<$NormalNoise$NoiseParameters>): $DensityFunction;
        static noise(arg0: $Holder_<$NormalNoise$NoiseParameters>, arg1: number, arg2: number): $DensityFunction;
        static spline(arg0: $CubicSpline<$DensityFunctions$Spline$Point_, $DensityFunctions$Spline$Coordinate_>): $DensityFunction;
        static interpolated(arg0: $DensityFunction_): $DensityFunction;
        static flatCache(arg0: $DensityFunction_): $DensityFunction;
        static cache2d(arg0: $DensityFunction_): $DensityFunction;
        static cacheOnce(arg0: $DensityFunction_): $DensityFunction;
        static cacheAllInCell(arg0: $DensityFunction_): $DensityFunction;
        static mappedNoise(arg0: $Holder_<$NormalNoise$NoiseParameters>, arg1: number, arg2: number): $DensityFunction;
        static mappedNoise(arg0: $Holder_<$NormalNoise$NoiseParameters>, arg1: number, arg2: number, arg3: number): $DensityFunction;
        static mappedNoise(arg0: $Holder_<$NormalNoise$NoiseParameters>, arg1: number, arg2: number, arg3: number, arg4: number): $DensityFunction;
        static shiftedNoise2d(arg0: $DensityFunction_, arg1: $DensityFunction_, arg2: number, arg3: $Holder_<$NormalNoise$NoiseParameters>): $DensityFunction;
        static rangeChoice(arg0: $DensityFunction_, arg1: number, arg2: number, arg3: $DensityFunction_, arg4: $DensityFunction_): $DensityFunction;
        static shiftA(arg0: $Holder_<$NormalNoise$NoiseParameters>): $DensityFunction;
        static shiftB(arg0: $Holder_<$NormalNoise$NoiseParameters>): $DensityFunction;
        static blendDensity(arg0: $DensityFunction_): $DensityFunction;
        static endIslands(arg0: number): $DensityFunction;
        static weirdScaledSampler(arg0: $DensityFunction_, arg1: $Holder_<$NormalNoise$NoiseParameters>, arg2: $DensityFunctions$WeirdScaledSampler$RarityValueMapper_): $DensityFunction;
        static yClampedGradient(arg0: number, arg1: number, arg2: number, arg3: number): $DensityFunction;
        static blendAlpha(): $DensityFunction;
        static blendOffset(): $DensityFunction;
        static mul(arg0: $DensityFunction_, arg1: $DensityFunction_): $DensityFunction;
        static zero(): $DensityFunction;
        static bootstrap(arg0: $Registry<$MapCodec_<$DensityFunction_>>): $MapCodec<$DensityFunction>;
        static shift(arg0: $Holder_<$NormalNoise$NoiseParameters>): $DensityFunction;
        static min(arg0: $DensityFunction_, arg1: $DensityFunction_): $DensityFunction;
        static max(arg0: $DensityFunction_, arg1: $DensityFunction_): $DensityFunction;
        static add(arg0: $DensityFunction_, arg1: $DensityFunction_): $DensityFunction;
        static map(arg0: $DensityFunction_, arg1: $DensityFunctions$Mapped$Type_): $DensityFunction;
        static constant(arg0: number): $DensityFunction;
        static DIRECT_CODEC: $Codec<$DensityFunction>;
    }
    export interface $DensityFunction extends RegistryMarked<RegistryTypes.WorldgenDensityFunctionTag, RegistryTypes.WorldgenDensityFunction> {}
    export class $DensityFunctions$WeirdScaledSampler$RarityValueMapper extends $Enum<$DensityFunctions$WeirdScaledSampler$RarityValueMapper> implements $StringRepresentable, $IDensityFunctionTypesWeirdScaledSamplerRarityValueMapper {
        getSerializedName(): string;
        static values(): $DensityFunctions$WeirdScaledSampler$RarityValueMapper[];
        static valueOf(arg0: string): $DensityFunctions$WeirdScaledSampler$RarityValueMapper;
        getRemappedEnumConstantName(): string;
        getScaleFunction(): $Double2DoubleFunction;
        static TYPE2: $DensityFunctions$WeirdScaledSampler$RarityValueMapper;
        static CODEC: $Codec<$DensityFunctions$WeirdScaledSampler$RarityValueMapper>;
        static TYPE1: $DensityFunctions$WeirdScaledSampler$RarityValueMapper;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
        get scaleFunction(): $Double2DoubleFunction;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$WeirdScaledSampler$RarityValueMapper}.
     */
    export type $DensityFunctions$WeirdScaledSampler$RarityValueMapper_ = "type_1" | "type_2";
    export class $DensityFunctions$TwoArgumentSimpleFunction {
        static create(arg0: $DensityFunctions$TwoArgumentSimpleFunction$Type_, arg1: $DensityFunction_, arg2: $DensityFunction_): $DensityFunctions$TwoArgumentSimpleFunction;
        static LOGGER: $Logger;
    }
    export interface $DensityFunctions$TwoArgumentSimpleFunction extends $DensityFunction {
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        argument1(): $DensityFunction;
        argument2(): $DensityFunction;
        type(): $DensityFunctions$TwoArgumentSimpleFunction$Type;
    }
    export class $DensityFunctions$Ap2 extends $Record implements $DensityFunctions$TwoArgumentSimpleFunction {
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        argument1(): $DensityFunction;
        argument2(): $DensityFunction;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        type(): $DensityFunctions$TwoArgumentSimpleFunction$Type;
        compute(arg0: $DensityFunction$FunctionContext): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        square(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Ap2}.
     */
    export type $DensityFunctions$Ap2_ = { maxValue?: number, argument1?: $DensityFunction_, minValue?: number, argument2?: $DensityFunction_, type?: $DensityFunctions$TwoArgumentSimpleFunction$Type_,  } | [maxValue?: number, argument1?: $DensityFunction_, minValue?: number, argument2?: $DensityFunction_, type?: $DensityFunctions$TwoArgumentSimpleFunction$Type_, ];
    export class $GenerationStep {
        constructor();
    }
    export class $SurfaceRules$NotCondition extends $Record implements $SurfaceRules$Condition {
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$NotCondition}.
     */
    export type $SurfaceRules$NotCondition_ = { target?: $SurfaceRules$Condition_,  } | [target?: $SurfaceRules$Condition_, ];
    export class $Column {
        static inside(arg0: number, arg1: number): $Column$Range;
        getFloor(): $OptionalInt;
        getCeiling(): $OptionalInt;
        withFloor(arg0: $OptionalInt): $Column;
        static fromHighest(arg0: number): $Column;
        static fromLowest(arg0: number): $Column;
        withCeiling(arg0: $OptionalInt): $Column;
        getHeight(): $OptionalInt;
        static around(arg0: number, arg1: number): $Column$Range;
        static create(arg0: $OptionalInt, arg1: $OptionalInt): $Column;
        static scan(arg0: $LevelSimulatedReader, arg1: $BlockPos_, arg2: number, arg3: $Predicate_<$BlockState>, arg4: $Predicate_<$BlockState>): ($Column) | undefined;
        static above(arg0: number): $Column;
        static below(arg0: number): $Column;
        static line(): $Column;
        constructor();
        get floor(): $OptionalInt;
        get ceiling(): $OptionalInt;
        get height(): $OptionalInt;
    }
    export class $Column$Line extends $Column {
    }
    export class $DensityFunctions$BlendAlpha extends $Enum<$DensityFunctions$BlendAlpha> implements $DensityFunction$SimpleFunction {
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        static values(): $DensityFunctions$BlendAlpha[];
        static valueOf(arg0: string): $DensityFunctions$BlendAlpha;
        compute(arg0: $DensityFunction$FunctionContext): number;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        square(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunction>;
        static INSTANCE: $DensityFunctions$BlendAlpha;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$BlendAlpha}.
     */
    export type $DensityFunctions$BlendAlpha_ = "instance";
    export class $Heightmap$Types extends $Enum<$Heightmap$Types> implements $StringRepresentable {
        sendToClient(): boolean;
        getSerializedName(): string;
        getSerializationKey(): string;
        keepAfterWorldgen(): boolean;
        isOpaque(): $Predicate<$BlockState>;
        static values(): $Heightmap$Types[];
        static valueOf(arg0: string): $Heightmap$Types;
        getRemappedEnumConstantName(): string;
        static OCEAN_FLOOR: $Heightmap$Types;
        static MOTION_BLOCKING_NO_LEAVES: $Heightmap$Types;
        static CODEC: $Codec<$Heightmap$Types>;
        static MOTION_BLOCKING: $Heightmap$Types;
        static WORLD_SURFACE: $Heightmap$Types;
        static OCEAN_FLOOR_WG: $Heightmap$Types;
        static WORLD_SURFACE_WG: $Heightmap$Types;
        get serializedName(): string;
        get serializationKey(): string;
        get opaque(): $Predicate<$BlockState>;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Heightmap$Types}.
     */
    export type $Heightmap$Types_ = "world_surface_wg" | "world_surface" | "ocean_floor_wg" | "ocean_floor" | "motion_blocking" | "motion_blocking_no_leaves";
    export class $BitRandomSource {
        static FLOAT_MULTIPLIER: number;
        static DOUBLE_MULTIPLIER: number;
    }
    export interface $BitRandomSource extends $RandomSource {
        nextFloat(): number;
        nextDouble(): number;
        nextInt(): number;
        nextInt(arg0: number): number;
        nextLong(): number;
        nextBoolean(): boolean;
        next(arg0: number): number;
    }
    export class $SurfaceRules$YConditionSource$1YCondition extends $SurfaceRules$LazyYCondition {
    }
    export class $DensityFunctions$MarkerOrMarked {
    }
    export interface $DensityFunctions$MarkerOrMarked extends $DensityFunction {
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        wrapped(): $DensityFunction;
        type(): $DensityFunctions$Marker$Type;
    }
    export class $NoiseBasedChunkGenerator extends $ChunkGenerator implements $NoiseBasedChunkGeneratorAccessor {
        generatorSettings(): $Holder<$NoiseGeneratorSettings>;
        buildSurface(arg0: $ChunkAccess, arg1: $WorldGenerationContext, arg2: $RandomState, arg3: $StructureManager, arg4: $BiomeManager, arg5: $Registry<$Biome_>, arg6: $Blender): void;
        stable(arg0: $ResourceKey_<$NoiseGeneratorSettings>): boolean;
        setSettings(holder: $Holder_<$NoiseGeneratorSettings>): void;
        featuresPerStep: $Supplier<$List<$FeatureSorter$StepFeatureData>>;
        settings: $Holder<$NoiseGeneratorSettings>;
        static CODEC: $MapCodec<$NoiseBasedChunkGenerator>;
        globalFluidPicker: $Supplier<$Aquifer$FluidPicker>;
        biomeSource: $BiomeSource;
        static AIR: $BlockState;
        constructor(arg0: $BiomeSource, arg1: $Holder_<$NoiseGeneratorSettings>);
    }
    export class $DensityFunctions$TwoArgumentSimpleFunction$Type extends $Enum<$DensityFunctions$TwoArgumentSimpleFunction$Type> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $DensityFunctions$TwoArgumentSimpleFunction$Type[];
        static valueOf(arg0: string): $DensityFunctions$TwoArgumentSimpleFunction$Type;
        getRemappedEnumConstantName(): string;
        static ADD: $DensityFunctions$TwoArgumentSimpleFunction$Type;
        static MIN: $DensityFunctions$TwoArgumentSimpleFunction$Type;
        static MUL: $DensityFunctions$TwoArgumentSimpleFunction$Type;
        static MAX: $DensityFunctions$TwoArgumentSimpleFunction$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$TwoArgumentSimpleFunction$Type}.
     */
    export type $DensityFunctions$TwoArgumentSimpleFunction$Type_ = "add" | "mul" | "min" | "max";
    export class $SurfaceRules$Context implements $ContextAccessor {
        getZ(): number;
        getBiome(): $Holder<any>;
        getChunk(): $ChunkAccess;
        updateY(i: number, j: number, k: number, l: number, m: number, n: number): void;
        getSurfaceSecondary(): number;
        updateXZ(arg0: number, arg1: number): void;
        getMinSurfaceLevel(): number;
        getY(): number;
        getX(): number;
        static blockCoordToSurfaceCell(arg0: number): number;
        static surfaceCellToBlockCoord(arg0: number): number;
        lambda$updateY$0(arg0: number, arg1: number, arg2: number): $Holder<any>;
        getStoneDepthBelow(): number;
        handler$goi000$lithostitched$instantiateConditions(system: $SurfaceSystem, randomState: $RandomState, chunk: $ChunkAccess, noiseChunk: $NoiseChunk, biomeGetter: $Function_<any, any>, biomeRegistry: $Registry<any>, context: $WorldGenerationContext, ci: $CallbackInfo): void;
        getSystem(): $SurfaceSystem;
        waterHeight: number;
        static SURFACE_CELL_BITS: number;
        steep: $SurfaceRules$Condition;
        lastUpdateXZ: number;
        chunk: $ChunkAccess;
        blockX: number;
        blockY: number;
        blockZ: number;
        abovePreliminarySurface: $SurfaceRules$Condition;
        noiseChunk: $NoiseChunk;
        lastPreliminarySurfaceCellOrigin: number;
        static SURFACE_CELL_SIZE: number;
        minSurfaceLevel: number;
        pos: $BlockPos$MutableBlockPos;
        temperature: $SurfaceRules$Condition;
        context: $WorldGenerationContext;
        preliminarySurfaceCache: number[];
        stoneDepthAbove: number;
        lastSurfaceDepth2Update: number;
        stoneDepthBelow: number;
        static HOW_FAR_BELOW_PRELIMINARY_SURFACE_LEVEL_TO_BUILD_SURFACE: number;
        randomState: $RandomState;
        static SURFACE_CELL_MASK: number;
        lastMinSurfaceLevelUpdate: number;
        lastUpdateY: number;
        hole: $SurfaceRules$Condition;
        biomeGetter: $Function<$BlockPos, $Holder<$Biome>>;
        surfaceSecondary: number;
        system: $SurfaceSystem;
        biome: $Supplier<$Holder<$Biome>>;
        surfaceDepth: number;
        constructor(arg0: $SurfaceSystem, arg1: $RandomState, arg2: $ChunkAccess, arg3: $NoiseChunk, arg4: $Function_<$BlockPos, $Holder<$Biome>>, arg5: $Registry<$Biome_>, arg6: $WorldGenerationContext);
        get z(): number;
        get y(): number;
        get x(): number;
    }
    export class $NoiseSettings extends $Record {
        clampToHeightAccessor(arg0: $LevelHeightAccessor): $NoiseSettings;
        getCellHeight(): number;
        getCellWidth(): number;
        noiseSizeHorizontal(): number;
        noiseSizeVertical(): number;
        minY(): number;
        static create(arg0: number, arg1: number, arg2: number, arg3: number): $NoiseSettings;
        height(): number;
        static CODEC: $Codec<$NoiseSettings>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get cellHeight(): number;
        get cellWidth(): number;
    }
    /**
     * Values that may be interpreted as {@link $NoiseSettings}.
     */
    export type $NoiseSettings_ = { noiseSizeVertical?: number, height?: number, minY?: number, noiseSizeHorizontal?: number,  } | [noiseSizeVertical?: number, height?: number, minY?: number, noiseSizeHorizontal?: number, ];
    export class $SurfaceRules$Hole extends $Enum<$SurfaceRules$Hole> implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$Hole}.
     */
    export type $SurfaceRules$Hole_ = "instance";
    export class $DensityFunctions$ShiftedNoise extends $Record implements $DensityFunction {
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        yScale(): number;
        noise(): $DensityFunction$NoiseHolder;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        xzScale(): number;
        shiftX(): $DensityFunction;
        shiftY(): $DensityFunction;
        shiftZ(): $DensityFunction;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        compute(arg0: $DensityFunction$FunctionContext): number;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        square(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$ShiftedNoise>;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$ShiftedNoise}.
     */
    export type $DensityFunctions$ShiftedNoise_ = { noise?: $DensityFunction$NoiseHolder_, shiftX?: $DensityFunction_, shiftZ?: $DensityFunction_, yScale?: number, shiftY?: $DensityFunction_, xzScale?: number,  } | [noise?: $DensityFunction$NoiseHolder_, shiftX?: $DensityFunction_, shiftZ?: $DensityFunction_, yScale?: number, shiftY?: $DensityFunction_, xzScale?: number, ];
    export class $DensityFunctions$Spline extends $Record implements $DensityFunction {
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        spline(): $CubicSpline<$DensityFunctions$Spline$Point, $DensityFunctions$Spline$Coordinate>;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        compute(arg0: $DensityFunction$FunctionContext): number;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        square(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$Spline>;
        constructor(arg0: $CubicSpline<$DensityFunctions$Spline$Point_, $DensityFunctions$Spline$Coordinate_>);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Spline}.
     */
    export type $DensityFunctions$Spline_ = { spline?: $CubicSpline<$DensityFunctions$Spline$Point_, $DensityFunctions$Spline$Coordinate_>,  } | [spline?: $CubicSpline<$DensityFunctions$Spline$Point_, $DensityFunctions$Spline$Coordinate_>, ];
    export class $SurfaceRules$Condition {
    }
    export interface $SurfaceRules$Condition {
        test(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$Condition}.
     */
    export type $SurfaceRules$Condition_ = (() => boolean);
    export class $SurfaceRules$LazyYCondition extends $SurfaceRules$LazyCondition {
    }
    export class $NoiseChunk$NoiseChunkDensityFunction {
    }
    export interface $NoiseChunk$NoiseChunkDensityFunction extends $DensityFunction {
    }
    export class $NoiseChunk$Cache2D implements $DensityFunctions$MarkerOrMarked, $NoiseChunk$NoiseChunkDensityFunction {
        wrapped(): $DensityFunction;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        type(): $DensityFunctions$Marker$Type;
        compute(arg0: $DensityFunction$FunctionContext): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        square(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
    }
    export class $SurfaceSystem implements $SurfaceSystemAccessor {
        /**
         * @deprecated
         */
        topMaterial(arg0: $SurfaceRules$RuleSource_, arg1: $CarvingContext, arg2: $Function_<$BlockPos, $Holder<$Biome>>, arg3: $ChunkAccess, arg4: $NoiseChunk, arg5: $BlockPos_, arg6: boolean): ($BlockState) | undefined;
        buildSurface(arg0: $RandomState, arg1: $BiomeManager, arg2: $Registry<$Biome_>, arg3: boolean, arg4: $WorldGenerationContext, arg5: $ChunkAccess, arg6: $NoiseChunk, arg7: $SurfaceRules$RuleSource_): void;
        getNoiseRandom(): $PositionalRandomFactory;
        getBandOffsetNoise(): $NormalNoise;
        constructor(arg0: $RandomState, arg1: $BlockState_, arg2: number, arg3: $PositionalRandomFactory);
        get noiseRandom(): $PositionalRandomFactory;
        get bandOffsetNoise(): $NormalNoise;
    }
    export class $DensityFunction$ContextProvider {
    }
    export interface $DensityFunction$ContextProvider {
        fillAllDirectly(arg0: number[], arg1: $DensityFunction_): void;
        forIndex(arg0: number): $DensityFunction$FunctionContext;
    }
    export class $SurfaceRules$Context$HoleCondition extends $SurfaceRules$LazyXZCondition {
    }
    export class $SurfaceRules {
        static temperature(): $SurfaceRules$ConditionSource;
        static steep(): $SurfaceRules$ConditionSource;
        static hole(): $SurfaceRules$ConditionSource;
        static bandlands(): $SurfaceRules$RuleSource;
        static ifTrue(arg0: $SurfaceRules$ConditionSource, arg1: $SurfaceRules$RuleSource_): $SurfaceRules$RuleSource;
        static stoneDepthCheck(arg0: number, arg1: boolean, arg2: number, arg3: $CaveSurface_): $SurfaceRules$ConditionSource;
        static stoneDepthCheck(arg0: number, arg1: boolean, arg2: $CaveSurface_): $SurfaceRules$ConditionSource;
        static yBlockCheck(arg0: $VerticalAnchor_, arg1: number): $SurfaceRules$ConditionSource;
        static yStartCheck(arg0: $VerticalAnchor_, arg1: number): $SurfaceRules$ConditionSource;
        static waterBlockCheck(arg0: number, arg1: number): $SurfaceRules$ConditionSource;
        static waterStartCheck(arg0: number, arg1: number): $SurfaceRules$ConditionSource;
        static isBiome(...arg0: $ResourceKey_<$Biome>[]): $SurfaceRules$ConditionSource;
        static noiseCondition(arg0: $ResourceKey_<$NormalNoise$NoiseParameters>, arg1: number, arg2: number): $SurfaceRules$ConditionSource;
        static noiseCondition(arg0: $ResourceKey_<$NormalNoise$NoiseParameters>, arg1: number): $SurfaceRules$ConditionSource;
        static verticalGradient(arg0: string, arg1: $VerticalAnchor_, arg2: $VerticalAnchor_): $SurfaceRules$ConditionSource;
        static abovePreliminarySurface(): $SurfaceRules$ConditionSource;
        static sequence(...arg0: $SurfaceRules$RuleSource_[]): $SurfaceRules$RuleSource;
        static not(arg0: $SurfaceRules$ConditionSource): $SurfaceRules$ConditionSource;
        static state(arg0: $BlockState_): $SurfaceRules$RuleSource;
        static ON_FLOOR: $SurfaceRules$ConditionSource;
        static UNDER_FLOOR: $SurfaceRules$ConditionSource;
        static DEEP_UNDER_FLOOR: $SurfaceRules$ConditionSource;
        static ON_CEILING: $SurfaceRules$ConditionSource;
        static UNDER_CEILING: $SurfaceRules$ConditionSource;
        static VERY_DEEP_UNDER_FLOOR: $SurfaceRules$ConditionSource;
        constructor();
    }
    export class $Aquifer$FluidStatus implements $IAquiferSamplerFluidLevel {
        at(arg0: number): $BlockState;
        fluidLevel: number;
        fluidType: $BlockState;
        constructor(arg0: number, arg1: $BlockState_);
    }
    export class $DensityFunctions$BeardifierOrMarker {
        static CODEC: $KeyDispatchDataCodec<$DensityFunction>;
    }
    export interface $DensityFunctions$BeardifierOrMarker extends $DensityFunction$SimpleFunction {
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
    }
    export class $NoiseChunk$FlatCache implements $DensityFunctions$MarkerOrMarked, $NoiseChunk$NoiseChunkDensityFunction {
        wrapped(): $DensityFunction;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        type(): $DensityFunctions$Marker$Type;
        compute(arg0: $DensityFunction$FunctionContext): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        square(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
    }
    export class $OreVeinifier {
    }
    export class $DensityFunctions$Noise extends $Record implements $DensityFunction {
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        yScale(): number;
        noise(): $DensityFunction$NoiseHolder;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        /**
         * @deprecated
         */
        xzScale(): number;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        compute(arg0: $DensityFunction$FunctionContext): number;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        square(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$Noise>;
        static DATA_CODEC: $MapCodec<$DensityFunctions$Noise>;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Noise}.
     */
    export type $DensityFunctions$Noise_ = { xzScale?: number, noise?: $DensityFunction$NoiseHolder_, yScale?: number,  } | [xzScale?: number, noise?: $DensityFunction$NoiseHolder_, yScale?: number, ];
    export class $GeodeCrackSettings {
        static CODEC: $Codec<$GeodeCrackSettings>;
        generateCrackChance: number;
        crackPointOffset: number;
        baseCrackSize: number;
        constructor(arg0: number, arg1: number, arg2: number);
    }
    export class $DensityFunctions$Clamp extends $Record implements $DensityFunctions$PureTransformer {
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        input(): $DensityFunction;
        maxValue(): number;
        minValue(): number;
        transform(arg0: number): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        compute(arg0: $DensityFunction$FunctionContext): number;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        square(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$Clamp>;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Clamp}.
     */
    export type $DensityFunctions$Clamp_ = { minValue?: number, input?: $DensityFunction_, maxValue?: number,  } | [minValue?: number, input?: $DensityFunction_, maxValue?: number, ];
    export class $Noises {
        static instantiate(arg0: $HolderGetter<$NormalNoise$NoiseParameters_>, arg1: $PositionalRandomFactory, arg2: $ResourceKey_<$NormalNoise$NoiseParameters>): $NormalNoise;
        static PILLAR: $ResourceKey<$NormalNoise$NoiseParameters>;
        static CONTINENTALNESS_LARGE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_2D_MODULATOR: $ResourceKey<$NormalNoise$NoiseParameters>;
        static CLAY_BANDS_OFFSET: $ResourceKey<$NormalNoise$NoiseParameters>;
        static EROSION: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SOUL_SAND_LAYER: $ResourceKey<$NormalNoise$NoiseParameters>;
        static PILLAR_RARENESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static NOODLE_RIDGE_B: $ResourceKey<$NormalNoise$NoiseParameters>;
        static NOODLE_RIDGE_A: $ResourceKey<$NormalNoise$NoiseParameters>;
        static CAVE_ENTRANCE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static ORE_VEIN_B: $ResourceKey<$NormalNoise$NoiseParameters>;
        static CONTINENTALNESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static ORE_VEIN_A: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_2D_THICKNESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static ORE_VEININESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static AQUIFER_FLUID_LEVEL_FLOODEDNESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_2D: $ResourceKey<$NormalNoise$NoiseParameters>;
        static RIDGE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static PATCH: $ResourceKey<$NormalNoise$NoiseParameters>;
        static NETHER_WART: $ResourceKey<$NormalNoise$NoiseParameters>;
        static NETHER_STATE_SELECTOR: $ResourceKey<$NormalNoise$NoiseParameters>;
        static ICEBERG_SURFACE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static BADLANDS_PILLAR_ROOF: $ResourceKey<$NormalNoise$NoiseParameters>;
        static AQUIFER_LAVA: $ResourceKey<$NormalNoise$NoiseParameters>;
        static VEGETATION: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_ROUGHNESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_ROUGHNESS_MODULATOR: $ResourceKey<$NormalNoise$NoiseParameters>;
        static CAVE_CHEESE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_3D_THICKNESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static CAVE_LAYER: $ResourceKey<$NormalNoise$NoiseParameters>;
        static ORE_GAP: $ResourceKey<$NormalNoise$NoiseParameters>;
        static AQUIFER_BARRIER: $ResourceKey<$NormalNoise$NoiseParameters>;
        static JAGGED: $ResourceKey<$NormalNoise$NoiseParameters>;
        static GRAVEL: $ResourceKey<$NormalNoise$NoiseParameters>;
        static BADLANDS_PILLAR: $ResourceKey<$NormalNoise$NoiseParameters>;
        static BADLANDS_SURFACE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SHIFT: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SURFACE_SECONDARY: $ResourceKey<$NormalNoise$NoiseParameters>;
        static TEMPERATURE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_2D_ELEVATION: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_3D_2: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_3D_1: $ResourceKey<$NormalNoise$NoiseParameters>;
        static VEGETATION_LARGE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static NOODLE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SURFACE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static POWDER_SNOW: $ResourceKey<$NormalNoise$NoiseParameters>;
        static ICEBERG_PILLAR_ROOF: $ResourceKey<$NormalNoise$NoiseParameters>;
        static ICEBERG_PILLAR: $ResourceKey<$NormalNoise$NoiseParameters>;
        static GRAVEL_LAYER: $ResourceKey<$NormalNoise$NoiseParameters>;
        static ICE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_3D_RARITY: $ResourceKey<$NormalNoise$NoiseParameters>;
        static NETHERRACK: $ResourceKey<$NormalNoise$NoiseParameters>;
        static PILLAR_THICKNESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static NOODLE_THICKNESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static EROSION_LARGE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SWAMP: $ResourceKey<$NormalNoise$NoiseParameters>;
        static PACKED_ICE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static AQUIFER_FLUID_LEVEL_SPREAD: $ResourceKey<$NormalNoise$NoiseParameters>;
        static CALCITE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static TEMPERATURE_LARGE: $ResourceKey<$NormalNoise$NoiseParameters>;
        constructor();
    }
    export class $SurfaceRules$SequenceRuleSource extends $Record implements $SurfaceRules$RuleSource {
        codec(): $KeyDispatchDataCodec<$SurfaceRules$RuleSource>;
        sequence(): $List<$SurfaceRules$RuleSource>;
        apply(materialRuleContext: $SurfaceRules$Context): $SurfaceRules$SurfaceRule;
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$SurfaceRule>;
        andThen<V>(arg0: $Function_<$SurfaceRules$SurfaceRule, V>): $Function<$SurfaceRules$Context, V>;
        constructor(arg0: $List_<$SurfaceRules$RuleSource_>);
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$SequenceRuleSource}.
     */
    export type $SurfaceRules$SequenceRuleSource_ = { sequence?: $List_<$SurfaceRules$RuleSource_>,  } | [sequence?: $List_<$SurfaceRules$RuleSource_>, ];
    export class $SurfaceRules$Context$SteepMaterialCondition extends $SurfaceRules$LazyXZCondition {
    }
    export class $SurfaceRules$NotConditionSource extends $Record implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$NotConditionSource}.
     */
    export type $SurfaceRules$NotConditionSource_ = { target?: $SurfaceRules$ConditionSource,  } | [target?: $SurfaceRules$ConditionSource, ];
    export class $SurfaceRules$Context$AbovePreliminarySurfaceCondition implements $SurfaceRules$Condition {
    }
    export class $SurfaceRules$Temperature extends $Enum<$SurfaceRules$Temperature> implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$Temperature}.
     */
    export type $SurfaceRules$Temperature_ = "instance";
    export class $SurfaceRules$Bandlands extends $Enum<$SurfaceRules$Bandlands> implements $SurfaceRules$RuleSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$SurfaceRule>;
        andThen<V>(arg0: $Function_<$SurfaceRules$SurfaceRule, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$Bandlands}.
     */
    export type $SurfaceRules$Bandlands_ = "instance";
}
