import { $HolderLookup$Provider, $Direction_ } from "@package/net/minecraft/core";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $IContentsListener } from "@package/mekanism/api";
import { $Record } from "@package/java/lang";
import { $List } from "@package/java/util";

declare module "@package/mekanism/api/heat" {
    export class $IHeatCapacitor {
    }
    export interface $IHeatCapacitor extends $INBTSerializable<$CompoundTag>, $IContentsListener {
        getHeat(): number;
        getTemperature(): number;
        getInverseConduction(): number;
        getHeatCapacity(): number;
        handleHeat(arg0: number): void;
        getInverseInsulation(): number;
        setHeat(arg0: number): void;
        isAmbientTemperature(): boolean;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        get temperature(): number;
        get inverseConduction(): number;
        get heatCapacity(): number;
        get inverseInsulation(): number;
        get ambientTemperature(): boolean;
    }
    export class $HeatAPI$HeatTransfer extends $Record {
        environmentTransfer(): number;
        adjacentTransfer(): number;
        constructor(adjacentTransfer: number, environmentTransfer: number);
    }
    /**
     * Values that may be interpreted as {@link $HeatAPI$HeatTransfer}.
     */
    export type $HeatAPI$HeatTransfer_ = { environmentTransfer?: number, adjacentTransfer?: number,  } | [environmentTransfer?: number, adjacentTransfer?: number, ];
    export class $IMekanismHeatHandler {
    }
    export interface $IMekanismHeatHandler extends $ISidedHeatHandler, $IContentsListener {
        getTemperature(arg0: number, arg1: $Direction_): number;
        getHeatCapacitors(arg0: $Direction_): $List<$IHeatCapacitor>;
        getHeatCapacitor(arg0: number, arg1: $Direction_): $IHeatCapacitor;
        getTotalTemperature(arg0: $Direction_): number;
        getTotalInverseConductionCoefficient(arg0: $Direction_): number;
        getInverseConduction(arg0: number, arg1: $Direction_): number;
        getHeatCapacity(arg0: number, arg1: $Direction_): number;
        handleHeat(arg0: number, arg1: $Direction_): void;
        handleHeat(arg0: number, arg1: number, arg2: $Direction_): void;
        getInverseInsulation(arg0: number, arg1: $Direction_): number;
        getTotalHeatCapacity(arg0: $Direction_): number;
        canHandleHeat(): boolean;
        getHeatCapacitorCount(arg0: $Direction_): number;
        getTotalInverseInsulation(arg0: $Direction_): number;
    }
    export class $IHeatHandler {
    }
    export interface $IHeatHandler {
        getTemperature(arg0: number): number;
        getTotalInverseConduction(): number;
        getTotalTemperature(): number;
        getInverseConduction(arg0: number): number;
        getHeatCapacity(arg0: number): number;
        handleHeat(arg0: number): void;
        handleHeat(arg0: number, arg1: number): void;
        getTotalHeatCapacity(): number;
        getHeatCapacitorCount(): number;
        get totalInverseConduction(): number;
        get totalTemperature(): number;
        get totalHeatCapacity(): number;
        get heatCapacitorCount(): number;
    }
}
