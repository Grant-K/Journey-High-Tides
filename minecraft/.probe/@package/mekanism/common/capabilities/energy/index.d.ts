import { $Predicate, $Predicate_, $LongSupplier_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $AutomationType, $AutomationType_, $Action_, $IContentsListener_ } from "@package/mekanism/api";
import { $IEnergyContainer } from "@package/mekanism/api/energy";

declare module "@package/mekanism/common/capabilities/energy" {
    export class $VariableCapacityEnergyContainer extends $BasicEnergyContainer {
        static output(maxEnergy: $LongSupplier_, listener: $IContentsListener_): $VariableCapacityEnergyContainer;
        static create(maxEnergy: $LongSupplier_, canExtract: $Predicate_<$AutomationType>, canInsert: $Predicate_<$AutomationType>, listener: $IContentsListener_): $VariableCapacityEnergyContainer;
        static input(maxEnergy: $LongSupplier_, listener: $IContentsListener_): $VariableCapacityEnergyContainer;
        static internalOnly: $Predicate<$AutomationType>;
        static manualOnly: $Predicate<$AutomationType>;
        static notExternal: $Predicate<$AutomationType>;
    }
    export class $BasicEnergyContainer implements $IEnergyContainer {
        getEnergy(): number;
        deserializeNBT(provider: $HolderLookup$Provider, nbt: $CompoundTag_): void;
        setEnergy(energy: number): void;
        static output(maxEnergy: number, listener: $IContentsListener_): $BasicEnergyContainer;
        onContentsChanged(): void;
        getMaxEnergy(): number;
        static create(maxEnergy: number, canExtract: $Predicate_<$AutomationType>, canInsert: $Predicate_<$AutomationType>, listener: $IContentsListener_): $BasicEnergyContainer;
        static create(maxEnergy: number, listener: $IContentsListener_): $BasicEnergyContainer;
        static input(maxEnergy: number, listener: $IContentsListener_): $BasicEnergyContainer;
        extract(amount: number, action: $Action_, automationType: $AutomationType_): number;
        insert(amount: number, action: $Action_, automationType: $AutomationType_): number;
        isEmpty(): boolean;
        getNeeded(): number;
        setEmpty(): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static internalOnly: $Predicate<$AutomationType>;
        static manualOnly: $Predicate<$AutomationType>;
        static notExternal: $Predicate<$AutomationType>;
        get maxEnergy(): number;
        get needed(): number;
    }
}
