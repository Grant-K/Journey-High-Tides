import { $AzBoneSnapshot } from "@package/mod/azure/azurelib/common/model";
import { $AzAnimationControllerStateMachine } from "@package/mod/azure/azurelib/common/animation/controller/state/machine";
import { $AzBoneAnimationQueue, $AzKeyframeManager, $AzKeyframeCallbacks } from "@package/mod/azure/azurelib/common/animation/controller/keyframe";
import { $AzBoneCache } from "@package/mod/azure/azurelib/common/animation/cache";
import { $AzAnimator } from "@package/mod/azure/azurelib/common/animation";
import { $AzDispatchSide_ } from "@package/mod/azure/azurelib/common/animation/dispatch";
import { $AzAnimationSequence_ } from "@package/mod/azure/azurelib/common/animation/dispatch/command/sequence";
import { $AzQueuedAnimation, $AzQueuedAnimation_ } from "@package/mod/azure/azurelib/common/animation/primitive";
import { $AzAnimationProperties } from "@package/mod/azure/azurelib/common/animation/property";
import { $Collection_, $List, $Collection } from "@package/java/util";
import { $AzEasingType } from "@package/mod/azure/azurelib/common/animation/easing";
export * as keyframe from "@package/mod/azure/azurelib/common/animation/controller/keyframe";
export * as state from "@package/mod/azure/azurelib/common/animation/controller/state";

declare module "@package/mod/azure/azurelib/common/animation/controller" {
    export class $AzAnimationController<T> extends $AzAbstractAnimationController {
        currentAnimation(): $AzQueuedAnimation;
        animationProperties(): $AzAnimationProperties;
        controllerTimer(): $AzAnimationControllerTimer<T>;
        keyframeManager(): $AzKeyframeManager<T>;
        stateMachine(): $AzAnimationControllerStateMachine<T>;
        setAnimationProperties(arg0: $AzAnimationProperties): void;
        animationQueue(): $AzAnimationQueue;
        tryCreateAnimationQueue(arg0: T, arg1: $AzAnimationSequence_): $List<$AzQueuedAnimation>;
        boneAnimationQueueCache(): $AzBoneAnimationQueueCache<T>;
        setCurrentAnimation(arg0: $AzQueuedAnimation_): void;
        boneSnapshotCache(): $AzBoneSnapshotCache;
        run(arg0: $AzDispatchSide_, arg1: $AzAnimationSequence_): void;
        update(): void;
        static builder<T>(arg0: $AzAnimator<never, T>, arg1: string): $AzAnimationControllerBuilder<T>;
    }
    export class $AzAnimationQueue {
        peek(): $AzQueuedAnimation;
        clear(): void;
        isEmpty(): boolean;
        add(arg0: $AzQueuedAnimation_): void;
        next(): $AzQueuedAnimation;
        addAll(arg0: $Collection_<$AzQueuedAnimation_>): void;
        constructor();
        get empty(): boolean;
    }
    export class $AzAnimationControllerContainer<T> {
        getOrNull(arg0: string): $AzAnimationController<T>;
        getAll(): $Collection<$AzAnimationController<T>>;
        add(arg0: $AzAnimationController<T>, ...arg1: $AzAnimationController<T>[]): void;
        constructor();
        get all(): $Collection<$AzAnimationController<T>>;
    }
    export class $AzBoneSnapshotCache {
        getOrNull(arg0: string): $AzBoneSnapshot;
        put(arg0: $AzQueuedAnimation_, arg1: $Collection_<$AzBoneSnapshot>): void;
        constructor();
    }
    export class $AzAnimationControllerTimer<T> {
        getAdjustedTick(): number;
        addToAdjustedTick(arg0: number): void;
        reset(): void;
        update(): void;
        constructor(arg0: $AzAnimationController<T>);
        get adjustedTick(): number;
    }
    export class $AzAbstractAnimationController {
        hasAnimationFinished(): boolean;
        name(): string;
    }
    export class $AzAnimationControllerBuilder<T> {
        setEasingType(arg0: $AzEasingType): $AzAnimationControllerBuilder<T>;
        setStartTickOffset(arg0: number): $AzAnimationControllerBuilder<T>;
        setKeyframeCallbacks(arg0: $AzKeyframeCallbacks<T>): $AzAnimationControllerBuilder<T>;
        setTransitionLength(arg0: number): $AzAnimationControllerBuilder<T>;
        setAnimationSpeed(arg0: number): $AzAnimationControllerBuilder<T>;
        build(): $AzAnimationController<T>;
        constructor(arg0: $AzAnimator<never, T>, arg1: string);
        set easingType(value: $AzEasingType);
        set startTickOffset(value: number);
        set keyframeCallbacks(value: $AzKeyframeCallbacks<T>);
        set transitionLength(value: number);
        set animationSpeed(value: number);
    }
    export class $AzBoneAnimationQueueCache<T> {
        getOrNull(arg0: string): $AzBoneAnimationQueue;
        values(): $Collection<$AzBoneAnimationQueue>;
        update(arg0: $AzEasingType): void;
        clear(): void;
        constructor(arg0: $AzBoneCache);
    }
}
