import { $AzBone, $AzBoneSnapshot } from "@package/mod/azure/azurelib/common/model";
import { $AzBoneAnimationQueueCache, $AzBoneSnapshotCache, $AzAnimationController } from "@package/mod/azure/azurelib/common/animation/controller";
import { $AzCustomKeyframeHandler, $AzParticleKeyframeHandler, $AzSoundKeyframeHandler } from "@package/mod/azure/azurelib/common/animation/controller/keyframe/handler";
import { $AzQueuedAnimation_ } from "@package/mod/azure/azurelib/common/animation/primitive";
import { $Queue, $List, $Map_, $List_ } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $AzEasingType } from "@package/mod/azure/azurelib/common/animation/easing";
import { $IValue_, $IValue } from "@package/mod/azure/azurelib/core/math";

declare module "@package/mod/azure/azurelib/common/animation/controller/keyframe" {
    export class $AzKeyframe<T extends $IValue> extends $Record {
        easingArgs(): $List<T>;
        startValue(): T;
        endValue(): T;
        easingType(): $AzEasingType;
        length(): number;
        constructor(arg0: number, arg1: T, arg2: T);
        constructor(length: number, startValue: T, endValue: T, easingType: $AzEasingType, easingArgs: $List_<T>);
        constructor(arg0: number, arg1: T, arg2: T, arg3: $AzEasingType);
    }
    /**
     * Values that may be interpreted as {@link $AzKeyframe}.
     */
    export type $AzKeyframe_<T> = { easingType?: $AzEasingType, easingArgs?: $List_<$IValue_>, startValue?: $IValue_, length?: number, endValue?: $IValue_,  } | [easingType?: $AzEasingType, easingArgs?: $List_<$IValue_>, startValue?: $IValue_, length?: number, endValue?: $IValue_, ];
    export class $AzKeyframeExecutor<T> extends $AzAbstractKeyframeExecutor {
        execute(arg0: $AzQueuedAnimation_, arg1: T, arg2: boolean): void;
        constructor(arg0: $AzAnimationController<T>, arg1: $AzBoneAnimationQueueCache<T>);
    }
    export class $AzKeyframeCallbacks<T> {
        soundKeyframeHandler(): $AzSoundKeyframeHandler<T>;
        particleKeyframeHandler(): $AzParticleKeyframeHandler<T>;
        customKeyframeHandler(): $AzCustomKeyframeHandler<T>;
        static noop<T>(): $AzKeyframeCallbacks<T>;
        static builder<T>(): $AzKeyframeCallbacks$Builder<T>;
    }
    export class $AzKeyframeStack<T extends $AzKeyframe<never>> extends $Record {
        getLastKeyframeTime(): number;
        xKeyframes(): $List<T>;
        yKeyframes(): $List<T>;
        zKeyframes(): $List<T>;
        static from<F extends $AzKeyframe<never>>(arg0: $AzKeyframeStack_<F>): $AzKeyframeStack<F>;
        constructor();
        constructor(xKeyframes: $List_<T>, yKeyframes: $List_<T>, zKeyframes: $List_<T>);
        get lastKeyframeTime(): number;
    }
    /**
     * Values that may be interpreted as {@link $AzKeyframeStack}.
     */
    export type $AzKeyframeStack_<T> = { zKeyframes?: $List_<$AzKeyframe_<never>>, xKeyframes?: $List_<$AzKeyframe_<never>>, yKeyframes?: $List_<$AzKeyframe_<never>>,  } | [zKeyframes?: $List_<$AzKeyframe_<never>>, xKeyframes?: $List_<$AzKeyframe_<never>>, yKeyframes?: $List_<$AzKeyframe_<never>>, ];
    export class $AzBoneAnimationQueue extends $Record {
        rotationYQueue(): $Queue<$AzAnimationPoint>;
        rotationZQueue(): $Queue<$AzAnimationPoint>;
        positionXQueue(): $Queue<$AzAnimationPoint>;
        positionYQueue(): $Queue<$AzAnimationPoint>;
        positionZQueue(): $Queue<$AzAnimationPoint>;
        scaleXQueue(): $Queue<$AzAnimationPoint>;
        scaleYQueue(): $Queue<$AzAnimationPoint>;
        scaleZQueue(): $Queue<$AzAnimationPoint>;
        rotationXQueue(): $Queue<$AzAnimationPoint>;
        bone(): $AzBone;
        addPosXPoint(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addPosYPoint(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addPosZPoint(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addScaleXPoint(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addScaleYPoint(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addScaleZPoint(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addRotationXPoint(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addRotationYPoint(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addRotationZPoint(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addNextRotation(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: $AzBoneSnapshot, arg4: $AzBoneSnapshot, arg5: $AzAnimationPoint_, arg6: $AzAnimationPoint_, arg7: $AzAnimationPoint_): void;
        addNextPosition(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: $AzBoneSnapshot, arg4: $AzAnimationPoint_, arg5: $AzAnimationPoint_, arg6: $AzAnimationPoint_): void;
        addNextScale(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: $AzBoneSnapshot, arg4: $AzAnimationPoint_, arg5: $AzAnimationPoint_, arg6: $AzAnimationPoint_): void;
        addRotations(arg0: $AzAnimationPoint_, arg1: $AzAnimationPoint_, arg2: $AzAnimationPoint_): void;
        addPositions(arg0: $AzAnimationPoint_, arg1: $AzAnimationPoint_, arg2: $AzAnimationPoint_): void;
        addScales(arg0: $AzAnimationPoint_, arg1: $AzAnimationPoint_, arg2: $AzAnimationPoint_): void;
        constructor(bone: $AzBone, rotationXQueue: $Queue<$AzAnimationPoint_>, rotationYQueue: $Queue<$AzAnimationPoint_>, rotationZQueue: $Queue<$AzAnimationPoint_>, positionXQueue: $Queue<$AzAnimationPoint_>, positionYQueue: $Queue<$AzAnimationPoint_>, positionZQueue: $Queue<$AzAnimationPoint_>, scaleXQueue: $Queue<$AzAnimationPoint_>, scaleYQueue: $Queue<$AzAnimationPoint_>, scaleZQueue: $Queue<$AzAnimationPoint_>);
        constructor(arg0: $AzBone);
    }
    /**
     * Values that may be interpreted as {@link $AzBoneAnimationQueue}.
     */
    export type $AzBoneAnimationQueue_ = { positionYQueue?: $Queue<$AzAnimationPoint_>, rotationXQueue?: $Queue<$AzAnimationPoint_>, scaleXQueue?: $Queue<$AzAnimationPoint_>, scaleZQueue?: $Queue<$AzAnimationPoint_>, rotationZQueue?: $Queue<$AzAnimationPoint_>, positionXQueue?: $Queue<$AzAnimationPoint_>, positionZQueue?: $Queue<$AzAnimationPoint_>, scaleYQueue?: $Queue<$AzAnimationPoint_>, rotationYQueue?: $Queue<$AzAnimationPoint_>, bone?: $AzBone,  } | [positionYQueue?: $Queue<$AzAnimationPoint_>, rotationXQueue?: $Queue<$AzAnimationPoint_>, scaleXQueue?: $Queue<$AzAnimationPoint_>, scaleZQueue?: $Queue<$AzAnimationPoint_>, rotationZQueue?: $Queue<$AzAnimationPoint_>, positionXQueue?: $Queue<$AzAnimationPoint_>, positionZQueue?: $Queue<$AzAnimationPoint_>, scaleYQueue?: $Queue<$AzAnimationPoint_>, rotationYQueue?: $Queue<$AzAnimationPoint_>, bone?: $AzBone, ];
    export class $AzKeyframeTransitioner<T> extends $AzAbstractKeyframeExecutor {
        transition(arg0: $Map_<string, $AzBone>, arg1: boolean, arg2: number): void;
        constructor(arg0: $AzAnimationController<T>, arg1: $AzBoneAnimationQueueCache<T>, arg2: $AzBoneSnapshotCache);
    }
    export class $AzBoneAnimation extends $Record {
        positionKeyframes(): $AzKeyframeStack<$AzKeyframe<$IValue>>;
        scaleKeyframes(): $AzKeyframeStack<$AzKeyframe<$IValue>>;
        rotationKeyframes(): $AzKeyframeStack<$AzKeyframe<$IValue>>;
        boneName(): string;
        constructor(boneName: string, rotationKeyframes: $AzKeyframeStack_<$AzKeyframe_<$IValue_>>, positionKeyframes: $AzKeyframeStack_<$AzKeyframe_<$IValue_>>, scaleKeyframes: $AzKeyframeStack_<$AzKeyframe_<$IValue_>>);
    }
    /**
     * Values that may be interpreted as {@link $AzBoneAnimation}.
     */
    export type $AzBoneAnimation_ = { scaleKeyframes?: $AzKeyframeStack_<$AzKeyframe_<$IValue_>>, positionKeyframes?: $AzKeyframeStack_<$AzKeyframe_<$IValue_>>, rotationKeyframes?: $AzKeyframeStack_<$AzKeyframe_<$IValue_>>, boneName?: string,  } | [scaleKeyframes?: $AzKeyframeStack_<$AzKeyframe_<$IValue_>>, positionKeyframes?: $AzKeyframeStack_<$AzKeyframe_<$IValue_>>, rotationKeyframes?: $AzKeyframeStack_<$AzKeyframe_<$IValue_>>, boneName?: string, ];
    export class $AzKeyframeCallbackHandler<T> {
        handle(arg0: T, arg1: number): void;
        reset(): void;
        constructor(arg0: $AzAnimationController<T>, arg1: $AzKeyframeCallbacks<T>);
    }
    export class $AzKeyframeManager<T> {
        keyframeCallbackHandler(): $AzKeyframeCallbackHandler<T>;
        keyframeTransitioner(): $AzKeyframeTransitioner<T>;
        keyframeExecutor(): $AzKeyframeExecutor<T>;
        constructor(arg0: $AzAnimationController<T>, arg1: $AzBoneAnimationQueueCache<T>, arg2: $AzBoneSnapshotCache, arg3: $AzKeyframeCallbacks<T>);
    }
}
