import { $NumberProvider, $NumberProvider_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Tag_, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EquipmentSlotGroup, $EquipmentSlotGroup_ } from "@package/net/minecraft/world/entity";
import { $LootPoolEntryContainer$Builder } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $AttributeModifier$Operation_, $AttributeModifier$Operation, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map, $Set, $List, $Map_, $List_ } from "@package/java/util";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $SetComponentsLootFunctionAccessor } from "@package/io/wispforest/owo/mixin";
import { $Consumer_, $BiFunction, $UnaryOperator, $Consumer, $Function_, $BiFunction_ } from "@package/java/util/function";
import { $HolderSet_, $HolderLookup$Provider, $Holder_, $Holder } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $LootItemFunctionExtension } from "@package/com/almostreliable/lootjs/loot/extension";
import { $DataComponentType, $DataComponentType_, $DataComponentMap, $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $MapDecorationType } from "@package/net/minecraft/world/level/saveddata/maps";
import { $Enum, $Iterable_, $Record } from "@package/java/lang";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $LootContextUser, $ContainerComponentManipulator, $ValidationContext, $LootContext, $LootTable, $IntRange, $LootContext$EntityTarget_ } from "@package/net/minecraft/world/level/storage/loot";
import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item, $DyeColor_, $ItemStack_, $ItemStack, $Instrument } from "@package/net/minecraft/world/item";
import { $Fireworks, $WritableBookContent_, $WrittenBookContent_, $WritableBookContent, $FireworkExplosion_, $FireworkExplosion$Shape_, $WrittenBookContent, $FireworkExplosion } from "@package/net/minecraft/world/item/component";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $NbtPathArgument$NbtPath } from "@package/net/minecraft/commands/arguments";
import { $Filterable_ } from "@package/net/minecraft/server/network";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $IExplorationFunctionExtension } from "@package/net/mehvahdjukaar/supplementaries/common/utils";
import { $ItemPredicate_ } from "@package/net/minecraft/advancements/critereon";
import { $NbtProvider } from "@package/net/minecraft/world/level/storage/loot/providers/nbt";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceKey_, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $LootItemCondition$Builder_, $ConditionUserBuilder, $LootItemCondition$Builder, $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $SetComponentsFunctionAccessor } from "@package/com/almostreliable/lootjs/mixin";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $LootContextParam } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BannerPattern } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/world/level/storage/loot/functions" {
    export class $LootItemFunction$Builder {
    }
    export interface $LootItemFunction$Builder {
        build(): $LootItemFunction;
    }
    /**
     * Values that may be interpreted as {@link $LootItemFunction$Builder}.
     */
    export type $LootItemFunction$Builder_ = (() => $LootItemFunction);
    export class $ApplyBonusCount extends $LootItemConditionalFunction {
        localvar$fjk000$additionalentityattributes$additionalEntityAttributes$applyBonusLoot(arg0: number, arg1: $ItemStack_, arg2: $LootContext): number;
        localvar$moa000$spectrum$rerollBonusLoot(arg0: number, arg1: $ItemStack_, arg2: $LootContext): number;
        static addBonusBinomialDistributionCount(arg0: $Holder_<$Enchantment>, arg1: number, arg2: number): $LootItemConditionalFunction$Builder<never>;
        static addOreBonusCount(arg0: $Holder_<$Enchantment>): $LootItemConditionalFunction$Builder<never>;
        static addUniformBonusCount(arg0: $Holder_<$Enchantment>, arg1: number): $LootItemConditionalFunction$Builder<never>;
        static addUniformBonusCount(arg0: $Holder_<$Enchantment>): $LootItemConditionalFunction$Builder<never>;
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static CODEC: $MapCodec<$ApplyBonusCount>;
    }
    export class $SetPotionFunction extends $LootItemConditionalFunction {
        static setPotion(arg0: $Holder_<$Potion>): $LootItemConditionalFunction$Builder<never>;
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static CODEC: $MapCodec<$SetPotionFunction>;
        static set potion(value: $Holder_<$Potion>);
    }
    export class $EnchantWithLevelsFunction$Builder extends $LootItemConditionalFunction$Builder<$EnchantWithLevelsFunction$Builder> {
        fromOptions(arg0: $HolderSet_<$Enchantment>): $EnchantWithLevelsFunction$Builder;
        constructor(arg0: $NumberProvider_);
    }
    export class $LimitCount extends $LootItemConditionalFunction {
        static limitCount(arg0: $IntRange): $LootItemConditionalFunction$Builder<never>;
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static CODEC: $MapCodec<$LimitCount>;
    }
    export class $CopyCustomDataFunction extends $LootItemConditionalFunction {
        static copyData(arg0: $LootContext$EntityTarget_): $CopyCustomDataFunction$Builder;
        /**
         * @deprecated
         */
        static copyData(arg0: $NbtProvider): $CopyCustomDataFunction$Builder;
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static CODEC: $MapCodec<$CopyCustomDataFunction>;
    }
    export class $SetStewEffectFunction$Builder extends $LootItemConditionalFunction$Builder<$SetStewEffectFunction$Builder> {
        withEffect(arg0: $Holder_<$MobEffect>, arg1: $NumberProvider_): $SetStewEffectFunction$Builder;
        constructor();
    }
    export class $SetAttributesFunction extends $LootItemConditionalFunction {
        static setAttributes(): $SetAttributesFunction$Builder;
        static modifier(arg0: $ResourceLocation_, arg1: $Holder_<$Attribute>, arg2: $AttributeModifier$Operation_, arg3: $NumberProvider_): $SetAttributesFunction$ModifierBuilder;
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static CODEC: $MapCodec<$SetAttributesFunction>;
    }
    export class $LootItemFunction {
        static decorate(arg0: $BiFunction_<$ItemStack, $LootContext, $ItemStack>, arg1: $Consumer_<$ItemStack>, arg2: $LootContext): $Consumer<$ItemStack>;
    }
    export interface $LootItemFunction extends $LootContextUser, $BiFunction<$ItemStack, $LootContext, $ItemStack>, $LootItemFunctionExtension {
        lootjs$when(arg0: $Consumer_<any>): $LootItemFunction;
        getType(): $LootItemFunctionType<$LootItemFunction>;
        get type(): $LootItemFunctionType<$LootItemFunction>;
    }
    export class $ApplyBonusCount$FormulaType extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ApplyBonusCount$FormulaType}.
     */
    export type $ApplyBonusCount$FormulaType_ = { codec?: $Codec<$ApplyBonusCount$Formula>, id?: $ResourceLocation_,  } | [codec?: $Codec<$ApplyBonusCount$Formula>, id?: $ResourceLocation_, ];
    export class $SetOminousBottleAmplifierFunction extends $LootItemConditionalFunction {
        amplifier(): $NumberProvider;
        static setAmplifier(arg0: $NumberProvider_): $LootItemConditionalFunction$Builder<never>;
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
    }
    export class $SetContainerLootTable extends $LootItemConditionalFunction {
        static withLootTable(arg0: $BlockEntityType_<never>, arg1: $ResourceKey_<$LootTable>): $LootItemConditionalFunction$Builder<never>;
        static withLootTable(arg0: $BlockEntityType_<never>, arg1: $ResourceKey_<$LootTable>, arg2: number): $LootItemConditionalFunction$Builder<never>;
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static CODEC: $MapCodec<$SetContainerLootTable>;
    }
    export class $SequenceFunction implements $LootItemFunction {
        apply(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static of(arg0: $List_<$LootItemFunction>): $SequenceFunction;
        validate(arg0: $ValidationContext): void;
        getType(): $LootItemFunctionType<$SequenceFunction>;
        lootjs$when(arg0: $Consumer_<any>): $LootItemFunction;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        andThen<V>(arg0: $Function_<$ItemStack, V>): $BiFunction<$ItemStack, $LootContext, V>;
        static INLINE_CODEC: $Codec<$SequenceFunction>;
        static CODEC: $MapCodec<$SequenceFunction>;
        get type(): $LootItemFunctionType<$SequenceFunction>;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $ListOperation$ReplaceAll implements $ListOperation {
        mode(): $ListOperation$Type;
        apply<T>(arg0: $List_<T>, arg1: $List_<T>, arg2: number): $List<T>;
        apply<T>(arg0: $List_<T>, arg1: $List_<T>): $List<T>;
        static MAP_CODEC: $MapCodec<$ListOperation$ReplaceAll>;
        static INSTANCE: $ListOperation$ReplaceAll;
    }
    export class $SetItemCountFunction extends $LootItemConditionalFunction {
        static setCount(arg0: $NumberProvider_): $LootItemConditionalFunction$Builder<never>;
        static setCount(arg0: $NumberProvider_, arg1: boolean): $LootItemConditionalFunction$Builder<never>;
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static CODEC: $MapCodec<$SetItemCountFunction>;
    }
    export class $LootItemFunctions {
        static compose(arg0: $List_<$BiFunction_<$ItemStack, $LootContext, $ItemStack>>): $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        static SET_WRITTEN_BOOK_PAGES: $LootItemFunctionType<$SetWrittenBookPagesFunction>;
        static ENCHANTED_COUNT_INCREASE: $LootItemFunctionType<$EnchantedCountIncreaseFunction>;
        static COPY_NAME: $LootItemFunctionType<$CopyNameFunction>;
        static SET_LOOT_TABLE: $LootItemFunctionType<$SetContainerLootTable>;
        static EXPLOSION_DECAY: $LootItemFunctionType<$ApplyExplosionDecay>;
        static ROOT_CODEC: $Codec<$LootItemFunction>;
        static SET_CUSTOM_DATA: $LootItemFunctionType<$SetCustomDataFunction>;
        static FURNACE_SMELT: $LootItemFunctionType<$SmeltItemFunction>;
        static SET_ATTRIBUTES: $LootItemFunctionType<$SetAttributesFunction>;
        static MODIFY_CONTENTS: $LootItemFunctionType<$ModifyContainerContents>;
        static COPY_COMPONENTS: $LootItemFunctionType<$CopyComponentsFunction>;
        static SET_BOOK_COVER: $LootItemFunctionType<$SetBookCoverFunction>;
        static SET_COMPONENTS: $LootItemFunctionType<$SetComponentsFunction>;
        static ENCHANT_WITH_LEVELS: $LootItemFunctionType<$EnchantWithLevelsFunction>;
        static SET_FIREWORK_EXPLOSION: $LootItemFunctionType<$SetFireworkExplosionFunction>;
        static LIMIT_COUNT: $LootItemFunctionType<$LimitCount>;
        static SET_LORE: $LootItemFunctionType<$SetLoreFunction>;
        static SEQUENCE: $LootItemFunctionType<$SequenceFunction>;
        static REFERENCE: $LootItemFunctionType<$FunctionReference>;
        static SET_DAMAGE: $LootItemFunctionType<$SetItemDamageFunction>;
        static EXPLORATION_MAP: $LootItemFunctionType<$ExplorationMapFunction>;
        static SET_CUSTOM_MODEL_DATA: $LootItemFunctionType<$SetCustomModelDataFunction>;
        static SET_ENCHANTMENTS: $LootItemFunctionType<$SetEnchantmentsFunction>;
        static APPLY_BONUS: $LootItemFunctionType<$ApplyBonusCount>;
        static CODEC: $Codec<$Holder<$LootItemFunction>>;
        static FILL_PLAYER_HEAD: $LootItemFunctionType<$FillPlayerHead>;
        static SET_CONTENTS: $LootItemFunctionType<$SetContainerContents>;
        static SET_WRITABLE_BOOK_PAGES: $LootItemFunctionType<$SetWritableBookPagesFunction>;
        static SET_POTION: $LootItemFunctionType<$SetPotionFunction>;
        static COPY_CUSTOM_DATA: $LootItemFunctionType<$CopyCustomDataFunction>;
        static SET_COUNT: $LootItemFunctionType<$SetItemCountFunction>;
        static SET_NAME: $LootItemFunctionType<$SetNameFunction>;
        static TOGGLE_TOOLTIPS: $LootItemFunctionType<$ToggleTooltips>;
        static SET_FIREWORKS: $LootItemFunctionType<$SetFireworksFunction>;
        static IDENTITY: $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        static SET_BANNER_PATTERN: $LootItemFunctionType<$SetBannerPatternFunction>;
        static SET_ITEM: $LootItemFunctionType<$SetItemFunction>;
        static COPY_STATE: $LootItemFunctionType<$CopyBlockState>;
        static SET_STEW_EFFECT: $LootItemFunctionType<$SetStewEffectFunction>;
        static SET_OMINOUS_BOTTLE_AMPLIFIER: $LootItemFunctionType<$SetOminousBottleAmplifierFunction>;
        static ENCHANT_RANDOMLY: $LootItemFunctionType<$EnchantRandomlyFunction>;
        static SET_INSTRUMENT: $LootItemFunctionType<$SetInstrumentFunction>;
        static TYPED_CODEC: $Codec<$LootItemFunction>;
        static FILTERED: $LootItemFunctionType<$FilteredFunction>;
        constructor();
    }
    export class $LootItemConditionalFunction$Builder<T extends $LootItemConditionalFunction$Builder<T>> implements $LootItemFunction$Builder, $ConditionUserBuilder<T> {
        when<E>(arg0: $Iterable_<E>, arg1: $Function_<E, $LootItemCondition$Builder>): T;
        when(arg0: $LootItemCondition$Builder_): T;
        unwrap(): T;
        constructor();
    }
    export class $SetCustomDataFunction extends $LootItemConditionalFunction {
        /**
         * @deprecated
         */
        static setCustomData(arg0: $CompoundTag_): $LootItemConditionalFunction$Builder<never>;
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static CODEC: $MapCodec<$SetCustomDataFunction>;
        static set customData(value: $CompoundTag_);
    }
    export class $SetLoreFunction extends $LootItemConditionalFunction {
        static setLore(): $SetLoreFunction$Builder;
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static CODEC: $MapCodec<$SetLoreFunction>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $List_<$Component_>, arg2: $ListOperation, arg3: ($LootContext$EntityTarget_) | undefined);
    }
    export class $SetFireworkExplosionFunction extends $LootItemConditionalFunction {
        static DEFAULT_VALUE: $FireworkExplosion;
        static CODEC: $MapCodec<$SetFireworkExplosionFunction>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: ($FireworkExplosion$Shape_) | undefined, arg2: ($IntList) | undefined, arg3: ($IntList) | undefined, arg4: (boolean) | undefined, arg5: (boolean) | undefined);
    }
    export class $SetFireworksFunction extends $LootItemConditionalFunction {
        static DEFAULT_VALUE: $Fireworks;
        static CODEC: $MapCodec<$SetFireworksFunction>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: ($ListOperation$StandAlone_<$FireworkExplosion_>) | undefined, arg2: (number) | undefined);
    }
    export class $CopyBlockState$Builder extends $LootItemConditionalFunction$Builder<$CopyBlockState$Builder> {
        copy(arg0: $Property<never>): $CopyBlockState$Builder;
    }
    export class $CopyCustomDataFunction$Builder extends $LootItemConditionalFunction$Builder<$CopyCustomDataFunction$Builder> {
        copy(arg0: string, arg1: string): $CopyCustomDataFunction$Builder;
        copy(arg0: string, arg1: string, arg2: $CopyCustomDataFunction$MergeStrategy_): $CopyCustomDataFunction$Builder;
    }
    export class $EnchantedCountIncreaseFunction extends $LootItemConditionalFunction {
        handler$hpb000$puzzleslib$run(stack: $ItemStack_, context: $LootContext, callback: $CallbackInfoReturnable<any>): void;
        static lootingMultiplier(arg0: $HolderLookup$Provider, arg1: $NumberProvider_): $EnchantedCountIncreaseFunction$Builder;
        localvar$hpb000$puzzleslib$run(enchantmentLevel: number, itemStack: $ItemStack_, lootContext: $LootContext): number;
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static CODEC: $MapCodec<$EnchantedCountIncreaseFunction>;
        static NO_LIMIT: number;
    }
    export class $ListOperation {
        static codec(arg0: number): $MapCodec<$ListOperation>;
        static UNLIMITED_CODEC: $MapCodec<$ListOperation>;
    }
    export interface $ListOperation {
        mode(): $ListOperation$Type;
        apply<T>(arg0: $List_<T>, arg1: $List_<T>): $List<T>;
        apply<T>(arg0: $List_<T>, arg1: $List_<T>, arg2: number): $List<T>;
    }
    export class $SetNameFunction$Target extends $Enum<$SetNameFunction$Target> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $SetNameFunction$Target[];
        static valueOf(arg0: string): $SetNameFunction$Target;
        component(): $DataComponentType<$Component>;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$SetNameFunction$Target>;
        static CUSTOM_NAME: $SetNameFunction$Target;
        static ITEM_NAME: $SetNameFunction$Target;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SetNameFunction$Target}.
     */
    export type $SetNameFunction$Target_ = "custom_name" | "item_name";
    export class $ApplyBonusCount$UniformBonusCount extends $Record implements $ApplyBonusCount$Formula {
    }
    /**
     * Values that may be interpreted as {@link $ApplyBonusCount$UniformBonusCount}.
     */
    export type $ApplyBonusCount$UniformBonusCount_ = { bonusMultiplier?: number,  } | [bonusMultiplier?: number, ];
    export class $LootItemConditionalFunction$DummyBuilder extends $LootItemConditionalFunction$Builder<$LootItemConditionalFunction$DummyBuilder> {
    }
    export class $SetAttributesFunction$Builder extends $LootItemConditionalFunction$Builder<$SetAttributesFunction$Builder> {
        withModifier(arg0: $SetAttributesFunction$ModifierBuilder): $SetAttributesFunction$Builder;
        constructor();
        constructor(arg0: boolean);
    }
    export class $EnchantedCountIncreaseFunction$Builder extends $LootItemConditionalFunction$Builder<$EnchantedCountIncreaseFunction$Builder> {
        setLimit(arg0: number): $EnchantedCountIncreaseFunction$Builder;
        constructor(arg0: $Holder_<$Enchantment>, arg1: $NumberProvider_);
        set limit(value: number);
    }
    export class $CopyComponentsFunction$Builder extends $LootItemConditionalFunction$Builder<$CopyComponentsFunction$Builder> {
        exclude(arg0: $DataComponentType_<never>): $CopyComponentsFunction$Builder;
        include(arg0: $DataComponentType_<never>): $CopyComponentsFunction$Builder;
    }
    export class $SetNameFunction extends $LootItemConditionalFunction {
        static createResolver(arg0: $LootContext, arg1: $LootContext$EntityTarget_): $UnaryOperator<$Component>;
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static setName(arg0: $Component_, arg1: $SetNameFunction$Target_): $LootItemConditionalFunction$Builder<never>;
        static setName(arg0: $Component_, arg1: $SetNameFunction$Target_, arg2: $LootContext$EntityTarget_): $LootItemConditionalFunction$Builder<never>;
        static CODEC: $MapCodec<$SetNameFunction>;
    }
    export class $SetContainerContents$Builder extends $LootItemConditionalFunction$Builder<$SetContainerContents$Builder> {
        withEntry(arg0: $LootPoolEntryContainer$Builder<never>): $SetContainerContents$Builder;
        constructor(arg0: $ContainerComponentManipulator<never>);
    }
    export class $CopyCustomDataFunction$MergeStrategy extends $Enum<$CopyCustomDataFunction$MergeStrategy> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $CopyCustomDataFunction$MergeStrategy[];
        static valueOf(arg0: string): $CopyCustomDataFunction$MergeStrategy;
        merge(arg0: $Tag_, arg1: $NbtPathArgument$NbtPath, arg2: $List_<$Tag_>): void;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$CopyCustomDataFunction$MergeStrategy>;
        static MERGE: $CopyCustomDataFunction$MergeStrategy;
        static REPLACE: $CopyCustomDataFunction$MergeStrategy;
        static APPEND: $CopyCustomDataFunction$MergeStrategy;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CopyCustomDataFunction$MergeStrategy}.
     */
    export type $CopyCustomDataFunction$MergeStrategy_ = "replace" | "append" | "merge";
    export class $SmeltItemFunction extends $LootItemConditionalFunction {
        static smelted(): $LootItemConditionalFunction$Builder<never>;
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static CODEC: $MapCodec<$SmeltItemFunction>;
    }
    export class $FilteredFunction extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static CODEC: $MapCodec<$FilteredFunction>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $ItemPredicate_, arg2: $LootItemFunction);
    }
    export class $ExplorationMapFunction$Builder extends $LootItemConditionalFunction$Builder<$ExplorationMapFunction$Builder> {
        setMapDecoration(arg0: $Holder_<$MapDecorationType>): $ExplorationMapFunction$Builder;
        setSkipKnownStructures(arg0: boolean): $ExplorationMapFunction$Builder;
        setSearchRadius(arg0: number): $ExplorationMapFunction$Builder;
        setZoom(arg0: number): $ExplorationMapFunction$Builder;
        setDestination(arg0: $TagKey_<$Structure>): $ExplorationMapFunction$Builder;
        constructor();
        set mapDecoration(value: $Holder_<$MapDecorationType>);
        set skipKnownStructures(value: boolean);
        set searchRadius(value: number);
        set zoom(value: number);
        set destination(value: $TagKey_<$Structure>);
    }
    export class $SetStewEffectFunction extends $LootItemConditionalFunction {
        static stewEffect(): $SetStewEffectFunction$Builder;
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static CODEC: $MapCodec<$SetStewEffectFunction>;
    }
    export class $ListOperation$ReplaceSection extends $Record implements $ListOperation {
        size(): (number) | undefined;
        mode(): $ListOperation$Type;
        apply<T>(arg0: $List_<T>, arg1: $List_<T>, arg2: number): $List<T>;
        offset(): number;
        apply<T>(arg0: $List_<T>, arg1: $List_<T>): $List<T>;
        static MAP_CODEC: $MapCodec<$ListOperation$ReplaceSection>;
        constructor(arg0: number);
        constructor(arg0: number, arg1: (number) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ListOperation$ReplaceSection}.
     */
    export type $ListOperation$ReplaceSection_ = { size?: (number) | undefined, offset?: number,  } | [size?: (number) | undefined, offset?: number, ];
    export class $CopyNameFunction$NameSource extends $Enum<$CopyNameFunction$NameSource> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $CopyNameFunction$NameSource[];
        static valueOf(arg0: string): $CopyNameFunction$NameSource;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$CopyNameFunction$NameSource>;
        static LAST_DAMAGE_PLAYER: $CopyNameFunction$NameSource;
        static BLOCK_ENTITY: $CopyNameFunction$NameSource;
        static THIS: $CopyNameFunction$NameSource;
        static ATTACKING_ENTITY: $CopyNameFunction$NameSource;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CopyNameFunction$NameSource}.
     */
    export type $CopyNameFunction$NameSource_ = "this" | "attacking_entity" | "last_damage_player" | "block_entity" | string;
    export class $SetAttributesFunction$Modifier extends $Record {
        attribute(): $Holder<$Attribute>;
        amount(): $NumberProvider;
        slots(): $List<$EquipmentSlotGroup>;
        operation(): $AttributeModifier$Operation;
        id(): $ResourceLocation;
        static CODEC: $Codec<$SetAttributesFunction$Modifier>;
    }
    /**
     * Values that may be interpreted as {@link $SetAttributesFunction$Modifier}.
     */
    export type $SetAttributesFunction$Modifier_ = { operation?: $AttributeModifier$Operation_, amount?: $NumberProvider_, slots?: $List_<$EquipmentSlotGroup_>, id?: $ResourceLocation_, attribute?: $Holder_<$Attribute>,  } | [operation?: $AttributeModifier$Operation_, amount?: $NumberProvider_, slots?: $List_<$EquipmentSlotGroup_>, id?: $ResourceLocation_, attribute?: $Holder_<$Attribute>, ];
    export class $CopyBlockState extends $LootItemConditionalFunction {
        static copyState(arg0: $Block_): $CopyBlockState$Builder;
        static CODEC: $MapCodec<$CopyBlockState>;
    }
    export class $SetInstrumentFunction extends $LootItemConditionalFunction {
        static setInstrumentOptions(arg0: $TagKey_<$Instrument>): $LootItemConditionalFunction$Builder<never>;
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static CODEC: $MapCodec<$SetInstrumentFunction>;
        static set instrumentOptions(value: $TagKey_<$Instrument>);
    }
    export class $ListOperation$Insert extends $Record implements $ListOperation {
        mode(): $ListOperation$Type;
        apply<T>(arg0: $List_<T>, arg1: $List_<T>, arg2: number): $List<T>;
        offset(): number;
        apply<T>(arg0: $List_<T>, arg1: $List_<T>): $List<T>;
        static MAP_CODEC: $MapCodec<$ListOperation$Insert>;
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $ListOperation$Insert}.
     */
    export type $ListOperation$Insert_ = { offset?: number,  } | [offset?: number, ];
    export class $ApplyBonusCount$BinomialWithBonusCount extends $Record implements $ApplyBonusCount$Formula {
    }
    /**
     * Values that may be interpreted as {@link $ApplyBonusCount$BinomialWithBonusCount}.
     */
    export type $ApplyBonusCount$BinomialWithBonusCount_ = { probability?: number, extraRounds?: number,  } | [probability?: number, extraRounds?: number, ];
    export class $EnchantRandomlyFunction extends $LootItemConditionalFunction {
        static randomEnchantment(): $EnchantRandomlyFunction$Builder;
        static randomApplicableEnchantment(arg0: $HolderLookup$Provider): $EnchantRandomlyFunction$Builder;
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static CODEC: $MapCodec<$EnchantRandomlyFunction>;
    }
    export class $ModifyContainerContents extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static CODEC: $MapCodec<$ModifyContainerContents>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $ContainerComponentManipulator<never>, arg2: $LootItemFunction);
    }
    export class $SetComponentsFunction extends $LootItemConditionalFunction implements $SetComponentsFunctionAccessor, $SetComponentsLootFunctionAccessor {
        static setComponent<T>(arg0: $DataComponentType_<T>, arg1: T): $LootItemConditionalFunction$Builder<never>;
        static create$lootjs_$md$68cb88$0(arg0: $List_<any>, arg1: $DataComponentPatch_): $SetComponentsFunction;
        static createSetComponentsLootFunction$owo_$md$68cb88$1(arg0: $List_<any>, arg1: $DataComponentPatch_): $SetComponentsFunction;
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static CODEC: $MapCodec<$SetComponentsFunction>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $DataComponentPatch_);
    }
    export class $ListOperation$Type extends $Enum<$ListOperation$Type> implements $StringRepresentable {
        getSerializedName(): string;
        mapCodec(): $MapCodec<$ListOperation>;
        static values(): $ListOperation$Type[];
        static valueOf(arg0: string): $ListOperation$Type;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$ListOperation$Type>;
        static INSERT: $ListOperation$Type;
        static REPLACE_ALL: $ListOperation$Type;
        static APPEND: $ListOperation$Type;
        static REPLACE_SECTION: $ListOperation$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ListOperation$Type}.
     */
    export type $ListOperation$Type_ = "replace_all" | "replace_section" | "insert" | "append";
    export class $SetBookCoverFunction extends $LootItemConditionalFunction {
        static CODEC: $MapCodec<$SetBookCoverFunction>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: ($Filterable_<string>) | undefined, arg2: (string) | undefined, arg3: (number) | undefined);
    }
    export class $SetBannerPatternFunction$Builder extends $LootItemConditionalFunction$Builder<$SetBannerPatternFunction$Builder> {
        addPattern(arg0: $Holder_<$BannerPattern>, arg1: $DyeColor_): $SetBannerPatternFunction$Builder;
    }
    export class $ApplyBonusCount$Formula {
    }
    export interface $ApplyBonusCount$Formula {
        calculateNewCount(arg0: $RandomSource, arg1: number, arg2: number): number;
        getType(): $ApplyBonusCount$FormulaType;
        get type(): $ApplyBonusCount$FormulaType;
    }
    export class $SetWrittenBookPagesFunction extends $LootItemConditionalFunction {
        apply(arg0: $WrittenBookContent_): $WrittenBookContent;
        static PAGE_CODEC: $Codec<$Component>;
        static CODEC: $MapCodec<$SetWrittenBookPagesFunction>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $List_<$Filterable_<$Component_>>, arg2: $ListOperation);
    }
    export class $ListOperation$Append implements $ListOperation {
        mode(): $ListOperation$Type;
        apply<T>(arg0: $List_<T>, arg1: $List_<T>, arg2: number): $List<T>;
        apply<T>(arg0: $List_<T>, arg1: $List_<T>): $List<T>;
        static MAP_CODEC: $MapCodec<$ListOperation$Append>;
        static INSTANCE: $ListOperation$Append;
    }
    export class $EnchantRandomlyFunction$Builder extends $LootItemConditionalFunction$Builder<$EnchantRandomlyFunction$Builder> {
        withOneOf(arg0: $HolderSet_<$Enchantment>): $EnchantRandomlyFunction$Builder;
        withEnchantment(arg0: $Holder_<$Enchantment>): $EnchantRandomlyFunction$Builder;
        allowingIncompatibleEnchantments(): $EnchantRandomlyFunction$Builder;
        constructor();
    }
    export interface $LootItemFunctionType<T> extends RegistryMarked<RegistryTypes.LootFunctionTypeTag, RegistryTypes.LootFunctionType> {}
    export class $LootItemFunctionType<T extends $LootItemFunction> extends $Record {
        codec(): $MapCodec<T>;
        constructor(arg0: $MapCodec_<T>);
    }
    /**
     * Values that may be interpreted as {@link $LootItemFunctionType}.
     */
    export type $LootItemFunctionType_<T> = RegistryTypes.LootFunctionType | { codec?: $MapCodec_<$LootItemFunction>,  } | [codec?: $MapCodec_<$LootItemFunction>, ];
    export class $ToggleTooltips extends $LootItemConditionalFunction {
        static CODEC: $MapCodec<$ToggleTooltips>;
        static TOGGLES: $Map<$DataComponentType<never>, $ToggleTooltips$ComponentToggle<never>>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $Map_<$ToggleTooltips$ComponentToggle_<never>, boolean>);
    }
    export class $SetEnchantmentsFunction extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static CODEC: $MapCodec<$SetEnchantmentsFunction>;
    }
    export class $SetEnchantmentsFunction$Builder extends $LootItemConditionalFunction$Builder<$SetEnchantmentsFunction$Builder> {
        withEnchantment(arg0: $Holder_<$Enchantment>, arg1: $NumberProvider_): $SetEnchantmentsFunction$Builder;
        constructor(arg0: boolean);
        constructor();
    }
    export class $ApplyBonusCount$OreDrops extends $Record implements $ApplyBonusCount$Formula {
    }
    /**
     * Values that may be interpreted as {@link $ApplyBonusCount$OreDrops}.
     */
    export type $ApplyBonusCount$OreDrops_ = {  } | [];
    export class $ToggleTooltips$ComponentToggle<T> extends $Record {
        applyIfPresent(arg0: $ItemStack_, arg1: boolean): void;
        setter(): $ToggleTooltips$TooltipWither<T>;
        type(): $DataComponentType<T>;
    }
    /**
     * Values that may be interpreted as {@link $ToggleTooltips$ComponentToggle}.
     */
    export type $ToggleTooltips$ComponentToggle_<T> = { type?: $DataComponentType_<any>, setter?: $ToggleTooltips$TooltipWither_<any>,  } | [type?: $DataComponentType_<any>, setter?: $ToggleTooltips$TooltipWither_<any>, ];
    export class $LootItemConditionalFunction implements $LootItemFunction, $LootItemFunctionExtension {
        static simpleBuilder(arg0: $Function_<$List<$LootItemCondition>, $LootItemFunction>): $LootItemConditionalFunction$Builder<never>;
        lootjs$when(arg0: $Consumer_<any>): $LootItemFunction;
        apply(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        validate(arg0: $ValidationContext): void;
        getType(): $LootItemFunctionType<$LootItemConditionalFunction>;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        andThen<V>(arg0: $Function_<$ItemStack, V>): $BiFunction<$ItemStack, $LootContext, V>;
        get type(): $LootItemFunctionType<$LootItemConditionalFunction>;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $CopyComponentsFunction extends $LootItemConditionalFunction {
        static copyComponents(arg0: $CopyComponentsFunction$Source_): $CopyComponentsFunction$Builder;
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static CODEC: $MapCodec<$CopyComponentsFunction>;
    }
    export class $ListOperation$StandAlone<T> extends $Record {
        static codec<T>(arg0: $Codec<T>, arg1: number): $Codec<$ListOperation$StandAlone<T>>;
        operation(): $ListOperation;
        value(): $List<T>;
        apply(arg0: $List_<T>): $List<T>;
        constructor(arg0: $List_<T>, arg1: $ListOperation);
    }
    /**
     * Values that may be interpreted as {@link $ListOperation$StandAlone}.
     */
    export type $ListOperation$StandAlone_<T> = { value?: $List_<any>, operation?: $ListOperation,  } | [value?: $List_<any>, operation?: $ListOperation, ];
    export class $SetCustomModelDataFunction extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $NumberProvider_);
    }
    export class $CopyComponentsFunction$Source extends $Enum<$CopyComponentsFunction$Source> implements $StringRepresentable {
        getSerializedName(): string;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        get(arg0: $LootContext): $DataComponentMap;
        static values(): $CopyComponentsFunction$Source[];
        static valueOf(arg0: string): $CopyComponentsFunction$Source;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$CopyComponentsFunction$Source>;
        static BLOCK_ENTITY: $CopyComponentsFunction$Source;
        get serializedName(): string;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CopyComponentsFunction$Source}.
     */
    export type $CopyComponentsFunction$Source_ = "block_entity";
    export class $FillPlayerHead extends $LootItemConditionalFunction {
        static fillPlayerHead(arg0: $LootContext$EntityTarget_): $LootItemConditionalFunction$Builder<never>;
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static CODEC: $MapCodec<$FillPlayerHead>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $LootContext$EntityTarget_);
    }
    export class $SetContainerContents extends $LootItemConditionalFunction {
        static setContents(arg0: $ContainerComponentManipulator<never>): $SetContainerContents$Builder;
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static CODEC: $MapCodec<$SetContainerContents>;
        static set contents(value: $ContainerComponentManipulator<never>);
    }
    export class $FunctionReference extends $LootItemConditionalFunction {
        static functionReference(arg0: $ResourceKey_<$LootItemFunction>): $LootItemConditionalFunction$Builder<never>;
        static CODEC: $MapCodec<$FunctionReference>;
    }
    export class $SetLoreFunction$Builder extends $LootItemConditionalFunction$Builder<$SetLoreFunction$Builder> {
        setResolutionContext(arg0: $LootContext$EntityTarget_): $SetLoreFunction$Builder;
        setMode(arg0: $ListOperation): $SetLoreFunction$Builder;
        addLine(arg0: $Component_): $SetLoreFunction$Builder;
        constructor();
        set resolutionContext(value: $LootContext$EntityTarget_);
        set mode(value: $ListOperation);
    }
    export class $SetItemDamageFunction extends $LootItemConditionalFunction {
        static setDamage(arg0: $NumberProvider_): $LootItemConditionalFunction$Builder<never>;
        static setDamage(arg0: $NumberProvider_, arg1: boolean): $LootItemConditionalFunction$Builder<never>;
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static CODEC: $MapCodec<$SetItemDamageFunction>;
    }
    export class $ToggleTooltips$TooltipWither<T> {
    }
    export interface $ToggleTooltips$TooltipWither<T> {
        withTooltip(arg0: T, arg1: boolean): T;
    }
    /**
     * Values that may be interpreted as {@link $ToggleTooltips$TooltipWither}.
     */
    export type $ToggleTooltips$TooltipWither_<T> = ((arg0: T, arg1: boolean) => T);
    export class $ExplorationMapFunction extends $LootItemConditionalFunction implements $IExplorationFunctionExtension {
        handler$bfk000$supplementaries$supp$turnToQuill(stack: $ItemStack_, context: $LootContext, cir: $CallbackInfoReturnable<any>, pos: $Vec3_, level: $ServerLevel): void;
        static makeExplorationMap(): $ExplorationMapFunction$Builder;
        supplementaries$getCustomDecoration(): $Holder<any>;
        supplementaries$setCustomDecoration(resourceLocation: $Holder_<any>): void;
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static DEFAULT_ZOOM: number;
        static CODEC: $MapCodec<$ExplorationMapFunction>;
        static DEFAULT_DECORATION: $Holder<$MapDecorationType>;
        static DEFAULT_SKIP_EXISTING: boolean;
        static DEFAULT_DESTINATION: $TagKey<$Structure>;
        destination: $TagKey<$Structure>;
        zoom: number;
        mapDecoration: $Holder<$MapDecorationType>;
        skipKnownStructures: boolean;
        static DEFAULT_SEARCH_RADIUS: number;
        searchRadius: number;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $TagKey_<$Structure>, arg2: $Holder_<$MapDecorationType>, arg3: number, arg4: number, arg5: boolean);
    }
    export class $ApplyExplosionDecay extends $LootItemConditionalFunction {
        static explosionDecay(): $LootItemConditionalFunction$Builder<never>;
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static CODEC: $MapCodec<$ApplyExplosionDecay>;
    }
    export class $SetBannerPatternFunction extends $LootItemConditionalFunction {
        static setBannerPattern(arg0: boolean): $SetBannerPatternFunction$Builder;
        static CODEC: $MapCodec<$SetBannerPatternFunction>;
        static set bannerPattern(value: boolean);
    }
    export class $SetItemFunction extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static CODEC: $MapCodec<$SetItemFunction>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $Holder_<$Item>);
    }
    export class $FunctionUserBuilder<T extends $FunctionUserBuilder<T>> {
    }
    export interface $FunctionUserBuilder<T extends $FunctionUserBuilder<T>> {
        unwrap(): T;
        apply(arg0: $LootItemFunction$Builder_): T;
        apply<E>(arg0: E[], arg1: $Function_<E, $LootItemFunction$Builder>): T;
        apply<E>(arg0: $Iterable_<E>, arg1: $Function_<E, $LootItemFunction$Builder>): T;
    }
    export class $EnchantWithLevelsFunction extends $LootItemConditionalFunction {
        static enchantWithLevels(arg0: $HolderLookup$Provider, arg1: $NumberProvider_): $EnchantWithLevelsFunction$Builder;
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static CODEC: $MapCodec<$EnchantWithLevelsFunction>;
    }
    export class $SetAttributesFunction$ModifierBuilder {
        forSlot(arg0: $EquipmentSlotGroup_): $SetAttributesFunction$ModifierBuilder;
        build(): $SetAttributesFunction$Modifier;
        constructor(arg0: $ResourceLocation_, arg1: $Holder_<$Attribute>, arg2: $AttributeModifier$Operation_, arg3: $NumberProvider_);
    }
    export class $SetStewEffectFunction$EffectEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SetStewEffectFunction$EffectEntry}.
     */
    export type $SetStewEffectFunction$EffectEntry_ = { effect?: $Holder_<$MobEffect>, duration?: $NumberProvider_,  } | [effect?: $Holder_<$MobEffect>, duration?: $NumberProvider_, ];
    export class $SetWritableBookPagesFunction extends $LootItemConditionalFunction {
        apply(arg0: $WritableBookContent_): $WritableBookContent;
        static CODEC: $MapCodec<$SetWritableBookPagesFunction>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $List_<$Filterable_<string>>, arg2: $ListOperation);
    }
    export class $CopyNameFunction extends $LootItemConditionalFunction {
        static copyName(arg0: $CopyNameFunction$NameSource_): $LootItemConditionalFunction$Builder<never>;
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static CODEC: $MapCodec<$CopyNameFunction>;
    }
    export class $CopyCustomDataFunction$CopyOperation extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $CopyCustomDataFunction$CopyOperation}.
     */
    export type $CopyCustomDataFunction$CopyOperation_ = { op?: $CopyCustomDataFunction$MergeStrategy_, sourcePath?: $NbtPathArgument$NbtPath, targetPath?: $NbtPathArgument$NbtPath,  } | [op?: $CopyCustomDataFunction$MergeStrategy_, sourcePath?: $NbtPathArgument$NbtPath, targetPath?: $NbtPathArgument$NbtPath, ];
}
