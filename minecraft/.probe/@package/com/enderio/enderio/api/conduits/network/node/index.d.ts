import { $Supplier_ } from "@package/java/util/function";
import { $Conduit, $ConduitCapabilityAccessor, $ConduitType_ } from "@package/com/enderio/enderio/api/conduits";
import { $ConduitNetwork } from "@package/com/enderio/enderio/api/conduits/network";
import { $BlockPos, $Direction_, $Holder } from "@package/net/minecraft/core";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $DyeColor_ } from "@package/net/minecraft/world/item";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $ConnectionConfigType_, $ConnectionConfig } from "@package/com/enderio/enderio/api/conduits/connection/config";
import { $ConnectionStatus } from "@package/com/enderio/enderio/api/conduits/connection";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";
export * as legacy from "@package/com/enderio/enderio/api/conduits/network/node/legacy";

declare module "@package/com/enderio/enderio/api/conduits/network/node" {
    export class $ConduitNode {
    }
    export interface $ConduitNode extends $ConduitCapabilityAccessor {
        getInventory(arg0: $Direction_): $IItemHandlerModifiable;
        getCapability<T, C>(arg0: $BlockCapability<T, C>, arg1: $Direction_, arg2: C): T;
        conduit(): $Holder<$Conduit<never, never>>;
        conduit<T extends $Conduit<T, never>>(arg0: $ConduitType_<T, never>): $Holder<T>;
        markDirty(): void;
        getNetwork(): $ConduitNetwork;
        isTicking(): boolean;
        isConnectedTo(arg0: $Direction_): boolean;
        getConnectionConfig<T extends $ConnectionConfig>(arg0: $Direction_, arg1: $ConnectionConfigType_<T>): T;
        getConnectionConfig(arg0: $Direction_): $ConnectionConfig;
        getConnectionStatus(arg0: $Direction_): $ConnectionStatus;
        getNodeData<T extends $NodeData>(arg0: $NodeDataType_<T>): T;
        getNodeData(): $NodeData;
        hasRedstoneSignal(arg0: $DyeColor_): boolean;
        getSidedCapability<T>(arg0: $BlockCapability<T, $Direction_>, arg1: $Direction_): T;
        hasNodeData(arg0: $NodeDataType_<never>): boolean;
        getOrCreateNodeData<T extends $NodeData>(arg0: $NodeDataType_<T>): T;
        setNodeData<T extends $NodeData>(arg0: T): void;
        isConnectedToBlock(arg0: $Direction_): boolean;
        pos(): $BlockPos;
        isLoaded(): boolean;
        get network(): $ConduitNetwork;
        get ticking(): boolean;
        get loaded(): boolean;
    }
    export class $NodeDataType<T extends $NodeData> {
        codec(): $MapCodec<T>;
        isPersistent(): boolean;
        create(): T;
        constructor(arg0: $MapCodec_<T>, arg1: $Supplier_<T>);
        get persistent(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $NodeDataType}.
     */
    export type $NodeDataType_<T> = RegistryTypes.EnderioConduitNodeDataType;
    export class $NodeData {
        static GENERIC_CODEC: $Codec<$NodeData>;
    }
    export interface $NodeData {
        type(): $NodeDataType<never>;
    }
    /**
     * Values that may be interpreted as {@link $NodeData}.
     */
    export type $NodeData_ = (() => $NodeDataType_<never>);
    export interface $NodeDataType<T> extends RegistryMarked<RegistryTypes.EnderioConduitNodeDataTypeTag, RegistryTypes.EnderioConduitNodeDataType> {}
}
