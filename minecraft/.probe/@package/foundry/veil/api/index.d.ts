import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Codec } from "@package/com/mojang/serialization";
import { $Callable_, $CompletableFuture, $Executor, $ScheduledFuture } from "@package/java/util/concurrent";
import { $ResourceLocation_, $ResourceLocation, $FileToIdConverter } from "@package/net/minecraft/resources";
import { $SimplePreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $Runnable_ } from "@package/java/lang";
import { $Map_, $Map } from "@package/java/util";
export * as client from "@package/foundry/veil/api/client";
export * as quasar from "@package/foundry/veil/api/quasar";
export * as flare from "@package/foundry/veil/api/flare";
export * as resource from "@package/foundry/veil/api/resource";
export * as event from "@package/foundry/veil/api/event";
export * as network from "@package/foundry/veil/api/network";

declare module "@package/foundry/veil/api" {
    export class $CodecReloadListener<T> extends $SimplePreparableReloadListener<$Map<$ResourceLocation, T>> {
        constructor(arg0: $Codec<$Map_<$ResourceLocation_, T>>, arg1: $FileToIdConverter, arg2: $HolderLookup$Provider);
        constructor(arg0: $Codec<$Map_<$ResourceLocation_, T>>, arg1: $FileToIdConverter);
    }
    export class $TickTaskScheduler {
        static get(arg0: $MinecraftServer): $TickTaskScheduler;
    }
    export interface $TickTaskScheduler extends $Executor {
        isShutdown(): boolean;
        scheduleAtFixedRate(arg0: $Runnable_, arg1: number, arg2: number): $TickTaskScheduler$TickTask<never>;
        execute(arg0: $Runnable_): void;
        schedule(arg0: $Runnable_, arg1: number): $TickTaskScheduler$TickTask<never>;
        schedule<V>(arg0: $Callable_<V>, arg1: number): $TickTaskScheduler$TickTask<V>;
        get shutdown(): boolean;
    }
    export class $TickTaskScheduler$TickTask<V> {
    }
    export interface $TickTaskScheduler$TickTask<V> extends $ScheduledFuture<V> {
        getDelay(): number;
        toCompletableFuture(): $CompletableFuture<V>;
        get delay(): number;
    }
}
