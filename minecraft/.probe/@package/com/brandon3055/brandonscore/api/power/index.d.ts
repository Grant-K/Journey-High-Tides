import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $MCDataOutput, $MCDataInput } from "@package/codechicken/lib/data";
import { $IMCDataSerializable, $IValueHashable } from "@package/com/brandon3055/brandonscore/lib";
import { $Object, $Runnable_, $Runnable } from "@package/java/lang";
import { $IEnergyStorage } from "@package/net/neoforged/neoforge/energy";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/brandon3055/brandonscore/api/power" {
    export class $OPStorage implements $INBTSerializable<$CompoundTag>, $IValueHashable<$OPStorage$ComparableValue>, $IMCDataSerializable, $IOPStorage {
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        markDirty(): void;
        setMaxExtract(arg0: number): $OPStorage;
        setMaxReceive(arg0: number): $OPStorage;
        setIOMode(arg0: boolean): $OPStorage;
        setIOMode(arg0: boolean, arg1: boolean): $OPStorage;
        receiveOP(arg0: number, arg1: boolean): number;
        extractOP(arg0: number, arg1: boolean): number;
        getOPStored(): number;
        getMaxOPStored(): number;
        setExtractOnly(): $OPStorage;
        setReceiveOnly(): $OPStorage;
        getIOInfo(): $IOInfo;
        setMaxTransfer(arg0: number): $OPStorage;
        serializeMCD(arg0: $MCDataOutput): void;
        deSerializeMCD(arg0: $MCDataInput): void;
        checkValueHash(arg0: $Object): boolean;
        setIOTracker(arg0: $IOTracker): void;
        setCapacity(arg0: number): $OPStorage;
        maxReceive(): number;
        maxExtract(): number;
        setChangeListener(arg0: $Runnable_): $OPStorage;
        modifyEnergyStored(arg0: number): number;
        canExtract(): boolean;
        canReceive(): boolean;
        getEnergyStored(): number;
        getMaxEnergyStored(): number;
        receiveEnergy(arg0: number, arg1: boolean): number;
        extractEnergy(arg0: number, arg1: boolean): number;
        getValueHash(): $OPStorage$ComparableValue;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $BlockEntity, arg1: number);
        constructor(arg0: number);
        constructor(arg0: $BlockEntity, arg1: number, arg2: number);
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: $BlockEntity, arg1: number, arg2: number, arg3: number);
        get OPStored(): number;
        get maxOPStored(): number;
        get IOInfo(): $IOInfo;
        set maxTransfer(value: number);
        set IOTracker(value: $IOTracker);
        set capacity(value: number);
        set changeListener(value: $Runnable_);
        get energyStored(): number;
        get maxEnergyStored(): number;
        get valueHash(): $OPStorage$ComparableValue;
    }
    export class $IOTracker implements $IOInfo, $Runnable {
        currentInput(): number;
        energyInserted(arg0: number): void;
        static averageLongArray(arg0: number[], arg1: number): number;
        energyModified(arg0: number): void;
        syncClientValues(arg0: number, arg1: number): void;
        energyExtracted(arg0: number): void;
        currentOutput(): number;
        run(): void;
        constructor(arg0: number);
        constructor();
    }
    export class $IOPStorage {
    }
    export interface $IOPStorage extends $IEnergyStorage {
        getEnergyStored(): number;
        getMaxEnergyStored(): number;
        receiveOP(arg0: number, arg1: boolean): number;
        extractOP(arg0: number, arg1: boolean): number;
        getOPStored(): number;
        getMaxOPStored(): number;
        getIOInfo(): $IOInfo;
        maxReceive(): number;
        maxExtract(): number;
        modifyEnergyStored(arg0: number): number;
        receiveEnergy(arg0: number, arg1: boolean): number;
        extractEnergy(arg0: number, arg1: boolean): number;
        canExtract(): boolean;
        canReceive(): boolean;
        get energyStored(): number;
        get maxEnergyStored(): number;
        get OPStored(): number;
        get maxOPStored(): number;
        get IOInfo(): $IOInfo;
    }
    export class $IOInfo {
    }
    export interface $IOInfo {
        currentInput(): number;
        currentOutput(): number;
    }
    export class $OPStorage$ComparableValue {
    }
}
