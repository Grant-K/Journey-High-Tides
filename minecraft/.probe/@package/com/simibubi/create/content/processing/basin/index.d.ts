import { $BlazeBurnerBlock$HeatLevel } from "@package/com/simibubi/create/content/processing/burner";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $SmartFluidTankBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/fluid";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $BasinAccessor } from "@package/com/vomiter/kjscauto/mixin";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $List_ } from "@package/java/util";
import { $FilteringBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/filtering";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Clearable } from "@package/net/minecraft/world";
import { $HolderLookup$Provider, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $SmartInventory } from "@package/com/simibubi/create/foundation/item";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Couple } from "@package/net/createmod/catnip/data";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/processing/basin" {
    export class $BasinInventory extends $SmartInventory {
        kjs$self(): $IItemHandler;
        packagerMode: boolean;
        constructor(arg0: number, arg1: $BasinBlockEntity);
    }
    export class $BasinBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $Clearable, $BasinAccessor {
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        clearContent(): void;
        getFilter(): $FilteringBehaviour;
        getTanks(): $Couple<$SmartFluidTankBehaviour>;
        onEmptied(): void;
        areFluidsMoving(): boolean;
        wrapOperation$lee000$sable$accountForSubLevels(arg0: $Level_, arg1: $BlockPos_, arg2: $Operation_<any>): $BlockEntity;
        setAreFluidsMoving(arg0: boolean): boolean;
        getTotalFluidUnits(arg0: number): number;
        readOnlyItems(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getInvs(): $Couple<$SmartInventory>;
        onWrenched(arg0: $Direction_): void;
        addToGoggleTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        static getHeatLevelOf(arg0: $BlockState_): $BlazeBurnerBlock$HeatLevel;
        canContinueProcessing(): boolean;
        notifyChangeOfContents(): void;
        getInputInventory(): $SmartInventory;
        acceptOutputs(arg0: $List_<$ItemStack_>, arg1: $List_<$FluidStack_>, arg2: boolean): boolean;
        getOutputInventory(): $SmartInventory;
        isEmpty(): boolean;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        containedFluidTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: $IFluidHandler): boolean;
        getIcon(arg0: boolean): $ItemStack;
        getHeatLevel(): $BlazeBurnerBlock$HeatLevel;
        static OUTPUT_ANIMATION_TIME: number;
        static ATTACHMENTS_NBT_KEY: string;
        inputTank: $SmartFluidTankBehaviour;
        inputInventory: $BasinInventory;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get filter(): $FilteringBehaviour;
        get tanks(): $Couple<$SmartFluidTankBehaviour>;
        get invs(): $Couple<$SmartInventory>;
        get outputInventory(): $SmartInventory;
        get empty(): boolean;
        get heatLevel(): $BlazeBurnerBlock$HeatLevel;
    }
}
