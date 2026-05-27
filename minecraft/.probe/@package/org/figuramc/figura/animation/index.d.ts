import { $Pair } from "@package/com/mojang/datafixers/util";
import { $FiguraModelPart } from "@package/org/figuramc/figura/model";
import { $Avatar } from "@package/org/figuramc/figura/avatar";
import { $FiguraVec3 } from "@package/org/figuramc/figura/math/vector";
import { $Comparable, $Object, $Enum, $Record } from "@package/java/lang";

declare module "@package/org/figuramc/figura/animation" {
    export class $TransformType extends $Enum<$TransformType> {
        static values(): $TransformType[];
        static valueOf(name: string): $TransformType;
        apply(part: $FiguraModelPart, vec: $FiguraVec3, merge: boolean): void;
        static ROTATION: $TransformType;
        static POSITION: $TransformType;
        static GLOBAL_ROT: $TransformType;
        static SCALE: $TransformType;
    }
    /**
     * Values that may be interpreted as {@link $TransformType}.
     */
    export type $TransformType_ = "position" | "rotation" | "global_rot" | "scale";
    export class $Animation$PlayState extends $Enum<$Animation$PlayState> {
        static values(): $Animation$PlayState[];
        static valueOf(name: string): $Animation$PlayState;
        static PAUSED: $Animation$PlayState;
        static STOPPED: $Animation$PlayState;
        static HOLDING: $Animation$PlayState;
        static PLAYING: $Animation$PlayState;
    }
    /**
     * Values that may be interpreted as {@link $Animation$PlayState}.
     */
    export type $Animation$PlayState_ = "stopped" | "paused" | "playing" | "holding";
    export class $Keyframe implements $Comparable<$Keyframe> {
        getInterpolation(): $Interpolation;
        getTargetB(delta: number): $FiguraVec3;
        getBezierRightTime(): $FiguraVec3;
        getBezierLeftTime(): $FiguraVec3;
        getTargetA(delta: number): $FiguraVec3;
        getBezierRight(): $FiguraVec3;
        getBezierLeft(): $FiguraVec3;
        getTime(): number;
        compareTo(other: $Keyframe): number;
        constructor(owner: $Avatar, animation: $Animation, time: number, interpolation: $Interpolation, a: $Pair<$FiguraVec3, string[]>, b: $Pair<$FiguraVec3, string[]>, bezierLeft: $FiguraVec3, bezierRight: $FiguraVec3, bezierLeftTime: $FiguraVec3, bezierRightTime: $FiguraVec3);
        get interpolation(): $Interpolation;
        get bezierRightTime(): $FiguraVec3;
        get bezierLeftTime(): $FiguraVec3;
        get bezierRight(): $FiguraVec3;
        get bezierLeft(): $FiguraVec3;
        get time(): number;
    }
    export class $Animation$LoopMode extends $Enum<$Animation$LoopMode> {
        static values(): $Animation$LoopMode[];
        static valueOf(name: string): $Animation$LoopMode;
        static ONCE: $Animation$LoopMode;
        static LOOP: $Animation$LoopMode;
        static HOLD: $Animation$LoopMode;
    }
    /**
     * Values that may be interpreted as {@link $Animation$LoopMode}.
     */
    export type $Animation$LoopMode_ = "loop" | "once" | "hold";
    export class $Animation$AnimationChannel extends $Record {
        keyframes(): $Keyframe[];
        type(): $TransformType;
        constructor(type: $TransformType_, ...keyframes: $Keyframe[]);
    }
    /**
     * Values that may be interpreted as {@link $Animation$AnimationChannel}.
     */
    export type $Animation$AnimationChannel_ = { keyframes?: $Keyframe[], type?: $TransformType_,  } | [keyframes?: $Keyframe[], type?: $TransformType_, ];
    export class $Animation {
        play(): $Animation;
        isPlaying(): boolean;
        pause(): $Animation;
        isPaused(): boolean;
        speed(speed: number): $Animation;
        setSpeed(speed: number): $Animation;
        isHolding(): boolean;
        getSpeed(): number;
        __index(arg: string): $Object;
        restart(): $Animation;
        getPlayState(): string;
        getBlend(): number;
        setBlend(blend: number): $Animation;
        getStartDelay(): number;
        setStartDelay(delay: number): $Animation;
        getLoopDelay(): number;
        setLoopDelay(delay: number): $Animation;
        getOverrideRot(): boolean;
        getOverridePos(): boolean;
        getOverrideScale(): boolean;
        setOverrideRot(override: boolean): $Animation;
        overrideRot(override: boolean): $Animation;
        setOverridePos(override: boolean): $Animation;
        overridePos(override: boolean): $Animation;
        setOverrideScale(override: boolean): $Animation;
        overrideScale(override: boolean): $Animation;
        startDelay(delay: number): $Animation;
        loopDelay(delay: number): $Animation;
        playCode(minTime: number, maxTime: number): void;
        tick(): void;
        setPlaying(bool: boolean): $Animation;
        newCode(time: number, data: string): $Animation;
        addAnimation(part: $FiguraModelPart, anim: $Animation$AnimationChannel_): void;
        setLoop(loop: string): $Animation;
        playing(bool: boolean): $Animation;
        setOverride(override: boolean): $Animation;
        loop(loop: string): $Animation;
        getOffset(): number;
        setOffset(offset: number): $Animation;
        getTime(): number;
        setTime(time: number): $Animation;
        isStopped(): boolean;
        getLoop(): string;
        getName(): string;
        priority(priority: number): $Animation;
        length(length: number): $Animation;
        getLength(): number;
        blend(blend: number): $Animation;
        offset(offset: number): $Animation;
        code(time: number, data: string): $Animation;
        setPriority(priority: number): $Animation;
        time(time: number): $Animation;
        getPriority(): number;
        stop(): $Animation;
        setLength(length: number): $Animation;
        override(override: boolean): $Animation;
        modelName: string;
        playState: $Animation$PlayState;
        name: string;
        constructor(owner: $Avatar, modelName: string, name: string, loop: $Animation$LoopMode_, override: boolean, length: number, offset: number, blend: number, startDelay: number, loopDelay: number);
        get paused(): boolean;
        get holding(): boolean;
        get stopped(): boolean;
    }
}
