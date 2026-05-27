import { $DataStorageTestAccess } from "@package/flaxbeard/immersivepetroleum/mixin/accessors";
import { $Dynamic, $Lifecycle } from "@package/com/mojang/serialization";
import { $MinecraftServer, $WorldLoader$PackConfig } from "@package/net/minecraft/server";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $DateTimeFormatter } from "@package/java/time/format";
import { $LevelResourceAccessor } from "@package/com/blackgear/platform/core/mixin/access";
import { $SavedData, $SavedData$Factory_ } from "@package/net/minecraft/world/level/saveddata";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $UUID_, $Map, $Set, $Spliterator, $Iterator, $UUID, $List, $List_ } from "@package/java/util";
import { $EndDragonFight$Data_, $EndDragonFight$Data } from "@package/net/minecraft/world/level/dimension/end";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $WorldBorder$Settings } from "@package/net/minecraft/world/level/border";
import { $Consumer_ } from "@package/java/util/function";
import { $Difficulty_, $Difficulty } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_, $RegistryAccess, $Registry, $HolderLookup$Provider, $RegistryAccess$Frozen } from "@package/net/minecraft/core";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $TimerQueue } from "@package/net/minecraft/world/level/timers";
import { $Path_, $Path } from "@package/java/nio/file";
import { $Enum, $RuntimeException, $Comparable, $Iterable, $Record, $AutoCloseable } from "@package/java/lang";
import { $AccessorMixinDimensionDataStorage } from "@package/noobanidus/mods/lootr/common/mixin/accessor";
import { $WorldDimensions$Complete_, $WorldOptions, $WorldDimensions$Complete } from "@package/net/minecraft/world/level/levelgen";
import { $GameType, $WorldDataConfiguration, $GameRules, $GameType_, $WorldDataConfiguration_, $LevelSettings, $LevelHeightAccessor, $Level } from "@package/net/minecraft/world/level";
import { $File_, $File } from "@package/java/io";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $DataStorageAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors";
import { $Instant, $LocalDateTime } from "@package/java/time";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $DataFixTypes_ } from "@package/net/minecraft/util/datafix";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PrimaryLevelDataExtension } from "@package/dev/simulated_team/simulated/mixin_interface";
import { $LevelStem_ } from "@package/net/minecraft/world/level/dimension";
import { $DirectoryValidator } from "@package/net/minecraft/world/level/validation";
export * as loot from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/minecraft/world/level/storage" {
    export class $CommandStorage {
        get(arg0: $ResourceLocation_): $CompoundTag;
        set(arg0: $ResourceLocation_, arg1: $CompoundTag_): void;
        keys(): $Stream<$ResourceLocation>;
        constructor(arg0: $DimensionDataStorage);
    }
    export class $CommandStorage$Container extends $SavedData {
    }
    export class $LevelStorageSource$LevelDirectory extends $Record {
        rawDataFile(arg0: $LocalDateTime): $Path;
        dataFile(): $Path;
        directoryName(): string;
        iconFile(): $Path;
        oldDataFile(): $Path;
        lockFile(): $Path;
        corruptedDataFile(arg0: $LocalDateTime): $Path;
        path(): $Path;
        resourcePath(arg0: $LevelResource): $Path;
        constructor(path: $Path_);
    }
    /**
     * Values that may be interpreted as {@link $LevelStorageSource$LevelDirectory}.
     */
    export type $LevelStorageSource$LevelDirectory_ = { path?: $Path_,  } | [path?: $Path_, ];
    export class $LevelDataAndDimensions extends $Record {
        worldData(): $WorldData;
        dimensions(): $WorldDimensions$Complete;
        constructor(arg0: $WorldData, arg1: $WorldDimensions$Complete_);
    }
    /**
     * Values that may be interpreted as {@link $LevelDataAndDimensions}.
     */
    export type $LevelDataAndDimensions_ = { dimensions?: $WorldDimensions$Complete_, worldData?: $WorldData,  } | [dimensions?: $WorldDimensions$Complete_, worldData?: $WorldData, ];
    export class $WorldData {
        static ANVIL_VERSION_ID: number;
        static MCREGION_VERSION_ID: number;
    }
    export interface $WorldData {
        isHardcore(): boolean;
        enabledFeatures(): $FeatureFlagSet;
        getDifficulty(): $Difficulty;
        getGameRules(): $GameRules;
        fillCrashReportCategory(arg0: $CrashReportCategory): void;
        getDataConfiguration(): $WorldDataConfiguration;
        setDataConfiguration(arg0: $WorldDataConfiguration_): void;
        wasModded(): boolean;
        getKnownServerBrands(): $Set<string>;
        getRemovedFeatureFlags(): $Set<string>;
        setModdedInfo(arg0: string, arg1: boolean): void;
        getStorageVersionName(arg0: number): string;
        getCustomBossEvents(): $CompoundTag;
        setCustomBossEvents(arg0: $CompoundTag_): void;
        overworldData(): $ServerLevelData;
        getLevelSettings(): $LevelSettings;
        isAllowCommands(): boolean;
        setDifficulty(arg0: $Difficulty_): void;
        setDifficultyLocked(arg0: boolean): void;
        getLoadedPlayerTag(): $CompoundTag;
        isDebugWorld(): boolean;
        worldGenSettingsLifecycle(): $Lifecycle;
        getGameType(): $GameType;
        isDifficultyLocked(): boolean;
        setGameType(arg0: $GameType_): void;
        worldGenOptions(): $WorldOptions;
        endDragonFightData(): $EndDragonFight$Data;
        setEndDragonFightData(arg0: $EndDragonFight$Data_): void;
        isFlatWorld(): boolean;
        getVersion(): number;
        getLevelName(): string;
        createTag(arg0: $RegistryAccess, arg1: $CompoundTag_): $CompoundTag;
        get hardcore(): boolean;
        get gameRules(): $GameRules;
        get knownServerBrands(): $Set<string>;
        get removedFeatureFlags(): $Set<string>;
        get levelSettings(): $LevelSettings;
        get allowCommands(): boolean;
        get loadedPlayerTag(): $CompoundTag;
        get debugWorld(): boolean;
        get flatWorld(): boolean;
        get version(): number;
        get levelName(): string;
    }
    export class $LevelSummary$CorruptedLevelSummary extends $LevelSummary {
        static PLAY_WORLD: $Component;
        constructor(arg0: string, arg1: $Path_, arg2: number);
    }
    export class $LevelSummary$SymlinkLevelSummary extends $LevelSummary {
        static PLAY_WORLD: $Component;
        constructor(arg0: string, arg1: $Path_);
    }
    export class $DataVersion {
        isCompatible(arg0: $DataVersion): boolean;
        isSideSeries(): boolean;
        getSeries(): string;
        getVersion(): number;
        static MAIN_SERIES: string;
        constructor(arg0: number);
        constructor(arg0: number, arg1: string);
        get sideSeries(): boolean;
        get series(): string;
        get version(): number;
    }
    export class $DerivedLevelData implements $ServerLevelData {
        getGameTime(): number;
        isHardcore(): boolean;
        getWorldBorder(): $WorldBorder$Settings;
        getDifficulty(): $Difficulty;
        getDayTimeFraction(): number;
        getDayTime(): number;
        getGameRules(): $GameRules;
        fillCrashReportCategory(arg0: $CrashReportCategory, arg1: $LevelHeightAccessor): void;
        isThundering(): boolean;
        isRaining(): boolean;
        getSpawnPos(): $BlockPos;
        getSpawnAngle(): number;
        setDayTimeFraction(arg0: number): void;
        getDayTimePerTick(): number;
        setDayTimePerTick(arg0: number): void;
        setGameTime(arg0: number): void;
        setDayTime(arg0: number): void;
        setSpawn(arg0: $BlockPos_, arg1: number): void;
        isAllowCommands(): boolean;
        setWorldBorder(arg0: $WorldBorder$Settings): void;
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnChance(arg0: number): void;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(arg0: $UUID_): void;
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnDelay(arg0: number): void;
        getGameType(): $GameType;
        isDifficultyLocked(): boolean;
        setGameType(arg0: $GameType_): void;
        setClearWeatherTime(arg0: number): void;
        setRainTime(arg0: number): void;
        setThunderTime(arg0: number): void;
        setRaining(arg0: boolean): void;
        setThundering(arg0: boolean): void;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        getClearWeatherTime(): number;
        getThunderTime(): number;
        getRainTime(): number;
        getLevelName(): string;
        setInitialized(arg0: boolean): void;
        isInitialized(): boolean;
        constructor(arg0: $WorldData, arg1: $ServerLevelData);
        get hardcore(): boolean;
        get difficulty(): $Difficulty;
        get gameRules(): $GameRules;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get allowCommands(): boolean;
        get difficultyLocked(): boolean;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get levelName(): string;
    }
    export class $LevelStorageException extends $RuntimeException {
        getMessageComponent(): $Component;
        constructor(arg0: $Component_);
        get messageComponent(): $Component;
    }
    export class $WritableLevelData {
    }
    export interface $WritableLevelData extends $LevelData {
        setSpawn(arg0: $BlockPos_, arg1: number): void;
    }
    export class $LevelData {
    }
    export interface $LevelData {
        getGameTime(): number;
        isHardcore(): boolean;
        getDifficulty(): $Difficulty;
        getDayTime(): number;
        getGameRules(): $GameRules;
        fillCrashReportCategory(arg0: $CrashReportCategory, arg1: $LevelHeightAccessor): void;
        isThundering(): boolean;
        isRaining(): boolean;
        getSpawnPos(): $BlockPos;
        getSpawnAngle(): number;
        isDifficultyLocked(): boolean;
        setRaining(arg0: boolean): void;
        get gameTime(): number;
        get hardcore(): boolean;
        get difficulty(): $Difficulty;
        get dayTime(): number;
        get gameRules(): $GameRules;
        get thundering(): boolean;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get difficultyLocked(): boolean;
    }
    export class $DimensionDataStorage implements $AccessorMixinDimensionDataStorage, $DataStorageAccess, $DataStorageTestAccess {
        readTagFromDisk(arg0: string, arg1: $DataFixTypes_, arg2: number): $CompoundTag;
        get<T extends $SavedData>(arg0: $SavedData$Factory_<T>, arg1: string): T;
        set(arg0: string, arg1: $SavedData): void;
        computeIfAbsent<T extends $SavedData>(arg0: $SavedData$Factory_<T>, arg1: string): T;
        save(): void;
        getDataFolder(): $File;
        getCache(): $Map<string, $SavedData>;
        invokeGetDataFile(arg0: string): $File;
        dataFolder: $File;
        constructor(arg0: $File_, arg1: $DataFixer, arg2: $HolderLookup$Provider);
        get cache(): $Map<string, $SavedData>;
    }
    export class $LevelSummary$BackupStatus extends $Enum<$LevelSummary$BackupStatus> {
        shouldBackup(): boolean;
        getTranslationKey(): string;
        isSevere(): boolean;
        static values(): $LevelSummary$BackupStatus[];
        static valueOf(arg0: string): $LevelSummary$BackupStatus;
        static UPGRADE_TO_SNAPSHOT: $LevelSummary$BackupStatus;
        static DOWNGRADE: $LevelSummary$BackupStatus;
        static NONE: $LevelSummary$BackupStatus;
        get translationKey(): string;
        get severe(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LevelSummary$BackupStatus}.
     */
    export type $LevelSummary$BackupStatus_ = "none" | "downgrade" | "upgrade_to_snapshot";
    export class $LevelStorageSource$LevelStorageAccess implements $AutoCloseable {
        saveDataTag(arg0: $RegistryAccess, arg1: $WorldData, arg2: $CompoundTag_): void;
        saveDataTag(arg0: $RegistryAccess, arg1: $WorldData): void;
        getLevelId(): string;
        getLevelPath(arg0: $LevelResource): $Path;
        getIconFile(): ($Path) | undefined;
        getSummary(arg0: $Dynamic<never>): $LevelSummary;
        deleteLevel(): void;
        hasWorldData(): boolean;
        getFileModificationTime(arg0: boolean): $Instant;
        getDimensionPath(arg0: $ResourceKey_<$Level>): $Path;
        getLevelDirectory(): $LevelStorageSource$LevelDirectory;
        readAdditionalLevelSaveData(arg0: boolean): void;
        createPlayerStorage(): $PlayerDataStorage;
        getDataTag(): $Dynamic<never>;
        renameLevel(arg0: string): void;
        makeWorldBackup(): number;
        safeClose(): void;
        checkForLowDiskSpace(): boolean;
        estimateDiskSpace(): number;
        getDataTagFallback(): $Dynamic<never>;
        getWorldDir(): $Path;
        handler$hik000$xaerominimap$onDeleteLevel(arg0: $CallbackInfo): void;
        handler$icf001$xaeroworldmap$onDeleteLevel(arg0: $CallbackInfo): void;
        renameAndDropPlayer(arg0: string): void;
        restoreLevelDataFromOld(): boolean;
        parent(): $LevelStorageSource;
        close(): void;
        get levelId(): string;
        get iconFile(): ($Path) | undefined;
        get levelDirectory(): $LevelStorageSource$LevelDirectory;
        get dataTag(): $Dynamic<never>;
        get dataTagFallback(): $Dynamic<never>;
        get worldDir(): $Path;
    }
    export class $PlayerDataStorage {
        handler$kdg000$owo$onPlayerDataSaved(player: $Player, ci: $CallbackInfo, tag: $CompoundTag_): void;
        getPlayerDir(): $File;
        load(arg0: $Player): ($CompoundTag) | undefined;
        save(arg0: $Player): void;
        constructor(arg0: $LevelStorageSource$LevelStorageAccess, arg1: $DataFixer);
        get playerDir(): $File;
    }
    export class $ServerLevelData {
    }
    export interface $ServerLevelData extends $WritableLevelData {
        getWorldBorder(): $WorldBorder$Settings;
        getDayTimeFraction(): number;
        fillCrashReportCategory(arg0: $CrashReportCategory, arg1: $LevelHeightAccessor): void;
        setDayTimeFraction(arg0: number): void;
        getDayTimePerTick(): number;
        setDayTimePerTick(arg0: number): void;
        setGameTime(arg0: number): void;
        setDayTime(arg0: number): void;
        isAllowCommands(): boolean;
        setWorldBorder(arg0: $WorldBorder$Settings): void;
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnChance(arg0: number): void;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(arg0: $UUID_): void;
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnDelay(arg0: number): void;
        getGameType(): $GameType;
        setGameType(arg0: $GameType_): void;
        setClearWeatherTime(arg0: number): void;
        setRainTime(arg0: number): void;
        setThunderTime(arg0: number): void;
        setThundering(arg0: boolean): void;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        getClearWeatherTime(): number;
        getThunderTime(): number;
        getRainTime(): number;
        getLevelName(): string;
        setInitialized(arg0: boolean): void;
        isInitialized(): boolean;
        set gameTime(value: number);
        set dayTime(value: number);
        get allowCommands(): boolean;
        set thundering(value: boolean);
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get levelName(): string;
    }
    export class $LevelVersion {
        lastPlayed(): number;
        minecraftVersionName(): string;
        levelDataVersion(): number;
        minecraftVersion(): $DataVersion;
        snapshot(): boolean;
        static parse(arg0: $Dynamic<never>): $LevelVersion;
    }
    export class $LevelStorageSource {
        static parseValidator(arg0: $Path_): $DirectoryValidator;
        getLevelPath(arg0: string): $Path;
        createAccess(arg0: string): $LevelStorageSource$LevelStorageAccess;
        static readDataConfig(arg0: $Dynamic<never>): $WorldDataConfiguration;
        static getPackConfig(arg0: $Dynamic<never>, arg1: $PackRepository, arg2: boolean): $WorldLoader$PackConfig;
        static getLevelDataAndDimensions(arg0: $Dynamic<never>, arg1: $WorldDataConfiguration_, arg2: $Registry<$LevelStem_>, arg3: $RegistryAccess$Frozen): $LevelDataAndDimensions;
        findLevelCandidates(): $LevelStorageSource$LevelCandidates;
        loadLevelSummaries(arg0: $LevelStorageSource$LevelCandidates_): $CompletableFuture<$List<$LevelSummary>>;
        isNewLevelIdAcceptable(arg0: string): boolean;
        levelExists(arg0: string): boolean;
        getBaseDir(): $Path;
        getBackupPath(): $Path;
        validateAndCreateAccess(arg0: string): $LevelStorageSource$LevelStorageAccess;
        getWorldDirValidator(): $DirectoryValidator;
        static createDefault(arg0: $Path_): $LevelStorageSource;
        getName(): string;
        static ALLOWED_SYMLINKS_CONFIG_NAME: string;
        constructor(arg0: $Path_, arg1: $Path_, arg2: $DirectoryValidator, arg3: $DataFixer);
        get baseDir(): $Path;
        get backupPath(): $Path;
        get worldDirValidator(): $DirectoryValidator;
        get name(): string;
    }
    export class $PrimaryLevelData implements $ServerLevelData, $WorldData, $PrimaryLevelDataExtension {
        getGameTime(): number;
        isHardcore(): boolean;
        getWorldBorder(): $WorldBorder$Settings;
        getDifficulty(): $Difficulty;
        getDayTimeFraction(): number;
        getDayTime(): number;
        getGameRules(): $GameRules;
        fillCrashReportCategory(arg0: $CrashReportCategory, arg1: $LevelHeightAccessor): void;
        isThundering(): boolean;
        isRaining(): boolean;
        getSpawnPos(): $BlockPos;
        getSpawnAngle(): number;
        setDayTimeFraction(arg0: number): void;
        getDayTimePerTick(): number;
        setDayTimePerTick(arg0: number): void;
        setGameTime(arg0: number): void;
        setDayTime(arg0: number): void;
        setSpawn(arg0: $BlockPos_, arg1: number): void;
        getDataConfiguration(): $WorldDataConfiguration;
        setDataConfiguration(arg0: $WorldDataConfiguration_): void;
        wasModded(): boolean;
        getKnownServerBrands(): $Set<string>;
        getRemovedFeatureFlags(): $Set<string>;
        setModdedInfo(arg0: string, arg1: boolean): void;
        getCustomBossEvents(): $CompoundTag;
        setCustomBossEvents(arg0: $CompoundTag_): void;
        overworldData(): $ServerLevelData;
        getLevelSettings(): $LevelSettings;
        isAllowCommands(): boolean;
        setDifficulty(arg0: $Difficulty_): void;
        setDifficultyLocked(arg0: boolean): void;
        getLoadedPlayerTag(): $CompoundTag;
        isDebugWorld(): boolean;
        worldGenSettingsLifecycle(): $Lifecycle;
        setWorldBorder(arg0: $WorldBorder$Settings): void;
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnChance(arg0: number): void;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(arg0: $UUID_): void;
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnDelay(arg0: number): void;
        handler$jpi000$yeetusexperimentus$hasConfirmedExperimentalWarning(cir: $CallbackInfoReturnable<any>): void;
        getGameType(): $GameType;
        isDifficultyLocked(): boolean;
        setGameType(arg0: $GameType_): void;
        worldGenOptions(): $WorldOptions;
        endDragonFightData(): $EndDragonFight$Data;
        setClearWeatherTime(arg0: number): void;
        setRainTime(arg0: number): void;
        setThunderTime(arg0: number): void;
        setRaining(arg0: boolean): void;
        setThundering(arg0: boolean): void;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        getClearWeatherTime(): number;
        getThunderTime(): number;
        getRainTime(): number;
        setEndDragonFightData(arg0: $EndDragonFight$Data_): void;
        isFlatWorld(): boolean;
        getVersion(): number;
        getLevelName(): string;
        createTag(arg0: $RegistryAccess, arg1: $CompoundTag_): $CompoundTag;
        getPreset(): $ResourceLocation;
        withConfirmedWarning(arg0: boolean): $PrimaryLevelData;
        setPreset(arg0: $ResourceLocation_): void;
        setEndDragonFight(arg0: $EndDragonFight$Data_): void;
        hasConfirmedExperimentalWarning(): boolean;
        setInitialized(arg0: boolean): void;
        isInitialized(): boolean;
        static parse<T>(arg0: $Dynamic<T>, arg1: $LevelSettings, arg2: $PrimaryLevelData$SpecialWorldProperty_, arg3: $WorldOptions, arg4: $Lifecycle): $PrimaryLevelData;
        enabledFeatures(): $FeatureFlagSet;
        fillCrashReportCategory(arg0: $CrashReportCategory): void;
        getStorageVersionName(arg0: number): string;
        static LEVEL_NAME: string;
        constructor(arg0: $LevelSettings, arg1: $WorldOptions, arg2: $PrimaryLevelData$SpecialWorldProperty_, arg3: $Lifecycle);
        get hardcore(): boolean;
        get gameRules(): $GameRules;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get knownServerBrands(): $Set<string>;
        get removedFeatureFlags(): $Set<string>;
        get levelSettings(): $LevelSettings;
        get allowCommands(): boolean;
        get loadedPlayerTag(): $CompoundTag;
        get debugWorld(): boolean;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get flatWorld(): boolean;
        get version(): number;
        get levelName(): string;
        set endDragonFight(value: $EndDragonFight$Data_);
    }
    export class $LevelSummary implements $Comparable<$LevelSummary> {
        isCompatible(): boolean;
        isHardcore(): boolean;
        getLevelId(): string;
        getGameMode(): $GameType;
        canUpload(): boolean;
        levelVersion(): $LevelVersion;
        requiresManualConversion(): boolean;
        getLastPlayed(): number;
        hasCommands(): boolean;
        getWorldVersionName(): $MutableComponent;
        shouldBackup(): boolean;
        backupStatus(): $LevelSummary$BackupStatus;
        isDowngrade(): boolean;
        primaryActionMessage(): $Component;
        primaryActionActive(): boolean;
        canEdit(): boolean;
        canRecreate(): boolean;
        isExperimental(): boolean;
        isDisabled(): boolean;
        getSettings(): $LevelSettings;
        getLevelName(): string;
        isLocked(): boolean;
        getIcon(): $Path;
        getInfo(): $Component;
        canDelete(): boolean;
        compareTo(arg0: $LevelSummary): number;
        static PLAY_WORLD: $Component;
        constructor(arg0: $LevelSettings, arg1: $LevelVersion, arg2: string, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $Path_);
        get compatible(): boolean;
        get hardcore(): boolean;
        get levelId(): string;
        get gameMode(): $GameType;
        get lastPlayed(): number;
        get worldVersionName(): $MutableComponent;
        get downgrade(): boolean;
        get experimental(): boolean;
        get disabled(): boolean;
        get settings(): $LevelSettings;
        get levelName(): string;
        get locked(): boolean;
        get icon(): $Path;
        get info(): $Component;
    }
    export class $FileNameDateFormatter {
        static create(): $DateTimeFormatter;
        constructor();
    }
    export class $LevelResource implements $LevelResourceAccessor {
        static createLevelResource$platform_$md$68cb88$0(arg0: string): $LevelResource;
        getId(): string;
        static PLAYER_ADVANCEMENTS_DIR: $LevelResource;
        static PLAYER_OLD_DATA_DIR: $LevelResource;
        static GENERATED_DIR: $LevelResource;
        static LEVEL_DATA_FILE: $LevelResource;
        static MAP_RESOURCE_FILE: $LevelResource;
        static ROOT: $LevelResource;
        static ICON_FILE: $LevelResource;
        static LOCK_FILE: $LevelResource;
        static OLD_LEVEL_DATA_FILE: $LevelResource;
        static PLAYER_STATS_DIR: $LevelResource;
        static PLAYER_DATA_DIR: $LevelResource;
        static DATAPACK_DIR: $LevelResource;
        constructor(arg0: string);
        get id(): string;
    }
    /**
     * @deprecated
     */
    export class $PrimaryLevelData$SpecialWorldProperty extends $Enum<$PrimaryLevelData$SpecialWorldProperty> {
        static values(): $PrimaryLevelData$SpecialWorldProperty[];
        static valueOf(arg0: string): $PrimaryLevelData$SpecialWorldProperty;
        static FLAT: $PrimaryLevelData$SpecialWorldProperty;
        static NONE: $PrimaryLevelData$SpecialWorldProperty;
        static DEBUG: $PrimaryLevelData$SpecialWorldProperty;
    }
    /**
     * Values that may be interpreted as {@link $PrimaryLevelData$SpecialWorldProperty}.
     */
    export type $PrimaryLevelData$SpecialWorldProperty_ = "none" | "flat" | "debug";
    export class $LevelStorageSource$LevelCandidates extends $Record implements $Iterable<$LevelStorageSource$LevelDirectory> {
        levels(): $List<$LevelStorageSource$LevelDirectory>;
        isEmpty(): boolean;
        iterator(): $Iterator<$LevelStorageSource$LevelDirectory>;
        spliterator(): $Spliterator<$LevelStorageSource$LevelDirectory>;
        forEach(arg0: $Consumer_<$LevelStorageSource$LevelDirectory>): void;
        constructor(levels: $List_<$LevelStorageSource$LevelDirectory_>);
        [Symbol.iterator](): Iterator<$LevelStorageSource$LevelDirectory>
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LevelStorageSource$LevelCandidates}.
     */
    export type $LevelStorageSource$LevelCandidates_ = { levels?: $List_<$LevelStorageSource$LevelDirectory_>,  } | [levels?: $List_<$LevelStorageSource$LevelDirectory_>, ];
}
