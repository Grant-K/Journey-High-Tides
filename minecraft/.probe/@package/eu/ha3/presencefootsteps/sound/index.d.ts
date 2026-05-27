import { $Lookup, $Index, $Solver, $HeuristicStateLookup } from "@package/eu/ha3/presencefootsteps/world";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $EntityType_, $LivingEntity, $EntityType, $Entity } from "@package/net/minecraft/world/entity";
import { $ResourceManager, $PreparableReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Map_ } from "@package/java/util";
import { $PFConfig } from "@package/eu/ha3/presencefootsteps";
import { $SoundSource_, $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $Holder_ } from "@package/net/minecraft/core";
import { $Variator } from "@package/eu/ha3/presencefootsteps/config";
import { $Locomotion_, $StepSoundGenerator, $Locomotion } from "@package/eu/ha3/presencefootsteps/sound/generator";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $SoundType_ } from "@package/net/minecraft/world/level/block";
import { $JsonObjectWriter_, $BlockReport$Reportable } from "@package/eu/ha3/presencefootsteps/util";
import { $AcousticLibrary } from "@package/eu/ha3/presencefootsteps/sound/acoustics";
import { $Enum, $Record } from "@package/java/lang";
export * as generator from "@package/eu/ha3/presencefootsteps/sound/generator";
export * as acoustics from "@package/eu/ha3/presencefootsteps/sound/acoustics";
export * as player from "@package/eu/ha3/presencefootsteps/sound/player";

declare module "@package/eu/ha3/presencefootsteps/sound" {
    export class $State extends $Enum<$State> {
        getTransitionDestination(): $State;
        canTransition(): boolean;
        isExtraLoud(): boolean;
        getName(): string;
        static values(): $State[];
        static valueOf(arg0: string): $State;
        static WALK: $State;
        static DOWN: $State;
        static WANDER: $State;
        static CLIMB: $State;
        static DOWN_RUN: $State;
        static LAND: $State;
        static RUN: $State;
        static JUMP: $State;
        static STAND: $State;
        static SWIM: $State;
        static UP_RUN: $State;
        static UP: $State;
        static CLIMB_RUN: $State;
        get transitionDestination(): $State;
        get extraLoud(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $State}.
     */
    export type $State_ = "stand" | "walk" | "wander" | "swim" | "run" | "jump" | "land" | "climb" | "climb_run" | "down" | "down_run" | "up" | "up_run";
    export class $Options {
        static ofGetter(arg0: string, arg1: $Options$FloatSupplier_): $Options;
        static singular(arg0: string, arg1: number): $Options;
        static EMPTY: $Options;
        static FOLIAGE_VOLUME_OPTIONS: $Options;
        static WET_VOLUME_OPTIONS: $Options;
    }
    export interface $Options {
        and(arg0: $Options): $Options;
        get(arg0: string): number;
        containsKey(arg0: string): boolean;
        getOrDefault(arg0: string, arg1: number): number;
    }
    export class $SoundEngine implements $PreparableReloadListener {
        getIsolator(): $Isolator;
        hasData(): boolean;
        reload(): void;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        reloadEverything(arg0: $ResourceManager): void;
        getVolumeForSource(arg0: $LivingEntity): number;
        getSolver(): $Solver;
        isEnabledFor(arg0: $Entity): boolean;
        onFrame(arg0: $Minecraft, arg1: $Entity): void;
        onSoundRecieved(arg0: $Holder_<$SoundEvent>, arg1: $SoundSource_): boolean;
        isRunning(arg0: $Minecraft): boolean;
        getConfig(): $PFConfig;
        shutdown(): void;
        getName(): string;
        constructor(arg0: $PFConfig);
        get isolator(): $Isolator;
        get solver(): $Solver;
        get config(): $PFConfig;
        get name(): string;
    }
    export class $Isolator extends $Record implements $BlockReport$Reportable {
        variator(): $Variator;
        writeToReport(arg0: boolean, arg1: $JsonObjectWriter_, arg2: $Map_<string, $SoundType_>): void;
        heuristics(): $HeuristicStateLookup;
        primitives(): $Lookup<$SoundEvent>;
        blocks(): $Lookup<$BlockState>;
        acoustics(): $AcousticLibrary;
        locomotions(): $Index<$Entity, $Locomotion>;
        golems(): $Lookup<$EntityType<never>>;
        load(arg0: $ResourceManager): boolean;
        static ACOUSTICS: $ResourceLocation;
        constructor(arg0: $SoundEngine);
        constructor(variator: $Variator, locomotions: $Index<$Entity, $Locomotion_>, heuristics: $HeuristicStateLookup, golems: $Lookup<$EntityType_<never>>, blocks: $Lookup<$BlockState_>, primitives: $Lookup<$SoundEvent_>, acoustics: $AcousticLibrary);
    }
    /**
     * Values that may be interpreted as {@link $Isolator}.
     */
    export type $Isolator_ = { heuristics?: $HeuristicStateLookup, variator?: $Variator, locomotions?: $Index<$Entity, $Locomotion_>, blocks?: $Lookup<$BlockState_>, golems?: $Lookup<$EntityType_<never>>, acoustics?: $AcousticLibrary, primitives?: $Lookup<$SoundEvent_>,  } | [heuristics?: $HeuristicStateLookup, variator?: $Variator, locomotions?: $Index<$Entity, $Locomotion_>, blocks?: $Lookup<$BlockState_>, golems?: $Lookup<$EntityType_<never>>, acoustics?: $AcousticLibrary, primitives?: $Lookup<$SoundEvent_>, ];
    export class $StepSoundSource {
    }
    export interface $StepSoundSource {
        getStepGenerator(arg0: $SoundEngine): ($StepSoundGenerator) | undefined;
        isStepBlocked(): boolean;
        get stepBlocked(): boolean;
    }
    export class $Options$FloatSupplier {
    }
    export interface $Options$FloatSupplier {
        get(): number;
    }
    /**
     * Values that may be interpreted as {@link $Options$FloatSupplier}.
     */
    export type $Options$FloatSupplier_ = (() => number);
}
