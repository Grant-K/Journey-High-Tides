import { $DataPackConfig, $LevelSettings, $GameType } from "@package/net/minecraft/world/level";
import { $JsonObject_ } from "@package/com/google/gson";
import { $File } from "@package/java/io";
import { $MinecraftServer$ServerResourcePackInfo, $ServerInterface, $WorldStem_, $MinecraftServer$ReloadableResources, $RegistryLayer_, $MinecraftServer, $Services_ } from "@package/net/minecraft/server";
import { $Component } from "@package/net/minecraft/network/chat";
import { $PlayerList } from "@package/net/minecraft/server/players";
import { $Properties } from "@package/java/util";
import { $PlayerDataStorage, $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $UnaryOperator_, $Supplier } from "@package/java/util/function";
import { $ChunkProgressListenerFactory_ } from "@package/net/minecraft/server/level/progress";
import { $Difficulty } from "@package/net/minecraft/world";
import { $SampleLogger } from "@package/net/minecraft/util/debugchart";
import { $RegistryAccess, $LayeredRegistryAccess } from "@package/net/minecraft/core";
import { $Path_ } from "@package/java/nio/file";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $Thread, $Record, $Runnable } from "@package/java/lang";
import { $DedicatedServerAccessor, $SettingsAccessor } from "@package/com/teamresourceful/resourcefulconfig/mixins/common";
import { $WorldDimensions, $WorldOptions } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/net/minecraft/server/dedicated" {
    export class $Settings<T extends $Settings<T>> implements $SettingsAccessor {
        static loadFromFile(arg0: $Path_): $Properties;
        store(arg0: $Path_): void;
        invokeGetStringRaw(arg0: string): string;
        invokeCloneProperties(): $Properties;
        constructor(arg0: $Properties);
    }
    export class $DedicatedServerSettings {
        forceSave(): void;
        update(arg0: $UnaryOperator_<$DedicatedServerProperties>): $DedicatedServerSettings;
        getProperties(): $DedicatedServerProperties;
        constructor(arg0: $Path_);
        get properties(): $DedicatedServerProperties;
    }
    export class $DedicatedServerProperties$WorldDimensionData extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $DedicatedServerProperties$WorldDimensionData}.
     */
    export type $DedicatedServerProperties$WorldDimensionData_ = { generatorSettings?: $JsonObject_, levelType?: string,  } | [generatorSettings?: $JsonObject_, levelType?: string, ];
    export class $ServerWatchdog implements $Runnable {
        run(): void;
        constructor(arg0: $DedicatedServer);
    }
    export class $DedicatedPlayerList extends $PlayerList {
        static WHITELIST_FILE: $File;
        playerIo: $PlayerDataStorage;
        static USERBANLIST_FILE: $File;
        static IPBANLIST_FILE: $File;
        static OPLIST_FILE: $File;
        static CHAT_FILTERED_FULL: $Component;
        static DUPLICATE_LOGIN_DISCONNECT_MESSAGE: $Component;
        constructor(arg0: $DedicatedServer, arg1: $LayeredRegistryAccess<$RegistryLayer_>, arg2: $PlayerDataStorage);
    }
    export class $Settings$MutableValue<V> implements $Supplier<V> {
        get(): V;
        update(arg0: $RegistryAccess, arg1: V): V;
    }
    export class $DedicatedServer extends $MinecraftServer implements $ServerInterface, $DedicatedServerAccessor {
        initServer(): boolean;
        runCommand(arg0: string): string;
        forceDifficulty(): void;
        getTickTimeLogger(): $SampleLogger;
        getLevelIdName(): string;
        getMaxTickLength(): number;
        getServerPort(): number;
        handleConsoleInputs(): void;
        handleConsoleInput(arg0: string, arg1: $CommandSourceStack): void;
        getServerIp(): string;
        getPluginNames(): string;
        storeUsingWhiteList(arg0: boolean): void;
        getServerName(): string;
        showGui(): void;
        getProperties(): $DedicatedServerProperties;
        getSettings(): $DedicatedServerSettings;
        static VANILLA_BRAND: string;
        static ANONYMOUS_PLAYER_PROFILE: $GameProfile;
        resources: $MinecraftServer$ReloadableResources;
        storageSource: $LevelStorageSource$LevelStorageAccess;
        static ABSOLUTE_MAX_WORLD_SIZE: number;
        static DEMO_SETTINGS: $LevelSettings;
        constructor(arg0: $Thread, arg1: $LevelStorageSource$LevelStorageAccess, arg2: $PackRepository, arg3: $WorldStem_, arg4: $DedicatedServerSettings, arg5: $DataFixer, arg6: $Services_, arg7: $ChunkProgressListenerFactory_);
        get tickTimeLogger(): $SampleLogger;
        get levelIdName(): string;
        get maxTickLength(): number;
        get serverPort(): number;
        get serverIp(): string;
        get pluginNames(): string;
        get serverName(): string;
        get properties(): $DedicatedServerProperties;
        get settings(): $DedicatedServerSettings;
    }
    export class $DedicatedServerProperties extends $Settings<$DedicatedServerProperties> {
        createDimensions(arg0: $RegistryAccess): $WorldDimensions;
        static fromFile(arg0: $Path_): $DedicatedServerProperties;
        onlineMode: boolean;
        opPermissionLevel: number;
        allowNether: boolean;
        regionFileComression: string;
        useNativeTransport: boolean;
        maxChainedNeighborUpdates: number;
        spawnNpcs: boolean;
        serverResourcePackInfo: ($MinecraftServer$ServerResourcePackInfo) | undefined;
        gamemode: $GameType;
        broadcastConsoleToOps: boolean;
        functionPermissionLevel: number;
        enableQuery: boolean;
        spawnAnimals: boolean;
        maxTickTime: number;
        entityBroadcastRangePercentage: number;
        forceGameMode: boolean;
        announcePlayerAchievements: boolean;
        rconPort: number;
        enforceSecureProfile: boolean;
        acceptsTransfers: boolean;
        motd: string;
        queryPort: number;
        maxPlayers: number;
        enableRcon: boolean;
        worldOptions: $WorldOptions;
        pvp: boolean;
        bugReportLink: string;
        rateLimitPacketsPerSecond: number;
        difficulty: $Difficulty;
        networkCompressionThreshold: number;
        maxWorldSize: number;
        whiteList: $Settings$MutableValue<boolean>;
        rconPassword: string;
        enableStatus: boolean;
        viewDistance: number;
        spawnProtection: number;
        hideOnlinePlayers: boolean;
        serverPort: number;
        allowFlight: boolean;
        broadcastRconToOps: boolean;
        enableJmxMonitoring: boolean;
        textFilteringConfig: string;
        preventProxyConnections: boolean;
        spawnMonsters: boolean;
        enforceWhitelist: boolean;
        syncChunkWrites: boolean;
        hardcore: boolean;
        playerIdleTimeout: $Settings$MutableValue<number>;
        levelName: string;
        initialDataPackConfiguration: $DataPackConfig;
        serverIp: string;
        simulationDistance: number;
        enableCommandBlock: boolean;
        logIPs: boolean;
        constructor(arg0: $Properties);
    }
}
