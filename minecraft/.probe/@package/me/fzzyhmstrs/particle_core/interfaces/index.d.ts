import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Particle } from "@package/net/minecraft/client/particle";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ConcurrentHashMap } from "@package/java/util/concurrent";
import { $ParticleOptions } from "@package/net/minecraft/core/particles";

declare module "@package/me/fzzyhmstrs/particle_core/interfaces" {
    export class $BlockPosStorer {
    }
    export interface $BlockPosStorer {
        particle_core_getCachedPos(): $BlockPos;
        particle_core_getCachedState(): $BlockState;
        particle_core_tickCachedPos(): void;
        particle_core_getCachedEmpty(): boolean;
    }
    export class $CachedLightPreparer {
    }
    export interface $CachedLightPreparer {
        particle_core_tickLightUpdate(): void;
    }
    /**
     * Values that may be interpreted as {@link $CachedLightPreparer}.
     */
    export type $CachedLightPreparer_ = (() => void);
    export class $CachedLightProvider {
    }
    export interface $CachedLightProvider {
        particle_core_getCache(): $ConcurrentHashMap<$BlockPos, number>;
    }
    /**
     * Values that may be interpreted as {@link $CachedLightProvider}.
     */
    export type $CachedLightProvider_ = (() => $ConcurrentHashMap<$BlockPos_, number>);
    export class $ParticleVertexer {
    }
    export interface $ParticleVertexer {
        particle_core_particleVertex(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ParticleVertexer}.
     */
    export type $ParticleVertexer_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number) => void);
    export class $ParticleCreator {
    }
    export interface $ParticleCreator {
        particle_core_createSafe<T extends $ParticleOptions>(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): $Particle;
    }
    /**
     * Values that may be interpreted as {@link $ParticleCreator}.
     */
    export type $ParticleCreator_ = ((arg0: any, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number) => $Particle);
}
