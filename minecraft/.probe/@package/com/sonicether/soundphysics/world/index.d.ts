import { $ChunkPos, $ClipContext, $BlockGetter, $ClipBlockStateContext, $Level_ } from "@package/net/minecraft/world/level";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $LevelChunkSection, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Supplier_ } from "@package/java/util/function";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos, $BlockPos_, $Holder } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Object } from "@package/java/lang";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $Vec3_, $AABB_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/sonicether/soundphysics/world" {
    export class $ClonedClientLevel implements $ClientLevelProxy {
        getFluidState(arg0: $BlockPos_): $FluidState;
        getBlockState(arg0: $BlockPos_): $BlockState;
        getBlockEntity(arg0: $BlockPos_): $BlockEntity;
        getMinBuildHeight(): number;
        getChunk(arg0: number, arg1: number): $ClonedLevelChunk;
        getTick(): number;
        getOrigin(): $BlockPos;
        getHeight(): number;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        clip(arg0: $ClipContext): $BlockHitResult;
        getLightEmission(arg0: $BlockPos_): number;
        getMaxLightLevel(): number;
        getBlockStates(arg0: $AABB_): $Stream<$BlockState>;
        isBlockInLine(arg0: $ClipBlockStateContext): $BlockHitResult;
        clipWithInteractionOverride(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $VoxelShape, arg4: $BlockState_): $BlockHitResult;
        getBlockFloorHeight(arg0: $VoxelShape, arg1: $Supplier_<$VoxelShape>): number;
        getBlockFloorHeight(arg0: $BlockPos_): number;
        getMaxBuildHeight(): number;
        isOutsideBuildHeight(arg0: number): boolean;
        isOutsideBuildHeight(arg0: $BlockPos_): boolean;
        getSectionIndex(arg0: number): number;
        getSectionsCount(): number;
        getMaxSection(): number;
        getMinSection(): number;
        getSectionIndexFromSectionY(arg0: number): number;
        getSectionYFromSectionIndex(arg0: number): number;
        getAuxLightManager(arg0: $BlockPos_): $AuxiliaryLightManager;
        getAuxLightManager(arg0: $ChunkPos): $AuxiliaryLightManager;
        getModelData(arg0: $BlockPos_): $ModelData;
        hasBiomes(): boolean;
        getBiomeFabric(arg0: $BlockPos_): $Holder<$Biome>;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        constructor(arg0: $ClientLevel, arg1: $BlockPos_, arg2: number, arg3: number);
        get minBuildHeight(): number;
        get tick(): number;
        get origin(): $BlockPos;
        get height(): number;
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get sectionsCount(): number;
        get maxSection(): number;
        get minSection(): number;
    }
    export class $CachingClientLevel {
    }
    export interface $CachingClientLevel {
        sound_physics_remastered$getCachedClone(): $ClonedClientLevel;
        sound_physics_remastered$setCachedClone(arg0: $ClonedClientLevel): void;
    }
    export class $ClonedLevelChunk extends $ChunkAccess {
        static NO_FILLED_SECTION: number;
        constructor(arg0: $Level_, arg1: $ChunkPos, arg2: $LevelChunkSection[]);
    }
    export class $ClientLevelProxy {
    }
    export interface $ClientLevelProxy extends $BlockGetter {
    }
}
