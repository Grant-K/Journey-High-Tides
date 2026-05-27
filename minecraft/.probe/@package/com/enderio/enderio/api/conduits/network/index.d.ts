import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $Conduit, $ConduitType } from "@package/com/enderio/enderio/api/conduits";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $ConduitNode } from "@package/com/enderio/enderio/api/conduits/network/node";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $DyeColor_, $DyeColor } from "@package/net/minecraft/world/item";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ConduitConnectionPath } from "@package/com/enderio/enderio/api/conduits/connection/path";
import { $List, $Set, $Set_, $Collection } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $ConduitBlockConnection, $ConduitBlockConnection_ } from "@package/com/enderio/enderio/api/conduits/connection";
export * as node from "@package/com/enderio/enderio/api/conduits/network/node";

declare module "@package/com/enderio/enderio/api/conduits/network" {
    export class $ConduitNetworkContextType<T extends $ConduitNetworkContext<T>> extends $Record {
        codec(): $MapCodec<T>;
        isPersistent(): boolean;
        codecOrThrow(): $MapCodec<T>;
        factory(): $Supplier<T>;
        constructor(codec: $MapCodec_<T>, factory: $Supplier_<T>);
        get persistent(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ConduitNetworkContextType}.
     */
    export type $ConduitNetworkContextType_<T> = RegistryTypes.EnderioConduitNetworkContextType | { factory?: $Supplier_<$ConduitNetworkContext<T>>, codec?: $MapCodec_<$ConduitNetworkContext<T>>,  } | [factory?: $Supplier_<$ConduitNetworkContext<T>>, codec?: $MapCodec_<$ConduitNetworkContext<T>>, ];
    export interface $ConduitNetworkContextType<T> extends RegistryMarked<RegistryTypes.EnderioConduitNetworkContextTypeTag, RegistryTypes.EnderioConduitNetworkContextType> {}
    export class $ConduitNetwork {
    }
    export interface $ConduitNetwork {
        getOrCreateContext<T extends $ConduitNetworkContext<T>>(arg0: $ConduitNetworkContextType_<T>): T;
        nodes(): $Set<$ConduitNode>;
        nodeCount(arg0: $Holder_<$Conduit<never, never>>): number;
        nodeCount(): number;
        blockEndpoints(): $Collection<$ConduitNode>;
        blockConnections(): $Collection<$ConduitBlockConnection>;
        extractConnectionsFrom(arg0: $ConduitBlockConnection_): $List<$ConduitConnectionPath>;
        blockConnectionsAccessibleFrom(arg0: $ConduitBlockConnection_): $List<$ConduitConnectionPath>;
        conduits(): $Set<$Holder<$Conduit<never, never>>>;
        conduitType(): $ConduitType<never, never>;
        allChannels(): $Set<$DyeColor>;
        extractConnections(arg0: $DyeColor_): $List<$ConduitBlockConnection>;
        extractConnections(): $List<$ConduitBlockConnection>;
        insertConnections(arg0: $DyeColor_): $List<$ConduitBlockConnection>;
        insertConnections(): $List<$ConduitBlockConnection>;
        tickingNodes(): $Collection<$ConduitNode>;
        insertConnectionsFrom(arg0: $ConduitBlockConnection_): $List<$ConduitConnectionPath>;
        getTickableConduits(arg0: number, arg1: number): $List<$Holder<$Conduit<never, never>>>;
        ensureCachesReady(): void;
        hasContext(arg0: $ConduitNetworkContextType_<never>): boolean;
        neighbors(arg0: $ConduitNode): $Set<$ConduitNode>;
        isEmpty(): boolean;
        contains(arg0: $ConduitNode): boolean;
        getContext<T extends $ConduitNetworkContext<T>>(arg0: $ConduitNetworkContextType_<T>): T;
        get empty(): boolean;
    }
    export class $ConduitNetworkContext<T extends $ConduitNetworkContext<T>> {
        static GENERIC_CODEC: $Codec<$ConduitNetworkContext<never>>;
    }
    export interface $ConduitNetworkContext<T extends $ConduitNetworkContext<T>> {
        mergeWith(arg0: T): T;
        type(): $ConduitNetworkContextType<T>;
        split(arg0: $ConduitNetwork, arg1: $Set_<$ConduitNetwork>): T;
    }
}
