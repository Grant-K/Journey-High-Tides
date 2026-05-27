import { $Terminal } from "@package/org/jline/terminal";
import { $InfoCmp$Capability_ } from "@package/org/jline/utils";
import { $CharSequence, $Iterable_ } from "@package/java/lang";
import { $Comparator, $Map, $Collection } from "@package/java/util";

declare module "@package/org/jline/keymap" {
    export class $KeyMap<T> {
        getNomatch(): T;
        setNomatch(arg0: T): void;
        getAmbiguousTimeout(): number;
        getAnotherKey(): T;
        setAmbiguousTimeout(arg0: number): void;
        getBoundKeys(): $Map<string, T>;
        bindIfNotBound(arg0: T, arg1: $CharSequence): void;
        getUnicode(): T;
        static translate(arg0: string): string;
        bind(arg0: T, ...arg1: $CharSequence[]): void;
        bind(arg0: T, arg1: $Iterable_<$CharSequence>): void;
        bind(arg0: T, arg1: $CharSequence): void;
        unbind(...arg0: $CharSequence[]): void;
        unbind(arg0: $CharSequence): void;
        static ctrl(arg0: string): string;
        getBound(arg0: $CharSequence, arg1: number[]): T;
        getBound(arg0: $CharSequence): T;
        static display(arg0: string): string;
        static range(arg0: string): $Collection<string>;
        static esc(): string;
        setUnicode(arg0: T): void;
        static alt(arg0: string): string;
        static alt(arg0: string): string;
        static del(): string;
        static key(arg0: $Terminal, arg1: $InfoCmp$Capability_): string;
        static KEYMAP_LENGTH: number;
        static DEFAULT_AMBIGUOUS_TIMEOUT: number;
        static KEYSEQ_COMPARATOR: $Comparator<string>;
        constructor();
        get anotherKey(): T;
        get boundKeys(): $Map<string, T>;
    }
}
