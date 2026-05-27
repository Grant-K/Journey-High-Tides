import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $EquipmentSlot_, $EquipmentSlot, $LivingEntity, $Entity, $EquipmentSlotGroup, $EquipmentSlotGroup_ } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $AttributeModifier, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map, $Set, $Iterator, $List, $Collection_, $List_ } from "@package/java/util";
import { $StringRepresentable, $RandomSource, $Unit_, $Unit } from "@package/net/minecraft/util";
import { $Consumer_, $Predicate_, $UnaryOperator, $Consumer, $BiConsumer_, $UnaryOperator_ } from "@package/java/util/function";
import { $DifficultyInstance } from "@package/net/minecraft/world";
import { $HolderSet_, $RegistryAccess, $Registry, $HolderLookup$Provider, $Holder_, $HolderSet, $Holder } from "@package/net/minecraft/core";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $ObjectIterator, $Object2IntMap$Entry } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $WeightedEntry$IntrusiveBase } from "@package/net/minecraft/util/random";
import { $DataComponentType, $DataComponentType_, $DataComponentMap, $DataComponentMap_, $DataComponentMap$Builder } from "@package/net/minecraft/core/component";
import { $Enum, $Record } from "@package/java/lang";
import { $LootContext } from "@package/net/minecraft/world/level/storage/loot";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Item, $CrossbowItem$ChargingSounds, $Item$TooltipContext, $TooltipFlag, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $TooltipProvider } from "@package/net/minecraft/world/item/component";
import { $AbstractArrow } from "@package/net/minecraft/world/entity/projectile";
import { $ContextProvider } from "@package/net/darkhax/enchdesc/common/api";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_, $ResourceKey, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $EnchantmentProvider } from "@package/net/minecraft/world/item/enchantment/providers";
import { $LootItemCondition$Builder_, $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $EnchantmentBuilderAccessor } from "@package/net/fabricmc/fabric/mixin/item";
import { $EnchantmentLocationBasedEffect, $EnchantmentValueEffect, $DamageImmunity, $EnchantmentAttributeEffect, $EnchantmentEntityEffect, $EnchantmentAttributeEffect_ } from "@package/net/minecraft/world/item/enchantment/effects";
import { $MutableFloat } from "@package/org/apache/commons/lang3/mutable";
import { $LootContextParamSet } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
export * as providers from "@package/net/minecraft/world/item/enchantment/providers";
export * as effects from "@package/net/minecraft/world/item/enchantment/effects";

