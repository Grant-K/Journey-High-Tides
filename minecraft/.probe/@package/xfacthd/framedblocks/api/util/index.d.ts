import { $Consumer_ } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $Stream } from "@package/java/util/stream";
import { $CamoContainer } from "@package/xfacthd/framedblocks/api/camo";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Spliterator, $List_, $Iterator } from "@package/java/util";
import { $Iterable } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/xfacthd/framedblocks/api/util" {
    export class $CamoList implements $Iterable<$CamoContainer<never, never>> {
        getCamo(arg0: number): $CamoContainer<never, never>;
        isEmptyOrContentsEmpty(): boolean;
        reversed(): $CamoList;
        isEmpty(): boolean;
        subList(arg0: number, arg1: number): $CamoList;
        iterator(): $Iterator<$CamoContainer<never, never>>;
        stream(): $Stream<$CamoContainer<never, never>>;
        static of(arg0: $CamoContainer<never, never>): $CamoList;
        static of(arg0: $List_<$CamoContainer<never, never>>): $CamoList;
        static of(...arg0: $CamoContainer<never, never>[]): $CamoList;
        concat(arg0: $CamoList): $CamoList;
        spliterator(): $Spliterator<$CamoContainer<never, never>>;
        forEach(arg0: $Consumer_<$CamoContainer<never, never>>): void;
        static CODEC: $Codec<$CamoList>;
        static EMPTY: $CamoList;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CamoList>;
        [Symbol.iterator](): Iterator<$CamoContainer<never, never>>
        get emptyOrContentsEmpty(): boolean;
        get empty(): boolean;
    }
}
