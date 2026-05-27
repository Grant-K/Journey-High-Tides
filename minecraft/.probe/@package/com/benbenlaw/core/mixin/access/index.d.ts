import { $MapCodec_, $MapCodec } from "@package/com/mojang/serialization";
import { $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";

declare module "@package/com/benbenlaw/core/mixin/access" {
    export class $ChunkGeneratorAccess {
    }
    export interface $ChunkGeneratorAccess {
        bblcore$getCodec(): $MapCodec<$ChunkGenerator>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkGeneratorAccess}.
     */
    export type $ChunkGeneratorAccess_ = (() => $MapCodec_<$ChunkGenerator>);
}
