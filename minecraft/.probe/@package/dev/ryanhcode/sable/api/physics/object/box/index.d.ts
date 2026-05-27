import { $MassData } from "@package/dev/ryanhcode/sable/api/physics/mass";
import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $SubLevelPhysicsSystem } from "@package/dev/ryanhcode/sable/sublevel/system";
import { $BoundingBox3d, $Pose3dc, $Pose3d } from "@package/dev/ryanhcode/sable/companion/math";
import { $ArbitraryPhysicsObject } from "@package/dev/ryanhcode/sable/api/physics/object";
import { $SubLevelHoldingChunkMap } from "@package/dev/ryanhcode/sable/sublevel/storage/holding";
import { $PhysicsPipelineBody } from "@package/dev/ryanhcode/sable/api/physics";
import { $Vector3dc } from "@package/org/joml";

declare module "@package/dev/ryanhcode/sable/api/physics/object/box" {
    export class $BoxHandle {
    }
    export interface $BoxHandle {
        readPose(arg0: $Pose3d): void;
        wakeUp(): void;
        getRuntimeId(): number;
        remove(): void;
        get runtimeId(): number;
    }
    export class $BoxPhysicsObject implements $ArbitraryPhysicsObject, $PhysicsPipelineBody {
        isRemoved(): boolean;
        getBoundingBox(arg0: $BoundingBox3d): void;
        getPose(): $Pose3dc;
        getMassTracker(): $MassData;
        getHalfExtents(): $Vector3dc;
        wakeUp(): void;
        onUnloaded(arg0: $SubLevelHoldingChunkMap, arg1: $ChunkPos): void;
        updatePose(): void;
        onRemoved(): void;
        onAddition(arg0: $SubLevelPhysicsSystem): void;
        getMass(): number;
        getRuntimeId(): number;
        isActive(): boolean;
        constructor(arg0: $Pose3dc, arg1: $Vector3dc, arg2: number);
        get removed(): boolean;
        get pose(): $Pose3dc;
        get massTracker(): $MassData;
        get halfExtents(): $Vector3dc;
        get mass(): number;
        get runtimeId(): number;
        get active(): boolean;
    }
}
