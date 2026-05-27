import { $AzAnimationPropertiesCodec } from "@package/mod/azure/azurelib/common/animation/property/codec";
import { $AzEasingType } from "@package/mod/azure/azurelib/common/animation/easing";
export * as codec from "@package/mod/azure/azurelib/common/animation/property/codec";

declare module "@package/mod/azure/azurelib/common/animation/property" {
    export class $AzAnimationProperties {
        repeatXTimes(): number;
        freezeTickOffset(): number;
        withShouldReverse(arg0: boolean): $AzAnimationProperties;
        withRepeatXTimes(arg0: number): $AzAnimationProperties;
        withFreezeTickOffset(arg0: number): $AzAnimationProperties;
        withStartTickOffset(arg0: number): $AzAnimationProperties;
        withTransitionLength(arg0: number): $AzAnimationProperties;
        withEasingType(arg0: $AzEasingType): $AzAnimationProperties;
        withAnimationSpeed(arg0: number): $AzAnimationProperties;
        startTickOffset(): number;
        isReversing(): boolean;
        hasAnimationSpeed(): boolean;
        hasEasingType(): boolean;
        hasTransitionLength(): boolean;
        hasStartTickOffset(): boolean;
        hasFreezeTickOffset(): boolean;
        hasRepeatXTimes(): boolean;
        hasReversing(): boolean;
        transitionLength(): number;
        easingType(): $AzEasingType;
        animationSpeed(): number;
        static CODEC: $AzAnimationPropertiesCodec;
        static EMPTY: $AzAnimationProperties;
        static DEFAULT: $AzAnimationProperties;
        constructor(arg0: number, arg1: $AzEasingType, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean);
        get reversing(): boolean;
    }
}
