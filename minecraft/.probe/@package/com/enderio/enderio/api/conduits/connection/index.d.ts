import { $IntFunction } from "@package/java/util/function";
import { $BlockPos, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ConduitNode } from "@package/com/enderio/enderio/api/conduits/network/node";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Enum, $Record } from "@package/java/lang";
import { $ConnectionConfigType_, $ConnectionConfig } from "@package/com/enderio/enderio/api/conduits/connection/config";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $StringRepresentable$EnumCodec, $StringRepresentable } from "@package/net/minecraft/util";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";
export * as config from "@package/com/enderio/enderio/api/conduits/connection/config";
export * as path from "@package/com/enderio/enderio/api/conduits/connection/path";

declare module "@package/com/enderio/enderio/api/conduits/connection" {
    export class $ConduitBlockConnection extends $Record {
        inventory(): $IItemHandlerModifiable;
        getCapability<T, C>(arg0: $BlockCapability<T, C>, arg1: C): T;
        connectionConfig<T extends $ConnectionConfig>(arg0: $ConnectionConfigType_<T>): T;
        connectionConfig(): $ConnectionConfig;
        getSidedCapability<T>(arg0: $BlockCapability<T, $Direction_>): T;
        connectedBlockPos(): $BlockPos;
        connectionSide(): $Direction;
        node(): $ConduitNode;
        constructor(node: $ConduitNode, connectionSide: $Direction_);
    }
    /**
     * Values that may be interpreted as {@link $ConduitBlockConnection}.
     */
    export type $ConduitBlockConnection_ = { node?: $ConduitNode, connectionSide?: $Direction_,  } | [node?: $ConduitNode, connectionSide?: $Direction_, ];
    export class $ConnectionStatus extends $Enum<$ConnectionStatus> implements $StringRepresentable {
        getSerializedName(): string;
        isConnected(): boolean;
        canConnect(): boolean;
        isEndpoint(): boolean;
        static byName(arg0: string): $ConnectionStatus;
        static values(): $ConnectionStatus[];
        static valueOf(arg0: string): $ConnectionStatus;
        getRemappedEnumConstantName(): string;
        static DISABLED: $ConnectionStatus;
        static CONNECTED_BLOCK: $ConnectionStatus;
        static DISCONNECTED: $ConnectionStatus;
        static CODEC: $StringRepresentable$EnumCodec<$ConnectionStatus>;
        static BY_ID: $IntFunction<$ConnectionStatus>;
        static CONNECTED_CONDUIT: $ConnectionStatus;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ConnectionStatus>;
        get serializedName(): string;
        get connected(): boolean;
        get endpoint(): boolean;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ConnectionStatus}.
     */
    export type $ConnectionStatus_ = "none" | "connected_block" | "connected_conduit" | "disabled";
}
