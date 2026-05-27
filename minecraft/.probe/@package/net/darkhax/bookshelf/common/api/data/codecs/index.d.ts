import { $Function_ } from "@package/java/util/function";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Enum, $Class } from "@package/java/lang";
import { $StreamCodec, $StreamCodec$CodecOperation_ } from "@package/net/minecraft/network/codec";
export * as map from "@package/net/darkhax/bookshelf/common/api/data/codecs/map";

declare module "@package/net/darkhax/bookshelf/common/api/data/codecs" {
    export class $EnumStreamCodec<T extends $Enum<T>> implements $StreamCodec<$FriendlyByteBuf, T> {
        decode(arg0: $FriendlyByteBuf): T;
        encode(arg0: $FriendlyByteBuf, arg1: T): void;
        mapStream<O extends $ByteBuf>(arg0: $Function_<O, $FriendlyByteBuf>): $StreamCodec<O, T>;
        dispatch<U>(arg0: $Function_<U, T>, arg1: $Function_<T, $StreamCodec<$FriendlyByteBuf, U>>): $StreamCodec<$FriendlyByteBuf, U>;
        cast<S extends B>(): $StreamCodec<S, T>;
        apply<O>(arg0: $StreamCodec$CodecOperation_<$FriendlyByteBuf, T, O>): $StreamCodec<$FriendlyByteBuf, O>;
        map<O>(arg0: $Function_<T, O>, arg1: $Function_<O, T>): $StreamCodec<$FriendlyByteBuf, O>;
        constructor(arg0: $Class<T>);
    }
}
