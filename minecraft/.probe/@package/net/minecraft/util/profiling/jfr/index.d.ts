import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $RegionFileVersion, $RegionStorageInfo_ } from "@package/net/minecraft/world/level/chunk/storage";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Path_, $Path } from "@package/java/nio/file";
import { $ConnectionProtocol_ } from "@package/net/minecraft/network";
import { $SocketAddress } from "@package/java/net";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $ProfiledDuration } from "@package/net/minecraft/util/profiling/jfr/callback";
import { $Quantiles$ScaleAndIndexes } from "@package/com/google/common/math";
import { $PacketType_ } from "@package/net/minecraft/network/protocol";
import { $Map } from "@package/java/util";
import { $Enum } from "@package/java/lang";
export * as event from "@package/net/minecraft/util/profiling/jfr/event";
export * as stats from "@package/net/minecraft/util/profiling/jfr/stats";
export * as serialize from "@package/net/minecraft/util/profiling/jfr/serialize";
export * as parse from "@package/net/minecraft/util/profiling/jfr/parse";
export * as callback from "@package/net/minecraft/util/profiling/jfr/callback";

declare module "@package/net/minecraft/util/profiling/jfr" {
    export class $Environment extends $Enum<$Environment> {
        getDescription(): string;
        static values(): $Environment[];
        static valueOf(arg0: string): $Environment;
        static from(arg0: $MinecraftServer): $Environment;
        static SERVER: $Environment;
        static CLIENT: $Environment;
        get description(): string;
    }
    /**
     * Values that may be interpreted as {@link $Environment}.
     */
    export type $Environment_ = "client" | "server";
    export class $SummaryReporter {
        recordingStopped(arg0: $Path_): void;
    }
    export class $JfrProfiler implements $JvmProfiler {
        onServerTick(arg0: number): void;
        onWorldLoadedStarted(): $ProfiledDuration;
        isAvailable(): boolean;
        onPacketSent(arg0: $ConnectionProtocol_, arg1: $PacketType_<never>, arg2: $SocketAddress, arg3: number): void;
        onRegionFileRead(arg0: $RegionStorageInfo_, arg1: $ChunkPos, arg2: $RegionFileVersion, arg3: number): void;
        onRegionFileWrite(arg0: $RegionStorageInfo_, arg1: $ChunkPos, arg2: $RegionFileVersion, arg3: number): void;
        onChunkGenerate(arg0: $ChunkPos, arg1: $ResourceKey_<$Level>, arg2: string): $ProfiledDuration;
        onPacketReceived(arg0: $ConnectionProtocol_, arg1: $PacketType_<never>, arg2: $SocketAddress, arg3: number): void;
        isRunning(): boolean;
        static getInstance(): $JfrProfiler;
        start(arg0: $Environment_): boolean;
        stop(): $Path;
        static TICK_CATEGORY: string;
        static WORLD_GEN_CATEGORY: string;
        static STORAGE_CATEGORY: string;
        static NETWORK_CATEGORY: string;
        static ROOT_CATEGORY: string;
        get available(): boolean;
        get running(): boolean;
        static get instance(): $JfrProfiler;
    }
    export class $JvmProfiler {
        static INSTANCE: $JvmProfiler;
    }
    export interface $JvmProfiler {
        onServerTick(arg0: number): void;
        onWorldLoadedStarted(): $ProfiledDuration;
        isAvailable(): boolean;
        onPacketSent(arg0: $ConnectionProtocol_, arg1: $PacketType_<never>, arg2: $SocketAddress, arg3: number): void;
        onRegionFileRead(arg0: $RegionStorageInfo_, arg1: $ChunkPos, arg2: $RegionFileVersion, arg3: number): void;
        onRegionFileWrite(arg0: $RegionStorageInfo_, arg1: $ChunkPos, arg2: $RegionFileVersion, arg3: number): void;
        onChunkGenerate(arg0: $ChunkPos, arg1: $ResourceKey_<$Level>, arg2: string): $ProfiledDuration;
        onPacketReceived(arg0: $ConnectionProtocol_, arg1: $PacketType_<never>, arg2: $SocketAddress, arg3: number): void;
        isRunning(): boolean;
        start(arg0: $Environment_): boolean;
        stop(): $Path;
        get available(): boolean;
        get running(): boolean;
    }
    export class $Percentiles {
        static evaluate(arg0: number[]): $Map<number, number>;
        static evaluate(arg0: number[]): $Map<number, number>;
        static DEFAULT_INDEXES: $Quantiles$ScaleAndIndexes;
    }
    export class $JvmProfiler$NoOpProfiler implements $JvmProfiler {
        onServerTick(arg0: number): void;
        onWorldLoadedStarted(): $ProfiledDuration;
        isAvailable(): boolean;
        onPacketSent(arg0: $ConnectionProtocol_, arg1: $PacketType_<never>, arg2: $SocketAddress, arg3: number): void;
        onRegionFileRead(arg0: $RegionStorageInfo_, arg1: $ChunkPos, arg2: $RegionFileVersion, arg3: number): void;
        onRegionFileWrite(arg0: $RegionStorageInfo_, arg1: $ChunkPos, arg2: $RegionFileVersion, arg3: number): void;
        onChunkGenerate(arg0: $ChunkPos, arg1: $ResourceKey_<$Level>, arg2: string): $ProfiledDuration;
        onPacketReceived(arg0: $ConnectionProtocol_, arg1: $PacketType_<never>, arg2: $SocketAddress, arg3: number): void;
        isRunning(): boolean;
        start(arg0: $Environment_): boolean;
        stop(): $Path;
        constructor();
        get available(): boolean;
        get running(): boolean;
    }
}
