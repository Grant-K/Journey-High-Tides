import { $AzAnimationControllerContainer } from "@package/mod/azure/azurelib/common/animation/controller";
import { $AzBoneCache } from "@package/mod/azure/azurelib/common/animation/cache";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AzBakedAnimation } from "@package/mod/azure/azurelib/common/animation/primitive";
import { $Record } from "@package/java/lang";
export * as play_behavior from "@package/mod/azure/azurelib/common/animation/play_behavior";
export * as controller from "@package/mod/azure/azurelib/common/animation/controller";
export * as primitive from "@package/mod/azure/azurelib/common/animation/primitive";
export * as dispatch from "@package/mod/azure/azurelib/common/animation/dispatch";
export * as easing from "@package/mod/azure/azurelib/common/animation/easing";
export * as cache from "@package/mod/azure/azurelib/common/animation/cache";
export * as property from "@package/mod/azure/azurelib/common/animation/property";

declare module "@package/mod/azure/azurelib/common/animation" {
    export class $AzAnimator<K, T> {
        getAnimation(arg0: T, arg1: string): $AzBakedAnimation;
        setCustomAnimations(arg0: T, arg1: number): void;
        animate(arg0: T, arg1: number): void;
        animate(arg0: T, arg1: number, arg2: boolean): void;
        getAnimationLocation(arg0: T): $ResourceLocation;
        createBoneCache(): $AzBoneCache;
        createAzAnimationTimer(arg0: $AzAnimatorConfig_): $AzAnimationTimer;
        getOrCreateContext(arg0: K): $AzAnimationContext<T>;
        registerControllers(arg0: $AzAnimationControllerContainer<T>): void;
        getAnimationControllerContainer(): $AzAnimationControllerContainer<T>;
        context(): $AzAnimationContext<T>;
        reloadAnimations: boolean;
        get animationControllerContainer(): $AzAnimationControllerContainer<T>;
    }
    export class $AzAnimationTimer {
        getAnimTime(): number;
        tick(): void;
        constructor(arg0: $AzAnimatorConfig_);
        get animTime(): number;
    }
    export class $AzAnimatorConfig$Builder {
        shouldPlayAnimationsWhileGamePaused(): $AzAnimatorConfig$Builder;
        withBoneResetTime(arg0: number): $AzAnimatorConfig$Builder;
        crashIfBoneMissing(): $AzAnimatorConfig$Builder;
        build(): $AzAnimatorConfig;
    }
    export class $AzAnimationContext<T> {
        animatable(): T;
        boneCache(): $AzBoneCache;
        timer(): $AzAnimationTimer;
        config(): $AzAnimatorConfig;
        constructor(arg0: $AzBoneCache, arg1: $AzAnimatorConfig_, arg2: $AzAnimationTimer);
    }
    export class $AzAnimatorAccessor<K, T> {
        static getOrNull<K, T>(arg0: T): $AzAnimator<K, T>;
        static get<K, T>(arg0: T): ($AzAnimator<K, T>) | undefined;
        static cast<K, T>(arg0: T): $AzAnimatorAccessor<K, T>;
    }
    export interface $AzAnimatorAccessor<K, T> {
        setAnimator(arg0: $AzAnimator<K, T>): void;
        getAnimatorOrNull(): $AzAnimator<K, T>;
        getAnimator(): ($AzAnimator<K, T>) | undefined;
        get animatorOrNull(): $AzAnimator<K, T>;
    }
    export class $AzAnimatorConfig extends $Record {
        static defaultConfig(): $AzAnimatorConfig;
        boneResetTime(): number;
        shouldPlayAnimationsWhileGamePaused(): boolean;
        crashIfBoneMissing(): boolean;
        static builder(): $AzAnimatorConfig$Builder;
        constructor(boneResetTime: number, crashIfBoneMissing: boolean, shouldPlayAnimationsWhileGamePaused: boolean);
    }
    /**
     * Values that may be interpreted as {@link $AzAnimatorConfig}.
     */
    export type $AzAnimatorConfig_ = { boneResetTime?: number, shouldPlayAnimationsWhileGamePaused?: boolean, crashIfBoneMissing?: boolean,  } | [boneResetTime?: number, shouldPlayAnimationsWhileGamePaused?: boolean, crashIfBoneMissing?: boolean, ];
}
