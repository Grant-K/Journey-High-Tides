import { $Direction } from "@package/com/tom/cpl/util";
import { $JsonMap } from "@package/com/tom/cpm/shared/editor/project";
import { $Object } from "@package/java/lang";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/com/tom/cpl/math" {
    export class $Rotation {
        toMap3(): $Map<string, $Object>;
        asVec3f(arg0: boolean): $Vec3f;
        asQ(): $Quaternion;
        add(arg0: $Rotation): $Rotation;
        static ZERO: $Rotation;
        x: number;
        y: number;
        z: number;
        constructor(arg0: $Vec3f, arg1: boolean);
        constructor(arg0: number, arg1: number, arg2: number, arg3: boolean);
        constructor();
    }
    export class $BoundingBox {
        getFaceOnly(arg0: $Direction): $BoundingBox;
        mul(arg0: number): $BoundingBox;
        static create(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $BoundingBox;
        offset(arg0: number, arg1: number, arg2: number): $BoundingBox;
        minY: number;
        minX: number;
        maxZ: number;
        maxY: number;
        maxX: number;
        minZ: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
    }
    export class $MatrixStack {
        translate(arg0: number, arg1: number, arg2: number): void;
        storeLast(): $MatrixStack$Entry;
        setLast(arg0: $MatrixStack$Entry): void;
        push(): void;
        pop(): void;
        mul(arg0: $MatrixStack$Entry): void;
        fork(): $MatrixStack;
        getLast(): $MatrixStack$Entry;
        rotate(arg0: $Quaternion): void;
        clear(): boolean;
        scale(arg0: number, arg1: number, arg2: number): void;
        static NO_RENDER: $MatrixStack$Entry;
        constructor();
    }
    export class $Vec3f {
        getRadialQuaternion(arg0: number): $Quaternion;
        getDegreesQuaternion(arg0: number): $Quaternion;
        getYaw(): number;
        mul(arg0: number): $Vec3f;
        mul(arg0: number, arg1: number, arg2: number): void;
        normalize(): void;
        sub(arg0: $Vec3f): $Vec3f;
        sub(arg0: number): $Vec3f;
        epsilon(arg0: number): boolean;
        round(arg0: number): void;
        add(arg0: $Vec3f): $Vec3f;
        transform(arg0: $Mat3f): void;
        toMap(): $Map<string, $Object>;
        copy(): $Vec3f;
        static NEGATIVE_X: $Vec3f;
        static ZERO: $Vec3f;
        static NEGATIVE_Y: $Vec3f;
        static MAX_POS: number;
        x: number;
        static POSITIVE_Z: $Vec3f;
        y: number;
        z: number;
        static POSITIVE_Y: $Vec3f;
        static NEGATIVE_Z: $Vec3f;
        static POSITIVE_X: $Vec3f;
        constructor(arg0: $Vec3f);
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: number);
        constructor();
        constructor(arg0: $Vec2f, arg1: number);
        constructor(arg0: $JsonMap, arg1: $Vec3f);
        constructor(arg0: $Map_<string, $Object>, arg1: $Vec3f);
        get yaw(): number;
    }
    export class $Vec2i {
        toMap(): $Map<string, $Object>;
        x: number;
        y: number;
        constructor();
        constructor(arg0: $Vec4f);
        constructor(arg0: $JsonMap, arg1: $Vec2i);
        constructor(arg0: $Map_<string, $Object>, arg1: $Vec2i);
        constructor(arg0: number, arg1: number);
        constructor(arg0: number, arg1: number);
        constructor(arg0: $Vec2i);
    }
    export class $MatrixStack$Entry {
        getNormal(): $Mat3f;
        getMatrix(): $Mat4f;
        getNormalArray(): number[];
        getMatrixArray(): number[];
        getNormalArray3(): number[];
        copy(): $MatrixStack$Entry;
        get normal(): $Mat3f;
        get matrix(): $Mat4f;
        get normalArray(): number[];
        get matrixArray(): number[];
        get normalArray3(): number[];
    }
    export class $Quaternion {
        getAxis(): $Vec3f;
        getZ(): number;
        getAngle(): number;
        getY(): number;
        getX(): number;
        static matrixToRotation(arg0: $Mat4f, arg1: $Quaternion$RotationOrder): $Vec3f;
        getW(): number;
        static reorder(arg0: $Vec3f, arg1: $Quaternion$RotationOrder, arg2: $Quaternion$RotationOrder): $Vec3f;
        mul(arg0: $Quaternion): void;
        map<T>(arg0: $Quaternion$Qmap<T>): T;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        constructor(arg0: number, arg1: number, arg2: number, arg3: boolean);
        constructor(arg0: number, arg1: number, arg2: number, arg3: $Quaternion$RotationOrder);
        constructor(arg0: number, arg1: number, arg2: number, arg3: $Quaternion$RotationOrder, arg4: boolean);
        constructor(arg0: $Vec3f, arg1: number, arg2: boolean);
        constructor(arg0: $Vec3f, arg1: boolean);
        constructor(arg0: $Mat4f);
        get axis(): $Vec3f;
        get z(): number;
        get angle(): number;
        get y(): number;
        get x(): number;
        get w(): number;
    }
}
