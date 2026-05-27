import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $ISerializable } from "@package/io/redspace/ironsspellbooks/api/network";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";

declare module "@package/io/redspace/ironsspellbooks/gui/overlays" {
    export class $SpellSelection implements $ISerializable, $INBTSerializable<$CompoundTag> {
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        makeSelection(arg0: string, arg1: number): void;
        writeToBuffer(arg0: $FriendlyByteBuf): void;
        readFromBuffer(arg0: $FriendlyByteBuf): void;
        isEmpty(): boolean;
        lastEquipmentSlot: string;
        equipmentSlot: string;
        index: number;
        lastIndex: number;
        constructor();
        constructor(arg0: string, arg1: number, arg2: string, arg3: number);
        constructor(arg0: string, arg1: number);
        get empty(): boolean;
    }
}
