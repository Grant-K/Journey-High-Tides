import { $ServerLevelAccessor, $Level, $EntityGetter, $LevelAccessor, $Level_ } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $ChunkSource } from "@package/net/minecraft/world/level/chunk";
import { $ArrayList, $List, $Map, $Set } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Thread, $Iterable } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $SchematicLevelExtension } from "@package/dev/ryanhcode/sable/neoforge/mixinterface/compatibility/create/schematics";
import { $BlockEntity, $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/createmod/catnip/levelWrappers" {
    export class $SchematicLevel extends $WrappedLevel implements $ServerLevelAccessor, $SchematicLevelAccessor, $SchematicLevelExtension {
        getBlockEntities(): $Iterable<$BlockEntity>;
        getLevel(): $ServerLevel;
        setBounds(arg0: $BoundingBox): void;
        sable$getSubLevels(): $List<any>;
        getRenderedBlockEntities(): $Iterable<$BlockEntity>;
        getAllPositions(): $Set<$BlockPos>;
        getBlockMap(): $Map<$BlockPos, $BlockState>;
        getEntityList(): $List<$Entity>;
        getBounds(): $BoundingBox;
        addFreshEntityWithPassengers(arg0: $Entity): void;
        self(): $EntityGetter;
        restoringBlockSnapshots: boolean;
        /**
         * @deprecated
         */
        threadSafeRandom: $RandomSource;
        static LONG_PARTICLE_CLIP_RANGE: number;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        static MAX_BRIGHTNESS: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        rainLevel: number;
        oThunderLevel: number;
        static ATTACHMENTS_NBT_KEY: string;
        thread: $Thread;
        renderMode: boolean;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        oRainLevel: number;
        anchor: $BlockPos;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        captureBlockSnapshots: boolean;
        constructor(arg0: $BlockPos_, arg1: $Level_);
        constructor(arg0: $Level_);
        get blockEntities(): $Iterable<$BlockEntity>;
        get level(): $ServerLevel;
        get renderedBlockEntities(): $Iterable<$BlockEntity>;
        get allPositions(): $Set<$BlockPos>;
        get blockMap(): $Map<$BlockPos, $BlockState>;
        get entityList(): $List<$Entity>;
    }
    export class $WrappedLevel extends $Level {
        getLevel(): $Level;
        setChunkSource(arg0: $ChunkSource): void;
        self(): $EntityGetter;
        restoringBlockSnapshots: boolean;
        oThunderLevel: number;
        /**
         * @deprecated
         */
        threadSafeRandom: $RandomSource;
        static LONG_PARTICLE_CLIP_RANGE: number;
        static ATTACHMENTS_NBT_KEY: string;
        thread: $Thread;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        oRainLevel: number;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static MAX_BRIGHTNESS: number;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        rainLevel: number;
        captureBlockSnapshots: boolean;
        constructor(arg0: $Level_);
        get level(): $Level;
        set chunkSource(value: $ChunkSource);
    }
    export class $SchematicLevelAccessor {
    }
    export interface $SchematicLevelAccessor extends $LevelAccessor {
        getBlockEntities(): $Iterable<$BlockEntity>;
        setBounds(arg0: $BoundingBox): void;
        getRenderedBlockEntities(): $Iterable<$BlockEntity>;
        getAllPositions(): $Set<$BlockPos>;
        getBlockMap(): $Map<$BlockPos, $BlockState>;
        getEntityList(): $List<$Entity>;
        getBounds(): $BoundingBox;
        get blockEntities(): $Iterable<$BlockEntity>;
        get renderedBlockEntities(): $Iterable<$BlockEntity>;
        get allPositions(): $Set<$BlockPos>;
        get blockMap(): $Map<$BlockPos, $BlockState>;
        get entityList(): $List<$Entity>;
    }
}
