import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $MapCodec_, $DataResult, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $ProtoChunkExtension } from "@package/com/ishland/c2me/rewrites/chunksystem/common/async_chunkio";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $AttachmentChange_, $AttachmentTargetInfo } from "@package/net/fabricmc/fabric/impl/attachment/sync";
import { $MobCategory_, $Entity } from "@package/net/minecraft/world/entity";
import { $ChunkGeneratorAccessor } from "@package/dev/worldgen/lithostitched/mixin/common";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $RandomTickScheduler } from "@package/dev/corgitaco/ohthetreesyoullgrow/world/level/chunk";
import { $AttachmentType, $IAttachmentHolder, $AttachmentType_, $AttachmentHolder$AsField } from "@package/net/neoforged/neoforge/attachment";
import { $BitStorage, $RandomSource, $CrudeIncrementalIntIdentityHashBiMap } from "@package/net/minecraft/util";
import { $WeakReference } from "@package/java/lang/ref";
import { $AttachmentTargetImpl } from "@package/net/fabricmc/fabric/impl/attachment";
import { $WorldBorder } from "@package/net/minecraft/world/level/border";
import { $WorldBorderListenerOnce } from "@package/net/caffeinemc/mods/lithium/common/world/listeners";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $AttachmentType as $AttachmentType$1 } from "@package/net/fabricmc/fabric/api/attachment/v1";
import { $StructureStart, $Structure, $StructureSet_, $StructureSet, $Structure_ } from "@package/net/minecraft/world/level/levelgen/structure";
import { $StructurePlacement, $ConcentricRingsStructurePlacement } from "@package/net/minecraft/world/level/levelgen/structure/placement";
import { $ShortList } from "@package/it/unimi/dsi/fastutil/shorts";
import { $BiomeResolver_, $BiomeSource, $BiomeManager$NoiseBiomeSource, $MobSpawnSettings$SpawnerData, $Biome, $FeatureSorter$StepFeatureData, $BiomeManager, $Climate$Sampler_, $Biome_, $BiomeGenerationSettings } from "@package/net/minecraft/world/level/biome";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $LevelChunkAccessor } from "@package/com/bawnorton/neruina/mixin/accessor";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $ChunkGeneratorAccess } from "@package/com/benbenlaw/core/mixin/access";
import { $AABB_, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $ChunkAccessAccessor } from "@package/com/copycatsplus/copycats/mixin/foundation/copycat";
import { $ChunkAccessAccessor as $ChunkAccessAccessor$1 } from "@package/com/aetherteam/aether/mixin/mixins/common/accessor";
import { $GameEventListenerRegistry } from "@package/net/minecraft/world/level/gameevent";
import { $Set_, $Map, $Map$Entry, $List, $EnumSet, $Map_, $List_, $Collection, $Set } from "@package/java/util";
import { $LevelLightEngine, $ChunkSkyLightSources } from "@package/net/minecraft/world/level/lighting";
import { $WrappedBlockEntityTickInvokerAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/world/block_entity_ticking/sleeping";
import { $Supplier_, $Function, $BiConsumer_, $UnaryOperator_, $BooleanSupplier_, $Supplier, $Consumer_, $Predicate_, $Function_, $BiPredicate_ } from "@package/java/util/function";
import { $BlockPos, $HolderSet_, $BlockPos_, $HolderLookup$Provider, $Holder, $Direction_, $IdMap, $Direction, $HolderLookup, $Direction8, $RegistryAccess, $Registry, $Holder_, $SectionPos } from "@package/net/minecraft/core";
import { $ServerLevel, $WorldGenRegion, $FullChunkStatus, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ILevelChunk } from "@package/me/wesley1808/servercore/common/interfaces/chunk";
import { $WeightedRandomList } from "@package/net/minecraft/util/random";
import { $ChunkStatus, $ChunkStatus_ } from "@package/net/minecraft/world/level/chunk/status";
import { $Enum, $RuntimeException, $Record, $AutoCloseable, $Class, $Object } from "@package/java/lang";
import { $IChunkGenerator, $IChunkSection, $IWorldChunk, $IUpgradeData } from "@package/com/ishland/c2me/base/mixin/access";
import { $BelowZeroRetrogen, $GenerationStep$Carving_, $NoiseChunk, $Heightmap$Types, $Heightmap, $Heightmap$Types_, $RandomState } from "@package/net/minecraft/world/level/levelgen";
import { $PalettedContainerROExtension } from "@package/net/caffeinemc/mods/sodium/client/world";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $SerializableTickContainer_, $SerializableTickContainer, $ProtoChunkTicks, $LevelChunkTicks, $TickContainerAccess } from "@package/net/minecraft/world/ticks";
import { $LevelAccessor, $LightLayer_, $ChunkPos, $BlockGetter, $NoiseColumn, $Level_, $ClipContext, $ClipBlockStateContext, $WorldGenLevel, $LevelHeightAccessor, $Level, $StructureManager } from "@package/net/minecraft/world/level";
import { $Blender, $BlendingData } from "@package/net/minecraft/world/level/levelgen/blending";
import { $FluidState, $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $AccessorChunkAccess } from "@package/org/violetmoon/quark/mixin/mixins/accessor";
import { $ClientboundLevelChunkPacketData$BlockEntityTagOutput } from "@package/net/minecraft/network/protocol/game";
import { $Trackable } from "@package/dev/uncandango/alltheleaks/mixin";
import { $LongStream, $Stream } from "@package/java/util/stream";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $AttachmentSyncPayloadS2C_ } from "@package/net/fabricmc/fabric/impl/attachment/sync/s2c";
import { $AuxiliaryLightManager, $LevelChunkAuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $BlockEntityType_, $BlockEntity, $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as storage from "@package/net/minecraft/world/level/chunk/storage";
export * as status from "@package/net/minecraft/world/level/chunk/status";

declare module "@package/net/minecraft/world/level/chunk" {
    export class $PalettedContainer$Configuration<T> extends $Record {
        createData(arg0: $IdMap<T>, arg1: $PaletteResize_<T>, arg2: number): $PalettedContainer$Data<T>;
        bits(): number;
        factory(): $Palette$Factory;
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainer$Configuration}.
     */
    export type $PalettedContainer$Configuration_<T> = { factory?: $Palette$Factory_, bits?: number,  } | [factory?: $Palette$Factory_, bits?: number, ];
    export class $DataLayer {
        layerToString(arg0: number): string;
        isDefinitelyHomogenous(): boolean;
        isDefinitelyFilledWith(arg0: number): boolean;
        getData(): number[];
        get(arg0: number, arg1: number, arg2: number): number;
        isEmpty(): boolean;
        fill(arg0: number): void;
        set(arg0: number, arg1: number, arg2: number, arg3: number): void;
        copy(): $DataLayer;
        static LAYER_COUNT: number;
        static SIZE: number;
        static LAYER_SIZE: number;
        constructor();
        constructor(arg0: number[]);
        constructor(arg0: number);
        get definitelyHomogenous(): boolean;
        get data(): number[];
        get empty(): boolean;
    }
    export class $ChunkGenerator implements $ChunkGeneratorAccess, $ChunkGeneratorAccessor, $IChunkGenerator {
        getSeaLevel(): number;
        createState(arg0: $HolderLookup<$StructureSet_>, arg1: $RandomState, arg2: number): $ChunkGeneratorStructureState;
        findNearestMapStructure(arg0: $ServerLevel, arg1: $HolderSet_<$Structure>, arg2: $BlockPos_, arg3: number, arg4: boolean): $Pair<$BlockPos, $Holder<$Structure>>;
        getGenDepth(): number;
        getFirstOccupiedHeight(arg0: number, arg1: number, arg2: $Heightmap$Types_, arg3: $LevelHeightAccessor, arg4: $RandomState): number;
        createBiomes(arg0: $RandomState, arg1: $Blender, arg2: $StructureManager, arg3: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        getBaseColumn(arg0: number, arg1: number, arg2: $LevelHeightAccessor, arg3: $RandomState): $NoiseColumn;
        getBaseHeight(arg0: number, arg1: number, arg2: $Heightmap$Types_, arg3: $LevelHeightAccessor, arg4: $RandomState): number;
        /**
         * @deprecated
         */
        getBiomeGenerationSettings(arg0: $Holder_<$Biome>): $BiomeGenerationSettings;
        addDebugScreenInfo(arg0: $List_<string>, arg1: $RandomState, arg2: $BlockPos_): void;
        buildSurface(arg0: $WorldGenRegion, arg1: $StructureManager, arg2: $RandomState, arg3: $ChunkAccess): void;
        applyCarvers(arg0: $WorldGenRegion, arg1: number, arg2: $RandomState, arg3: $BiomeManager, arg4: $StructureManager, arg5: $ChunkAccess, arg6: $GenerationStep$Carving_): void;
        fillFromNoise(arg0: $Blender, arg1: $RandomState, arg2: $StructureManager, arg3: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        spawnOriginalMobs(arg0: $WorldGenRegion): void;
        handler$dcm000$terrablender$validate(arg0: $CallbackInfo): void;
        refreshFeaturesPerStep(): void;
        getTypeNameForDataFixer(): ($ResourceKey<$MapCodec<$ChunkGenerator>>) | undefined;
        getNearestGeneratedStructure(arg0: $Set_<$Holder_<$Structure>>, arg1: $ServerLevel, arg2: $StructureManager, arg3: $BlockPos_, arg4: boolean, arg5: $ConcentricRingsStructurePlacement): $Pair<$BlockPos, $Holder<$Structure>>;
        handler$hja000$integrated_stronghold$disableVanillaStrongholds2(structureHolders: $Set_<any>, serverLevel: $ServerLevel, structureManager: $StructureManager, blockPos: $BlockPos_, bl: boolean, structurePlacement: $ConcentricRingsStructurePlacement, cir: $CallbackInfoReturnable<any>): void;
        applyBiomeDecoration(arg0: $WorldGenLevel, arg1: $ChunkAccess, arg2: $StructureManager): void;
        getSpawnHeight(arg0: $LevelHeightAccessor): number;
        getMobsAt(arg0: $Holder_<$Biome>, arg1: $StructureManager, arg2: $MobCategory_, arg3: $BlockPos_): $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        createStructures(arg0: $RegistryAccess, arg1: $ChunkGeneratorStructureState, arg2: $StructureManager, arg3: $ChunkAccess, arg4: $StructureTemplateManager): void;
        createReferences(arg0: $WorldGenLevel, arg1: $StructureManager, arg2: $ChunkAccess): void;
        getFirstFreeHeight(arg0: number, arg1: number, arg2: $Heightmap$Types_, arg3: $LevelHeightAccessor, arg4: $RandomState): number;
        getMinY(): number;
        validate(): void;
        getBiomeSource(): $BiomeSource;
        bblcore$getCodec(): $MapCodec<$ChunkGenerator>;
        setBiomeSource(biomeSource: $BiomeSource): void;
        setFeaturesPerStep(supplier: $Supplier_<$List<$FeatureSorter$StepFeatureData>>): void;
        getGetter(): $Function<$Holder<$Biome>, $BiomeGenerationSettings>;
        featuresPerStep: $Supplier<$List<$FeatureSorter$StepFeatureData>>;
        static CODEC: $Codec<$ChunkGenerator>;
        biomeSource: $BiomeSource;
        constructor(arg0: $BiomeSource, arg1: $Function_<$Holder<$Biome>, $BiomeGenerationSettings>);
        constructor(arg0: $BiomeSource);
        get seaLevel(): number;
        get genDepth(): number;
        get typeNameForDataFixer(): ($ResourceKey<$MapCodec<$ChunkGenerator>>) | undefined;
        get minY(): number;
        get getter(): $Function<$Holder<$Biome>, $BiomeGenerationSettings>;
    }
    export class $PalettedContainerRO$Unpacker<T, C extends $PalettedContainerRO<T>> {
    }
    export interface $PalettedContainerRO$Unpacker<T, C extends $PalettedContainerRO<T>> {
        read(arg0: $IdMap<T>, arg1: $PalettedContainer$Strategy, arg2: $PalettedContainerRO$PackedData_<T>): $DataResult<C>;
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainerRO$Unpacker}.
     */
    export type $PalettedContainerRO$Unpacker_<T, C> = ((arg0: $IdMap<T>, arg1: $PalettedContainer$Strategy, arg2: $PalettedContainerRO$PackedData<T>) => $DataResult<C>);
    export class $PaletteResize<T> {
    }
    export interface $PaletteResize<T> {
        onResize(arg0: number, arg1: T): number;
    }
    /**
     * Values that may be interpreted as {@link $PaletteResize}.
     */
    export type $PaletteResize_<T> = ((arg0: number, arg1: T) => number);
    export class $BlockColumn {
    }
    export interface $BlockColumn {
        getBlock(arg0: number): $BlockState;
        setBlock(arg0: number, arg1: $BlockState_): void;
    }
    export class $CarvingMask$Mask {
    }
    export interface $CarvingMask$Mask {
        test(arg0: number, arg1: number, arg2: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CarvingMask$Mask}.
     */
    export type $CarvingMask$Mask_ = ((arg0: number, arg1: number, arg2: number) => boolean);
    export class $Palette$Factory {
    }
    export interface $Palette$Factory {
        create<A>(arg0: number, arg1: $IdMap<A>, arg2: $PaletteResize_<A>, arg3: $List_<A>): $Palette<A>;
    }
    /**
     * Values that may be interpreted as {@link $Palette$Factory}.
     */
    export type $Palette$Factory_ = ((arg0: number, arg1: $IdMap<any>, arg2: $PaletteResize<any>, arg3: $List<any>) => $Palette<any>);
    export class $LinearPalette<T> implements $Palette<T> {
        idFor(arg0: T): number;
        maybeHas(arg0: $Predicate_<T>): boolean;
        getSerializedSize(): number;
        valueFor(arg0: number): T;
        getSize(): number;
        static create<A>(arg0: number, arg1: $IdMap<A>, arg2: $PaletteResize_<A>, arg3: $List_<A>): $Palette<A>;
        write(arg0: $FriendlyByteBuf): void;
        read(arg0: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        get serializedSize(): number;
        get size(): number;
    }
    export class $ChunkGeneratorStructureState {
        ensureStructuresGenerated(): void;
        randomState(): $RandomState;
        hasStructureChunkInRange(arg0: $Holder_<$StructureSet>, arg1: number, arg2: number, arg3: number): boolean;
        getLevelSeed(): number;
        getRingPositionsFor(arg0: $ConcentricRingsStructurePlacement): $List<$ChunkPos>;
        static createForFlat(arg0: $RandomState, arg1: number, arg2: $BiomeSource, arg3: $Stream<$Holder_<$StructureSet>>): $ChunkGeneratorStructureState;
        static createForNormal(arg0: $RandomState, arg1: number, arg2: $BiomeSource, arg3: $HolderLookup<$StructureSet_>): $ChunkGeneratorStructureState;
        getPlacementsForStructure(arg0: $Holder_<$Structure>): $List<$StructurePlacement>;
        possibleStructureSets(): $List<$Holder<$StructureSet>>;
        get levelSeed(): number;
    }
    export class $StructureAccess {
    }
    export interface $StructureAccess {
        getStartForStructure(arg0: $Structure_): $StructureStart;
        setStartForStructure(arg0: $Structure_, arg1: $StructureStart): void;
        getReferencesForStructure(arg0: $Structure_): $LongSet;
        addReferenceForStructure(arg0: $Structure_, arg1: number): void;
        setAllReferences(arg0: $Map_<$Structure_, $LongSet>): void;
        getAllReferences(): $Map<$Structure, $LongSet>;
    }
    export class $PalettedContainerRO$PackedData<T> extends $Record {
        paletteEntries(): $List<T>;
        storage(): ($LongStream) | undefined;
        constructor(arg0: $List_<T>, arg1: ($LongStream) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainerRO$PackedData}.
     */
    export type $PalettedContainerRO$PackedData_<T> = { paletteEntries?: $List_<any>, storage?: ($LongStream) | undefined,  } | [paletteEntries?: $List_<any>, storage?: ($LongStream) | undefined, ];
    export class $ImposterProtoChunk extends $ProtoChunk {
        getWrapped(): $LevelChunk;
        static NO_FILLED_SECTION: number;
        constructor(arg0: $LevelChunk, arg1: boolean);
        get wrapped(): $LevelChunk;
    }
    export class $PalettedContainer$Strategy {
        calculateBitsForSerialization<A>(arg0: $IdMap<A>, arg1: number): number;
        getIndex(arg0: number, arg1: number, arg2: number): number;
        getConfiguration<A>(arg0: $IdMap<A>, arg1: number): $PalettedContainer$Configuration<A>;
        size(): number;
        static SECTION_STATES: $PalettedContainer$Strategy;
        static SINGLE_VALUE_PALETTE_FACTORY: $Palette$Factory;
        static LINEAR_PALETTE_FACTORY: $Palette$Factory;
        static SECTION_BIOMES: $PalettedContainer$Strategy;
        static HASHMAP_PALETTE_FACTORY: $Palette$Factory;
        constructor(arg0: number);
    }
    export class $LevelChunkSection$1BlockCounter implements $PalettedContainer$CountConsumer<$BlockState> {
    }
    export class $ChunkAccess$TicksToSave extends $Record {
        fluids(): $SerializableTickContainer<$Fluid>;
        blocks(): $SerializableTickContainer<$Block>;
        constructor(blocks: $SerializableTickContainer_<$Block>, fluids: $SerializableTickContainer_<$Fluid>);
    }
    /**
     * Values that may be interpreted as {@link $ChunkAccess$TicksToSave}.
     */
    export type $ChunkAccess$TicksToSave_ = { fluids?: $SerializableTickContainer_<$Fluid>, blocks?: $SerializableTickContainer_<$Block>,  } | [fluids?: $SerializableTickContainer_<$Fluid>, blocks?: $SerializableTickContainer_<$Block>, ];
    export class $LevelChunk$BoundTickingBlockEntity<T extends $BlockEntity> implements $TickingBlockEntity, $WorldBorderListenerOnce {
        isRemoved(): boolean;
        getPos(): $BlockPos;
        lithium$onWorldBorderShapeChange(arg0: $WorldBorder): void;
        tick(): void;
        getType(): string;
        onBorderCenterSet(arg0: $WorldBorder, arg1: number, arg2: number): void;
        onBorderSizeSet(arg0: $WorldBorder, arg1: number): void;
        onBorderSizeLerping(arg0: $WorldBorder, arg1: number, arg2: number, arg3: number): void;
        onBorderSetDamageSafeZOne(arg0: $WorldBorder, arg1: number): void;
        onBorderSetDamagePerBlock(arg0: $WorldBorder, arg1: number): void;
        onBorderSetWarningTime(arg0: $WorldBorder, arg1: number): void;
        onBorderSetWarningBlocks(arg0: $WorldBorder, arg1: number): void;
        onAreaReplaced(arg0: $WorldBorder): void;
        blockEntity: T;
        get removed(): boolean;
        get pos(): $BlockPos;
        get type(): string;
    }
    export class $LightChunk {
    }
    export interface $LightChunk extends $BlockGetter {
        findBlockLightSources(arg0: $BiConsumer_<$BlockPos, $BlockState>): void;
        getSkyLightSources(): $ChunkSkyLightSources;
        get skyLightSources(): $ChunkSkyLightSources;
    }
    export class $ChunkAccess implements $BlockGetter, $BiomeManager$NoiseBiomeSource, $LightChunk, $StructureAccess, $IAttachmentHolder, $Trackable, $ChunkAccessAccessor, $RandomTickScheduler, $ChunkAccessAccessor$1, $AttachmentTargetImpl, $AccessorChunkAccess {
        atl$getBaseClass(): $Class<any>;
        getMinBuildHeight(): number;
        acknowledgeSyncedEntry(arg0: $AttachmentType$1<any>, arg1: $AttachmentChange_): void;
        fabric_computeInitialSyncChanges(arg0: $ServerPlayer, arg1: $Consumer_<any>): void;
        fabric_getSyncTargetInfo(): $AttachmentTargetInfo<any>;
        fabric_shouldTryToSync(): boolean;
        fabric_getDynamicRegistryManager(): $RegistryAccess;
        getPos(): $ChunkPos;
        hasAttachments(): boolean;
        getExistingDataOrNull<T>(arg0: $AttachmentType_<T>): T;
        setBlockState(arg0: $BlockPos_, arg1: $BlockState_, arg2: boolean): $BlockState;
        setBlockEntity(arg0: $BlockEntity): void;
        removeBlockEntity(arg0: $BlockPos_): void;
        setUnsaved(arg0: boolean): void;
        getInhabitedTime(): number;
        getBlockTicks(): $TickContainerAccess<$Block>;
        getFluidTicks(): $TickContainerAccess<$Fluid>;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        addEntity(arg0: $Entity): void;
        getUpgradeData(): $UpgradeData;
        getAllStarts(): $Map<$Structure, $StructureStart>;
        getScheduledRandomTicks(): $List<any>;
        /**
         * @deprecated
         */
        getHighestSectionPosition(): number;
        getOrCreateHeightmapUnprimed(arg0: $Heightmap$Types_): $Heightmap;
        getSection(arg0: number): $LevelChunkSection;
        markPosForPostprocessing(arg0: $BlockPos_): void;
        getHighestFilledSectionIndex(): number;
        isLightCorrect(): boolean;
        getListenerRegistry(arg0: number): $GameEventListenerRegistry;
        getBlockEntitiesPos(): $Set<$BlockPos>;
        getHeightmaps(): $Collection<$Map$Entry<$Heightmap$Types, $Heightmap>>;
        setHeightmap(arg0: $Heightmap$Types_, arg1: number[]): void;
        hasPrimedHeightmap(arg0: $Heightmap$Types_): boolean;
        getStartForStructure(arg0: $Structure_): $StructureStart;
        setStartForStructure(arg0: $Structure_, arg1: $StructureStart): void;
        setAllStarts(arg0: $Map_<$Structure_, $StructureStart>): void;
        getReferencesForStructure(arg0: $Structure_): $LongSet;
        addReferenceForStructure(arg0: $Structure_, arg1: number): void;
        setAllReferences(arg0: $Map_<$Structure_, $LongSet>): void;
        isYSpaceEmpty(arg0: number, arg1: number): boolean;
        isSectionEmpty(arg0: number): boolean;
        isUnsaved(): boolean;
        getPersistedStatus(): $ChunkStatus;
        getHighestGeneratedStatus(): $ChunkStatus;
        getBelowZeroRetrogen(): $BelowZeroRetrogen;
        getPostProcessing(): $ShortList[];
        addPackedPostProcess(arg0: number, arg1: number): void;
        static getOrCreateOffsetList(arg0: $ShortList[], arg1: number): $ShortList;
        setBlockEntityNbt(arg0: $CompoundTag_): void;
        getBlockEntityNbt(arg0: $BlockPos_): $CompoundTag;
        getBlockEntityNbtForSaving(arg0: $BlockPos_, arg1: $HolderLookup$Provider): $CompoundTag;
        findBlockLightSources(arg0: $BiConsumer_<$BlockPos, $BlockState>): void;
        findBlocks(arg0: $Predicate_<$BlockState>, arg1: $BiPredicate_<$BlockState, $BlockPos>, arg2: $BiConsumer_<$BlockPos, $BlockState>): void;
        findBlocks(arg0: $Predicate_<$BlockState>, arg1: $BiConsumer_<$BlockPos, $BlockState>): void;
        /**
         * @deprecated
         */
        findBlocks(arg0: $BiPredicate_<$BlockState, $BlockPos>, arg1: $BiConsumer_<$BlockPos, $BlockState>): void;
        getTicksForSerialization(): $ChunkAccess$TicksToSave;
        isOldNoiseGeneration(): boolean;
        getBlendingData(): $BlendingData;
        setBlendingData(arg0: $BlendingData): void;
        incrementInhabitedTime(arg0: number): void;
        setInhabitedTime(arg0: number): void;
        setLightCorrect(arg0: boolean): void;
        getOrCreateNoiseChunk(arg0: $Function_<$ChunkAccess, $NoiseChunk>): $NoiseChunk;
        /**
         * @deprecated
         */
        carverBiome(arg0: $Supplier_<$BiomeGenerationSettings>): $BiomeGenerationSettings;
        fillBiomesFromNoise(arg0: $BiomeResolver_, arg1: $Climate$Sampler_): void;
        getHeightAccessorForGeneration(): $LevelHeightAccessor;
        hasAnyStructureReferences(): boolean;
        getAllReferences(): $Map<any, any>;
        isUpgrading(): boolean;
        initializeLightSources(): void;
        getSkyLightSources(): $ChunkSkyLightSources;
        getAttachmentHolder(): $AttachmentHolder$AsField;
        writeAttachmentsToNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        readAttachmentsFromNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        scheduleRandomTick(pos: $BlockPos_): void;
        getLevel(): $Level;
        removeData<T>(arg0: $AttachmentType_<T>): T;
        getHeight(): number;
        getHeight(arg0: $Heightmap$Types_, arg1: number, arg2: number): number;
        hasData(arg0: $AttachmentType_<never>): boolean;
        setData<T>(arg0: $AttachmentType_<T>, arg1: T): T;
        getData<T>(arg0: $AttachmentType_<T>): T;
        getSections(): $LevelChunkSection[];
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        clip(arg0: $ClipContext): $BlockHitResult;
        getLightEmission(arg0: $BlockPos_): number;
        getMaxLightLevel(): number;
        getBlockStates(arg0: $AABB_): $Stream<$BlockState>;
        isBlockInLine(arg0: $ClipBlockStateContext): $BlockHitResult;
        clipWithInteractionOverride(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $VoxelShape, arg4: $BlockState_): $BlockHitResult;
        getBlockFloorHeight(arg0: $VoxelShape, arg1: $Supplier_<$VoxelShape>): number;
        getBlockFloorHeight(arg0: $BlockPos_): number;
        syncData(arg0: $Supplier_<$AttachmentType<never>>): void;
        syncData(arg0: $AttachmentType_<never>): void;
        getExistingData<T>(arg0: $Supplier_<$AttachmentType<T>>): (T) | undefined;
        getExistingData<T>(arg0: $AttachmentType_<T>): (T) | undefined;
        getExistingDataOrNull<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        removeData<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        hasData<T>(arg0: $Supplier_<$AttachmentType<T>>): boolean;
        setData<T>(arg0: $Supplier_<$AttachmentType<T>>, arg1: T): T;
        getData<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        startTracking(): void;
        wrap(): $WeakReference<$Trackable>;
        fabric_syncChange(arg0: $AttachmentType$1<never>, arg1: $AttachmentSyncPayloadS2C_): void;
        setAttached<A>(arg0: $AttachmentType$1<A>, arg1: A): A;
        getMaxBuildHeight(): number;
        isOutsideBuildHeight(arg0: number): boolean;
        isOutsideBuildHeight(arg0: $BlockPos_): boolean;
        getSectionIndex(arg0: number): number;
        getSectionsCount(): number;
        getMaxSection(): number;
        getMinSection(): number;
        getSectionIndexFromSectionY(arg0: number): number;
        getSectionYFromSectionIndex(arg0: number): number;
        getAuxLightManager(arg0: $BlockPos_): $AuxiliaryLightManager;
        getAuxLightManager(arg0: $ChunkPos): $AuxiliaryLightManager;
        getModelData(arg0: $BlockPos_): $ModelData;
        hasBiomes(): boolean;
        getBiomeFabric(arg0: $BlockPos_): $Holder<$Biome>;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        getAttached<A>(arg0: $AttachmentType$1<A>): A;
        getAttachedOrThrow<A>(arg0: $AttachmentType$1<A>): A;
        getAttachedOrSet<A>(arg0: $AttachmentType$1<A>, arg1: A): A;
        getAttachedOrCreate<A>(arg0: $AttachmentType$1<A>, arg1: $Supplier_<A>): A;
        getAttachedOrCreate<A>(arg0: $AttachmentType$1<A>): A;
        getAttachedOrElse<A>(arg0: $AttachmentType$1<A>, arg1: A): A;
        getAttachedOrGet<A>(arg0: $AttachmentType$1<A>, arg1: $Supplier_<A>): A;
        hasAttached(arg0: $AttachmentType$1<never>): boolean;
        removeAttached<A>(arg0: $AttachmentType$1<A>): A;
        modifyAttached<A>(arg0: $AttachmentType$1<A>, arg1: $UnaryOperator_<A>): A;
        getBlockEntities(): $Map<$BlockPos, $BlockEntity>;
        aether$getNoiseChunk(): $NoiseChunk;
        getLevelHeightAccessor(): $LevelHeightAccessor;
        static NO_FILLED_SECTION: number;
        constructor(arg0: $ChunkPos, arg1: $UpgradeData, arg2: $LevelHeightAccessor, arg3: $Registry<$Biome_>, arg4: number, arg5: $LevelChunkSection[], arg6: $BlendingData);
        get minBuildHeight(): number;
        get pos(): $ChunkPos;
        get blockTicks(): $TickContainerAccess<$Block>;
        get fluidTicks(): $TickContainerAccess<$Fluid>;
        get upgradeData(): $UpgradeData;
        get scheduledRandomTicks(): $List<any>;
        get highestSectionPosition(): number;
        get highestFilledSectionIndex(): number;
        get blockEntitiesPos(): $Set<$BlockPos>;
        get heightmaps(): $Collection<$Map$Entry<$Heightmap$Types, $Heightmap>>;
        get persistedStatus(): $ChunkStatus;
        get highestGeneratedStatus(): $ChunkStatus;
        get belowZeroRetrogen(): $BelowZeroRetrogen;
        get postProcessing(): $ShortList[];
        get ticksForSerialization(): $ChunkAccess$TicksToSave;
        get oldNoiseGeneration(): boolean;
        get heightAccessorForGeneration(): $LevelHeightAccessor;
        get upgrading(): boolean;
        get skyLightSources(): $ChunkSkyLightSources;
        get attachmentHolder(): $AttachmentHolder$AsField;
        get level(): $Level;
        get sections(): $LevelChunkSection[];
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get sectionsCount(): number;
        get maxSection(): number;
        get minSection(): number;
        get blockEntities(): $Map<$BlockPos, $BlockEntity>;
        get levelHeightAccessor(): $LevelHeightAccessor;
    }
    export class $LevelChunk$RebindableTickingBlockEntityWrapper implements $TickingBlockEntity, $WrappedBlockEntityTickInvokerAccessor {
        isRemoved(): boolean;
        getPos(): $BlockPos;
        tick(): void;
        getType(): string;
        getWrapped(): $TickingBlockEntity;
        callSetWrapped(arg0: $TickingBlockEntity): void;
        ticker: $TickingBlockEntity;
        get removed(): boolean;
        get pos(): $BlockPos;
        get type(): string;
        get wrapped(): $TickingBlockEntity;
    }
    export class $LevelChunk$EntityCreationType extends $Enum<$LevelChunk$EntityCreationType> {
        static values(): $LevelChunk$EntityCreationType[];
        static valueOf(arg0: string): $LevelChunk$EntityCreationType;
        static QUEUED: $LevelChunk$EntityCreationType;
        static CHECK: $LevelChunk$EntityCreationType;
        static IMMEDIATE: $LevelChunk$EntityCreationType;
    }
    /**
     * Values that may be interpreted as {@link $LevelChunk$EntityCreationType}.
     */
    export type $LevelChunk$EntityCreationType_ = "immediate" | "queued" | "check";
    export class $PalettedContainer$Data<T> extends $Record {
        palette(): $Palette<T>;
        copyFrom(arg0: $Palette<T>, arg1: $BitStorage): void;
        getSerializedSize(): number;
        storage(): $BitStorage;
        write(arg0: $FriendlyByteBuf): void;
        configuration(): $PalettedContainer$Configuration<T>;
        copy(): $PalettedContainer$Data<T>;
        get serializedSize(): number;
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainer$Data}.
     */
    export type $PalettedContainer$Data_<T> = { palette?: $Palette<any>, storage?: $BitStorage, configuration?: $PalettedContainer$Configuration_<any>,  } | [palette?: $Palette<any>, storage?: $BitStorage, configuration?: $PalettedContainer$Configuration_<any>, ];
    export class $PalettedContainer<T> implements $PaletteResize<T>, $PalettedContainerRO<T>, $PalettedContainerROExtension<any> {
        recreate(): $PalettedContainer<T>;
        onResize(arg0: number, arg1: T): number;
        sodium$unpack(arg0: $Object[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        sodium$unpack(arg0: $Object[]): void;
        getAndSetUnchecked(arg0: number, arg1: number, arg2: number, arg3: T): T;
        static codecRO<T>(arg0: $IdMap<T>, arg1: $Codec<T>, arg2: $PalettedContainer$Strategy, arg3: T): $Codec<$PalettedContainerRO<T>>;
        handler$cfp000$lithium$removeLockHelper(arg0: $CallbackInfo): void;
        handler$cgc000$lithium$count(arg0: $PalettedContainer$CountConsumer_<any>, arg1: $CallbackInfo): void;
        sodium$copy(): $PalettedContainerRO<any>;
        maybeHas(arg0: $Predicate_<T>): boolean;
        pack(arg0: $IdMap<any>, arg1: $PalettedContainer$Strategy): $PalettedContainerRO$PackedData<any>;
        static codecRW<T>(arg0: $IdMap<T>, arg1: $Codec<T>, arg2: $PalettedContainer$Strategy, arg3: T): $Codec<$PalettedContainer<T>>;
        getSerializedSize(): number;
        getAndSet(arg0: number, arg1: number, arg2: number, arg3: T): T;
        release(): void;
        acquire(): void;
        getAll(arg0: $Consumer_<T>): void;
        get(arg0: number, arg1: number, arg2: number): T;
        count(arg0: $PalettedContainer$CountConsumer_<T>): void;
        set(arg0: number, arg1: number, arg2: number, arg3: T): void;
        write(arg0: $FriendlyByteBuf): void;
        read(arg0: $FriendlyByteBuf): void;
        copy(): $PalettedContainer<T>;
        constructor(arg0: $IdMap<T>, arg1: $PalettedContainer$Strategy, arg2: $PalettedContainer$Configuration_<T>, arg3: $BitStorage, arg4: $List_<T>);
        constructor(arg0: $IdMap<T>, arg1: T, arg2: $PalettedContainer$Strategy);
        get serializedSize(): number;
    }
    export class $PalettedContainer$CountConsumer<T> {
    }
    export interface $PalettedContainer$CountConsumer<T> {
        accept(arg0: T, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainer$CountConsumer}.
     */
    export type $PalettedContainer$CountConsumer_<T> = ((arg0: T, arg1: number) => void);
    export class $UpgradeData implements $IUpgradeData {
        upgrade(arg0: $LevelChunk): void;
        isEmpty(): boolean;
        write(): $CompoundTag;
        getCenterIndicesToUpgrade(): number[][];
        getSidesToUpgrade(): $EnumSet<$Direction8>;
        static EMPTY: $UpgradeData;
        constructor(arg0: $CompoundTag_, arg1: $LevelHeightAccessor);
        get empty(): boolean;
        get centerIndicesToUpgrade(): number[][];
        get sidesToUpgrade(): $EnumSet<$Direction8>;
    }
    export class $PalettedContainerRO<T> {
    }
    export interface $PalettedContainerRO<T> {
        recreate(): $PalettedContainer<T>;
        maybeHas(arg0: $Predicate_<T>): boolean;
        pack(arg0: $IdMap<T>, arg1: $PalettedContainer$Strategy): $PalettedContainerRO$PackedData<T>;
        getSerializedSize(): number;
        getAll(arg0: $Consumer_<T>): void;
        get(arg0: number, arg1: number, arg2: number): T;
        count(arg0: $PalettedContainer$CountConsumer_<T>): void;
        write(arg0: $FriendlyByteBuf): void;
        get serializedSize(): number;
    }
    export class $LevelChunk$PostLoadProcessor {
    }
    export interface $LevelChunk$PostLoadProcessor {
        run(arg0: $LevelChunk): void;
    }
    /**
     * Values that may be interpreted as {@link $LevelChunk$PostLoadProcessor}.
     */
    export type $LevelChunk$PostLoadProcessor_ = ((arg0: $LevelChunk) => void);
    export class $UpgradeData$BlockFixers extends $Enum<$UpgradeData$BlockFixers> implements $UpgradeData$BlockFixer {
        processChunk(arg0: $LevelAccessor): void;
    }
    /**
     * Values that may be interpreted as {@link $UpgradeData$BlockFixers}.
     */
    export type $UpgradeData$BlockFixers_ = "blacklist" | "default" | "chest" | "leaves" | "stem_block";
    export class $SingleValuePalette<T> implements $Palette<T> {
        idFor(arg0: T): number;
        maybeHas(arg0: $Predicate_<T>): boolean;
        getSerializedSize(): number;
        valueFor(arg0: number): T;
        getSize(): number;
        static create<A>(arg0: number, arg1: $IdMap<A>, arg2: $PaletteResize_<A>, arg3: $List_<A>): $Palette<A>;
        write(arg0: $FriendlyByteBuf): void;
        read(arg0: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        constructor(arg0: $IdMap<T>, arg1: $PaletteResize_<T>, arg2: $List_<T>);
        get serializedSize(): number;
        get size(): number;
    }
    export class $MissingPaletteEntryException extends $RuntimeException {
        constructor(arg0: number);
    }
    export class $LevelChunkSection implements $IChunkSection {
        getFluidState(arg0: number, arg1: number, arg2: number): $FluidState;
        getBlockState(arg0: number, arg1: number, arg2: number): $BlockState;
        setBlockState(arg0: number, arg1: number, arg2: number, arg3: $BlockState_, arg4: boolean): $BlockState;
        setBlockState(arg0: number, arg1: number, arg2: number, arg3: $BlockState_): $BlockState;
        hasOnlyAir(): boolean;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        recalcBlockCounts(): void;
        isRandomlyTickingBlocks(): boolean;
        isRandomlyTickingFluids(): boolean;
        isRandomlyTicking(): boolean;
        readBiomes(arg0: $FriendlyByteBuf): void;
        maybeHas(arg0: $Predicate_<$BlockState>): boolean;
        fillBiomesFromNoise(arg0: $BiomeResolver_, arg1: $Climate$Sampler_, arg2: number, arg3: number, arg4: number): void;
        getBiomes(): $PalettedContainerRO<$Holder<$Biome>>;
        getSerializedSize(): number;
        release(): void;
        acquire(): void;
        getStates(): $PalettedContainer<$BlockState>;
        write(arg0: $FriendlyByteBuf): void;
        read(arg0: $FriendlyByteBuf): void;
        getBlockStateContainer(): $PalettedContainer<$BlockState>;
        getBiomeContainer(): $PalettedContainerRO<$Holder<$Biome>>;
        static SECTION_WIDTH: number;
        static SECTION_HEIGHT: number;
        static BIOME_CONTAINER_BITS: number;
        static SECTION_SIZE: number;
        constructor(arg0: $Registry<$Biome_>);
        constructor(arg0: $PalettedContainer<$BlockState_>, arg1: $PalettedContainerRO<$Holder_<$Biome>>);
        get randomlyTickingBlocks(): boolean;
        get randomlyTickingFluids(): boolean;
        get randomlyTicking(): boolean;
        get biomes(): $PalettedContainerRO<$Holder<$Biome>>;
        get serializedSize(): number;
        get states(): $PalettedContainer<$BlockState>;
        get blockStateContainer(): $PalettedContainer<$BlockState>;
        get biomeContainer(): $PalettedContainerRO<$Holder<$Biome>>;
    }
    export class $LevelChunk extends $ChunkAccess implements $IAttachmentHolder, $ILevelChunk, $LevelChunkAccessor, $RandomTickScheduler, $AttachmentTargetImpl, $IWorldChunk {
        getFluidState(arg0: number, arg1: number, arg2: number): $FluidState;
        getBlockEntity(arg0: $BlockPos_, arg1: $LevelChunk$EntityCreationType_): $BlockEntity;
        getFullStatus(): $FullChunkStatus;
        addAndRegisterBlockEntity(arg0: $BlockEntity): void;
        getAuxLightManager(arg0: $ChunkPos): $LevelChunkAuxiliaryLightManager;
        clearAllBlockEntities(): void;
        unregisterTickContainerFromLevel(arg0: $ServerLevel): void;
        unpackTicks(arg0: number): void;
        servercore$shouldDoLightning(randomSource: $RandomSource, thunderChance: number): number;
        redirect$kph000$sable$getLightEngine(arg0: $ChunkSource): $LevelLightEngine;
        runPostLoad(): void;
        replaceWithPacketData(arg0: $FriendlyByteBuf, arg1: $CompoundTag_, arg2: $Consumer_<$ClientboundLevelChunkPacketData$BlockEntityTagOutput>): void;
        replaceBiomes(arg0: $FriendlyByteBuf): void;
        setLoaded(arg0: boolean): void;
        postProcessGeneration(): void;
        registerTickContainerInLevel(arg0: $ServerLevel): void;
        setFullStatus(arg0: $Supplier_<$FullChunkStatus>): void;
        registerAllBlockEntitiesAfterLevelLoad(): void;
        setGameEventListenerRegistrySections(arg0: $Int2ObjectMap<any>): void;
        isEmpty(): boolean;
        neruina$removeBlockEntityTicker(arg0: $BlockPos_): void;
        isLoadedToWorld(): boolean;
        loaded: boolean;
        xaero_wm_chunkClean: boolean;
        xaero_chunkClean: boolean;
        static NO_FILLED_SECTION: number;
        constructor(arg0: $ServerLevel, arg1: $ProtoChunk, arg2: $LevelChunk$PostLoadProcessor_);
        constructor(arg0: $Level_, arg1: $ChunkPos, arg2: $UpgradeData, arg3: $LevelChunkTicks<$Block_>, arg4: $LevelChunkTicks<$Fluid_>, arg5: number, arg6: $LevelChunkSection[], arg7: $LevelChunk$PostLoadProcessor_, arg8: $BlendingData);
        constructor(arg0: $Level_, arg1: $ChunkPos);
        set gameEventListenerRegistrySections(value: $Int2ObjectMap<any>);
        get empty(): boolean;
        get loadedToWorld(): boolean;
    }
    export class $ChunkSource implements $LightChunkGetter, $AutoCloseable {
        getChunk(arg0: number, arg1: number, arg2: $ChunkStatus_, arg3: boolean): $ChunkAccess;
        getChunk(arg0: number, arg1: number, arg2: boolean): $LevelChunk;
        hasChunk(arg0: number, arg1: number): boolean;
        getLightEngine(): $LevelLightEngine;
        setSpawnSettings(arg0: boolean, arg1: boolean): void;
        gatherStats(): string;
        getChunkForLighting(arg0: number, arg1: number): $LightChunk;
        updateChunkForced(arg0: $ChunkPos, arg1: boolean): void;
        getChunkNow(arg0: number, arg1: number): $LevelChunk;
        tick(arg0: $BooleanSupplier_, arg1: boolean): void;
        getLoadedChunksCount(): number;
        close(): void;
        onLightUpdate(arg0: $LightLayer_, arg1: $SectionPos): void;
        constructor();
        get lightEngine(): $LevelLightEngine;
        get loadedChunksCount(): number;
    }
    export class $ProtoChunk extends $ChunkAccess implements $ProtoChunkExtension {
        static packOffsetCoordinates(arg0: $BlockPos_): number;
        addEntity(arg0: $CompoundTag_): void;
        unpackBlockTicks(): $LevelChunkTicks<$Block>;
        unpackFluidTicks(): $LevelChunkTicks<$Fluid>;
        getBlockEntityNbts(): $Map<$BlockPos, $CompoundTag>;
        static unpackOffsetCoordinates(arg0: number, arg1: number, arg2: $ChunkPos): $BlockPos;
        getCarvingMask(arg0: $GenerationStep$Carving_): $CarvingMask;
        getOrCreateCarvingMask(arg0: $GenerationStep$Carving_): $CarvingMask;
        getEntities(): $List<$CompoundTag>;
        setPersistedStatus(arg0: $ChunkStatus_): void;
        setBelowZeroRetrogen(arg0: $BelowZeroRetrogen): void;
        setCarvingMask(arg0: $GenerationStep$Carving_, arg1: $CarvingMask): void;
        setLightEngine(arg0: $LevelLightEngine): void;
        setBlendingInfo(pos: $ChunkPos, bitSets: $List_<any>): void;
        setBlendingComputeFuture(future: $CompletableFuture<any>): void;
        getNeedBlending(): boolean;
        setInitialMainThreadComputeFuture(future: $CompletableFuture<any>): void;
        getInitialMainThreadComputeFuture(): $CompletableFuture<any>;
        static NO_FILLED_SECTION: number;
        constructor(arg0: $ChunkPos, arg1: $UpgradeData, arg2: $LevelChunkSection[], arg3: $ProtoChunkTicks<$Block_>, arg4: $ProtoChunkTicks<$Fluid_>, arg5: $LevelHeightAccessor, arg6: $Registry<$Biome_>, arg7: $BlendingData);
        constructor(arg0: $ChunkPos, arg1: $UpgradeData, arg2: $LevelHeightAccessor, arg3: $Registry<$Biome_>, arg4: $BlendingData);
        get blockEntityNbts(): $Map<$BlockPos, $CompoundTag>;
        get entities(): $List<$CompoundTag>;
        set persistedStatus(value: $ChunkStatus_);
        set belowZeroRetrogen(value: $BelowZeroRetrogen);
        set lightEngine(value: $LevelLightEngine);
        set blendingComputeFuture(value: $CompletableFuture<any>);
        get needBlending(): boolean;
    }
    export class $HashMapPalette<T> implements $Palette<T> {
        idFor(arg0: T): number;
        maybeHas(arg0: $Predicate_<T>): boolean;
        getSerializedSize(): number;
        valueFor(arg0: number): T;
        getSize(): number;
        static create<A>(arg0: number, arg1: $IdMap<A>, arg2: $PaletteResize_<A>, arg3: $List_<A>): $Palette<A>;
        getEntries(): $List<T>;
        write(arg0: $FriendlyByteBuf): void;
        read(arg0: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        values: $CrudeIncrementalIntIdentityHashBiMap<T>;
        constructor(arg0: $IdMap<T>, arg1: number, arg2: $PaletteResize_<T>);
        constructor(arg0: $IdMap<T>, arg1: number, arg2: $PaletteResize_<T>, arg3: $List_<T>);
        get serializedSize(): number;
        get size(): number;
        get entries(): $List<T>;
    }
    export class $UpgradeData$BlockFixer {
    }
    export interface $UpgradeData$BlockFixer {
        processChunk(arg0: $LevelAccessor): void;
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $UpgradeData$BlockFixer}.
     */
    export type $UpgradeData$BlockFixer_ = ((arg0: $BlockState, arg1: $Direction, arg2: $BlockState, arg3: $LevelAccessor, arg4: $BlockPos, arg5: $BlockPos) => $BlockState_);
    export class $BulkSectionAccess implements $AutoCloseable {
        getBlockState(arg0: $BlockPos_): $BlockState;
        getSection(arg0: $BlockPos_): $LevelChunkSection;
        close(): void;
        constructor(arg0: $LevelAccessor);
    }
    export class $ChunkGenerators {
        static bootstrap(arg0: $Registry<$MapCodec_<$ChunkGenerator>>): $MapCodec<$ChunkGenerator>;
        constructor();
    }
    export class $LightChunkGetter {
    }
    export interface $LightChunkGetter {
        getChunkForLighting(arg0: number, arg1: number): $LightChunk;
        onLightUpdate(arg0: $LightLayer_, arg1: $SectionPos): void;
        getLevel(): $BlockGetter;
        get level(): $BlockGetter;
    }
    export class $GlobalPalette<T> implements $Palette<T> {
        idFor(arg0: T): number;
        maybeHas(arg0: $Predicate_<T>): boolean;
        getSerializedSize(): number;
        valueFor(arg0: number): T;
        getSize(): number;
        static create<A>(arg0: number, arg1: $IdMap<A>, arg2: $PaletteResize_<A>, arg3: $List_<A>): $Palette<A>;
        write(arg0: $FriendlyByteBuf): void;
        read(arg0: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        constructor(arg0: $IdMap<T>);
        get serializedSize(): number;
        get size(): number;
    }
    export class $Palette<T> {
    }
    export interface $Palette<T> {
        idFor(arg0: T): number;
        maybeHas(arg0: $Predicate_<T>): boolean;
        getSerializedSize(): number;
        valueFor(arg0: number): T;
        getSize(): number;
        write(arg0: $FriendlyByteBuf): void;
        read(arg0: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        get serializedSize(): number;
        get size(): number;
    }
    export class $EmptyLevelChunk extends $LevelChunk {
        loaded: boolean;
        xaero_wm_chunkClean: boolean;
        xaero_chunkClean: boolean;
        static NO_FILLED_SECTION: number;
        constructor(arg0: $Level_, arg1: $ChunkPos, arg2: $Holder_<$Biome>);
    }
    export class $CarvingMask {
        setAdditionalMask(arg0: $CarvingMask$Mask_): void;
        get(arg0: number, arg1: number, arg2: number): boolean;
        toArray(): number[];
        stream(arg0: $ChunkPos): $Stream<$BlockPos>;
        set(arg0: number, arg1: number, arg2: number): void;
        constructor(arg0: number, arg1: number);
        constructor(arg0: number[], arg1: number);
        set additionalMask(value: $CarvingMask$Mask_);
    }
}
