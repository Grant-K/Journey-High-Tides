import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $GlobalPos } from "@package/net/minecraft/core";
import { $Chunk3D } from "@package/mekanism/api";

declare module "@package/mekanism/common/tile/interfaces" {
    export class $ITileWrapper {
    }
    export interface $ITileWrapper {
        getBlockPos(): $BlockPos;
        getLevel(): $Level;
        getTileGlobalPos(): $GlobalPos;
        getTileChunk(): $Chunk3D;
        get blockPos(): $BlockPos;
        get level(): $Level;
        get tileGlobalPos(): $GlobalPos;
        get tileChunk(): $Chunk3D;
    }
}
