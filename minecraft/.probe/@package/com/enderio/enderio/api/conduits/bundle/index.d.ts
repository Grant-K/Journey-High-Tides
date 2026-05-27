import { $Conduit, $ConduitType_ } from "@package/com/enderio/enderio/api/conduits";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $FacadeType } from "@package/com/enderio/enderio/api/conduits/facade";
import { $List } from "@package/java/util";
import { $Consumer_ } from "@package/java/util/function";
import { $Holder_, $Direction_, $Holder } from "@package/net/minecraft/core";
import { $ConduitNode } from "@package/com/enderio/enderio/api/conduits/network/node";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Enum } from "@package/java/lang";
import { $ConnectionConfigType_, $ConnectionConfig } from "@package/com/enderio/enderio/api/conduits/connection/config";
import { $ConnectionStatus } from "@package/com/enderio/enderio/api/conduits/connection";

declare module "@package/com/enderio/enderio/api/conduits/bundle" {
    export class $ConduitBundle {
    }
    export interface $ConduitBundle {
        getFacadeBlock(): $Block;
        isFull(): boolean;
        getConduits(): $List<$Holder<$Conduit<never, never>>>;
        setConnectionConfig(arg0: $Holder_<$Conduit<never, never>>, arg1: $Direction_, arg2: $ConnectionConfig): void;
        getConnectionConfig<T extends $ConnectionConfig>(arg0: $Holder_<$Conduit<never, never>>, arg1: $Direction_, arg2: $ConnectionConfigType_<T>): T;
        getConnectionConfig(arg0: $Holder_<$Conduit<never, never>>, arg1: $Direction_): $ConnectionConfig;
        hasFacade(): boolean;
        addConduit(arg0: $Holder_<$Conduit<never, never>>, arg1: $Direction_, arg2: $Player): $AddConduitResult;
        setFacadeProvider(arg0: $ItemStack_): void;
        removeConduit(arg0: $Holder_<$Conduit<never, never>>, arg1: $Consumer_<$ItemStack>): void;
        canAddConduit(arg0: $Holder_<$Conduit<never, never>>): boolean;
        getConduitByType(arg0: $ConduitType_<never, never>): $Holder<$Conduit<never, never>>;
        getConnectionStatus(arg0: $Holder_<$Conduit<never, never>>, arg1: $Direction_): $ConnectionStatus;
        getConduitNode(arg0: $Holder_<$Conduit<never, never>>): $ConduitNode;
        tryConnectTo(arg0: $Holder_<$Conduit<never, never>>, arg1: $Direction_, arg2: boolean): boolean;
        hasConduitStrict(arg0: $Holder_<$Conduit<never, never>>): boolean;
        getCompatibleConduit(arg0: $Holder_<$Conduit<never, never>>): $Holder<$Conduit<never, never>>;
        hasCompatibleConduit(arg0: $Holder_<$Conduit<never, never>>): boolean;
        getConnectionInventory(arg0: $Holder_<$Conduit<never, never>>, arg1: $Direction_): $IItemHandlerModifiable;
        hasConduitOfType(arg0: $ConduitType_<never, never>): boolean;
        getConduitExtraWorldData(arg0: $Holder_<$Conduit<never, never>>): $CompoundTag;
        getConduitExtraGuiData(arg0: $Holder_<$Conduit<never, never>>, arg1: $Direction_): $CompoundTag;
        getConnectedConduits(arg0: $Direction_): $List<$Holder<$Conduit<never, never>>>;
        getFacadeType(): $FacadeType;
        getFacadeProvider(): $ItemStack;
        isEmpty(): boolean;
        get facadeBlock(): $Block;
        get full(): boolean;
        get conduits(): $List<$Holder<$Conduit<never, never>>>;
        get facadeType(): $FacadeType;
        get empty(): boolean;
    }
    /**
     * @deprecated
     */
    export class $SlotType extends $Enum<$SlotType> {
        getY(): number;
        getX(): number;
        static values(): $SlotType[];
        static valueOf(arg0: string): $SlotType;
        static FILTER_INSERT: $SlotType;
        static FILTER_EXTRACT: $SlotType;
        static UPGRADE_EXTRACT: $SlotType;
        static Y_POSITION: number;
        get y(): number;
        get x(): number;
    }
    /**
     * Values that may be interpreted as {@link $SlotType}.
     */
    export type $SlotType_ = "filter_extract" | "filter_insert" | "upgrade_extract";
    export class $AddConduitResult {
    }
    export interface $AddConduitResult {
        hasChanged(): boolean;
    }
}
