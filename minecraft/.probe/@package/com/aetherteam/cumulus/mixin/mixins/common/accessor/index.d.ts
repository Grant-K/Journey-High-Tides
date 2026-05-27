import { $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $UUID } from "@package/java/util";
import { $LanServerPinger } from "@package/net/minecraft/client/server";

declare module "@package/com/aetherteam/cumulus/mixin/mixins/common/accessor" {
    export class $MinecraftServerAccessor {
    }
    export interface $MinecraftServerAccessor {
        cumulus$getStorageSource(): $LevelStorageSource$LevelStorageAccess;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftServerAccessor}.
     */
    export type $MinecraftServerAccessor_ = (() => $LevelStorageSource$LevelStorageAccess);
    export class $IntegratedServerAccessor {
    }
    export interface $IntegratedServerAccessor {
        cumulus$setPublishedPort(arg0: number): void;
        cumulus$getLanPinger(): $LanServerPinger;
        cumulus$setLanPinger(arg0: $LanServerPinger): void;
        cumulus$getUUID(): $UUID;
    }
}
