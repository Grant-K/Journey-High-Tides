import { $BlockPos_, $Position, $SectionPos } from "@package/net/minecraft/core";
import { $CullFrustum } from "@package/foundry/veil/api/client/render";
import { $FrustumExtension } from "@package/foundry/veil/ext";
import { $ViewportProvider, $Viewport } from "@package/net/caffeinemc/mods/sodium/client/render/viewport";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $Matrix4f, $Matrix4fc, $Vector2dc, $Vector4fc, $Vector3dc, $Vector4f, $Vector3ic, $Vector2fc, $Vector3fc, $FrustumIntersection } from "@package/org/joml";

declare module "@package/net/minecraft/client/renderer/culling" {
    export class $Frustum implements $FrustumExtension, $CullFrustum, $ViewportProvider {
        testPoint(arg0: number, arg1: number, arg2: number): boolean;
        testSphere(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        testAab(arg0: $AABB_): boolean;
        testAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        isVisible(arg0: $AABB_): boolean;
        getViewVector(): $Vector3fc;
        veil$setupFrustum(arg0: $Matrix4fc, arg1: $Matrix4fc): void;
        testPlaneXY(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        testPlaneXZ(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        testLineSegment(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        getPlanes(): $Vector4fc[];
        getModelViewProjectionMatrix(): $Matrix4fc;
        toFrustum(): $Frustum;
        offsetToFullyIncludeCameraCube(arg0: number): $Frustum;
        sodium$createViewport(): $Viewport;
        getPosition(): $Vector3dc;
        prepare(arg0: number, arg1: number, arg2: number): void;
        testPoint(arg0: $Vector3fc): boolean;
        testPoint(arg0: $Vector3ic): boolean;
        testPoint(arg0: $Vector3dc): boolean;
        testPoint(arg0: $Position): boolean;
        testSphere(arg0: $Vector3fc, arg1: number): boolean;
        testSphere(arg0: $Vector3dc, arg1: number): boolean;
        testAab(arg0: $Vector3dc, arg1: $Vector3dc): boolean;
        testAab(arg0: $Vector3fc, arg1: $Vector3fc): boolean;
        testPlaneXY(arg0: $Vector2fc, arg1: $Vector2fc): boolean;
        testPlaneXY(arg0: $Vector2dc, arg1: $Vector2dc): boolean;
        testPlaneXZ(arg0: $Vector2fc, arg1: $Vector2fc): boolean;
        testPlaneXZ(arg0: $Vector2dc, arg1: $Vector2dc): boolean;
        testLineSegment(arg0: $Vector3fc, arg1: $Vector3fc): boolean;
        testLineSegment(arg0: $Vector3dc, arg1: $Vector3dc): boolean;
        testBlock(arg0: $BlockPos_): boolean;
        testSection(arg0: $SectionPos): boolean;
        camY: number;
        camZ: number;
        intersection: $FrustumIntersection;
        camX: number;
        matrix: $Matrix4f;
        static OFFSET_STEP: number;
        viewVector: $Vector4f;
        constructor(arg0: $Matrix4f, arg1: $Matrix4f);
        constructor(arg0: $Frustum);
        get planes(): $Vector4fc[];
        get modelViewProjectionMatrix(): $Matrix4fc;
        get position(): $Vector3dc;
    }
}
