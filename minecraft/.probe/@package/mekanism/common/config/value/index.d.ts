import { $IMekanismConfig, $IConfigTranslation } from "@package/mekanism/common/config";
import { $BiPredicate_, $LongSupplier, $IntSupplier } from "@package/java/util/function";
import { $ModConfigSpec$Builder, $ModConfigSpec$ConfigValue } from "@package/net/neoforged/neoforge/common";

declare module "@package/mekanism/common/config/value" {
    export class $CachedValue<T> {
        hasInvalidationListeners(): boolean;
        removeInvalidationListenersMatching<DATA>(data: DATA, checker: $BiPredicate_<$CachedValue$IConfigValueInvalidationListener, DATA>): void;
        addInvalidationListener(listener: $CachedValue$IConfigValueInvalidationListener): void;
        clearCache(unloading: boolean): void;
        removeInvalidationListener(listener: $CachedValue$IConfigValueInvalidationListener): void;
    }
    export class $CachedLongValue extends $CachedValue<number> implements $LongSupplier {
        static definePositive(config: $IMekanismConfig, builder: $ModConfigSpec$Builder, comment: $IConfigTranslation, path: string, defaultValue: number): $CachedLongValue;
        static definedMin(config: $IMekanismConfig, builder: $ModConfigSpec$Builder, comment: $IConfigTranslation, path: string, defaultValue: number, min: number): $CachedLongValue;
        getAsLong(): number;
        static define(config: $IMekanismConfig, builder: $ModConfigSpec$Builder, comment: $IConfigTranslation, path: string, defaultValue: number, min: number, max: number): $CachedLongValue;
        get(): number;
        static wrap(config: $IMekanismConfig, internal: $ModConfigSpec$ConfigValue<number>): $CachedLongValue;
        set(value: number): void;
        getOrDefault(): number;
        get asLong(): number;
        get orDefault(): number;
    }
    export class $CachedIntValue extends $CachedValue<number> implements $IntSupplier, $LongSupplier {
        getAsLong(): number;
        getAsInt(): number;
        get(): number;
        static wrap(config: $IMekanismConfig, internal: $ModConfigSpec$ConfigValue<number>): $CachedIntValue;
        set(value: number): void;
        getOrDefault(): number;
        get asLong(): number;
        get asInt(): number;
        get orDefault(): number;
    }
}
