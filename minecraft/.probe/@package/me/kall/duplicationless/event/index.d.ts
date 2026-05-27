import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $EntityEvent } from "@package/net/neoforged/neoforge/event/entity";

declare module "@package/me/kall/duplicationless/event" {
    export class $BlockChangeEvent extends $Event {
        blockPos(): number;
        chunkPos(): number;
        dim(): $ResourceLocation;
        level(): $ServerLevel;
        oldState(): $BlockState;
        newState(): $BlockState;
        constructor(level: $ServerLevel, oldState: $BlockState_, newState: $BlockState_, blockPos: $BlockPos_);
    }
    export class $ChunkTickEvent$Pre extends $ChunkTickEvent {
        constructor(chunk: $LevelChunk, level: $ServerLevel, randomTickSpeed: number);
    }
    export class $EntityChunkChangeEvent$Section$After extends $EntityChunkChangeEvent$Section {
        constructor(entity: $Entity);
    }
    export class $EntityChunkChangeEvent$After extends $EntityChunkChangeEvent {
        constructor(entity: $Entity);
    }
    export class $EntityChunkChangeEvent$Before extends $EntityChunkChangeEvent {
        constructor(entity: $Entity);
    }
    export class $EntityChunkChangeEvent$Section extends $EntityChunkChangeEvent {
        constructor(entity: $Entity);
    }
    export class $ChunkTickEvent extends $Event {
        getChunk(): $LevelChunk;
        randomTickSpeed(): number;
        getLevel(): $ServerLevel;
        constructor(chunk: $LevelChunk, level: $ServerLevel, randomTickSpeed: number);
        get chunk(): $LevelChunk;
        get level(): $ServerLevel;
    }
    export class $ReloadCommandEvent extends $Event {
        server: $MinecraftServer;
        constructor(server: $MinecraftServer);
    }
    export class $EntityChunkChangeEvent extends $EntityEvent {
        constructor(entity: $Entity);
    }
    export class $EntityChunkChangeEvent$Section$Before extends $EntityChunkChangeEvent$Section {
        constructor(entity: $Entity);
    }
    export class $ChunkTickEvent$Post extends $ChunkTickEvent {
        constructor(chunk: $LevelChunk, level: $ServerLevel, randomTickSpeed: number);
    }
}
