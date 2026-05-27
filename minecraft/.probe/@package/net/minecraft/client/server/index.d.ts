import { $LevelSettings } from "@package/net/minecraft/world/level";
import { $File } from "@package/java/io";
import { $WorldStem_, $MinecraftServer$ReloadableResources, $RegistryLayer_, $MinecraftServer, $Services_ } from "@package/net/minecraft/server";
import { $GlobalSavedSubLevelPointer_ } from "@package/dev/ryanhcode/sable/sublevel/storage/holding";
import { $Component } from "@package/net/minecraft/network/chat";
import { $SubLevelData } from "@package/dev/ryanhcode/sable/sublevel/storage/serialization";
import { $PlayerList } from "@package/net/minecraft/server/players";
import { $Minecraft } from "@package/net/minecraft/client";
import { $UUID, $List, $UUID_ } from "@package/java/util";
import { $ServerSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $PlayerDataStorage, $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $ChunkProgressListenerFactory_ } from "@package/net/minecraft/server/level/progress";
import { $LayeredRegistryAccess } from "@package/net/minecraft/core";
import { $IDeferrableIntegratedServer } from "@package/org/embeddedt/modernfix/duck/suspend_integrated_server_during_load";
import { $InetAddress } from "@package/java/net";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $IntegratedServerAccessor } from "@package/com/aetherteam/cumulus/mixin/mixins/common/accessor";
import { $Thread } from "@package/java/lang";
import { $SableToastableServer } from "@package/dev/ryanhcode/sable/mixinterface/toast";

declare module "@package/net/minecraft/client/server" {
    export class $LanServerDetection$LanServerList {
        addServer(arg0: string, arg1: $InetAddress): void;
        takeDirtyServers(): $List<$LanServer>;
        constructor();
    }
    export class $IntegratedPlayerList extends $PlayerList {
        static WHITELIST_FILE: $File;
        playerIo: $PlayerDataStorage;
        static USERBANLIST_FILE: $File;
        static IPBANLIST_FILE: $File;
        static OPLIST_FILE: $File;
        static CHAT_FILTERED_FULL: $Component;
        static DUPLICATE_LOGIN_DISCONNECT_MESSAGE: $Component;
        constructor(arg0: $IntegratedServer, arg1: $LayeredRegistryAccess<$RegistryLayer_>, arg2: $PlayerDataStorage);
    }
    export class $LanServerDetection {
        constructor();
    }
    export class $IntegratedServer extends $MinecraftServer implements $IDeferrableIntegratedServer, $IntegratedServerAccessor, $SableToastableServer {
        setUUID(arg0: $UUID_): void;
        mfix$markClientLoadFinished(): void;
        initServer(): boolean;
        sable$reportSubLevelPhysicsFailure(arg0: $ServerSubLevel): void;
        sable$reportSubLevelLoadFailure(arg0: $GlobalSavedSubLevelPointer_): void;
        sable$reportSubLevelSaveFailure(arg0: $SubLevelData): void;
        cumulus$setPublishedPort(arg0: number): void;
        cumulus$getLanPinger(): $LanServerPinger;
        cumulus$setLanPinger(arg0: $LanServerPinger): void;
        cumulus$getUUID(): $UUID;
        static VANILLA_BRAND: string;
        static ANONYMOUS_PLAYER_PROFILE: $GameProfile;
        resources: $MinecraftServer$ReloadableResources;
        storageSource: $LevelStorageSource$LevelStorageAccess;
        static ABSOLUTE_MAX_WORLD_SIZE: number;
        static DEMO_SETTINGS: $LevelSettings;
        constructor(arg0: $Thread, arg1: $Minecraft, arg2: $LevelStorageSource$LevelStorageAccess, arg3: $PackRepository, arg4: $WorldStem_, arg5: $Services_, arg6: $ChunkProgressListenerFactory_);
        set UUID(value: $UUID_);
    }
    export class $LanServer {
        getMotd(): string;
        updatePingTime(): void;
        getAddress(): string;
        constructor(arg0: string, arg1: string);
        get motd(): string;
        get address(): string;
    }
    export class $LanServerPinger extends $Thread {
        static createPingString(arg0: string, arg1: string): string;
        static parseMotd(arg0: string): string;
        static parseAddress(arg0: string): string;
        static MULTICAST_GROUP: string;
        static PING_PORT: number;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: string, arg1: string);
    }
    export class $LanServerDetection$LanServerDetector extends $Thread {
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $LanServerDetection$LanServerList);
    }
}
