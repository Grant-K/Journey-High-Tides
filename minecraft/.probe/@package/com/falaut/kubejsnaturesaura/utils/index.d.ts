import { $Level_ } from "@package/net/minecraft/world/level";
import { $IAuraChunk } from "@package/de/ellpeck/naturesaura/api/aura/chunk";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $IAuraType } from "@package/de/ellpeck/naturesaura/api/aura/type";
import { $Number } from "@package/java/lang";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/falaut/kubejsnaturesaura/utils" {
    export class $AuraItemUtils {
        storeAura(arg0: $ItemStack_, arg1: number, arg2: boolean): void;
        drainAura(arg0: $ItemStack_, arg1: number, arg2: boolean): void;
        getStoredAura(arg0: $ItemStack_): $Number;
        getMaxAura(arg0: $ItemStack_): $Number;
        getAuraColor(arg0: $ItemStack_): $Number;
        isAcceptableType(arg0: $ItemStack_, arg1: string): boolean;
        constructor();
    }
    export class $AuraBlockUtils {
        storeAura(arg0: $BlockEntity, arg1: number, arg2: boolean): void;
        drainAura(arg0: $BlockEntity, arg1: number, arg2: boolean): void;
        getStoredAura(arg0: $BlockEntity): $Number;
        getMaxAura(arg0: $BlockEntity): $Number;
        getAuraColor(arg0: $BlockEntity): $Number;
        isAcceptableType(arg0: $BlockEntity, arg1: string): boolean;
        constructor();
    }
    export class $AuraChunkUtils {
        deserializeNBT(arg0: $Level_, arg1: $BlockPos_, arg2: $HolderLookup$Provider, arg3: $CompoundTag_): void;
        serializeNBT(arg0: $Level_, arg1: $BlockPos_, arg2: $HolderLookup$Provider): $CompoundTag;
        markDirty(arg0: $Level_, arg1: $BlockPos_): void;
        storeAura(arg0: $Level_, arg1: $BlockPos_, arg2: number): void;
        storeAura(arg0: $Level_, arg1: $BlockPos_, arg2: number, arg3: boolean, arg4: boolean): void;
        drainAura(arg0: $Level_, arg1: $BlockPos_, arg2: number, arg3: boolean, arg4: boolean): void;
        drainAura(arg0: $Level_, arg1: $BlockPos_, arg2: number): void;
        getAuraInArea(arg0: $Level_, arg1: $BlockPos_, arg2: number): $Number;
        getLowestSpot(arg0: $Level_, arg1: $BlockPos_, arg2: number, arg3: $BlockPos_): $BlockPos;
        getAuraChunk(arg0: $Level_, arg1: $BlockPos_): $IAuraChunk;
        getHighestSpot(arg0: $Level_, arg1: $BlockPos_, arg2: number, arg3: $BlockPos_): $BlockPos;
        getAuraAndSpotAmountInArea(arg0: $Level_, arg1: $BlockPos_, arg2: number): $Pair<number, number>;
        getSpotAmountInArea(arg0: $Level_, arg1: $BlockPos_, arg2: number): $Number;
        triangulateAuraInArea(arg0: $Level_, arg1: $BlockPos_, arg2: number): $Number;
        getType(arg0: $Level_, arg1: $BlockPos_): $IAuraType;
        constructor();
    }
}
