import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $NodeData } from "@package/com/enderio/enderio/api/conduits/network/node";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Record } from "@package/java/lang";
import { $StreamCodec_, $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/enderio/enderio/api/conduits/network/node/legacy" {
    /**
     * @deprecated
     */
    export class $ConduitDataAccessor {
    }
    export interface $ConduitDataAccessor {
        hasData(arg0: $ConduitDataType_<never>): boolean;
        getData<T extends $ConduitData<T>>(arg0: $ConduitDataType_<T>): T;
        getOrCreateData<T extends $ConduitData<T>>(arg0: $ConduitDataType_<T>): T;
    }
    export interface $ConduitDataType<T> extends RegistryMarked<RegistryTypes.EnderioConduitDataTypeTag, RegistryTypes.EnderioConduitDataType> {}
    /**
     * @deprecated
     */
    export class $ConduitData<T extends $ConduitData<T>> {
        static CODEC: $Codec<$ConduitData<never>>;
    }
    export interface $ConduitData<T extends $ConduitData<T>> {
        withClientChanges(arg0: T): T;
        toNodeData(): $NodeData;
        deepCopy(): T;
        type(): $ConduitDataType<T>;
    }
    /**
     * @deprecated
     */
    export class $ConduitDataType<T extends $ConduitData<T>> extends $Record {
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        factory(): $Supplier<T>;
        constructor(codec: $MapCodec_<T>, streamCodec: $StreamCodec_<$RegistryFriendlyByteBuf, T>, factory: $Supplier_<T>);
    }
    /**
     * Values that may be interpreted as {@link $ConduitDataType}.
     */
    export type $ConduitDataType_<T> = RegistryTypes.EnderioConduitDataType | { codec?: $MapCodec_<$ConduitData<T>>, streamCodec?: $StreamCodec_<$RegistryFriendlyByteBuf, $ConduitData<T>>, factory?: $Supplier_<$ConduitData<T>>,  } | [codec?: $MapCodec_<$ConduitData<T>>, streamCodec?: $StreamCodec_<$RegistryFriendlyByteBuf, $ConduitData<T>>, factory?: $Supplier_<$ConduitData<T>>, ];
}
