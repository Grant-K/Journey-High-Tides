import { $HolderLookup$Provider, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $AutomationType_, $Action_, $IContentsListener } from "@package/mekanism/api";
import { $List } from "@package/java/util";

declare module "@package/mekanism/api/inventory" {
    export class $IInventorySlot {
    }
    export interface $IInventorySlot extends $INBTSerializable<$CompoundTag>, $IContentsListener {
        insertItem(arg0: $ItemStack_, arg1: $Action_, arg2: $AutomationType_): $ItemStack;
        extractItem(arg0: number, arg1: $Action_, arg2: $AutomationType_): $ItemStack;
        isItemValid(arg0: $ItemStack_): boolean;
        getLimit(arg0: $ItemStack_): number;
        setStackSize(arg0: number, arg1: $Action_): number;
        shrinkStack(arg0: number, arg1: $Action_): number;
        createContainerSlot(): $Slot;
        growStack(arg0: number, arg1: $Action_): number;
        getStack(): $ItemStack;
        setStack(arg0: $ItemStack_): void;
        setEmpty(): void;
        isEmpty(): boolean;
        getCount(): number;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        get count(): number;
    }
    export class $ISidedItemHandler {
    }
    export interface $ISidedItemHandler extends $IItemHandlerModifiable {
        insertItem(arg0: number, arg1: $ItemStack_, arg2: $Direction_, arg3: $Action_): $ItemStack;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        extractItem(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $ItemStack;
        getSlotLimit(arg0: number, arg1: $Direction_): number;
        getSlotLimit(arg0: number): number;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        isItemValid(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        setStackInSlot(arg0: number, arg1: $ItemStack_, arg2: $Direction_): void;
        getStackInSlot(arg0: number, arg1: $Direction_): $ItemStack;
        getStackInSlot(arg0: number): $ItemStack;
        getInventorySideFor(): $Direction;
        getSlots(): number;
        getSlots(arg0: $Direction_): number;
        get inventorySideFor(): $Direction;
    }
    export class $IMekanismInventory {
    }
    export interface $IMekanismInventory extends $ISidedItemHandler, $IContentsListener {
        insertItem(arg0: number, arg1: $ItemStack_, arg2: $Direction_, arg3: $Action_): $ItemStack;
        extractItem(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $ItemStack;
        getSlotLimit(arg0: number, arg1: $Direction_): number;
        isItemValid(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        setStackInSlot(arg0: number, arg1: $ItemStack_, arg2: $Direction_): void;
        getStackInSlot(arg0: number, arg1: $Direction_): $ItemStack;
        hasInventory(): boolean;
        getInventorySlots(arg0: $Direction_): $List<$IInventorySlot>;
        getInventorySlot(arg0: number, arg1: $Direction_): $IInventorySlot;
        isInventoryEmpty(arg0: $Direction_): boolean;
        isInventoryEmpty(): boolean;
        getSlots(arg0: $Direction_): number;
    }
}
