import { $Function_ } from "@package/java/util/function";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $WeightedEntry$Wrapper, $SimpleWeightedRandomList } from "@package/net/minecraft/util/random";
import { $RecordCodecBuilder } from "@package/com/mojang/serialization/codecs";
import { $List_, $Set_, $Set, $List } from "@package/java/util";

declare module "@package/net/darkhax/bookshelf/common/api/data/codecs/map" {
    export class $MapCodecHelper<T> {
        getWeighted(): $Codec<$WeightedEntry$Wrapper<T>>;
        getWeighted<O>(arg0: string, arg1: $Function_<O, $WeightedEntry$Wrapper<T>>): $RecordCodecBuilder<O, $WeightedEntry$Wrapper<T>>;
        getNullable(arg0: string): $MapCodec<T>;
        getNullable<O>(arg0: string, arg1: $Function_<O, T>): $RecordCodecBuilder<O, T>;
        getWeightedList(): $Codec<$SimpleWeightedRandomList<T>>;
        getWeightedList<O>(arg0: string, arg1: $Function_<O, $SimpleWeightedRandomList<T>>): $RecordCodecBuilder<O, $SimpleWeightedRandomList<T>>;
        getArray<O>(arg0: string, arg1: $Function_<O, T[]>): $RecordCodecBuilder<O, T[]>;
        getArray<O>(arg0: string, arg1: $Function_<O, T[]>, ...arg2: T[]): $RecordCodecBuilder<O, T[]>;
        getArray(): $Codec<T[]>;
        getList<O>(arg0: string, arg1: $Function_<O, $List<T>>, ...arg2: T[]): $RecordCodecBuilder<O, $List<T>>;
        getList(): $Codec<$List<T>>;
        getList<O>(arg0: string, arg1: $Function_<O, $List<T>>): $RecordCodecBuilder<O, $List<T>>;
        getList<O>(arg0: string, arg1: $Function_<O, $List<T>>, arg2: $List_<T>): $RecordCodecBuilder<O, $List<T>>;
        getSet<O>(arg0: string, arg1: $Function_<O, $Set<T>>, ...arg2: T[]): $RecordCodecBuilder<O, $Set<T>>;
        getSet<O>(arg0: string, arg1: $Function_<O, $Set<T>>, arg2: $Set_<T>): $RecordCodecBuilder<O, $Set<T>>;
        getSet<O>(arg0: string, arg1: $Function_<O, $Set<T>>): $RecordCodecBuilder<O, $Set<T>>;
        getSet(): $Codec<$Set<T>>;
        getOptional(arg0: string): $MapCodec<(T) | undefined>;
        getOptional<O>(arg0: string, arg1: $Function_<O, (T) | undefined>, arg2: (T) | undefined): $RecordCodecBuilder<O, (T) | undefined>;
        getOptional<O>(arg0: string, arg1: $Function_<O, (T) | undefined>): $RecordCodecBuilder<O, (T) | undefined>;
        get<O>(arg0: string, arg1: $Function_<O, T>, arg2: T): $RecordCodecBuilder<O, T>;
        get(): $Codec<T>;
        get<O>(arg0: string, arg1: $Function_<O, T>): $RecordCodecBuilder<O, T>;
        constructor(arg0: $Codec<T>, ...arg1: T[]);
    }
}
