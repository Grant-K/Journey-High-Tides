import { $Holder, $RegistryAccess } from "@package/net/minecraft/core";
import { $LithostitchedTemplates } from "@package/dev/worldgen/lithostitched/worldgen/structure";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $NormalNoise } from "@package/net/minecraft/world/level/levelgen/synth";
import { $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $PositionalRandomFactory, $SurfaceSystem } from "@package/net/minecraft/world/level/levelgen";
import { $RandomSource } from "@package/net/minecraft/util";
export * as mnbs from "@package/dev/worldgen/lithostitched/duck/mnbs";

declare module "@package/dev/worldgen/lithostitched/duck" {
    export class $MansionRoomDuck {
    }
    export interface $MansionRoomDuck extends $RegistryHolder {
        lithostitched$getRandom(name: string, random: $RandomSource): string;
        lithostitched$floorNumber(): number;
    }
    export class $SurfaceSystemAccessor {
    }
    export interface $SurfaceSystemAccessor {
        getNoiseRandom(): $PositionalRandomFactory;
        getBandOffsetNoise(): $NormalNoise;
        get noiseRandom(): $PositionalRandomFactory;
        get bandOffsetNoise(): $NormalNoise;
    }
    export class $RegistryHolder {
    }
    export interface $RegistryHolder {
        getRegistries(): $RegistryAccess;
        setRegistries(registryAccess: $RegistryAccess): void;
    }
    export class $StructurePoolAccess {
    }
    export interface $StructurePoolAccess {
        getLithostitchedTemplates(): $LithostitchedTemplates;
        compileRawTemplates(): void;
        get lithostitchedTemplates(): $LithostitchedTemplates;
    }
    export class $ContextAccessor {
    }
    export interface $ContextAccessor {
        getZ(): number;
        getBiome(): $Holder<$Biome>;
        getChunk(): $ChunkAccess;
        getY(): number;
        getX(): number;
        getStoneDepthBelow(): number;
        getSystem(): $SurfaceSystem;
        get z(): number;
        get biome(): $Holder<$Biome>;
        get chunk(): $ChunkAccess;
        get y(): number;
        get x(): number;
        get stoneDepthBelow(): number;
        get system(): $SurfaceSystem;
    }
}
