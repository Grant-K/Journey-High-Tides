import { $Level_, $ItemLike_ } from "@package/net/minecraft/world/level";
import { $IEnergyService } from "@package/appeng/api/networking/energy";
import { $GridEvent } from "@package/appeng/api/networking/events";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $IStorageService } from "@package/appeng/api/networking/storage";
import { $ISpatialService } from "@package/appeng/api/networking/spatial";
import { $IPathingService } from "@package/appeng/api/networking/pathing";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UUID, $List, $Map, $Set, $Set_ } from "@package/java/util";
import { $ICraftingService } from "@package/appeng/api/networking/crafting";
import { $AEItemKey } from "@package/appeng/api/stacks";
import { $AEColor_, $AEColor } from "@package/appeng/api/util";
import { $Consumer_, $BiConsumer_ } from "@package/java/util/function";
import { $ITickManager } from "@package/appeng/api/networking/ticking";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Enum, $Object, $Iterable, $Class } from "@package/java/lang";
import { $JsonWriter } from "@package/com/google/gson/stream";
export * as crafting from "@package/appeng/api/networking/crafting";
export * as energy from "@package/appeng/api/networking/energy";
export * as storage from "@package/appeng/api/networking/storage";
export * as security from "@package/appeng/api/networking/security";
export * as pathing from "@package/appeng/api/networking/pathing";
export * as spatial from "@package/appeng/api/networking/spatial";
export * as events from "@package/appeng/api/networking/events";
export * as ticking from "@package/appeng/api/networking/ticking";

