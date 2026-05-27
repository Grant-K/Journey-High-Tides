import { $IFluidHandler$FluidAction_, $IFluidHandlerItem, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Predicate_, $Supplier_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SimpleFluidContent, $FluidStack_, $FluidStack, $IFluidTank } from "@package/net/neoforged/neoforge/fluids";
import { $DataComponentType } from "@package/net/minecraft/core/component";

declare module "@package/net/neoforged/neoforge/fluids/capability/templates" {
    export class $FluidHandlerItemStackSimple$SwapEmpty extends $FluidHandlerItemStackSimple {
        constructor(arg0: $Supplier_<$DataComponentType<$SimpleFluidContent>>, arg1: $ItemStack_, arg2: $ItemStack_, arg3: number);
    }
    export class $FluidHandlerItemStack$Consumable extends $FluidHandlerItemStack {
        constructor(arg0: $Supplier_<$DataComponentType<$SimpleFluidContent>>, arg1: $ItemStack_, arg2: number);
    }
    export class $FluidTank implements $IFluidHandler, $IFluidTank {
        getFluid(): $FluidStack;
        writeToNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $CompoundTag;
        readFromNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $FluidTank;
        getFluidInTank(arg0: number): $FluidStack;
        getCapacity(): number;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        setCapacity(arg0: number): $FluidTank;
        getTanks(): number;
        getTankCapacity(arg0: number): number;
        isFluidValid(arg0: $FluidStack_): boolean;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        getFluidAmount(): number;
        setFluid(arg0: $FluidStack_): void;
        setValidator(arg0: $Predicate_<$FluidStack>): $FluidTank;
        getSpace(): number;
        isEmpty(): boolean;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        constructor(arg0: number);
        constructor(arg0: number, arg1: $Predicate_<$FluidStack>);
        get tanks(): number;
        get fluidAmount(): number;
        set validator(value: $Predicate_<$FluidStack>);
        get space(): number;
        get empty(): boolean;
    }
    export class $FluidHandlerItemStack implements $IFluidHandlerItem {
        canFillFluidType(arg0: $FluidStack_): boolean;
        canDrainFluidType(arg0: $FluidStack_): boolean;
        getFluid(): $FluidStack;
        getFluidInTank(arg0: number): $FluidStack;
        getContainer(): $ItemStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        getTanks(): number;
        getTankCapacity(arg0: number): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        constructor(arg0: $Supplier_<$DataComponentType<$SimpleFluidContent>>, arg1: $ItemStack_, arg2: number);
        get fluid(): $FluidStack;
        get container(): $ItemStack;
        get tanks(): number;
    }
    export class $FluidHandlerItemStack$SwapEmpty extends $FluidHandlerItemStack {
        constructor(arg0: $Supplier_<$DataComponentType<$SimpleFluidContent>>, arg1: $ItemStack_, arg2: $ItemStack_, arg3: number);
    }
    export class $EmptyFluidHandler implements $IFluidHandler {
        getFluidInTank(arg0: number): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        getTanks(): number;
        getTankCapacity(arg0: number): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        static INSTANCE: $EmptyFluidHandler;
        get tanks(): number;
    }
    export class $FluidHandlerItemStackSimple implements $IFluidHandlerItem {
        canFillFluidType(arg0: $FluidStack_): boolean;
        canDrainFluidType(arg0: $FluidStack_): boolean;
        getFluid(): $FluidStack;
        getFluidInTank(arg0: number): $FluidStack;
        getContainer(): $ItemStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        getTanks(): number;
        getTankCapacity(arg0: number): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        constructor(arg0: $Supplier_<$DataComponentType<$SimpleFluidContent>>, arg1: $ItemStack_, arg2: number);
        get fluid(): $FluidStack;
        get container(): $ItemStack;
        get tanks(): number;
    }
    export class $FluidHandlerItemStackSimple$Consumable extends $FluidHandlerItemStackSimple {
        constructor(arg0: $Supplier_<$DataComponentType<$SimpleFluidContent>>, arg1: $ItemStack_, arg2: number);
    }
    export class $VoidFluidHandler implements $IFluidHandler {
        getFluidInTank(arg0: number): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        getTanks(): number;
        getTankCapacity(arg0: number): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        static INSTANCE: $VoidFluidHandler;
        constructor();
        get tanks(): number;
    }
}
