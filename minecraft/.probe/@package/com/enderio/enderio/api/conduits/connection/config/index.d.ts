import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Record } from "@package/java/lang";
import { $StreamCodec_, $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/enderio/enderio/api/conduits/connection/config" {
    export interface $ConnectionConfigType<T> extends RegistryMarked<RegistryTypes.EnderioConduitConnectionConfigTypeTag, RegistryTypes.EnderioConduitConnectionConfigType> {}
    export class $ConnectionConfig {
        static GENERIC_CODEC: $Codec<$ConnectionConfig>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ConnectionConfig>;
    }
    export interface $ConnectionConfig {
        disconnected(): $ConnectionConfig;
        isConnected(): boolean;
        reconnected(): $ConnectionConfig;
        type(): $ConnectionConfigType<never>;
        get connected(): boolean;
    }
    export class $ConnectionConfigType<T extends $ConnectionConfig> extends $Record {
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        defaultSupplier(): $Supplier<T>;
        getDefault(): T;
        constructor(codec: $MapCodec_<T>, streamCodec: $StreamCodec_<$RegistryFriendlyByteBuf, T>, defaultSupplier: $Supplier_<T>);
        get default(): T;
    }
    /**
     * Values that may be interpreted as {@link $ConnectionConfigType}.
     */
    export type $ConnectionConfigType_<T> = RegistryTypes.EnderioConduitConnectionConfigType | { codec?: $MapCodec_<$ConnectionConfig>, defaultSupplier?: $Supplier_<$ConnectionConfig>, streamCodec?: $StreamCodec_<$RegistryFriendlyByteBuf, $ConnectionConfig>,  } | [codec?: $MapCodec_<$ConnectionConfig>, defaultSupplier?: $Supplier_<$ConnectionConfig>, streamCodec?: $StreamCodec_<$RegistryFriendlyByteBuf, $ConnectionConfig>, ];
}
