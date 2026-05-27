import { $Container } from "@package/net/minecraft/world";
import { $Supplier_, $Function_, $BiFunction_ } from "@package/java/util/function";
import { $AbstractDataStore } from "@package/codechicken/lib/inventory/container/data";
import { $MCDataInput } from "@package/codechicken/lib/data";
import { $ModularSlot, $ModularGuiContainerMenu } from "@package/codechicken/lib/inventory/container/modular";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $List } from "@package/java/util";

declare module "@package/codechicken/lib/gui/modular/lib/container" {
    export class $DataSync<T> {
        handleSyncPacket(arg0: $MCDataInput): void;
        detectAndSend(): void;
        get(): T;
        static PKT_SEND_CHANGES: number;
        constructor(arg0: $ModularGuiContainerMenu, arg1: $AbstractDataStore<T>, arg2: $Supplier_<T>);
    }
    export class $SlotGroup {
        addAllSlots(arg0: $Container): void;
        addAllSlots(arg0: $Container, arg1: $BiFunction_<$Container, number, $ModularSlot>): void;
        addSlot(arg0: $ModularSlot): $ModularSlot;
        addSlots(arg0: number, arg1: number, arg2: $Function_<number, $ModularSlot>): void;
        addPlayerArmor(arg0: $Inventory): void;
        addPlayerMain(arg0: $Inventory): void;
        addPlayerBar(arg0: $Inventory): void;
        addPlayerOffhand(arg0: $Inventory): void;
        getSlot(arg0: number): $ModularSlot;
        slots(): $List<$ModularSlot>;
        size(): number;
        indexOf(arg0: $Slot): number;
        zone: number;
        quickMoveTo: $List<number>;
        constructor(arg0: $ModularGuiContainerMenu, arg1: number, ...arg2: number[]);
    }
}
