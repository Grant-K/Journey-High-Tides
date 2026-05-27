import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $FluidStack_, $FluidStack, $IFluidTank } from "@package/net/neoforged/neoforge/fluids";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List, $Set_ } from "@package/java/util";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $IFluidHandler$FluidAction_, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $WorldlyContainer, $ItemInteractionResult, $Container, $InteractionHand_ } from "@package/net/minecraft/world";
import { $Predicate_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Holder_, $Direction_, $NonNullList } from "@package/net/minecraft/core";
import { $Object2ObjectOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $InkItem } from "@package/io/redspace/ironsspellbooks/item";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/io/redspace/ironsspellbooks/block/alchemist_cauldron" {
    /**
     * @deprecated
     */
    export class $AlchemistCauldronInteraction {
    }
    export interface $AlchemistCauldronInteraction {
        interact(arg0: $AlchemistCauldronTile, arg1: $BlockState_, arg2: $Level_, arg3: $BlockPos_, arg4: $ItemStack_): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $AlchemistCauldronInteraction}.
     */
    export type $AlchemistCauldronInteraction_ = ((arg0: $AlchemistCauldronTile, arg1: $BlockState, arg2: $Level, arg3: $BlockPos, arg4: $ItemStack) => $ItemStack_);
    export class $AlchemistCauldronTile extends $BlockEntity implements $WorldlyContainer {
        stillValid(arg0: $Player): boolean;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        isValidInput(arg0: $ItemStack_): boolean;
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $AlchemistCauldronTile): void;
        loadAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        setItem(arg0: number, arg1: $ItemStack_): void;
        tryExecuteRecipeInteractions(arg0: $Level_, arg1: $ItemStack_): $ItemStack;
        clearContent(): void;
        handleUse(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player, arg4: $InteractionHand_): $ItemInteractionResult;
        getSlotsForFace(arg0: $Direction_): number[];
        canPlaceItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        canTakeItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        isBrewable(arg0: $ItemStack_): boolean;
        removeItem(arg0: number, arg1: number): $ItemStack;
        getItem(arg0: number): $ItemStack;
        refreshCapabilities(): void;
        isBoiling(arg0: $BlockState_): boolean;
        tryMeltInput(arg0: $ItemStack_): void;
        static getInkFromScroll(arg0: $ItemStack_): $InkItem;
        getFluidAmount(): number;
        drops(): void;
        isEmpty(): boolean;
        getMaxStackSize(): number;
        getMaxStackSize(arg0: $ItemStack_): number;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        countItem(arg0: $Item_): number;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        setTransferCooldown(arg0: number): void;
        canReceiveTransferCooldown(): boolean;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        self(): $Container;
        clear(): void;
        getWidth(): number;
        getHeight(): number;
        setChanged(): void;
        asContainer(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        isMutable(): boolean;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        isEmpty(): boolean;
        clear(match: $ItemPredicate_): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        count(match: $ItemPredicate_): number;
        count(): number;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        static INPUT_SIZE: number;
        inputItems: $NonNullList<$ItemStack>;
        fluidInventory: $AlchemistCauldronTile$AlchemistCauldronFluidHandler;
        static ATTACHMENTS_NBT_KEY: string;
        fluidCapability: $IFluidHandler;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get containerSize(): number;
        get fluidAmount(): number;
        set transferCooldown(value: number);
        get width(): number;
        get height(): number;
        get mutable(): boolean;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $AlchemistCauldronTile$AlchemistCauldronFluidHandler implements $IFluidHandler {
        fluids(): $List<$FluidStack>;
        getFluidInTank(arg0: number): $FluidStack;
        isTankCompatible(arg0: $IFluidTank, arg1: $FluidStack_): boolean;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        canFit(arg0: number): boolean;
        fluidAmount(): number;
        getTanks(): number;
        getTankCapacity(arg0: number): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        onContentsChanged(): void;
        load(arg0: string, arg1: $CompoundTag_, arg2: $HolderLookup$Provider): void;
        clear(): void;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        contains(arg0: $Holder_<$Fluid>, arg1: number): boolean;
        contains(arg0: $FluidStack_, arg1: number): boolean;
        contains(arg0: $TagKey_<$Fluid>, arg1: number): boolean;
        save(arg0: string, arg1: $CompoundTag_, arg2: $HolderLookup$Provider): void;
        constructor(arg0: $AlchemistCauldronTile);
        get tanks(): number;
    }
    /**
     * @deprecated
     */
    export class $AlchemistCauldronBuildInteractionsEvent extends $Event {
        addInteraction(arg0: $Item_, arg1: $AlchemistCauldronInteraction_): void;
        addSimpleBottleEmptyInteraction(arg0: $Item_): void;
        constructor(arg0: $Object2ObjectOpenHashMap<$Item_, $AlchemistCauldronInteraction_>);
    }
}
