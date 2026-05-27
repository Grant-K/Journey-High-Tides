import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $KineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { $Map } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as base from "@package/com/simibubi/create/content/kinetics/base";
export * as fan from "@package/com/simibubi/create/content/kinetics/fan";
export * as transmission from "@package/com/simibubi/create/content/kinetics/transmission";
export * as belt from "@package/com/simibubi/create/content/kinetics/belt";
export * as mechanicalArm from "@package/com/simibubi/create/content/kinetics/mechanicalArm";
export * as deployer from "@package/com/simibubi/create/content/kinetics/deployer";

declare module "@package/com/simibubi/create/content/kinetics" {
    export class $KineticNetwork {
        updateCapacity(): void;
        calculateCapacity(): number;
        calculateStress(): number;
        redirect$ijl000$simulated$extraKineticsCapacity(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        getActualCapacityOf(arg0: $KineticBlockEntity): number;
        redirect$ijl000$simulated$extraKineticsStress(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        getActualStressOf(arg0: $KineticBlockEntity): number;
        updateCapacityFor(arg0: $KineticBlockEntity, arg1: number): void;
        updateStressFor(arg0: $KineticBlockEntity, arg1: number): void;
        updateStress(): void;
        initFromTE(arg0: number, arg1: number, arg2: number): void;
        addSilently(arg0: $KineticBlockEntity, arg1: number, arg2: number): void;
        updateNetwork(): void;
        getSize(): number;
        sync(): void;
        remove(arg0: $KineticBlockEntity): void;
        add(arg0: $KineticBlockEntity): void;
        sources: $Map<$KineticBlockEntity, number>;
        members: $Map<$KineticBlockEntity, number>;
        initialized: boolean;
        id: number;
        constructor();
        get size(): number;
    }
}
