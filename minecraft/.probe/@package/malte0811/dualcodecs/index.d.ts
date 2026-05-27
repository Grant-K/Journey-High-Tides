import { $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $Function_ } from "@package/java/util/function";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Tag_, $Tag } from "@package/net/minecraft/nbt";
import { $List, $Set } from "@package/java/util";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Record } from "@package/java/lang";
import { $StreamCodec_, $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/malte0811/dualcodecs" {
    export class $DualMapCodec<S extends $ByteBuf, T> extends $Record {
        codec(): $DualCodec<S, T>;
        mapCodec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<S, T>;
        static unit<S extends $ByteBuf, T>(arg0: T): $DualMapCodec<S, T>;
        map<T1>(arg0: $Function_<T, T1>, arg1: $Function_<T1, T>): $DualMapCodec<S, T1>;
        constructor(mapCodec: $MapCodec_<T>, streamCodec: $StreamCodec_<S, T>);
    }
    /**
     * Values that may be interpreted as {@link $DualMapCodec}.
     */
    export type $DualMapCodec_<S, T> = { streamCodec?: $StreamCodec_<$ByteBuf, any>, mapCodec?: $MapCodec_<any>,  } | [streamCodec?: $StreamCodec_<$ByteBuf, any>, mapCodec?: $MapCodec_<any>, ];
    export class $DualCodec<S extends $ByteBuf, T> extends $Record {
        codec(): $Codec<T>;
        setOf(): $DualCodec<S, $Set<T>>;
        fieldOf(arg0: string): $DualMapCodec<S, T>;
        optionalFieldOf(arg0: string, arg1: T): $DualMapCodec<S, T>;
        optionalFieldOf(arg0: string): $DualMapCodec<S, (T) | undefined>;
        toNBT(arg0: T): $Tag;
        streamCodec(): $StreamCodec<S, T>;
        fromNBT(arg0: $Tag_): T;
        castStream<S1 extends S>(): $DualCodec<S1, T>;
        fromJSON(arg0: $JsonElement_): T;
        toJSON(arg0: T): $JsonElement;
        listOf(): $DualCodec<S, $List<T>>;
        dispatch<V>(arg0: $Function_<V, T>, arg1: $Function_<T, $DualMapCodec<S, V>>): $DualCodec<S, V>;
        map<T1>(arg0: $Function_<T, T1>, arg1: $Function_<T1, T>): $DualCodec<S, T1>;
        constructor(codec: $Codec<T>, streamCodec: $StreamCodec_<S, T>);
    }
    /**
     * Values that may be interpreted as {@link $DualCodec}.
     */
    export type $DualCodec_<S, T> = { codec?: $Codec<any>, streamCodec?: $StreamCodec_<$ByteBuf, any>,  } | [codec?: $Codec<any>, streamCodec?: $StreamCodec_<$ByteBuf, any>, ];
}
