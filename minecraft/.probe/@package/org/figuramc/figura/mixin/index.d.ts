import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $Biome$ClimateSettings } from "@package/net/minecraft/world/level/biome";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $AABB_, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $LevelEntityGetter } from "@package/net/minecraft/world/level/entity";
import { $LoadingCache } from "@package/com/google/common/cache";
export * as sound from "@package/org/figuramc/figura/mixin/sound";
export * as gui from "@package/org/figuramc/figura/mixin/gui";
export * as input from "@package/org/figuramc/figura/mixin/input";
export * as render from "@package/org/figuramc/figura/mixin/render";
export * as particle from "@package/org/figuramc/figura/mixin/particle";

declare module "@package/org/figuramc/figura/mixin" {
    export class $LivingEntityAccessor {
    }
    export interface $LivingEntityAccessor {
        isJumping(): boolean;
        getSwingDuration(): number;
        invokeUpdateWalkAnimation(arg0: number): void;
        get jumping(): boolean;
        get swingDuration(): number;
    }
    export class $SkullBlockEntityAccessor {
        static getProfileCache(): $LoadingCache<string, $CompletableFuture<($GameProfile) | undefined>>;
        static get profileCache(): $LoadingCache<string, $CompletableFuture<($GameProfile) | undefined>>;
    }
    export interface $SkullBlockEntityAccessor {
    }
    export class $EntityAccessor {
    }
    export interface $EntityAccessor {
        getPermissionLevel(): number;
        getLevel(): $Level;
        get permissionLevel(): number;
        get level(): $Level;
    }
    export class $AABBInvoker {
        static getDirection(box: $AABB_, intersectingVector: $Vec3_, traceDistanceResult: number[], approachDirection: $Direction_, deltaX: number, deltaY: number, deltaZ: number): $Direction;
    }
    export interface $AABBInvoker {
    }
    export class $ClientLevelInvoker {
    }
    export interface $ClientLevelInvoker {
        getEntityGetter(): $LevelEntityGetter<$Entity>;
        get entityGetter(): $LevelEntityGetter<$Entity>;
    }
    /**
     * Values that may be interpreted as {@link $ClientLevelInvoker}.
     */
    export type $ClientLevelInvoker_ = (() => $LevelEntityGetter<$Entity>);
    export class $BiomeAccessor {
    }
    export interface $BiomeAccessor {
        getClimateSettings(): $Biome$ClimateSettings;
        getTheTemperature(arg0: $BlockPos_): number;
        get climateSettings(): $Biome$ClimateSettings;
    }
    export class $MinecraftAccesor {
    }
    export interface $MinecraftAccesor {
        figura$invokeGetTickTargetMillis(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftAccesor}.
     */
    export type $MinecraftAccesor_ = ((arg0: number) => number);
    export class $BlockBehaviourAccessor {
    }
    export interface $BlockBehaviourAccessor {
        hasCollision(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviourAccessor}.
     */
    export type $BlockBehaviourAccessor_ = (() => boolean);
}
