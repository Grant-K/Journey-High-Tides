import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $Runnable_ } from "@package/java/lang";
import { $List } from "@package/java/util";
export * as pond from "@package/io/wispforest/owo/util/pond";

declare module "@package/io/wispforest/owo/util" {
    export class $EventStream<T> {
        sink(): T;
        source(): $EventSource<T>;
        constructor(sinkFactory: $Function_<$List<T>, T>);
    }
    export class $EventSource<T> {
        subscribe(subscriber: T): $EventSource$Subscription;
    }
    export class $Observable<T> {
        observe(observer: $Consumer_<T>): void;
        static observeAll<T>(observer: $Consumer_<T>, ...observables: $Observable<T>[]): void;
        static observeAll(observer: $Runnable_, ...observables: $Observable<never>[]): void;
        get(): T;
        static of<T>(initial: T): $Observable<T>;
        set(newValue: T): void;
    }
    export class $EventSource$Subscription {
        cancel(): void;
    }
}