declare module "@package/net/minecraft/world/item/enchantment" {
    export class $EnchantmentHelper {
        static modifyArmorEffectiveness(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $Entity, arg3: $DamageSource_, arg4: number): number;
        static filterCompatibleEnchantments(arg0: $List_<$EnchantmentInstance>, arg1: $EnchantmentInstance): void;
        static tickEffects(arg0: $ServerLevel, arg1: $LivingEntity): void;
        static runLocationChangedEffects(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $LivingEntity, arg3: $EquipmentSlot_): void;
        static runLocationChangedEffects(arg0: $ServerLevel, arg1: $LivingEntity): void;
        static processMobExperience(arg0: $ServerLevel, arg1: $Entity, arg2: $Entity, arg3: number): number;
        static doPostAttackEffects(arg0: $ServerLevel, arg1: $Entity, arg2: $DamageSource_): void;
        static modifyKnockback(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $Entity, arg3: $DamageSource_, arg4: number): number;
        static getDamageProtection(arg0: $ServerLevel, arg1: $LivingEntity, arg2: $DamageSource_): number;
        static forEachModifier(arg0: $ItemStack_, arg1: $EquipmentSlotGroup_, arg2: $BiConsumer_<$Holder<$Attribute>, $AttributeModifier>): void;
        static forEachModifier(arg0: $ItemStack_, arg1: $EquipmentSlot_, arg2: $BiConsumer_<$Holder<$Attribute>, $AttributeModifier>): void;
        static isImmuneToDamage(arg0: $ServerLevel, arg1: $LivingEntity, arg2: $DamageSource_): boolean;
        static stopLocationBasedEffects(arg0: $ItemStack_, arg1: $LivingEntity, arg2: $EquipmentSlot_): void;
        static stopLocationBasedEffects(arg0: $LivingEntity): void;
        static getEnchantmentLevel(arg0: $Holder_<$Enchantment>, arg1: $LivingEntity): number;
        static getAvailableEnchantmentResults(arg0: number, arg1: $ItemStack_, arg2: $Stream<$Holder_<$Enchantment>>): $List<$EnchantmentInstance>;
        static processBlockExperience(arg0: $ServerLevel, arg1: $ItemStack_, arg2: number): number;
        static hasTag(arg0: $ItemStack_, arg1: $TagKey_<$Enchantment>): boolean;
        static modifyDamage(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $Entity, arg3: $DamageSource_, arg4: number): number;
        static processEquipmentDropChance(arg0: $ServerLevel, arg1: $LivingEntity, arg2: $DamageSource_, arg3: number): number;
        static enchantItemFromProvider(arg0: $ItemStack_, arg1: $RegistryAccess, arg2: $ResourceKey_<$EnchantmentProvider>, arg3: $DifficultyInstance, arg4: $RandomSource): void;
        static getPiercingCount(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $ItemStack_): number;
        static onProjectileSpawned(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $AbstractArrow, arg3: $Consumer_<$Item>): void;
        static doPostAttackEffectsWithItemSource(arg0: $ServerLevel, arg1: $Entity, arg2: $DamageSource_, arg3: $ItemStack_): void;
        static onHitBlock(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $LivingEntity, arg3: $Entity, arg4: $EquipmentSlot_, arg5: $Vec3_, arg6: $BlockState_, arg7: $Consumer_<$Item>): void;
        static getEnchantmentsForCrafting(arg0: $ItemStack_): $ItemEnchantments;
        static selectEnchantment(arg0: $RandomSource, arg1: $ItemStack_, arg2: number, arg3: $Stream<$Holder_<$Enchantment>>): $List<$EnchantmentInstance>;
        static getEnchantmentCost(arg0: $RandomSource, arg1: number, arg2: number, arg3: $ItemStack_): number;
        static canStoreEnchantments(arg0: $ItemStack_): boolean;
        static setEnchantments(arg0: $ItemStack_, arg1: $ItemEnchantments_): void;
        static processDurabilityChange(arg0: $ServerLevel, arg1: $ItemStack_, arg2: number): number;
        static updateEnchantments(arg0: $ItemStack_, arg1: $Consumer_<$ItemEnchantments$Mutable>): $ItemEnchantments;
        static hasAnyEnchantments(arg0: $ItemStack_): boolean;
        static processProjectileSpread(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $Entity, arg3: number): number;
        static processAmmoUse(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $ItemStack_, arg3: number): number;
        static processProjectileCount(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $Entity, arg3: number): number;
        static getFishingTimeReduction(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $Entity): number;
        static getFishingLuckBonus(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $Entity): number;
        static modifyFallBasedDamage(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $Entity, arg3: $DamageSource_, arg4: number): number;
        static getTridentSpinAttackStrength(arg0: $ItemStack_, arg1: $LivingEntity): number;
        static pickHighestLevel<T>(arg0: $ItemStack_, arg1: $DataComponentType_<$List_<T>>): (T) | undefined;
        static modifyCrossbowChargingTime(arg0: $ItemStack_, arg1: $LivingEntity, arg2: number): number;
        static modifyDurabilityToRepairFromXp(arg0: $ServerLevel, arg1: $ItemStack_, arg2: number): number;
        static getRandomItemWith(arg0: $DataComponentType_<never>, arg1: $LivingEntity, arg2: $Predicate_<$ItemStack>): ($EnchantedItemInUse) | undefined;
        static getTridentReturnToOwnerAcceleration(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $Entity): number;
        static enchantItem(arg0: $RandomSource, arg1: $ItemStack_, arg2: number, arg3: $Stream<$Holder_<$Enchantment>>): $ItemStack;
        static enchantItem(arg0: $RandomSource, arg1: $ItemStack_, arg2: number, arg3: $RegistryAccess, arg4: ($HolderSet_<$Enchantment>) | undefined): $ItemStack;
        /**
         * @deprecated
         */
        static getItemEnchantmentLevel(arg0: $Holder_<$Enchantment>, arg1: $ItemStack_): number;
        static runIterationOnEquipment(arg0: $LivingEntity, arg1: $EnchantmentHelper$EnchantmentInSlotVisitor_): void;
        static has(arg0: $ItemStack_, arg1: $DataComponentType_<never>): boolean;
        static getHighestLevel<T>(arg0: $ItemStack_, arg1: $DataComponentType_<T>): $Pair<T, number>;
        static isEnchantmentCompatible(arg0: $Collection_<$Holder_<$Enchantment>>, arg1: $Holder_<$Enchantment>): boolean;
        static getTagEnchantmentLevel(arg0: $Holder_<$Enchantment>, arg1: $ItemStack_): number;
        static runIterationOnItem(arg0: $ItemStack_, arg1: $EquipmentSlot_, arg2: $LivingEntity, arg3: $EnchantmentHelper$EnchantmentInSlotVisitor_): void;
        static runIterationOnItem(arg0: $ItemStack_, arg1: $EnchantmentHelper$EnchantmentVisitor_): void;
        static getComponentType(arg0: $ItemStack_): $DataComponentType<$ItemEnchantments>;
        constructor();
    }
    export class $LevelBasedValue$LevelsSquared extends $Record implements $LevelBasedValue {
        codec(): $MapCodec<$LevelBasedValue$LevelsSquared>;
        calculate(arg0: number): number;
        added(): number;
        static CODEC: $MapCodec<$LevelBasedValue$LevelsSquared>;
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $LevelBasedValue$LevelsSquared}.
     */
    export type $LevelBasedValue$LevelsSquared_ = { added?: number,  } | [added?: number, ];
    export class $Enchantment$Builder implements $EnchantmentBuilderAccessor {
        withCustomName(arg0: $UnaryOperator_<$MutableComponent>): $Enchantment$Builder;
        exclusiveWith(arg0: $HolderSet_<$Enchantment>): $Enchantment$Builder;
        withEffect(arg0: $DataComponentType_<$Unit_>): $Enchantment$Builder;
        withEffect<E>(arg0: $DataComponentType_<$List_<$ConditionalEffect_<E>>>, arg1: E): $Enchantment$Builder;
        withEffect<E>(arg0: $DataComponentType_<$List_<$ConditionalEffect_<E>>>, arg1: E, arg2: $LootItemCondition$Builder_): $Enchantment$Builder;
        withEffect<E>(arg0: $DataComponentType_<$List_<$TargetedConditionalEffect_<E>>>, arg1: $EnchantmentTarget_, arg2: $EnchantmentTarget_, arg3: E): $Enchantment$Builder;
        withEffect(arg0: $DataComponentType_<$List_<$EnchantmentAttributeEffect_>>, arg1: $EnchantmentAttributeEffect_): $Enchantment$Builder;
        withEffect<E>(arg0: $DataComponentType_<$List_<$TargetedConditionalEffect_<E>>>, arg1: $EnchantmentTarget_, arg2: $EnchantmentTarget_, arg3: E, arg4: $LootItemCondition$Builder_): $Enchantment$Builder;
        withSpecialEffect<E>(arg0: $DataComponentType_<E>, arg1: E): $Enchantment$Builder;
        build(arg0: $ResourceLocation_): $Enchantment;
        getExclusiveSet(): $HolderSet<$Enchantment>;
        invokeGetEffectsList<E>(arg0: $DataComponentType_<$List_<E>>): $List<E>;
        getEffectMap(): $DataComponentMap$Builder;
        getDefinition(): $Enchantment$EnchantmentDefinition;
        effectLists: $Map<$DataComponentType<never>, $List<never>>;
        effectMapBuilder: $DataComponentMap$Builder;
        exclusiveSet: $HolderSet<$Enchantment>;
        nameFactory: $UnaryOperator<$MutableComponent>;
        definition: $Enchantment$EnchantmentDefinition;
        constructor(arg0: $Enchantment$EnchantmentDefinition_);
        get effectMap(): $DataComponentMap$Builder;
    }
    export class $EnchantedItemInUse extends $Record {
        itemStack(): $ItemStack;
        onBreak(): $Consumer<$Item>;
        inSlot(): $EquipmentSlot;
        owner(): $LivingEntity;
        constructor(arg0: $ItemStack_, arg1: $EquipmentSlot_, arg2: $LivingEntity);
        constructor(arg0: $ItemStack_, arg1: $EquipmentSlot_, arg2: $LivingEntity, arg3: $Consumer_<$Item>);
    }
    /**
     * Values that may be interpreted as {@link $EnchantedItemInUse}.
     */
    export type $EnchantedItemInUse_ = { owner?: $LivingEntity, inSlot?: $EquipmentSlot_, itemStack?: $ItemStack_, onBreak?: $Consumer_<$Item>,  } | [owner?: $LivingEntity, inSlot?: $EquipmentSlot_, itemStack?: $ItemStack_, onBreak?: $Consumer_<$Item>, ];
    export class $EnchantmentInstance extends $WeightedEntry$IntrusiveBase {
        level: number;
        enchantment: $Holder<$Enchantment>;
        constructor(arg0: $Holder_<$Enchantment>, arg1: number);
    }
    export class $LevelBasedValue$Constant extends $Record implements $LevelBasedValue {
        codec(): $MapCodec<$LevelBasedValue$Constant>;
        calculate(arg0: number): number;
        value(): number;
        static CODEC: $Codec<$LevelBasedValue$Constant>;
        static TYPED_CODEC: $MapCodec<$LevelBasedValue$Constant>;
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $LevelBasedValue$Constant}.
     */
    export type $LevelBasedValue$Constant_ = { value?: number,  } | [value?: number, ];
    export class $LevelBasedValue$Fraction extends $Record implements $LevelBasedValue {
        codec(): $MapCodec<$LevelBasedValue$Fraction>;
        calculate(arg0: number): number;
        numerator(): $LevelBasedValue;
        denominator(): $LevelBasedValue;
        static CODEC: $MapCodec<$LevelBasedValue$Fraction>;
        constructor(arg0: $LevelBasedValue, arg1: $LevelBasedValue);
    }
    /**
     * Values that may be interpreted as {@link $LevelBasedValue$Fraction}.
     */
    export type $LevelBasedValue$Fraction_ = { numerator?: $LevelBasedValue, denominator?: $LevelBasedValue,  } | [numerator?: $LevelBasedValue, denominator?: $LevelBasedValue, ];
    export class $LevelBasedValue$Linear extends $Record implements $LevelBasedValue {
        codec(): $MapCodec<$LevelBasedValue$Linear>;
        calculate(arg0: number): number;
        perLevelAboveFirst(): number;
        base(): number;
        static CODEC: $MapCodec<$LevelBasedValue$Linear>;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $LevelBasedValue$Linear}.
     */
    export type $LevelBasedValue$Linear_ = { base?: number, perLevelAboveFirst?: number,  } | [base?: number, perLevelAboveFirst?: number, ];
    export class $Enchantment$Cost extends $Record {
        calculate(arg0: number): number;
        perLevelAboveFirst(): number;
        base(): number;
        static CODEC: $Codec<$Enchantment$Cost>;
        constructor(base: number, perLevelAboveFirst: number);
    }
    /**
     * Values that may be interpreted as {@link $Enchantment$Cost}.
     */
    export type $Enchantment$Cost_ = { base?: number, perLevelAboveFirst?: number,  } | [base?: number, perLevelAboveFirst?: number, ];
    export class $Enchantment$EnchantmentDefinition extends $Record {
        primaryItems(): ($HolderSet<$Item>) | undefined;
        anvilCost(): number;
        supportedItems(): $HolderSet<$Item>;
        minCost(): $Enchantment$Cost;
        maxCost(): $Enchantment$Cost;
        slots(): $List<$EquipmentSlotGroup>;
        maxLevel(): number;
        weight(): number;
        static CODEC: $MapCodec<$Enchantment$EnchantmentDefinition>;
        constructor(supportedItems: $HolderSet_<$Item>, primaryItems: ($HolderSet_<$Item>) | undefined, weight: number, maxLevel: number, minCost: $Enchantment$Cost_, maxCost: $Enchantment$Cost_, anvilCost: number, slots: $List_<$EquipmentSlotGroup_>);
    }
    /**
     * Values that may be interpreted as {@link $Enchantment$EnchantmentDefinition}.
     */
    export type $Enchantment$EnchantmentDefinition_ = { maxCost?: $Enchantment$Cost_, supportedItems?: $HolderSet_<$Item>, slots?: $List_<$EquipmentSlotGroup_>, weight?: number, anvilCost?: number, primaryItems?: ($HolderSet_<$Item>) | undefined, minCost?: $Enchantment$Cost_, maxLevel?: number,  } | [maxCost?: $Enchantment$Cost_, supportedItems?: $HolderSet_<$Item>, slots?: $List_<$EquipmentSlotGroup_>, weight?: number, anvilCost?: number, primaryItems?: ($HolderSet_<$Item>) | undefined, minCost?: $Enchantment$Cost_, maxLevel?: number, ];
    export class $EnchantmentHelper$EnchantmentVisitor {
    }
    export interface $EnchantmentHelper$EnchantmentVisitor {
        accept(arg0: $Holder_<$Enchantment>, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $EnchantmentHelper$EnchantmentVisitor}.
     */
    export type $EnchantmentHelper$EnchantmentVisitor_ = ((arg0: $Holder<$Enchantment>, arg1: number) => void);
    export class $LevelBasedValue$Lookup extends $Record implements $LevelBasedValue {
        codec(): $MapCodec<$LevelBasedValue$Lookup>;
        calculate(arg0: number): number;
        fallback(): $LevelBasedValue;
        values(): $List<number>;
        static CODEC: $MapCodec<$LevelBasedValue$Lookup>;
        constructor(arg0: $List_<number>, arg1: $LevelBasedValue);
    }
    /**
     * Values that may be interpreted as {@link $LevelBasedValue$Lookup}.
     */
    export type $LevelBasedValue$Lookup_ = { values?: $List_<number>, fallback?: $LevelBasedValue,  } | [values?: $List_<number>, fallback?: $LevelBasedValue, ];
    export class $ItemEnchantments$Mutable {
        upgrade(arg0: $Holder_<$Enchantment>, arg1: number): void;
        getLevel(arg0: $Holder_<$Enchantment>): number;
        removeIf(arg0: $Predicate_<$Holder<$Enchantment>>): void;
        toImmutable(): $ItemEnchantments;
        set(arg0: $Holder_<$Enchantment>, arg1: number): void;
        keySet(): $Set<$Holder<$Enchantment>>;
        constructor(arg0: $ItemEnchantments_);
    }
    export class $EnchantmentTarget extends $Enum<$EnchantmentTarget> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $EnchantmentTarget[];
        static valueOf(arg0: string): $EnchantmentTarget;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$EnchantmentTarget>;
        static ATTACKER: $EnchantmentTarget;
        static VICTIM: $EnchantmentTarget;
        static DAMAGING_ENTITY: $EnchantmentTarget;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $EnchantmentTarget}.
     */
    export type $EnchantmentTarget_ = "attacker" | "damaging_entity" | "victim";
    export class $LevelBasedValue {
        static perLevel(arg0: number): $LevelBasedValue$Linear;
        static perLevel(arg0: number, arg1: number): $LevelBasedValue$Linear;
        static bootstrap(arg0: $Registry<$MapCodec_<$LevelBasedValue>>): $MapCodec<$LevelBasedValue>;
        static lookup(arg0: $List_<number>, arg1: $LevelBasedValue): $LevelBasedValue$Lookup;
        static constant(arg0: number): $LevelBasedValue$Constant;
        static DISPATCH_CODEC: $Codec<$LevelBasedValue>;
        static CODEC: $Codec<$LevelBasedValue>;
    }
    export interface $LevelBasedValue {
        codec(): $MapCodec<$LevelBasedValue>;
        calculate(arg0: number): number;
    }
    export class $TargetedConditionalEffect<T> extends $Record {
        static codec<S>(arg0: $Codec<S>, arg1: $LootContextParamSet): $Codec<$TargetedConditionalEffect<S>>;
        effect(): T;
        static equipmentDropsCodec<S>(arg0: $Codec<S>, arg1: $LootContextParamSet): $Codec<$TargetedConditionalEffect<S>>;
        affected(): $EnchantmentTarget;
        enchanted(): $EnchantmentTarget;
        requirements(): ($LootItemCondition) | undefined;
        matches(arg0: $LootContext): boolean;
        constructor(arg0: $EnchantmentTarget_, arg1: $EnchantmentTarget_, arg2: T, arg3: ($LootItemCondition) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $TargetedConditionalEffect}.
     */
    export type $TargetedConditionalEffect_<T> = { enchanted?: $EnchantmentTarget_, effect?: any, affected?: $EnchantmentTarget_, requirements?: ($LootItemCondition) | undefined,  } | [enchanted?: $EnchantmentTarget_, effect?: any, affected?: $EnchantmentTarget_, requirements?: ($LootItemCondition) | undefined, ];
    export class $ConditionalEffect<T> extends $Record {
        static codec<T>(arg0: $Codec<T>, arg1: $LootContextParamSet): $Codec<$ConditionalEffect<T>>;
        effect(): T;
        requirements(): ($LootItemCondition) | undefined;
        static conditionCodec(arg0: $LootContextParamSet): $Codec<$LootItemCondition>;
        matches(arg0: $LootContext): boolean;
        constructor(arg0: T, arg1: ($LootItemCondition) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ConditionalEffect}.
     */
    export type $ConditionalEffect_<T> = { effect?: any, requirements?: ($LootItemCondition) | undefined,  } | [effect?: any, requirements?: ($LootItemCondition) | undefined, ];
    export class $LevelBasedValue$Clamped extends $Record implements $LevelBasedValue {
        codec(): $MapCodec<$LevelBasedValue$Clamped>;
        calculate(arg0: number): number;
        value(): $LevelBasedValue;
        min(): number;
        max(): number;
        static CODEC: $MapCodec<$LevelBasedValue$Clamped>;
        constructor(arg0: $LevelBasedValue, arg1: number, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $LevelBasedValue$Clamped}.
     */
    export type $LevelBasedValue$Clamped_ = { value?: $LevelBasedValue, max?: number, min?: number,  } | [value?: $LevelBasedValue, max?: number, min?: number, ];
    export class $EnchantmentHelper$EnchantmentInSlotVisitor {
    }
    export interface $EnchantmentHelper$EnchantmentInSlotVisitor {
        accept(arg0: $Holder_<$Enchantment>, arg1: number, arg2: $EnchantedItemInUse_): void;
    }
    /**
     * Values that may be interpreted as {@link $EnchantmentHelper$EnchantmentInSlotVisitor}.
     */
    export type $EnchantmentHelper$EnchantmentInSlotVisitor_ = ((arg0: $Holder<$Enchantment>, arg1: number, arg2: $EnchantedItemInUse) => void);
    export interface $Enchantment extends RegistryMarked<RegistryTypes.EnchantmentTag, RegistryTypes.Enchantment> {}
    export class $ItemEnchantments implements $TooltipProvider, $ContextProvider {
        addToTooltip(arg0: $Item$TooltipContext, arg1: $Consumer_<$Component>, arg2: $TooltipFlag): void;
        withTooltip(arg0: boolean): $ItemEnchantments;
        handler$lpa000$enchdesc$sortedEnchantment(arg0: $Item$TooltipContext, arg1: $Consumer_<any>, arg2: $TooltipFlag, arg3: $CallbackInfo, arg4: $HolderLookup$Provider, arg5: $HolderSet_<any>, arg6: $Iterator<any>, arg7: $Holder_<any>, arg8: number): void;
        handler$lpa000$enchdesc$unsortedEnchantment(arg0: $Item$TooltipContext, arg1: $Consumer_<any>, arg2: $TooltipFlag, arg3: $CallbackInfo, arg4: $HolderLookup$Provider, arg5: $HolderSet_<any>, arg6: $ObjectIterator<any>, arg7: $Object2IntMap$Entry<any>, arg8: $Holder_<any>): void;
        enchdesc$getStack(): $ItemStack;
        enchdesc$setStack(arg0: $ItemStack_): void;
        getLevel(arg0: $Holder_<$Enchantment>): number;
        size(): number;
        isEmpty(): boolean;
        entrySet(): $Set<$Object2IntMap$Entry<$Holder<$Enchantment>>>;
        keySet(): $Set<$Holder<$Enchantment>>;
        static CODEC: $Codec<$ItemEnchantments>;
        showInTooltip: boolean;
        static EMPTY: $ItemEnchantments;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemEnchantments>;
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ItemEnchantments}.
     */
    export type $ItemEnchantments_ = {[key in RegistryTypes.Enchantment]?: number};
    export class $Enchantment extends $Record {
        effects(): $DataComponentMap;
        runLocationChangedEffects(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $LivingEntity): void;
        static applyEffects<T>(arg0: $List_<$ConditionalEffect_<T>>, arg1: $LootContext, arg2: $Consumer_<T>): void;
        modifyKnockback(arg0: $ServerLevel, arg1: number, arg2: $ItemStack_, arg3: $Entity, arg4: $DamageSource_, arg5: $MutableFloat): void;
        isImmuneToDamage(arg0: $ServerLevel, arg1: number, arg2: $Entity, arg3: $DamageSource_): boolean;
        stopLocationBasedEffects(arg0: number, arg1: $EnchantedItemInUse_, arg2: $LivingEntity): void;
        getEffects<T>(arg0: $DataComponentType_<$List_<T>>): $List<T>;
        static locationContext(arg0: $ServerLevel, arg1: number, arg2: $Entity, arg3: boolean): $LootContext;
        static enchantment(arg0: $Enchantment$EnchantmentDefinition_): $Enchantment$Builder;
        /**
         * @deprecated
         */
        isSupportedItem(arg0: $ItemStack_): boolean;
        /**
         * @deprecated
         */
        canEnchant(arg0: $ItemStack_): boolean;
        modifyDamage(arg0: $ServerLevel, arg1: number, arg2: $ItemStack_, arg3: $Entity, arg4: $DamageSource_, arg5: $MutableFloat): void;
        static itemContext(arg0: $ServerLevel, arg1: number, arg2: $ItemStack_): $LootContext;
        onProjectileSpawned(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity): void;
        onHitBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: $BlockState_): void;
        doPostAttack(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $EnchantmentTarget_, arg4: $Entity, arg5: $DamageSource_): void;
        static doPostAttack(arg0: $TargetedConditionalEffect_<$EnchantmentEntityEffect>, arg1: $ServerLevel, arg2: number, arg3: $EnchantedItemInUse_, arg4: $Entity, arg5: $DamageSource_): void;
        static areCompatible(arg0: $Holder_<$Enchantment>, arg1: $Holder_<$Enchantment>): boolean;
        getAnvilCost(): number;
        modifyFallBasedDamage(arg0: $ServerLevel, arg1: number, arg2: $ItemStack_, arg3: $Entity, arg4: $DamageSource_, arg5: $MutableFloat): void;
        static getFullname(arg0: $Holder_<$Enchantment>, arg1: number): $Component;
        exclusiveSet(): $HolderSet<$Enchantment>;
        static constantCost(arg0: number): $Enchantment$Cost;
        static dynamicCost(arg0: number, arg1: number): $Enchantment$Cost;
        getSlotItems(arg0: $LivingEntity): $Map<$EquipmentSlot, $ItemStack>;
        matchingSlot(arg0: $EquipmentSlot_): boolean;
        /**
         * @deprecated
         */
        getSupportedItems(): $HolderSet<$Item>;
        /**
         * @deprecated
         */
        isPrimaryItem(arg0: $ItemStack_): boolean;
        getMinCost(arg0: number): number;
        getMaxCost(arg0: number): number;
        static damageContext(arg0: $ServerLevel, arg1: number, arg2: $Entity, arg3: $DamageSource_): $LootContext;
        modifyDamageProtection(arg0: $ServerLevel, arg1: number, arg2: $ItemStack_, arg3: $Entity, arg4: $DamageSource_, arg5: $MutableFloat): void;
        modifyDurabilityChange(arg0: $ServerLevel, arg1: number, arg2: $ItemStack_, arg3: $MutableFloat): void;
        modifyItemFilteredCount(arg0: $DataComponentType_<$List_<$ConditionalEffect_<$EnchantmentValueEffect>>>, arg1: $ServerLevel, arg2: number, arg3: $ItemStack_, arg4: $MutableFloat): void;
        modifyAmmoCount(arg0: $ServerLevel, arg1: number, arg2: $ItemStack_, arg3: $MutableFloat): void;
        modifyPiercingCount(arg0: $ServerLevel, arg1: number, arg2: $ItemStack_, arg3: $MutableFloat): void;
        modifyBlockExperience(arg0: $ServerLevel, arg1: number, arg2: $ItemStack_, arg3: $MutableFloat): void;
        modifyMobExperience(arg0: $ServerLevel, arg1: number, arg2: $ItemStack_, arg3: $Entity, arg4: $MutableFloat): void;
        modifyEntityFilteredValue(arg0: $DataComponentType_<$List_<$ConditionalEffect_<$EnchantmentValueEffect>>>, arg1: $ServerLevel, arg2: number, arg3: $ItemStack_, arg4: $Entity, arg5: $MutableFloat): void;
        modifyTridentReturnToOwnerAcceleration(arg0: $ServerLevel, arg1: number, arg2: $ItemStack_, arg3: $Entity, arg4: $MutableFloat): void;
        modifyTridentSpinAttackStrength(arg0: $RandomSource, arg1: number, arg2: $MutableFloat): void;
        modifyUnfilteredValue(arg0: $DataComponentType_<$EnchantmentValueEffect>, arg1: $RandomSource, arg2: number, arg3: $MutableFloat): void;
        modifyFishingTimeReduction(arg0: $ServerLevel, arg1: number, arg2: $ItemStack_, arg3: $Entity, arg4: $MutableFloat): void;
        modifyFishingLuckBonus(arg0: $ServerLevel, arg1: number, arg2: $ItemStack_, arg3: $Entity, arg4: $MutableFloat): void;
        modifyDamageFilteredValue(arg0: $DataComponentType_<$List_<$ConditionalEffect_<$EnchantmentValueEffect>>>, arg1: $ServerLevel, arg2: number, arg3: $ItemStack_, arg4: $Entity, arg5: $DamageSource_, arg6: $MutableFloat): void;
        modifyArmorEffectivness(arg0: $ServerLevel, arg1: number, arg2: $ItemStack_, arg3: $Entity, arg4: $DamageSource_, arg5: $MutableFloat): void;
        modifyProjectileCount(arg0: $ServerLevel, arg1: number, arg2: $ItemStack_, arg3: $Entity, arg4: $MutableFloat): void;
        modifyProjectileSpread(arg0: $ServerLevel, arg1: number, arg2: $ItemStack_, arg3: $Entity, arg4: $MutableFloat): void;
        modifyCrossbowChargeTime(arg0: $RandomSource, arg1: number, arg2: $MutableFloat): void;
        static entityContext(arg0: $ServerLevel, arg1: number, arg2: $Entity, arg3: $Vec3_): $LootContext;
        modifyDurabilityToRepairFromXp(arg0: $ServerLevel, arg1: number, arg2: $ItemStack_, arg3: $MutableFloat): void;
        static blockHitContext(arg0: $ServerLevel, arg1: number, arg2: $Entity, arg3: $Vec3_, arg4: $BlockState_): $LootContext;
        tick(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity): void;
        getWeight(): number;
        description(): $Component;
        getMinLevel(): number;
        getMaxLevel(): number;
        definition(): $Enchantment$EnchantmentDefinition;
        static definition(arg0: $HolderSet_<$Item>, arg1: $HolderSet_<$Item>, arg2: number, arg3: number, arg4: $Enchantment$Cost_, arg5: $Enchantment$Cost_, arg6: number, ...arg7: $EquipmentSlotGroup_[]): $Enchantment$EnchantmentDefinition;
        static definition(arg0: $HolderSet_<$Item>, arg1: number, arg2: number, arg3: $Enchantment$Cost_, arg4: $Enchantment$Cost_, arg5: number, ...arg6: $EquipmentSlotGroup_[]): $Enchantment$EnchantmentDefinition;
        static CODEC: $Codec<$Holder<$Enchantment>>;
        static DIRECT_CODEC: $Codec<$Enchantment>;
        static MAX_LEVEL: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$Enchantment>>;
        constructor(description: $Component_, definition: $Enchantment$EnchantmentDefinition_, exclusiveSet: $HolderSet_<$Enchantment>, effects: $DataComponentMap_);
        get anvilCost(): number;
        get supportedItems(): $HolderSet<$Item>;
        get weight(): number;
        get minLevel(): number;
        get maxLevel(): number;
    }
    /**
     * Values that may be interpreted as {@link $Enchantment}.
     */
    export type $Enchantment_ = RegistryTypes.Enchantment | { effects?: $DataComponentMap_, definition?: $Enchantment$EnchantmentDefinition_, exclusiveSet?: $HolderSet_<$Enchantment>, description?: $Component_,  } | [effects?: $DataComponentMap_, definition?: $Enchantment$EnchantmentDefinition_, exclusiveSet?: $HolderSet_<$Enchantment>, description?: $Component_, ];
    export class $EnchantmentEffectComponents {
        static bootstrap(arg0: $Registry<$DataComponentType_<never>>): $DataComponentType<never>;
        static ATTRIBUTES: $DataComponentType<$List<$EnchantmentAttributeEffect>>;
        static HIT_BLOCK: $DataComponentType<$List<$ConditionalEffect<$EnchantmentEntityEffect>>>;
        static PROJECTILE_SPREAD: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static PREVENT_EQUIPMENT_DROP: $DataComponentType<$Unit>;
        static CROSSBOW_CHARGE_TIME: $DataComponentType<$EnchantmentValueEffect>;
        static FISHING_LUCK_BONUS: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static BLOCK_EXPERIENCE: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static TRIDENT_SOUND: $DataComponentType<$List<$Holder<$SoundEvent>>>;
        static SMASH_DAMAGE_PER_FALLEN_BLOCK: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static POST_ATTACK: $DataComponentType<$List<$TargetedConditionalEffect<$EnchantmentEntityEffect>>>;
        static EQUIPMENT_DROPS: $DataComponentType<$List<$TargetedConditionalEffect<$EnchantmentValueEffect>>>;
        static KNOCKBACK: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static PREVENT_ARMOR_CHANGE: $DataComponentType<$Unit>;
        static PROJECTILE_SPAWNED: $DataComponentType<$List<$ConditionalEffect<$EnchantmentEntityEffect>>>;
        static TRIDENT_SPIN_ATTACK_STRENGTH: $DataComponentType<$EnchantmentValueEffect>;
        static COMPONENT_CODEC: $Codec<$DataComponentType<never>>;
        static AMMO_USE: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static DAMAGE_PROTECTION: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static CODEC: $Codec<$DataComponentMap>;
        static DAMAGE: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static REPAIR_WITH_XP: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static ARMOR_EFFECTIVENESS: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static LOCATION_CHANGED: $DataComponentType<$List<$ConditionalEffect<$EnchantmentLocationBasedEffect>>>;
        static ITEM_DAMAGE: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static MOB_EXPERIENCE: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static PROJECTILE_COUNT: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static TICK: $DataComponentType<$List<$ConditionalEffect<$EnchantmentEntityEffect>>>;
        static DAMAGE_IMMUNITY: $DataComponentType<$List<$ConditionalEffect<$DamageImmunity>>>;
        static PROJECTILE_PIERCING: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static FISHING_TIME_REDUCTION: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static CROSSBOW_CHARGING_SOUNDS: $DataComponentType<$List<$CrossbowItem$ChargingSounds>>;
        static TRIDENT_RETURN_ACCELERATION: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
    }
    export interface $EnchantmentEffectComponents {
    }
    export class $Enchantments {
        static bootstrap(arg0: $BootstrapContext<$Enchantment_>): void;
        static PUNCH: $ResourceKey<$Enchantment>;
        static SOUL_SPEED: $ResourceKey<$Enchantment>;
        static FEATHER_FALLING: $ResourceKey<$Enchantment>;
        static LOYALTY: $ResourceKey<$Enchantment>;
        static DEPTH_STRIDER: $ResourceKey<$Enchantment>;
        static BLAST_PROTECTION: $ResourceKey<$Enchantment>;
        static FORTUNE: $ResourceKey<$Enchantment>;
        static VANISHING_CURSE: $ResourceKey<$Enchantment>;
        static INFINITY: $ResourceKey<$Enchantment>;
        static DENSITY: $ResourceKey<$Enchantment>;
        static KNOCKBACK: $ResourceKey<$Enchantment>;
        static BREACH: $ResourceKey<$Enchantment>;
        static SHARPNESS: $ResourceKey<$Enchantment>;
        static SMITE: $ResourceKey<$Enchantment>;
        static PROJECTILE_PROTECTION: $ResourceKey<$Enchantment>;
        static RESPIRATION: $ResourceKey<$Enchantment>;
        static BINDING_CURSE: $ResourceKey<$Enchantment>;
        static EFFICIENCY: $ResourceKey<$Enchantment>;
        static MENDING: $ResourceKey<$Enchantment>;
        static FROST_WALKER: $ResourceKey<$Enchantment>;
        static LURE: $ResourceKey<$Enchantment>;
        static UNBREAKING: $ResourceKey<$Enchantment>;
        static PIERCING: $ResourceKey<$Enchantment>;
        static PROTECTION: $ResourceKey<$Enchantment>;
        static MULTISHOT: $ResourceKey<$Enchantment>;
        static SWIFT_SNEAK: $ResourceKey<$Enchantment>;
        static FIRE_ASPECT: $ResourceKey<$Enchantment>;
        static POWER: $ResourceKey<$Enchantment>;
        static LUCK_OF_THE_SEA: $ResourceKey<$Enchantment>;
        static CHANNELING: $ResourceKey<$Enchantment>;
        static WIND_BURST: $ResourceKey<$Enchantment>;
        static BANE_OF_ARTHROPODS: $ResourceKey<$Enchantment>;
        static SWEEPING_EDGE: $ResourceKey<$Enchantment>;
        static THORNS: $ResourceKey<$Enchantment>;
        static FLAME: $ResourceKey<$Enchantment>;
        static FIRE_PROTECTION: $ResourceKey<$Enchantment>;
        static RIPTIDE: $ResourceKey<$Enchantment>;
        static LOOTING: $ResourceKey<$Enchantment>;
        static SILK_TOUCH: $ResourceKey<$Enchantment>;
        static QUICK_CHARGE: $ResourceKey<$Enchantment>;
        static AQUA_AFFINITY: $ResourceKey<$Enchantment>;
        static IMPALING: $ResourceKey<$Enchantment>;
        constructor();
    }
}
