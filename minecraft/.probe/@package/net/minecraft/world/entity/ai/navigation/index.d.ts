import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Path, $PathType_, $NodeEvaluator } from "@package/net/minecraft/world/level/pathfinder";
import { $Stream } from "@package/java/util/stream";
import { $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $Set_ } from "@package/java/util";
import { $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/entity/ai/navigation" {
    export class $GroundPathNavigation extends $PathNavigation {
        setCanOpenDoors(arg0: boolean): void;
        setCanPassDoors(arg0: boolean): void;
        getSurfaceY(): number;
        canPassDoors(): boolean;
        canOpenDoors(): boolean;
        setAvoidSun(arg0: boolean): void;
        setCanWalkOverFences(arg0: boolean): void;
        constructor(arg0: $Mob, arg1: $Level_);
        get surfaceY(): number;
        set avoidSun(value: boolean);
        set canWalkOverFences(value: boolean);
    }
    export class $AmphibiousPathNavigation extends $PathNavigation {
        constructor(arg0: $Mob, arg1: $Level_);
    }
    export class $PathNavigation {
        moveTo(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        moveTo(arg0: $Entity, arg1: number): boolean;
        moveTo(arg0: $Path, arg1: number): boolean;
        moveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        shouldRecomputePath(arg0: $BlockPos_): boolean;
        recomputePath(): void;
        canFloat(): boolean;
        isStuck(): boolean;
        setCanFloat(arg0: boolean): void;
        createPath(arg0: $Entity, arg1: number): $Path;
        createPath(arg0: number, arg1: number, arg2: number, arg3: number): $Path;
        createPath(arg0: $Stream<$BlockPos_>, arg1: number): $Path;
        createPath(arg0: $Set_<$BlockPos_>, arg1: number): $Path;
        createPath(arg0: $BlockPos_, arg1: number): $Path;
        createPath(arg0: $BlockPos_, arg1: number, arg2: number): $Path;
        canCutCorner(arg0: $PathType_): boolean;
        shouldTargetNextNodeInDirection(arg0: $Vec3_): boolean;
        isInProgress(): boolean;
        isStableDestination(arg0: $BlockPos_): boolean;
        getNodeEvaluator(): $NodeEvaluator;
        getMaxDistanceToWaypoint(): number;
        resetMaxVisitedNodesMultiplier(): void;
        setMaxVisitedNodesMultiplier(arg0: number): void;
        getTargetPos(): $BlockPos;
        setSpeedModifier(arg0: number): void;
        tick(): void;
        getPath(): $Path;
        stop(): void;
        isDone(): boolean;
        constructor(arg0: $Mob, arg1: $Level_);
        get stuck(): boolean;
        get inProgress(): boolean;
        get nodeEvaluator(): $NodeEvaluator;
        get maxDistanceToWaypoint(): number;
        set maxVisitedNodesMultiplier(value: number);
        get targetPos(): $BlockPos;
        set speedModifier(value: number);
        get path(): $Path;
        get done(): boolean;
    }
    export class $WaterBoundPathNavigation extends $PathNavigation {
        allowBreaching: boolean;
        constructor(arg0: $Mob, arg1: $Level_);
    }
    export class $WallClimberNavigation extends $GroundPathNavigation {
        constructor(arg0: $Mob, arg1: $Level_);
    }
    export class $FlyingPathNavigation extends $PathNavigation {
        setCanOpenDoors(arg0: boolean): void;
        setCanPassDoors(arg0: boolean): void;
        canPassDoors(): boolean;
        canOpenDoors(): boolean;
        constructor(arg0: $Mob, arg1: $Level_);
    }
}
