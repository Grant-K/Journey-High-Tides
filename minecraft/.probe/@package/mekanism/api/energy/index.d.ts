import { $HolderLookup$Provider, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $IContentsListener, $AutomationType_, $Action_ } from "@package/mekanism/api";
import { $List } from "@package/java/util";

declare module "@package/mekanism/api/energy" {
    export class $IStrictEnergyHandler {
    }
    export interface $IStrictEnergyHandler {
        getEnergy(arg0: number): number;
        setEnergy(arg0: number, arg1: number): void;
        extractEnergy(arg0: number, arg1: number, arg2: $Action_): number;
        extractEnergy(arg0: number, arg1: $Action_): number;
        getMaxEnergy(arg0: number): number;
        getEnergyContainerCount(): number;
        getNeededEnergy(arg0: number): number;
        insertEnergy(arg0: number, arg1: number, arg2: $Action_): number;
        insertEnergy(arg0: number, arg1: $Action_): number;
        get energyContainerCount(): number;
    }
    export class $IMekanismStrictEnergyHandler {
    }
    export interface $IMekanismStrictEnergyHandler extends $ISidedStrictEnergyHandler, $IContentsListener {
        getEnergy(arg0: number, arg1: $Direction_): number;
        setEnergy(arg0: number, arg1: number, arg2: $Direction_): void;
        extractEnergy(arg0: number, arg1: $Direction_, arg2: $Action_): number;
        extractEnergy(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): number;
        getMaxEnergy(arg0: number, arg1: $Direction_): number;
        getEnergyContainerCount(arg0: $Direction_): number;
        getNeededEnergy(arg0: number, arg1: $Direction_): number;
        getEnergyContainers(arg0: $Direction_): $List<$IEnergyContainer>;
        canHandleEnergy(): boolean;
        getEnergyContainer(arg0: number, arg1: $Direction_): $IEnergyContainer;
        insertEnergy(arg0: number, arg1: $Direction_, arg2: $Action_): number;
        insertEnergy(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): number;
    }
    export class $ISidedStrictEnergyHandler {
    }
    export interface $ISidedStrictEnergyHandler extends $IStrictEnergyHandler {
        getEnergy(arg0: number): number;
        getEnergy(arg0: number, arg1: $Direction_): number;
        setEnergy(arg0: number, arg1: number, arg2: $Direction_): void;
        setEnergy(arg0: number, arg1: number): void;
        extractEnergy(arg0: number, arg1: $Direction_, arg2: $Action_): number;
        extractEnergy(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): number;
        extractEnergy(arg0: number, arg1: number, arg2: $Action_): number;
        getMaxEnergy(arg0: number): number;
        getMaxEnergy(arg0: number, arg1: $Direction_): number;
        getEnergyContainerCount(arg0: $Direction_): number;
        getEnergyContainerCount(): number;
        getNeededEnergy(arg0: number, arg1: $Direction_): number;
        getNeededEnergy(arg0: number): number;
        getEnergySideFor(): $Direction;
        insertEnergy(arg0: number, arg1: number, arg2: $Action_): number;
        insertEnergy(arg0: number, arg1: $Direction_, arg2: $Action_): number;
        insertEnergy(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): number;
        get energySideFor(): $Direction;
    }
    export class $IEnergyContainer {
    }
    export interface $IEnergyContainer extends $INBTSerializable<$CompoundTag>, $IContentsListener {
        getEnergy(): number;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        setEnergy(arg0: number): void;
        getMaxEnergy(): number;
        getNeeded(): number;
        setEmpty(): void;
        extract(arg0: number, arg1: $Action_, arg2: $AutomationType_): number;
        insert(arg0: number, arg1: $Action_, arg2: $AutomationType_): number;
        isEmpty(): boolean;
        get maxEnergy(): number;
        get needed(): number;
    }
}
