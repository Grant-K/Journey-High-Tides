import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $UUID_, $Set, $UUID } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $SyncedTrackedPlayer } from "@package/xaero/common/server/radar/tracker";

declare module "@package/xaero/common/server/player" {
    export class $ServerPlayerTickHandler {
        tick(arg0: $ServerPlayer): void;
        constructor();
    }
    export class $ServerPlayerData {
        hasMod(): boolean;
        getLastSyncedData(): $SyncedTrackedPlayer;
        ensureLastSyncedData(): $SyncedTrackedPlayer;
        getCurrentlySyncedPlayers(): $Set<$UUID>;
        getLastTrackedPlayerSync(): number;
        setLastTrackedPlayerSync(arg0: number): void;
        setClientModNetworkVersion(arg0: number): void;
        getClientModNetworkVersion(): number;
        setOpacData(arg0: $Object): void;
        ensureCurrentlySyncedPlayers(): $Set<$UUID>;
        getOpacData(): $Object;
        static get(arg0: $ServerPlayer): $ServerPlayerData;
        constructor(arg0: $UUID_);
        get lastSyncedData(): $SyncedTrackedPlayer;
        get currentlySyncedPlayers(): $Set<$UUID>;
    }
    export class $IServerPlayer {
    }
    export interface $IServerPlayer {
        getXaeroMinimapPlayerData(): $ServerPlayerData;
        setXaeroMinimapPlayerData(arg0: $ServerPlayerData): void;
    }
}
