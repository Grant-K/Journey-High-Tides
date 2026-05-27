import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";

declare module "@package/com/bawnorton/neruina/mixin/accessor" {
    export class $LevelChunkAccessor {
    }
    export interface $LevelChunkAccessor {
        neruina$removeBlockEntityTicker(arg0: $BlockPos_): void;
    }
    /**
     * Values that may be interpreted as {@link $LevelChunkAccessor}.
     */
    export type $LevelChunkAccessor_ = ((arg0: $BlockPos) => void);
}
