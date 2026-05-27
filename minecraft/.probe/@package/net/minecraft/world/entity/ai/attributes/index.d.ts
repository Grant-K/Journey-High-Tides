import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $TooltipFlag } from "@package/net/minecraft/world/item";
import { $CompoundTag, $ListTag, $ListTag_, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $MutableComponent, $TextColor, $Component } from "@package/net/minecraft/network/chat";
import { $EntityType_, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Multimap } from "@package/com/google/common/collect";
import { $DefaultAttributeRegistryAccessor } from "@package/net/fabricmc/fabric/mixin/object/builder";
import { $Map, $Set, $Collection } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $AccessorRangedAttribute } from "@package/net/darkhax/attributefix/common/mixin";
import { $IntFunction, $Consumer_ } from "@package/java/util/function";
import { $Holder_, $Registry, $Holder } from "@package/net/minecraft/core";
import { $ChatFormatting } from "@package/net/minecraft";
import { $IAttributeExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Enum, $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/entity/ai/attributes" {
    export class $AttributeSupplier {
        hasModifier(arg0: $Holder_<$Attribute>, arg1: $ResourceLocation_): boolean;
        getBaseValue(arg0: $Holder_<$Attribute>): number;
        hasAttribute(arg0: $Holder_<$Attribute>): boolean;
        getModifierValue(arg0: $Holder_<$Attribute>, arg1: $ResourceLocation_): number;
        createInstance(arg0: $Consumer_<$AttributeInstance>, arg1: $Holder_<$Attribute>): $AttributeInstance;
        getValue(arg0: $Holder_<$Attribute>): number;
        static builder(): $AttributeSupplier$Builder;
        instances: $Map<$Holder<$Attribute>, $AttributeInstance>;
    }
    export class $DefaultAttributes implements $DefaultAttributeRegistryAccessor {
        static getSupplier(arg0: $EntityType_<$LivingEntity>): $AttributeSupplier;
        static getRegistry$fabric_object_builder_api_v1_$md$68cb88$0(): $Map<any, any>;
        static hasSupplier(arg0: $EntityType_<never>): boolean;
        static validate(): void;
        constructor();
        static get registry$fabric_object_builder_api_v1_$md$68cb88$0(): $Map<any, any>;
    }
    export class $AttributeModifier$Operation extends $Enum<$AttributeModifier$Operation> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $AttributeModifier$Operation[];
        static valueOf(arg0: string): $AttributeModifier$Operation;
        id(): number;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$AttributeModifier$Operation>;
        static ADD_MULTIPLIED_BASE: $AttributeModifier$Operation;
        static ADD_MULTIPLIED_TOTAL: $AttributeModifier$Operation;
        static BY_ID: $IntFunction<$AttributeModifier$Operation>;
        static ADD_VALUE: $AttributeModifier$Operation;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $AttributeModifier$Operation>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $AttributeModifier$Operation}.
     */
    export type $AttributeModifier$Operation_ = "add_value" | "add_multiplied_base" | "add_multiplied_total";
    export class $AttributeInstance {
        replaceFrom(arg0: $AttributeInstance): void;
        hasModifier(arg0: $ResourceLocation_): boolean;
        getModifier(arg0: $ResourceLocation_): $AttributeModifier;
        removeModifier(arg0: $AttributeModifier_): void;
        removeModifier(arg0: $ResourceLocation_): boolean;
        addTransientModifier(arg0: $AttributeModifier_): void;
        setDirty(): void;
        getBaseValue(): number;
        setBaseValue(arg0: number): void;
        addPermanentModifier(arg0: $AttributeModifier_): void;
        addOrUpdateTransientModifier(arg0: $AttributeModifier_): void;
        addOrReplacePermanentModifier(arg0: $AttributeModifier_): void;
        removeModifiers(): void;
        getAttribute(): $Holder<$Attribute>;
        getModifiers(): $Set<$AttributeModifier>;
        getModifiers(arg0: $AttributeModifier$Operation_): $Map<$ResourceLocation, $AttributeModifier>;
        load(arg0: $CompoundTag_): void;
        getValue(): number;
        save(): $CompoundTag;
        static ID_FIELD: string;
        constructor(arg0: $Holder_<$Attribute>, arg1: $Consumer_<$AttributeInstance>);
        get attribute(): $Holder<$Attribute>;
        get value(): number;
    }
    export class $Attribute implements $IAttributeExtension {
        getStyle(arg0: boolean): $ChatFormatting;
        getDescriptionId(): string;
        isClientSyncable(): boolean;
        sanitizeValue(arg0: number): number;
        getMergedStyle(arg0: boolean): $TextColor;
        setSyncable(arg0: boolean): $Attribute;
        setSentiment(arg0: $Attribute$Sentiment_): $Attribute;
        getDefaultValue(): number;
        toValueComponent(arg0: $AttributeModifier$Operation_, arg1: number, arg2: $TooltipFlag): $MutableComponent;
        getDebugInfo(arg0: $AttributeModifier_, arg1: $TooltipFlag): $Component;
        toComponent(arg0: $AttributeModifier_, arg1: $TooltipFlag): $MutableComponent;
        getBaseId(): $ResourceLocation;
        toBaseComponent(arg0: number, arg1: number, arg2: boolean, arg3: $TooltipFlag): $MutableComponent;
        static CODEC: $Codec<$Holder<$Attribute>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$Attribute>>;
        get descriptionId(): string;
        get clientSyncable(): boolean;
        set syncable(value: boolean);
        set sentiment(value: $Attribute$Sentiment_);
        get defaultValue(): number;
        get baseId(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $Attribute}.
     */
    export type $Attribute_ = RegistryTypes.Attribute;
    export class $AttributeSupplier$Builder {
        hasAttribute(arg0: $Holder_<$Attribute>): boolean;
        build(): $AttributeSupplier;
        add(arg0: $Holder_<$Attribute>, arg1: number): $AttributeSupplier$Builder;
        add(arg0: $Holder_<$Attribute>): $AttributeSupplier$Builder;
        combine(arg0: $AttributeSupplier$Builder): void;
        constructor();
        constructor(arg0: $AttributeSupplier);
    }
    export class $Attributes {
        static bootstrap(arg0: $Registry<$Attribute_>): $Holder<$Attribute>;
        static SUBMERGED_MINING_SPEED: $Holder<$Attribute>;
        static FALL_DAMAGE_MULTIPLIER: $Holder<$Attribute>;
        static MOVEMENT_EFFICIENCY: $Holder<$Attribute>;
        static OXYGEN_BONUS: $Holder<$Attribute>;
        static LUCK: $Holder<$Attribute>;
        static WATER_MOVEMENT_EFFICIENCY: $Holder<$Attribute>;
        static BLOCK_INTERACTION_RANGE: $Holder<$Attribute>;
        static ATTACK_DAMAGE: $Holder<$Attribute>;
        static MAX_ABSORPTION: $Holder<$Attribute>;
        static SAFE_FALL_DISTANCE: $Holder<$Attribute>;
        static JUMP_STRENGTH: $Holder<$Attribute>;
        static SCALE: $Holder<$Attribute>;
        static ENTITY_INTERACTION_RANGE: $Holder<$Attribute>;
        static MAX_HEALTH: $Holder<$Attribute>;
        static ATTACK_SPEED: $Holder<$Attribute>;
        static ARMOR: $Holder<$Attribute>;
        static EXPLOSION_KNOCKBACK_RESISTANCE: $Holder<$Attribute>;
        static GRAVITY: $Holder<$Attribute>;
        static MOVEMENT_SPEED: $Holder<$Attribute>;
        static SNEAKING_SPEED: $Holder<$Attribute>;
        static STEP_HEIGHT: $Holder<$Attribute>;
        static ARMOR_TOUGHNESS: $Holder<$Attribute>;
        static FOLLOW_RANGE: $Holder<$Attribute>;
        static SPAWN_REINFORCEMENTS_CHANCE: $Holder<$Attribute>;
        static MINING_EFFICIENCY: $Holder<$Attribute>;
        static BURNING_TIME: $Holder<$Attribute>;
        static FLYING_SPEED: $Holder<$Attribute>;
        static SWEEPING_DAMAGE_RATIO: $Holder<$Attribute>;
        static KNOCKBACK_RESISTANCE: $Holder<$Attribute>;
        static BLOCK_BREAK_SPEED: $Holder<$Attribute>;
        static ATTACK_KNOCKBACK: $Holder<$Attribute>;
        constructor();
    }
    export class $AttributeMap {
        hasModifier(arg0: $Holder_<$Attribute>, arg1: $ResourceLocation_): boolean;
        removeAttributeModifiers(arg0: $Multimap<$Holder_<$Attribute>, $AttributeModifier_>): void;
        getAttributesToUpdate(): $Set<$AttributeInstance>;
        getBaseValue(arg0: $Holder_<$Attribute>): number;
        addTransientAttributeModifiers(arg0: $Multimap<$Holder_<$Attribute>, $AttributeModifier_>): void;
        assignBaseValues(arg0: $AttributeMap): void;
        hasAttribute(arg0: $Holder_<$Attribute>): boolean;
        getSyncableAttributes(): $Collection<$AttributeInstance>;
        getAttributesToSync(): $Set<$AttributeInstance>;
        getModifierValue(arg0: $Holder_<$Attribute>, arg1: $ResourceLocation_): number;
        assignAllValues(arg0: $AttributeMap): void;
        load(arg0: $ListTag_): void;
        getValue(arg0: $Holder_<$Attribute>): number;
        getInstance(arg0: $Holder_<$Attribute>): $AttributeInstance;
        save(): $ListTag;
        constructor(arg0: $AttributeSupplier);
        get attributesToUpdate(): $Set<$AttributeInstance>;
        get syncableAttributes(): $Collection<$AttributeInstance>;
        get attributesToSync(): $Set<$AttributeInstance>;
    }
    export class $AttributeModifier extends $Record {
        amount(): number;
        is(arg0: $ResourceLocation_): boolean;
        operation(): $AttributeModifier$Operation;
        static load(arg0: $CompoundTag_): $AttributeModifier;
        id(): $ResourceLocation;
        save(): $CompoundTag;
        static CODEC: $Codec<$AttributeModifier>;
        static MAP_CODEC: $MapCodec<$AttributeModifier>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $AttributeModifier>;
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: $AttributeModifier$Operation_);
    }
    /**
     * Values that may be interpreted as {@link $AttributeModifier}.
     */
    export type $AttributeModifier_ = { id?: $ResourceLocation_, amount?: number, operation?: $AttributeModifier$Operation_,  } | [id?: $ResourceLocation_, amount?: number, operation?: $AttributeModifier$Operation_, ];
    export class $Attribute$Sentiment extends $Enum<$Attribute$Sentiment> {
        getStyle(arg0: boolean): $ChatFormatting;
        static values(): $Attribute$Sentiment[];
        static valueOf(arg0: string): $Attribute$Sentiment;
        static POSITIVE: $Attribute$Sentiment;
        static NEGATIVE: $Attribute$Sentiment;
        static NEUTRAL: $Attribute$Sentiment;
    }
    /**
     * Values that may be interpreted as {@link $Attribute$Sentiment}.
     */
    export type $Attribute$Sentiment_ = "positive" | "neutral" | "negative";
    export class $RangedAttribute extends $Attribute implements $AccessorRangedAttribute {
        getMinValue(): number;
        getMaxValue(): number;
        attributefix$setMinValue(arg0: number): void;
        attributefix$setMaxValue(arg0: number): void;
        static CODEC: $Codec<$Holder<$Attribute>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$Attribute>>;
        constructor(arg0: string, arg1: number, arg2: number, arg3: number);
        get minValue(): number;
        get maxValue(): number;
    }
    export interface $Attribute extends RegistryMarked<RegistryTypes.AttributeTag, RegistryTypes.Attribute> {}
}
