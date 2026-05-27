import { $JsonObject_ } from "@package/com/google/gson";
import { $NumberProvider_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $Item_ } from "@package/net/minecraft/world/item";
import { $Spliterator, $Iterator, $List, $List_ } from "@package/java/util";
import { $LootFunctionList, $LootConditionList, $LootEntryList } from "@package/com/almostreliable/lootjs/loot";
import { $Consumer_, $UnaryOperator_, $Predicate_ } from "@package/java/util/function";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LootBucket, $LootType } from "@package/com/almostreliable/lootjs/core";
import { $ItemFilter_, $IdFilter_ } from "@package/com/almostreliable/lootjs/core/filters";
import { $Iterable } from "@package/java/lang";
import { $ItemLootEntry, $SimpleLootEntry, $LootEntry } from "@package/com/almostreliable/lootjs/core/entry";
import { $LootTable, $LootPool, $LootContext } from "@package/net/minecraft/world/level/storage/loot";
import { $LootContextParamSet } from "@package/net/minecraft/world/level/storage/loot/parameters";

declare module "@package/com/almostreliable/lootjs/loot/table" {
    export class $MutableLootTable implements $LootEntriesTransformer {
        onDrop(arg0: $PostLootAction_): $MutableLootTable;
        setRandomSequence(arg0: $ResourceLocation_): void;
        getRandomSequence(): $ResourceLocation;
        getLootType(): $LootType;
        getPools(): $List<$MutableLootPool>;
        createPool(): $MutableLootPool;
        createPool(arg0: $Consumer_<$MutableLootPool>): $MutableLootTable;
        getPoolByName(arg0: string): $MutableLootPool;
        writeToVanillaTable(): void;
        modifyPool(arg0: number, arg1: $Consumer_<$MutableLootPool>): $MutableLootTable;
        modifyPoolByName(arg0: string, arg1: $Consumer_<$MutableLootPool>): $MutableLootTable;
        firstPool(arg0: $Consumer_<$MutableLootPool>): $MutableLootTable;
        firstPool(): $MutableLootPool;
        modifyEntry(arg0: $UnaryOperator_<$SimpleLootEntry>, arg1: boolean): $MutableLootTable;
        getFunctions(): $LootFunctionList;
        clear(): $MutableLootTable;
        apply(arg0: $Consumer_<$LootFunctionList>): $MutableLootTable;
        getLocation(): $ResourceLocation;
        print(): void;
        getPool(arg0: number): $MutableLootPool;
        removeTag(arg0: string): $LootEntriesTransformer;
        removeTag(arg0: string, arg1: boolean): $LootEntriesTransformer;
        removeReference(arg0: $IdFilter_, arg1: boolean): $LootEntriesTransformer;
        removeReference(arg0: $IdFilter_): $LootEntriesTransformer;
        removeItem(arg0: $ItemFilter_, arg1: boolean): $LootEntriesTransformer;
        removeItem(arg0: $ItemFilter_): $LootEntriesTransformer;
        hasItem(arg0: $ItemFilter_): boolean;
        removeEntry(arg0: $Predicate_<$SimpleLootEntry>): $LootEntriesTransformer;
        replaceItem(arg0: $ItemFilter_, arg1: $Item_): $LootEntriesTransformer;
        replaceItem(arg0: $ItemFilter_, arg1: $Item_, arg2: boolean): $LootEntriesTransformer;
        modifyEntry(arg0: $UnaryOperator_<$SimpleLootEntry>): $LootEntriesTransformer;
        modifyItemEntry(arg0: $UnaryOperator_<$ItemLootEntry>): $LootEntriesTransformer;
        removeEntry(arg0: $Predicate_<$SimpleLootEntry>, arg1: boolean): $LootEntriesTransformer;
        constructor(arg0: $LootContextParamSet, arg1: $ResourceLocation_);
        constructor(arg0: $LootTable);
        constructor(arg0: $LootTable, arg1: $ResourceLocation_);
        get lootType(): $LootType;
        get pools(): $List<$MutableLootPool>;
        get functions(): $LootFunctionList;
        get location(): $ResourceLocation;
    }
    export class $PostLootAction {
    }
    export interface $PostLootAction {
        alter(arg0: $LootContext, arg1: $LootBucket): void;
    }
    /**
     * Values that may be interpreted as {@link $PostLootAction}.
     */
    export type $PostLootAction_ = ((arg0: $LootContext, arg1: $LootBucket) => void);
    export class $LootEntriesTransformer {
    }
    export interface $LootEntriesTransformer {
        removeTag(arg0: string): $LootEntriesTransformer;
        removeTag(arg0: string, arg1: boolean): $LootEntriesTransformer;
        removeReference(arg0: $IdFilter_, arg1: boolean): $LootEntriesTransformer;
        removeReference(arg0: $IdFilter_): $LootEntriesTransformer;
        removeItem(arg0: $ItemFilter_, arg1: boolean): $LootEntriesTransformer;
        removeItem(arg0: $ItemFilter_): $LootEntriesTransformer;
        hasItem(arg0: $ItemFilter_): boolean;
        removeEntry(arg0: $Predicate_<$SimpleLootEntry>): $LootEntriesTransformer;
        removeEntry(arg0: $Predicate_<$SimpleLootEntry>, arg1: boolean): $LootEntriesTransformer;
        replaceItem(arg0: $ItemFilter_, arg1: $Item_): $LootEntriesTransformer;
        replaceItem(arg0: $ItemFilter_, arg1: $Item_, arg2: boolean): $LootEntriesTransformer;
        modifyEntry(arg0: $UnaryOperator_<$SimpleLootEntry>): $LootEntriesTransformer;
        modifyEntry(arg0: $UnaryOperator_<$SimpleLootEntry>, arg1: boolean): $LootEntriesTransformer;
        modifyItemEntry(arg0: $UnaryOperator_<$ItemLootEntry>): $LootEntriesTransformer;
    }
    export class $LootEntryAppender {
    }
    export interface $LootEntryAppender {
        addCustomEntry(arg0: $JsonObject_): $LootEntryAppender;
        addEntry(arg0: $LootEntry): $LootEntryAppender;
    }
    /**
     * Values that may be interpreted as {@link $LootEntryAppender}.
     */
    export type $LootEntryAppender_ = ((arg0: $LootEntry) => $LootEntryAppender);
    export class $MutableLootPool implements $LootEntriesTransformer, $LootEntryAppender {
        rolls(arg0: $NumberProvider_): $MutableLootPool;
        bonusRolls(arg0: $NumberProvider_): $MutableLootPool;
        getVanillaPool(): $LootPool;
        getConditions(): $LootConditionList;
        removeEntry(arg0: $Predicate_<$SimpleLootEntry>, arg1: boolean): $MutableLootPool;
        when(arg0: $Consumer_<$LootConditionList>): $MutableLootPool;
        modifyEntry(arg0: $UnaryOperator_<$SimpleLootEntry>, arg1: boolean): $MutableLootPool;
        getEntries(): $LootEntryList;
        getFunctions(): $LootFunctionList;
        getName(): string;
        name(arg0: string): $MutableLootPool;
        apply(arg0: $Consumer_<$LootFunctionList>): $MutableLootPool;
        removeTag(arg0: string): $LootEntriesTransformer;
        removeTag(arg0: string, arg1: boolean): $LootEntriesTransformer;
        removeReference(arg0: $IdFilter_, arg1: boolean): $LootEntriesTransformer;
        removeReference(arg0: $IdFilter_): $LootEntriesTransformer;
        removeItem(arg0: $ItemFilter_, arg1: boolean): $LootEntriesTransformer;
        removeItem(arg0: $ItemFilter_): $LootEntriesTransformer;
        hasItem(arg0: $ItemFilter_): boolean;
        removeEntry(arg0: $Predicate_<$SimpleLootEntry>): $LootEntriesTransformer;
        replaceItem(arg0: $ItemFilter_, arg1: $Item_): $LootEntriesTransformer;
        replaceItem(arg0: $ItemFilter_, arg1: $Item_, arg2: boolean): $LootEntriesTransformer;
        modifyEntry(arg0: $UnaryOperator_<$SimpleLootEntry>): $LootEntriesTransformer;
        modifyItemEntry(arg0: $UnaryOperator_<$ItemLootEntry>): $LootEntriesTransformer;
        addCustomEntry(arg0: $JsonObject_): $LootEntryAppender;
        addEntry(arg0: $LootEntry): $LootEntryAppender;
        constructor(arg0: $LootPool);
        get vanillaPool(): $LootPool;
        get conditions(): $LootConditionList;
        get entries(): $LootEntryList;
        get functions(): $LootFunctionList;
    }
    export class $LootTableList implements $LootEntriesTransformer, $Iterable<$MutableLootTable> {
        onDrop(arg0: $PostLootAction_): $LootTableList;
        createPool(arg0: $Consumer_<$MutableLootPool>): $LootTableList;
        getTables(): $List<$MutableLootTable>;
        removeEntry(arg0: $Predicate_<$SimpleLootEntry>, arg1: boolean): $LootTableList;
        firstPool(arg0: $Consumer_<$MutableLootPool>): $LootTableList;
        modifyEntry(arg0: $UnaryOperator_<$SimpleLootEntry>, arg1: boolean): $LootTableList;
        clear(): $LootTableList;
        iterator(): $Iterator<$MutableLootTable>;
        apply(arg0: $Consumer_<$LootFunctionList>): $LootTableList;
        removeTag(arg0: string): $LootEntriesTransformer;
        removeTag(arg0: string, arg1: boolean): $LootEntriesTransformer;
        removeReference(arg0: $IdFilter_, arg1: boolean): $LootEntriesTransformer;
        removeReference(arg0: $IdFilter_): $LootEntriesTransformer;
        removeItem(arg0: $ItemFilter_, arg1: boolean): $LootEntriesTransformer;
        removeItem(arg0: $ItemFilter_): $LootEntriesTransformer;
        hasItem(arg0: $ItemFilter_): boolean;
        removeEntry(arg0: $Predicate_<$SimpleLootEntry>): $LootEntriesTransformer;
        replaceItem(arg0: $ItemFilter_, arg1: $Item_): $LootEntriesTransformer;
        replaceItem(arg0: $ItemFilter_, arg1: $Item_, arg2: boolean): $LootEntriesTransformer;
        modifyEntry(arg0: $UnaryOperator_<$SimpleLootEntry>): $LootEntriesTransformer;
        modifyItemEntry(arg0: $UnaryOperator_<$ItemLootEntry>): $LootEntriesTransformer;
        spliterator(): $Spliterator<$MutableLootTable>;
        forEach(arg0: $Consumer_<$MutableLootTable>): void;
        constructor(arg0: $List_<$MutableLootTable>);
        [Symbol.iterator](): Iterator<$MutableLootTable>
        get tables(): $List<$MutableLootTable>;
    }
    export class $PostLootActionOwner {
    }
    export interface $PostLootActionOwner {
        lootjs$setPostLootAction(arg0: $PostLootAction_): void;
        lootjs$getPostLootAction(): $PostLootAction;
    }
}
