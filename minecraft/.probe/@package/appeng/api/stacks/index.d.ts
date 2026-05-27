import { $ItemLike_, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $FuzzyMode_ } from "@package/appeng/api/config";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $Spliterator, $Iterator, $List, $List_, $Collection, $Set } from "@package/java/util";
import { $AEKeyFilter } from "@package/appeng/api/storage";
import { $Consumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos_, $Registry } from "@package/net/minecraft/core";
import { $Object2LongMap$Entry } from "@package/it/unimi/dsi/fastutil/objects";
import { $Stream } from "@package/java/util/stream";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $Enum, $Record, $Class, $Object, $Iterable } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/appeng/api/stacks" {
    export class $AEKeyType {
        codec(): $MapCodec<$AEKey>;
        static fluids(): $AEKeyType;
        tryCast(arg0: $AEKey): $AEKey;
        getTagNames(): $Stream<$TagKey<never>>;
        getKeyClass(): $Class<$AEKey>;
        static items(): $AEKeyType;
        readFromPacket(arg0: $RegistryFriendlyByteBuf): $AEKey;
        formatAmount(arg0: number, arg1: $AmountFormat_): string;
        getAmountPerOperation(): number;
        supportsFuzzyRangeSearch(): boolean;
        static fromRawId(arg0: number): $AEKeyType;
        getAmountPerUnit(): number;
        getUnitSymbol(): string;
        getAmountPerByte(): number;
        loadKeyFromTag(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $AEKey;
        getRawId(): number;
        getDescription(): $Component;
        contains(arg0: $AEKey): boolean;
        filter(): $AEKeyFilter;
        getId(): $ResourceLocation;
        static CODEC: $Codec<$AEKeyType>;
        static REGISTRY_KEY: $ResourceKey<$Registry<$AEKeyType>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKeyType>;
        constructor(arg0: $ResourceLocation_, arg1: $Class<$AEKey>, arg2: $Component_);
        get tagNames(): $Stream<$TagKey<never>>;
        get keyClass(): $Class<$AEKey>;
        get amountPerOperation(): number;
        get amountPerUnit(): number;
        get unitSymbol(): string;
        get amountPerByte(): number;
        get rawId(): number;
        get description(): $Component;
        get id(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $AEKeyType}.
     */
    export type $AEKeyType_ = RegistryTypes.Ae2Keytypes;
    export class $KeyCounter implements $Iterable<$Object2LongMap$Entry<$AEKey>> {
        getFirstEntry(): $Object2LongMap$Entry<$AEKey>;
        getFirstEntry<T extends $AEKey>(arg0: $Class<T>): $Object2LongMap$Entry<$AEKey>;
        findFuzzy(arg0: $AEKey, arg1: $FuzzyMode_): $Collection<$Object2LongMap$Entry<$AEKey>>;
        removeZeros(): void;
        getFirstKey(): $AEKey;
        getFirstKey<T extends $AEKey>(arg0: $Class<T>): T;
        removeEmptySubmaps(): void;
        removeAll(arg0: $KeyCounter): void;
        remove(arg0: $AEKey, arg1: number): void;
        remove(arg0: $AEKey): number;
        size(): number;
        reset(): void;
        get(arg0: $AEKey): number;
        clear(): void;
        isEmpty(): boolean;
        add(arg0: $AEKey, arg1: number): void;
        iterator(): $Iterator<$Object2LongMap$Entry<$AEKey>>;
        addAll(arg0: $KeyCounter): void;
        set(arg0: $AEKey, arg1: number): void;
        keySet(): $Set<$AEKey>;
        spliterator(): $Spliterator<$Object2LongMap$Entry<$AEKey>>;
        forEach(arg0: $Consumer_<$Object2LongMap$Entry<$AEKey>>): void;
        constructor();
        [Symbol.iterator](): Iterator<$Object2LongMap$Entry<$AEKey>>
        get empty(): boolean;
    }
    export class $GenericStack extends $Record {
        static unwrapItemStack(arg0: $ItemStack_): $GenericStack;
        what(): $AEKey;
        static readBuffer(arg0: $RegistryFriendlyByteBuf): $GenericStack;
        amount(): number;
        static readTag(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $GenericStack;
        static writeTag(arg0: $HolderLookup$Provider, arg1: $GenericStack_): $CompoundTag;
        static fromItemStack(arg0: $ItemStack_): $GenericStack;
        static wrapInItemStack(arg0: $AEKey, arg1: number): $ItemStack;
        static wrapInItemStack(arg0: $GenericStack_): $ItemStack;
        static fromFluidStack(arg0: $FluidStack_): $GenericStack;
        static getStackSizeOrZero(arg0: $GenericStack_): number;
        static sum(arg0: $GenericStack_, arg1: $GenericStack_): $GenericStack;
        static writeBuffer(arg0: $GenericStack_, arg1: $RegistryFriendlyByteBuf): void;
        static isWrapped(arg0: $ItemStack_): boolean;
        static FAULT_TOLERANT_LIST_CODEC: $Codec<$List<$GenericStack>>;
        static CODEC: $Codec<$GenericStack>;
        static AMOUNT_FIELD: string;
        static FAULT_TOLERANT_NULLABLE_LIST_CODEC: $Codec<$List<$GenericStack>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $GenericStack>;
        constructor(what: $AEKey, amount: number);
    }
    /**
     * Values that may be interpreted as {@link $GenericStack}.
     */
    export type $GenericStack_ = { what?: $AEKey, amount?: number,  } | [what?: $AEKey, amount?: number, ];
    export class $AEItemKey extends $AEKey {
        getMaxStackSize(): number;
        static fromTag(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $AEItemKey;
        toStack(arg0: number): $ItemStack;
        toStack(): $ItemStack;
        isDamaged(): boolean;
        getItem(): $Item;
        static fromPacket(arg0: $RegistryFriendlyByteBuf): $AEItemKey;
        dropSecondary(): $AEItemKey;
        getReadOnlyStack(): $ItemStack;
        static is(arg0: $AEKey): boolean;
        is(arg0: $ItemLike_): boolean;
        static matches(arg0: $AEKey, arg1: $ItemStack_): boolean;
        matches(arg0: $ItemStack_): boolean;
        matches(arg0: $Ingredient_): boolean;
        static of(arg0: $ItemStack_): $AEItemKey;
        static of(arg0: $ItemLike_): $AEItemKey;
        static filter(): $AEKeyFilter;
        static CODEC: $Codec<$AEItemKey>;
        static MAP_CODEC: $MapCodec<$AEItemKey>;
        static TYPE_FIELD: string;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKey>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKey>;
        get maxStackSize(): number;
        get damaged(): boolean;
        get item(): $Item;
        get readOnlyStack(): $ItemStack;
    }
    export interface $AEKeyType extends RegistryMarked<RegistryTypes.Ae2KeytypesTag, RegistryTypes.Ae2Keytypes> {}
    export class $AEKey {
        static readKey(arg0: $RegistryFriendlyByteBuf): $AEKey;
        fuzzyEquals(arg0: $AEKey, arg1: $FuzzyMode_): boolean;
        hasComponents(): boolean;
        getDisplayName(): $Component;
        writeToPacket(arg0: $RegistryFriendlyByteBuf): void;
        formatAmount(arg0: number, arg1: $AmountFormat_): string;
        toTag(arg0: $HolderLookup$Provider): $CompoundTag;
        isTagged(arg0: $TagKey_<never>): boolean;
        getPrimaryKey(): $Object;
        getFuzzySearchMaxValue(): number;
        toTagGeneric(arg0: $HolderLookup$Provider): $CompoundTag;
        getAmountPerOperation(): number;
        supportsFuzzyRangeSearch(): boolean;
        getFuzzySearchValue(): number;
        static writeOptionalKey(arg0: $RegistryFriendlyByteBuf, arg1: $AEKey): void;
        static readOptionalKey(arg0: $RegistryFriendlyByteBuf): $AEKey;
        static fromTagGeneric(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $AEKey;
        dropSecondary(): $AEKey;
        wrapForDisplayOrFilter(): $ItemStack;
        addDrops(arg0: number, arg1: $List_<$ItemStack_>, arg2: $Level_, arg3: $BlockPos_): void;
        getAmountPerUnit(): number;
        getUnitSymbol(): string;
        getAmountPerByte(): number;
        static writeKey(arg0: $RegistryFriendlyByteBuf, arg1: $AEKey): void;
        getModId(): string;
        get<T>(arg0: $DataComponentType_<T>): T;
        matches(arg0: $GenericStack_): boolean;
        getId(): $ResourceLocation;
        getType(): $AEKeyType;
        static CODEC: $Codec<$AEKey>;
        static MAP_CODEC: $MapCodec<$AEKey>;
        static TYPE_FIELD: string;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKey>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKey>;
        constructor();
        get displayName(): $Component;
        get primaryKey(): $Object;
        get fuzzySearchMaxValue(): number;
        get amountPerOperation(): number;
        get fuzzySearchValue(): number;
        get amountPerUnit(): number;
        get unitSymbol(): string;
        get amountPerByte(): number;
        get modId(): string;
        get id(): $ResourceLocation;
        get type(): $AEKeyType;
    }
    export class $AmountFormat extends $Enum<$AmountFormat> {
        static values(): $AmountFormat[];
        static valueOf(arg0: string): $AmountFormat;
        static SLOT_LARGE_FONT: $AmountFormat;
        static SLOT: $AmountFormat;
        static FULL: $AmountFormat;
    }
    /**
     * Values that may be interpreted as {@link $AmountFormat}.
     */
    export type $AmountFormat_ = "full" | "slot" | "slot_large_font";
}
