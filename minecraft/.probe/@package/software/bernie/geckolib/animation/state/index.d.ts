import { $GeoBone } from "@package/software/bernie/geckolib/cache/object";

declare module "@package/software/bernie/geckolib/animation/state" {
    export class $BoneSnapshot {
        updateScale(arg0: number, arg1: number, arg2: number): void;
        getRotZ(): number;
        getOffsetZ(): number;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        getRotY(): number;
        getRotX(): number;
        getScaleX(): number;
        getScaleY(): number;
        getScaleZ(): number;
        stopPosAnim(arg0: number): void;
        startRotAnim(): void;
        stopRotAnim(arg0: number): void;
        startScaleAnim(): void;
        stopScaleAnim(arg0: number): void;
        updateOffset(arg0: number, arg1: number, arg2: number): void;
        startPosAnim(): void;
        getLastResetRotationTick(): number;
        getLastResetPositionTick(): number;
        getLastResetScaleTick(): number;
        isRotAnimInProgress(): boolean;
        isPosAnimInProgress(): boolean;
        isScaleAnimInProgress(): boolean;
        getOffsetX(): number;
        getOffsetY(): number;
        getBone(): $GeoBone;
        static copy(arg0: $BoneSnapshot): $BoneSnapshot;
        constructor(arg0: $GeoBone);
        get rotZ(): number;
        get offsetZ(): number;
        get rotY(): number;
        get rotX(): number;
        get scaleX(): number;
        get scaleY(): number;
        get scaleZ(): number;
        get lastResetRotationTick(): number;
        get lastResetPositionTick(): number;
        get lastResetScaleTick(): number;
        get rotAnimInProgress(): boolean;
        get posAnimInProgress(): boolean;
        get scaleAnimInProgress(): boolean;
        get offsetX(): number;
        get offsetY(): number;
        get bone(): $GeoBone;
    }
}
