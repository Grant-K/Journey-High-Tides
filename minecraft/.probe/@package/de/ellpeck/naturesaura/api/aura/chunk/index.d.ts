import { $Level_ } from "@package/net/minecraft/world/level";
import { $BiConsumer_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $MutableInt } from "@package/org/apache/commons/lang3/mutable";
import { $IAuraType } from "@package/de/ellpeck/naturesaura/api/aura/type";

declare module "@package/de/ellpeck/naturesaura/api/aura/chunk" {
    export class $IAuraChunk {
        static getAuraInArea(arg0: $Level_, arg1: $BlockPos_, arg2: number): number;
        static getLowestSpot(arg0: $Level_, arg1: $BlockPos_, arg2: number, arg3: $BlockPos_): $BlockPos;
        static getAuraChunk(arg0: $Level_, arg1: $BlockPos_): $IAuraChunk;
        static getHighestSpot(arg0: $Level_, arg1: $BlockPos_, arg2: number, arg3: $BlockPos_): $BlockPos;
        static getAuraAndSpotAmountInArea(arg0: $Level_, arg1: $BlockPos_, arg2: number): $Pair<number, number>;
        static getSpotAmountInArea(arg0: $Level_, arg1: $BlockPos_, arg2: number): number;
        static triangulateAuraInArea(arg0: $Level_, arg1: $BlockPos_, arg2: number): number;
        static getSpotsInArea(arg0: $Level_, arg1: $BlockPos_, arg2: number, arg3: $BiConsumer_<$BlockPos, number>): void;
        static DEFAULT_AURA: number;
    }
    export interface $IAuraChunk extends $INBTSerializable<$CompoundTag> {
        markDirty(): void;
        storeAura(arg0: $BlockPos_, arg1: number, arg2: boolean, arg3: boolean): number;
        storeAura(arg0: $BlockPos_, arg1: number): number;
        drainAura(arg0: $BlockPos_, arg1: number): number;
        drainAura(arg0: $BlockPos_, arg1: number, arg2: boolean, arg3: boolean): number;
        getActualDrainSpot(arg0: $BlockPos_, arg1: boolean): $IAuraChunk$DrainSpot;
        getDrainSpot(arg0: $BlockPos_): number;
        getType(): $IAuraType;
        get type(): $IAuraType;
    }
    export class $IAuraChunk$DrainSpot extends $MutableInt {
        serializeNBT(): $CompoundTag;
        pos: $BlockPos;
        originalSpreadPos: $BlockPos;
        constructor(arg0: $CompoundTag_);
        constructor(arg0: $BlockPos_, arg1: number);
    }
}
