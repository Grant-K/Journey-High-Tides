import { $Gson } from "@package/com/google/gson";
import { $Reader } from "@package/java/io";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $SoundEngine } from "@package/eu/ha3/presencefootsteps/sound";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $BlockReport$Reportable } from "@package/eu/ha3/presencefootsteps/util";
import { $Map, $Set } from "@package/java/util";
import { $Record } from "@package/java/lang";

declare module "@package/eu/ha3/presencefootsteps/world" {
    export class $Solver {
        static MESSY_FOLIAGE_STRATEGY: string;
    }
    export interface $Solver {
        findAssociation(arg0: $AssociationPool, arg1: $LivingEntity, arg2: number, arg3: boolean): $Association;
        findAssociation(arg0: $AssociationPool, arg1: $LivingEntity, arg2: $BlockPos_, arg3: string): $Association;
    }
    export class $Loadable {
        static GSON: $Gson;
    }
    export interface $Loadable {
        load(arg0: $Reader): void;
        add(arg0: string, arg1: string): void;
    }
    /**
     * Values that may be interpreted as {@link $Loadable}.
     */
    export type $Loadable_ = ((arg0: string, arg1: string) => void);
    export class $AssociationPool {
        findAssociation(arg0: number, arg1: boolean): $Association;
        findAssociation(arg0: $BlockPos_, arg1: string): $Association;
        wasLastMatchGolem(): boolean;
        reset(): void;
        get(arg0: $BlockPos_, arg1: $BlockState_, arg2: string): $SoundsKey;
        constructor(arg0: $LivingEntity, arg1: $SoundEngine);
    }
    export class $Association extends $Record {
        dry(): $SoundsKey;
        isResult(): boolean;
        wet(): $SoundsKey;
        foliage(): $SoundsKey;
        pos(): $BlockPos;
        isSilent(): boolean;
        dataEquals(arg0: $Association_): boolean;
        static of(arg0: $BlockState_, arg1: $BlockPos_, arg2: $LivingEntity, arg3: $SoundsKey_, arg4: $SoundsKey_, arg5: $SoundsKey_): $Association;
        source(): $LivingEntity;
        state(): $BlockState;
        static NOT_EMITTER: $Association;
        constructor(state: $BlockState_, pos: $BlockPos_, source: $LivingEntity, dry: $SoundsKey_, wet: $SoundsKey_, foliage: $SoundsKey_);
        get result(): boolean;
        get silent(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Association}.
     */
    export type $Association_ = { state?: $BlockState_, wet?: $SoundsKey_, pos?: $BlockPos_, foliage?: $SoundsKey_, dry?: $SoundsKey_, source?: $LivingEntity,  } | [state?: $BlockState_, wet?: $SoundsKey_, pos?: $BlockPos_, foliage?: $SoundsKey_, dry?: $SoundsKey_, source?: $LivingEntity, ];
    export class $HeuristicStateLookup {
        getMostSimilar(arg0: $Block_): $Block;
        constructor();
    }
    export class $SoundsKey extends $Record {
        isEmitter(): boolean;
        isResult(): boolean;
        names(): string[];
        raw(): string;
        isSilent(): boolean;
        static of(arg0: string): $SoundsKey;
        static UNASSIGNED: $SoundsKey;
        static SWIM: $SoundsKey;
        constructor(raw: string, names: string[]);
        get emitter(): boolean;
        get result(): boolean;
        get silent(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SoundsKey}.
     */
    export type $SoundsKey_ = { raw?: string, names?: string[],  } | [raw?: string, names?: string[], ];
    export class $Lookup<T> {
    }
    export interface $Lookup<T> extends $Loadable, $BlockReport$Reportable {
        getAssociation(arg0: T, arg1: string): $SoundsKey;
        getSubstrates(): $Set<string>;
        getAssociations(arg0: T): $Map<string, $SoundsKey>;
        contains(arg0: T): boolean;
        get substrates(): $Set<string>;
    }
    export class $Index<K, V> {
    }
    export interface $Index<K, V> extends $Loadable, $BlockReport$Reportable {
        contains(arg0: $ResourceLocation_): boolean;
        lookup(arg0: K): V;
    }
}
