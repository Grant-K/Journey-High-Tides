import { $AABBInvoker } from "@package/org/figuramc/figura/mixin";
import { $BlockPos, $BlockPos_, $Direction_, $Vec3i, $Direction$Axis_, $Direction, $Position } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $AABBMixin } from "@package/dev/simulated_team/simulated/mixin/aabb";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $EnumSet } from "@package/java/util";
import { $Iterable_, $Enum } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Vector3f } from "@package/org/joml";
export * as shapes from "@package/net/minecraft/world/phys/shapes";

declare module "@package/net/minecraft/world/phys" {
    export class $AABB implements $AABBInvoker, $AABBMixin {
        setMinY(arg0: number): $AABB;
        minmax(arg0: $AABB_): $AABB;
        static clip(arg0: $Iterable_<$AABB>, arg1: $Vec3_, arg2: $Vec3_, arg3: $BlockPos_): $BlockHitResult;
        clip(arg0: $Vec3_, arg1: $Vec3_): ($Vec3) | undefined;
        getYsize(): number;
        distanceToSqr(arg0: $Vec3_): number;
        expandTowards(arg0: number, arg1: number, arg2: number): $AABB;
        expandTowards(arg0: $Vec3_): $AABB;
        getCenter(): $Vec3;
        getBottomCenter(): $Vec3;
        static ofSize(arg0: $Vec3_, arg1: number, arg2: number, arg3: number): $AABB;
        getXsize(): number;
        getZsize(): number;
        static encapsulatingFullBlocks(arg0: $BlockPos_, arg1: $BlockPos_): $AABB;
        setMinX(arg0: number): $AABB;
        static unitCubeFromLowerCorner(arg0: $Vec3_): $AABB;
        setMaxY(arg0: number): $AABB;
        setMinZ(arg0: number): $AABB;
        setMaxX(arg0: number): $AABB;
        static getDirection$figura_$md$68cb88$0(arg0: $AABB_, arg1: $Vec3_, arg2: number[], arg3: $Direction_, arg4: number, arg5: number, arg6: number): $Direction;
        setMaxZ(arg0: number): $AABB;
        contract(arg0: number, arg1: number, arg2: number): $AABB;
        hasNaN(): boolean;
        getMinPosition(): $Vec3;
        getMaxPosition(): $Vec3;
        static invokeGetDirection$simulated_$md$68cb88$1(arg0: $AABB_, arg1: $Vec3_, arg2: number[], arg3: $Direction_, arg4: number, arg5: number, arg6: number): $Direction;
        move(arg0: number, arg1: number, arg2: number): $AABB;
        move(arg0: $Vector3f): $AABB;
        move(arg0: $BlockPos_): $AABB;
        move(arg0: $Vec3_): $AABB;
        intersect(arg0: $AABB_): $AABB;
        intersects(arg0: $Vec3_, arg1: $Vec3_): boolean;
        intersects(arg0: $AABB_): boolean;
        intersects(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        deflate(arg0: number, arg1: number, arg2: number): $AABB;
        deflate(arg0: number): $AABB;
        getSize(): number;
        min(arg0: $Direction$Axis_): number;
        max(arg0: $Direction$Axis_): number;
        isInfinite(): boolean;
        inflate(arg0: number, arg1: number, arg2: number): $AABB;
        inflate(arg0: number): $AABB;
        static of(arg0: $BoundingBox): $AABB;
        contains(arg0: $Vec3_): boolean;
        contains(arg0: number, arg1: number, arg2: number): boolean;
        minY: number;
        minX: number;
        maxZ: number;
        maxY: number;
        maxX: number;
        minZ: number;
        static INFINITE: $AABB;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        constructor(arg0: $Vec3_, arg1: $Vec3_);
        constructor(arg0: $BlockPos_);
        get ysize(): number;
        get center(): $Vec3;
        get bottomCenter(): $Vec3;
        get xsize(): number;
        get zsize(): number;
        get minPosition(): $Vec3;
        get maxPosition(): $Vec3;
        get size(): number;
        get infinite(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AABB}.
     */
    export type $AABB_ = [] | [x: number, y: number, z: number, ] | [x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, ];
    export class $HitResult$Type extends $Enum<$HitResult$Type> {
        static values(): $HitResult$Type[];
        static valueOf(arg0: string): $HitResult$Type;
        static ENTITY: $HitResult$Type;
        static MISS: $HitResult$Type;
        static BLOCK: $HitResult$Type;
    }
    /**
     * Values that may be interpreted as {@link $HitResult$Type}.
     */
    export type $HitResult$Type_ = "miss" | "block" | "entity";
    export class $EntityHitResult extends $HitResult {
        getEntity(): $Entity;
        constructor(arg0: $Entity);
        constructor(arg0: $Entity, arg1: $Vec3_);
        get entity(): $Entity;
    }
    export class $Vec3 implements $Position {
        cross(arg0: $Vec3_): $Vec3;
        lerp(arg0: $Vec3_, arg1: number): $Vec3;
        zRot(arg0: number): $Vec3;
        vectorTo(arg0: $Vec3_): $Vec3;
        horizontalDistance(): number;
        distanceTo(arg0: $Vec3_): number;
        xRot(arg0: number): $Vec3;
        yRot(arg0: number): $Vec3;
        static atBottomCenterOf(arg0: $Vec3i): $Vec3;
        static upFromBottomCenterOf(arg0: $Vec3i, arg1: number): $Vec3;
        distanceToSqr(arg0: number, arg1: number, arg2: number): number;
        distanceToSqr(arg0: $Vec3_): number;
        closerThan(arg0: $Position, arg1: number): boolean;
        closerThan(arg0: $Vec3_, arg1: number, arg2: number): boolean;
        lengthSqr(): number;
        horizontalDistanceSqr(): number;
        static directionFromRotation(arg0: number, arg1: number): $Vec3;
        static directionFromRotation(arg0: $Vec2): $Vec3;
        static atCenterOf(arg0: $Vec3i): $Vec3;
        static fromRGB24(arg0: number): $Vec3;
        toVector3f(): $Vector3f;
        static atLowerCornerOf(arg0: $Vec3i): $Vec3;
        static atLowerCornerWithOffset(arg0: $Vec3i, arg1: number, arg2: number, arg3: number): $Vec3;
        offsetRandom(arg0: $RandomSource, arg1: number): $Vec3;
        subtract(arg0: number, arg1: number, arg2: number): $Vec3;
        subtract(arg0: $Vec3_): $Vec3;
        relative(arg0: $Direction_, arg1: number): $Vec3;
        y(): number;
        multiply(arg0: number, arg1: number, arg2: number): $Vec3;
        multiply(arg0: $Vec3_): $Vec3;
        normalize(): $Vec3;
        align(arg0: $EnumSet<$Direction$Axis_>): $Vec3;
        get(arg0: $Direction$Axis_): number;
        length(): number;
        reverse(): $Vec3;
        scale(arg0: number): $Vec3;
        add(arg0: $Vec3_): $Vec3;
        add(arg0: number, arg1: number, arg2: number): $Vec3;
        x(): number;
        dot(arg0: $Vec3_): number;
        with(arg0: $Direction$Axis_, arg1: number): $Vec3;
        z(): number;
        static ZERO: $Vec3;
        static CODEC: $Codec<$Vec3>;
        constructor(arg0: $Vector3f);
        constructor(arg0: number, arg1: number, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $Vec3}.
     */
    export type $Vec3_ = [x: number, y: number, z: number, ];
    export class $Vec2 {
        lengthSquared(): number;
        distanceToSqr(arg0: $Vec2): number;
        negated(): $Vec2;
        normalized(): $Vec2;
        equals(arg0: $Vec2): boolean;
        length(): number;
        scale(arg0: number): $Vec2;
        add(arg0: $Vec2): $Vec2;
        add(arg0: number): $Vec2;
        dot(arg0: $Vec2): number;
        static ZERO: $Vec2;
        static NEG_UNIT_Y: $Vec2;
        static NEG_UNIT_X: $Vec2;
        static MIN: $Vec2;
        static UNIT_X: $Vec2;
        static MAX: $Vec2;
        static ONE: $Vec2;
        static UNIT_Y: $Vec2;
        x: number;
        y: number;
        constructor(arg0: number, arg1: number);
    }
    export class $HitResult {
        distanceTo(arg0: $Entity): number;
        getLocation(): $Vec3;
        getType(): $HitResult$Type;
        get location(): $Vec3;
        get type(): $HitResult$Type;
    }
    export class $BlockHitResult extends $HitResult {
        getDirection(): $Direction;
        getBlockPos(): $BlockPos;
        withDirection(arg0: $Direction_): $BlockHitResult;
        isInside(): boolean;
        withPosition(arg0: $BlockPos_): $BlockHitResult;
        static miss(arg0: $Vec3_, arg1: $Direction_, arg2: $BlockPos_): $BlockHitResult;
        constructor(arg0: boolean, arg1: $Vec3_, arg2: $Direction_, arg3: $BlockPos_, arg4: boolean);
        constructor(arg0: $Vec3_, arg1: $Direction_, arg2: $BlockPos_, arg3: boolean);
        get direction(): $Direction;
        get blockPos(): $BlockPos;
        get inside(): boolean;
    }
}
