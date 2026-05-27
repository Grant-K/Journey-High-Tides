import { $Function_ } from "@package/java/util/function";
import { $Holder, $Registry } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Class } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/sammy/malum/core/systems/registry" {
    export class $RegistryCodecBuddy$RegistryCodecBuddyHelper<T> {
    }
    export interface $RegistryCodecBuddy$RegistryCodecBuddyHelper<T> {
        getCodec(): $RegistryCodecBuddy<T>;
        save(arg0: $CompoundTag_): void;
        save(arg0: $CompoundTag_, arg1: string): void;
        get codec(): $RegistryCodecBuddy<T>;
    }
    /**
     * Values that may be interpreted as {@link $RegistryCodecBuddy$RegistryCodecBuddyHelper}.
     */
    export type $RegistryCodecBuddy$RegistryCodecBuddyHelper_<T> = (() => $RegistryCodecBuddy<T>);
    export class $RegistryCodecBuddy<T> {
        getCodec(): $Codec<T>;
        getHolderCodec(): $Codec<$Holder<T>>;
        getStreamCodec(): $StreamCodec<$ByteBuf, T>;
        load<K extends T>(arg0: $CompoundTag_, arg1: $Class<K>): (K) | undefined;
        load(arg0: $CompoundTag_): (T) | undefined;
        load<K extends T>(arg0: $CompoundTag_, arg1: $Function_<T, K>): (K) | undefined;
        load<K extends T>(arg0: $CompoundTag_, arg1: $Function_<T, K>, arg2: string): (K) | undefined;
        load<K extends T>(arg0: $CompoundTag_, arg1: $Class<K>, arg2: string): (K) | undefined;
        load(arg0: $CompoundTag_, arg1: string): (T) | undefined;
        save(arg0: T, arg1: $CompoundTag_): void;
        save(arg0: T, arg1: $CompoundTag_, arg2: string): void;
        constructor(arg0: $Registry<T>, arg1: string);
        get codec(): $Codec<T>;
        get holderCodec(): $Codec<$Holder<T>>;
        get streamCodec(): $StreamCodec<$ByteBuf, T>;
    }
}
