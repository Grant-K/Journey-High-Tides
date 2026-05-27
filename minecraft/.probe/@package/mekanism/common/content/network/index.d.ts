import { $IExtendedFluidTank, $IMekanismFluidHandler } from "@package/mekanism/api/fluid";
import { $DynamicBufferedNetwork, $DynamicBufferedNetwork$TransferEvent } from "@package/mekanism/common/lib/transmitter";
import { $IChemicalTracker } from "@package/mekanism/common/capabilities/chemical";
import { $VariableCapacityEnergyContainer } from "@package/mekanism/common/capabilities/energy";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $List, $UUID_, $Collection_ } from "@package/java/util";
import { $Action_ } from "@package/mekanism/api";
import { $UniversalCable, $MechanicalPipe, $PressurizedTube } from "@package/mekanism/common/content/network/transmitter";
import { $IFluidHandler$FluidAction_, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $IChemicalHandler, $ChemicalStack, $Chemical, $IChemicalTank } from "@package/mekanism/api/chemical";
import { $Holder_, $Direction_, $Direction, $Holder } from "@package/net/minecraft/core";
import { $VariableCapacityFluidTank } from "@package/mekanism/common/capabilities/fluid";
import { $IEnergyContainer, $IStrictEnergyHandler, $IMekanismStrictEnergyHandler } from "@package/mekanism/api/energy";
export * as transmitter from "@package/mekanism/common/content/network/transmitter";