declare module "@package/appeng/api/networking" {
    export class $IManagedGridNode {
    }
    export interface $IManagedGridNode {
        isReady(): boolean;
        getGrid(): $IGrid;
        isPowered(): boolean;
        isOnline(): boolean;
        setIdlePowerUsage(arg0: number): $IManagedGridNode;
        setExposedOnSides(arg0: $Set_<$Direction_>): $IManagedGridNode;
        setOwningPlayer(arg0: $Player): void;
        setVisualRepresentation(arg0: $ItemLike_): $IManagedGridNode;
        setVisualRepresentation(arg0: $AEItemKey): $IManagedGridNode;
        setVisualRepresentation(arg0: $ItemStack_): $IManagedGridNode;
        setInWorldNode(arg0: boolean): $IManagedGridNode;
        loadFromNBT(arg0: $CompoundTag_): void;
        saveToNBT(arg0: $CompoundTag_): void;
        setTagName(arg0: string): $IManagedGridNode;
        setOwningPlayerId(arg0: number): void;
        hasGridBooted(): boolean;
        setGridColor(arg0: $AEColor_): $IManagedGridNode;
        create(arg0: $Level_, arg1: $BlockPos_): void;
        isActive(): boolean;
        getNode(): $IGridNode;
        ifPresent(arg0: $Consumer_<$IGrid>): boolean;
        ifPresent(arg0: $BiConsumer_<$IGrid, $IGridNode>): boolean;
        addService<T extends $IGridNodeService>(arg0: $Class<T>, arg1: T): $IManagedGridNode;
        setFlags(...arg0: $GridFlags_[]): $IManagedGridNode;
        destroy(): void;
        get ready(): boolean;
        get grid(): $IGrid;
        get powered(): boolean;
        get online(): boolean;
        set idlePowerUsage(value: number);
        set exposedOnSides(value: $Set_<$Direction_>);
        set owningPlayer(value: $Player);
        set inWorldNode(value: boolean);
        set tagName(value: string);
        set owningPlayerId(value: number);
        set gridColor(value: $AEColor_);
        get active(): boolean;
        get node(): $IGridNode;
        set flags(value: $GridFlags_[]);
    }
    export class $IGridNode {
    }
    export interface $IGridNode {
        hasFlag(arg0: $GridFlags_): boolean;
        fillCrashReportCategory(arg0: $CrashReportCategory): void;
        getGrid(): $IGrid;
        isPowered(): boolean;
        getLevel(): $ServerLevel;
        getService<T extends $IGridNodeService>(arg0: $Class<T>): T;
        isOnline(): boolean;
        getOwningPlayerId(): number;
        meetsChannelRequirements(): boolean;
        beginVisit(arg0: $IGridVisitor_): void;
        getConnectedSides(): $Set<$Direction>;
        getInWorldConnections(): $Map<$Direction, $IGridConnection>;
        getOwningPlayerProfileId(): $UUID;
        getIdlePowerUsage(): number;
        getVisualRepresentation(): $AEItemKey;
        getGridColor(): $AEColor;
        getMaxChannels(): number;
        getUsedChannels(): number;
        hasGridBooted(): boolean;
        isActive(): boolean;
        getOwner(): $Object;
        getConnections(): $List<$IGridConnection>;
        get grid(): $IGrid;
        get powered(): boolean;
        get level(): $ServerLevel;
        get online(): boolean;
        get owningPlayerId(): number;
        get connectedSides(): $Set<$Direction>;
        get inWorldConnections(): $Map<$Direction, $IGridConnection>;
        get owningPlayerProfileId(): $UUID;
        get idlePowerUsage(): number;
        get visualRepresentation(): $AEItemKey;
        get gridColor(): $AEColor;
        get maxChannels(): number;
        get usedChannels(): number;
        get active(): boolean;
        get owner(): $Object;
        get connections(): $List<$IGridConnection>;
    }
    export class $IGridVisitor {
    }
    export interface $IGridVisitor {
        visitNode(arg0: $IGridNode): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IGridVisitor}.
     */
    export type $IGridVisitor_ = ((arg0: $IGridNode) => boolean);
    export class $IGridService {
    }
    export interface $IGridService {
    }
    export class $IGrid {
    }
    export interface $IGrid {
        postEvent<T extends $GridEvent>(arg0: T): T;
        getNodes(): $Iterable<$IGridNode>;
        export(arg0: $JsonWriter): void;
        getService<C extends $IGridService>(arg0: $Class<C>): C;
        getPivot(): $IGridNode;
        getMachineClasses(): $Iterable<$Class<never>>;
        getMachineNodes(arg0: $Class<never>): $Iterable<$IGridNode>;
        getMachines<T>(arg0: $Class<T>): $Set<T>;
        getActiveMachines<T>(arg0: $Class<T>): $Set<T>;
        getTickManager(): $ITickManager;
        getStorageService(): $IStorageService;
        getEnergyService(): $IEnergyService;
        getCraftingService(): $ICraftingService;
        getPathingService(): $IPathingService;
        getSpatialService(): $ISpatialService;
        size(): number;
        isEmpty(): boolean;
        get nodes(): $Iterable<$IGridNode>;
        get pivot(): $IGridNode;
        get machineClasses(): $Iterable<$Class<never>>;
        get tickManager(): $ITickManager;
        get storageService(): $IStorageService;
        get energyService(): $IEnergyService;
        get craftingService(): $ICraftingService;
        get pathingService(): $IPathingService;
        get spatialService(): $ISpatialService;
        get empty(): boolean;
    }
    export class $IGridNodeService {
    }
    export interface $IGridNodeService {
    }
    export class $IGridConnection {
    }
    export interface $IGridConnection {
        getDirection(arg0: $IGridNode): $Direction;
        isInWorld(): boolean;
        getOtherSide(arg0: $IGridNode): $IGridNode;
        getUsedChannels(): number;
        b(): $IGridNode;
        a(): $IGridNode;
        destroy(): void;
        get inWorld(): boolean;
        get usedChannels(): number;
    }
    export class $GridFlags extends $Enum<$GridFlags> {
        static values(): $GridFlags[];
        static valueOf(arg0: string): $GridFlags;
        static COMPRESSED_CHANNEL: $GridFlags;
        static CANNOT_CARRY_COMPRESSED: $GridFlags;
        static CANNOT_CARRY: $GridFlags;
        static DENSE_CAPACITY: $GridFlags;
        static PREFERRED: $GridFlags;
        static MULTIBLOCK: $GridFlags;
        static REQUIRE_CHANNEL: $GridFlags;
    }
    /**
     * Values that may be interpreted as {@link $GridFlags}.
     */
    export type $GridFlags_ = "require_channel" | "compressed_channel" | "cannot_carry" | "cannot_carry_compressed" | "dense_capacity" | "multiblock" | "preferred";
}
