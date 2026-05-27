import { $CollisionGetter, $PathNavigationRegion, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $BlockPos$MutableBlockPos } from "@package/net/minecraft/core";
import { $PathExtension } from "@package/dev/ryanhcode/sable/mixinterface/entity/pathfinding";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $List, $Set, $Set_, $List_ } from "@package/java/util";
import { $Enum, $Record } from "@package/java/lang";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/pathfinder" {
    export class $BinaryHeap {
        getHeap(): $Node[];
        changeCost(arg0: $Node, arg1: number): void;
        pop(): $Node;
        peek(): $Node;
        remove(arg0: $Node): void;
        size(): number;
        insert(arg0: $Node): $Node;
        clear(): void;
        isEmpty(): boolean;
        constructor();
        get heap(): $Node[];
        get empty(): boolean;
    }
    export class $Path$DebugData extends $Record {
        targetNodes(): $Set<$Target>;
        closedSet(): $Node[];
        openSet(): $Node[];
        write(arg0: $FriendlyByteBuf): void;
        static read(arg0: $FriendlyByteBuf): $Path$DebugData;
        constructor(arg0: $Node[], arg1: $Node[], arg2: $Set_<$Target>);
    }
    /**
     * Values that may be interpreted as {@link $Path$DebugData}.
     */
    export type $Path$DebugData_ = { closedSet?: $Node[], openSet?: $Node[], targetNodes?: $Set_<$Target>,  } | [closedSet?: $Node[], openSet?: $Node[], targetNodes?: $Set_<$Target>, ];
    export class $AmphibiousNodeEvaluator extends $WalkNodeEvaluator {
        entityHeight: number;
        entityDepth: number;
        currentContext: $PathfindingContext;
        static SPACE_BETWEEN_WALL_POSTS: number;
        entityWidth: number;
        constructor(arg0: boolean);
    }
    export class $PathComputationType extends $Enum<$PathComputationType> {
        static values(): $PathComputationType[];
        static valueOf(arg0: string): $PathComputationType;
        static LAND: $PathComputationType;
        static AIR: $PathComputationType;
        static WATER: $PathComputationType;
    }
    /**
     * Values that may be interpreted as {@link $PathComputationType}.
     */
    export type $PathComputationType_ = "land" | "water" | "air";
    export class $Target extends $Node {
        setReached(): void;
        updateBest(arg0: number, arg1: $Node): void;
        getBestNode(): $Node;
        isReached(): boolean;
        static createFromStream(arg0: $FriendlyByteBuf): $Target;
        cameFrom: $Node;
        f: number;
        g: number;
        x: number;
        h: number;
        y: number;
        closed: boolean;
        z: number;
        walkedDistance: number;
        costMalus: number;
        type: $PathType;
        heapIdx: number;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: $Node);
        get bestNode(): $Node;
    }
    export class $PathTypeCache {
        invalidate(arg0: $BlockPos_): void;
        getOrCompute(arg0: $BlockGetter, arg1: $BlockPos_): $PathType;
        constructor();
    }
    export class $PathfindingContext {
        getBlockState(arg0: $BlockPos_): $BlockState;
        mobPosition(): $BlockPos;
        getPathTypeFromState(arg0: number, arg1: number, arg2: number): $PathType;
        level(): $CollisionGetter;
        constructor(arg0: $CollisionGetter, arg1: $Mob);
    }
    export class $PathFinder {
        findPath(arg0: $PathNavigationRegion, arg1: $Mob, arg2: $Set_<$BlockPos_>, arg3: number, arg4: number, arg5: number): $Path;
        constructor(arg0: $NodeEvaluator, arg1: number);
    }
    export class $NodeEvaluator {
        canWalkOverFences(): boolean;
        getPathTypeOfMob(arg0: $PathfindingContext, arg1: number, arg2: number, arg3: number, arg4: $Mob): $PathType;
        static isBurningBlock(arg0: $BlockState_): boolean;
        canFloat(): boolean;
        setCanOpenDoors(arg0: boolean): void;
        setCanFloat(arg0: boolean): void;
        setCanPassDoors(arg0: boolean): void;
        canPassDoors(): boolean;
        canOpenDoors(): boolean;
        setCanWalkOverFences(arg0: boolean): void;
        getPathType(arg0: $Mob, arg1: $BlockPos_): $PathType;
        getPathType(arg0: $PathfindingContext, arg1: number, arg2: number, arg3: number): $PathType;
        getStart(): $Node;
        getNeighbors(arg0: $Node[], arg1: $Node): number;
        prepare(arg0: $PathNavigationRegion, arg1: $Mob): void;
        getTarget(arg0: number, arg1: number, arg2: number): $Target;
        done(): void;
        entityHeight: number;
        entityDepth: number;
        currentContext: $PathfindingContext;
        entityWidth: number;
        constructor();
        get start(): $Node;
    }
    export class $PathType extends $Enum<$PathType> {
        getMalus(): number;
        static values(): $PathType[];
        static valueOf(arg0: string): $PathType;
        static LAVA: $PathType;
        static DANGER_POWDER_SNOW: $PathType;
        static LEAVES: $PathType;
        static BLOCKED: $PathType;
        static WALKABLE: $PathType;
        static TRAPDOOR: $PathType;
        static BREACH: $PathType;
        static POWDER_SNOW: $PathType;
        static DOOR_WOOD_CLOSED: $PathType;
        static DANGER_TRAPDOOR: $PathType;
        static DANGER_FIRE: $PathType;
        static DAMAGE_FIRE: $PathType;
        static WATER: $PathType;
        static WATER_BORDER: $PathType;
        static WALKABLE_DOOR: $PathType;
        static DOOR_IRON_CLOSED: $PathType;
        static FENCE: $PathType;
        static OPEN: $PathType;
        static RAIL: $PathType;
        static DAMAGE_OTHER: $PathType;
        static DOOR_OPEN: $PathType;
        static UNPASSABLE_RAIL: $PathType;
        static COCOA: $PathType;
        static DANGER_OTHER: $PathType;
        static STICKY_HONEY: $PathType;
        static DAMAGE_CAUTIOUS: $PathType;
        get malus(): number;
    }
    /**
     * Values that may be interpreted as {@link $PathType}.
     */
    export type $PathType_ = "blocked" | "open" | "walkable" | "walkable_door" | "trapdoor" | "powder_snow" | "danger_powder_snow" | "fence" | "lava" | "water" | "water_border" | "rail" | "unpassable_rail" | "danger_fire" | "damage_fire" | "danger_other" | "damage_other" | "door_open" | "door_wood_closed" | "door_iron_closed" | "breach" | "leaves" | "sticky_honey" | "cocoa" | "damage_cautious" | "danger_trapdoor";
    export class $SwimNodeEvaluator extends $NodeEvaluator {
        entityHeight: number;
        entityDepth: number;
        currentContext: $PathfindingContext;
        entityWidth: number;
        constructor(arg0: boolean);
    }
    export class $Node {
        distanceTo(arg0: $BlockPos_): number;
        distanceTo(arg0: $Node): number;
        distanceToSqr(arg0: $Node): number;
        distanceToSqr(arg0: $BlockPos_): number;
        asVec3(): $Vec3;
        asBlockPos(): $BlockPos;
        distanceToXZ(arg0: $Node): number;
        distanceManhattan(arg0: $Node): number;
        distanceManhattan(arg0: $BlockPos_): number;
        cloneAndMove(arg0: number, arg1: number, arg2: number): $Node;
        inOpenSet(): boolean;
        writeToStream(arg0: $FriendlyByteBuf): void;
        static createFromStream(arg0: $FriendlyByteBuf): $Node;
        static createHash(arg0: number, arg1: number, arg2: number): number;
        cameFrom: $Node;
        f: number;
        g: number;
        x: number;
        h: number;
        y: number;
        closed: boolean;
        z: number;
        walkedDistance: number;
        costMalus: number;
        type: $PathType;
        heapIdx: number;
        constructor(arg0: number, arg1: number, arg2: number);
    }
    export class $FlyNodeEvaluator extends $WalkNodeEvaluator {
        entityHeight: number;
        entityDepth: number;
        currentContext: $PathfindingContext;
        static SPACE_BETWEEN_WALL_POSTS: number;
        entityWidth: number;
        constructor();
    }
    export class $WalkNodeEvaluator extends $NodeEvaluator {
        static getPathTypeFromState(arg0: $BlockGetter, arg1: $BlockPos_): $PathType;
        static checkNeighbourBlocks(arg0: $PathfindingContext, arg1: number, arg2: number, arg3: number, arg4: $PathType_): $PathType;
        getPathTypeWithinMobBB(arg0: $PathfindingContext, arg1: number, arg2: number, arg3: number): $Set<$PathType>;
        static getFloorLevel(arg0: $BlockGetter, arg1: $BlockPos_): number;
        static getPathTypeStatic(arg0: $PathfindingContext, arg1: $BlockPos$MutableBlockPos): $PathType;
        static getPathTypeStatic(arg0: $Mob, arg1: $BlockPos_): $PathType;
        entityHeight: number;
        entityDepth: number;
        currentContext: $PathfindingContext;
        static SPACE_BETWEEN_WALL_POSTS: number;
        entityWidth: number;
        constructor();
    }
    export class $Path implements $PathExtension {
        setDebug(arg0: $Node[], arg1: $Node[], arg2: $Set_<$Target>): void;
        setNextNodeIndex(arg0: number): void;
        getEntityPosAtNode(arg0: $Entity, arg1: number): $Vec3;
        getDistToTarget(): number;
        notStarted(): boolean;
        getPreviousNode(): $Node;
        canReach(): boolean;
        getEndNode(): $Node;
        sameAs(arg0: $Path): boolean;
        getNodeCount(): number;
        getNextEntityPos(arg0: $Entity): $Vec3;
        getNextNodePos(): $BlockPos;
        getNextNode(): $Node;
        getNextNodeIndex(): number;
        getNodePos(arg0: number): $BlockPos;
        sable$setLocalPath(arg0: $Level_, arg1: boolean): void;
        truncateNodes(arg0: number): void;
        debugData(): $Path$DebugData;
        writeToStream(arg0: $FriendlyByteBuf): void;
        static createFromStream(arg0: $FriendlyByteBuf): $Path;
        getTarget(): $BlockPos;
        advance(): void;
        replaceNode(arg0: number, arg1: $Node): void;
        getNode(arg0: number): $Node;
        isDone(): boolean;
        copy(): $Path;
        nodes: $List<$Node>;
        constructor(arg0: $List_<$Node>, arg1: $BlockPos_, arg2: boolean);
        get distToTarget(): number;
        get previousNode(): $Node;
        get endNode(): $Node;
        get nodeCount(): number;
        get nextNodePos(): $BlockPos;
        get nextNode(): $Node;
        get target(): $BlockPos;
        get done(): boolean;
    }
}
