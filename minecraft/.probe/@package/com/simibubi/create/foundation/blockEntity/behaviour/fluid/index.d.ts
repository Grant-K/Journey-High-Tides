import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Consumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $SmartFluidTank } from "@package/com/simibubi/create/foundation/fluid";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $TankSegmentAccessor } from "@package/io/github/irishgreencitrus/occultengineering/mixin/accessor";
import { $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $Runnable_ } from "@package/java/lang";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";

declare module "@package/com/simibubi/create/foundation/blockEntity/behaviour/fluid" {
    export class $SmartFluidTankBehaviour$TankSegment implements $TankSegmentAccessor {
        getFluidLevel(): $LerpedFloat;
        getTotalUnits(arg0: number): number;
        getRenderedFluid(): $FluidStack;
        writeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        onFluidStackChanged(): void;
        readNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        isEmpty(arg0: number): boolean;
        getTank(): $SmartFluidTank;
        constructor(arg0: $SmartFluidTankBehaviour, arg1: number);
        get fluidLevel(): $LerpedFloat;
        get renderedFluid(): $FluidStack;
        get tank(): $SmartFluidTank;
    }
    export class $SmartFluidTankBehaviour extends $BlockEntityBehaviour {
        getCapability(): $IFluidHandler;
        sendDataLazily(): void;
        forbidInsertion(): $SmartFluidTankBehaviour;
        getTanks(): $SmartFluidTankBehaviour$TankSegment[];
        allowInsertion(): $SmartFluidTankBehaviour;
        forbidExtraction(): $SmartFluidTankBehaviour;
        getPrimaryTank(): $SmartFluidTankBehaviour$TankSegment;
        whenFluidUpdates(arg0: $Runnable_): $SmartFluidTankBehaviour;
        allowExtraction(): $SmartFluidTankBehaviour;
        getPrimaryHandler(): $SmartFluidTank;
        sendDataImmediately(): void;
        isEmpty(): boolean;
        static single(arg0: $SmartBlockEntity, arg1: number): $SmartFluidTankBehaviour;
        forEach(arg0: $Consumer_<$SmartFluidTankBehaviour$TankSegment>): void;
        static INPUT: $BehaviourType<$SmartFluidTankBehaviour>;
        static OUTPUT: $BehaviourType<$SmartFluidTankBehaviour>;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$SmartFluidTankBehaviour>;
        constructor(arg0: $BehaviourType<$SmartFluidTankBehaviour>, arg1: $SmartBlockEntity, arg2: number, arg3: number, arg4: boolean);
        get capability(): $IFluidHandler;
        get tanks(): $SmartFluidTankBehaviour$TankSegment[];
        get primaryTank(): $SmartFluidTankBehaviour$TankSegment;
        get primaryHandler(): $SmartFluidTank;
        get empty(): boolean;
    }
}
