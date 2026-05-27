import { $Serializable } from "@package/java/io";
import { $Number, $Comparable } from "@package/java/lang";

declare module "@package/org/apache/commons/lang3/mutable" {
    export class $Mutable<T> {
    }
    export interface $Mutable<T> {
        getValue(): T;
        setValue(arg0: T): void;
    }
    export class $MutableObject<T> implements $Mutable<T>, $Serializable {
        getValue(): T;
        setValue(arg0: T): void;
        constructor();
        constructor(arg0: T);
    }
    export class $MutableInt extends $Number implements $Comparable<$MutableInt>, $Mutable<$Number> {
        subtract(arg0: number): void;
        subtract(arg0: $Number): void;
        getAndAdd(arg0: number): number;
        getAndAdd(arg0: $Number): number;
        incrementAndGet(): number;
        getAndIncrement(): number;
        getAndDecrement(): number;
        decrementAndGet(): number;
        addAndGet(arg0: number): number;
        addAndGet(arg0: $Number): number;
        decrement(): void;
        toInteger(): number;
        compareTo(arg0: $MutableInt): number;
        add(arg0: $Number): void;
        add(arg0: number): void;
        increment(): void;
        setValue(arg0: number): void;
        setValue(arg0: $Number): void;
        getValue(): $MutableInt;
        constructor();
        constructor(arg0: $Number);
        constructor(arg0: string);
        constructor(arg0: number);
        get andIncrement(): number;
        get andDecrement(): number;
    }
    export class $MutableFloat extends $Number implements $Comparable<$MutableFloat>, $Mutable<$Number> {
        subtract(arg0: number): void;
        subtract(arg0: $Number): void;
        getAndAdd(arg0: number): number;
        getAndAdd(arg0: $Number): number;
        incrementAndGet(): number;
        getAndIncrement(): number;
        getAndDecrement(): number;
        decrementAndGet(): number;
        addAndGet(arg0: $Number): number;
        addAndGet(arg0: number): number;
        decrement(): void;
        toFloat(): number;
        isInfinite(): boolean;
        compareTo(arg0: $MutableFloat): number;
        getValue(): number;
        add(arg0: number): void;
        add(arg0: $Number): void;
        increment(): void;
        isNaN(): boolean;
        setValue(arg0: number): void;
        setValue(arg0: $Number): void;
        constructor();
        constructor(arg0: number);
        constructor(arg0: string);
        constructor(arg0: $Number);
        get andIncrement(): number;
        get andDecrement(): number;
        get infinite(): boolean;
        get naN(): boolean;
    }
    export class $MutableBoolean implements $Mutable<boolean>, $Serializable, $Comparable<$MutableBoolean> {
        setTrue(): void;
        setFalse(): void;
        isFalse(): boolean;
        toBoolean(): boolean;
        isTrue(): boolean;
        compareTo(arg0: $MutableBoolean): number;
        booleanValue(): boolean;
        setValue(arg0: boolean): void;
        setValue(arg0: boolean): void;
        getValue(): boolean;
        constructor();
        constructor(arg0: boolean);
        constructor(arg0: boolean);
    }
}
