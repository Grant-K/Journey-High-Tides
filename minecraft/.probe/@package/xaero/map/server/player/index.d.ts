import { $SyncedTrackedPlayer } from "@package/xaero/map/server/radar/tracker";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $UUID_, $Set, $UUID } from "@package/java/util";
import { $Object } from "@package/java/lang";

declare module "@package/xaero/map/server/player" {
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
        getXaeroWorldMapPlayerData(): $ServerPlayerData;
        setXaeroWorldMapPlayerData(arg0: $ServerPlayerData): void;
    }
}
