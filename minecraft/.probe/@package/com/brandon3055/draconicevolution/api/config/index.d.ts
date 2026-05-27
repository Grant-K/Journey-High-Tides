import { $IntFunction, $Consumer_, $BiConsumer_, $Supplier_ } from "@package/java/util/function";
import { $PropertyProvider } from "@package/com/brandon3055/draconicevolution/api/capability";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Codec } from "@package/com/mojang/serialization";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $PropertyData } from "@package/com/brandon3055/draconicevolution/client/gui/modular/itemconfig";
import { $UUID, $UUID_ } from "@package/java/util";
import { $Runnable_, $Enum, $Object } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $StringRepresentable$EnumCodec, $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/com/brandon3055/draconicevolution/api/config" {
    export class $ConfigProperty$Type extends $Enum<$ConfigProperty$Type> implements $StringRepresentable {
        getSerializedName(): string;
        getCodec(): $Codec<$ConfigProperty>;
        getStreamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ConfigProperty>;
        static getSafe(arg0: number): $ConfigProperty$Type;
        static values(): $ConfigProperty$Type[];
        static valueOf(arg0: string): $ConfigProperty$Type;
        getRemappedEnumConstantName(): string;
        static CODEC: $StringRepresentable$EnumCodec<$ConfigProperty$Type>;
        static BY_ID: $IntFunction<$ConfigProperty$Type>;
        static DECIMAL: $ConfigProperty$Type;
        static BOOLEAN: $ConfigProperty$Type;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ConfigProperty$Type>;
        static INTEGER: $ConfigProperty$Type;
        get serializedName(): string;
        get codec(): $Codec<$ConfigProperty>;
        get streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ConfigProperty>;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ConfigProperty$Type}.
     */
    export type $ConfigProperty$Type_ = "boolean" | "integer" | "decimal";
    export class $ConfigProperty$DecimalFormatter extends $Enum<$ConfigProperty$DecimalFormatter> implements $StringRepresentable {
        getSerializedName(): string;
        static getSafe(arg0: number): $ConfigProperty$DecimalFormatter;
        static values(): $ConfigProperty$DecimalFormatter[];
        static valueOf(arg0: string): $ConfigProperty$DecimalFormatter;
        format(arg0: number): string;
        getRemappedEnumConstantName(): string;
        static PERCENT_2: $ConfigProperty$DecimalFormatter;
        static PLUS_PERCENT_0: $ConfigProperty$DecimalFormatter;
        static PLUS_PERCENT_1: $ConfigProperty$DecimalFormatter;
        static PLUS_PERCENT_2: $ConfigProperty$DecimalFormatter;
        static CODEC: $Codec<$ConfigProperty$DecimalFormatter>;
        static BY_ID: $IntFunction<$ConfigProperty$DecimalFormatter>;
        static PERCENT_0: $ConfigProperty$DecimalFormatter;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ConfigProperty$DecimalFormatter>;
        static PERCENT_1: $ConfigProperty$DecimalFormatter;
        static AOE_0: $ConfigProperty$DecimalFormatter;
        static AOE_1: $ConfigProperty$DecimalFormatter;
        static AOE_2: $ConfigProperty$DecimalFormatter;
        static RAW_1: $ConfigProperty$DecimalFormatter;
        static RAW_2: $ConfigProperty$DecimalFormatter;
        static RAW_0: $ConfigProperty$DecimalFormatter;
        static RAW_3: $ConfigProperty$DecimalFormatter;
        static RAW_4: $ConfigProperty$DecimalFormatter;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ConfigProperty$DecimalFormatter}.
     */
    export type $ConfigProperty$DecimalFormatter_ = "raw_0" | "raw_1" | "raw_2" | "raw_3" | "raw_4" | "percent_0" | "percent_1" | "percent_2" | "plus_percent_0" | "plus_percent_1" | "plus_percent_2" | "aoe_0" | "aoe_1" | "aoe_2";
    export class $ConfigProperty {
        getUniqueName(): $UUID;
        onValueChanged(arg0: $ItemStack_): void;
        getToolTip(): $Component;
        setProvider(arg0: $PropertyProvider): void;
        getDisplayName(): $Component;
        getProvider(): $PropertyProvider;
        setDisplayName(arg0: $Supplier_<$Component>): void;
        validateValue(): void;
        setToolTip(arg0: $Supplier_<$Component>): void;
        getDisplayValue(): $Component;
        generateUnique(): void;
        setShowOnHud(arg0: boolean): void;
        equalsWOValue(arg0: $Object): boolean;
        showOnHud(): boolean;
        loadData(arg0: $PropertyData, arg1: $ItemStack_): void;
        getName(): string;
        getType(): $ConfigProperty$Type;
        copy(): $ConfigProperty;
        static CODEC: $Codec<$ConfigProperty>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ConfigProperty>;
        constructor(arg0: string, arg1: boolean, arg2: ($UUID_) | undefined);
        constructor(arg0: string);
        constructor(arg0: string, arg1: $Component_);
        get uniqueName(): $UUID;
        get displayValue(): $Component;
        get name(): string;
        get type(): $ConfigProperty$Type;
    }
    export class $ConfigProperty$BooleanFormatter extends $Enum<$ConfigProperty$BooleanFormatter> implements $StringRepresentable {
        getSerializedName(): string;
        static getSafe(arg0: number): $ConfigProperty$BooleanFormatter;
        static values(): $ConfigProperty$BooleanFormatter[];
        static valueOf(arg0: string): $ConfigProperty$BooleanFormatter;
        format(arg0: boolean): $Component;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$ConfigProperty$BooleanFormatter>;
        static BY_ID: $IntFunction<$ConfigProperty$BooleanFormatter>;
        static YES_NO: $ConfigProperty$BooleanFormatter;
        static ENABLED_DISABLED: $ConfigProperty$BooleanFormatter;
        static TRUE_FALSE: $ConfigProperty$BooleanFormatter;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ConfigProperty$BooleanFormatter>;
        static ACTIVE_INACTIVE: $ConfigProperty$BooleanFormatter;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ConfigProperty$BooleanFormatter}.
     */
    export type $ConfigProperty$BooleanFormatter_ = "true_false" | "enabled_disabled" | "active_inactive" | "yes_no";
    export class $IntegerProperty extends $ConfigProperty {
        setFormatter(arg0: $ConfigProperty$IntegerFormatter_): $IntegerProperty;
        getFormatter(): $ConfigProperty$IntegerFormatter;
        setChangeListener(arg0: $Runnable_): void;
        setChangeListener(arg0: $Consumer_<$ItemStack>): void;
        setChangeListener(arg0: $BiConsumer_<$ItemStack, $IntegerProperty>): void;
        range(arg0: number, arg1: number): $IntegerProperty;
        getMax(): number;
        getMin(): number;
        min(arg0: number): $IntegerProperty;
        max(arg0: number): $IntegerProperty;
        getValue(): number;
        setValue(arg0: number): void;
        copy(): $IntegerProperty;
        static CODEC: $Codec<$IntegerProperty>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IntegerProperty>;
        constructor(arg0: string, arg1: number);
        constructor(arg0: string, arg1: $Component_, arg2: number);
    }
    export class $ConfigProperty$IntegerFormatter extends $Enum<$ConfigProperty$IntegerFormatter> implements $StringRepresentable {
        getSerializedName(): string;
        static getSafe(arg0: number): $ConfigProperty$IntegerFormatter;
        static values(): $ConfigProperty$IntegerFormatter[];
        static valueOf(arg0: string): $ConfigProperty$IntegerFormatter;
        format(arg0: number): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$ConfigProperty$IntegerFormatter>;
        static AOE: $ConfigProperty$IntegerFormatter;
        static BY_ID: $IntFunction<$ConfigProperty$IntegerFormatter>;
        static RAW: $ConfigProperty$IntegerFormatter;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ConfigProperty$IntegerFormatter>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ConfigProperty$IntegerFormatter}.
     */
    export type $ConfigProperty$IntegerFormatter_ = "raw" | "aoe";
    export class $BooleanProperty extends $ConfigProperty {
        setFormatter(arg0: $ConfigProperty$BooleanFormatter_): $BooleanProperty;
        getFormatter(): $ConfigProperty$BooleanFormatter;
        setChangeListener(arg0: $Runnable_): $BooleanProperty;
        setChangeListener(arg0: $Consumer_<$ItemStack>): $BooleanProperty;
        setChangeListener(arg0: $BiConsumer_<$ItemStack, $BooleanProperty>): $BooleanProperty;
        getValue(): boolean;
        setValue(arg0: boolean): void;
        copy(): $BooleanProperty;
        static CODEC: $Codec<$BooleanProperty>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BooleanProperty>;
        constructor(arg0: string, arg1: boolean);
        constructor(arg0: string, arg1: $Component_, arg2: boolean);
    }
    export class $DecimalProperty extends $ConfigProperty {
        setFormatter(arg0: $ConfigProperty$DecimalFormatter_): $DecimalProperty;
        getFormatter(): $ConfigProperty$DecimalFormatter;
        setChangeListener(arg0: $Runnable_): void;
        setChangeListener(arg0: $Consumer_<$ItemStack>): void;
        setChangeListener(arg0: $BiConsumer_<$ItemStack, $DecimalProperty>): void;
        range(arg0: number, arg1: number): $DecimalProperty;
        getMax(): number;
        getMin(): number;
        min(arg0: number): $DecimalProperty;
        max(arg0: number): $DecimalProperty;
        getValue(): number;
        setValue(arg0: number): void;
        copy(): $DecimalProperty;
        static CODEC: $Codec<$DecimalProperty>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $DecimalProperty>;
        constructor(arg0: string, arg1: number);
        constructor(arg0: string, arg1: $Component_, arg2: number);
    }
}
