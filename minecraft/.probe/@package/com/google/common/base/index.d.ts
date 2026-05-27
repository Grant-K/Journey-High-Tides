import { $Duration } from "@package/java/time";
import { $Predicate as $Predicate$1, $Predicate_, $Supplier as $Supplier$1, $Function as $Function$1 } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $TimeUnit_ } from "@package/java/util/concurrent";
import { $Object, $Iterable, $CharSequence } from "@package/java/lang";
import { $Pattern } from "@package/java/util/regex";
import { $List, $Map } from "@package/java/util";

declare module "@package/com/google/common/base" {
    export class $Supplier<T> {
    }
    export interface $Supplier<T> extends $Supplier$1<T> {
        get(): T;
    }
    /**
     * Values that may be interpreted as {@link $Supplier}.
     */
    export type $Supplier_<T> = (() => T);
    export class $Splitter$MapSplitter {
        split(sequence: $CharSequence): $Map<string, string>;
    }
    export class $Predicate<T> {
    }
    export interface $Predicate<T> extends $Predicate$1<T> {
        equals(object: $Object): boolean;
        test(input: T): boolean;
        apply(input: T): boolean;
    }
    export class $Splitter {
        withKeyValueSeparator(keyValueSplitter: $Splitter): $Splitter$MapSplitter;
        withKeyValueSeparator(separator: string): $Splitter$MapSplitter;
        withKeyValueSeparator(separator: string): $Splitter$MapSplitter;
        splitToList(sequence: $CharSequence): $List<string>;
        splitToStream(sequence: $CharSequence): $Stream<string>;
        static onPattern(separatorPattern: string): $Splitter;
        omitEmptyStrings(): $Splitter;
        static fixedLength(length: number): $Splitter;
        trimResults(): $Splitter;
        trimResults(trimmer: $CharMatcher): $Splitter;
        split(sequence: $CharSequence): $Iterable<string>;
        limit(maxItems: number): $Splitter;
        static on(separator: string): $Splitter;
        static on(separator: string): $Splitter;
        static on(separatorMatcher: $CharMatcher): $Splitter;
        static on(separatorPattern: $Pattern): $Splitter;
    }
    export class $Ticker {
        static systemTicker(): $Ticker;
        read(): number;
    }
    export class $Function<F, T> {
    }
    export interface $Function<F, T> extends $Function$1<F, T> {
        equals(object: $Object): boolean;
        apply(input: F): F;
    }
    export class $Stopwatch {
        static createUnstarted(): $Stopwatch;
        static createUnstarted(ticker: $Ticker): $Stopwatch;
        static createStarted(ticker: $Ticker): $Stopwatch;
        static createStarted(): $Stopwatch;
        elapsed(desiredUnit: $TimeUnit_): number;
        elapsed(): $Duration;
        isRunning(): boolean;
        reset(): $Stopwatch;
        start(): $Stopwatch;
        stop(): $Stopwatch;
        get running(): boolean;
    }
    export class $CharMatcher implements $Predicate<string> {
        static breakingWhitespace(): $CharMatcher;
        static javaIsoControl(): $CharMatcher;
        /**
         * @deprecated
         */
        static invisible(): $CharMatcher;
        /**
         * @deprecated
         */
        static singleWidth(): $CharMatcher;
        static isNot(match: string): $CharMatcher;
        static forPredicate(predicate: $Predicate<string>): $CharMatcher;
        precomputed(): $CharMatcher;
        matchesAnyOf(sequence: $CharSequence): boolean;
        matchesAllOf(sequence: $CharSequence): boolean;
        matchesNoneOf(sequence: $CharSequence): boolean;
        indexIn(sequence: $CharSequence, start: number): number;
        indexIn(sequence: $CharSequence): number;
        lastIndexIn(sequence: $CharSequence): number;
        countIn(sequence: $CharSequence): number;
        replaceFrom(sequence: $CharSequence, replacement: string): string;
        replaceFrom(sequence: $CharSequence, replacement: $CharSequence): string;
        trimFrom(sequence: $CharSequence): string;
        trimLeadingFrom(sequence: $CharSequence): string;
        trimTrailingFrom(sequence: $CharSequence): string;
        collapseFrom(sequence: $CharSequence, replacement: string): string;
        trimAndCollapseFrom(sequence: $CharSequence, replacement: string): string;
        or(other: $CharMatcher): $CharMatcher;
        static any(): $CharMatcher;
        static anyOf(sequence: $CharSequence): $CharMatcher;
        static inRange(startInclusive: string, endInclusive: string): $CharMatcher;
        negate(): $CharMatcher;
        and(other: $CharMatcher): $CharMatcher;
        /**
         * @deprecated
         */
        static javaLowerCase(): $CharMatcher;
        /**
         * @deprecated
         */
        static javaUpperCase(): $CharMatcher;
        /**
         * @deprecated
         */
        static javaDigit(): $CharMatcher;
        /**
         * @deprecated
         */
        static javaLetter(): $CharMatcher;
        /**
         * @deprecated
         */
        static javaLetterOrDigit(): $CharMatcher;
        static noneOf(sequence: $CharSequence): $CharMatcher;
        static is(match: string): $CharMatcher;
        /**
         * @deprecated
         */
        static digit(): $CharMatcher;
        static whitespace(): $CharMatcher;
        static none(): $CharMatcher;
        retainFrom(sequence: $CharSequence): string;
        removeFrom(sequence: $CharSequence): string;
        matches(c: string): boolean;
        /**
         * @deprecated
         */
        apply(character: string): boolean;
        static ascii(): $CharMatcher;
        test(input: string): boolean;
        or(arg0: $Predicate_<string>): $Predicate$1<string>;
        and(arg0: $Predicate_<string>): $Predicate$1<string>;
    }
}
