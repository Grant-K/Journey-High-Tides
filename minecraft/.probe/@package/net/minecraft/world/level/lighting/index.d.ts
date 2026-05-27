import { $ChunkPos, $LevelHeightAccessor, $BlockGetter, $LightLayer_ } from "@package/net/minecraft/world/level";
import { $LongPredicate_ } from "@package/java/util/function";
import { $BlockPos_, $Direction_, $SectionPos } from "@package/net/minecraft/core";
import { $LongLinkedOpenHashSet, $Long2LongLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $DataLayer, $LightChunkGetter, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $SkyLightSectionStorageExtension } from "@package/dev/engine_room/flywheel/backend";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $SequencedSet } from "@package/java/util";
import { $Enum, $Object } from "@package/java/lang";
import { $LayerLightSectionStorageAccessor, $SkyDataLayerStorageMapAccessor, $LightEngineAccessor } from "@package/dev/engine_room/flywheel/backend/mixin/light";

declare module "@package/net/minecraft/world/level/lighting" {
    export class $LayerLightEventListener {
    }
    export interface $LayerLightEventListener extends $LightEventListener {
        getLightValue(arg0: $BlockPos_): number;
        getDataLayerData(arg0: $SectionPos): $DataLayer;
    }
    export class $DynamicGraphMinFixedPoint {
        removeIf(arg0: $LongPredicate_): void;
        getQueueSize(): number;
        static SOURCE: number;
        get queueSize(): number;
    }
    export class $LightEngine$QueueEntry {
        static getFromLevel(arg0: number): number;
        static isIncreaseFromEmission(arg0: number): boolean;
        static decreaseAllDirections(arg0: number): number;
        static increaseLightFromEmission(arg0: number, arg1: boolean): number;
        static shouldPropagateInDirection(arg0: number, arg1: $Direction_): boolean;
        static isFromEmptyShape(arg0: number): boolean;
        static increaseSkipOneDirection(arg0: number, arg1: boolean, arg2: $Direction_): number;
        static decreaseSkipOneDirection(arg0: number, arg1: $Direction_): number;
        static increaseOnlyOneDirection(arg0: number, arg1: boolean, arg2: $Direction_): number;
        static increaseSkySourceInDirections(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean): number;
        constructor();
    }
    export class $DataLayerStorageMap<M extends $DataLayerStorageMap<M>> {
        copyDataLayer(arg0: number): $DataLayer;
        clearCache(): void;
        disableCache(): void;
        removeLayer(arg0: number): $DataLayer;
        setLayer(arg0: number, arg1: $DataLayer): void;
        hasLayer(arg0: number): boolean;
        getLayer(arg0: number): $DataLayer;
        copy(): M;
    }
    export class $LevelLightEngine implements $LightEventListener {
        getLayerListener(arg0: $LightLayer_): $LayerLightEventListener;
        getRawBrightness(arg0: $BlockPos_, arg1: number): number;
        setLightEnabled(arg0: $ChunkPos, arg1: boolean): void;
        runLightUpdates(): number;
        lightOnInSection(arg0: $SectionPos): boolean;
        updateSectionStatus(arg0: $SectionPos, arg1: boolean): void;
        checkBlock(arg0: $BlockPos_): void;
        getDebugData(arg0: $LightLayer_, arg1: $SectionPos): string;
        getDebugSectionType(arg0: $LightLayer_, arg1: $SectionPos): $LayerLightSectionStorage$SectionType;
        hasLightWork(): boolean;
        propagateLightSources(arg0: $ChunkPos): void;
        retainData(arg0: $ChunkPos, arg1: boolean): void;
        getLightSectionCount(): number;
        getMinLightSection(): number;
        queueSectionData(arg0: $LightLayer_, arg1: $SectionPos, arg2: $DataLayer): void;
        getMaxLightSection(): number;
        updateSectionStatus(arg0: $BlockPos_, arg1: boolean): void;
        static LIGHT_SECTION_PADDING: number;
        skyEngine: $LightEngine<never, never>;
        blockEngine: $LightEngine<never, never>;
        constructor(arg0: $LightChunkGetter, arg1: boolean, arg2: boolean);
        get lightSectionCount(): number;
        get minLightSection(): number;
        get maxLightSection(): number;
    }
    export class $SpatialLongSet$InternalMap extends $Long2LongLinkedOpenHashMap {
        firstKey(): number;
        remove(arg0: number): number;
    }
    export class $LayerLightSectionStorage$SectionType extends $Enum<$LayerLightSectionStorage$SectionType> {
        display(): string;
        static values(): $LayerLightSectionStorage$SectionType[];
        static valueOf(arg0: string): $LayerLightSectionStorage$SectionType;
        static LIGHT_ONLY: $LayerLightSectionStorage$SectionType;
        static LIGHT_AND_DATA: $LayerLightSectionStorage$SectionType;
        static EMPTY: $LayerLightSectionStorage$SectionType;
    }
    /**
     * Values that may be interpreted as {@link $LayerLightSectionStorage$SectionType}.
     */
    export type $LayerLightSectionStorage$SectionType_ = "empty" | "light_only" | "light_and_data";
    export class $SpatialLongSet extends $LongLinkedOpenHashSet {
        last(): number;
        reversed(): $SequencedSet<number>;
        constructor(arg0: number, arg1: number);
    }
    export class $SkyLightEngine extends $LightEngine<$SkyLightSectionStorage$SkyDataLayerStorageMap, $SkyLightSectionStorage> {
        chunkSource: $LightChunkGetter;
        static MAX_LEVEL: number;
        storage: $SkyLightSectionStorage;
        constructor(arg0: $LightChunkGetter);
    }
    export class $LayerLightSectionStorage$SectionState {
    }
    export class $LightEngine<M extends $DataLayerStorageMap<M>, S extends $LayerLightSectionStorage<M>> implements $LayerLightEventListener, $LightEngineAccessor<any, any> {
        getLightValue(arg0: $BlockPos_): number;
        setLightEnabled(arg0: $ChunkPos, arg1: boolean): void;
        runLightUpdates(): number;
        enqueueIncrease(arg0: number, arg1: number): void;
        static getOcclusionShape(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): $VoxelShape;
        static getLightBlockInto(arg0: $BlockGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockPos_, arg5: $Direction_, arg6: number): number;
        updateSectionStatus(arg0: $SectionPos, arg1: boolean): void;
        static hasDifferentLightProperties(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_): boolean;
        checkBlock(arg0: $BlockPos_): void;
        getDebugData(arg0: number): string;
        getDebugSectionType(arg0: number): $LayerLightSectionStorage$SectionType;
        hasLightWork(): boolean;
        getDataLayerData(arg0: $SectionPos): $DataLayer;
        retainData(arg0: $ChunkPos, arg1: boolean): void;
        queueSectionData(arg0: number, arg1: $DataLayer): void;
        updateSectionStatus(arg0: $BlockPos_, arg1: boolean): void;
        flywheel$storage(): $Object;
        chunkSource: $LightChunkGetter;
        static MAX_LEVEL: number;
        storage: $Object;
    }
    export class $LeveledPriorityQueue {
        removeFirstLong(): number;
        dequeue(arg0: number, arg1: number, arg2: number): void;
        isEmpty(): boolean;
        enqueue(arg0: number, arg1: number): void;
        constructor(arg0: number, arg1: number);
        get empty(): boolean;
    }
    export class $SkyLightSectionStorage extends $LayerLightSectionStorage<$SkyLightSectionStorage$SkyDataLayerStorageMap> implements $SkyLightSectionStorageExtension {
        flywheel$skyDataLayer(section: number): $DataLayer;
    }
    export class $LayerLightEventListener$DummyLightLayerEventListener extends $Enum<$LayerLightEventListener$DummyLightLayerEventListener> implements $LayerLightEventListener {
        getLightValue(arg0: $BlockPos_): number;
        setLightEnabled(arg0: $ChunkPos, arg1: boolean): void;
        runLightUpdates(): number;
        updateSectionStatus(arg0: $SectionPos, arg1: boolean): void;
        checkBlock(arg0: $BlockPos_): void;
        hasLightWork(): boolean;
        propagateLightSources(arg0: $ChunkPos): void;
        getDataLayerData(arg0: $SectionPos): $DataLayer;
        static values(): $LayerLightEventListener$DummyLightLayerEventListener[];
        static valueOf(arg0: string): $LayerLightEventListener$DummyLightLayerEventListener;
        updateSectionStatus(arg0: $BlockPos_, arg1: boolean): void;
        static INSTANCE: $LayerLightEventListener$DummyLightLayerEventListener;
    }
    /**
     * Values that may be interpreted as {@link $LayerLightEventListener$DummyLightLayerEventListener}.
     */
    export type $LayerLightEventListener$DummyLightLayerEventListener_ = "instance";
    export class $LightEventListener {
    }
    export interface $LightEventListener {
        setLightEnabled(arg0: $ChunkPos, arg1: boolean): void;
        runLightUpdates(): number;
        updateSectionStatus(arg0: $SectionPos, arg1: boolean): void;
        updateSectionStatus(arg0: $BlockPos_, arg1: boolean): void;
        checkBlock(arg0: $BlockPos_): void;
        hasLightWork(): boolean;
        propagateLightSources(arg0: $ChunkPos): void;
    }
    export class $LayerLightSectionStorage<M extends $DataLayerStorageMap<M>> implements $LayerLightSectionStorageAccessor {
        lightOnInSection(arg0: number): boolean;
        getDebugSectionType(arg0: number): $LayerLightSectionStorage$SectionType;
        getDataLayerData(arg0: number): $DataLayer;
        retainData(arg0: number, arg1: boolean): void;
        flywheel$callGetDataLayer(arg0: number, arg1: boolean): $DataLayer;
    }
    export class $ChunkSkyLightSources {
        getLowestSourceY(arg0: number, arg1: number): number;
        getHighestLowestSourceY(): number;
        fillFrom(arg0: $ChunkAccess): void;
        update(arg0: $BlockGetter, arg1: number, arg2: number, arg3: number): boolean;
        static NEGATIVE_INFINITY: number;
        constructor(arg0: $LevelHeightAccessor);
        get highestLowestSourceY(): number;
    }
    export class $BlockLightSectionStorage$BlockDataLayerStorageMap extends $DataLayerStorageMap<$BlockLightSectionStorage$BlockDataLayerStorageMap> {
    }
    export class $SkyLightSectionStorage$SkyDataLayerStorageMap extends $DataLayerStorageMap<$SkyLightSectionStorage$SkyDataLayerStorageMap> implements $SkyDataLayerStorageMapAccessor {
    }
    export class $BlockLightEngine extends $LightEngine<$BlockLightSectionStorage$BlockDataLayerStorageMap, $BlockLightSectionStorage> {
        chunkSource: $LightChunkGetter;
        static MAX_LEVEL: number;
        storage: $BlockLightSectionStorage;
        constructor(arg0: $LightChunkGetter, arg1: $BlockLightSectionStorage);
        constructor(arg0: $LightChunkGetter);
    }
    export class $BlockLightSectionStorage extends $LayerLightSectionStorage<$BlockLightSectionStorage$BlockDataLayerStorageMap> {
    }
}
