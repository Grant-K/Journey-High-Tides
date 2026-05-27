import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $LootItemAccessor } from "@package/com/jesz/createdieselgenerators/mixins";
import { $FunctionUserBuilder, $LootItemFunction$Builder, $LootItemFunction$Builder_, $LootItemFunction } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $List, $Collection_, $List_ } from "@package/java/util";
import { $AccessorCompositeEntryBase, $AccessorLootPoolSingletonContainer, $AccessorDynamicLoot, $AccessorLootItem, $AccessorTagEntry, $AccessorNestedLootTable } from "@package/net/darkhax/bookshelf/common/mixin/access/loot";
import { $Predicate, $Consumer, $Function_, $Consumer_, $BiFunction } from "@package/java/util/function";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $UnificationLookup } from "@package/com/almostreliable/unified/api/unification";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $CompositeEntryBaseExtension } from "@package/com/almostreliable/lootjs/loot/extension";
import { $LootItemCondition$Builder_, $ConditionUserBuilder, $LootItemCondition$Builder, $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $Iterable_, $Record } from "@package/java/lang";
import { $ValidationContext, $LootContext, $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $LootUnificationHandler } from "@package/com/almostreliable/unified/unification/loot";

declare module "@package/net/minecraft/world/level/storage/loot/entries" {
    export class $LootPoolEntryContainer implements $ComposableEntryContainer {
        validate(arg0: $ValidationContext): void;
        getType(): $LootPoolEntryType;
        or(arg0: $ComposableEntryContainer_): $ComposableEntryContainer;
        and(arg0: $ComposableEntryContainer_): $ComposableEntryContainer;
        compositeCondition: $Predicate<$LootContext>;
        conditions: $List<$LootItemCondition>;
        get type(): $LootPoolEntryType;
    }
    export class $LootPoolSingletonContainer extends $LootPoolEntryContainer implements $AccessorLootPoolSingletonContainer {
        static simpleBuilder(arg0: $LootPoolSingletonContainer$EntryConstructor_): $LootPoolSingletonContainer$Builder<never>;
        bookshelf$weight(): number;
        bookshelf$quality(): number;
        compositeFunction: $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        compositeCondition: $Predicate<$LootContext>;
        functions: $List<$LootItemFunction>;
        weight: number;
        static DEFAULT_QUALITY: number;
        conditions: $List<$LootItemCondition>;
        static DEFAULT_WEIGHT: number;
        quality: number;
    }
    export class $EntryGroup$Builder extends $LootPoolEntryContainer$Builder<$EntryGroup$Builder> {
        constructor(...arg0: $LootPoolEntryContainer$Builder<never>[]);
    }
    export class $NestedLootTable extends $LootPoolSingletonContainer implements $AccessorNestedLootTable {
        createItemStack(arg0: $Consumer_<$ItemStack>, arg1: $LootContext): void;
        static lootTableReference(arg0: $ResourceKey_<$LootTable>): $LootPoolSingletonContainer$Builder<never>;
        static inlineLootTable(arg0: $LootTable): $LootPoolSingletonContainer$Builder<never>;
        bookshelf$contents(): $Either<$ResourceKey<$LootTable>, $LootTable>;
        compositeFunction: $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        compositeCondition: $Predicate<$LootContext>;
        static CODEC: $MapCodec<$NestedLootTable>;
        functions: $List<$LootItemFunction>;
        contents: $Either<$ResourceKey<$LootTable>, $LootTable>;
        weight: number;
        static DEFAULT_QUALITY: number;
        conditions: $List<$LootItemCondition>;
        static DEFAULT_WEIGHT: number;
        quality: number;
        constructor(arg0: $Either<$ResourceKey_<$LootTable>, $LootTable>, arg1: number, arg2: number, arg3: $List_<$LootItemCondition>, arg4: $List_<$LootItemFunction>);
    }
    export class $EmptyLootItem extends $LootPoolSingletonContainer {
        createItemStack(arg0: $Consumer_<$ItemStack>, arg1: $LootContext): void;
        static emptyItem(): $LootPoolSingletonContainer$Builder<never>;
        compositeFunction: $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        compositeCondition: $Predicate<$LootContext>;
        static CODEC: $MapCodec<$EmptyLootItem>;
        functions: $List<$LootItemFunction>;
        weight: number;
        static DEFAULT_QUALITY: number;
        conditions: $List<$LootItemCondition>;
        static DEFAULT_WEIGHT: number;
        quality: number;
        constructor(arg0: number, arg1: number, arg2: $List_<$LootItemCondition>, arg3: $List_<$LootItemFunction>);
    }
    export class $LootPoolSingletonContainer$EntryConstructor {
    }
    export interface $LootPoolSingletonContainer$EntryConstructor {
    }
    /**
     * Values that may be interpreted as {@link $LootPoolSingletonContainer$EntryConstructor}.
     */
    export type $LootPoolSingletonContainer$EntryConstructor_ = (() => void);
    export class $AlternativesEntry$Builder extends $LootPoolEntryContainer$Builder<$AlternativesEntry$Builder> {
        constructor(...arg0: $LootPoolEntryContainer$Builder<never>[]);
    }
    export class $DynamicLoot extends $LootPoolSingletonContainer implements $AccessorDynamicLoot {
        createItemStack(arg0: $Consumer_<$ItemStack>, arg1: $LootContext): void;
        static dynamicEntry(arg0: $ResourceLocation_): $LootPoolSingletonContainer$Builder<never>;
        bookshelf$name(): $ResourceLocation;
        compositeFunction: $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        compositeCondition: $Predicate<$LootContext>;
        static CODEC: $MapCodec<$DynamicLoot>;
        functions: $List<$LootItemFunction>;
        name: $ResourceLocation;
        weight: number;
        static DEFAULT_QUALITY: number;
        conditions: $List<$LootItemCondition>;
        static DEFAULT_WEIGHT: number;
        quality: number;
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: $List_<$LootItemCondition>, arg4: $List_<$LootItemFunction>);
    }
    export class $CompositeEntryBase extends $LootPoolEntryContainer implements $LootUnificationHandler, $AccessorCompositeEntryBase, $CompositeEntryBaseExtension {
        static createCodec<T extends $CompositeEntryBase>(arg0: $CompositeEntryBase$CompositeEntryConstructor_<T>): $MapCodec<T>;
        almostunified$unify(lookup: $UnificationLookup): boolean;
        lootjs$getEntries(): $List<any>;
        bookshelf$children(): $List<$LootPoolEntryContainer>;
        compositeCondition: $Predicate<$LootContext>;
        children: $List<$LootPoolEntryContainer>;
        conditions: $List<$LootItemCondition>;
    }
    export class $AlternativesEntry extends $CompositeEntryBase {
        static alternatives<E>(arg0: $Collection_<E>, arg1: $Function_<E, $LootPoolEntryContainer$Builder<never>>): $AlternativesEntry$Builder;
        static alternatives(...arg0: $LootPoolEntryContainer$Builder<never>[]): $AlternativesEntry$Builder;
        compositeCondition: $Predicate<$LootContext>;
        static CODEC: $MapCodec<$AlternativesEntry>;
        children: $List<$LootPoolEntryContainer>;
        conditions: $List<$LootItemCondition>;
        constructor(arg0: $List_<$LootPoolEntryContainer>, arg1: $List_<$LootItemCondition>);
    }
    export class $TagEntry extends $LootPoolSingletonContainer implements $AccessorTagEntry {
        createItemStack(arg0: $Consumer_<$ItemStack>, arg1: $LootContext): void;
        static expandTag(arg0: $TagKey_<$Item>): $LootPoolSingletonContainer$Builder<never>;
        static tagContents(arg0: $TagKey_<$Item>): $LootPoolSingletonContainer$Builder<never>;
        bookshelf$tag(): $TagKey<$Item>;
        bookshelf$expand(): boolean;
        compositeFunction: $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        compositeCondition: $Predicate<$LootContext>;
        static CODEC: $MapCodec<$TagEntry>;
        functions: $List<$LootItemFunction>;
        weight: number;
        static DEFAULT_QUALITY: number;
        tag: $TagKey<$Item>;
        conditions: $List<$LootItemCondition>;
        static DEFAULT_WEIGHT: number;
        quality: number;
        constructor(arg0: $TagKey_<$Item>, arg1: boolean, arg2: number, arg3: number, arg4: $List_<$LootItemCondition>, arg5: $List_<$LootItemFunction>);
    }
    export class $LootItem extends $LootPoolSingletonContainer implements $LootUnificationHandler, $AccessorLootItem, $LootItemAccessor {
        createItemStack(arg0: $Consumer_<$ItemStack>, arg1: $LootContext): void;
        static create$bookshelf_$md$68cb88$0(arg0: $Holder_<any>, arg1: number, arg2: number, arg3: $List_<any>, arg4: $List_<any>): $LootItem;
        static lootTableItem(arg0: $ItemLike_): $LootPoolSingletonContainer$Builder<never>;
        almostunified$unify(lookup: $UnificationLookup): boolean;
        bookshelf$item(): $Holder<$Item>;
        getItem(): $Holder<$Item>;
        compositeFunction: $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        compositeCondition: $Predicate<$LootContext>;
        item: $Holder<$Item>;
        static CODEC: $MapCodec<$LootItem>;
        functions: $List<$LootItemFunction>;
        weight: number;
        static DEFAULT_QUALITY: number;
        conditions: $List<$LootItemCondition>;
        static DEFAULT_WEIGHT: number;
        quality: number;
        constructor(arg0: $Holder_<$Item>, arg1: number, arg2: number, arg3: $List_<$LootItemCondition>, arg4: $List_<$LootItemFunction>);
    }
    export class $LootPoolEntry {
    }
    export interface $LootPoolEntry {
        createItemStack(arg0: $Consumer_<$ItemStack>, arg1: $LootContext): void;
        getWeight(arg0: number): number;
    }
    export class $LootPoolSingletonContainer$Builder<T extends $LootPoolSingletonContainer$Builder<T>> extends $LootPoolEntryContainer$Builder<T> implements $FunctionUserBuilder<T> {
        setWeight(arg0: number): T;
        setQuality(arg0: number): T;
        apply(arg0: $LootItemFunction$Builder_): T;
        apply<E>(arg0: E[], arg1: $Function_<E, $LootItemFunction$Builder>): T;
        apply<E>(arg0: $Iterable_<E>, arg1: $Function_<E, $LootItemFunction$Builder>): T;
        unwrap(): T;
        constructor();
        set weight(value: number);
        set quality(value: number);
    }
    export class $LootPoolSingletonContainer$DummyBuilder extends $LootPoolSingletonContainer$Builder<$LootPoolSingletonContainer$DummyBuilder> {
    }
    export class $LootPoolEntries {
        static ITEM: $LootPoolEntryType;
        static GROUP: $LootPoolEntryType;
        static CODEC: $Codec<$LootPoolEntryContainer>;
        static SEQUENCE: $LootPoolEntryType;
        static ALTERNATIVES: $LootPoolEntryType;
        static LOOT_TABLE: $LootPoolEntryType;
        static TAG: $LootPoolEntryType;
        static EMPTY: $LootPoolEntryType;
        static DYNAMIC: $LootPoolEntryType;
        constructor();
    }
    export class $LootPoolSingletonContainer$EntryBase implements $LootPoolEntry {
    }
    export interface $LootPoolEntryType extends RegistryMarked<RegistryTypes.LootPoolEntryTypeTag, RegistryTypes.LootPoolEntryType> {}
    export class $SequentialEntry$Builder extends $LootPoolEntryContainer$Builder<$SequentialEntry$Builder> {
        constructor(...arg0: $LootPoolEntryContainer$Builder<never>[]);
    }
    export class $LootPoolEntryType extends $Record {
        codec(): $MapCodec<$LootPoolEntryContainer>;
        constructor(arg0: $MapCodec_<$LootPoolEntryContainer>);
    }
    /**
     * Values that may be interpreted as {@link $LootPoolEntryType}.
     */
    export type $LootPoolEntryType_ = RegistryTypes.LootPoolEntryType | { codec?: $MapCodec_<$LootPoolEntryContainer>,  } | [codec?: $MapCodec_<$LootPoolEntryContainer>, ];
    export class $CompositeEntryBase$CompositeEntryConstructor<T extends $CompositeEntryBase> {
    }
    export interface $CompositeEntryBase$CompositeEntryConstructor<T extends $CompositeEntryBase> {
        create(arg0: $List_<$LootPoolEntryContainer>, arg1: $List_<$LootItemCondition>): T;
    }
    /**
     * Values that may be interpreted as {@link $CompositeEntryBase$CompositeEntryConstructor}.
     */
    export type $CompositeEntryBase$CompositeEntryConstructor_<T> = ((arg0: $List<$LootPoolEntryContainer>, arg1: $List<$LootItemCondition>) => T);
    export class $SequentialEntry extends $CompositeEntryBase {
        static sequential(...arg0: $LootPoolEntryContainer$Builder<never>[]): $SequentialEntry$Builder;
        compositeCondition: $Predicate<$LootContext>;
        static CODEC: $MapCodec<$SequentialEntry>;
        children: $List<$LootPoolEntryContainer>;
        conditions: $List<$LootItemCondition>;
        constructor(arg0: $List_<$LootPoolEntryContainer>, arg1: $List_<$LootItemCondition>);
    }
    export class $ComposableEntryContainer {
        static ALWAYS_TRUE: $ComposableEntryContainer;
        static ALWAYS_FALSE: $ComposableEntryContainer;
    }
    export interface $ComposableEntryContainer {
        or(arg0: $ComposableEntryContainer_): $ComposableEntryContainer;
        and(arg0: $ComposableEntryContainer_): $ComposableEntryContainer;
        expand(arg0: $LootContext, arg1: $Consumer_<$LootPoolEntry>): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ComposableEntryContainer}.
     */
    export type $ComposableEntryContainer_ = ((arg0: $LootContext, arg1: $Consumer<$LootPoolEntry>) => boolean);
    export class $LootPoolEntryContainer$Builder<T extends $LootPoolEntryContainer$Builder<T>> implements $ConditionUserBuilder<T> {
        then(arg0: $LootPoolEntryContainer$Builder<never>): $SequentialEntry$Builder;
        otherwise(arg0: $LootPoolEntryContainer$Builder<never>): $AlternativesEntry$Builder;
        unwrap(): T;
        build(): $LootPoolEntryContainer;
        append(arg0: $LootPoolEntryContainer$Builder<never>): $EntryGroup$Builder;
        when<E>(arg0: $Iterable_<E>, arg1: $Function_<E, $LootItemCondition$Builder>): T;
        when(arg0: $LootItemCondition$Builder_): T;
        constructor();
    }
    export class $EntryGroup extends $CompositeEntryBase {
        static list(...arg0: $LootPoolEntryContainer$Builder<never>[]): $EntryGroup$Builder;
        compositeCondition: $Predicate<$LootContext>;
        static CODEC: $MapCodec<$EntryGroup>;
        children: $List<$LootPoolEntryContainer>;
        conditions: $List<$LootItemCondition>;
        constructor(arg0: $List_<$LootPoolEntryContainer>, arg1: $List_<$LootItemCondition>);
    }
}
