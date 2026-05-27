import { $DynamicOps } from "@package/com/mojang/serialization";
import { $RecipeManager } from "@package/net/minecraft/world/item/crafting";
import { $Either, $Pair } from "@package/com/mojang/datafixers/util";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CompletableFuture, $Executor_ } from "@package/java/util/concurrent";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $CloseableResourceManager, $ResourceManager, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener, $SimpleJsonResourceReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $WeakReference } from "@package/java/lang/ref";
import { $ModCheck, $SignatureValidator } from "@package/net/minecraft/util";
import { $AdvancementHolder, $AdvancementProgress, $AdvancementNode, $AdvancementHolder_, $AdvancementTree } from "@package/net/minecraft/advancements";
import { $Difficulty_, $TickRateManager } from "@package/net/minecraft/world";
import { $SystemReport, $CrashReport } from "@package/net/minecraft";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $MinecraftServerData as $MinecraftServerData$1, $IMinecraftServer } from "@package/xaero/map/server";
import { $ScheduledEvents$Callback_, $ScheduledEvents$ScheduledEvent, $ScheduledEvents, $TickDuration_, $AttachedData } from "@package/dev/latvian/mods/kubejs/util";
import { $Proxy, $URI } from "@package/java/net";
import { $GameProfileRepository_, $GameProfileRepository, $GameProfile } from "@package/com/mojang/authlib";
import { $MinecraftServerData, $IMinecraftServer as $IMinecraftServer$1 } from "@package/xaero/common/server";
import { $MinecraftServerAccessor as $MinecraftServerAccessor$2 } from "@package/com/aetherteam/cumulus/mixin/mixins/common/accessor";
import { $MinecraftServerAccessor as $MinecraftServerAccessor$1 } from "@package/net/createmod/ponder/mixin/accessor";
import { $ChatDecorator, $Component_, $ChatType$Bound_, $Component } from "@package/net/minecraft/network/chat";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $TextFilter, $ServerConnectionListener } from "@package/net/minecraft/server/network";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ServerScriptManager } from "@package/dev/latvian/mods/kubejs/server";
import { $WorldData, $LevelStorageSource$LevelStorageAccess, $CommandStorage, $LevelResource } from "@package/net/minecraft/world/level/storage";
import { $MinecraftServerExtension } from "@package/foundry/veil/ext";
import { $DynamicManager } from "@package/me/wesley1808/servercore/common/dynamic";
import { $ProgressMapAccessor } from "@package/io/wispforest/owo/mixin/offline";
import { $ConfigurableRegistryLookupAccessor } from "@package/io/wispforest/accessories/mixin";
import { $ChunkIOErrorReporter, $RegionStorageInfo_ } from "@package/net/minecraft/world/level/chunk/storage";
import { $CommandSource, $Commands, $Commands$CommandSelection_, $Commands$CommandSelection, $CommandSourceStack } from "@package/net/minecraft/commands";
import { $RemoteDebugSampleType_ } from "@package/net/minecraft/util/debugchart";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $AtomicLong } from "@package/java/util/concurrent/atomic";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $PlayerSelector_, $ReloadableServerResourcesKJS, $MinecraftServerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $CommandFunction } from "@package/net/minecraft/commands/functions";
import { $MinecraftSessionService } from "@package/com/mojang/authlib/minecraft";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $MinecraftServerAccessor as $MinecraftServerAccessor$3 } from "@package/com/aetherteam/aether/mixin/mixins/common/accessor";
import { $ServerStatus } from "@package/net/minecraft/network/protocol/status";
import { $MinecraftServerAccessor } from "@package/wily/factoryapi/base";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $UUID_, $Map, $List, $Map_, $Collection_, $List_, $Collection, $Set, $UUID } from "@package/java/util";
import { $Statistics } from "@package/me/wesley1808/servercore/common/utils/statistics";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $ChunkProgressListenerFactory_, $ChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $Supplier_, $BooleanSupplier_, $Consumer_, $Function_ } from "@package/java/util/function";
import { $ServerPlayerGameMode, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $HolderGetter$Provider, $HolderLookup$RegistryLookup, $BlockPos_, $Holder$Reference, $HolderLookup$Provider, $RegistryAccess$Frozen, $Holder, $LayeredRegistryAccess, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $Path_, $Path } from "@package/java/nio/file";
import { $ICondition$IContext } from "@package/net/neoforged/neoforge/common/conditions";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $PlayerAdvancementsAccessor as $PlayerAdvancementsAccessor$1 } from "@package/com/telepathicgrunt/the_bumblezone/mixin/entities";
import { $Exception, $Throwable, $Runnable, $Enum, $RuntimeException, $Iterable, $Thread, $Record, $AutoCloseable, $Class, $Runnable_ } from "@package/java/lang";
import { $AccessorMixinMinecraftServer } from "@package/noobanidus/mods/lootr/common/mixin/accessor";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $GameRules, $ChunkPos, $WorldDataConfiguration_, $Level_, $GameType, $WorldDataConfiguration, $GameType_, $LevelSettings, $Level } from "@package/net/minecraft/world/level";
import { $OutputStream, $PrintStream, $File_, $IOException } from "@package/java/io";
import { $TagManager } from "@package/net/minecraft/tags";
import { $ProfilerFiller, $ProfileResults } from "@package/net/minecraft/util/profiling";
import { $PlayerList, $GameProfileCache } from "@package/net/minecraft/server/players";
import { $KeyPair } from "@package/java/security";
import { $ModifiableTickRateServer } from "@package/com/github/alexthe666/citadel/server/world";
import { $CustomBossEvents } from "@package/net/minecraft/server/bossevents";
import { $TemporalAmount_ } from "@package/java/time/temporal";
import { $Trackable } from "@package/dev/uncandango/alltheleaks/mixin";
import { $PlayerAdvancementsAccessor } from "@package/dev/uncandango/alltheleaks/mixin/core/main/accessor";
import { $IMinecraftServer as $IMinecraftServer$2 } from "@package/me/wesley1808/servercore/common/interfaces";
import { $ITimeTrackingServer, $IProfilingServerFunctionManager } from "@package/org/embeddedt/modernfix/duck";
import { $ServicesKeySet, $ServicesKeySet_, $YggdrasilAuthenticationService } from "@package/com/mojang/authlib/yggdrasil";
import { $Stream } from "@package/java/util/stream";
import { $PotionBrewing } from "@package/net/minecraft/world/item/alchemy";
import { $DedicatedServerProperties } from "@package/net/minecraft/server/dedicated";
import { $ResourceKey, $RegistryOps, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $FabricOriginalKnownPacksGetter } from "@package/net/fabricmc/fabric/impl/resource/loader";
import { $TickTaskSchedulerImpl } from "@package/foundry/veil/impl";
import { $Scoreboard, $Objective, $ScoreboardSaveData } from "@package/net/minecraft/world/scores";
import { $AccessorConfigurableRegistryLookup } from "@package/net/darkhax/botanypots/common/mixin";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as players from "@package/net/minecraft/server/players";
export * as packs from "@package/net/minecraft/server/packs";
export * as level from "@package/net/minecraft/server/level";
export * as commands from "@package/net/minecraft/server/commands";
export * as network from "@package/net/minecraft/server/network";
export * as advancements from "@package/net/minecraft/server/advancements";
export * as rcon from "@package/net/minecraft/server/rcon";
export * as chase from "@package/net/minecraft/server/chase";
export * as bossevents from "@package/net/minecraft/server/bossevents";
export * as dedicated from "@package/net/minecraft/server/dedicated";
export * as gui from "@package/net/minecraft/server/gui";

