import { $Supplier_, $Function_, $Consumer_, $UnaryOperator_ } from "@package/java/util/function";
import { $Lifecycle, $MapCodec, $DynamicOps, $Decoder, $Encoder, $Decoder$Terminal, $Dynamic, $Codec, $Decoder$Simple, $Codec$ResultFunction, $Decoder$Boxed, $DataResult } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $List } from "@package/java/util";

declare module "@package/dev/shadowsoffire/placebo/codec" {
    export class $CodecMap<V extends $CodecProvider<V>> implements $Codec<V> {
        getDefaultCodec(): $Codec<V>;
        setDefaultCodec(arg0: $Codec<V>): void;
        decode<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<$Pair<V, T>>;
        encode<T>(arg0: V, arg1: $DynamicOps<T>, arg2: T): $DataResult<T>;
        getValue(arg0: $ResourceLocation_): $Codec<V>;
        isEmpty(): boolean;
        getKey(arg0: $Codec<never>): $ResourceLocation;
        register(arg0: $ResourceLocation_, arg1: $Codec<V>): void;
        containsKey(arg0: $ResourceLocation_): boolean;
        xmap<S>(arg0: $Function_<V, S>, arg1: $Function_<S, V>): $Codec<S>;
        deprecated(arg0: number): $Codec<V>;
        flatXmap<S>(arg0: $Function_<V, $DataResult<S>>, arg1: $Function_<S, $DataResult<V>>): $Codec<S>;
        fieldOf(arg0: string): $MapCodec<V>;
        optionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: V, arg3: $Lifecycle): $MapCodec<V>;
        optionalFieldOf(arg0: string): $MapCodec<(V) | undefined>;
        optionalFieldOf(arg0: string, arg1: V): $MapCodec<V>;
        optionalFieldOf(arg0: string, arg1: V, arg2: $Lifecycle): $MapCodec<V>;
        lenientOptionalFieldOf(arg0: string, arg1: V): $MapCodec<V>;
        lenientOptionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: V, arg3: $Lifecycle): $MapCodec<V>;
        lenientOptionalFieldOf(arg0: string): $MapCodec<(V) | undefined>;
        lenientOptionalFieldOf(arg0: string, arg1: V, arg2: $Lifecycle): $MapCodec<V>;
        mapResult(arg0: $Codec$ResultFunction<V>): $Codec<V>;
        promotePartial(arg0: $Consumer_<string>): $Codec<V>;
        partialDispatch<E>(arg0: string, arg1: $Function_<E, $DataResult<V>>, arg2: $Function_<V, $DataResult<$MapCodec<E>>>): $Codec<E>;
        dispatchMap<E>(arg0: $Function_<E, V>, arg1: $Function_<V, $MapCodec<E>>): $MapCodec<E>;
        dispatchMap<E>(arg0: string, arg1: $Function_<E, V>, arg2: $Function_<V, $MapCodec<E>>): $MapCodec<E>;
        sizeLimitedListOf(arg0: number): $Codec<$List<V>>;
        comapFlatMap<S>(arg0: $Function_<V, $DataResult<S>>, arg1: $Function_<S, V>): $Codec<S>;
        flatComapMap<S>(arg0: $Function_<V, S>, arg1: $Function_<S, $DataResult<V>>): $Codec<S>;
        dispatchStable<E>(arg0: $Function_<E, V>, arg1: $Function_<V, $MapCodec<E>>): $Codec<E>;
        orElseGet(arg0: $Consumer_<string>, arg1: $Supplier_<V>): $Codec<V>;
        orElseGet(arg0: $UnaryOperator_<string>, arg1: $Supplier_<V>): $Codec<V>;
        orElseGet(arg0: $Supplier_<V>): $Codec<V>;
        stable(): $Codec<V>;
        listOf(arg0: number, arg1: number): $Codec<$List<V>>;
        listOf(): $Codec<$List<V>>;
        dispatch<E>(arg0: $Function_<E, V>, arg1: $Function_<V, $MapCodec<E>>): $Codec<E>;
        dispatch<E>(arg0: string, arg1: $Function_<E, V>, arg2: $Function_<V, $MapCodec<E>>): $Codec<E>;
        validate(arg0: $Function_<V, $DataResult<V>>): $Codec<V>;
        orElse(arg0: V): $Codec<V>;
        orElse(arg0: $UnaryOperator_<string>, arg1: V): $Codec<V>;
        orElse(arg0: $Consumer_<string>, arg1: V): $Codec<V>;
        comap<B>(arg0: $Function_<B, V>): $Encoder<B>;
        flatComap<B>(arg0: $Function_<B, $DataResult<V>>): $Encoder<B>;
        encodeStart<T>(arg0: $DynamicOps<T>, arg1: V): $DataResult<T>;
        simple(): $Decoder$Simple<V>;
        boxed(): $Decoder$Boxed<V>;
        terminal(): $Decoder$Terminal<V>;
        decode<T>(arg0: $Dynamic<T>): $DataResult<$Pair<V, T>>;
        map<B>(arg0: $Function_<V, B>): $Decoder<B>;
        flatMap<B>(arg0: $Function_<V, $DataResult<B>>): $Decoder<B>;
        parse<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<V>;
        parse<T>(arg0: $Dynamic<T>): $DataResult<V>;
        withLifecycle(arg0: $Lifecycle): $Encoder<V>;
        constructor(arg0: string);
    }
    export class $CodecProvider<R> {
    }
    export interface $CodecProvider<R> {
        getCodec(): $Codec<R>;
        get codec(): $Codec<R>;
    }
    /**
     * Values that may be interpreted as {@link $CodecProvider}.
     */
    export type $CodecProvider_<R> = (() => $Codec<R>);
}
