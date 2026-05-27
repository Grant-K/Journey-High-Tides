import { $Long2ObjectLinkedOpenHashMap, $Long2ObjectOpenHashMap, $Long2IntLinkedOpenHashMap, $LongSet, $Long2ByteMap, $Long2ObjectMap, $Long2LongMap, $Long2IntMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $ServerScoreboard, $PlayerAdvancements, $MinecraftServer } from "@package/net/minecraft/server";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ISyncLoadManager, $IVanillaChunkManager, $SchedulingManager } from "@package/com/ishland/c2me/base/common/scheduler";
import { $EntityDimensions, $WalkAnimationState, $HumanoidArm_, $PortalProcessor, $Entity, $Entity$RemovalReason_, $HumanoidArm, $Entity$RemovalReason, $LivingEntity, $Mob, $ReputationEventHandler_ } from "@package/net/minecraft/world/entity";
import { $ILevelEventRedirect } from "@package/net/mehvahdjukaar/supplementaries/common/entities/dispenser_minecart";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $CustomPacketPayload_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $AttachmentTargetImpl } from "@package/net/fabricmc/fabric/impl/attachment";
import { $WorldBorder } from "@package/net/minecraft/world/level/border";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $PlayerFreezeExtension } from "@package/dev/ryanhcode/sable/mixinterface/player_freezing";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IServerChunkCacheExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ServerLevelSceneExtension } from "@package/dev/ryanhcode/sable/mixinterface/physics";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $BoundingBox, $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $ServerPlayerAccessor as $ServerPlayerAccessor$1 } from "@package/com/railwayteam/railways/mixin/conductor_possession";
import { $BlueprintServerLevel } from "@package/com/teamabnormals/blueprint/common/world/storage/receiver";
import { $OutgoingChatMessage, $RemoteChatSession, $RemoteChatSession_, $Component_, $ChatType$Bound_, $Component } from "@package/net/minecraft/network/chat";
import { $ServerPlayerRespawnExtension } from "@package/dev/ryanhcode/sable/mixinterface/respawn_point";
import { $ChunkTicketManagerExtension } from "@package/com/ishland/c2me/notickvd/common";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $LevelChunk, $ImposterProtoChunk, $ChunkGeneratorStructureState, $LightChunkGetter, $ChunkSource, $ChunkGenerator, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $DimensionDataStorage, $LevelStorageSource$LevelStorageAccess, $LevelData, $ServerLevelData } from "@package/net/minecraft/world/level/storage";
import { $FishingHook } from "@package/net/minecraft/world/entity/projectile";
import { $SlotReference, $IQuiverPlayer } from "@package/net/mehvahdjukaar/supplementaries/common/utils";
import { $BlockDestructionProgressExtension } from "@package/com/simibubi/create/foundation/block/render";
import { $EntityTrackerAccessor, $ServerChunkLoadingManagerAccessor } from "@package/io/wispforest/accessories/mixin";
import { $Duration_ } from "@package/java/time";
import { $ChunkMapAccessor, $ChunkMapAccessor$TrackedEntityAccessor } from "@package/com/railwayteam/railways/neoforge/mixin";
import { $BlockableEventLoop, $ProcessorHandle, $ProcessorMailbox } from "@package/net/minecraft/util/thread";
import { $LevelStem_, $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $ServerStatsCounter, $ServerRecipeBook } from "@package/net/minecraft/stats";
import { $ICapabilityInvalidationListener_ } from "@package/net/neoforged/neoforge/capabilities";
import { $PacketAndPayloadAcceptor } from "@package/net/neoforged/neoforge/network/bundle";
import { $IWorldMapServerLevel } from "@package/xaero/map/core";
import { $ServerStatus_ } from "@package/net/minecraft/network/protocol/status";
import { $FactoryExtraMenuSupplier$PrepareMenu } from "@package/wily/factoryapi/base";
import { $ChestMenuData } from "@package/dev/latvian/mods/kubejs/gui/chest";
import { $GameEvent, $GameEvent$Context_ } from "@package/net/minecraft/world/level/gameevent";
import { $ServerLevelAccessor as $ServerLevelAccessor$3 } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $UUID_, $Set_, $ArrayList, $Map, $List, $List_, $Collection, $Queue, $Comparator, $Set, $UUID, $Optional } from "@package/java/util";
import { $IPlayer } from "@package/com/crackerjackbox/mobcontrol/iface";
import { $BlockPos, $BlockPos_, $Holder$Reference, $HolderLookup$Provider, $Holder, $Direction_, $HolderLookup, $RegistryAccess, $Registry, $Holder_, $SectionPos } from "@package/net/minecraft/core";
import { $IServerChunkCache, $IServerLevel } from "@package/me/wesley1808/servercore/common/interfaces/chunk";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $BlockApiCacheImpl, $ServerWorldCache } from "@package/net/fabricmc/fabric/impl/lookup/block";
import { $ServerPlayerAccessor } from "@package/com/telepathicgrunt/the_bumblezone/mixin/entities";
import { $Tickable$Level } from "@package/me/kall/doespotatotick/ext";
import { $Throwable, $IllegalStateException, $Runnable, $Enum, $Comparable, $Iterable, $Thread, $Record, $AutoCloseable, $Class, $Runnable_, $Object } from "@package/java/lang";
import { $AccessorMixinChunkMap } from "@package/noobanidus/mods/lootr/common/mixin/accessor";
import { $TicketDistanceLevelPropagatorExtension, $IChunkSystemAccess } from "@package/com/ishland/c2me/rewrites/chunksystem/common/ducks";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $CustomSpawner_, $Explosion, $LightLayer_, $ChunkPos, $BlockGetter, $Level$ExplosionInteraction_, $ColorResolver_, $CustomSpawner, $ExplosionDamageCalculator, $Level_, $GameType, $GameType_, $EntityGetter, $ClipContext, $ClipBlockStateContext, $WorldGenLevel, $NaturalSpawner$SpawnState, $LevelHeightAccessor, $Level, $StructureManager } from "@package/net/minecraft/world/level";
import { $FluidState, $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $WaterOcclusionContainerHolder } from "@package/dev/ryanhcode/sable/mixinterface/water_occlusion";
import { $ServerWorldExtended } from "@package/net/caffeinemc/mods/lithium/common/world";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_ } from "@package/net/minecraft/resources";
import { $DimensionTransition$PostDimensionTransition_, $PortalForcer, $DimensionTransition, $DimensionTransition_ } from "@package/net/minecraft/world/level/portal";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
import { $WaterOcclusionContainer } from "@package/dev/ryanhcode/sable/sublevel/water_occlusion";
import { $Codec } from "@package/com/mojang/serialization";
import { $Either, $Pair as $Pair$1 } from "@package/com/mojang/datafixers/util";
import { $IMutableMainThread } from "@package/me/srrapero720/dimthread/thread";
import { $CompletableFuture, $Executor_ } from "@package/java/util/concurrent";
import { $ServerPlayerData as $ServerPlayerData$1, $IServerPlayer as $IServerPlayer$2 } from "@package/xaero/common/server/player";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ServerChunkCacheAccessor } from "@package/dev/ryanhcode/sable/mixin/level_accelerator";
import { $RandomSource, $ProgressListener, $StaticCache2D, $Unit, $SortedArraySet } from "@package/net/minecraft/util";
import { $IServerPlayer, $ServerPlayerData } from "@package/xaero/lib/common/player";
import { $BossEvent$BossBarOverlay_, $InteractionResult, $MenuProvider, $InteractionHand_, $Container, $BossEvent, $RandomSequences, $DifficultyInstance, $BossEvent$BossBarColor_, $InteractionHand, $Difficulty } from "@package/net/minecraft/world";
import { $ConductorEntity, $ServerPlayerPossessionAccess } from "@package/com/railwayteam/railways/content/conductor";
import { $SoundSource_, $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $ReportedException } from "@package/net/minecraft";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $AbstractContainerMenu, $InventoryMenu } from "@package/net/minecraft/world/inventory";
import { $DuckChunkHolder } from "@package/com/ishland/c2me/opts/scheduling/common";
import { $PersistentEntitySectionManager, $EntityInLevelCallback, $EntityTypeTest, $LevelCallback, $EntityTickList, $ChunkStatusUpdateListener_ } from "@package/net/minecraft/world/level/entity";
import { $IMagnetTracker } from "@package/org/violetmoon/quark/api";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $KubeJSGUI } from "@package/dev/latvian/mods/kubejs/gui";
import { $Biome, $BiomeManager } from "@package/net/minecraft/world/level/biome";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $TextFilter, $ServerPlayerConnection, $ServerGamePacketListenerImpl } from "@package/net/minecraft/server/network";
import { $ReputationEventType } from "@package/net/minecraft/world/entity/ai/village";
import { $SubLevelContainerHolder } from "@package/dev/ryanhcode/sable/mixinterface/plot";
import { $ChatVisiblity, $Player, $ChatVisiblity_ } from "@package/net/minecraft/world/entity/player";
import { $Pair } from "@package/it/unimi/dsi/fastutil";
import { $ChunkScanAccess, $ChunkStorage } from "@package/net/minecraft/world/level/chunk/storage";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $IntProvider } from "@package/net/minecraft/util/valueproviders";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $InventoryKJS, $ServerLevelKJS, $ServerPlayerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AABB_, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $SubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";
import { $EnderDragon } from "@package/net/minecraft/world/entity/boss/enderdragon";
import { $ServerLevelAccessor as $ServerLevelAccessor$4 } from "@package/com/aetherteam/aether/mixin/mixins/common/accessor";
import { $ServerChunkLoadingManagerAccessor as $ServerChunkLoadingManagerAccessor$1, $EntityTrackerAccessor as $EntityTrackerAccessor$1 } from "@package/net/fabricmc/fabric/mixin/networking/accessor";
import { $DynamicGraphMinFixedPoint, $LightEngine, $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $EndDragonFight } from "@package/net/minecraft/world/level/dimension/end";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $stateCache, $IStateCacheProvider } from "@package/com/craisinlord/idas/state";
import { $ServerWorldCapabilities } from "@package/xaero/map/capabilities";
import { $Supplier_, $IntConsumer_, $BooleanSupplier_, $Supplier, $Consumer_, $Predicate_, $IntSupplier_, $IntConsumer, $IntSupplier, $Function_ } from "@package/java/util/function";
import { $ChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $PathTypeCache } from "@package/net/minecraft/world/level/pathfinder";
import { $ObjectSet } from "@package/it/unimi/dsi/fastutil/objects";
import { $Path_ } from "@package/java/nio/file";
import { $TheChunkSystem } from "@package/com/ishland/c2me/rewrites/chunksystem/common";
import { $ChunkStep_, $ChunkStatus, $ChunkStatus_, $WorldGenContext } from "@package/net/minecraft/world/level/chunk/status";
import { $IChunkTicket, $ISimulationDistanceLevelPropagator, $IChunkTicketManager, $IServerChunkManager, $ITACSTicketManager, $IChunkHolder, $IChunkTicketManagerDistanceFromNearestPlayerTracker, $ISyncedClientOptions, $IChunkTicketManagerNearbyChunkTicketUpdater, $IServerLightingProvider, $IThreadedAnvilChunkStorage, $IThreadedAnvilChunkStorageTicketManager } from "@package/com/ishland/c2me/base/mixin/access";
import { $Heightmap$Types_, $RandomState } from "@package/net/minecraft/world/level/levelgen";
import { $LevelTickAccess, $LevelTicks, $TickPriority_ } from "@package/net/minecraft/world/ticks";
import { $PoiManager } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $IThreadedAnvilChunkStorage as $IThreadedAnvilChunkStorage$1 } from "@package/com/ishland/c2me/opts/scheduling/common/idle_tasks";
import { $MagnetWorldInterface } from "@package/org/violetmoon/quark/addons/oddities/magnetsystem";
import { $EntityAnchorArgument$Anchor_ } from "@package/net/minecraft/commands/arguments";
import { $ServerPlayerData as $ServerPlayerData$2, $IServerPlayer as $IServerPlayer$1 } from "@package/xaero/map/server/player";
import { $Raid, $Raids } from "@package/net/minecraft/world/entity/raid";
import { $ServerboundPlayerActionPacket$Action_, $CommonPlayerSpawnInfo, $ClientGamePacketListener } from "@package/net/minecraft/network/protocol/game";
import { $ServerLevelAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/minimal_nonvanilla/spawning";
import { $Stream } from "@package/java/util/stream";
import { $ServerLevelAccessor as $ServerLevelAccessor$2 } from "@package/net/caffeinemc/mods/lithium/mixin/util/entity_movement_tracking";
import { $ServerLevelAccessor as $ServerLevelAccessor$1 } from "@package/net/caffeinemc/mods/lithium/mixin/util/accessors";
import { $BlockEntityType_, $BlockEntity, $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as progress from "@package/net/minecraft/server/level/progress";

declare module "@package/net/minecraft/server/level" {
    export class $ChunkTrackingView$Positioned extends $Record implements $ChunkTrackingView {
        viewDistance(): number;
        center(): $ChunkPos;
        contains(arg0: number, arg1: number, arg2: boolean): boolean;
        forEach(arg0: $Consumer_<$ChunkPos>): void;
        isInViewDistance(arg0: number, arg1: number): boolean;
        contains(arg0: $ChunkPos): boolean;
        contains(arg0: number, arg1: number): boolean;
        constructor(arg0: $ChunkPos, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $ChunkTrackingView$Positioned}.
     */
    export type $ChunkTrackingView$Positioned_ = { center?: $ChunkPos, viewDistance?: number,  } | [center?: $ChunkPos, viewDistance?: number, ];
    export class $PlayerRespawnLogic {
        static getSpawnPosInChunk(arg0: $ServerLevel, arg1: $ChunkPos): $BlockPos;
        constructor();
    }
    export class $Ticket<T> implements $Comparable<$Ticket<never>>, $IChunkTicket {
        isForceTicks(): boolean;
        getTicketLevel(): number;
        compareTo(arg0: $Ticket<never>): number;
        getType(): $TicketType<$Ticket<never>>;
        invokeIsExpired(arg0: number): boolean;
        createdTick: number;
        constructor(arg0: $TicketType<$Ticket<never>>, arg1: number, arg2: $Ticket<never>, arg3: boolean);
        get forceTicks(): boolean;
        get ticketLevel(): number;
        get type(): $TicketType<$Ticket<never>>;
    }
    export class $TicketType<T> {
        getComparator(): $Comparator<T>;
        static create<T>(arg0: string, arg1: $Comparator<T>): $TicketType<T>;
        static create<T>(arg0: string, arg1: $Comparator<T>, arg2: number): $TicketType<T>;
        timeout(): number;
        static PLAYER: $TicketType<$ChunkPos>;
        static POST_TELEPORT: $TicketType<number>;
        static DRAGON: $TicketType<$Unit>;
        static START: $TicketType<$Unit>;
        static FORCED: $TicketType<$ChunkPos>;
        static UNKNOWN: $TicketType<$ChunkPos>;
        static PORTAL: $TicketType<$BlockPos>;
        get comparator(): $Comparator<T>;
    }
    export class $ChunkHolder$PlayerProvider {
    }
    export interface $ChunkHolder$PlayerProvider {
        getPlayers(arg0: $ChunkPos, arg1: boolean): $List<$ServerPlayer>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkHolder$PlayerProvider}.
     */
    export type $ChunkHolder$PlayerProvider_ = ((arg0: $ChunkPos, arg1: boolean) => $List_<$ServerPlayer>);
    export class $ServerBossEvent extends $BossEvent {
        setVisible(arg0: boolean): void;
        isVisible(): boolean;
        addPlayer(arg0: $ServerPlayer): void;
        removePlayer(arg0: $ServerPlayer): void;
        removeAllPlayers(): void;
        getPlayers(): $Collection<$ServerPlayer>;
        constructor(arg0: $Component_, arg1: $BossEvent$BossBarColor_, arg2: $BossEvent$BossBarOverlay_);
        get players(): $Collection<$ServerPlayer>;
    }
    export class $ChunkHolder$LevelChangeListener {
    }
    export interface $ChunkHolder$LevelChangeListener {
        onLevelChange(arg0: $ChunkPos, arg1: $IntSupplier_, arg2: number, arg3: $IntConsumer_): void;
    }
    /**
     * Values that may be interpreted as {@link $ChunkHolder$LevelChangeListener}.
     */
    export type $ChunkHolder$LevelChangeListener_ = ((arg0: $ChunkPos, arg1: $IntSupplier, arg2: number, arg3: $IntConsumer) => void);
    export class $ChunkHolder extends $GenerationChunkHolder implements $DuckChunkHolder, $IChunkHolder {
        broadcastChanges(arg0: $LevelChunk): void;
        blockChanged(arg0: $BlockPos_): void;
        getTickingChunk(): $LevelChunk;
        c2me$queueLightSectionDirty(lightType: $LightLayer_, sectionY: number): void;
        c2me$shouldScheduleUndirty(): boolean;
        c2me$undirtyLight(): void;
        setTicketLevel(arg0: number): void;
        addSaveDependency(arg0: $CompletableFuture<never>): void;
        sectionLightChanged(arg0: $LightLayer_, arg1: number): void;
        setQueueLevel(arg0: number): void;
        wasAccessibleSinceLastSave(): boolean;
        refreshAccessibility(): void;
        getSaveSyncFuture(): $CompletableFuture<never>;
        isReadyForSaving(): boolean;
        getChunkToSend(): $LevelChunk;
        getFullChunkFuture(): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        getTickingChunkFuture(): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        getEntityTickingChunkFuture(): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        addSendDependency(arg0: $CompletableFuture<never>): void;
        getSendSyncFuture(): $CompletableFuture<never>;
        invokeUpdateFutures(arg0: $ChunkMap, arg1: $Executor_): void;
        static UNLOADED_LEVEL_CHUNK_FUTURE: $CompletableFuture<$ChunkResult<$LevelChunk>>;
        currentlyLoading: $LevelChunk;
        static UNLOADED_CHUNK: $ChunkResult<$ChunkAccess>;
        entityTickingChunkFuture: $CompletableFuture<$ChunkResult<$LevelChunk>>;
        static UNLOADED_LEVEL_CHUNK: $ChunkResult<$LevelChunk>;
        tickingChunkFuture: $CompletableFuture<$ChunkResult<$LevelChunk>>;
        static UNLOADED_CHUNK_FUTURE: $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        fullChunkFuture: $CompletableFuture<$ChunkResult<$LevelChunk>>;
        constructor(arg0: $ChunkPos, arg1: number, arg2: $LevelHeightAccessor, arg3: $LevelLightEngine, arg4: $ChunkHolder$LevelChangeListener_, arg5: $ChunkHolder$PlayerProvider_);
        get tickingChunk(): $LevelChunk;
        set ticketLevel(value: number);
        set queueLevel(value: number);
        get saveSyncFuture(): $CompletableFuture<never>;
        get readyForSaving(): boolean;
        get chunkToSend(): $LevelChunk;
        get sendSyncFuture(): $CompletableFuture<never>;
    }
    export class $WorldGenRegion implements $WorldGenLevel {
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
        addFreshEntity(arg0: $Entity): boolean;
        getServer(): $MinecraftServer;
        getMinBuildHeight(): number;
        levelEvent(arg0: $Player, arg1: number, arg2: $BlockPos_, arg3: number): void;
        getCenter(): $ChunkPos;
        getChunk(arg0: number, arg1: number): $ChunkAccess;
        getChunk(arg0: number, arg1: number, arg2: $ChunkStatus_, arg3: boolean): $ChunkAccess;
        getBiomeManager(): $BiomeManager;
        removeBlock(arg0: $BlockPos_, arg1: boolean): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean, arg2: $Entity, arg3: number): boolean;
        hasChunk(arg0: number, arg1: number): boolean;
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
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Predicate_<$Entity>): $Player;
        getUncachedNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        localvar$ehc000$easymagic$setBlock(blockState: $BlockState_): $BlockState;
        localvar$fjj001$easyanvils$setBlock(blockState: $BlockState_): $BlockState;
        ensureCanWrite(arg0: $BlockPos_): boolean;
        setCurrentlyGenerating(arg0: $Supplier_<string>): void;
        /**
         * @deprecated
         */
        getLevel(): $ServerLevel;
        getEntities(arg0: $Entity, arg1: $AABB_, arg2: $Predicate_<$Entity>): $List<$Entity>;
        getEntities<T extends $Entity>(arg0: $EntityTypeTest<$Entity, T>, arg1: $AABB_, arg2: $Predicate_<T>): $List<T>;
        getHeight(): number;
        getHeight(arg0: $Heightmap$Types_, arg1: number, arg2: number): number;
        getSeed(): number;
        isOldChunkAround(arg0: $ChunkPos, arg1: number): boolean;
        setBlock(arg0: $BlockPos_, arg1: $BlockState_, arg2: number, arg3: number): boolean;
        addFreshEntityWithPassengers(arg0: $Entity): void;
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
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        getHeightmapPos(arg0: $Heightmap$Types_, arg1: $BlockPos_): $BlockPos;
        getEntityCollisions(arg0: $Entity, arg1: $AABB_): $List<$VoxelShape>;
        isUnobstructed(arg0: $Entity, arg1: $VoxelShape): boolean;
        getMoonBrightness(): number;
        getMoonPhase(): number;
        getTimeOfDay(arg0: number): number;
        getEntitiesOfClass<T extends $Entity>(arg0: $Class<T>, arg1: $AABB_, arg2: $Predicate_<T>): $List<T>;
        getEntitiesOfClass<T extends $Entity>(arg0: $Class<T>, arg1: $AABB_): $List<T>;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): $Player;
        getNearestPlayer(arg0: $TargetingConditions, arg1: $LivingEntity): $Player;
        getNearestPlayer(arg0: $TargetingConditions, arg1: $LivingEntity, arg2: number, arg3: number, arg4: number): $Player;
        getNearestPlayer(arg0: $TargetingConditions, arg1: number, arg2: number, arg3: number): $Player;
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
        destroyBlock(arg0: $BlockPos_, arg1: boolean, arg2: $Entity): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean): boolean;
        setBlock(arg0: $BlockPos_, arg1: $BlockState_, arg2: number): boolean;
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
        level: $ServerLevel;
        constructor(arg0: $ServerLevel, arg1: $StaticCache2D<$GenerationChunkHolder>, arg2: $ChunkStep_, arg3: $ChunkAccess);
        get clientSide(): boolean;
        get levelData(): $LevelData;
        get worldBorder(): $WorldBorder;
        get chunkSource(): $ChunkSource;
        get random(): $RandomSource;
        get server(): $MinecraftServer;
        get minBuildHeight(): number;
        get center(): $ChunkPos;
        get biomeManager(): $BiomeManager;
        get seaLevel(): number;
        get lightEngine(): $LevelLightEngine;
        get skyDarken(): number;
        get blockTicks(): $LevelTickAccess<$Block>;
        get fluidTicks(): $LevelTickAccess<$Fluid>;
        set currentlyGenerating(value: $Supplier_<string>);
        get seed(): number;
        get difficulty(): $Difficulty;
        get moonBrightness(): number;
        get moonPhase(): number;
        get mcEntities(): $Iterable<$Entity>;
        get mcPlayers(): $List<$Player>;
        get players(): $EntityArrayList;
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get sectionsCount(): number;
        get maxSection(): number;
        get minSection(): number;
    }
    export class $ChunkTrackingView {
        static difference(arg0: $ChunkTrackingView, arg1: $ChunkTrackingView, arg2: $Consumer_<$ChunkPos>, arg3: $Consumer_<$ChunkPos>): void;
        static isInViewDistance(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        static isWithinDistance(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): boolean;
        static of(arg0: $ChunkPos, arg1: number): $ChunkTrackingView;
        static EMPTY: $ChunkTrackingView;
    }
    export interface $ChunkTrackingView {
        isInViewDistance(arg0: number, arg1: number): boolean;
        contains(arg0: $ChunkPos): boolean;
        contains(arg0: number, arg1: number): boolean;
        contains(arg0: number, arg1: number, arg2: boolean): boolean;
        forEach(arg0: $Consumer_<$ChunkPos>): void;
    }
    export class $GenerationChunkHolder {
        getPos(): $ChunkPos;
        getFullStatus(): $FullChunkStatus;
        getPersistedStatus(): $ChunkStatus;
        isStatusDisallowed(arg0: $ChunkStatus_): boolean;
        getOrCreateFuture(arg0: $ChunkStatus_): $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        rescheduleChunkTask(arg0: $ChunkMap, arg1: $ChunkStatus_): void;
        acquireStatusBump(arg0: $ChunkStatus_): boolean;
        replaceProtoChunk(arg0: $ImposterProtoChunk): void;
        failAndClearPendingFuture(arg0: number, arg1: $CompletableFuture<$ChunkResult<$ChunkAccess>>): void;
        failAndClearPendingFuturesBetween(arg0: $ChunkStatus_, arg1: $ChunkStatus_): void;
        findHighestStatusWithPendingFuture(arg0: $ChunkStatus_): $ChunkStatus;
        completeFuture(arg0: $ChunkStatus_, arg1: $ChunkAccess): void;
        getChunkIfPresent(arg0: $ChunkStatus_): $ChunkAccess;
        getTicketLevel(): number;
        getLatestStatus(): $ChunkStatus;
        getLatestChunk(): $ChunkAccess;
        scheduleChunkGenerationTask(arg0: $ChunkStatus_, arg1: $ChunkMap): $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        getGenerationRefCount(): number;
        increaseGenerationRefCount(): void;
        decreaseGenerationRefCount(): void;
        applyStep(arg0: $ChunkStep_, arg1: $GeneratingChunkMap, arg2: $StaticCache2D<$GenerationChunkHolder>): $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        getChunkIfPresentUnchecked(arg0: $ChunkStatus_): $ChunkAccess;
        getAllFutures(): $List<$Pair$1<$ChunkStatus, $CompletableFuture<$ChunkResult<$ChunkAccess>>>>;
        getQueueLevel(): number;
        removeTask(arg0: $ChunkGenerationTask): void;
        currentlyLoading: $LevelChunk;
        static UNLOADED_CHUNK: $ChunkResult<$ChunkAccess>;
        static UNLOADED_CHUNK_FUTURE: $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        constructor(arg0: $ChunkPos);
        get pos(): $ChunkPos;
        get fullStatus(): $FullChunkStatus;
        get persistedStatus(): $ChunkStatus;
        get ticketLevel(): number;
        get latestStatus(): $ChunkStatus;
        get latestChunk(): $ChunkAccess;
        get generationRefCount(): number;
        get allFutures(): $List<$Pair$1<$ChunkStatus, $CompletableFuture<$ChunkResult<$ChunkAccess>>>>;
        get queueLevel(): number;
    }
    export class $ChunkResult<T> {
        static error<T>(arg0: $Supplier_<string>): $ChunkResult<T>;
        static error<T>(arg0: string): $ChunkResult<T>;
        static of<T>(arg0: T): $ChunkResult<T>;
        static orElse<R>(arg0: $ChunkResult<R>, arg1: R): R;
    }
    export interface $ChunkResult<T> {
        isSuccess(): boolean;
        ifSuccess(arg0: $Consumer_<T>): $ChunkResult<T>;
        orElseThrow<E extends $Throwable>(arg0: $Supplier_<E>): T;
        getError(): string;
        map<R>(arg0: $Function_<T, R>): $ChunkResult<R>;
        orElse(arg0: T): T;
        get success(): boolean;
    }
    export class $ServerChunkCache$ChunkAndHolder extends $Record {
        chunk(): $LevelChunk;
        holder(): $ChunkHolder;
        constructor(chunk: $LevelChunk, holder: $ChunkHolder);
    }
    /**
     * Values that may be interpreted as {@link $ServerChunkCache$ChunkAndHolder}.
     */
    export type $ServerChunkCache$ChunkAndHolder_ = { chunk?: $LevelChunk, holder?: $ChunkHolder,  } | [chunk?: $LevelChunk, holder?: $ChunkHolder, ];
    export class $ServerChunkCache extends $ChunkSource implements $IServerChunkCacheExtension, $IServerChunkCache, $ServerChunkCacheAccessor, $IMutableMainThread, $IServerChunkManager, $ISyncLoadManager {
        getPendingTasksCount(): number;
        broadcastAndSend(arg0: $Entity, arg1: $Packet<never>): void;
        addRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T): void;
        addRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T, arg4: boolean): void;
        dimThreads$setMainThread(arg0: $Thread): void;
        dimThreads$getMainThread(): $Thread;
        addEntity(arg0: $Entity): void;
        removeEntity(arg0: $Entity): void;
        blockChanged(arg0: $BlockPos_): void;
        getTickingGenerated(): number;
        removeTicketsOnClosing(): void;
        handler$kpf000$sable$init(arg0: $ServerLevel, arg1: $LevelStorageSource$LevelStorageAccess, arg2: $DataFixer, arg3: $StructureTemplateManager, arg4: $Executor_, arg5: $ChunkGenerator, arg6: number, arg7: number, arg8: boolean, arg9: $ChunkProgressListener, arg10: $ChunkStatusUpdateListener_, arg11: $Supplier_<any>, arg12: $CallbackInfo): void;
        wrapOperation$jno000$dimthread$currentThread(arg0: $Operation_<any>): $Thread;
        getCurrentSyncLoad(): $ChunkPos;
        getDataStorage(): $DimensionDataStorage;
        chunkScanner(): $ChunkScanAccess;
        randomState(): $RandomState;
        getPoiManager(): $PoiManager;
        removeRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T, arg4: boolean): void;
        removeRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T): void;
        getLastSpawnState(): $NaturalSpawner$SpawnState;
        isPositionTicking(arg0: number): boolean;
        getGeneratorState(): $ChunkGeneratorStructureState;
        getGenerator(): $ChunkGenerator;
        move(arg0: $ServerPlayer): void;
        pollTask(): boolean;
        broadcast(arg0: $Entity, arg1: $Packet<never>): void;
        servercore$requiresBroadcast(holder: $ChunkHolder): void;
        getChunkDebugData(arg0: $ChunkPos): string;
        getVisibleChunkIfPresent(arg0: number): $ChunkHolder;
        setSimulationDistance(arg0: number): void;
        setViewDistance(arg0: number): void;
        getChunkFuture(arg0: number, arg1: number, arg2: $ChunkStatus_, arg3: boolean): $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        save(arg0: boolean): void;
        broadcastAndSend(arg0: $Entity, arg1: $CustomPacketPayload_): void;
        broadcast(arg0: $Entity, arg1: $CustomPacketPayload_): void;
        self(): $ServerChunkCache;
        getTicketManager(): $DistanceManager;
        invokeGetVisibleChunkIfPresent(arg0: number): $ChunkHolder;
        invokeUpdateChunks(): boolean;
        getMainThreadExecutor(): $ServerChunkCache$MainThreadExecutor;
        mainThread: $Thread;
        level: $ServerLevel;
        chunkMap: $ChunkMap;
        constructor(arg0: $ServerLevel, arg1: $LevelStorageSource$LevelStorageAccess, arg2: $DataFixer, arg3: $StructureTemplateManager, arg4: $Executor_, arg5: $ChunkGenerator, arg6: number, arg7: number, arg8: boolean, arg9: $ChunkProgressListener, arg10: $ChunkStatusUpdateListener_, arg11: $Supplier_<$DimensionDataStorage>);
        get pendingTasksCount(): number;
        get tickingGenerated(): number;
        get currentSyncLoad(): $ChunkPos;
        get dataStorage(): $DimensionDataStorage;
        get poiManager(): $PoiManager;
        get lastSpawnState(): $NaturalSpawner$SpawnState;
        get generatorState(): $ChunkGeneratorStructureState;
        get generator(): $ChunkGenerator;
        set simulationDistance(value: number);
        set viewDistance(value: number);
        get ticketManager(): $DistanceManager;
        get mainThreadExecutor(): $ServerChunkCache$MainThreadExecutor;
    }
    export class $ChunkResult$Success<T> extends $Record implements $ChunkResult<T> {
        isSuccess(): boolean;
        ifSuccess(arg0: $Consumer_<T>): $ChunkResult<T>;
        orElseThrow<E extends $Throwable>(arg0: $Supplier_<E>): T;
        getError(): string;
        value(): T;
        map<R>(arg0: $Function_<T, R>): $ChunkResult<R>;
        orElse(arg0: T): T;
        constructor(arg0: T);
        get success(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ChunkResult$Success}.
     */
    export type $ChunkResult$Success_<T> = { value?: any,  } | [value?: any, ];
    export class $PlayerMap {
        addPlayer(arg0: $ServerPlayer, arg1: boolean): void;
        removePlayer(arg0: $ServerPlayer): void;
        getAllPlayers(): $Set<$ServerPlayer>;
        ignoredOrUnknown(arg0: $ServerPlayer): boolean;
        ignorePlayer(arg0: $ServerPlayer): void;
        unIgnorePlayer(arg0: $ServerPlayer): void;
        ignored(arg0: $ServerPlayer): boolean;
        constructor();
        get allPlayers(): $Set<$ServerPlayer>;
    }
    export class $ChunkLevel {
        static fullStatus(arg0: number): $FullChunkStatus;
        static isEntityTicking(arg0: number): boolean;
        static isBlockTicking(arg0: number): boolean;
        static generationStatus(arg0: number): $ChunkStatus;
        static getStatusAroundFullChunk(arg0: number): $ChunkStatus;
        static getStatusAroundFullChunk(arg0: number, arg1: $ChunkStatus_): $ChunkStatus;
        static byStatus(arg0: $ChunkStatus_): number;
        static byStatus(arg0: $FullChunkStatus_): number;
        static isLoaded(arg0: number): boolean;
        static RADIUS_AROUND_FULL_CHUNK: number;
        static ENTITY_TICKING_LEVEL: number;
        static MAX_LEVEL: number;
        static BLOCK_TICKING_LEVEL: number;
        constructor();
    }
    export class $ServerEntity {
        sendPairingData(arg0: $ServerPlayer, arg1: $PacketAndPayloadAcceptor<$ClientGamePacketListener>): void;
        getPositionBase(): $Vec3;
        getLastSentXRot(): number;
        getLastSentYRot(): number;
        getLastSentMovement(): $Vec3;
        sendChanges(): void;
        removePairing(arg0: $ServerPlayer): void;
        addPairing(arg0: $ServerPlayer): void;
        getLastSentYHeadRot(): number;
        static FORCED_POS_UPDATE_PERIOD: number;
        constructor(arg0: $ServerLevel, arg1: $Entity, arg2: number, arg3: boolean, arg4: $Consumer_<$Packet<never>>);
        get positionBase(): $Vec3;
        get lastSentXRot(): number;
        get lastSentYRot(): number;
        get lastSentMovement(): $Vec3;
        get lastSentYHeadRot(): number;
    }
    export class $GeneratingChunkMap {
    }
    export interface $GeneratingChunkMap {
        acquireGeneration(arg0: number): $GenerationChunkHolder;
        releaseGeneration(arg0: $GenerationChunkHolder): void;
        applyStep(arg0: $GenerationChunkHolder, arg1: $ChunkStep_, arg2: $StaticCache2D<$GenerationChunkHolder>): $CompletableFuture<$ChunkAccess>;
        scheduleGenerationTask(arg0: $ChunkStatus_, arg1: $ChunkPos): $ChunkGenerationTask;
        runGenerationTasks(): void;
    }
    export class $ColumnPos extends $Record {
        static asLong(arg0: number, arg1: number): number;
        static getZ(arg0: number): number;
        static getX(arg0: number): number;
        toChunkPos(): $ChunkPos;
        toLong(): number;
        x(): number;
        z(): number;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $ColumnPos}.
     */
    export type $ColumnPos_ = { z?: number, x?: number,  } | [z?: number, x?: number, ];
    export class $ChunkTaskPriorityQueue<T> {
        pop(): $Stream<$Either<T, $Runnable>>;
        hasWork(): boolean;
        static PRIORITY_LEVEL_COUNT: number;
        constructor(arg0: string, arg1: number);
    }
    export class $ChunkGenerationTask {
        getCenter(): $GenerationChunkHolder;
        markForCancellation(): void;
        runUntilWait(): $CompletableFuture<never>;
        static create(arg0: $GeneratingChunkMap, arg1: $ChunkStatus_, arg2: $ChunkPos): $ChunkGenerationTask;
        targetStatus: $ChunkStatus;
        get center(): $GenerationChunkHolder;
    }
    export class $ServerChunkCache$MainThreadExecutor extends $BlockableEventLoop<$Runnable> {
    }
    export class $BlockDestructionProgress implements $Comparable<$BlockDestructionProgress>, $BlockDestructionProgressExtension {
        setProgress(arg0: number): void;
        getPos(): $BlockPos;
        getProgress(): number;
        getUpdatedRenderTick(): number;
        create$setExtraPositions(arg0: $Set_<any>): void;
        create$getExtraPositions(): $Set<any>;
        updateTick(arg0: number): void;
        compareTo(arg0: $BlockDestructionProgress): number;
        getId(): number;
        constructor(arg0: number, arg1: $BlockPos_);
        get pos(): $BlockPos;
        get updatedRenderTick(): number;
        get id(): number;
    }
    export class $TickingTracker extends $ChunkTracker implements $ISimulationDistanceLevelPropagator {
        runAllUpdates(): void;
        getLevel(arg0: $ChunkPos): number;
        replacePlayerTicketsLevel(arg0: number): void;
        getTicketDebugString(arg0: number): string;
        addTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T): void;
        addTicket(arg0: number, arg1: $Ticket<never>): void;
        removeTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T): void;
        removeTicket(arg0: number, arg1: $Ticket<never>): void;
        getLevels(): $Long2ByteMap;
        static SOURCE: number;
        static MAX_LEVEL: number;
        constructor();
        get levels(): $Long2ByteMap;
    }
    export class $ThreadedLevelLightEngine extends $LevelLightEngine implements $AutoCloseable, $IServerLightingProvider {
        updateChunkStatus(arg0: $ChunkPos): void;
        runUpdate(): void;
        waitForPendingTasks(arg0: number, arg1: number): $CompletableFuture<never>;
        tryScheduleUpdate(): void;
        initializeLight(arg0: $ChunkAccess, arg1: boolean): $CompletableFuture<$ChunkAccess>;
        lightChunk(arg0: $ChunkAccess, arg1: boolean): $CompletableFuture<$ChunkAccess>;
        close(): void;
        invokeUpdateChunkStatus(arg0: $ChunkPos): void;
        invokeEnqueue(arg0: number, arg1: number, arg2: $IntSupplier_, arg3: $ThreadedLevelLightEngine$TaskType_, arg4: $Runnable_): void;
        static DEFAULT_BATCH_SIZE: number;
        static LIGHT_SECTION_PADDING: number;
        skyEngine: $LightEngine<never, never>;
        blockEngine: $LightEngine<never, never>;
        constructor(arg0: $LightChunkGetter, arg1: $ChunkMap, arg2: boolean, arg3: $ProcessorMailbox<$Runnable_>, arg4: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable_>>);
    }
    export class $ThreadedLevelLightEngine$TaskType extends $Enum<$ThreadedLevelLightEngine$TaskType> {
        static values(): $ThreadedLevelLightEngine$TaskType[];
        static valueOf(arg0: string): $ThreadedLevelLightEngine$TaskType;
        static PRE_UPDATE: $ThreadedLevelLightEngine$TaskType;
        static POST_UPDATE: $ThreadedLevelLightEngine$TaskType;
    }
    /**
     * Values that may be interpreted as {@link $ThreadedLevelLightEngine$TaskType}.
     */
    export type $ThreadedLevelLightEngine$TaskType_ = "pre_update" | "post_update";
    export class $ChunkTaskPriorityQueueSorter$Release {
    }
    export class $DistanceManager$FixedPlayerDistanceChunkTracker extends $ChunkTracker implements $IChunkTicketManagerDistanceFromNearestPlayerTracker {
        runAllUpdates(): void;
        getMaxDistance(): number;
        static SOURCE: number;
        get maxDistance(): number;
    }
    export class $DistanceManager$PlayerTicketTracker extends $DistanceManager$FixedPlayerDistanceChunkTracker implements $IChunkTicketManagerNearbyChunkTicketUpdater {
        updateViewDistance(arg0: number): void;
        getDistances(): $Long2IntMap;
        static SOURCE: number;
        get distances(): $Long2IntMap;
    }
    export class $DemoMode extends $ServerPlayerGameMode {
        static DEMO_DAYS: number;
        static TOTAL_PLAY_TICKS: number;
        isDestroyingBlock: boolean;
        constructor(arg0: $ServerPlayer);
    }
    export class $ChunkTracker extends $DynamicGraphMinFixedPoint {
        update(arg0: number, arg1: number, arg2: boolean): void;
        static SOURCE: number;
    }
    export class $ChunkResult$Fail<T> extends $Record implements $ChunkResult<T> {
        isSuccess(): boolean;
        ifSuccess(arg0: $Consumer_<T>): $ChunkResult<T>;
        orElseThrow<E extends $Throwable>(arg0: $Supplier_<E>): T;
        error(): $Supplier<string>;
        getError(): string;
        map<R>(arg0: $Function_<T, R>): $ChunkResult<R>;
        orElse(arg0: T): T;
        constructor(arg0: $Supplier_<string>);
        get success(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ChunkResult$Fail}.
     */
    export type $ChunkResult$Fail_<T> = { error?: $Supplier_<string>,  } | [error?: $Supplier_<string>, ];
    export class $ChunkTaskPriorityQueueSorter$Message<T> {
    }
    export class $FullChunkStatus extends $Enum<$FullChunkStatus> {
        isOrAfter(arg0: $FullChunkStatus_): boolean;
        static values(): $FullChunkStatus[];
        static valueOf(arg0: string): $FullChunkStatus;
        static ENTITY_TICKING: $FullChunkStatus;
        static INACCESSIBLE: $FullChunkStatus;
        static FULL: $FullChunkStatus;
        static BLOCK_TICKING: $FullChunkStatus;
    }
    /**
     * Values that may be interpreted as {@link $FullChunkStatus}.
     */
    export type $FullChunkStatus_ = "inaccessible" | "full" | "block_ticking" | "entity_ticking";
    export class $ServerLevel$EntityCallbacks implements $LevelCallback<$Entity> {
        onTickingStart(arg0: $Entity): void;
        onTickingEnd(arg0: $Entity): void;
        onTrackingEnd(arg0: $Entity): void;
        onSectionChange(arg0: $Entity): void;
        onDestroyed(arg0: $Entity): void;
        onTrackingStart(arg0: $Entity): void;
        onCreated(arg0: $Entity): void;
    }
    export class $ClientInformation extends $Record implements $ISyncedClientOptions {
        chatVisibility(): $ChatVisiblity;
        textFilteringEnabled(): boolean;
        allowsListing(): boolean;
        viewDistance(): number;
        chatColors(): boolean;
        modelCustomisation(): number;
        mainHand(): $HumanoidArm;
        language(): string;
        static createDefault(): $ClientInformation;
        write(arg0: $FriendlyByteBuf): void;
        setViewDistance(arg0: number): void;
        static MAX_LANGUAGE_LENGTH: number;
        constructor(arg0: $FriendlyByteBuf);
        constructor(arg0: string, arg1: number, arg2: $ChatVisiblity_, arg3: boolean, arg4: number, arg5: $HumanoidArm_, arg6: boolean, arg7: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ClientInformation}.
     */
    export type $ClientInformation_ = { modelCustomisation?: number, textFilteringEnabled?: boolean, mainHand?: $HumanoidArm_, chatColors?: boolean, chatVisibility?: $ChatVisiblity_, allowsListing?: boolean, language?: string, viewDistance?: number,  } | [modelCustomisation?: number, textFilteringEnabled?: boolean, mainHand?: $HumanoidArm_, chatColors?: boolean, chatVisibility?: $ChatVisiblity_, allowsListing?: boolean, language?: string, viewDistance?: number, ];
    export class $ChunkMap extends $ChunkStorage implements $ChunkHolder$PlayerProvider, $GeneratingChunkMap, $ServerChunkLoadingManagerAccessor, $AccessorMixinChunkMap, $ChunkMapAccessor, $ServerChunkLoadingManagerAccessor$1, $IThreadedAnvilChunkStorage$1, $IThreadedAnvilChunkStorage, $IVanillaChunkManager, $IChunkSystemAccess {
        anyPlayerCloseEnoughForSpawning(arg0: $ChunkPos): boolean;
        getTickingGenerated(): number;
        getStorageName(): string;
        c2me$runOneChunkAutoSave(): boolean;
        c2me$getTheChunkSystem(): $TheChunkSystem;
        getDistanceManager(): $DistanceManager;
        getPlayers(arg0: $ChunkPos, arg1: boolean): $List<$ServerPlayer>;
        move(arg0: $ServerPlayer): void;
        getChunks(): $Iterable<$ChunkHolder>;
        broadcast(arg0: $Entity, arg1: $Packet<never>): void;
        getChunkDebugData(arg0: $ChunkPos): string;
        getVisibleChunkIfPresent(pos: number): $ChunkHolder;
        getUpdatingChunkIfPresent(pos: number): $ChunkHolder;
        debugFuturesAndCreateReportedException(arg0: $IllegalStateException, arg1: string): $ReportedException;
        prepareEntityTickingChunk(arg0: $ChunkHolder): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        saveChunkIfNeeded(arg0: $ChunkHolder): boolean;
        scheduleUnload(arg0: number, arg1: $ChunkHolder): void;
        acquireGeneration(arg0: number): $GenerationChunkHolder;
        releaseGeneration(arg0: $GenerationChunkHolder): void;
        applyStep(arg0: $GenerationChunkHolder, arg1: $ChunkStep_, arg2: $StaticCache2D<$GenerationChunkHolder>): $CompletableFuture<$ChunkAccess>;
        scheduleGenerationTask(arg0: $ChunkStatus_, arg1: $ChunkPos): $ChunkGenerationTask;
        runGenerationTasks(): void;
        prepareTickingChunk(arg0: $ChunkHolder): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        prepareAccessibleChunk(arg0: $ChunkHolder): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        getChunkToSend(arg0: number): $LevelChunk;
        getPlayersCloseForSpawning(arg0: $ChunkPos): $List<$ServerPlayer>;
        resendBiomesForChunks(arg0: $List_<$ChunkAccess>): void;
        waitForLightBeforeSending(arg0: $ChunkPos, arg1: number): void;
        scheduleOnMainThreadMailbox(arg0: $ChunkTaskPriorityQueueSorter$Message<$Runnable_>): void;
        c2me$getSchedulingManager(): $SchedulingManager;
        updateChunkScheduling(pos: number, level: number, holder: $ChunkHolder, i: number): $ChunkHolder;
        onFullChunkStatusChange(arg0: $ChunkPos, arg1: $FullChunkStatus_): void;
        getPlayersWatching(arg0: $Entity): $List<$ServerPlayer>;
        hasWork(): boolean;
        size(): number;
        accessories$getEntityMap(): $Int2ObjectMap<$EntityTrackerAccessor>;
        lootr$getChunks(): $Iterable<$ChunkHolder>;
        getEntityMap(): $Int2ObjectMap<never>;
        invokeUpdateHolderMap(): boolean;
        invokeSave(arg0: $ChunkAccess): boolean;
        getMainThreadExecutor(): $BlockableEventLoop<$Runnable>;
        getLightingProvider(): $ThreadedLevelLightEngine;
        invokeSendToPlayers(arg0: $LevelChunk): void;
        getWorldGenerationProgressListener(): $ChunkProgressListener;
        getTotalChunksLoadedCount(): $AtomicInteger;
        invokeGetChunkHolder(arg0: number): $ChunkHolder;
        invokeOnChunkStatusChange(arg0: $ChunkPos, arg1: $FullChunkStatus_): void;
        getChunkToNextSaveTimeMs(): $Long2LongMap;
        getCurrentChunkHolders(): $Long2ObjectLinkedOpenHashMap<$ChunkHolder>;
        setChunkHolderListDirty(arg0: boolean): void;
        invokeGetUpdatedChunkNbt(arg0: $ChunkPos): $CompletableFuture<($CompoundTag) | undefined>;
        getPointOfInterestStorage(): $PoiManager;
        getGenerationContext(): $WorldGenContext;
        getWorld(): $ServerLevel;
        entityMap: $Int2ObjectMap<$ChunkMap$TrackedEntity>;
        toDrop: $LongSet;
        level: $ServerLevel;
        updatingChunkMap: $Long2ObjectLinkedOpenHashMap<$ChunkHolder>;
        static MAX_VIEW_DISTANCE: number;
        static LAST_MONOLYTH_STRUCTURE_DATA_VERSION: number;
        pendingUnloads: $Long2ObjectLinkedOpenHashMap<$ChunkHolder>;
        unloadQueue: $Queue<$Runnable>;
        static MIN_VIEW_DISTANCE: number;
        visibleChunkMap: $Long2ObjectLinkedOpenHashMap<$ChunkHolder>;
        modified: boolean;
        static FORCED_TICKET_LEVEL: number;
        chunkSaveCooldowns: $Long2LongMap;
        constructor(arg0: $ServerLevel, arg1: $LevelStorageSource$LevelStorageAccess, arg2: $DataFixer, arg3: $StructureTemplateManager, arg4: $Executor_, arg5: $BlockableEventLoop<$Runnable_>, arg6: $LightChunkGetter, arg7: $ChunkGenerator, arg8: $ChunkProgressListener, arg9: $ChunkStatusUpdateListener_, arg10: $Supplier_<$DimensionDataStorage>, arg11: number, arg12: boolean);
        get tickingGenerated(): number;
        get storageName(): string;
        get distanceManager(): $DistanceManager;
        get chunks(): $Iterable<$ChunkHolder>;
        get mainThreadExecutor(): $BlockableEventLoop<$Runnable>;
        get lightingProvider(): $ThreadedLevelLightEngine;
        get worldGenerationProgressListener(): $ChunkProgressListener;
        get totalChunksLoadedCount(): $AtomicInteger;
        get chunkToNextSaveTimeMs(): $Long2LongMap;
        get currentChunkHolders(): $Long2ObjectLinkedOpenHashMap<$ChunkHolder>;
        set chunkHolderListDirty(value: boolean);
        get pointOfInterestStorage(): $PoiManager;
        get generationContext(): $WorldGenContext;
        get world(): $ServerLevel;
    }
    export class $ServerPlayerGameMode {
        useItemOn(arg0: $ServerPlayer, arg1: $Level_, arg2: $ItemStack_, arg3: $InteractionHand_, arg4: $BlockHitResult): $InteractionResult;
        useItem(arg0: $ServerPlayer, arg1: $Level_, arg2: $ItemStack_, arg3: $InteractionHand_): $InteractionResult;
        isCreative(): boolean;
        destroyBlock(arg0: $BlockPos_): boolean;
        destroyAndAck(arg0: $BlockPos_, arg1: number, arg2: string): void;
        getGameModeForPlayer(): $GameType;
        getPreviousGameModeForPlayer(): $GameType;
        changeGameModeForPlayer(arg0: $GameType_): boolean;
        isSurvival(): boolean;
        setLevel(arg0: $ServerLevel): void;
        tick(): void;
        handleBlockBreakAction(arg0: $BlockPos_, arg1: $ServerboundPlayerActionPacket$Action_, arg2: $Direction_, arg3: number, arg4: number): void;
        isDestroyingBlock: boolean;
        constructor(arg0: $ServerPlayer);
        get creative(): boolean;
        get gameModeForPlayer(): $GameType;
        get previousGameModeForPlayer(): $GameType;
        get survival(): boolean;
        set level(value: $ServerLevel);
    }
    export class $ChunkMap$DistanceManager extends $DistanceManager implements $ITACSTicketManager, $IThreadedAnvilChunkStorageTicketManager {
        c2me$getSuperClass(): $ChunkMap;
        getField_17443(): $ChunkMap;
        get field_17443(): $ChunkMap;
    }
    export class $ServerPlayer$RespawnPosAngle extends $Record {
        yaw(): number;
        position(): $Vec3;
        static of(arg0: $Vec3_, arg1: $BlockPos_): $ServerPlayer$RespawnPosAngle;
        constructor(position: $Vec3_, yaw: number);
    }
    /**
     * Values that may be interpreted as {@link $ServerPlayer$RespawnPosAngle}.
     */
    export type $ServerPlayer$RespawnPosAngle_ = { position?: $Vec3_, yaw?: number,  } | [position?: $Vec3_, yaw?: number, ];
    export class $DistanceManager implements $IChunkTicketManager, $ChunkTicketManagerExtension {
        addRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T, arg4: boolean): void;
        addRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T): void;
        addPlayer(arg0: $SectionPos, arg1: $ServerPlayer): void;
        removePlayer(arg0: $SectionPos, arg1: $ServerPlayer): void;
        runAllUpdates(arg0: $ChunkMap): boolean;
        removeTicketsOnClosing(): void;
        c2me$closeNoTickVD(): void;
        inBlockTickingRange(arg0: number): boolean;
        removeRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T, arg4: boolean): void;
        removeRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T): void;
        getNaturalSpawnChunkCount(): number;
        getDebugStatus(): string;
        inEntityTickingRange(arg0: number): boolean;
        updateSimulationDistance(arg0: number): void;
        handler$hka000$c2me_notickvd$mapSimulationDistance(simulationDistance: number, ci: $CallbackInfo): void;
        c2me$getPendingLoadsCount(): number;
        updatePlayerTickets(viewDistance: number): void;
        hasPlayersNearby(arg0: number): boolean;
        shouldForceTicks(arg0: number): boolean;
        addTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T): void;
        removeTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T): void;
        hasTickets(): boolean;
        invokeSetWatchDistance(arg0: number): void;
        getPlayersByChunkPos(): $Long2ObjectMap<$ObjectSet<$ServerPlayer>>;
        getTicketsByPosition(): $Long2ObjectOpenHashMap<$SortedArraySet<$Ticket<never>>>;
        getNearbyChunkTicketUpdater(): $DistanceManager$PlayerTicketTracker;
        getSimulationDistanceTracker(): $TickingTracker;
        get naturalSpawnChunkCount(): number;
        get debugStatus(): string;
        get playersByChunkPos(): $Long2ObjectMap<$ObjectSet<$ServerPlayer>>;
        get ticketsByPosition(): $Long2ObjectOpenHashMap<$SortedArraySet<$Ticket<never>>>;
        get nearbyChunkTicketUpdater(): $DistanceManager$PlayerTicketTracker;
        get simulationDistanceTracker(): $TickingTracker;
    }
    export class $ServerPlayer extends $Player implements $IQuiverPlayer, $ServerPlayerAccessor, $IServerPlayer, $FactoryExtraMenuSupplier$PrepareMenu, $IServerPlayer$2, $IServerPlayer$1, $ServerPlayerAccessor$1, $ServerPlayerKJS, $IPlayer, $PlayerFreezeExtension, $ServerPlayerRespawnExtension, $ServerPlayerPossessionAccess {
        sendChatMessage(arg0: $OutgoingChatMessage, arg1: boolean, arg2: $ChatType$Bound_): void;
        updateOptions(arg0: $ClientInformation_): void;
        getAdvancements(): $PlayerAdvancements;
        lookAt(arg0: $EntityAnchorArgument$Anchor_, arg1: $Entity, arg2: $EntityAnchorArgument$Anchor_): void;
        doCloseContainer(): void;
        teleportTo(arg0: $ServerLevel, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        serverLevel(): $ServerLevel;
        sendSystemMessage(arg0: $Component_, arg1: boolean): void;
        onInsideBlock(arg0: $BlockState_): void;
        restoreFrom(arg0: $ServerPlayer, arg1: boolean): void;
        getStatsCounter(): $ServerStatsCounter;
        getRecipeBook(): $ServerRecipeBook;
        supplementaries$getQuiverSlot(): $SlotReference;
        supplementaries$setQuiverSlot(slot: $SlotReference): void;
        xaerolib_getData(): $ServerPlayerData;
        xaerolib_setData(arg0: $ServerPlayerData): void;
        getRespawnPosition(): $BlockPos;
        isChangingDimension(): boolean;
        requestedViewDistance(): number;
        allowsListing(): boolean;
        setExperiencePoints(arg0: number): void;
        setExperienceLevels(arg0: number): void;
        initMenu(arg0: $AbstractContainerMenu): void;
        initInventoryMenu(): void;
        handler$jmf00c$simplyswords$tick(ci: $CallbackInfo): void;
        handler$kmf010$sable$tick(arg0: $CallbackInfo): void;
        trackStartFallingPosition(): void;
        trackEnteredOrExitedLavaOnVehicle(): void;
        doTick(): void;
        handler$jmf000$simplyswords$damage(source: $DamageSource_, amount: number, cir: $CallbackInfoReturnable<any>): void;
        findRespawnPositionAndUseSpawnBlock(arg0: boolean, arg1: $DimensionTransition$PostDimensionTransition_): $DimensionTransition;
        getRespawnAngle(): number;
        isRespawnForced(): boolean;
        getRespawnDimension(): $ResourceKey<$Level>;
        static findRespawnAndUseSpawnBlock(arg0: $ServerLevel, arg1: $BlockPos_, arg2: number, arg3: boolean, arg4: boolean): ($ServerPlayer$RespawnPosAngle) | undefined;
        showEndCredits(): void;
        createCommonSpawnInfo(arg0: $ServerLevel): $CommonPlayerSpawnInfo;
        setServerLevel(arg0: $ServerLevel): void;
        triggerDimensionChangeTriggers(arg0: $ServerLevel): void;
        handler$hbf000$glitchcore$onChangeDimension(arg0: $DimensionTransition_, arg1: $CallbackInfoReturnable<any>): void;
        doCheckFallDamage(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        nextContainerCounter(): void;
        setPlayerInput(arg0: number, arg1: number, arg2: boolean, arg3: boolean): void;
        checkMovementStatistics(arg0: number, arg1: number, arg2: number): void;
        checkRidingStatistics(arg0: number, arg1: number, arg2: number): void;
        handler$bld000$tombstone$methodGiveExperiencePoints(arg0: number, arg1: $CallbackInfo): void;
        hasDisconnected(): boolean;
        resetSentInfo(): void;
        wrapMethod$kog000$sable$teleportTo(arg0: $ServerLevel, arg1: number, arg2: number, arg3: number, arg4: $Set_<any>, arg5: number, arg6: number, arg7: $Operation_<any>): boolean;
        /**
         * Changes the player's gamemode.
         * 
         * @param gameMode One of: `'survival'`, `'creative'`, `'adventure'`, `'spectator'`.
         */
        setGameMode(arg0: $GameType_): boolean;
        getIpAddress(): string;
        clientInformation(): $ClientInformation;
        canChatInColor(): boolean;
        getChatVisibility(): $ChatVisiblity;
        sendServerStatus(arg0: $ServerStatus_): void;
        resetLastActionTime(): void;
        handler$jmf001$simplyswords$attack(target: $Entity, ci: $CallbackInfo): void;
        getLastActionTime(): number;
        getTabListDisplayName(): $Component;
        hasChangedDimension(): void;
        setRespawnPosition(arg0: $ResourceKey_<$Level>, arg1: $BlockPos_, arg2: number, arg3: boolean, arg4: boolean): void;
        getLastSectionPos(): $SectionPos;
        setLastSectionPos(arg0: $SectionPos): void;
        getChunkTrackingView(): $ChunkTrackingView;
        setChunkTrackingView(arg0: $ChunkTrackingView): void;
        getTabListHeader(): $Component;
        setTabListHeader(arg0: $Component_): void;
        setTabListHeaderFooter(arg0: $Component_, arg1: $Component_): void;
        getTabListFooter(): $Component;
        setTabListFooter(arg0: $Component_): void;
        refreshTabListName(): void;
        getTextFilter(): $TextFilter;
        loadGameTypes(arg0: $CompoundTag_): void;
        shouldFilterMessageTo(arg0: $ServerPlayer): boolean;
        handler$mea000$ae2wtlib$restockDrop(arg0: boolean, arg1: $CallbackInfoReturnable<any>, arg2: $ItemStack_): void;
        setSpawnExtraParticlesOnFall(arg0: boolean): void;
        setChatSession(arg0: $RemoteChatSession_): void;
        getChatSession(): $RemoteChatSession;
        setKnownMovement(arg0: $Vec3_): void;
        setRaidOmenPosition(arg0: $BlockPos_): void;
        clearRaidOmenPosition(): void;
        getRaidOmenPosition(): $BlockPos;
        prepareMenu(provider: $MenuProvider, openClientMenu: $Consumer_<any>): $Optional<any>;
        getXaeroMinimapPlayerData(): $ServerPlayerData$1;
        setXaeroMinimapPlayerData(arg0: $ServerPlayerData$1): void;
        getXaeroWorldMapPlayerData(): $ServerPlayerData$2;
        setXaeroWorldMapPlayerData(arg0: $ServerPlayerData$2): void;
        mobControl$ticks(): number;
        mobControl$updateDays(arg0: number, arg1: boolean): void;
        sable$getRespawnPoint(): $UUID;
        copyRespawnPosition(arg0: $ServerPlayer): void;
        sable$takeQueuedFreezeFrom(arg0: $ServerPlayer): void;
        sable$getQueuedFreeze(): $Pair<any, any>;
        railways$getPossessedConductor(): $ConductorEntity;
        railways$setPossessedConductor(arg0: $ConductorEntity): void;
        drop(arg0: boolean): boolean;
        getLanguage(): string;
        disconnect(): void;
        /**
         * Kicks the player from the server with the provided reason.
         * 
         * @param reason A text component, containing the kick reason. It may be a string, which will be implicitly wrapped into a text component.
         */
        kick(reason: $Component_): void;
        /**
         * Kicks the player from the server with a generic reason.
         */
        kick(): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number, rows: number): void;
        openChestGUI(title: $Component_, rows: number, gui: $Consumer_<$ChestMenuData>): void;
        openChestGUI(gui: $Consumer_<$KubeJSGUI>): void;
        captureInventory(autoRestore: boolean): $Container;
        /**
         * Switches the player's gamemode between Creative and Survival.
         * To change the player's gamemode to a mode other than Creative or Survival, use `setGameMode`.
         * 
         * @param mode `true` to change the player's gamemode to Creative.
         * `false` to change the player's gamemode to Survival.
         */
        setCreativeMode(mode: boolean): void;
        /**
         * Checks, whether the player is a server operator.
         */
        isOp(): boolean;
        /**
         * Bans the player from the server.
         * 
         * @param banner A string, that specifies who/what banned the player.
         * @param reason A string, that contains the ban reason.
         * @param banDuration Duration of a ban. Negative durations will result in a 10-year ban.
         */
        ban(banner: string, reason: string, banDuration: $Duration_): void;
        isAdvancementDone(id: $ResourceLocation_): boolean;
        unlockAdvancement(id: $ResourceLocation_): void;
        revokeAdvancement(id: $ResourceLocation_): void;
        getSpawnLocation(): $LevelBlock;
        setSpawnLocation(c: $LevelBlock): void;
        /**
         * Heals the player to full, and fully restores hunger and saturation.
         */
        heal(): void;
        getCamera(): $Entity;
        setCamera(arg0: $Entity): void;
        bumblezone$setStartingToFallPosition(arg0: $Vec3_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $Player;
        lastHurtByPlayerTime: number;
        static DEFAULT_BASE_GRAVITY: number;
        xRot: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        yHeadRot: number;
        yCloakO: number;
        noPhysics: boolean;
        yo: number;
        connection: $ServerGamePacketListenerImpl;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        swingingArm: $InteractionHand;
        static CRAFTING_SLOT_OFFSET: number;
        static INTERACTION_DISTANCE_VERIFICATION_BUFFER: number;
        static ID_TAG: string;
        static WAKE_UP_DURATION: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        icarus$flightStamina: number;
        wonGame: boolean;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        gameMode: $ServerPlayerGameMode;
        object: $Object;
        static STANDING_DIMENSIONS: $EntityDimensions;
        yya: number;
        server: $MinecraftServer;
        oAttackAnim: number;
        yHeadRotO: number;
        containerCounter: number;
        static UUID_TAG: string;
        static DEFAULT_MODEL_CUSTOMIZATION: number;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        static SWIMMING_BB_HEIGHT: number;
        static DEFAULT_ENTITY_INTERACTION_RANGE: number;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        experienceLevel: number;
        static DEFAULT_BABY_SCALE: number;
        static ATTRIBUTES_FIELD: string;
        static PERSISTED_NBT_TAG: string;
        static DEFAULT_BB_HEIGHT: number;
        seenCredits: boolean;
        xxa: number;
        zCloak: number;
        lastSentFood: number;
        lastSentHealth: number;
        flyDist: number;
        currentImpulseImpactPos: $Vec3;
        static PASSENGERS_TAG: string;
        xCloakO: number;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        timeOffs: number;
        wasTouchingWater: boolean;
        activeEffects: $Map<$Holder<$MobEffect>, $MobEffectInstance>;
        rotA: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        static ENDER_SLOT_OFFSET: number;
        static ARMOR_SLOT_OFFSET: number;
        static SLEEP_DURATION: number;
        static HELD_ITEM_SLOT: number;
        yCloak: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        xCloak: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        lastHurtByPlayer: $Player;
        asbTickCount: number;
        static BOARDING_COOLDOWN: number;
        static MAX_HEALTH: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        static DEFAULT_EYE_HEIGHT: number;
        level: $Level;
        yRot: number;
        static CROUCH_BB_HEIGHT: number;
        moveDist: number;
        enchantmentSeed: number;
        zCloakO: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        bob: number;
        experienceProgress: number;
        create_diesel_generators$turretPos: $BlockPos;
        totalExperience: number;
        lastSentExp: number;
        xOld: number;
        wasInPowderSnow: boolean;
        containerMenu: $AbstractContainerMenu;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        static DEFAULT_MAIN_HAND: $HumanoidArm;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DEFAULT_VEHICLE_ATTACHMENT: $Vec3;
        inventoryMenu: $InventoryMenu;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        lastDamageStamp: number;
        levelCallback: $EntityInLevelCallback;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        fishing: $FishingHook;
        removeArrowTime: number;
        walkDistO: number;
        static SWIMMING_BB_WIDTH: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        blocksBuilding: boolean;
        takeXpDelay: number;
        static DEFAULT_BLOCK_INTERACTION_RANGE: number;
        oBob: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        currentExplosionCause: $Entity;
        constructor(arg0: $MinecraftServer, arg1: $ServerLevel, arg2: $GameProfile, arg3: $ClientInformation_);
        get advancements(): $PlayerAdvancements;
        get statsCounter(): $ServerStatsCounter;
        get recipeBook(): $ServerRecipeBook;
        get changingDimension(): boolean;
        set experiencePoints(value: number);
        set experienceLevels(value: number);
        get respawnAngle(): number;
        get respawnForced(): boolean;
        get respawnDimension(): $ResourceKey<$Level>;
        get ipAddress(): string;
        get chatVisibility(): $ChatVisiblity;
        get lastActionTime(): number;
        get tabListDisplayName(): $Component;
        get textFilter(): $TextFilter;
        set spawnExtraParticlesOnFall(value: boolean);
        set knownMovement(value: $Vec3_);
        get language(): string;
        set creativeMode(value: boolean);
        get op(): boolean;
    }
    export class $ChunkTaskPriorityQueueSorter implements $ChunkHolder$LevelChangeListener, $AutoCloseable {
        getDebugStatus(): string;
        getReleaseProcessor(arg0: $ProcessorHandle<$Runnable_>): $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Release>;
        onLevelChange(arg0: $ChunkPos, arg1: $IntSupplier_, arg2: number, arg3: $IntConsumer_): void;
        static release(arg0: $Runnable_, arg1: number, arg2: boolean): $ChunkTaskPriorityQueueSorter$Release;
        hasWork(): boolean;
        getProcessor<T>(arg0: $ProcessorHandle<T>, arg1: boolean): $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<T>>;
        static message<T>(arg0: $Function_<$ProcessorHandle<$Unit>, T>, arg1: number, arg2: $IntSupplier_): $ChunkTaskPriorityQueueSorter$Message<T>;
        static message(arg0: $GenerationChunkHolder, arg1: $Runnable_): $ChunkTaskPriorityQueueSorter$Message<$Runnable>;
        static message(arg0: $Runnable_, arg1: number, arg2: $IntSupplier_): $ChunkTaskPriorityQueueSorter$Message<$Runnable>;
        static message<T>(arg0: $GenerationChunkHolder, arg1: $Function_<$ProcessorHandle<$Unit>, T>): $ChunkTaskPriorityQueueSorter$Message<T>;
        close(): void;
        constructor(arg0: $List_<$ProcessorHandle<never>>, arg1: $Executor_, arg2: number);
        get debugStatus(): string;
    }
    export class $ServerLevel extends $Level implements $WorldGenLevel, $IServerLevel, $ILevelEventRedirect, $ServerWorldExtended, $ServerLevelAccessor, $ServerLevelAccessor$1, $ServerLevelAccessor$2, $ServerWorldCache, $Tickable$Level, $IStateCacheProvider, $ServerLevelAccessor$4, $IWorldMapServerLevel, $AttachmentTargetImpl, $ServerLevelKJS, $ServerLevelAccessor$3, $ServerLevelSceneExtension, $SubLevelContainerHolder, $WaterOcclusionContainerHolder, $BlueprintServerLevel, $MagnetWorldInterface {
        getLevelData(arg0: number): $Object;
        getChunkSource(): $ServerChunkCache;
        sable$getPlotContainer(): $SubLevelContainer;
        sendParticles<T extends $ParticleOptions>(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): number;
        sendParticles(arg0: $ServerPlayer, arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: $Packet<never>): boolean;
        sendParticles<T extends $ParticleOptions>(arg0: $ServerPlayer, arg1: T, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): boolean;
        getScoreboard(): $ServerScoreboard;
        updateSleepingPlayerList(): void;
        addWithUUID(arg0: $Entity): boolean;
        structureManager(): $StructureManager;
        getStateCache(): $stateCache;
        getPersistentData(): $CompoundTag;
        addDuringTeleport(arg0: $Entity): void;
        resetEmptyTime(): void;
        getRaids(): $Raids;
        getFluidTicks(): $LevelTicks<$Fluid>;
        setDefaultSpawnPos(arg0: $BlockPos_, arg1: number): void;
        setDayTime(arg0: number): void;
        tickNonPassenger(arg0: $Entity): void;
        sable$getWaterOcclusionContainer(): $WaterOcclusionContainer<any>;
        isFlat(): boolean;
        removePlayerImmediately(arg0: $ServerPlayer, arg1: $Entity$RemovalReason_): void;
        canSleepThroughNights(): boolean;
        getStructureManager(): $StructureTemplateManager;
        getDataStorage(): $DimensionDataStorage;
        /**
         * @deprecated
         */
        setDragonFight(arg0: $EndDragonFight): void;
        setWeatherParameters(arg0: number, arg1: number, arg2: boolean, arg3: boolean): void;
        resetWeatherCycle(): void;
        tickCustomSpawners(arg0: boolean, arg1: boolean): void;
        tickChunk(arg0: $LevelChunk, arg1: number): void;
        tickPrecipitation(arg0: $BlockPos_): void;
        getPoiManager(): $PoiManager;
        isHandlingTick(): boolean;
        handler$kpg000$sable$saveSubLevels(arg0: $ProgressListener, arg1: boolean, arg2: boolean, arg3: $CallbackInfo): void;
        getDragons(): $List<$EnderDragon>;
        getPlayers(arg0: $Predicate_<$ServerPlayer>, arg1: number): $List<$ServerPlayer>;
        getPlayers(arg0: $Predicate_<$ServerPlayer>): $List<$ServerPlayer>;
        getRandomPlayer(): $ServerPlayer;
        handler$kmk000$sable$kickEntity(arg0: $Entity, arg1: $CallbackInfoReturnable<any>): void;
        addNewPlayer(arg0: $ServerPlayer): void;
        addRespawnedPlayer(arg0: $ServerPlayer): void;
        handler$hbc000$glitchcore$onAddPlayer(arg0: $ServerPlayer, arg1: $CallbackInfo): void;
        tryAddFreshEntityWithPassengers(arg0: $Entity): boolean;
        getLogicalHeight(): number;
        handler$hfl000$immersiveengineering$wireBlockCallback(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockState_, arg3: number, arg4: $CallbackInfo): void;
        wrapMethod$koj000$sable$preExplode(arg0: $Entity, arg1: $DamageSource_, arg2: $ExplosionDamageCalculator, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: $Level$ExplosionInteraction_, arg9: $ParticleOptions_, arg10: $ParticleOptions_, arg11: $Holder_<any>, arg12: $Operation_<any>): $Explosion;
        getPortalForcer(): $PortalForcer;
        /**
         * @deprecated
         */
        getEntityOrPart(arg0: number): $Entity;
        findNearestMapStructure(arg0: $TagKey_<$Structure>, arg1: $BlockPos_, arg2: number, arg3: boolean): $BlockPos;
        findClosestBiome3d(arg0: $Predicate_<$Holder<$Biome>>, arg1: $BlockPos_, arg2: number, arg3: number, arg4: number): $Pair$1<$BlockPos, $Holder<$Biome>>;
        getForcedChunks(): $LongSet;
        setChunkForced(arg0: number, arg1: number, arg2: boolean): boolean;
        isVillage(arg0: $BlockPos_): boolean;
        isVillage(arg0: $SectionPos): boolean;
        isCloseToVillage(arg0: $BlockPos_, arg1: number): boolean;
        sectionsToVillage(arg0: $SectionPos): number;
        getRaidAt(arg0: $BlockPos_): $Raid;
        isRaided(arg0: $BlockPos_): boolean;
        onReputationEvent(arg0: $ReputationEventType, arg1: $Entity, arg2: $ReputationEventHandler_): void;
        saveDebugReport(arg0: $Path_): void;
        clearBlockEvents(arg0: $BoundingBox): void;
        getAllEntities(): $Iterable<$Entity>;
        getDragonFight(): $EndDragonFight;
        getWatchdogStats(): string;
        addLegacyChunkEntities(arg0: $Stream<$Entity>): void;
        addWorldGenChunkEntities(arg0: $Stream<$Entity>): void;
        startTickingChunk(arg0: $LevelChunk): void;
        onStructureStartsAvailable(arg0: $ChunkAccess): void;
        getPathTypeCache(): $PathTypeCache;
        areEntitiesLoaded(arg0: number): boolean;
        isPositionEntityTicking(arg0: $BlockPos_): boolean;
        isNaturalSpawningAllowed(arg0: $ChunkPos): boolean;
        isNaturalSpawningAllowed(arg0: $BlockPos_): boolean;
        getRandomSequence(arg0: $ResourceLocation_): $RandomSource;
        getRandomSequences(): $RandomSequences;
        registerCapabilityListener(arg0: $BlockPos_, arg1: $ICapabilityInvalidationListener_): void;
        cleanCapabilityListenerReferences(): void;
        servercore$resetIceAndSnowTick(): void;
        supp$setRedirected(redirected: boolean, id: $Vec3_): void;
        lithium$setNavigationActive(arg0: $Mob): void;
        lithium$setNavigationInactive(arg0: $Mob): void;
        areEntityNavigationsConsistent(): boolean;
        fabric_registerCache(arg0: $BlockPos_, arg1: $BlockApiCacheImpl<any, any>): void;
        fabric_invalidateCache(arg0: $BlockPos_): void;
        getXaero_wm_capabilities(): $ServerWorldCapabilities;
        setXaero_wm_capabilities(arg0: $ServerWorldCapabilities): void;
        sable$getSceneID(): number;
        sable$setSceneID(arg0: number): void;
        getTracker(): $IMagnetTracker;
        getLevel(): $ServerLevel;
        getEntities<T extends $Entity>(arg0: $EntityTypeTest<$Entity, T>, arg1: $Predicate_<T>, arg2: $List_<T>): void;
        getEntities<T extends $Entity>(arg0: $EntityTypeTest<$Entity, T>, arg1: $Predicate_<T>, arg2: $List_<T>, arg3: number): void;
        getEntities<T extends $Entity>(arg0: $EntityTypeTest<$Entity, T>, arg1: $Predicate_<T>): $List<T>;
        tick(arg0: $BooleanSupplier_): void;
        getSeed(): number;
        unload(arg0: $LevelChunk): void;
        save(arg0: $ProgressListener, arg1: boolean, arg2: boolean): void;
        ensureCanWrite(arg0: $BlockPos_): boolean;
        setCurrentlyGenerating(arg0: $Supplier_<string>): void;
        self(): $EntityGetter;
        addFreshEntityWithPassengers(arg0: $Entity): void;
        getChunk(arg0: number, arg1: number): $ChunkAccess;
        getEntityManager(): $PersistentEntitySectionManager<$Entity>;
        aether$getServerLevelData(): $ServerLevelData;
        aether$setServerLevelData(arg0: $ServerLevelData): void;
        create$getEntityTickList(): $EntityTickList;
        restoringBlockSnapshots: boolean;
        /**
         * @deprecated
         */
        threadSafeRandom: $RandomSource;
        static LONG_PARTICLE_CLIP_RANGE: number;
        static RAIN_DELAY: $IntProvider;
        xaero_wm_capabilities: $ServerWorldCapabilities;
        customSpawners: $List<$CustomSpawner>;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        static MAX_BRIGHTNESS: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        rainLevel: number;
        oThunderLevel: number;
        static THUNDER_DURATION: $IntProvider;
        serverLevelData: $ServerLevelData;
        static RAIN_DURATION: $IntProvider;
        static ATTACHMENTS_NBT_KEY: string;
        thread: $Thread;
        entityManager: $PersistentEntitySectionManager<$Entity>;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        oRainLevel: number;
        static END_SPAWN_POINT: $BlockPos;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        captureBlockSnapshots: boolean;
        constructor(arg0: $MinecraftServer, arg1: $Executor_, arg2: $LevelStorageSource$LevelStorageAccess, arg3: $ServerLevelData, arg4: $ResourceKey_<$Level>, arg5: $LevelStem_, arg6: $ChunkProgressListener, arg7: boolean, arg8: number, arg9: $List_<$CustomSpawner_>, arg10: boolean, arg11: $RandomSequences);
        get chunkSource(): $ServerChunkCache;
        get scoreboard(): $ServerScoreboard;
        get stateCache(): $stateCache;
        get persistentData(): $CompoundTag;
        get raids(): $Raids;
        get fluidTicks(): $LevelTicks<$Fluid>;
        get flat(): boolean;
        get dataStorage(): $DimensionDataStorage;
        get poiManager(): $PoiManager;
        get handlingTick(): boolean;
        get dragons(): $List<$EnderDragon>;
        get randomPlayer(): $ServerPlayer;
        get logicalHeight(): number;
        get portalForcer(): $PortalForcer;
        get forcedChunks(): $LongSet;
        get allEntities(): $Iterable<$Entity>;
        get watchdogStats(): string;
        get pathTypeCache(): $PathTypeCache;
        get randomSequences(): $RandomSequences;
        get tracker(): $IMagnetTracker;
        get level(): $ServerLevel;
        get seed(): number;
        set currentlyGenerating(value: $Supplier_<string>);
    }
    export class $SectionTracker extends $DynamicGraphMinFixedPoint {
        update(arg0: number, arg1: number, arg2: boolean): void;
        static SOURCE: number;
    }
    export class $ChunkMap$TrackedEntity implements $EntityTrackerAccessor, $ChunkMapAccessor$TrackedEntityAccessor, $EntityTrackerAccessor$1 {
        broadcastAndSend(arg0: $Packet<never>): void;
        removePlayer(arg0: $ServerPlayer): void;
        updatePlayer(arg0: $ServerPlayer): void;
        localvar$jcm000$railways$securitycraft$modifyFlag(arg0: boolean): boolean;
        broadcast(arg0: $Packet<never>): void;
        updatePlayers(arg0: $List_<$ServerPlayer>): void;
        broadcastRemoved(): void;
        getPlayersTracking(): $Set<$ServerPlayerConnection>;
        getSeenBy(): $Set<$ServerPlayerConnection>;
        accessories$getSeenBy(): $Set<$ServerPlayerConnection>;
        entity: $Entity;
        seenBy: $Set<$ServerPlayerConnection>;
        constructor(arg0: $ChunkMap, arg1: $Entity, arg2: number, arg3: number, arg4: boolean);
        get playersTracking(): $Set<$ServerPlayerConnection>;
    }
    export class $DistanceManager$ChunkTicketTracker extends $ChunkTracker implements $TicketDistanceLevelPropagatorExtension {
        getLevel(id: number): number;
        runDistanceUpdates(arg0: number): number;
        c2me$getTicketLevelUpdates(): $Long2IntLinkedOpenHashMap;
        static SOURCE: number;
        constructor(arg0: $DistanceManager);
    }
}