declare module "@package/net/minecraft/server" {
    export class $LoggedPrintStream extends $PrintStream {
        constructor(arg0: string, arg1: $OutputStream);
    }
    export class $PlayerAdvancements implements $PlayerAdvancementsAccessor$1, $PlayerAdvancementsAccessor {
        award(arg0: $AdvancementHolder_, arg1: string): boolean;
        setSelectedTab(arg0: $AdvancementHolder_): void;
        flushDirty(arg0: $ServerPlayer): void;
        stopListening(): void;
        getOrStartProgress(arg0: $AdvancementHolder_): $AdvancementProgress;
        revoke(arg0: $AdvancementHolder_, arg1: string): boolean;
        reload(arg0: $ServerAdvancementManager): void;
        setPlayer(arg0: $ServerPlayer): void;
        handler$dmf000$revelationary$triggerAdvancementCriteria(arg0: $AdvancementHolder_, arg1: string, arg2: $CallbackInfoReturnable<any>): void;
        handler$mfd000$iceberg$onAward(advancementHolder: $AdvancementHolder_, criterionKey: string, callbackInfo: $CallbackInfoReturnable<any>, success: boolean): void;
        save(): void;
        getPlayer(): $ServerPlayer;
        bumblezone$getProgress(): $Map<$AdvancementHolder, $AdvancementProgress>;
        progress: $Map<$AdvancementHolder, $AdvancementProgress>;
        player: $ServerPlayer;
        constructor(arg0: $DataFixer, arg1: $PlayerList, arg2: $ServerAdvancementManager, arg3: $Path_, arg4: $ServerPlayer);
        set selectedTab(value: $AdvancementHolder_);
    }
    export class $WorldLoader$DataLoadOutput<D> extends $Record {
        finalDimensions(): $RegistryAccess$Frozen;
        cookie(): D;
        constructor(cookie: D, finalDimensions: $RegistryAccess$Frozen);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$DataLoadOutput}.
     */
    export type $WorldLoader$DataLoadOutput_<D> = { finalDimensions?: $RegistryAccess$Frozen, cookie?: any,  } | [finalDimensions?: $RegistryAccess$Frozen, cookie?: any, ];
    export class $ConsoleInput {
        msg: string;
        source: $CommandSourceStack;
        constructor(arg0: string, arg1: $CommandSourceStack);
    }
    export class $MinecraftServer$ReloadableResources extends $Record implements $AutoCloseable {
        resourceManager(): $CloseableResourceManager;
        managers(): $ReloadableServerResources;
        close(): void;
        constructor(resourceManager: $CloseableResourceManager, managers: $ReloadableServerResources);
    }
    /**
     * Values that may be interpreted as {@link $MinecraftServer$ReloadableResources}.
     */
    export type $MinecraftServer$ReloadableResources_ = { managers?: $ReloadableServerResources, resourceManager?: $CloseableResourceManager,  } | [managers?: $ReloadableServerResources, resourceManager?: $CloseableResourceManager, ];
    export class $ServerAdvancementManager extends $SimpleJsonResourceReloadListener implements $IdentifiableResourceReloadListener {
        getFabricId(): $ResourceLocation;
        getFabricDependencies(): $Collection<any>;
        getAllAdvancements(): $Collection<$AdvancementHolder>;
        tree(): $AdvancementTree;
        get(arg0: $ResourceLocation_): $AdvancementHolder;
        constructor(arg0: $HolderLookup$Provider);
        get fabricId(): $ResourceLocation;
        get fabricDependencies(): $Collection<any>;
        get allAdvancements(): $Collection<$AdvancementHolder>;
    }
    export class $ServerInfo {
    }
    export interface $ServerInfo {
        getMotd(): string;
        getMaxPlayers(): number;
        getServerVersion(): string;
        getPlayerCount(): number;
        get motd(): string;
        get maxPlayers(): number;
        get serverVersion(): string;
        get playerCount(): number;
    }
    export class $ServerLinks$KnownLinkType extends $Enum<$ServerLinks$KnownLinkType> {
        create(arg0: $URI): $ServerLinks$Entry;
        static values(): $ServerLinks$KnownLinkType[];
        static valueOf(arg0: string): $ServerLinks$KnownLinkType;
        static SUPPORT: $ServerLinks$KnownLinkType;
        static FORUMS: $ServerLinks$KnownLinkType;
        static STATUS: $ServerLinks$KnownLinkType;
        static ANNOUNCEMENTS: $ServerLinks$KnownLinkType;
        static COMMUNITY: $ServerLinks$KnownLinkType;
        static BUG_REPORT: $ServerLinks$KnownLinkType;
        static NEWS: $ServerLinks$KnownLinkType;
        static COMMUNITY_GUIDELINES: $ServerLinks$KnownLinkType;
        static FEEDBACK: $ServerLinks$KnownLinkType;
        static WEBSITE: $ServerLinks$KnownLinkType;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerLinks$KnownLinkType>;
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks$KnownLinkType}.
     */
    export type $ServerLinks$KnownLinkType_ = "bug_report" | "community_guidelines" | "support" | "status" | "feedback" | "community" | "website" | "forums" | "news" | "announcements";
    export class $ReloadableServerResources$MissingTagAccessPolicy extends $Enum<$ReloadableServerResources$MissingTagAccessPolicy> {
    }
    /**
     * Values that may be interpreted as {@link $ReloadableServerResources$MissingTagAccessPolicy}.
     */
    export type $ReloadableServerResources$MissingTagAccessPolicy_ = "create_new" | "fail";
    export class $ServerTickRateManager extends $TickRateManager {
        isSprinting(): boolean;
        checkShouldSprintThisTick(): boolean;
        endTickWork(): void;
        requestGameToSprint(arg0: number): boolean;
        stopSprinting(): boolean;
        stopStepping(): boolean;
        stepGameIfPaused(arg0: number): boolean;
        updateJoiningPlayer(arg0: $ServerPlayer): void;
        static MIN_TICKRATE: number;
        constructor(arg0: $MinecraftServer);
        get sprinting(): boolean;
    }
    export class $PlayerAdvancements$Data extends $Record implements $ProgressMapAccessor {
    }
    /**
     * Values that may be interpreted as {@link $PlayerAdvancements$Data}.
     */
    export type $PlayerAdvancements$Data_ = { map?: $Map_<$ResourceLocation_, $AdvancementProgress>,  } | [map?: $Map_<$ResourceLocation_, $AdvancementProgress>, ];
    export class $ServerLinks extends $Record {
        untrust(): $List<$ServerLinks$UntrustedEntry>;
        findKnownType(arg0: $ServerLinks$KnownLinkType_): ($ServerLinks$Entry) | undefined;
        isEmpty(): boolean;
        entries(): $List<$ServerLinks$Entry>;
        static UNTRUSTED_LINKS_STREAM_CODEC: $StreamCodec<$ByteBuf, $List<$ServerLinks$UntrustedEntry>>;
        static TYPE_STREAM_CODEC: $StreamCodec<$ByteBuf, $Either<$ServerLinks$KnownLinkType, $Component>>;
        static EMPTY: $ServerLinks;
        constructor(arg0: $List_<$ServerLinks$Entry_>);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks}.
     */
    export type $ServerLinks_ = { entries?: $List_<$ServerLinks$Entry_>,  } | [entries?: $List_<$ServerLinks$Entry_>, ];
    export class $DebugLoggedPrintStream extends $LoggedPrintStream {
        constructor(arg0: string, arg1: $OutputStream);
    }
    export class $WorldLoader$PackConfig extends $Record {
        initialDataConfig(): $WorldDataConfiguration;
        initMode(): boolean;
        packRepository(): $PackRepository;
        createResourceManager(): $Pair<$WorldDataConfiguration, $CloseableResourceManager>;
        safeMode(): boolean;
        constructor(packRepository: $PackRepository, initialDataConfig: $WorldDataConfiguration_, safeMode: boolean, initMode: boolean);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$PackConfig}.
     */
    export type $WorldLoader$PackConfig_ = { initialDataConfig?: $WorldDataConfiguration_, packRepository?: $PackRepository, initMode?: boolean, safeMode?: boolean,  } | [initialDataConfig?: $WorldDataConfiguration_, packRepository?: $PackRepository, initMode?: boolean, safeMode?: boolean, ];
    export class $ChainedJsonException$Entry {
        getFilename(): string;
        getJsonKeys(): string;
        get filename(): string;
        get jsonKeys(): string;
    }
    export class $RunningOnDifferentThreadException extends $RuntimeException {
        static RUNNING_ON_DIFFERENT_THREAD: $RunningOnDifferentThreadException;
    }
    export class $ServerScoreboard$Method extends $Enum<$ServerScoreboard$Method> {
        static values(): $ServerScoreboard$Method[];
        static valueOf(arg0: string): $ServerScoreboard$Method;
        static REMOVE: $ServerScoreboard$Method;
        static CHANGE: $ServerScoreboard$Method;
    }
    /**
     * Values that may be interpreted as {@link $ServerScoreboard$Method}.
     */
    export type $ServerScoreboard$Method_ = "change" | "remove";
    export class $ReloadableServerRegistries {
        static reload(arg0: $LayeredRegistryAccess<$RegistryLayer_>, arg1: $ResourceManager, arg2: $Executor_): $CompletableFuture<$LayeredRegistryAccess<$RegistryLayer>>;
        constructor();
    }
    export class $ReloadableServerRegistries$EmptyTagLookupWrapper implements $HolderLookup$Provider {
        listRegistries(): $Stream<$ResourceKey<$Registry<never>>>;
        lookup<T>(arg0: $ResourceKey_<$Registry<T>>): ($HolderLookup$RegistryLookup<T>) | undefined;
        createSerializationContext<V>(arg0: $DynamicOps<V>): $RegistryOps<V>;
        lookupOrThrow<T>(arg0: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        asGetterLookup(): $HolderGetter$Provider;
        holderOrThrow<T>(arg0: $ResourceKey_<T>): $Holder<T>;
        holder<T>(arg0: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
    }
    export class $WorldLoader$WorldDataSupplier<D> {
    }
    export interface $WorldLoader$WorldDataSupplier<D> {
        get(arg0: $WorldLoader$DataLoadContext_): $WorldLoader$DataLoadOutput<D>;
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$WorldDataSupplier}.
     */
    export type $WorldLoader$WorldDataSupplier_<D> = ((arg0: $WorldLoader$DataLoadContext) => $WorldLoader$DataLoadOutput_<D>);
    export class $Bootstrap {
        static realStdoutPrintln(arg0: string): void;
        static bootStrap(): void;
        static getMissingTranslations(): $Set<string>;
        static checkBootstrapCalled(arg0: $Supplier_<string>): void;
        static validate(): void;
        static STDOUT: $PrintStream;
        static bootstrapDuration: $AtomicLong;
        constructor();
        static get missingTranslations(): $Set<string>;
    }
    export class $ChainedJsonException extends $IOException {
        static forException(arg0: $Exception): $ChainedJsonException;
        prependJsonKey(arg0: string): void;
        setFilenameAndFlush(arg0: string): void;
        constructor(arg0: string, arg1: $Throwable);
        constructor(arg0: string);
        set filenameAndFlush(value: string);
    }
    export class $WorldLoader$ResultFactory<D, R> {
    }
    export interface $WorldLoader$ResultFactory<D, R> {
        create(arg0: $CloseableResourceManager, arg1: $ReloadableServerResources, arg2: $LayeredRegistryAccess<$RegistryLayer_>, arg3: D): R;
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$ResultFactory}.
     */
    export type $WorldLoader$ResultFactory_<D, R> = ((arg0: $CloseableResourceManager, arg1: $ReloadableServerResources, arg2: $LayeredRegistryAccess<$RegistryLayer>, arg3: D) => R);
    export class $MinecraftServer$TimeProfiler {
    }
    export class $RegistryLayer extends $Enum<$RegistryLayer> {
        static createRegistryAccess(): $LayeredRegistryAccess<$RegistryLayer>;
        static values(): $RegistryLayer[];
        static valueOf(arg0: string): $RegistryLayer;
        static WORLDGEN: $RegistryLayer;
        static DIMENSIONS: $RegistryLayer;
        static RELOADABLE: $RegistryLayer;
        static STATIC: $RegistryLayer;
    }
    /**
     * Values that may be interpreted as {@link $RegistryLayer}.
     */
    export type $RegistryLayer_ = "static" | "worldgen" | "dimensions" | "reloadable";
    export class $ReloadableServerResources$ConfigurableRegistryLookup implements $HolderLookup$Provider, $ConfigurableRegistryLookupAccessor, $AccessorConfigurableRegistryLookup {
        listRegistries(): $Stream<$ResourceKey<$Registry<never>>>;
        missingTagAccessPolicy(arg0: $ReloadableServerResources$MissingTagAccessPolicy_): void;
        lookup<T>(arg0: $ResourceKey_<$Registry<T>>): ($HolderLookup$RegistryLookup<T>) | undefined;
        createSerializationContext<V>(arg0: $DynamicOps<V>): $RegistryOps<V>;
        lookupOrThrow<T>(arg0: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        asGetterLookup(): $HolderGetter$Provider;
        holderOrThrow<T>(arg0: $ResourceKey_<T>): $Holder<T>;
        holder<T>(arg0: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        getRegistryAccess(): $RegistryAccess;
        botanypots$getRegistry(): $RegistryAccess;
        registryAccess: $RegistryAccess;
    }
    export class $Eula {
        hasAgreedToEULA(): boolean;
        constructor(arg0: $Path_);
    }
    export class $WorldLoader {
        static load<D, R>(arg0: $WorldLoader$InitConfig_, arg1: $WorldLoader$WorldDataSupplier_<D>, arg2: $WorldLoader$ResultFactory_<D, R>, arg3: $Executor_, arg4: $Executor_): $CompletableFuture<R>;
        constructor();
    }
    export class $ReloadableServerRegistries$Holder {
        getLootTable(arg0: $ResourceKey_<$LootTable>): $LootTable;
        getKeys(arg0: $ResourceKey_<$Registry<never>>): $Collection<$ResourceLocation>;
        get(): $RegistryAccess$Frozen;
        lookup(): $HolderGetter$Provider;
        constructor(arg0: $RegistryAccess$Frozen);
    }
    export class $WorldLoader$DataLoadContext extends $Record {
        datapackDimensions(): $RegistryAccess$Frozen;
        dataConfiguration(): $WorldDataConfiguration;
        datapackWorldgen(): $RegistryAccess$Frozen;
        resources(): $ResourceManager;
        constructor(resources: $ResourceManager, dataConfiguration: $WorldDataConfiguration_, datapackWorldgen: $RegistryAccess$Frozen, datapackDimensions: $RegistryAccess$Frozen);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$DataLoadContext}.
     */
    export type $WorldLoader$DataLoadContext_ = { datapackWorldgen?: $RegistryAccess$Frozen, dataConfiguration?: $WorldDataConfiguration_, resources?: $ResourceManager, datapackDimensions?: $RegistryAccess$Frozen,  } | [datapackWorldgen?: $RegistryAccess$Frozen, dataConfiguration?: $WorldDataConfiguration_, resources?: $ResourceManager, datapackDimensions?: $RegistryAccess$Frozen, ];
    export class $ServerInterface {
    }
    export interface $ServerInterface extends $ServerInfo {
        runCommand(arg0: string): string;
        getPlayerNames(): string[];
        getLevelIdName(): string;
        getServerPort(): number;
        getServerIp(): string;
        getPluginNames(): string;
        getServerName(): string;
        getProperties(): $DedicatedServerProperties;
        get playerNames(): string[];
        get levelIdName(): string;
        get serverPort(): number;
        get serverIp(): string;
        get pluginNames(): string;
        get serverName(): string;
        get properties(): $DedicatedServerProperties;
    }
    export class $ServerFunctionLibrary implements $PreparableReloadListener, $IdentifiableResourceReloadListener {
        getFabricId(): $ResourceLocation;
        getFabricDependencies(): $Collection<any>;
        getAvailableTags(): $Iterable<$ResourceLocation>;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        getTag(arg0: $ResourceLocation_): $Collection<$CommandFunction<$CommandSourceStack>>;
        getFunction(arg0: $ResourceLocation_): ($CommandFunction<$CommandSourceStack>) | undefined;
        getFunctions(): $Map<$ResourceLocation, $CommandFunction<$CommandSourceStack>>;
        getName(): string;
        static TYPE_KEY: $ResourceKey<$Registry<$CommandFunction<$CommandSourceStack>>>;
        constructor(arg0: number, arg1: $CommandDispatcher<$CommandSourceStack>);
        get fabricId(): $ResourceLocation;
        get fabricDependencies(): $Collection<any>;
        get availableTags(): $Iterable<$ResourceLocation>;
        get functions(): $Map<$ResourceLocation, $CommandFunction<$CommandSourceStack>>;
        get name(): string;
    }
    export class $MinecraftServer extends $ReentrantBlockableEventLoop<$TickTask> implements $ServerInfo, $ChunkIOErrorReporter, $CommandSource, $AutoCloseable, $ITimeTrackingServer, $MinecraftServerExtension, $MinecraftServerAccessor$2, $Trackable, $AccessorMixinMinecraftServer, $FabricOriginalKnownPacksGetter, $MinecraftServerAccessor, $MinecraftServerAccessor$1, $IMinecraftServer$2, $IMinecraftServer$1, $MinecraftServerAccessor$3, $IMinecraftServer, $ModifiableTickRateServer, $MinecraftServerKJS {
        getProxy(): $Proxy;
        getResourceManager(): $ResourceManager;
        getWorldScreenshotFile(): ($Path) | undefined;
        doRunTask(arg0: $TickTask): void;
        isPublished(): boolean;
        isHardcore(): boolean;
        fillSystemReport(arg0: $SystemReport): $SystemReport;
        startRecordingMetrics(arg0: $Consumer_<$ProfileResults>, arg1: $Consumer_<$Path>): void;
        finishRecordingMetrics(): void;
        cancelRecordingMetrics(): void;
        getWorldData(): $WorldData;
        tickRateManager(): $ServerTickRateManager;
        getAdvancements(): $ServerAdvancementManager;
        registries(): $LayeredRegistryAccess<$RegistryLayer>;
        setUsesAuthentication(arg0: boolean): void;
        isReady(): boolean;
        isDemo(): boolean;
        registryAccess(): $RegistryAccess$Frozen;
        isSingleplayer(): boolean;
        isPaused(): boolean;
        getRunningThread(): $Thread;
        getFixerUpper(): $DataFixer;
        getProfileKeySignatureValidator(): $SignatureValidator;
        getScheduledEvents(): $ScheduledEvents;
        getScoreboard(): $ServerScoreboard;
        atl$getBaseClass(): $Class<any>;
        getData(): $AttachedData<any>;
        getGameRules(): $GameRules;
        reloadableRegistries(): $ReloadableServerRegistries$Holder;
        sendSystemMessage(arg0: $Component_): void;
        getCommands(): $Commands;
        createCommandSourceStack(): $CommandSourceStack;
        getPersistentData(): $CompoundTag;
        isLevelEnabled(arg0: $Level_): boolean;
        acceptsSuccess(): boolean;
        acceptsFailure(): boolean;
        shouldInformAdmins(): boolean;
        getTickCount(): number;
        serverLinks(): $ServerLinks;
        getMotd(): string;
        getRecipeManager(): $RecipeManager;
        potionBrewing(): $PotionBrewing;
        overworld(): $ServerLevel;
        getCustomBossEvents(): $CustomBossEvents;
        setDifficulty(arg0: $Difficulty_, arg1: boolean): void;
        setDifficultyLocked(arg0: boolean): void;
        getKeyPair(): $KeyPair;
        logChatMessage(arg0: $Component_, arg1: $ChatType$Bound_, arg2: string): void;
        getServerModName(): string;
        getModdedStatus(): $ModCheck;
        handler$mcj000$ae2$injectSpatialLevel(arg0: $ChunkProgressListener, arg1: $CallbackInfo): void;
        getOperatorUserPermissionLevel(): number;
        getFunctionCompilationLevel(): number;
        shouldRconBroadcast(): boolean;
        saveAllChunks(arg0: boolean, arg1: boolean, arg2: boolean): boolean;
        saveEverything(arg0: boolean, arg1: boolean, arg2: boolean): boolean;
        stop(): void;
        handler$jnm000$dimthread$shutdownThreadpool(arg0: $CallbackInfo): void;
        handler$bbn000$veil$stopServer(arg0: $CallbackInfo): void;
        getLocalIp(): string;
        setLocalIp(arg0: string): void;
        endMetricsRecordingTick(): void;
        onServerExit(): void;
        getServerDirectory(): $Path;
        onServerCrash(arg0: $CrashReport): void;
        isTickTimeLoggingEnabled(): boolean;
        static throwIfFatalException(): boolean;
        static setFatalException(arg0: $RuntimeException): void;
        tickChildren(arg0: $BooleanSupplier_): void;
        getStatusJson(): string;
        getAverageTickTimeNanos(): number;
        constant$gci000$servercore$modifyAutoSaveInterval(constant: number): number;
        onTickRateChanged(): void;
        enforceSecureProfile(): boolean;
        getMaxPlayers(): number;
        hidesOnlinePlayers(): boolean;
        handler$jnm000$dimthread$tickWorlds(arg0: $BooleanSupplier_, arg1: $CallbackInfo): void;
        wrapOperation$jnm000$dimthread$tickWorlds(arg0: $MinecraftServer, arg1: $Operation_<any>): $ServerLevel[];
        addTickable(arg0: $Runnable_): void;
        isCurrentlySaving(): boolean;
        levelKeys(): $Set<$ResourceKey<$Level>>;
        getServerVersion(): string;
        getPlayerCount(): number;
        getPlayerNames(): string[];
        fillServerSystemReport(arg0: $SystemReport): $SystemReport;
        getSingleplayerProfile(): $GameProfile;
        setSingleplayerProfile(arg0: $GameProfile): void;
        getScaledTrackingDistance(arg0: number): number;
        isSpawningMonsters(): boolean;
        setDemo(arg0: boolean): void;
        getServerResourcePack(): ($MinecraftServer$ServerResourcePackInfo) | undefined;
        isResourcePackRequired(): boolean;
        getRateLimitPacketsPerSecond(): number;
        usesAuthentication(): boolean;
        getPreventProxyConnections(): boolean;
        setPreventProxyConnections(arg0: boolean): void;
        isEpollEnabled(): boolean;
        setPvpAllowed(arg0: boolean): void;
        isFlightAllowed(): boolean;
        setFlightAllowed(arg0: boolean): void;
        setMotd(arg0: string): void;
        setPlayerList(arg0: $PlayerList): void;
        setDefaultGameType(arg0: $GameType_): void;
        hasGui(): boolean;
        publishServer(arg0: $GameType_, arg1: boolean, arg2: number): boolean;
        getSpawnProtectionRadius(): number;
        repliesToStatus(): boolean;
        getPlayerIdleTimeout(): number;
        setPlayerIdleTimeout(arg0: number): void;
        getSessionService(): $MinecraftSessionService;
        getProfileRepository(): $GameProfileRepository;
        invalidateStatus(): void;
        getCompressionThreshold(): number;
        getNextTickTime(): number;
        reloadResources(arg0: $Collection_<string>): $CompletableFuture<void>;
        static configurePackRepository(arg0: $PackRepository, arg1: $WorldDataConfiguration_, arg2: boolean, arg3: boolean): $WorldDataConfiguration;
        kickUnlistedPlayers(arg0: $CommandSourceStack): void;
        isEnforceWhitelist(): boolean;
        getPackRepository(): $PackRepository;
        setEnforceWhitelist(arg0: boolean): void;
        getCurrentSmoothedTickTime(): number;
        getTickTimesNanos(): number[];
        isSingleplayerOwner(arg0: $GameProfile): boolean;
        /**
         * @deprecated
         */
        forgeGetWorldMap(): $Map<$ResourceKey<$Level>, $ServerLevel>;
        /**
         * @deprecated
         */
        markWorldsDirty(): void;
        dumpServerProperties(arg0: $Path_): void;
        isRecordingMetrics(): boolean;
        stopRecordingMetrics(): void;
        getWorldPath(arg0: $LevelResource): $Path;
        isTimeProfilerRunning(): boolean;
        startTimeProfiler(): void;
        stopTimeProfiler(): $ProfileResults;
        logIPs(): boolean;
        subscribeToDebugSample(arg0: $ServerPlayer, arg1: $RemoteDebugSampleType_): void;
        acceptsTransfers(): boolean;
        reportChunkLoadFailure(arg0: $Throwable, arg1: $RegionStorageInfo_, arg2: $ChunkPos): void;
        reportChunkSaveFailure(arg0: $Throwable, arg1: $RegionStorageInfo_, arg2: $ChunkPos): void;
        mfix$getLastTickStartTime(): number;
        veil$getScheduler(): $TickTaskSchedulerImpl;
        veil$getOrCreateScheduler(): $TickTaskSchedulerImpl;
        fabric_getOriginalKnownPacks(): $List<any>;
        servercore$onStarted(server: $MinecraftServer): void;
        servercore$getStatistics(): $Statistics;
        servercore$getDynamicManager(): $DynamicManager;
        getXaeroMinimapServerData(): $MinecraftServerData;
        setXaeroMinimapServerData(arg0: $MinecraftServerData): void;
        getXaeroWorldMapServerData(): $MinecraftServerData$1;
        setXaeroWorldMapServerData(arg0: $MinecraftServerData$1): void;
        setGlobalTickLengthMs(arg0: number): void;
        getMasterMs(): number;
        getOverworld(): $ServerLevel;
        getPlayerList(): $PlayerList;
        createTextFilterForPlayer(arg0: $ServerPlayer): $TextFilter;
        createGameModeForPlayer(arg0: $ServerPlayer): $ServerPlayerGameMode;
        getSpawnRadius(arg0: $ServerLevel): number;
        isPvpAllowed(): boolean;
        getTickTime(arg0: $ResourceKey_<$Level>): number[];
        getProfilePermissions(arg0: $GameProfile): number;
        getForcedGameType(): $GameType;
        getDefaultGameType(): $GameType;
        restoreInventories(): $Map<any, any>;
        getMaxChainedNeighborUpdates(): number;
        forceSynchronousWrites(): boolean;
        getStructureManager(): $StructureTemplateManager;
        getAbsoluteMaxWorldSize(): number;
        isSpawningAnimals(): boolean;
        areNpcsEnabled(): boolean;
        isUnderSpawnProtection(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $Player): boolean;
        forceTimeSynchronization(): void;
        tickServer(arg0: $BooleanSupplier_): void;
        getProfileCache(): $GameProfileCache;
        isCommandBlockEnabled(): boolean;
        getChatDecorator(): $ChatDecorator;
        getAllLevels(): $Iterable<$ServerLevel>;
        getCommandStorage(): $CommandStorage;
        getServerResources(): $MinecraftServer$ReloadableResources;
        getLevel(arg0: $ResourceKey_<$Level>): $ServerLevel;
        static spin<S extends $MinecraftServer>(arg0: $Function_<$Thread, S>): S;
        getConnection(): $ServerConnectionListener;
        getFile(arg0: string): $Path;
        getPort(): number;
        isShutdown(): boolean;
        halt(arg0: boolean): void;
        isStopped(): boolean;
        isRunning(): boolean;
        getStatus(): $ServerStatus;
        setPort(arg0: number): void;
        isDedicated(): boolean;
        getProfiler(): $ProfilerFiller;
        getFunctions(): $ServerFunctionManager;
        reportMisplacedChunk(arg0: $ChunkPos, arg1: $ChunkPos, arg2: $RegionStorageInfo_): void;
        alwaysAccepts(): boolean;
        startTracking(): void;
        wrap(): $WeakReference<$Trackable>;
        resetGlobalTickLengthMs(): void;
        setStatusMessage(message: $Component_): void;
        /**
         * Runs the specified console command.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        /**
         * Runs the specified console command. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        getName(): $Component;
        self(): $MinecraftServer;
        tell(message: $Component_): void;
        getLevel(dimension: $ResourceLocation_): $ServerLevel;
        sendData(channel: string, data: $CompoundTag_): void;
        getMcEntities(): $Iterable<$Entity>;
        getEntityByUUID(id: $UUID_): $Entity;
        getEntityByNetworkID(id: number): $Entity;
        getMcPlayers(): $List<$Player>;
        getPlayers(): $EntityArrayList;
        getAdvancement(id: $ResourceLocation_): $AdvancementNode;
        getPlayer(selector: $PlayerSelector_): $ServerPlayer;
        sendData(channel: string): void;
        schedule(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        getEntities(): $EntityArrayList;
        getDisplayName(): $Component;
        cumulus$getStorageSource(): $LevelStorageSource$LevelStorageAccess;
        Lootr$getStorageSource(): $LevelStorageSource$LevelStorageAccess;
        getStorageSource(): $LevelStorageSource$LevelStorageAccess;
        catnip$getStorageSource(): $LevelStorageSource$LevelStorageAccess;
        aether$getStorageSource(): $LevelStorageSource$LevelStorageAccess;
        static VANILLA_BRAND: string;
        static ANONYMOUS_PLAYER_PROFILE: $GameProfile;
        resources: $MinecraftServer$ReloadableResources;
        storageSource: $LevelStorageSource$LevelStorageAccess;
        static ABSOLUTE_MAX_WORLD_SIZE: number;
        static DEMO_SETTINGS: $LevelSettings;
        constructor(arg0: $Thread, arg1: $LevelStorageSource$LevelStorageAccess, arg2: $PackRepository, arg3: $WorldStem_, arg4: $Proxy, arg5: $DataFixer, arg6: $Services_, arg7: $ChunkProgressListenerFactory_);
        get proxy(): $Proxy;
        get resourceManager(): $ResourceManager;
        get worldScreenshotFile(): ($Path) | undefined;
        get published(): boolean;
        get hardcore(): boolean;
        get worldData(): $WorldData;
        get advancements(): $ServerAdvancementManager;
        get ready(): boolean;
        get singleplayer(): boolean;
        get paused(): boolean;
        get runningThread(): $Thread;
        get fixerUpper(): $DataFixer;
        get profileKeySignatureValidator(): $SignatureValidator;
        get scheduledEvents(): $ScheduledEvents;
        get scoreboard(): $ServerScoreboard;
        get data(): $AttachedData<any>;
        get gameRules(): $GameRules;
        get commands(): $Commands;
        get persistentData(): $CompoundTag;
        get tickCount(): number;
        get recipeManager(): $RecipeManager;
        get customBossEvents(): $CustomBossEvents;
        set difficultyLocked(value: boolean);
        get keyPair(): $KeyPair;
        get serverModName(): string;
        get moddedStatus(): $ModCheck;
        get operatorUserPermissionLevel(): number;
        get functionCompilationLevel(): number;
        get serverDirectory(): $Path;
        get tickTimeLoggingEnabled(): boolean;
        static set fatalException(value: $RuntimeException);
        get statusJson(): string;
        get averageTickTimeNanos(): number;
        get maxPlayers(): number;
        get currentlySaving(): boolean;
        get serverVersion(): string;
        get playerCount(): number;
        get playerNames(): string[];
        get spawningMonsters(): boolean;
        get serverResourcePack(): ($MinecraftServer$ServerResourcePackInfo) | undefined;
        get resourcePackRequired(): boolean;
        get rateLimitPacketsPerSecond(): number;
        get epollEnabled(): boolean;
        get spawnProtectionRadius(): number;
        get sessionService(): $MinecraftSessionService;
        get profileRepository(): $GameProfileRepository;
        get compressionThreshold(): number;
        get nextTickTime(): number;
        get packRepository(): $PackRepository;
        get currentSmoothedTickTime(): number;
        get tickTimesNanos(): number[];
        get recordingMetrics(): boolean;
        get timeProfilerRunning(): boolean;
        set globalTickLengthMs(value: number);
        get masterMs(): number;
        get forcedGameType(): $GameType;
        get maxChainedNeighborUpdates(): number;
        get structureManager(): $StructureTemplateManager;
        get absoluteMaxWorldSize(): number;
        get spawningAnimals(): boolean;
        get profileCache(): $GameProfileCache;
        get commandBlockEnabled(): boolean;
        get chatDecorator(): $ChatDecorator;
        get allLevels(): $Iterable<$ServerLevel>;
        get commandStorage(): $CommandStorage;
        get serverResources(): $MinecraftServer$ReloadableResources;
        get connection(): $ServerConnectionListener;
        get shutdown(): boolean;
        get stopped(): boolean;
        get running(): boolean;
        get status(): $ServerStatus;
        get dedicated(): boolean;
        get profiler(): $ProfilerFiller;
        get functions(): $ServerFunctionManager;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get mcEntities(): $Iterable<$Entity>;
        get mcPlayers(): $List<$Player>;
        get players(): $EntityArrayList;
        get entities(): $EntityArrayList;
        get displayName(): $Component;
    }
    export class $WorldStem extends $Record implements $AutoCloseable {
        resourceManager(): $CloseableResourceManager;
        registries(): $LayeredRegistryAccess<$RegistryLayer>;
        worldData(): $WorldData;
        dataPackResources(): $ReloadableServerResources;
        close(): void;
        constructor(arg0: $CloseableResourceManager, arg1: $ReloadableServerResources, arg2: $LayeredRegistryAccess<$RegistryLayer_>, arg3: $WorldData);
    }
    /**
     * Values that may be interpreted as {@link $WorldStem}.
     */
    export type $WorldStem_ = { dataPackResources?: $ReloadableServerResources, registries?: $LayeredRegistryAccess<$RegistryLayer_>, worldData?: $WorldData, resourceManager?: $CloseableResourceManager,  } | [dataPackResources?: $ReloadableServerResources, registries?: $LayeredRegistryAccess<$RegistryLayer_>, worldData?: $WorldData, resourceManager?: $CloseableResourceManager, ];
    export class $ServerScoreboard extends $Scoreboard {
        stopTrackingObjective(arg0: $Objective): void;
        startTrackingObjective(arg0: $Objective): void;
        addDirtyListener(arg0: $Runnable_): void;
        getStartTrackingPackets(arg0: $Objective): $List<$Packet<never>>;
        getStopTrackingPackets(arg0: $Objective): $List<$Packet<never>>;
        dataFactory(): $SavedData$Factory<$ScoreboardSaveData>;
        getObjectiveDisplaySlotCount(arg0: $Objective): number;
        static HIDDEN_SCORE_PREFIX: string;
        constructor(arg0: $MinecraftServer);
    }
    export class $ReloadableServerResources implements $ReloadableServerResourcesKJS {
        getAdvancements(): $ServerAdvancementManager;
        getCommands(): $Commands;
        getRecipeManager(): $RecipeManager;
        getFunctionLibrary(): $ServerFunctionLibrary;
        getConditionContext(): $ICondition$IContext;
        updateRegistryTags(): void;
        static loadResources(arg0: $ResourceManager, arg1: $LayeredRegistryAccess<$RegistryLayer_>, arg2: $FeatureFlagSet, arg3: $Commands$CommandSelection_, arg4: number, arg5: $Executor_, arg6: $Executor_): $CompletableFuture<$ReloadableServerResources>;
        fullRegistries(): $ReloadableServerRegistries$Holder;
        getRegistryLookup(): $HolderLookup$Provider;
        listeners(): $List<$PreparableReloadListener>;
        handler$kgi000$cucumber$constructor(arg0: $RegistryAccess$Frozen, arg1: $FeatureFlagSet, arg2: $Commands$CommandSelection_, arg3: number, arg4: $CallbackInfo): void;
        handler$kgi000$cucumber$updateRegistryTags(arg0: $CallbackInfo): void;
        kjs$getServerScriptManager(): $ServerScriptManager;
        kjs$getTagManager(): $TagManager;
        get advancements(): $ServerAdvancementManager;
        get commands(): $Commands;
        get recipeManager(): $RecipeManager;
        get functionLibrary(): $ServerFunctionLibrary;
        get conditionContext(): $ICondition$IContext;
        get registryLookup(): $HolderLookup$Provider;
    }
    export class $WorldLoader$InitConfig extends $Record {
        packConfig(): $WorldLoader$PackConfig;
        commandSelection(): $Commands$CommandSelection;
        functionCompilationLevel(): number;
        constructor(packConfig: $WorldLoader$PackConfig_, commandSelection: $Commands$CommandSelection_, functionCompilationLevel: number);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$InitConfig}.
     */
    export type $WorldLoader$InitConfig_ = { commandSelection?: $Commands$CommandSelection_, functionCompilationLevel?: number, packConfig?: $WorldLoader$PackConfig_,  } | [commandSelection?: $Commands$CommandSelection_, functionCompilationLevel?: number, packConfig?: $WorldLoader$PackConfig_, ];
    export class $TickTask implements $Runnable {
        getTick(): number;
        run(): void;
        constructor(arg0: number, arg1: $Runnable_);
        get tick(): number;
    }
    export class $ServerLinks$Entry extends $Record {
        link(): $URI;
        displayName(): $Component;
        static custom(arg0: $Component_, arg1: $URI): $ServerLinks$Entry;
        static knownType(arg0: $ServerLinks$KnownLinkType_, arg1: $URI): $ServerLinks$Entry;
        type(): $Either<$ServerLinks$KnownLinkType, $Component>;
        constructor(arg0: $Either<$ServerLinks$KnownLinkType_, $Component_>, arg1: $URI);
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks$Entry}.
     */
    export type $ServerLinks$Entry_ = { link?: $URI, type?: $Either<$ServerLinks$KnownLinkType_, $Component_>,  } | [link?: $URI, type?: $Either<$ServerLinks$KnownLinkType_, $Component_>, ];
    export class $MinecraftServer$ServerResourcePackInfo extends $Record {
        prompt(): $Component;
        isRequired(): boolean;
        hash(): string;
        url(): string;
        id(): $UUID;
        constructor(id: $UUID_, url: string, hash: string, isRequired: boolean, prompt: $Component_);
        get required(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftServer$ServerResourcePackInfo}.
     */
    export type $MinecraftServer$ServerResourcePackInfo_ = { hash?: string, id?: $UUID_, prompt?: $Component_, isRequired?: boolean, url?: string,  } | [hash?: string, id?: $UUID_, prompt?: $Component_, isRequired?: boolean, url?: string, ];
    export class $Main {
        static main(arg0: string[]): void;
        constructor();
    }
    export class $ServerLinks$UntrustedEntry extends $Record {
        link(): string;
        type(): $Either<$ServerLinks$KnownLinkType, $Component>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerLinks$UntrustedEntry>;
        constructor(arg0: $Either<$ServerLinks$KnownLinkType_, $Component_>, arg1: string);
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks$UntrustedEntry}.
     */
    export type $ServerLinks$UntrustedEntry_ = { link?: string, type?: $Either<$ServerLinks$KnownLinkType_, $Component_>,  } | [link?: string, type?: $Either<$ServerLinks$KnownLinkType_, $Component_>, ];
    export class $Services extends $Record {
        profileCache(): $GameProfileCache;
        canValidateProfileKeys(): boolean;
        servicesKeySet(): $ServicesKeySet;
        profileRepository(): $GameProfileRepository;
        sessionService(): $MinecraftSessionService;
        profileKeySignatureValidator(): $SignatureValidator;
        static create(arg0: $YggdrasilAuthenticationService, arg1: $File_): $Services;
        constructor(arg0: $MinecraftSessionService, arg1: $ServicesKeySet_, arg2: $GameProfileRepository_, arg3: $GameProfileCache);
    }
    /**
     * Values that may be interpreted as {@link $Services}.
     */
    export type $Services_ = { servicesKeySet?: $ServicesKeySet_, profileCache?: $GameProfileCache, profileRepository?: $GameProfileRepository_, sessionService?: $MinecraftSessionService,  } | [servicesKeySet?: $ServicesKeySet_, profileCache?: $GameProfileCache, profileRepository?: $GameProfileRepository_, sessionService?: $MinecraftSessionService, ];
    export class $ServerFunctionManager implements $IProfilingServerFunctionManager {
        getDispatcher(): $CommandDispatcher<$CommandSourceStack>;
        replaceLibrary(arg0: $ServerFunctionLibrary): void;
        getGameLoopSender(): $CommandSourceStack;
        getTagNames(): $Iterable<$ResourceLocation>;
        tick(): void;
        getTag(arg0: $ResourceLocation_): $Collection<$CommandFunction<$CommandSourceStack>>;
        mfix$getProfilingResults(): string;
        getFunctionNames(): $Iterable<$ResourceLocation>;
        get(arg0: $ResourceLocation_): ($CommandFunction<$CommandSourceStack>) | undefined;
        execute(arg0: $CommandFunction<$CommandSourceStack>, arg1: $CommandSourceStack): void;
        constructor(arg0: $MinecraftServer, arg1: $ServerFunctionLibrary);
        get dispatcher(): $CommandDispatcher<$CommandSourceStack>;
        get gameLoopSender(): $CommandSourceStack;
        get tagNames(): $Iterable<$ResourceLocation>;
        get functionNames(): $Iterable<$ResourceLocation>;
    }
}
