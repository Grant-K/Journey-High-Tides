import { $Function_ } from "@package/java/util/function";
import { $Class } from "@package/java/lang";

declare module "@package/dev/upcraft/sparkweave/api/event" {
    export class $Event<T> {
        static create<T>(arg0: $Class<T>, arg1: $Function_<T[], T>): $Event<T>;
        static create<T>(arg0: $Class<T>, arg1: T, arg2: $Function_<T[], T>): $Event<T>;
    }
    export interface $Event<T> {
        listenerCount(): number;
        invoker(): T;
        unregister(arg0: T): void;
        register(arg0: T): void;
    }
}
