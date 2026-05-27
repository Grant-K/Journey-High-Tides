import { $MinimapWorldConnectionManager } from "@package/xaero/hud/minimap/world/connection";
import { $WaypointsSort_, $WaypointsSort } from "@package/xaero/common/minimap/waypoints";
export * as io from "@package/xaero/hud/minimap/world/container/config/io";

declare module "@package/xaero/hud/minimap/world/container/config" {
    export class $RootConfig {
        isTeleportationEnabled(): boolean;
        isSortReversed(): boolean;
        setUsingMultiworldDetection(arg0: boolean): void;
        isUsingMultiworldDetection(): boolean;
        getDefaultMultiworldId(): string;
        setDefaultMultiworldId(arg0: string): void;
        setTeleportationEnabled(arg0: boolean): void;
        isUsingDefaultTeleportCommand(): boolean;
        setUsingDefaultTeleportCommand(arg0: boolean): void;
        getServerTeleportCommandFormat(): string;
        getServerTeleportCommandRotationFormat(): string;
        setServerTeleportCommandFormat(arg0: string): void;
        setServerTeleportCommandRotationFormat(arg0: string): void;
        toggleSortType(): void;
        setSortReversed(arg0: boolean): void;
        toggleSortReversed(): void;
        isIgnoreServerLevelId(): boolean;
        setIgnoreServerLevelId(arg0: boolean): void;
        resetSubWorldConnections(arg0: boolean): void;
        getSubWorldConnections(): $MinimapWorldConnectionManager;
        getSortType(): $WaypointsSort;
        setSortType(arg0: $WaypointsSort_): void;
        setLoaded(arg0: boolean): void;
        setIgnoreHeightmaps(arg0: boolean): void;
        isIgnoreHeightmaps(): boolean;
        isLoaded(): boolean;
        loaded: boolean;
        constructor(arg0: boolean);
        get subWorldConnections(): $MinimapWorldConnectionManager;
    }
}
