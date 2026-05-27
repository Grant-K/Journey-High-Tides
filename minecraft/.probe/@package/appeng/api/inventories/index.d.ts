import { $Level_ } from "@package/net/minecraft/world/level";
import { $Predicate_ } from "@package/java/util/function";
import { $Container } from "@package/net/minecraft/world";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $FuzzyMode_ } from "@package/appeng/api/config";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Iterable } from "@package/java/lang";
import { $Iterator } from "@package/java/util";

declare module "@package/appeng/api/inventories" {
    export class $InternalInventory {
        static wrapExternal(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): $ItemTransfer;
        static empty(): $InternalInventory;
        [Symbol.iterator](): Iterator<$ItemStack>
    }
    export interface $InternalInventory extends $Iterable<$ItemStack>, $ItemTransfer {
        getStackInSlot(arg0: number): $ItemStack;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        getSlotLimit(arg0: number): number;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        getRedstoneSignal(): number;
        addItems(arg0: $ItemStack_): $ItemStack;
        addItems(arg0: $ItemStack_, arg1: boolean): $ItemStack;
        getSubInventory(arg0: number, arg1: number): $InternalInventory;
        getSlotInv(arg0: number): $InternalInventory;
        setItemDirect(arg0: number, arg1: $ItemStack_): void;
        toItemHandler(): $IItemHandler;
        toContainer(): $Container;
        simulateAdd(arg0: $ItemStack_): $ItemStack;
        removeItems(arg0: number, arg1: $ItemStack_, arg2: $Predicate_<$ItemStack>): $ItemStack;
        simulateRemove(arg0: number, arg1: $ItemStack_, arg2: $Predicate_<$ItemStack>): $ItemStack;
        removeSimilarItems(arg0: number, arg1: $ItemStack_, arg2: $FuzzyMode_, arg3: $Predicate_<$ItemStack>): $ItemStack;
        simulateSimilarRemove(arg0: number, arg1: $ItemStack_, arg2: $FuzzyMode_, arg3: $Predicate_<$ItemStack>): $ItemStack;
        sendChangeNotification(arg0: number): void;
        size(): number;
        clear(): void;
        isEmpty(): boolean;
        iterator(): $Iterator<$ItemStack>;
        [Symbol.iterator](): Iterator<$ItemStack>
        get redstoneSignal(): number;
    }
    export class $ItemTransfer {
    }
    export interface $ItemTransfer {
        addItems(arg0: $ItemStack_): $ItemStack;
        addItems(arg0: $ItemStack_, arg1: boolean): $ItemStack;
        simulateAdd(arg0: $ItemStack_): $ItemStack;
        removeItems(arg0: number, arg1: $ItemStack_, arg2: $Predicate_<$ItemStack>): $ItemStack;
        simulateRemove(arg0: number, arg1: $ItemStack_, arg2: $Predicate_<$ItemStack>): $ItemStack;
        removeSimilarItems(arg0: number, arg1: $ItemStack_, arg2: $FuzzyMode_, arg3: $Predicate_<$ItemStack>): $ItemStack;
        simulateSimilarRemove(arg0: number, arg1: $ItemStack_, arg2: $FuzzyMode_, arg3: $Predicate_<$ItemStack>): $ItemStack;
    }
}
