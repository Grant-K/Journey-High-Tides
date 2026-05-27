import { $BlockAndTintGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $ToIntFunction_ } from "@package/java/util/function";
import { $BlockColorsExtension } from "@package/net/caffeinemc/mods/sodium/client/model/color/interop";
import { $BlockColorsNeoForgeAccessor } from "@package/fuzs/puzzleslib/neoforge/mixin/client/accessor";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Reference2ReferenceMap, $ReferenceSet } from "@package/it/unimi/dsi/fastutil/objects";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockColorsAccessor } from "@package/com/aetherteam/aether/mixin/mixins/client/accessor";
import { $AccessorBlockColors } from "@package/org/violetmoon/zetaimplforge/mixin/mixins/client";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Map, $Set } from "@package/java/util";

declare module "@package/net/minecraft/client/color/block" {
    export class $BlockTintCache$LatestCacheInfo {
    }
    export class $BlockColor {
    }
    export interface $BlockColor {
        getColor(arg0: $BlockState_, arg1: $BlockAndTintGetter, arg2: $BlockPos_, arg3: number): number;
    }
    /**
     * Values that may be interpreted as {@link $BlockColor}.
     */
    export type $BlockColor_ = ((arg0: $BlockState, arg1: $BlockAndTintGetter, arg2: $BlockPos, arg3: number) => number);
    export class $BlockColors implements $BlockColorsExtension, $AccessorBlockColors, $BlockColorsNeoForgeAccessor, $BlockColorsAccessor {
        getColor(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): number;
        getColor(arg0: $BlockState_, arg1: $BlockAndTintGetter, arg2: $BlockPos_, arg3: number): number;
        getColoringProperties(arg0: $Block_): $Set<$Property<never>>;
        sodium$getProviders(): $Reference2ReferenceMap<any, any>;
        sodium$getOverridenVanillaBlocks(): $ReferenceSet<any>;
        static createDefault(): $BlockColors;
        /**
         * @deprecated
         */
        register(arg0: $BlockColor_, ...arg1: $Block_[]): void;
        zeta$getBlockColors(): $Map<$Block, $BlockColor>;
        puzzleslib$getBlockColors(): $Map<$Block, $BlockColor>;
        aether$getBlockColors(): $Map<$Block, $BlockColor>;
        constructor();
    }
    export class $BlockTintCache$CacheData {
    }
    export class $BlockTintCache {
        getColor(arg0: $BlockPos_): number;
        invalidateForChunk(arg0: number, arg1: number): void;
        invalidateAll(): void;
        constructor(arg0: $ToIntFunction_<$BlockPos>);
    }
}
