import { $Function_, $BiFunction_, $BiConsumer_ } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $Object, $Number, $Record } from "@package/java/lang";
import { $Pattern } from "@package/java/util/regex";
import { $List, $List_, $Map_, $Map, $Collection, $Map$Entry, $Set } from "@package/java/util";

declare module "@package/wily/factoryapi/util" {
    export class $DualMap<K, V> {
    }
    export interface $DualMap<K, V> extends $Map<K, V> {
        createCodec(keyCodec: $Codec<K>): $Codec<V>;
        createCodec(keyCodec: $Codec<K>, defaultKey: K, defaultValue: V): $Codec<V>;
        getKeyOrDefault(arg0: V, arg1: K): K;
        createKeyCodec(codec: $Codec<V>): $Codec<K>;
        createKeyCodec(codec: $Codec<V>, defaultKey: K, defaultValue: V): $Codec<K>;
        getKey(arg0: V): K;
    }
    export class $VariablesMap<K, V> implements $Map<K, V> {
        updatePattern(): void;
        getPattern(): $Pattern;
        remove(key: $Object): V;
        size(): number;
        get(key: $Object): V;
        put(key: K, value: V): V;
        values(): $Collection<V>;
        clear(): void;
        isEmpty(): boolean;
        entrySet(): $Set<$Map$Entry<K, V>>;
        putAll(m: $Map_<K, V>): void;
        containsKey(key: $Object): boolean;
        keySet(): $Set<K>;
        containsValue(value: $Object): boolean;
        remove(arg0: $Object, arg1: $Object): boolean;
        replace(arg0: K, arg1: V, arg2: V): boolean;
        replace(arg0: K, arg1: V): V;
        replaceAll(arg0: $BiFunction_<K, V, V>): void;
        merge(arg0: K, arg1: V, arg2: $BiFunction_<V, V, V>): V;
        putIfAbsent(arg0: K, arg1: V): V;
        compute(arg0: K, arg1: $BiFunction_<K, V, V>): V;
        forEach(arg0: $BiConsumer_<K, V>): void;
        computeIfAbsent(arg0: K, arg1: $Function_<K, V>): V;
        getOrDefault(arg0: $Object, arg1: V): V;
        computeIfPresent(arg0: K, arg1: $BiFunction_<K, V, V>): V;
        constructor(map: $Map_<K, V>);
        constructor();
        get pattern(): $Pattern;
        get empty(): boolean;
    }
    export class $VariableResolver {
    }
    export interface $VariableResolver {
        getNumber(arg0: string, arg1: $Number): $Number;
        getBoolean(arg0: string, arg1: boolean): boolean;
    }
    export class $ListMap<K, V> implements $DualMap<K, V> {
        getKeyOrDefault(value: V, defaultKey: K): K;
        getKeyByIndex(i: number): K;
        getByIndex(i: number): V;
        indexOfKey(key: K): number;
        remove(o: $Object): V;
        size(): number;
        get(o: $Object): V;
        put(k: K, v: V): V;
        values(): $Collection<V>;
        indexOf(value: V): number;
        clear(): void;
        isEmpty(): boolean;
        static builder<K, V>(): $ListMap$Builder<K, V>;
        entrySet(): $Set<$Map$Entry<K, V>>;
        getKey(value: V): K;
        putAll(map: $Map_<K, V>): void;
        containsKey(o: $Object): boolean;
        keySet(): $Set<K>;
        containsValue(o: $Object): boolean;
        createCodec(keyCodec: $Codec<K>): $Codec<V>;
        createCodec(keyCodec: $Codec<K>, defaultKey: K, defaultValue: V): $Codec<V>;
        createKeyCodec(codec: $Codec<V>): $Codec<K>;
        createKeyCodec(codec: $Codec<V>, defaultKey: K, defaultValue: V): $Codec<K>;
        remove(arg0: $Object, arg1: $Object): boolean;
        replace(arg0: K, arg1: V, arg2: V): boolean;
        replace(arg0: K, arg1: V): V;
        replaceAll(arg0: $BiFunction_<K, V, V>): void;
        merge(arg0: K, arg1: V, arg2: $BiFunction_<V, V, V>): V;
        putIfAbsent(arg0: K, arg1: V): V;
        compute(arg0: K, arg1: $BiFunction_<K, V, V>): V;
        forEach(arg0: $BiConsumer_<K, V>): void;
        computeIfAbsent(arg0: K, arg1: $Function_<K, V>): V;
        getOrDefault(arg0: $Object, arg1: V): V;
        computeIfPresent(arg0: K, arg1: $BiFunction_<K, V, V>): V;
        constructor(builder: $ListMap$Builder_<K, V>);
        constructor();
        get empty(): boolean;
    }
    export class $ListMap$Builder<K, V> extends $Record {
        mapValues<OV>(valueMapper: $Function_<V, OV>): $ListMap$Builder<K, OV>;
        mapKeys<OK>(keyMapper: $Function_<K, OK>): $ListMap$Builder<OK, V>;
        build(): $ListMap<K, V>;
        mapEntries<OK, OV>(keyMapper: $Function_<K, OK>, valueMapper: $Function_<V, OV>): $ListMap$Builder<OK, OV>;
        put(key: K, value: V): $ListMap$Builder<K, V>;
        values(): $List<V>;
        keys(): $List<K>;
        constructor();
        constructor(keys: $List_<K>, values: $List_<V>);
    }
    /**
     * Values that may be interpreted as {@link $ListMap$Builder}.
     */
    export type $ListMap$Builder_<K, V> = { values?: $List_<any>, keys?: $List_<any>,  } | [values?: $List_<any>, keys?: $List_<any>, ];
}
