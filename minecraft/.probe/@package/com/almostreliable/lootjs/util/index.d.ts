import { $Predicate, $Consumer_ } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Spliterator, $List_, $ArrayList, $Iterator } from "@package/java/util";
import { $Iterable } from "@package/java/lang";

declare module "@package/com/almostreliable/lootjs/util" {
    export class $NullableFunction<T, R> {
    }
    export interface $NullableFunction<T, R> {
        apply(arg0: T): R;
    }
    /**
     * Values that may be interpreted as {@link $NullableFunction}.
     */
    export type $NullableFunction_<T, R> = ((arg0: T) => R);
    export class $DebugInfo {
        push(): void;
        pop(): void;
        release(): void;
        add(arg0: string): void;
        constructor();
    }
    export class $ListHolder<W, T> implements $Iterable<W> {
        static asArrayList<T>(arg0: $List_<T>): $ArrayList<T>;
        remove(arg0: number): W;
        size(): number;
        get(arg0: number): W;
        clear(): void;
        isEmpty(): boolean;
        add(arg0: W): boolean;
        add(arg0: number, arg1: W): void;
        iterator(): $Iterator<W>;
        set(arg0: number, arg1: W): W;
        spliterator(): $Spliterator<W>;
        forEach(arg0: $Consumer_<W>): void;
        constructor(arg0: $List_<W>);
        constructor();
        [Symbol.iterator](): Iterator<W>
        get empty(): boolean;
    }
    export class $BlockFilter {
    }
    export interface $BlockFilter extends $Iterable<$Block>, $Predicate<$BlockState> {
        stream(): $Stream<$Block>;
    }
}
