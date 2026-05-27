import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ModelProperties, $ModelProperties_, $FaceUV$Rotation_ } from "@package/software/bernie/geckolib/loading/json/raw";
import { $List, $List_ } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $BoneSnapshot } from "@package/software/bernie/geckolib/animation/state";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $Matrix4f, $Vector3d, $Matrix3f, $Vector3f } from "@package/org/joml";

declare module "@package/software/bernie/geckolib/cache/object" {
    export class $BakedGeoModel extends $Record {
        searchForChildBone(arg0: $GeoBone, arg1: string): $GeoBone;
        getBone(arg0: string): ($GeoBone) | undefined;
        topLevelBones(): $List<$GeoBone>;
        properties(): $ModelProperties;
        constructor(topLevelBones: $List_<$GeoBone>, properties: $ModelProperties_);
    }
    /**
     * Values that may be interpreted as {@link $BakedGeoModel}.
     */
    export type $BakedGeoModel_ = { properties?: $ModelProperties_, topLevelBones?: $List_<$GeoBone>,  } | [properties?: $ModelProperties_, topLevelBones?: $List_<$GeoBone>, ];
    export class $GeoBone {
        getWorldPosition(): $Vector3d;
        getRotationVector(): $Vector3d;
        saveSnapshot(): $BoneSnapshot;
        getCubes(): $List<$GeoCube>;
        getPosX(): number;
        getPosY(): number;
        getPivotX(): number;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        getPivotY(): number;
        getPivotZ(): number;
        getRotZ(): number;
        setTrackingMatrices(arg0: boolean): void;
        saveInitialSnapshot(): void;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        getRotY(): number;
        setRotY(arg0: number): void;
        getRotX(): number;
        setRotX(arg0: number): void;
        markRotationAsChanged(): void;
        markPositionAsChanged(): void;
        markScaleAsChanged(): void;
        setChildrenHidden(arg0: boolean): void;
        setPivotX(arg0: number): void;
        setPivotY(arg0: number): void;
        setPivotZ(arg0: number): void;
        getLocalSpaceMatrix(): $Matrix4f;
        getModelSpaceMatrix(): $Matrix4f;
        getWorldSpaceMatrix(): $Matrix4f;
        getScaleX(): number;
        getScaleY(): number;
        getScaleZ(): number;
        hasScaleChanged(): boolean;
        hasRotationChanged(): boolean;
        hasPositionChanged(): boolean;
        resetStateChanges(): void;
        shouldNeverRender(): boolean;
        getReset(): boolean;
        setWorldSpaceNormal(arg0: $Matrix3f): void;
        getWorldSpaceNormal(): $Matrix3f;
        getModelPosition(): $Vector3d;
        setModelPosition(arg0: $Vector3d): void;
        getModelRotationMatrix(): $Matrix4f;
        getPositionVector(): $Vector3d;
        getScaleVector(): $Vector3d;
        addRotationOffsetFromBone(arg0: $GeoBone): void;
        updatePivot(arg0: number, arg1: number, arg2: number): void;
        getInflate(): number;
        getPosZ(): number;
        updatePosition(arg0: number, arg1: number, arg2: number): void;
        setScaleX(arg0: number): void;
        setScaleY(arg0: number): void;
        setScaleZ(arg0: number): void;
        getLocalPosition(): $Vector3d;
        setRotZ(arg0: number): void;
        setPosZ(arg0: number): void;
        setPosX(arg0: number): void;
        setPosY(arg0: number): void;
        isTrackingMatrices(): boolean;
        setModelSpaceMatrix(arg0: $Matrix4f): void;
        setLocalSpaceMatrix(arg0: $Matrix4f): void;
        setWorldSpaceMatrix(arg0: $Matrix4f): void;
        isHidingChildren(): boolean;
        getChildBones(): $List<$GeoBone>;
        getInitialSnapshot(): $BoneSnapshot;
        setHidden(arg0: boolean): void;
        getMirror(): boolean;
        getName(): string;
        isHidden(): boolean;
        getParent(): $GeoBone;
        constructor(arg0: $GeoBone, arg1: string, arg2: boolean, arg3: number, arg4: boolean, arg5: boolean);
        get worldPosition(): $Vector3d;
        get rotationVector(): $Vector3d;
        get cubes(): $List<$GeoCube>;
        set childrenHidden(value: boolean);
        get reset(): boolean;
        get modelRotationMatrix(): $Matrix4f;
        get positionVector(): $Vector3d;
        get scaleVector(): $Vector3d;
        get inflate(): number;
        get localPosition(): $Vector3d;
        get hidingChildren(): boolean;
        get childBones(): $List<$GeoBone>;
        get initialSnapshot(): $BoneSnapshot;
        get mirror(): boolean;
        get name(): string;
        get parent(): $GeoBone;
    }
    export class $GeoQuad extends $Record {
        vertices(): $GeoVertex[];
        normal(): $Vector3f;
        direction(): $Direction;
        static build(arg0: $GeoVertex_[], arg1: number[], arg2: number[], arg3: $FaceUV$Rotation_, arg4: number, arg5: number, arg6: boolean, arg7: $Direction_): $GeoQuad;
        /**
         * @deprecated
         */
        static build(arg0: $GeoVertex_[], arg1: number[], arg2: number[], arg3: number, arg4: number, arg5: boolean, arg6: $Direction_): $GeoQuad;
        static build(arg0: $GeoVertex_[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: $FaceUV$Rotation_, arg6: number, arg7: number, arg8: boolean, arg9: $Direction_): $GeoQuad;
        /**
         * @deprecated
         */
        static build(arg0: $GeoVertex_[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: $Direction_): $GeoQuad;
        constructor(vertices: $GeoVertex_[], normal: $Vector3f, direction: $Direction_);
    }
    /**
     * Values that may be interpreted as {@link $GeoQuad}.
     */
    export type $GeoQuad_ = { vertices?: $GeoVertex_[], normal?: $Vector3f, direction?: $Direction_,  } | [vertices?: $GeoVertex_[], normal?: $Vector3f, direction?: $Direction_, ];
    export class $GeoCube extends $Record {
        rotation(): $Vec3;
        quads(): $GeoQuad[];
        pivot(): $Vec3;
        mirror(): boolean;
        size(): $Vec3;
        inflate(): number;
        constructor(quads: $GeoQuad_[], pivot: $Vec3_, rotation: $Vec3_, size: $Vec3_, inflate: number, mirror: boolean);
    }
    /**
     * Values that may be interpreted as {@link $GeoCube}.
     */
    export type $GeoCube_ = { mirror?: boolean, inflate?: number, size?: $Vec3_, rotation?: $Vec3_, quads?: $GeoQuad_[], pivot?: $Vec3_,  } | [mirror?: boolean, inflate?: number, size?: $Vec3_, rotation?: $Vec3_, quads?: $GeoQuad_[], pivot?: $Vec3_, ];
    export class $GeoVertex extends $Record {
        withUVs(arg0: number, arg1: number): $GeoVertex;
        texV(): number;
        texU(): number;
        position(): $Vector3f;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(position: $Vector3f, texU: number, texV: number);
    }
    /**
     * Values that may be interpreted as {@link $GeoVertex}.
     */
    export type $GeoVertex_ = { texU?: number, texV?: number, position?: $Vector3f,  } | [texU?: number, texV?: number, position?: $Vector3f, ];
}
