import { $Pose3dc, $BoundingBox3dc } from "@package/dev/ryanhcode/sable/companion/math";
import { $UUID } from "@package/java/util";
export * as math from "@package/dev/ryanhcode/sable/companion/math";

declare module "@package/dev/ryanhcode/sable/companion" {
    export class $SubLevelAccess {
    }
    export interface $SubLevelAccess {
        logicalPose(): $Pose3dc;
        lastPose(): $Pose3dc;
        getUniqueId(): $UUID;
        boundingBox(): $BoundingBox3dc;
        getName(): string;
        get uniqueId(): $UUID;
        get name(): string;
    }
    export class $ClientSubLevelAccess {
    }
    export interface $ClientSubLevelAccess extends $SubLevelAccess {
        renderPose(): $Pose3dc;
        renderPose(arg0: number): $Pose3dc;
    }
}
