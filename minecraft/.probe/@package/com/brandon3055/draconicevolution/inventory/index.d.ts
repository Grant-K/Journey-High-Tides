import { $ModuleHost, $PropertyProvider } from "@package/com/brandon3055/draconicevolution/api/capability";
import { $PlayerSlot } from "@package/com/brandon3055/brandonscore/inventory";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $SlotGroup, $DataSync } from "@package/codechicken/lib/gui/modular/lib/container";
import { $PropertyData } from "@package/com/brandon3055/draconicevolution/client/gui/modular/itemconfig";
import { $ModularGuiContainerMenu } from "@package/codechicken/lib/inventory/container/modular";
import { $Pair } from "@package/com/brandon3055/brandonscore/lib";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $UUID, $List, $Map, $UUID_, $List_ } from "@package/java/util";
import { $Consumer_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Slot, $ContainerListener } from "@package/net/minecraft/world/inventory";
import { $Runnable_ } from "@package/java/lang";

declare module "@package/com/brandon3055/draconicevolution/inventory" {
    export class $ModularMenuCommon {
        static getProviders(arg0: $Stream<$ItemStack_>, arg1: $HolderLookup$Provider): $Stream<$ModuleHost>;
        static getHosts(arg0: $Stream<$ItemStack_>, arg1: $HolderLookup$Provider): $Stream<$ModuleHost>;
    }
    export interface $ModularMenuCommon {
        getIdentity(arg0: $ItemStack_, arg1: $HolderLookup$Provider): $UUID;
        getInventoryStacks(): $Stream<$ItemStack>;
        findProvider(arg0: $UUID_, arg1: $HolderLookup$Provider): $PropertyProvider;
        findHost(arg0: $UUID_, arg1: $HolderLookup$Provider): $ModuleHost;
        getSlots(): $List<$Slot>;
        get inventoryStacks(): $Stream<$ItemStack>;
        get slots(): $List<$Slot>;
    }
    /**
     * Values that may be interpreted as {@link $ModularMenuCommon}.
     */
    export type $ModularMenuCommon_ = (() => $List_<$Slot>);
    export class $ConfigurableItemMenu extends $ModularGuiContainerMenu implements $ModularMenuCommon {
        getLastStack(): $ItemStack;
        static getPlayerInventory(arg0: $Inventory): $Stream<$ItemStack>;
        static tryOpenGui(arg0: $ServerPlayer): void;
        static handlePropertyData(arg0: $Player, arg1: $PropertyData): void;
        static getStackProviders(arg0: $Stream<$ItemStack_>): $Stream<$Pair<$ItemStack, $ModuleHost>>;
        setOnInventoryChange(arg0: $Runnable_): void;
        setSelectionListener(arg0: $Consumer_<boolean>): void;
        getSelectedIdentity(): $UUID;
        getSlots(): $List<$Slot>;
        getIdentity(arg0: $ItemStack_, arg1: $HolderLookup$Provider): $UUID;
        getInventoryStacks(): $Stream<$ItemStack>;
        findProvider(arg0: $UUID_, arg1: $HolderLookup$Provider): $PropertyProvider;
        findHost(arg0: $UUID_, arg1: $HolderLookup$Provider): $ModuleHost;
        slotGroups: $List<$SlotGroup>;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        main: $SlotGroup;
        inventory: $Inventory;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        hotBar: $SlotGroup;
        static QUICKCRAFT_TYPE_CLONE: number;
        slotGroupMap: $Map<$Slot, $SlotGroup>;
        curios: $SlotGroup;
        containerId: number;
        dataSyncs: $List<$DataSync<never>>;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        carried: $ItemStack;
        stateId: number;
        lastSlots: $NonNullList<$ItemStack>;
        offhand: $SlotGroup;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        armor: $SlotGroup;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        zonedSlots: $Map<number, $List<$Slot>>;
        containerListeners: $List<$ContainerListener>;
        constructor(arg0: number, arg1: $Inventory, arg2: $FriendlyByteBuf);
        constructor(arg0: number, arg1: $Inventory, arg2: $PlayerSlot);
        get lastStack(): $ItemStack;
        set onInventoryChange(value: $Runnable_);
        set selectionListener(value: $Consumer_<boolean>);
        get selectedIdentity(): $UUID;
        get inventoryStacks(): $Stream<$ItemStack>;
    }
}
