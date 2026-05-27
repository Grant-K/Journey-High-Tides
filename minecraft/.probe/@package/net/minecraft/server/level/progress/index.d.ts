import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Executor_ } from "@package/java/util/concurrent";
import { $ChunkStatus_, $ChunkStatus } from "@package/net/minecraft/world/level/chunk/status";

declare module "@package/net/minecraft/server/level/progress" {
    export class $ChunkProgressListener {
        static calculateDiameter(arg0: number): number;
    }
    export interface $ChunkProgressListener {
        updateSpawnPos(arg0: $ChunkPos): void;
        onStatusChange(arg0: $ChunkPos, arg1: $ChunkStatus_): void;
        start(): void;
        stop(): void;
    }
    export class $ChunkProgressListenerFactory {
    }
    export interface $ChunkProgressListenerFactory {
        create(arg0: number): $ChunkProgressListener;
    }
    /**
     * Values that may be interpreted as {@link $ChunkProgressListenerFactory}.
     */
    export type $ChunkProgressListenerFactory_ = ((arg0: number) => $ChunkProgressListener);
    export class $ProcessorChunkProgressListener implements $ChunkProgressListener {
        static createStarted(arg0: $ChunkProgressListener, arg1: $Executor_): $ProcessorChunkProgressListener;
        updateSpawnPos(arg0: $ChunkPos): void;
        onStatusChange(arg0: $ChunkPos, arg1: $ChunkStatus_): void;
        start(): void;
        stop(): void;
    }
    export class $StoringChunkProgressListener implements $ChunkProgressListener {
        static createFromGameruleRadius(arg0: number): $StoringChunkProgressListener;
        getProgress(): number;
        getDiameter(): number;
        getFullDiameter(): number;
        updateSpawnPos(arg0: $ChunkPos): void;
        onStatusChange(arg0: $ChunkPos, arg1: $ChunkStatus_): void;
        static createCompleted(): $StoringChunkProgressListener;
        static create(arg0: number): $StoringChunkProgressListener;
        getStatus(arg0: number, arg1: number): $ChunkStatus;
        start(): void;
        stop(): void;
        get progress(): number;
        get diameter(): number;
        get fullDiameter(): number;
    }
    export class $LoggerChunkProgressListener implements $ChunkProgressListener {
        static createFromGameruleRadius(arg0: number): $LoggerChunkProgressListener;
        getProgress(): number;
        updateSpawnPos(arg0: $ChunkPos): void;
        onStatusChange(arg0: $ChunkPos, arg1: $ChunkStatus_): void;
        static createCompleted(): $LoggerChunkProgressListener;
        static create(arg0: number): $LoggerChunkProgressListener;
        start(): void;
        stop(): void;
        get progress(): number;
    }
}
