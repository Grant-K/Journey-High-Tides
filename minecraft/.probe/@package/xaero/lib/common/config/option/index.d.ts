import { $Consumer_, $BiFunction } from "@package/java/util/function";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Logger } from "@package/org/apache/logging/log4j";
import { $Spliterator, $Iterator, $List } from "@package/java/util";
import { $Iterable } from "@package/java/lang";
import { $ConfigValueType } from "@package/xaero/lib/common/config/option/value/type";
export * as value from "@package/xaero/lib/common/config/option/value";

declare module "@package/xaero/lib/common/config/option" {
    export class $ConfigOption<T> {
        getTooltip(): $Component;
        isOverridable(): boolean;
        getDisplayName(): $Component;
        isValidValue(arg0: T): boolean;
        shouldSaveDefaultValue(): boolean;
        skipConfigReset(): boolean;
        getDisplayGetter(): $BiFunction<$ConfigOption<T>, T, $Component>;
        getDefaultValue(): T;
        getValueType(): $ConfigValueType<T>;
        getId(): string;
        get tooltip(): $Component;
        get overridable(): boolean;
        get displayName(): $Component;
        get displayGetter(): $BiFunction<$ConfigOption<T>, T, $Component>;
        get defaultValue(): T;
        get valueType(): $ConfigValueType<T>;
        get id(): string;
    }
    export class $ConfigOptionManager implements $Iterable<$ConfigOption<never>> {
        freeze(): void;
        get(arg0: string): $ConfigOption<never>;
        iterator(): $Iterator<$ConfigOption<never>>;
        register(arg0: $ConfigOption<never>): void;
        spliterator(): $Spliterator<$ConfigOption<never>>;
        forEach(arg0: $Consumer_<$ConfigOption<never>>): void;
        logger: $Logger;
        [Symbol.iterator](): Iterator<$ConfigOption<never>>
    }
    export class $IndexedConfigOption<T> extends $ConfigOption<T> {
        getValidValues(): $List<T>;
        get validValues(): $List<T>;
    }
    export class $BooleanConfigOption extends $IndexedConfigOption<boolean> {
    }
}
