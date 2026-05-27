import { $FormatColorScheme_ } from "@package/net/silentchaos512/gear/client/tooltip";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Codec } from "@package/com/mojang/serialization";
import { $Color } from "@package/net/silentchaos512/lib/util";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $PartType, $PartType_ } from "@package/net/silentchaos512/gear/api/part";
import { $Multimap, $Multiset } from "@package/com/google/common/collect";
import { $List, $Collection_, $List_, $Collection, $Map, $Map$Entry, $Set } from "@package/java/util";
import { $GearType_, $GearType } from "@package/net/silentchaos512/gear/api/item";
import { $GearTooltipFlag_, $TextListBuilder } from "@package/net/silentchaos512/gear/client/util";
import { $BiConsumer_, $Function_ } from "@package/java/util/function";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $PartInstance } from "@package/net/silentchaos512/gear/gear/part";
import { $Iterable_, $Enum, $Object } from "@package/java/lang";
import { $MaterialInstance } from "@package/net/silentchaos512/gear/gear/material";
import { $PropertyKey, $PartGearKey_, $GearComponentInstance, $PartGearKey } from "@package/net/silentchaos512/gear/api/util";
import { $StreamCodec_, $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/silentchaos512/gear/api/property" {
    export class $NumberProperty$DisplayFormat extends $Enum<$NumberProperty$DisplayFormat> {
        static values(): $NumberProperty$DisplayFormat[];
        static valueOf(arg0: string): $NumberProperty$DisplayFormat;
        static MULTIPLIER: $NumberProperty$DisplayFormat;
        static UNIT: $NumberProperty$DisplayFormat;
        static PERCENTAGE: $NumberProperty$DisplayFormat;
    }
    /**
     * Values that may be interpreted as {@link $NumberProperty$DisplayFormat}.
     */
    export type $NumberProperty$DisplayFormat_ = "unit" | "multiplier" | "percentage";
    export class $ComputeContext$Gear extends $ComputeContext {
        gear(): $ItemStack;
    }
    export class $GearPropertyMap implements $Multimap<$PropertyKey<never, never>, $GearPropertyValue<never>> {
        getPropertyTypes(): $Set<$GearProperty<never, never>>;
        getMostSpecificKey(arg0: $PropertyKey<never, never>): $PropertyKey<never, never>;
        toMutable(): $GearPropertyMap;
        static formatText<T, V extends $GearPropertyValue<T>, P extends $GearProperty<T, V>>(arg0: $Collection_<V>, arg1: P, arg2: number, arg3: $FormatColorScheme_): $MutableComponent;
        static formatTextUnchecked(arg0: $Collection_<$GearPropertyValue<never>>, arg1: $GearProperty_<never, never>, arg2: $FormatColorScheme_): $Component;
        removeAll(arg0: $Object): $Collection<$GearPropertyValue<never>>;
        asMap(): $Map<$PropertyKey<never, never>, $Collection<$GearPropertyValue<never>>>;
        toImmutable(): $GearPropertyMap$Immutable;
        getValues<T, V extends $GearPropertyValue<T>>(arg0: $PropertyKey<T, V>): $Collection<V>;
        getValues<T, V extends $GearPropertyValue<T>>(arg0: $GearProperty_<T, V>, arg1: $GearType_): $Collection<V>;
        containsEntry(arg0: $Object, arg1: $Object): boolean;
        replaceValues(arg0: $PropertyKey<never, never>, arg1: $Iterable_<$GearPropertyValue<never>>): $Collection<$GearPropertyValue<never>>;
        remove(arg0: $Object, arg1: $Object): boolean;
        size(): number;
        get(arg0: $PropertyKey<never, never>): $Collection<$GearPropertyValue<never>>;
        put<V, I extends $GearPropertyValue<V>>(arg0: $GearProperty_<V, I>, arg1: $GearType_, arg2: I): boolean;
        put(arg0: $PropertyKey<never, never>, arg1: $GearPropertyValue<never>): boolean;
        values(): $Collection<$GearPropertyValue<never>>;
        clear(): void;
        isEmpty(): boolean;
        putAll(arg0: $PropertyKey<never, never>, arg1: $Iterable_<$GearPropertyValue<never>>): boolean;
        putAll(arg0: $Multimap<$PropertyKey<never, never>, $GearPropertyValue<never>>): boolean;
        containsKey(arg0: $Object): boolean;
        keys(): $Multiset<$PropertyKey<never, never>>;
        keySet(): $Set<$PropertyKey<never, never>>;
        containsValue(arg0: $Object): boolean;
        entries(): $Collection<$Map$Entry<$PropertyKey<never, never>, $GearPropertyValue<never>>>;
        forEach(action: $BiConsumer_<$PropertyKey<never, never>, $GearPropertyValue<never>>): void;
        static CODEC: $Codec<$GearPropertyMap>;
        static EMPTY: $GearPropertyMap;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $GearPropertyMap>;
        constructor();
        constructor(arg0: $GearPropertyMap);
        get propertyTypes(): $Set<$GearProperty<never, never>>;
        get empty(): boolean;
    }
    export class $ComputeContext {
        static material(arg0: $MaterialInstance, arg1: $PartType_): $ComputeContext$Material;
        partType(): $PartType;
        static part(arg0: $PartInstance): $ComputeContext$Part;
        static part(arg0: $PartInstance, arg1: $List_<$MaterialInstance>): $ComputeContext$Part;
        static gear(arg0: $ItemStack_, arg1: $List_<$PartInstance>): $ComputeContext$Gear;
        gearType(): $GearType;
        partGearKey(): $PartGearKey;
        components(): $List<$GearComponentInstance<never>>;
        static from(arg0: $GearComponentInstance<never>, arg1: $PartType_): $ComputeContext;
        static empty(): $ComputeContext$Empty;
    }
    export class $ComputeContext$Empty extends $ComputeContext {
    }
    export class $GearProperty<T, V extends $GearPropertyValue<T>> {
        codec(): $Codec<V>;
        getBaseValue(): T;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, V>;
        formatValue(arg0: V, arg1: $GearProperty$FormatContext_, arg2: $FormatColorScheme_): $Component;
        getDisplayName(): $MutableComponent;
        isZero(arg0: T): boolean;
        rawStreamCodec(): $StreamCodec<$FriendlyByteBuf, $GearPropertyValue<never>>;
        formatValueWithColor(arg0: V, arg1: $GearProperty$FormatContext_, arg2: $FormatColorScheme_): $MutableComponent;
        applySynergy(arg0: V, arg1: number): V;
        getZeroValue(): T;
        sortForDisplay(arg0: $Collection_<V>): $List<V>;
        compressModifiers(arg0: $ComputeContext, arg1: $Collection_<V>, arg2: $PartGearKey_, arg3: $List_<$GearComponentInstance<never>>): $List<V>;
        getPreferredDecimalPlaces(arg0: V): number;
        computeForGear(arg0: $ComputeContext, arg1: T, arg2: boolean, arg3: $GearType_, arg4: $GearType_, arg5: $Collection_<V>, arg6: $List_<$PartInstance>): T;
        buildTooltip(arg0: $TextListBuilder, arg1: V, arg2: $ItemStack_, arg3: $GearTooltipFlag_, arg4: $FormatColorScheme_): void;
        formatText(arg0: $Component_): $Component;
        formatText(arg0: V, arg1: $GearTooltipFlag_, arg2: $FormatColorScheme_): $Component;
        formatModifiers(arg0: $Collection_<V>, arg1: $GearProperty$FormatContext_, arg2: $FormatColorScheme_): $Component;
        computeUnchecked(arg0: $ComputeContext, arg1: boolean, arg2: $GearType_, arg3: $GearType_, arg4: $Collection_<$GearPropertyValue<never>>): V;
        computeUncheckedForGear(arg0: $ComputeContext, arg1: $GearType_, arg2: $GearType_, arg3: $Collection_<$GearPropertyValue<never>>, arg4: $List_<$PartInstance>): V;
        getMinimumValue(): T;
        getMaximumValue(): T;
        isAffectedByGrades(): boolean;
        isAffectedBySynergy(): boolean;
        isForMaterialsOnly(): boolean;
        isHiddenUnchecked(arg0: $GearPropertyValue<never>, arg1: $GearTooltipFlag_): boolean;
        buildTooltipUnchecked(arg0: $TextListBuilder, arg1: $GearPropertyValue<never>, arg2: $ItemStack_, arg3: $GearTooltipFlag_, arg4: $FormatColorScheme_): void;
        formatTextUnchecked(arg0: $GearPropertyValue<never>, arg1: $GearTooltipFlag_, arg2: $FormatColorScheme_): $Component;
        formatModifiersUnchecked(arg0: $Collection_<$GearPropertyValue<never>>, arg1: $GearProperty$FormatContext_, arg2: $FormatColorScheme_): $Component;
        formatModifiersWithColorUnchecked(arg0: $ComputeContext, arg1: $Collection_<$GearPropertyValue<never>>, arg2: $GearProperty$FormatContext_, arg3: $FormatColorScheme_): $MutableComponent;
        getDefaultValue(): T;
        reduce(arg0: $ComputeContext, arg1: $Collection_<V>): $List<V>;
        getGroup(): $GearPropertyGroup;
        isHidden(arg0: V, arg1: $GearTooltipFlag_): boolean;
        valueOf(arg0: T): V;
        compute(arg0: $ComputeContext, arg1: $Collection_<V>): T;
        compute(arg0: $ComputeContext, arg1: T, arg2: boolean, arg3: $GearType_, arg4: $GearType_, arg5: $Collection_<V>): T;
        compute(arg0: $ComputeContext, arg1: T, arg2: boolean, arg3: $GearType_, arg4: $Collection_<V>): T;
        compute(arg0: $ComputeContext, arg1: T, arg2: $Collection_<V>): T;
        get baseValue(): T;
        get displayName(): $MutableComponent;
        get zeroValue(): T;
        get minimumValue(): T;
        get maximumValue(): T;
        get affectedByGrades(): boolean;
        get affectedBySynergy(): boolean;
        get forMaterialsOnly(): boolean;
        get defaultValue(): T;
        get group(): $GearPropertyGroup;
    }
    /**
     * Values that may be interpreted as {@link $GearProperty}.
     */
    export type $GearProperty_<T, V> = RegistryTypes.SilentgearProperty;
    export class $NumberProperty$Operation extends $Enum<$NumberProperty$Operation> {
        formatNumberValue(arg0: $NumberProperty, arg1: number, arg2: number, arg3: $FormatColorScheme_): $MutableComponent;
        static values(): $NumberProperty$Operation[];
        static valueOf(arg0: string): $NumberProperty$Operation;
        static ADD: $NumberProperty$Operation;
        static CODEC: $Codec<$NumberProperty$Operation>;
        static AVERAGE: $NumberProperty$Operation;
        static MAX: $NumberProperty$Operation;
        static MULTIPLY_BASE: $NumberProperty$Operation;
        static MULTIPLY_TOTAL: $NumberProperty$Operation;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $NumberProperty$Operation>;
    }
    /**
     * Values that may be interpreted as {@link $NumberProperty$Operation}.
     */
    export type $NumberProperty$Operation_ = "average" | "max" | "add" | "multiply_base" | "multiply_total";
    export class $GearProperty$FormatContext extends $Enum<$GearProperty$FormatContext> {
        static values(): $GearProperty$FormatContext[];
        static valueOf(arg0: string): $GearProperty$FormatContext;
        static PART: $GearProperty$FormatContext;
        static ANY: $GearProperty$FormatContext;
        static GEAR: $GearProperty$FormatContext;
        static MATERIAL: $GearProperty$FormatContext;
    }
    /**
     * Values that may be interpreted as {@link $GearProperty$FormatContext}.
     */
    export type $GearProperty$FormatContext_ = "gear" | "part" | "material" | "any";
    export class $NumberProperty extends $GearProperty<number, $NumberPropertyValue> {
        getDisplayFormat(): $NumberProperty$DisplayFormat;
        formatValue(arg0: $NumberPropertyValue, arg1: $GearProperty$FormatContext_, arg2: $FormatColorScheme_): $Component;
        isZero(arg0: number): boolean;
        isDisplayAsInt(): boolean;
        formatValueWithColor(arg0: $NumberPropertyValue, arg1: $GearProperty$FormatContext_, arg2: $FormatColorScheme_): $MutableComponent;
        applySynergy(arg0: $NumberPropertyValue, arg1: number): $NumberPropertyValue;
        getZeroValue(): number;
        static getWeightedAverage(arg0: $Collection_<$NumberPropertyValue>, arg1: $NumberProperty$Operation_): number;
        clampValue(arg0: number): number;
        getPreferredDecimalPlaces(arg0: $NumberPropertyValue): number;
        valueOf(arg0: number): $NumberPropertyValue;
        compute(arg0: $ComputeContext, arg1: number, arg2: boolean, arg3: $GearType_, arg4: $GearType_, arg5: $Collection_<$NumberPropertyValue>): number;
        static CODEC: $Codec<$NumberPropertyValue>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $NumberPropertyValue>;
        constructor(arg0: $NumberProperty$Operation_, arg1: $NumberProperty$DisplayFormat_, arg2: boolean, arg3: $GearProperty$Builder<number>);
        get displayFormat(): $NumberProperty$DisplayFormat;
        get displayAsInt(): boolean;
        get zeroValue(): number;
    }
    export interface $GearProperty<T, V> extends RegistryMarked<RegistryTypes.SilentgearPropertyTag, RegistryTypes.SilentgearProperty> {}
    export class $NumberPropertyValue extends $GearPropertyValue<number> {
        static average(arg0: number): $NumberPropertyValue;
        operation(): $NumberProperty$Operation;
        constructor(arg0: number, arg1: $NumberProperty$Operation_);
    }
    export class $GearPropertyMap$Immutable extends $GearPropertyMap {
        static CODEC: $Codec<$GearPropertyMap$Immutable>;
        static EMPTY: $GearPropertyMap;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $GearPropertyMap>;
        constructor(arg0: $GearPropertyMap);
    }
    export class $GearPropertyGroup {
    }
    export interface $GearPropertyGroup {
        getColor(): $Color;
        getName(): string;
        getProperties(): $Set<$GearProperty<never, never>>;
        get color(): $Color;
        get name(): string;
        get properties(): $Set<$GearProperty<never, never>>;
    }
    export class $GearProperty$Builder<T> {
        visible(arg0: boolean): $GearProperty$Builder<T>;
        affectedByGrades(arg0: boolean): $GearProperty$Builder<T>;
        affectedBySynergy(arg0: boolean): $GearProperty$Builder<T>;
        forMaterialsOnly(arg0: boolean): $GearProperty$Builder<T>;
        nameColor(arg0: $Color): $GearProperty$Builder<T>;
        group(arg0: $GearPropertyGroup): $GearProperty$Builder<T>;
        validate(): void;
        constructor(arg0: T, arg1: T);
        constructor(arg0: T);
        constructor(arg0: T, arg1: T, arg2: T, arg3: T);
    }
    export class $GearPropertyValue<T> {
        static createSimpleStreamCodec<T, V extends $GearPropertyValue<T>, B extends $FriendlyByteBuf>(arg0: $StreamCodec_<B, T>, arg1: $Function_<T, V>): $StreamCodec<B, V>;
        static createSimpleValueCodec<T, V extends $GearPropertyValue<T>>(arg0: $Codec<T>, arg1: $Function_<T, V>): $Codec<V>;
        value(): T;
        constructor(arg0: T);
    }
    export class $ComputeContext$Part extends $ComputeContext {
        part(): $PartInstance;
    }
    export class $ComputeContext$Material extends $ComputeContext {
        material(): $MaterialInstance;
    }
}
