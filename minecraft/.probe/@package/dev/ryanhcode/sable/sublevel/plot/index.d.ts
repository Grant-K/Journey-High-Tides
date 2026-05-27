import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $GameEvent, $GameEvent$Context_ } from "@package/net/minecraft/world/level/gameevent";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $List, $UUID_, $List_, $Collection, $Map$Entry, $Set } from "@package/java/util";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $RandomSource } from "@package/net/minecraft/util";
import { $WorldBorder } from "@package/net/minecraft/world/level/border";
import { $Supplier_, $Predicate_ } from "@package/java/util/function";
import { $DifficultyInstance, $Difficulty } from "@package/net/minecraft/world";
import { $BlockPos, $Holder_, $Holder, $BlockPos_, $Direction_, $RegistryAccess, $Registry, $Holder$Reference, $HolderLookup } from "@package/net/minecraft/core";
import { $SoundEvent_, $SoundSource_ } from "@package/net/minecraft/sounds";
import { $ChunkHolder, $ChunkResult, $ServerLevel, $ChunkHolder$PlayerProvider_, $ChunkHolder$LevelChangeListener_ } from "@package/net/minecraft/server/level";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $ChunkStatus_ } from "@package/net/minecraft/world/level/chunk/status";
import { $Class, $Object, $Iterable } from "@package/java/lang";
import { $BlockEntitySubLevelReactionWheel, $BlockEntitySubLevelActor } from "@package/dev/ryanhcode/sable/api/block";
import { $Heightmap$Types_ } from "@package/net/minecraft/world/level/levelgen";
import { $EntityTypeTest } from "@package/net/minecraft/world/level/entity";
import { $TickPriority_, $LevelTickAccess } from "@package/net/minecraft/world/ticks";
import { $ServerLevelAccessor, $ClipContext, $ClipBlockStateContext, $LightLayer_, $CommonLevelAccessor, $ChunkPos, $LevelHeightAccessor, $BlockGetter, $EntityGetter, $ColorResolver_, $Level_ } from "@package/net/minecraft/world/level";
import { $BoundingBox3ic } from "@package/dev/ryanhcode/sable/companion/math";
import { $Fluid, $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Biome, $BiomeManager } from "@package/net/minecraft/world/level/biome";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $LevelChunk, $ChunkSource, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $SubLevel, $ClientSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $LevelData } from "@package/net/minecraft/world/level/storage";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $AABB_, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Vector3dc } from "@package/org/joml";
import { $SubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";
export * as heat from "@package/dev/ryanhcode/sable/sublevel/plot/heat";

declare module "@package/dev/ryanhcode/sable/sublevel/plot" {
    export class $ClientLevelPlot extends $LevelPlot {
        getSubLevel(): $ClientSubLevel;
        plotPos: $ChunkPos;
        constructor(arg0: $SubLevelContainer, arg1: number, arg2: number, arg3: number, arg4: $ClientSubLevel);
        get subLevel(): $ClientSubLevel;
    }
    export class $LevelPlot {
        onRemove(): void;
        getBoundingBox(): $BoundingBox3ic;
        getSubLevel(): $SubLevel;
        setBoundingBox(arg0: $BoundingBox3ic): void;
        getChunk(arg0: $ChunkPos): $LevelChunk;
        getLightEngine(): $LevelLightEngine;
        updateBoundingBox(): void;
        toLocal(arg0: $ChunkPos): $ChunkPos;
        addChunkHolder(arg0: $ChunkPos, arg1: $PlotChunkHolder, arg2: boolean): void;
        getChunkHolder(arg0: $ChunkPos): $PlotChunkHolder;
        onBlockChange(arg0: $BlockPos_, arg1: $BlockState_): void;
        tick(): void;
        getCenterChunk(): $ChunkPos;
        newEmptyChunk(arg0: $ChunkPos): void;
        toGlobal(arg0: $ChunkPos): $ChunkPos;
        getBlockEntityReactionWheels(): $Collection<$BlockEntitySubLevelReactionWheel>;
        getEmbeddedLevelAccessor(): $EmbeddedPlotLevelAccessor;
        getCenterBlock(): $BlockPos;
        getChunkMin(): $ChunkPos;
        getChunkMax(): $ChunkPos;
        getLoadedChunks(): $Collection<$PlotChunkHolder>;
        expandIfNecessary(arg0: $BlockPos_): void;
        getBlockEntityActors(): $Iterable<$BlockEntitySubLevelActor>;
        getBlockEntityReactionWheelMap(): $Set<$Map$Entry<$BlockPos, $BlockEntitySubLevelReactionWheel>>;
        contains(arg0: $Vec3_): boolean;
        contains(arg0: number, arg1: number): boolean;
        contains(arg0: $ChunkPos): boolean;
        contains(arg0: $Vector3dc): boolean;
        plotPos: $ChunkPos;
        constructor(arg0: $SubLevelContainer, arg1: number, arg2: number, arg3: number, arg4: $SubLevel);
        get subLevel(): $SubLevel;
        get lightEngine(): $LevelLightEngine;
        get centerChunk(): $ChunkPos;
        get blockEntityReactionWheels(): $Collection<$BlockEntitySubLevelReactionWheel>;
        get embeddedLevelAccessor(): $EmbeddedPlotLevelAccessor;
        get centerBlock(): $BlockPos;
        get chunkMin(): $ChunkPos;
        get chunkMax(): $ChunkPos;
        get loadedChunks(): $Collection<$PlotChunkHolder>;
        get blockEntityActors(): $Iterable<$BlockEntitySubLevelActor>;
        get blockEntityReactionWheelMap(): $Set<$Map$Entry<$BlockPos, $BlockEntitySubLevelReactionWheel>>;
    }
    export class $PlotChunkHolder extends $ChunkHolder {
        getBoundingBox(): $BoundingBox3ic;
        getChunk(): $LevelChunk;
        handleBlockChange(arg0: number, arg1: number, arg2: number, arg3: $BlockState_, arg4: $BlockState_): void;
        getHeatSection(arg0: number): $HeatDataChunkSection;
        setHeatSection(arg0: number, arg1: $HeatDataChunkSection): void;
        static create(arg0: $Level_, arg1: $ChunkPos, arg2: $LevelLightEngine, arg3: $LevelChunk): $PlotChunkHolder;
        static UNLOADED_LEVEL_CHUNK_FUTURE: $CompletableFuture<$ChunkResult<$LevelChunk>>;
        currentlyLoading: $LevelChunk;
        static UNLOADED_CHUNK: $ChunkResult<$ChunkAccess>;
        entityTickingChunkFuture: $CompletableFuture<$ChunkResult<$LevelChunk>>;
        static UNLOADED_LEVEL_CHUNK: $ChunkResult<$LevelChunk>;
        tickingChunkFuture: $CompletableFuture<$ChunkResult<$LevelChunk>>;
        static UNLOADED_CHUNK_FUTURE: $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        fullChunkFuture: $CompletableFuture<$ChunkResult<$LevelChunk>>;
        constructor(arg0: $LevelChunk, arg1: $ChunkPos, arg2: $LevelHeightAccessor, arg3: $LevelLightEngine, arg4: $ChunkHolder$LevelChangeListener_, arg5: $ChunkHolder$PlayerProvider_);
        get boundingBox(): $BoundingBox3ic;
        get chunk(): $LevelChunk;
    }
    export class $HeatDataChunkSection {
        static getIndex(arg0: number, arg1: number, arg2: number): number;
        get(arg0: number, arg1: number, arg2: number): number;
        set(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static SIZE: number;
        constructor();
    }
    export class $EmbeddedPlotLevelAccessor implements $CommonLevelAccessor, $ServerLevelAccessor {
        isClientSide(): boolean;
        getFluidState(arg0: $BlockPos_): $FluidState;
        getLevelData(): $LevelData;
        getBlockState(arg0: $BlockPos_): $BlockState;
        enabledFeatures(): $FeatureFlagSet;
        getWorldBorder(): $WorldBorder;
        getBlockEntity(arg0: $BlockPos_): $BlockEntity;
        registryAccess(): $RegistryAccess;
        getChunkSource(): $ChunkSource;
        gameEvent(arg0: $Holder_<$GameEvent>, arg1: $Vec3_, arg2: $GameEvent$Context_): void;
        getRandom(): $RandomSource;
        addParticle(arg0: $ParticleOptions_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        playSound(arg0: $Player, arg1: $BlockPos_, arg2: $SoundEvent_, arg3: $SoundSource_, arg4: number, arg5: number): void;
        getServer(): $MinecraftServer;
        levelEvent(arg0: $Player, arg1: number, arg2: $BlockPos_, arg3: number): void;
        getChunk(arg0: number, arg1: number, arg2: $ChunkStatus_, arg3: boolean): $ChunkAccess;
        getBiomeManager(): $BiomeManager;
        removeBlock(arg0: $BlockPos_, arg1: boolean): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean, arg2: $Entity, arg3: number): boolean;
        hasChunk(arg0: number, arg1: number): boolean;
        /**
         * @deprecated
         */
        getSeaLevel(): number;
        getLightEngine(): $LevelLightEngine;
        dimensionType(): $DimensionType;
        getCurrentDifficultyAt(arg0: $BlockPos_): $DifficultyInstance;
        getSkyDarken(): number;
        isStateAtPosition(arg0: $BlockPos_, arg1: $Predicate_<$BlockState>): boolean;
        isFluidAtPosition(arg0: $BlockPos_, arg1: $Predicate_<$FluidState>): boolean;
        nextSubTickCount(): number;
        getBlockTicks(): $LevelTickAccess<$Block>;
        getFluidTicks(): $LevelTickAccess<$Fluid>;
        getShade(arg0: $Direction_, arg1: boolean): number;
        getUncachedNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        getLevel(): $ServerLevel;
        getEntities(arg0: $Entity, arg1: $AABB_, arg2: $Predicate_<$Entity>): $List<$Entity>;
        getEntities<T extends $Entity>(arg0: $EntityTypeTest<$Entity, T>, arg1: $AABB_, arg2: $Predicate_<T>): $List<T>;
        getHeight(arg0: $Heightmap$Types_, arg1: number, arg2: number): number;
        setBlock(arg0: $BlockPos_, arg1: $BlockState_, arg2: number, arg3: number): boolean;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        getHeightmapPos(arg0: $Heightmap$Types_, arg1: $BlockPos_): $BlockPos;
        getEntityCollisions(arg0: $Entity, arg1: $AABB_): $List<$VoxelShape>;
        isUnobstructed(arg0: $Entity, arg1: $VoxelShape): boolean;
        addFreshEntityWithPassengers(arg0: $Entity): void;
        getEntitiesOfClass<T extends $Entity>(arg0: $Class<T>, arg1: $AABB_, arg2: $Predicate_<T>): $List<T>;
        getEntitiesOfClass<T extends $Entity>(arg0: $Class<T>, arg1: $AABB_): $List<T>;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): $Player;
        getNearestPlayer(arg0: $TargetingConditions, arg1: $LivingEntity): $Player;
        getNearestPlayer(arg0: $TargetingConditions, arg1: $LivingEntity, arg2: number, arg3: number, arg4: number): $Player;
        getNearestPlayer(arg0: $TargetingConditions, arg1: number, arg2: number, arg3: number): $Player;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Predicate_<$Entity>): $Player;
        getNearestPlayer(arg0: $Entity, arg1: number): $Player;
        hasNearbyAlivePlayer(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getNearestEntity<T extends $LivingEntity>(arg0: $List_<T>, arg1: $TargetingConditions, arg2: $LivingEntity, arg3: number, arg4: number, arg5: number): T;
        getNearestEntity<T extends $LivingEntity>(arg0: $Class<T>, arg1: $TargetingConditions, arg2: $LivingEntity, arg3: number, arg4: number, arg5: number, arg6: $AABB_): T;
        getNearbyPlayers(arg0: $TargetingConditions, arg1: $LivingEntity, arg2: $AABB_): $List<$Player>;
        getNearbyEntities<T extends $LivingEntity>(arg0: $Class<T>, arg1: $TargetingConditions, arg2: $LivingEntity, arg3: $AABB_): $List<T>;
        getPlayerByUUID(arg0: $UUID_): $Player;
        getEntities(arg0: $Entity, arg1: $AABB_): $List<$Entity>;
        getBiome(arg0: $BlockPos_): $Holder<$Biome>;
        /**
         * @deprecated
         */
        hasChunkAt(arg0: number, arg1: number): boolean;
        /**
         * @deprecated
         */
        hasChunkAt(arg0: $BlockPos_): boolean;
        getMinBuildHeight(): number;
        containsAnyLiquid(arg0: $AABB_): boolean;
        getBlockStatesIfLoaded(arg0: $AABB_): $Stream<$BlockState>;
        /**
         * @deprecated
         */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(arg0: $BlockPos_, arg1: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        /**
         * @deprecated
         */
        getLightLevelDependentMagicValue(arg0: $BlockPos_): number;
        getChunk(arg0: $BlockPos_): $ChunkAccess;
        getChunk(arg0: number, arg1: number): $ChunkAccess;
        getChunk(arg0: number, arg1: number, arg2: $ChunkStatus_): $ChunkAccess;
        getChunkForCollisions(arg0: number, arg1: number): $BlockGetter;
        holderLookup<T>(arg0: $ResourceKey_<$Registry<T>>): $HolderLookup<T>;
        hasBiomes(): boolean;
        getBiomeFabric(arg0: $BlockPos_): $Holder<any>;
        lithium$getLoadedChunk(arg0: number, arg1: number): $ChunkAccess;
        getBlockTint(arg0: $BlockPos_, arg1: $ColorResolver_): number;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        isEmptyBlock(arg0: $BlockPos_): boolean;
        canSeeSkyFromBelowWater(arg0: $BlockPos_): boolean;
        getMaxLocalRawBrightness(arg0: $BlockPos_, arg1: number): number;
        getMaxLocalRawBrightness(arg0: $BlockPos_): number;
        isWaterAt(arg0: $BlockPos_): boolean;
        getPathfindingCostFromLightLevels(arg0: $BlockPos_): number;
        getHeight(): number;
        gameEvent(arg0: $ResourceKey_<$GameEvent>, arg1: $BlockPos_, arg2: $GameEvent$Context_): void;
        gameEvent(arg0: $Entity, arg1: $Holder_<$GameEvent>, arg2: $BlockPos_): void;
        gameEvent(arg0: $Entity, arg1: $Holder_<$GameEvent>, arg2: $Vec3_): void;
        gameEvent(arg0: $Holder_<$GameEvent>, arg1: $BlockPos_, arg2: $GameEvent$Context_): void;
        getDifficulty(): $Difficulty;
        playSound(arg0: $Player, arg1: $BlockPos_, arg2: $SoundEvent_, arg3: $SoundSource_): void;
        levelEvent(arg0: number, arg1: $BlockPos_, arg2: number): void;
        blockUpdated(arg0: $BlockPos_, arg1: $Block_): void;
        neighborShapeChanged(arg0: $Direction_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_, arg4: number, arg5: number): void;
        dayTime(): number;
        scheduleTick(arg0: $BlockPos_, arg1: $Fluid_, arg2: number): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Fluid_, arg2: number, arg3: $TickPriority_): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Block_, arg2: number, arg3: $TickPriority_): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Block_, arg2: number): void;
        self(): $EntityGetter;
        getMcEntities(): $Iterable<$Entity>;
        getMcPlayers(): $List<$Player>;
        getPlayers(): $EntityArrayList;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        canSeeSky(arg0: $BlockPos_): boolean;
        getBrightness(arg0: $LightLayer_, arg1: $BlockPos_): number;
        getRawBrightness(arg0: $BlockPos_, arg1: number): number;
        noCollision(arg0: $Entity): boolean;
        noCollision(arg0: $Entity, arg1: $AABB_): boolean;
        noCollision(arg0: $AABB_): boolean;
        noBlockCollision(arg0: $Entity, arg1: $AABB_): boolean;
        findSupportingBlock(arg0: $Entity, arg1: $AABB_): ($BlockPos) | undefined;
        getBlockCollisions(arg0: $Entity, arg1: $AABB_): $Iterable<$VoxelShape>;
        findFreePosition(arg0: $Entity, arg1: $VoxelShape, arg2: $Vec3_, arg3: number, arg4: number, arg5: number): ($Vec3) | undefined;
        collidesWithSuffocatingBlock(arg0: $Entity, arg1: $AABB_): boolean;
        getCollisions(arg0: $Entity, arg1: $AABB_): $Iterable<$VoxelShape>;
        isUnobstructed(arg0: $Entity): boolean;
        isUnobstructed(arg0: $BlockState_, arg1: $BlockPos_, arg2: $CollisionContext): boolean;
        getDirectSignal(arg0: $BlockPos_, arg1: $Direction_): number;
        getSignal(arg0: $BlockPos_, arg1: $Direction_): number;
        getDirectSignalTo(arg0: $BlockPos_): number;
        getControlInputSignal(arg0: $BlockPos_, arg1: $Direction_, arg2: boolean): number;
        hasSignal(arg0: $BlockPos_, arg1: $Direction_): boolean;
        hasNeighborSignal(arg0: $BlockPos_): boolean;
        getBestNeighborSignal(arg0: $BlockPos_): number;
        holderOrThrow<T>(arg0: $ResourceKey_<T>): $Holder<T>;
        isAreaLoaded(arg0: $BlockPos_, arg1: number): boolean;
        holder<T>(arg0: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        /**
         * @deprecated
         */
        getBlockEntityRenderAttachment(arg0: $BlockPos_): $Object;
        addFreshEntity(arg0: $Entity): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean, arg2: $Entity): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean): boolean;
        setBlock(arg0: $BlockPos_, arg1: $BlockState_, arg2: number): boolean;
        getMoonBrightness(): number;
        getMoonPhase(): number;
        getTimeOfDay(arg0: number): number;
        getEntityByUUID(id: $UUID_): $Entity;
        getEntityByNetworkID(id: number): $Entity;
        getEntities(): $EntityArrayList;
        clip(arg0: $ClipContext): $BlockHitResult;
        getLightEmission(arg0: $BlockPos_): number;
        getMaxLightLevel(): number;
        getBlockStates(arg0: $AABB_): $Stream<$BlockState>;
        isBlockInLine(arg0: $ClipBlockStateContext): $BlockHitResult;
        clipWithInteractionOverride(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $VoxelShape, arg4: $BlockState_): $BlockHitResult;
        getBlockFloorHeight(arg0: $VoxelShape, arg1: $Supplier_<$VoxelShape>): number;
        getBlockFloorHeight(arg0: $BlockPos_): number;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
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
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        constructor(arg0: $LevelPlot);
        get clientSide(): boolean;
        get levelData(): $LevelData;
        get worldBorder(): $WorldBorder;
        get chunkSource(): $ChunkSource;
        get random(): $RandomSource;
        get server(): $MinecraftServer;
        get biomeManager(): $BiomeManager;
        get seaLevel(): number;
        get lightEngine(): $LevelLightEngine;
        get skyDarken(): number;
        get blockTicks(): $LevelTickAccess<$Block>;
        get fluidTicks(): $LevelTickAccess<$Fluid>;
        get level(): $ServerLevel;
        get minBuildHeight(): number;
        get difficulty(): $Difficulty;
        get mcEntities(): $Iterable<$Entity>;
        get mcPlayers(): $List<$Player>;
        get players(): $EntityArrayList;
        get moonBrightness(): number;
        get moonPhase(): number;
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get sectionsCount(): number;
        get maxSection(): number;
        get minSection(): number;
    }
}
