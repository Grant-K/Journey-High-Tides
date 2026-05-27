import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $SubLevelPhysicsSystem } from "@package/dev/ryanhcode/sable/sublevel/system";
import { $BoundingBox3d } from "@package/dev/ryanhcode/sable/companion/math";
import { $ObjectList } from "@package/it/unimi/dsi/fastutil/objects";
import { $ArbitraryPhysicsObject } from "@package/dev/ryanhcode/sable/api/physics/object";
import { $SubLevelHoldingChunkMap } from "@package/dev/ryanhcode/sable/sublevel/storage/holding";
import { $Collection_, $List_ } from "@package/java/util";
import { $ServerSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $Enum } from "@package/java/lang";
import { $Vector3dc, $Vector3d } from "@package/org/joml";

declare module "@package/dev/ryanhcode/sable/api/physics/object/rope" {
    export class $RopePhysicsObject implements $ArbitraryPhysicsObject {
        getBoundingBox(arg0: $BoundingBox3d): void;
        setAttachment(arg0: $RopeHandle$AttachmentPoint_, arg1: $Vector3dc, arg2: $ServerSubLevel): void;
        setFirstSegmentLength(arg0: number): void;
        getCollisionRadius(): number;
        getPoints(): $ObjectList<$Vector3d>;
        wakeUp(): void;
        onUnloaded(arg0: $SubLevelHoldingChunkMap, arg1: $ChunkPos): void;
        removeFirstPoint(): void;
        addPoint(arg0: $Vector3dc): void;
        updatePose(): void;
        onRemoved(): void;
        onAddition(arg0: $SubLevelPhysicsSystem): void;
        isActive(): boolean;
        constructor(arg0: $Collection_<$Vector3d>, arg1: number);
        set firstSegmentLength(value: number);
        get collisionRadius(): number;
        get points(): $ObjectList<$Vector3d>;
        get active(): boolean;
    }
    export class $RopeHandle {
    }
    export interface $RopeHandle {
        setAttachment(arg0: $RopeHandle$AttachmentPoint_, arg1: $Vector3dc, arg2: $ServerSubLevel): void;
        setFirstSegmentLength(arg0: number): void;
        readPose(arg0: $List_<$Vector3d>): void;
        wakeUp(): void;
        removeFirstPoint(): void;
        addPoint(arg0: $Vector3dc): void;
        remove(): void;
        set firstSegmentLength(value: number);
    }
    export class $RopeHandle$AttachmentPoint extends $Enum<$RopeHandle$AttachmentPoint> {
        static values(): $RopeHandle$AttachmentPoint[];
        static valueOf(arg0: string): $RopeHandle$AttachmentPoint;
        static START: $RopeHandle$AttachmentPoint;
        static END: $RopeHandle$AttachmentPoint;
    }
    /**
     * Values that may be interpreted as {@link $RopeHandle$AttachmentPoint}.
     */
    export type $RopeHandle$AttachmentPoint_ = "start" | "end";
}
