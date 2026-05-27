import { $Predicate_ } from "@package/java/util/function";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MCDataInput } from "@package/codechicken/lib/data";
import { $EquipmentSlot } from "@package/net/minecraft/world/entity";
import { $Inventory, $Player } from "@package/net/minecraft/world/entity/player";
import { $ByteBuf } from "@package/io/netty/buffer";

declare module "@package/com/brandon3055/brandonscore/inventory" {
    export class $PlayerSlot {
        setStackInSlot(arg0: $Player, arg1: $ItemStack_): void;
        getStackInSlot(arg0: $Player): $ItemStack;
        getEquipmentSlot(): $EquipmentSlot;
        getCatIndex(): number;
        static fromIndexes(arg0: number, arg1: number): $PlayerSlot;
        getSlotIndex(): number;
        static findStack(arg0: $Inventory, arg1: $Predicate_<$ItemStack>): $PlayerSlot;
        static fromBuff(arg0: $MCDataInput): $PlayerSlot;
        static fromBuff(arg0: $ByteBuf): $PlayerSlot;
        static findStackActiveFirst(arg0: $Inventory, arg1: $Predicate_<$ItemStack>): $PlayerSlot;
        toBuff(arg0: $ByteBuf): void;
        static fromString(arg0: string): $PlayerSlot;
        constructor(arg0: number, arg1: $PlayerSlot$EnumInvCategory);
        constructor(arg0: $Player, arg1: $InteractionHand_);
        get equipmentSlot(): $EquipmentSlot;
        get catIndex(): number;
        get slotIndex(): number;
    }
}
