import { $Consumer_ } from "@package/java/util/function";
import { $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MCDataOutput, $MCDataInput } from "@package/codechicken/lib/data";
import { $SlotGroup, $DataSync } from "@package/codechicken/lib/gui/modular/lib/container";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $ContainerListener, $Slot, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $List, $Map } from "@package/java/util";

declare module "@package/codechicken/lib/inventory/container/modular" {
    export class $ModularGuiContainerMenu extends $AbstractContainerMenu {
        sendPacketToServer(arg0: number, arg1: $Consumer_<$MCDataOutput>): void;
        sendPacketToClient(arg0: number, arg1: $Consumer_<$MCDataOutput>): void;
        static handlePacketFromClient(arg0: $Player, arg1: $MCDataInput): void;
        handlePacketFromClient(arg0: $Player, arg1: number, arg2: $MCDataInput): void;
        handlePacketFromServer(arg0: $Player, arg1: number, arg2: $MCDataInput): void;
        static handlePacketFromServer(arg0: $Player, arg1: $MCDataInput): void;
        static canStacksMerge(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        mapSlot(arg0: $Slot, arg1: $SlotGroup): void;
        carried: $ItemStack;
        slotGroups: $List<$SlotGroup>;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        inventory: $Inventory;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        slotGroupMap: $Map<$Slot, $SlotGroup>;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        zonedSlots: $Map<number, $List<$Slot>>;
        containerListeners: $List<$ContainerListener>;
        containerId: number;
        dataSyncs: $List<$DataSync<never>>;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
    }
}
