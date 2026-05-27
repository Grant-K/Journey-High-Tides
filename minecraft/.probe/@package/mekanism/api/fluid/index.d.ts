import { $IFluidHandler$FluidAction_, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $HolderLookup$Provider, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $FluidStack_, $FluidStack, $IFluidTank } from "@package/net/neoforged/neoforge/fluids";
import { $AutomationType_, $Action_, $IContentsListener } from "@package/mekanism/api";
import { $List } from "@package/java/util";

declare module "@package/mekanism/api/fluid" {
    export class $IExtendedFluidHandler {
    }
    export interface $IExtendedFluidHandler extends $IFluidHandler {
        /**
         * @deprecated
         */
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        /**
         * @deprecated
         */
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        setFluidInTank(arg0: number, arg1: $FluidStack_): void;
        insertFluid(arg0: $FluidStack_, arg1: $Action_): $FluidStack;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: $Action_): $FluidStack;
        extractFluid(arg0: $FluidStack_, arg1: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: number, arg2: $Action_): $FluidStack;
        /**
         * @deprecated
         */
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
    }
    export class $IExtendedFluidTank {
    }
    export interface $IExtendedFluidTank extends $IFluidTank, $INBTSerializable<$CompoundTag>, $IContentsListener {
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        /**
         * @deprecated
         */
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        /**
         * @deprecated
         */
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        getFluidAmount(): number;
        isFluidEqual(arg0: $FluidStack_): boolean;
        setStackSize(arg0: number, arg1: $Action_): number;
        getNeeded(): number;
        shrinkStack(arg0: number, arg1: $Action_): number;
        setStackUnchecked(arg0: $FluidStack_): void;
        growStack(arg0: number, arg1: $Action_): number;
        setStack(arg0: $FluidStack_): void;
        setEmpty(): void;
        extract(arg0: number, arg1: $Action_, arg2: $AutomationType_): $FluidStack;
        insert(arg0: $FluidStack_, arg1: $Action_, arg2: $AutomationType_): $FluidStack;
        isEmpty(): boolean;
        /**
         * @deprecated
         */
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        get fluidAmount(): number;
        get needed(): number;
        set stackUnchecked(value: $FluidStack_);
        set stack(value: $FluidStack_);
    }
    export class $ISidedFluidHandler {
    }
    export interface $ISidedFluidHandler extends $IExtendedFluidHandler {
        getFluidInTank(arg0: number): $FluidStack;
        getFluidInTank(arg0: number, arg1: $Direction_): $FluidStack;
        getTanks(): number;
        getTanks(arg0: $Direction_): number;
        getTankCapacity(arg0: number): number;
        getTankCapacity(arg0: number, arg1: $Direction_): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        isFluidValid(arg0: number, arg1: $FluidStack_, arg2: $Direction_): boolean;
        setFluidInTank(arg0: number, arg1: $FluidStack_, arg2: $Direction_): void;
        setFluidInTank(arg0: number, arg1: $FluidStack_): void;
        insertFluid(arg0: $FluidStack_, arg1: $Direction_, arg2: $Action_): $FluidStack;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Action_): $FluidStack;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Direction_, arg3: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: $Direction_, arg2: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: number, arg2: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $FluidStack;
        extractFluid(arg0: $FluidStack_, arg1: $Direction_, arg2: $Action_): $FluidStack;
        getFluidSideFor(): $Direction;
        get fluidSideFor(): $Direction;
    }
    export class $IMekanismFluidHandler {
    }
    export interface $IMekanismFluidHandler extends $ISidedFluidHandler, $IContentsListener {
        getFluidInTank(arg0: number, arg1: $Direction_): $FluidStack;
        getFluidTank(arg0: number, arg1: $Direction_): $IExtendedFluidTank;
        getTanks(arg0: $Direction_): number;
        getTankCapacity(arg0: number, arg1: $Direction_): number;
        isFluidValid(arg0: number, arg1: $FluidStack_, arg2: $Direction_): boolean;
        setFluidInTank(arg0: number, arg1: $FluidStack_, arg2: $Direction_): void;
        getFluidTanks(arg0: $Direction_): $List<$IExtendedFluidTank>;
        insertFluid(arg0: $FluidStack_, arg1: $Direction_, arg2: $Action_): $FluidStack;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Direction_, arg3: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: $Direction_, arg2: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $FluidStack;
        extractFluid(arg0: $FluidStack_, arg1: $Direction_, arg2: $Action_): $FluidStack;
        canHandleFluid(): boolean;
    }
}