declare module "@package/mekanism/common/content/network" {
    export class $FluidNetwork$FluidTransferEvent extends $DynamicBufferedNetwork$TransferEvent<$FluidNetwork> {
        fluidType: $FluidStack;
        network: $FluidNetwork;
        constructor(network: $FluidNetwork, type: $FluidStack_);
    }
    export class $EnergyNetwork extends $DynamicBufferedNetwork<$IStrictEnergyHandler, $EnergyNetwork, number, $UniversalCable> implements $IMekanismStrictEnergyHandler {
        absorbBuffer(transmitter: $UniversalCable): void;
        getBuffer(): number;
        onContentsChanged(): void;
        getEnergyContainers(side: $Direction_): $List<$IEnergyContainer>;
        adoptTransmittersAndAcceptorsFrom(net: $EnergyNetwork): $List<$UniversalCable>;
        getEnergy(arg0: number, arg1: $Direction_): number;
        setEnergy(arg0: number, arg1: number, arg2: $Direction_): void;
        extractEnergy(arg0: number, arg1: $Direction_, arg2: $Action_): number;
        extractEnergy(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): number;
        getMaxEnergy(arg0: number, arg1: $Direction_): number;
        getEnergyContainerCount(arg0: $Direction_): number;
        getNeededEnergy(arg0: number, arg1: $Direction_): number;
        canHandleEnergy(): boolean;
        getEnergyContainer(arg0: number, arg1: $Direction_): $IEnergyContainer;
        insertEnergy(arg0: number, arg1: $Direction_, arg2: $Action_): number;
        insertEnergy(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): number;
        getEnergy(arg0: number): number;
        setEnergy(arg0: number, arg1: number): void;
        extractEnergy(arg0: number, arg1: number, arg2: $Action_): number;
        getMaxEnergy(arg0: number): number;
        getEnergyContainerCount(): number;
        getNeededEnergy(arg0: number): number;
        getEnergySideFor(): $Direction;
        insertEnergy(arg0: number, arg1: number, arg2: $Action_): number;
        extractEnergy(arg0: number, arg1: $Action_): number;
        insertEnergy(arg0: number, arg1: $Action_): number;
        energyContainer: $VariableCapacityEnergyContainer;
        static ENERGY: void;
        currentScale: number;
        constructor(networks: $Collection_<$EnergyNetwork>);
        constructor(networkID: $UUID_);
        get buffer(): number;
        get energySideFor(): $Direction;
    }
    export class $FluidNetwork extends $DynamicBufferedNetwork<$IFluidHandler, $FluidNetwork, $FluidStack, $MechanicalPipe> implements $IMekanismFluidHandler {
        absorbBuffer(transmitter: $MechanicalPipe): void;
        getCapacityAsInt(): number;
        onContentsChanged(): void;
        getFluidTanks(side: $Direction_): $List<$IExtendedFluidTank>;
        setLastFluid(fluid: $FluidStack_): void;
        getPrevTransferAmount(): number;
        adoptTransmittersAndAcceptorsFrom(net: $FluidNetwork): $List<$MechanicalPipe>;
        isCompatibleWith(other: $FluidNetwork): boolean;
        getFluidInTank(arg0: number, arg1: $Direction_): $FluidStack;
        getFluidTank(arg0: number, arg1: $Direction_): $IExtendedFluidTank;
        getTanks(arg0: $Direction_): number;
        getTankCapacity(arg0: number, arg1: $Direction_): number;
        isFluidValid(arg0: number, arg1: $FluidStack_, arg2: $Direction_): boolean;
        setFluidInTank(arg0: number, arg1: $FluidStack_, arg2: $Direction_): void;
        insertFluid(arg0: $FluidStack_, arg1: $Direction_, arg2: $Action_): $FluidStack;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Direction_, arg3: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: $Direction_, arg2: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $FluidStack;
        extractFluid(arg0: $FluidStack_, arg1: $Direction_, arg2: $Action_): $FluidStack;
        canHandleFluid(): boolean;
        getFluidInTank(arg0: number): $FluidStack;
        getTanks(): number;
        getTankCapacity(arg0: number): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        setFluidInTank(arg0: number, arg1: $FluidStack_): void;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: number, arg2: $Action_): $FluidStack;
        getFluidSideFor(): $Direction;
        /**
         * @deprecated
         */
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        /**
         * @deprecated
         */
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        insertFluid(arg0: $FluidStack_, arg1: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: $Action_): $FluidStack;
        extractFluid(arg0: $FluidStack_, arg1: $Action_): $FluidStack;
        /**
         * @deprecated
         */
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        fluidTank: $VariableCapacityFluidTank;
        lastFluid: $FluidStack;
        currentScale: number;
        constructor(networkID: $UUID_);
        constructor(networks: $Collection_<$FluidNetwork>);
        get capacityAsInt(): number;
        get prevTransferAmount(): number;
        get fluidSideFor(): $Direction;
    }
    export class $ChemicalNetwork$ChemicalTransferEvent extends $DynamicBufferedNetwork$TransferEvent<$ChemicalNetwork> {
        transferType: $Holder<$Chemical>;
        network: $ChemicalNetwork;
        constructor(network: $ChemicalNetwork, type: $Holder_<$Chemical>);
    }
    export class $ChemicalNetwork extends $DynamicBufferedNetwork<$IChemicalHandler, $ChemicalNetwork, $ChemicalStack, $PressurizedTube> implements $IChemicalTracker {
        absorbBuffer(transmitter: $PressurizedTube): void;
        getBuffer(): $ChemicalStack;
        onContentsChanged(): void;
        getChemicalTanks(side: $Direction_): $List<$IChemicalTank>;
        getChemicalTank(): $IChemicalTank;
        getPrevTransferAmount(): number;
        adoptTransmittersAndAcceptorsFrom(net: $ChemicalNetwork): $List<$PressurizedTube>;
        setLastChemical(chemical: $Holder_<$Chemical>): void;
        isCompatibleWith(other: $ChemicalNetwork): boolean;
        chemicalTank: $IChemicalTank;
        lastChemical: $Holder<$Chemical>;
        currentScale: number;
        constructor(networks: $Collection_<$ChemicalNetwork>);
        constructor(networkID: $UUID_);
        get buffer(): $ChemicalStack;
        get prevTransferAmount(): number;
    }
    export class $EnergyNetwork$EnergyTransferEvent extends $DynamicBufferedNetwork$TransferEvent<$EnergyNetwork> {
        network: $EnergyNetwork;
        constructor(network: $EnergyNetwork);
    }
}
