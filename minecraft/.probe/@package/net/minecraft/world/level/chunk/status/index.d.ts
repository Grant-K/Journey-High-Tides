import { $UnaryOperator_ } from "@package/java/util/function";
import { $ChunkTaskPriorityQueueSorter$Message, $ThreadedLevelLightEngine, $ServerLevel, $GenerationChunkHolder } from "@package/net/minecraft/server/level";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ProcessorHandle } from "@package/net/minecraft/util/thread";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $ChunkGenerator, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $List, $EnumSet } from "@package/java/util";
import { $Runnable_, $Enum, $Record, $Runnable } from "@package/java/lang";
import { $Heightmap$Types } from "@package/net/minecraft/world/level/levelgen";
import { $StaticCache2D } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/level/chunk/status" {
    export class $ChunkStatusTask {
    }
    export interface $ChunkStatusTask {
        doWork(arg0: $WorldGenContext_, arg1: $ChunkStep_, arg2: $StaticCache2D<$GenerationChunkHolder>, arg3: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkStatusTask}.
     */
    export type $ChunkStatusTask_ = ((arg0: $WorldGenContext, arg1: $ChunkStep, arg2: $StaticCache2D<$GenerationChunkHolder>, arg3: $ChunkAccess) => $CompletableFuture<$ChunkAccess>);
    export class $ChunkStatusTasks {
        constructor();
    }
    export class $ChunkStep$Builder {
        addRequirement(arg0: $ChunkStatus_, arg1: number): $ChunkStep$Builder;
        blockStateWriteRadius(arg0: number): $ChunkStep$Builder;
        setTask(arg0: $ChunkStatusTask_): $ChunkStep$Builder;
        build(): $ChunkStep;
        set task(value: $ChunkStatusTask_);
    }
    export class $WorldGenContext extends $Record {
        lightEngine(): $ThreadedLevelLightEngine;
        structureManager(): $StructureTemplateManager;
        mainThreadMailBox(): $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable>>;
        generator(): $ChunkGenerator;
        level(): $ServerLevel;
        constructor(arg0: $ServerLevel, arg1: $ChunkGenerator, arg2: $StructureTemplateManager, arg3: $ThreadedLevelLightEngine, arg4: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable_>>);
    }
    /**
     * Values that may be interpreted as {@link $WorldGenContext}.
     */
    export type $WorldGenContext_ = { mainThreadMailBox?: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable_>>, lightEngine?: $ThreadedLevelLightEngine, generator?: $ChunkGenerator, level?: $ServerLevel, structureManager?: $StructureTemplateManager,  } | [mainThreadMailBox?: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable_>>, lightEngine?: $ThreadedLevelLightEngine, generator?: $ChunkGenerator, level?: $ServerLevel, structureManager?: $StructureTemplateManager, ];
    export class $ChunkPyramid extends $Record {
        steps(): $ImmutableList<$ChunkStep>;
        getStepTo(arg0: $ChunkStatus_): $ChunkStep;
        static GENERATION_PYRAMID: $ChunkPyramid;
        static LOADING_PYRAMID: $ChunkPyramid;
        constructor(arg0: $ImmutableList<$ChunkStep_>);
    }
    /**
     * Values that may be interpreted as {@link $ChunkPyramid}.
     */
    export type $ChunkPyramid_ = { steps?: $ImmutableList<$ChunkStep_>,  } | [steps?: $ImmutableList<$ChunkStep_>, ];
    export class $ChunkDependencies {
        getRadius(): number;
        getRadiusOf(arg0: $ChunkStatus_): number;
        asList(): $ImmutableList<$ChunkStatus>;
        size(): number;
        get(arg0: number): $ChunkStatus;
        constructor(arg0: $ImmutableList<$ChunkStatus_>);
        get radius(): number;
    }
    export interface $ChunkStatus extends RegistryMarked<RegistryTypes.ChunkStatusTag, RegistryTypes.ChunkStatus> {}
    export class $ChunkPyramid$Builder {
        step(arg0: $ChunkStatus_, arg1: $UnaryOperator_<$ChunkStep$Builder>): $ChunkPyramid$Builder;
        build(): $ChunkPyramid;
        constructor();
    }
    export class $ChunkType extends $Enum<$ChunkType> {
        static values(): $ChunkType[];
        static valueOf(arg0: string): $ChunkType;
        static LEVELCHUNK: $ChunkType;
        static PROTOCHUNK: $ChunkType;
    }
    /**
     * Values that may be interpreted as {@link $ChunkType}.
     */
    export type $ChunkType_ = "protochunk" | "levelchunk";
    export class $ChunkStep extends $Record {
        targetStatus(): $ChunkStatus;
        directDependencies(): $ChunkDependencies;
        accumulatedDependencies(): $ChunkDependencies;
        blockStateWriteRadius(): number;
        getAccumulatedRadiusOf(arg0: $ChunkStatus_): number;
        apply(arg0: $WorldGenContext_, arg1: $StaticCache2D<$GenerationChunkHolder>, arg2: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        task(): $ChunkStatusTask;
        constructor(arg0: $ChunkStatus_, arg1: $ChunkDependencies, arg2: $ChunkDependencies, arg3: number, arg4: $ChunkStatusTask_);
    }
    /**
     * Values that may be interpreted as {@link $ChunkStep}.
     */
    export type $ChunkStep_ = { accumulatedDependencies?: $ChunkDependencies, blockStateWriteRadius?: number, task?: $ChunkStatusTask_, targetStatus?: $ChunkStatus_, directDependencies?: $ChunkDependencies,  } | [accumulatedDependencies?: $ChunkDependencies, blockStateWriteRadius?: number, task?: $ChunkStatusTask_, targetStatus?: $ChunkStatus_, directDependencies?: $ChunkDependencies, ];
    export class $ChunkStatus {
        isOrAfter(arg0: $ChunkStatus_): boolean;
        heightmapsAfter(): $EnumSet<$Heightmap$Types>;
        static getStatusList(): $List<$ChunkStatus>;
        getChunkType(): $ChunkType;
        isOrBefore(arg0: $ChunkStatus_): boolean;
        getIndex(): number;
        isAfter(arg0: $ChunkStatus_): boolean;
        isBefore(arg0: $ChunkStatus_): boolean;
        static byName(arg0: string): $ChunkStatus;
        getName(): string;
        static max(arg0: $ChunkStatus_, arg1: $ChunkStatus_): $ChunkStatus;
        getParent(): $ChunkStatus;
        static LIGHT: $ChunkStatus;
        static NOISE: $ChunkStatus;
        static MAX_STRUCTURE_DISTANCE: number;
        static SPAWN: $ChunkStatus;
        static FULL: $ChunkStatus;
        static FEATURES: $ChunkStatus;
        static STRUCTURE_STARTS: $ChunkStatus;
        static STRUCTURE_REFERENCES: $ChunkStatus;
        static FINAL_HEIGHTMAPS: $EnumSet<$Heightmap$Types>;
        static SURFACE: $ChunkStatus;
        static INITIALIZE_LIGHT: $ChunkStatus;
        static BIOMES: $ChunkStatus;
        static CARVERS: $ChunkStatus;
        static EMPTY: $ChunkStatus;
        static get statusList(): $List<$ChunkStatus>;
        get chunkType(): $ChunkType;
        get index(): number;
        get name(): string;
        get parent(): $ChunkStatus;
    }
    /**
     * Values that may be interpreted as {@link $ChunkStatus}.
     */
    export type $ChunkStatus_ = RegistryTypes.ChunkStatus;
}
