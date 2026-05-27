import { $AzAnimationController } from "@package/mod/azure/azurelib/common/animation/controller";
import { $AzAnimationContext } from "@package/mod/azure/azurelib/common/animation";
import { $AzAnimationState } from "@package/mod/azure/azurelib/common/animation/controller/state";
import { $AzAnimationPauseState, $AzAnimationPlayState, $AzAnimationStopState, $AzAnimationTransitionState } from "@package/mod/azure/azurelib/common/animation/controller/state/impl";
import { $Record } from "@package/java/lang";
import { $StateMachine, $StateMachineContext } from "@package/mod/azure/azurelib/common/util/state";

declare module "@package/mod/azure/azurelib/common/animation/controller/state/machine" {
    export class $AzAnimationControllerStateMachine$Context<T> implements $StateMachineContext {
        stateMachine(): $AzAnimationControllerStateMachine<T>;
        animationContext(): $AzAnimationContext<T>;
        animationController(): $AzAnimationController<T>;
    }
    export class $AzAnimationControllerStateMachine<T> extends $StateMachine<$AzAnimationControllerStateMachine$Context<T>, $AzAnimationState<T>> {
        play(): void;
        isPlaying(): boolean;
        pause(): void;
        isPaused(): boolean;
        isTransitioning(): boolean;
        transition(): void;
        isStopped(): boolean;
        createContext(): $AzAnimationControllerStateMachine$Context<$AzAnimationState<T>>;
        update(): void;
        stop(): void;
        constructor(arg0: $AzAnimationControllerStateMachine$StateHolder_<$AzAnimationState<T>>, arg1: $AzAnimationController<$AzAnimationState<T>>, arg2: $AzAnimationContext<$AzAnimationState<T>>);
        get playing(): boolean;
        get paused(): boolean;
        get transitioning(): boolean;
        get stopped(): boolean;
    }
    export class $AzAnimationControllerStateMachine$StateHolder<T> extends $Record {
        pauseState(): $AzAnimationPauseState<T>;
        playState(): $AzAnimationPlayState<T>;
        transitionState(): $AzAnimationTransitionState<T>;
        stopState(): $AzAnimationStopState<T>;
        constructor(playState: $AzAnimationPlayState<T>, pauseState: $AzAnimationPauseState<T>, stopState: $AzAnimationStopState<T>, transitionState: $AzAnimationTransitionState<T>);
    }
    /**
     * Values that may be interpreted as {@link $AzAnimationControllerStateMachine$StateHolder}.
     */
    export type $AzAnimationControllerStateMachine$StateHolder_<T> = { pauseState?: $AzAnimationPauseState<any>, transitionState?: $AzAnimationTransitionState<any>, playState?: $AzAnimationPlayState<any>, stopState?: $AzAnimationStopState<any>,  } | [pauseState?: $AzAnimationPauseState<any>, transitionState?: $AzAnimationTransitionState<any>, playState?: $AzAnimationPlayState<any>, stopState?: $AzAnimationStopState<any>, ];
}
