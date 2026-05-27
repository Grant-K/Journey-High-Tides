import { $Consumer_, $Supplier, $Supplier_ } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $Runnable_ } from "@package/java/lang";

declare module "@package/dev/architectury/utils" {
    export class $OptionalSupplier<T> {
    }
    export interface $OptionalSupplier<T> extends $Supplier<T> {
        getOrNull(): T;
        ifPresentOrElse(action: $Consumer_<T>, emptyAction: $Runnable_): void;
        orElseGet(supplier: $Supplier_<T>): T;
        toOptional(): (T) | undefined;
        ifPresent(action: $Consumer_<T>): void;
        stream(): $Stream<T>;
        isPresent(): boolean;
        orElse(other: T): T;
        get orNull(): T;
        get present(): boolean;
    }
}
