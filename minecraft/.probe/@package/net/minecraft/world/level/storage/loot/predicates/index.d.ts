import { $NumberProvider, $NumberProvider_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List, $Map_, $List_, $Map, $Set } from "@package/java/util";
import { $StatePropertiesPredicate_, $StatePropertiesPredicate, $EntityPredicate$Builder, $LocationPredicate, $ItemPredicate, $DamageSourcePredicate_, $LocationPredicate$Builder, $ItemPredicate$Builder, $StatePropertiesPredicate$Builder, $ItemPredicate_, $EntityPredicate_, $DamageSourcePredicate$Builder, $LocationPredicate_, $EntityPredicate, $DamageSourcePredicate } from "@package/net/minecraft/advancements/critereon";
import { $Predicate, $Function_, $Predicate_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $Holder_, $Holder, $BlockPos_ } from "@package/net/minecraft/core";
import { $LevelBasedValue, $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Iterable_, $Record } from "@package/java/lang";
import { $LootContextUser, $ValidationContext, $LootContext, $IntRange, $LootContext$EntityTarget, $LootContext$EntityTarget_ } from "@package/net/minecraft/world/level/storage/loot";
import { $LootContextParam } from "@package/net/minecraft/world/level/storage/loot/parameters";

declare module "@package/net/minecraft/world/level/storage/loot/predicates" {
    export class $WeatherCheck$Builder implements $LootItemCondition$Builder {
        setRaining(arg0: boolean): $WeatherCheck$Builder;
        setThundering(arg0: boolean): $WeatherCheck$Builder;
        build(): $WeatherCheck;
        invert(): $LootItemCondition$Builder;
        or(arg0: $LootItemCondition$Builder_): $AnyOfCondition$Builder;
        and(arg0: $LootItemCondition$Builder_): $AllOfCondition$Builder;
        constructor();
        set raining(value: boolean);
        set thundering(value: boolean);
    }
    export class $WeatherCheck extends $Record implements $LootItemCondition {
        isThundering(): (boolean) | undefined;
        isRaining(): (boolean) | undefined;
        static weather(): $WeatherCheck$Builder;
        test(arg0: $LootContext): boolean;
        getType(): $LootItemConditionType;
        not(): $LootItemCondition;
        or(...arg0: $LootItemCondition[]): $LootItemCondition;
        and(...arg0: $LootItemCondition[]): $LootItemCondition;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        validate(arg0: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$WeatherCheck>;
        constructor(arg0: (boolean) | undefined, arg1: (boolean) | undefined);
        get thundering(): (boolean) | undefined;
        get raining(): (boolean) | undefined;
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * Values that may be interpreted as {@link $WeatherCheck}.
     */
    export type $WeatherCheck_ = { isRaining?: (boolean) | undefined, isThundering?: (boolean) | undefined,  } | [isRaining?: (boolean) | undefined, isThundering?: (boolean) | undefined, ];
    export class $LootItemBlockStatePropertyCondition$Builder implements $LootItemCondition$Builder {
        build(): $LootItemCondition;
        setProperties(arg0: $StatePropertiesPredicate$Builder): $LootItemBlockStatePropertyCondition$Builder;
        invert(): $LootItemCondition$Builder;
        or(arg0: $LootItemCondition$Builder_): $AnyOfCondition$Builder;
        and(arg0: $LootItemCondition$Builder_): $AllOfCondition$Builder;
        constructor(arg0: $Block_);
        set properties(value: $StatePropertiesPredicate$Builder);
    }
    export class $BonusLevelTableCondition extends $Record implements $LootItemCondition {
        enchantment(): $Holder<$Enchantment>;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static bonusLevelFlatChance(arg0: $Holder_<$Enchantment>, ...arg1: number[]): $LootItemCondition$Builder;
        values(): $List<number>;
        test(arg0: $LootContext): boolean;
        getType(): $LootItemConditionType;
        not(): $LootItemCondition;
        or(...arg0: $LootItemCondition[]): $LootItemCondition;
        and(...arg0: $LootItemCondition[]): $LootItemCondition;
        validate(arg0: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$BonusLevelTableCondition>;
        constructor(arg0: $Holder_<$Enchantment>, arg1: $List_<number>);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootItemConditionType;
    }
    /**
     * Values that may be interpreted as {@link $BonusLevelTableCondition}.
     */
    export type $BonusLevelTableCondition_ = { values?: $List_<number>, enchantment?: $Holder_<$Enchantment>,  } | [values?: $List_<number>, enchantment?: $Holder_<$Enchantment>, ];
    export class $LootItemRandomChanceWithEnchantedBonusCondition extends $Record implements $LootItemCondition {
        enchantment(): $Holder<$Enchantment>;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        localvar$hpd001$puzzleslib$test(enchantmentLevel: number, lootContext: $LootContext): number;
        unenchantedChance(): number;
        enchantedChance(): $LevelBasedValue;
        modifyReturnValue$fkb001$additionalentityattributes$additionalEntityAttributes$applyBonusLoot(arg0: boolean, arg1: $LootContext): boolean;
        modifyReturnValue$nal001$spectrum$applyRareLootEnchantment(arg0: boolean, arg1: $LootContext): boolean;
        static randomChanceAndLootingBoost(arg0: $HolderLookup$Provider, arg1: number, arg2: number): $LootItemCondition$Builder;
        test(arg0: $LootContext): boolean;
        getType(): $LootItemConditionType;
        not(): $LootItemCondition;
        or(...arg0: $LootItemCondition[]): $LootItemCondition;
        and(...arg0: $LootItemCondition[]): $LootItemCondition;
        validate(arg0: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$LootItemRandomChanceWithEnchantedBonusCondition>;
        constructor(arg0: number, arg1: $LevelBasedValue, arg2: $Holder_<$Enchantment>);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootItemConditionType;
    }
    /**
     * Values that may be interpreted as {@link $LootItemRandomChanceWithEnchantedBonusCondition}.
     */
    export type $LootItemRandomChanceWithEnchantedBonusCondition_ = { enchantment?: $Holder_<$Enchantment>, enchantedChance?: $LevelBasedValue, unenchantedChance?: number,  } | [enchantment?: $Holder_<$Enchantment>, enchantedChance?: $LevelBasedValue, unenchantedChance?: number, ];
    export class $EntityHasScoreCondition$Builder implements $LootItemCondition$Builder {
        withScore(arg0: string, arg1: $IntRange): $EntityHasScoreCondition$Builder;
        build(): $LootItemCondition;
        invert(): $LootItemCondition$Builder;
        or(arg0: $LootItemCondition$Builder_): $AnyOfCondition$Builder;
        and(arg0: $LootItemCondition$Builder_): $AllOfCondition$Builder;
        constructor(arg0: $LootContext$EntityTarget_);
    }
    export class $MatchTool extends $Record implements $LootItemCondition {
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static toolMatches(arg0: $ItemPredicate$Builder): $LootItemCondition$Builder;
        predicate(): ($ItemPredicate) | undefined;
        test(arg0: $LootContext): boolean;
        getType(): $LootItemConditionType;
        not(): $LootItemCondition;
        or(...arg0: $LootItemCondition[]): $LootItemCondition;
        and(...arg0: $LootItemCondition[]): $LootItemCondition;
        validate(arg0: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$MatchTool>;
        constructor(arg0: ($ItemPredicate_) | undefined);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootItemConditionType;
    }
    /**
     * Values that may be interpreted as {@link $MatchTool}.
     */
    export type $MatchTool_ = { predicate?: ($ItemPredicate_) | undefined,  } | [predicate?: ($ItemPredicate_) | undefined, ];
    export class $DamageSourceCondition extends $Record implements $LootItemCondition {
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static hasDamageSource(arg0: $DamageSourcePredicate$Builder): $LootItemCondition$Builder;
        predicate(): ($DamageSourcePredicate) | undefined;
        test(arg0: $LootContext): boolean;
        getType(): $LootItemConditionType;
        not(): $LootItemCondition;
        or(...arg0: $LootItemCondition[]): $LootItemCondition;
        and(...arg0: $LootItemCondition[]): $LootItemCondition;
        validate(arg0: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$DamageSourceCondition>;
        constructor(arg0: ($DamageSourcePredicate_) | undefined);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootItemConditionType;
    }
    /**
     * Values that may be interpreted as {@link $DamageSourceCondition}.
     */
    export type $DamageSourceCondition_ = { predicate?: ($DamageSourcePredicate_) | undefined,  } | [predicate?: ($DamageSourcePredicate_) | undefined, ];
    export class $LootItemEntityPropertyCondition extends $Record implements $LootItemCondition {
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        entityTarget(): $LootContext$EntityTarget;
        static entityPresent(arg0: $LootContext$EntityTarget_): $LootItemCondition$Builder;
        static hasProperties(arg0: $LootContext$EntityTarget_, arg1: $EntityPredicate_): $LootItemCondition$Builder;
        static hasProperties(arg0: $LootContext$EntityTarget_, arg1: $EntityPredicate$Builder): $LootItemCondition$Builder;
        predicate(): ($EntityPredicate) | undefined;
        test(arg0: $LootContext): boolean;
        getType(): $LootItemConditionType;
        not(): $LootItemCondition;
        or(...arg0: $LootItemCondition[]): $LootItemCondition;
        and(...arg0: $LootItemCondition[]): $LootItemCondition;
        validate(arg0: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$LootItemEntityPropertyCondition>;
        constructor(arg0: ($EntityPredicate_) | undefined, arg1: $LootContext$EntityTarget_);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootItemConditionType;
    }
    /**
     * Values that may be interpreted as {@link $LootItemEntityPropertyCondition}.
     */
    export type $LootItemEntityPropertyCondition_ = { predicate?: ($EntityPredicate_) | undefined, entityTarget?: $LootContext$EntityTarget_,  } | [predicate?: ($EntityPredicate_) | undefined, entityTarget?: $LootContext$EntityTarget_, ];
    export class $LootItemConditions {
        static ENTITY_PROPERTIES: $LootItemConditionType;
        static TIME_CHECK: $LootItemConditionType;
        static RANDOM_CHANCE: $LootItemConditionType;
        static DAMAGE_SOURCE_PROPERTIES: $LootItemConditionType;
        static ALL_OF: $LootItemConditionType;
        static MATCH_TOOL: $LootItemConditionType;
        static ANY_OF: $LootItemConditionType;
        static ENTITY_SCORES: $LootItemConditionType;
        static WEATHER_CHECK: $LootItemConditionType;
        static VALUE_CHECK: $LootItemConditionType;
        static TABLE_BONUS: $LootItemConditionType;
        static BLOCK_STATE_PROPERTY: $LootItemConditionType;
        static REFERENCE: $LootItemConditionType;
        static INVERTED: $LootItemConditionType;
        static LOCATION_CHECK: $LootItemConditionType;
        static RANDOM_CHANCE_WITH_ENCHANTED_BONUS: $LootItemConditionType;
        static KILLED_BY_PLAYER: $LootItemConditionType;
        static SURVIVES_EXPLOSION: $LootItemConditionType;
        static ENCHANTMENT_ACTIVE_CHECK: $LootItemConditionType;
        constructor();
    }
    export class $LootItemConditionType extends $Record {
        codec(): $MapCodec<$LootItemCondition>;
        constructor(arg0: $MapCodec_<$LootItemCondition>);
    }
    /**
     * Values that may be interpreted as {@link $LootItemConditionType}.
     */
    export type $LootItemConditionType_ = RegistryTypes.LootConditionType | { codec?: $MapCodec_<$LootItemCondition>,  } | [codec?: $MapCodec_<$LootItemCondition>, ];
    export class $AllOfCondition$Builder extends $CompositeLootItemCondition$Builder {
        constructor(...arg0: $LootItemCondition$Builder_[]);
    }
    export interface $LootItemConditionType extends RegistryMarked<RegistryTypes.LootConditionTypeTag, RegistryTypes.LootConditionType> {}
    export class $LootItemRandomChanceCondition extends $Record implements $LootItemCondition {
        chance(): $NumberProvider;
        static randomChance(arg0: number): $LootItemCondition$Builder;
        static randomChance(arg0: $NumberProvider_): $LootItemCondition$Builder;
        modifyReturnValue$fka000$additionalentityattributes$additionalEntityAttributes$applyBonusLoot(arg0: boolean, arg1: $LootContext): boolean;
        modifyReturnValue$nak000$spectrum$applyRareLootEnchantment(arg0: boolean, arg1: $LootContext): boolean;
        test(arg0: $LootContext): boolean;
        getType(): $LootItemConditionType;
        not(): $LootItemCondition;
        or(...arg0: $LootItemCondition[]): $LootItemCondition;
        and(...arg0: $LootItemCondition[]): $LootItemCondition;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        validate(arg0: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$LootItemRandomChanceCondition>;
        constructor(arg0: $NumberProvider_);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * Values that may be interpreted as {@link $LootItemRandomChanceCondition}.
     */
    export type $LootItemRandomChanceCondition_ = { chance?: $NumberProvider_,  } | [chance?: $NumberProvider_, ];
    export class $EnchantmentActiveCheck extends $Record implements $LootItemCondition {
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static enchantmentActiveCheck(): $LootItemCondition$Builder;
        static enchantmentInactiveCheck(): $LootItemCondition$Builder;
        active(): boolean;
        test(arg0: $LootContext): boolean;
        getType(): $LootItemConditionType;
        not(): $LootItemCondition;
        or(...arg0: $LootItemCondition[]): $LootItemCondition;
        and(...arg0: $LootItemCondition[]): $LootItemCondition;
        validate(arg0: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$EnchantmentActiveCheck>;
        constructor(arg0: boolean);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootItemConditionType;
    }
    /**
     * Values that may be interpreted as {@link $EnchantmentActiveCheck}.
     */
    export type $EnchantmentActiveCheck_ = { active?: boolean,  } | [active?: boolean, ];
    export class $TimeCheck extends $Record implements $LootItemCondition {
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        period(): (number) | undefined;
        value(): $IntRange;
        test(arg0: $LootContext): boolean;
        static time(arg0: $IntRange): $TimeCheck$Builder;
        getType(): $LootItemConditionType;
        not(): $LootItemCondition;
        or(...arg0: $LootItemCondition[]): $LootItemCondition;
        and(...arg0: $LootItemCondition[]): $LootItemCondition;
        validate(arg0: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$TimeCheck>;
        constructor(arg0: (number) | undefined, arg1: $IntRange);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootItemConditionType;
    }
    /**
     * Values that may be interpreted as {@link $TimeCheck}.
     */
    export type $TimeCheck_ = { period?: (number) | undefined, value?: $IntRange,  } | [period?: (number) | undefined, value?: $IntRange, ];
    export class $ConditionUserBuilder<T extends $ConditionUserBuilder<T>> {
    }
    export interface $ConditionUserBuilder<T extends $ConditionUserBuilder<T>> {
        when(arg0: $LootItemCondition$Builder_): T;
        when<E>(arg0: $Iterable_<E>, arg1: $Function_<E, $LootItemCondition$Builder>): T;
        unwrap(): T;
    }
    export class $CompositeLootItemCondition implements $LootItemCondition {
        test(arg0: $LootContext): boolean;
        validate(arg0: $ValidationContext): void;
        not(): $LootItemCondition;
        or(...arg0: $LootItemCondition[]): $LootItemCondition;
        and(...arg0: $LootItemCondition[]): $LootItemCondition;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        terms: $List<$LootItemCondition>;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $ExplosionCondition implements $LootItemCondition {
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static survivesExplosion(): $LootItemCondition$Builder;
        test(arg0: $LootContext): boolean;
        getType(): $LootItemConditionType;
        not(): $LootItemCondition;
        or(...arg0: $LootItemCondition[]): $LootItemCondition;
        and(...arg0: $LootItemCondition[]): $LootItemCondition;
        validate(arg0: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$ExplosionCondition>;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootItemConditionType;
    }
    export class $LootItemCondition {
        static CODEC: $Codec<$Holder<$LootItemCondition>>;
        static DIRECT_CODEC: $Codec<$LootItemCondition>;
        static TYPED_CODEC: $Codec<$LootItemCondition>;
    }
    export interface $LootItemCondition extends $LootContextUser, $Predicate<$LootContext> {
        not(): $LootItemCondition;
        or(...arg0: $LootItemCondition[]): $LootItemCondition;
        and(...arg0: $LootItemCondition[]): $LootItemCondition;
        getType(): $LootItemConditionType;
        get type(): $LootItemConditionType;
    }
    export class $AnyOfCondition$Builder extends $CompositeLootItemCondition$Builder {
        constructor(...arg0: $LootItemCondition$Builder_[]);
    }
    export class $InvertedLootItemCondition extends $Record implements $LootItemCondition {
        static invert(arg0: $LootItemCondition$Builder_): $LootItemCondition$Builder;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        term(): $LootItemCondition;
        test(arg0: $LootContext): boolean;
        validate(arg0: $ValidationContext): void;
        getType(): $LootItemConditionType;
        not(): $LootItemCondition;
        or(...arg0: $LootItemCondition[]): $LootItemCondition;
        and(...arg0: $LootItemCondition[]): $LootItemCondition;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$InvertedLootItemCondition>;
        constructor(arg0: $LootItemCondition);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootItemConditionType;
    }
    /**
     * Values that may be interpreted as {@link $InvertedLootItemCondition}.
     */
    export type $InvertedLootItemCondition_ = { term?: $LootItemCondition,  } | [term?: $LootItemCondition, ];
    export class $LootItemBlockStatePropertyCondition extends $Record implements $LootItemCondition {
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static hasBlockStateProperties(arg0: $Block_): $LootItemBlockStatePropertyCondition$Builder;
        block(): $Holder<$Block>;
        test(arg0: $LootContext): boolean;
        properties(): ($StatePropertiesPredicate) | undefined;
        getType(): $LootItemConditionType;
        not(): $LootItemCondition;
        or(...arg0: $LootItemCondition[]): $LootItemCondition;
        and(...arg0: $LootItemCondition[]): $LootItemCondition;
        validate(arg0: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$LootItemBlockStatePropertyCondition>;
        constructor(arg0: $Holder_<$Block>, arg1: ($StatePropertiesPredicate_) | undefined);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootItemConditionType;
    }
    /**
     * Values that may be interpreted as {@link $LootItemBlockStatePropertyCondition}.
     */
    export type $LootItemBlockStatePropertyCondition_ = { block?: $Holder_<$Block>, properties?: ($StatePropertiesPredicate_) | undefined,  } | [block?: $Holder_<$Block>, properties?: ($StatePropertiesPredicate_) | undefined, ];
    export class $TimeCheck$Builder implements $LootItemCondition$Builder {
        setPeriod(arg0: number): $TimeCheck$Builder;
        invert(): $LootItemCondition$Builder;
        or(arg0: $LootItemCondition$Builder_): $AnyOfCondition$Builder;
        and(arg0: $LootItemCondition$Builder_): $AllOfCondition$Builder;
        build(): $LootItemCondition;
        constructor(arg0: $IntRange);
        set period(value: number);
    }
    export class $LootItemCondition$Builder {
    }
    export interface $LootItemCondition$Builder {
        invert(): $LootItemCondition$Builder;
        or(arg0: $LootItemCondition$Builder_): $AnyOfCondition$Builder;
        and(arg0: $LootItemCondition$Builder_): $AllOfCondition$Builder;
        build(): $LootItemCondition;
    }
    /**
     * Values that may be interpreted as {@link $LootItemCondition$Builder}.
     */
    export type $LootItemCondition$Builder_ = (() => $LootItemCondition);
    export class $AllOfCondition extends $CompositeLootItemCondition {
        static allOf(arg0: $List_<$LootItemCondition>): $AllOfCondition;
        static allOf(...arg0: $LootItemCondition$Builder_[]): $AllOfCondition$Builder;
        static INLINE_CODEC: $Codec<$AllOfCondition>;
        static CODEC: $MapCodec<$AllOfCondition>;
        terms: $List<$LootItemCondition>;
        constructor(arg0: $List_<$LootItemCondition>);
    }
    export class $EntityHasScoreCondition extends $Record implements $LootItemCondition {
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        scores(): $Map<string, $IntRange>;
        static hasScores(arg0: $LootContext$EntityTarget_): $EntityHasScoreCondition$Builder;
        entityTarget(): $LootContext$EntityTarget;
        test(arg0: $LootContext): boolean;
        getType(): $LootItemConditionType;
        not(): $LootItemCondition;
        or(...arg0: $LootItemCondition[]): $LootItemCondition;
        and(...arg0: $LootItemCondition[]): $LootItemCondition;
        validate(arg0: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$EntityHasScoreCondition>;
        constructor(arg0: $Map_<string, $IntRange>, arg1: $LootContext$EntityTarget_);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootItemConditionType;
    }
    /**
     * Values that may be interpreted as {@link $EntityHasScoreCondition}.
     */
    export type $EntityHasScoreCondition_ = { scores?: $Map_<string, $IntRange>, entityTarget?: $LootContext$EntityTarget_,  } | [scores?: $Map_<string, $IntRange>, entityTarget?: $LootContext$EntityTarget_, ];
    export class $ConditionReference extends $Record implements $LootItemCondition {
        static conditionReference(arg0: $ResourceKey_<$LootItemCondition>): $LootItemCondition$Builder;
        name(): $ResourceKey<$LootItemCondition>;
        test(arg0: $LootContext): boolean;
        validate(arg0: $ValidationContext): void;
        getType(): $LootItemConditionType;
        not(): $LootItemCondition;
        or(...arg0: $LootItemCondition[]): $LootItemCondition;
        and(...arg0: $LootItemCondition[]): $LootItemCondition;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$ConditionReference>;
        constructor(arg0: $ResourceKey_<$LootItemCondition>);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * Values that may be interpreted as {@link $ConditionReference}.
     */
    export type $ConditionReference_ = { name?: $ResourceKey_<$LootItemCondition>,  } | [name?: $ResourceKey_<$LootItemCondition>, ];
    export class $LootItemKilledByPlayerCondition implements $LootItemCondition {
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static killedByPlayer(): $LootItemCondition$Builder;
        handler$dnn000$bookshelf$test(arg0: $LootContext, arg1: $CallbackInfoReturnable<any>): void;
        test(arg0: $LootContext): boolean;
        getType(): $LootItemConditionType;
        not(): $LootItemCondition;
        or(...arg0: $LootItemCondition[]): $LootItemCondition;
        and(...arg0: $LootItemCondition[]): $LootItemCondition;
        validate(arg0: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$LootItemKilledByPlayerCondition>;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootItemConditionType;
    }
    export class $AnyOfCondition extends $CompositeLootItemCondition {
        static anyOf(...arg0: $LootItemCondition$Builder_[]): $AnyOfCondition$Builder;
        static CODEC: $MapCodec<$AnyOfCondition>;
        terms: $List<$LootItemCondition>;
        constructor(arg0: $List_<$LootItemCondition>);
    }
    export class $LocationCheck extends $Record implements $LootItemCondition {
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static checkLocation(arg0: $LocationPredicate$Builder, arg1: $BlockPos_): $LootItemCondition$Builder;
        static checkLocation(arg0: $LocationPredicate$Builder): $LootItemCondition$Builder;
        predicate(): ($LocationPredicate) | undefined;
        test(arg0: $LootContext): boolean;
        offset(): $BlockPos;
        getType(): $LootItemConditionType;
        not(): $LootItemCondition;
        or(...arg0: $LootItemCondition[]): $LootItemCondition;
        and(...arg0: $LootItemCondition[]): $LootItemCondition;
        validate(arg0: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$LocationCheck>;
        constructor(arg0: ($LocationPredicate_) | undefined, arg1: $BlockPos_);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootItemConditionType;
    }
    /**
     * Values that may be interpreted as {@link $LocationCheck}.
     */
    export type $LocationCheck_ = { predicate?: ($LocationPredicate_) | undefined, offset?: $BlockPos_,  } | [predicate?: ($LocationPredicate_) | undefined, offset?: $BlockPos_, ];
    export class $ValueCheckCondition extends $Record implements $LootItemCondition {
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static hasValue(arg0: $NumberProvider_, arg1: $IntRange): $LootItemCondition$Builder;
        range(): $IntRange;
        test(arg0: $LootContext): boolean;
        provider(): $NumberProvider;
        getType(): $LootItemConditionType;
        not(): $LootItemCondition;
        or(...arg0: $LootItemCondition[]): $LootItemCondition;
        and(...arg0: $LootItemCondition[]): $LootItemCondition;
        validate(arg0: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$ValueCheckCondition>;
        constructor(arg0: $NumberProvider_, arg1: $IntRange);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootItemConditionType;
    }
    /**
     * Values that may be interpreted as {@link $ValueCheckCondition}.
     */
    export type $ValueCheckCondition_ = { provider?: $NumberProvider_, range?: $IntRange,  } | [provider?: $NumberProvider_, range?: $IntRange, ];
    export class $CompositeLootItemCondition$Builder implements $LootItemCondition$Builder {
        addTerm(arg0: $LootItemCondition$Builder_): void;
        build(): $LootItemCondition;
        invert(): $LootItemCondition$Builder;
        or(arg0: $LootItemCondition$Builder_): $AnyOfCondition$Builder;
        and(arg0: $LootItemCondition$Builder_): $AllOfCondition$Builder;
    }
}
