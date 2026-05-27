import { $LightLayer_, $Level_ } from "@package/net/minecraft/world/level";
import { $Int2ReferenceMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $Holder, $SectionPos } from "@package/net/minecraft/core";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $DataLayer, $LevelChunkSection, $LevelChunk, $PalettedContainerRO } from "@package/net/minecraft/world/level/chunk";
import { $Object } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $SodiumAuxiliaryLightManager } from "@package/net/caffeinemc/mods/sodium/client/world";
import { $SodiumModelDataContainer } from "@package/net/caffeinemc/mods/sodium/client/services";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/caffeinemc/mods/sodium/client/world/cloned" {
    export class $ClonedChunkSection {
        getLightArray(arg0: $LightLayer_): $DataLayer;
        getBlockEntityMap(): $Int2ReferenceMap<$BlockEntity>;
        getBlockEntityRenderDataMap(): $Int2ReferenceMap<$Object>;
        getModelMap(): $SodiumModelDataContainer;
        setLastUsedTimestamp(arg0: number): void;
        getLastUsedTimestamp(): number;
        getAuxLightManager(): $SodiumAuxiliaryLightManager;
        getBiomeData(): $PalettedContainerRO<$Holder<$Biome>>;
        getPosition(): $SectionPos;
        getBlockData(): $PalettedContainerRO<$BlockState>;
        constructor(arg0: $Level_, arg1: $LevelChunk, arg2: $LevelChunkSection, arg3: $SectionPos);
        get blockEntityMap(): $Int2ReferenceMap<$BlockEntity>;
        get blockEntityRenderDataMap(): $Int2ReferenceMap<$Object>;
        get modelMap(): $SodiumModelDataContainer;
        get auxLightManager(): $SodiumAuxiliaryLightManager;
        get biomeData(): $PalettedContainerRO<$Holder<$Biome>>;
        get position(): $SectionPos;
        get blockData(): $PalettedContainerRO<$BlockState>;
    }
    export class $ChunkRenderContext {
        getVolume(): $BoundingBox;
        getOrigin(): $SectionPos;
        getRenderers(): $List<never>;
        getSections(): $ClonedChunkSection[];
        constructor(arg0: $SectionPos, arg1: $ClonedChunkSection[], arg2: $BoundingBox, arg3: $List_<never>);
        get volume(): $BoundingBox;
        get origin(): $SectionPos;
        get renderers(): $List<never>;
        get sections(): $ClonedChunkSection[];
    }
}
