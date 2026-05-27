import { $DataResult, $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $EventStream } from "@package/io/wispforest/owo/util";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $UUID_, $Set_, $Map, $Map$Entry, $Set, $Spliterator, $Iterator, $List, $Map_, $List_ } from "@package/java/util";
import { $EncoderCache, $Unit_, $Unit } from "@package/net/minecraft/util";
import { $Supplier_, $Consumer_, $Predicate_, $Predicate } from "@package/java/util/function";
import { $LockCode } from "@package/net/minecraft/world";
import { $Registry, $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Reference2ObjectMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $IDataComponentHolderExtension, $IDataComponentMapBuilderExtensions } from "@package/net/neoforged/neoforge/common/extensions";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes, DataComponentTypes } from "@special/types";
import { $ItemEnchantments } from "@package/net/minecraft/world/item/enchantment";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $ComponentMapImplAccessor } from "@package/io/wispforest/owo/mixin/ext";
import { $MapId } from "@package/net/minecraft/world/level/saveddata/maps";
import { $Iterable, $Record, $Object } from "@package/java/lang";
import { $DataComponentsAccessor } from "@package/org/embeddedt/modernfix/common/mixin/perf/encoder_cache_leak";
import { $ArmorTrim } from "@package/net/minecraft/world/item/armortrim";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Rarity, $Rarity_, $DyeColor, $DyeColor_, $ItemStack_, $AdventureModePredicate, $Instrument, $JukeboxPlayable } from "@package/net/minecraft/world/item";
import { $ItemLore, $ItemAttributeModifiers, $Fireworks, $CustomData, $ItemContainerContents, $Unbreakable, $MapPostProcessing, $MapItemColor, $BlockItemStateProperties, $DebugStickState, $WritableBookContent, $Tool, $ChargedProjectiles, $SuspiciousStewEffects, $MapDecorations, $CustomModelData, $DyedItemColor, $LodestoneTracker, $SeededContainerLoot, $WrittenBookContent, $BundleContents, $ResolvableProfile, $FireworkExplosion } from "@package/net/minecraft/world/item/component";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $PatchedDataComponentMapExtension } from "@package/io/wispforest/accessories/pond/stack";
import { $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $OwoComponentTypeBuilder } from "@package/io/wispforest/owo/serialization";
import { $SerializationContext, $Endec } from "@package/io/wispforest/endec";
import { $Stream } from "@package/java/util/stream";
import { $FoodProperties } from "@package/net/minecraft/world/food";
import { $PotionContents, $PotionContents_, $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ComponentFunctions } from "@package/dev/latvian/mods/kubejs/component";
import { $PotDecorations, $BeehiveBlockEntity$Occupant, $BannerPatternLayers } from "@package/net/minecraft/world/level/block/entity";
import { $FabricComponentMapBuilder } from "@package/net/fabricmc/fabric/api/item/v1";
import { $StreamCodec_, $StreamCodec } from "@package/net/minecraft/network/codec";
import { $ChangePublisher, $ChangeSubscriber } from "@package/net/caffeinemc/mods/lithium/common/util/change_tracking";

declare module "@package/net/minecraft/core/component" {
    export class $DataComponentPredicate implements $Predicate<$DataComponentMap> {
        asPatch(): $DataComponentPatch;
        alwaysMatches(): boolean;
        static allOf(arg0: $DataComponentMap_): $DataComponentPredicate;
        test(arg0: $DataComponentHolder_): boolean;
        test(arg0: $DataComponentMap_): boolean;
        static builder(): $DataComponentPredicate$Builder;
        or(arg0: $Predicate_<$DataComponentMap>): $Predicate<$DataComponentMap>;
        negate(): $Predicate<$DataComponentMap>;
        and(arg0: $Predicate_<$DataComponentMap>): $Predicate<$DataComponentMap>;
        static CODEC: $Codec<$DataComponentPredicate>;
        static EMPTY: $DataComponentPredicate;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $DataComponentPredicate>;
    }
    export class $DataComponentPatch {
        forget(arg0: $Predicate_<$DataComponentType<never>>): $DataComponentPatch;
        size(): number;
        get<T>(arg0: $DataComponentType_<T>): (T) | undefined;
        isEmpty(): boolean;
        split(): $DataComponentPatch$SplitResult;
        static builder(): $DataComponentPatch$Builder;
        entrySet(): $Set<$Map$Entry<$DataComponentType<never>, (never) | undefined>>;
        static CODEC: $Codec<$DataComponentPatch>;
        static EMPTY: $DataComponentPatch;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $DataComponentPatch>;
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $DataComponentPatch}.
     */
    export type $DataComponentPatch_ = Partial<DataComponentTypes.InputMap>;
    export class $DataComponentMap {
        static makeCodec(arg0: $Codec<$DataComponentType_<never>>): $Codec<$DataComponentMap>;
        static makeCodecFromMap(arg0: $Codec<$Map_<$DataComponentType_<never>, $Object>>): $Codec<$DataComponentMap>;
        static composite(arg0: $DataComponentMap_, arg1: $DataComponentMap_): $DataComponentMap;
        static builder(): $DataComponentMap$Builder;
        static CODEC: $Codec<$DataComponentMap>;
        static EMPTY: $DataComponentMap;
        [Symbol.iterator](): Iterator<$TypedDataComponent<never>>
    }
    export interface $DataComponentMap extends $Iterable<$TypedDataComponent<never>> {
        getTyped<T>(arg0: $DataComponentType_<T>): $TypedDataComponent<T>;
        has(arg0: $DataComponentType_<never>): boolean;
        size(): number;
        get<T>(arg0: $DataComponentType_<T>): T;
        isEmpty(): boolean;
        iterator(): $Iterator<$TypedDataComponent<never>>;
        stream(): $Stream<$TypedDataComponent<never>>;
        filter(arg0: $Predicate_<$DataComponentType<never>>): $DataComponentMap;
        keySet(): $Set<$DataComponentType<never>>;
        getOrDefault<T>(arg0: $DataComponentType_<T>, arg1: T): T;
        [Symbol.iterator](): Iterator<$TypedDataComponent<never>>
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $DataComponentMap}.
     */
    export type $DataComponentMap_ = Partial<DataComponentTypes.InputMap>;
    export class $DataComponentPredicate$Builder {
        build(): $DataComponentPredicate;
        expect<T>(arg0: $DataComponentType_<T>, arg1: T): $DataComponentPredicate$Builder;
    }
    export class $DataComponentPatch$PatchKey extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $DataComponentPatch$PatchKey}.
     */
    export type $DataComponentPatch$PatchKey_ = { type?: $DataComponentType_<never>, removed?: boolean,  } | [type?: $DataComponentType_<never>, removed?: boolean, ];
    export class $TypedDataComponent<T> extends $Record {
        applyTo(arg0: $PatchedDataComponentMap): void;
        static createUnchecked<T>(arg0: $DataComponentType_<T>, arg1: $Object): $TypedDataComponent<T>;
        encodeValue<D>(arg0: $DynamicOps<D>): $DataResult<D>;
        type(): $DataComponentType<T>;
        value(): T;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TypedDataComponent<never>>;
        constructor(arg0: $DataComponentType_<T>, arg1: T);
    }
    /**
     * Values that may be interpreted as {@link $TypedDataComponent}.
     */
    export type $TypedDataComponent_<T> = { value?: any, type?: $DataComponentType_<any>,  } | [value?: any, type?: $DataComponentType_<any>, ];
    export class $DataComponentType<T> {
        static builder<T>(): $DataComponentType$Builder<T>;
        static CODEC: $Codec<$DataComponentType<never>>;
        static VALUE_MAP_CODEC: $Codec<$Map<$DataComponentType<never>, $Object>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $DataComponentType<never>>;
        static PERSISTENT_CODEC: $Codec<$DataComponentType<never>>;
    }
    export interface $DataComponentType<T> {
        codec(): $Codec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        codecOrThrow(): $Codec<T>;
        isTransient(): boolean;
        get transient(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $DataComponentType}.
     */
    export type $DataComponentType_<T> = RegistryTypes.DataComponentType | RegistryTypes.EnchantmentEffectComponentType;
    export class $PatchedDataComponentMap implements $DataComponentMap, $PatchedDataComponentMapExtension, $ChangePublisher<any>, $ComponentMapImplAccessor {
        lithium$subscribe(arg0: $ChangeSubscriber<any>, arg1: number): void;
        lithium$unsubscribe(arg0: $ChangeSubscriber<any>): number;
        static fromPatch(arg0: $DataComponentMap_, arg1: $DataComponentPatch_): $PatchedDataComponentMap;
        asPatch(): $DataComponentPatch;
        restorePatch(arg0: $DataComponentPatch_): void;
        isPatchEmpty(): boolean;
        applyPatch(arg0: $DataComponentPatch_): void;
        accessories$getMutationEvent(itemStack: $ItemStack_): $EventStream<any>;
        accessories$hasChanged(): boolean;
        setAll(arg0: $DataComponentMap_): void;
        remove<T>(arg0: $DataComponentType_<T>): T;
        size(): number;
        get<T>(arg0: $DataComponentType_<T>): T;
        iterator(): $Iterator<$TypedDataComponent<never>>;
        set<T>(arg0: $DataComponentType_<T>, arg1: T): T;
        keySet(): $Set<$DataComponentType<never>>;
        copy(): $PatchedDataComponentMap;
        getTyped<T>(arg0: $DataComponentType_<T>): $TypedDataComponent<T>;
        has(arg0: $DataComponentType_<never>): boolean;
        isEmpty(): boolean;
        stream(): $Stream<$TypedDataComponent<never>>;
        filter(arg0: $Predicate_<$DataComponentType<never>>): $DataComponentMap;
        getOrDefault<T>(arg0: $DataComponentType_<T>, arg1: T): T;
        lithium$unsubscribeWithData(arg0: $ChangeSubscriber<$TypedDataComponent_<never>>, arg1: number): void;
        lithium$isSubscribedWithData(arg0: $ChangeSubscriber<$ItemStack_>, arg1: number): boolean;
        spliterator(): $Spliterator<$TypedDataComponent<never>>;
        forEach(arg0: $Consumer_<$TypedDataComponent<never>>): void;
        owo$getBaseComponents(): $DataComponentMap;
        owo$setBaseComponents(arg0: $DataComponentMap_): void;
        copyOnWrite: boolean;
        constructor(arg0: $DataComponentMap_);
        [Symbol.iterator](): Iterator<$TypedDataComponent<never>>
        get patchEmpty(): boolean;
        set all(value: $DataComponentMap_);
        get empty(): boolean;
    }
    export class $DataComponentMap$Builder implements $IDataComponentMapBuilderExtensions, $FabricComponentMapBuilder, $ComponentFunctions {
        getOrEmpty(arg0: $DataComponentType_<any>): $List<any>;
        kjs$get(type: $DataComponentType_<any>): $Object;
        kjs$remove(type: $DataComponentType_<any>): $ComponentFunctions;
        kjs$getComponentMap(): $DataComponentMap;
        getOrCreate(arg0: $DataComponentType_<any>, arg1: $Supplier_<any>): $Object;
        build(): $DataComponentMap;
        addAll(arg0: $DataComponentMap_): $DataComponentMap$Builder;
        setAdditionalTooltipHidden(): void;
        setUnit(component: $DataComponentType_<$Unit_>): $ComponentFunctions;
        patch(components: $DataComponentPatch_): $ComponentFunctions;
        resetComponents(): $ComponentFunctions;
        getComponentString(): string;
        setCustomData(tag: $CompoundTag_): void;
        getCustomData(): $CompoundTag;
        setRarity(rarity: $Rarity_): void;
        setCustomName(name: $Component_): void;
        getCustomName(): $Component;
        setLore(lines: $List_<$Component_>, styledLines: $List_<$Component_>): void;
        setLore(lines: $List_<$Component_>): void;
        setCustomModelData(data: number): void;
        setTooltipHidden(): void;
        setGlintOverride(override: boolean): void;
        setDyedColor(color: $KubeColor_): void;
        setDyedColorWithTooltip(color: $KubeColor_): void;
        setPotionContents(contents: $PotionContents_): void;
        setPotionId(potion: $Holder_<$Potion>): void;
        setEntityData(tag: $CompoundTag_): void;
        setProfile(name: string, uuid: $UUID_): void;
        setProfile(profile: $GameProfile): void;
        setBaseColor(color: $DyeColor_): void;
        setBlockStateProperties(properties: $Map_<string, string>): void;
        setLockCode(lock: string): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>): void;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        set unit(value: $DataComponentType_<$Unit_>);
        get componentString(): string;
        set rarity(value: $Rarity_);
        set customModelData(value: number);
        set glintOverride(value: boolean);
        set dyedColor(value: $KubeColor_);
        set dyedColorWithTooltip(value: $KubeColor_);
        set potionContents(value: $PotionContents_);
        set potionId(value: $Holder_<$Potion>);
        set entityData(value: $CompoundTag_);
        set baseColor(value: $DyeColor_);
        set blockStateProperties(value: $Map_<string, string>);
        set lockCode(value: string);
    }
    export class $DataComponentPatch$SplitResult extends $Record {
        added(): $DataComponentMap;
        removed(): $Set<$DataComponentType<never>>;
        static EMPTY: $DataComponentPatch$SplitResult;
        constructor(added: $DataComponentMap_, removed: $Set_<$DataComponentType_<never>>);
    }
    /**
     * Values that may be interpreted as {@link $DataComponentPatch$SplitResult}.
     */
    export type $DataComponentPatch$SplitResult_ = { added?: $DataComponentMap_, removed?: $Set_<$DataComponentType_<never>>,  } | [added?: $DataComponentMap_, removed?: $Set_<$DataComponentType_<never>>, ];
    export class $DataComponentPatch$Builder implements $ComponentFunctions {
        kjs$get(type: $DataComponentType_<any>): $Object;
        kjs$remove(type: $DataComponentType_<any>): $ComponentFunctions;
        build(): $DataComponentPatch;
        remove<T>(arg0: $DataComponentType_<T>): $DataComponentPatch$Builder;
        getComponentMap(): $DataComponentMap;
        setAdditionalTooltipHidden(): void;
        setUnit(component: $DataComponentType_<$Unit_>): $ComponentFunctions;
        patch(components: $DataComponentPatch_): $ComponentFunctions;
        resetComponents(): $ComponentFunctions;
        getComponentString(): string;
        setCustomData(tag: $CompoundTag_): void;
        getCustomData(): $CompoundTag;
        setRarity(rarity: $Rarity_): void;
        setCustomName(name: $Component_): void;
        getCustomName(): $Component;
        setLore(lines: $List_<$Component_>, styledLines: $List_<$Component_>): void;
        setLore(lines: $List_<$Component_>): void;
        setCustomModelData(data: number): void;
        setTooltipHidden(): void;
        setGlintOverride(override: boolean): void;
        setDyedColor(color: $KubeColor_): void;
        setDyedColorWithTooltip(color: $KubeColor_): void;
        setPotionContents(contents: $PotionContents_): void;
        setPotionId(potion: $Holder_<$Potion>): void;
        setEntityData(tag: $CompoundTag_): void;
        setProfile(name: string, uuid: $UUID_): void;
        setProfile(profile: $GameProfile): void;
        setBaseColor(color: $DyeColor_): void;
        setBlockStateProperties(properties: $Map_<string, string>): void;
        setLockCode(lock: string): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>): void;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        get componentMap(): $DataComponentMap;
        set unit(value: $DataComponentType_<$Unit_>);
        get componentString(): string;
        set rarity(value: $Rarity_);
        set customModelData(value: number);
        set glintOverride(value: boolean);
        set dyedColor(value: $KubeColor_);
        set dyedColorWithTooltip(value: $KubeColor_);
        set potionContents(value: $PotionContents_);
        set potionId(value: $Holder_<$Potion>);
        set entityData(value: $CompoundTag_);
        set baseColor(value: $DyeColor_);
        set blockStateProperties(value: $Map_<string, string>);
        set lockCode(value: string);
    }
    export class $DataComponentHolder {
    }
    export interface $DataComponentHolder extends $IDataComponentHolderExtension {
        has(arg0: $DataComponentType_<never>): boolean;
        getComponents(): $DataComponentMap;
        get<T>(arg0: $DataComponentType_<T>): T;
        getOrDefault<T>(arg0: $DataComponentType_<T>, arg1: T): T;
        get components(): $DataComponentMap;
    }
    /**
     * Values that may be interpreted as {@link $DataComponentHolder}.
     */
    export type $DataComponentHolder_ = (() => $DataComponentMap_);
    export interface $DataComponentType<T> extends RegistryMarked<RegistryTypes.EnchantmentEffectComponentTypeTag, RegistryTypes.EnchantmentEffectComponentType> {}
    export class $DataComponentType$Builder$SimpleType<T> implements $DataComponentType<T> {
        codecOrThrow(): $Codec<T>;
        isTransient(): boolean;
        get transient(): boolean;
    }
    export class $DataComponents implements $DataComponentsAccessor {
        static mfix$getCache$modernfix_$md$68cb88$0(): $EncoderCache;
        static bootstrap(arg0: $Registry<$DataComponentType_<never>>): $DataComponentType<never>;
        static CONTAINER_LOOT: $DataComponentType<$SeededContainerLoot>;
        static TRIM: $DataComponentType<$ArmorTrim>;
        static BASE_COLOR: $DataComponentType<$DyeColor>;
        static BLOCK_STATE: $DataComponentType<$BlockItemStateProperties>;
        static LOCK: $DataComponentType<$LockCode>;
        static CUSTOM_MODEL_DATA: $DataComponentType<$CustomModelData>;
        static BUNDLE_CONTENTS: $DataComponentType<$BundleContents>;
        static RARITY: $DataComponentType<$Rarity>;
        static UNBREAKABLE: $DataComponentType<$Unbreakable>;
        static FIRE_RESISTANT: $DataComponentType<$Unit>;
        static WRITTEN_BOOK_CONTENT: $DataComponentType<$WrittenBookContent>;
        static ITEM_NAME: $DataComponentType<$Component>;
        static POTION_CONTENTS: $DataComponentType<$PotionContents>;
        static NOTE_BLOCK_SOUND: $DataComponentType<$ResourceLocation>;
        static ENCHANTMENTS: $DataComponentType<$ItemEnchantments>;
        static ATTRIBUTE_MODIFIERS: $DataComponentType<$ItemAttributeModifiers>;
        static CREATIVE_SLOT_LOCK: $DataComponentType<$Unit>;
        static CUSTOM_DATA: $DataComponentType<$CustomData>;
        static MAP_COLOR: $DataComponentType<$MapItemColor>;
        static MAP_DECORATIONS: $DataComponentType<$MapDecorations>;
        static BLOCK_ENTITY_DATA: $DataComponentType<$CustomData>;
        static MAX_STACK_SIZE: $DataComponentType<number>;
        static DAMAGE: $DataComponentType<number>;
        static CAN_PLACE_ON: $DataComponentType<$AdventureModePredicate>;
        static BEES: $DataComponentType<$List<$BeehiveBlockEntity$Occupant>>;
        static ENCHANTMENT_GLINT_OVERRIDE: $DataComponentType<boolean>;
        static DYED_COLOR: $DataComponentType<$DyedItemColor>;
        static BUCKET_ENTITY_DATA: $DataComponentType<$CustomData>;
        static CAN_BREAK: $DataComponentType<$AdventureModePredicate>;
        static DEBUG_STICK_STATE: $DataComponentType<$DebugStickState>;
        static FIREWORKS: $DataComponentType<$Fireworks>;
        static REPAIR_COST: $DataComponentType<number>;
        static MAP_POST_PROCESSING: $DataComponentType<$MapPostProcessing>;
        static CUSTOM_NAME: $DataComponentType<$Component>;
        static LODESTONE_TRACKER: $DataComponentType<$LodestoneTracker>;
        static TOOL: $DataComponentType<$Tool>;
        static STORED_ENCHANTMENTS: $DataComponentType<$ItemEnchantments>;
        static RECIPES: $DataComponentType<$List<$ResourceLocation>>;
        static POT_DECORATIONS: $DataComponentType<$PotDecorations>;
        static PROFILE: $DataComponentType<$ResolvableProfile>;
        static LORE: $DataComponentType<$ItemLore>;
        static COMMON_ITEM_COMPONENTS: $DataComponentMap;
        static MAX_DAMAGE: $DataComponentType<number>;
        static FIREWORK_EXPLOSION: $DataComponentType<$FireworkExplosion>;
        static MAP_ID: $DataComponentType<$MapId>;
        static HIDE_ADDITIONAL_TOOLTIP: $DataComponentType<$Unit>;
        static SUSPICIOUS_STEW_EFFECTS: $DataComponentType<$SuspiciousStewEffects>;
        static HIDE_TOOLTIP: $DataComponentType<$Unit>;
        static INSTRUMENT: $DataComponentType<$Holder<$Instrument>>;
        static INTANGIBLE_PROJECTILE: $DataComponentType<$Unit>;
        static ENTITY_DATA: $DataComponentType<$CustomData>;
        static CHARGED_PROJECTILES: $DataComponentType<$ChargedProjectiles>;
        static WRITABLE_BOOK_CONTENT: $DataComponentType<$WritableBookContent>;
        static CONTAINER: $DataComponentType<$ItemContainerContents>;
        static OMINOUS_BOTTLE_AMPLIFIER: $DataComponentType<number>;
        static JUKEBOX_PLAYABLE: $DataComponentType<$JukeboxPlayable>;
        static BANNER_PATTERNS: $DataComponentType<$BannerPatternLayers>;
        static FOOD: $DataComponentType<$FoodProperties>;
        constructor();
    }
    export class $DataComponentMap$Builder$SimpleMap extends $Record implements $DataComponentMap {
        has(arg0: $DataComponentType_<never>): boolean;
        size(): number;
        get<T>(arg0: $DataComponentType_<T>): T;
        iterator(): $Iterator<$TypedDataComponent<never>>;
        map(): $Reference2ObjectMap<$DataComponentType<never>, $Object>;
        keySet(): $Set<$DataComponentType<never>>;
        getTyped<T>(arg0: $DataComponentType_<T>): $TypedDataComponent<T>;
        isEmpty(): boolean;
        stream(): $Stream<$TypedDataComponent<never>>;
        filter(arg0: $Predicate_<$DataComponentType<never>>): $DataComponentMap;
        getOrDefault<T>(arg0: $DataComponentType_<T>, arg1: T): T;
        spliterator(): $Spliterator<$TypedDataComponent<never>>;
        forEach(arg0: $Consumer_<$TypedDataComponent<never>>): void;
        [Symbol.iterator](): Iterator<$TypedDataComponent<never>>
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $DataComponentMap$Builder$SimpleMap}.
     */
    export type $DataComponentMap$Builder$SimpleMap_ = { map?: $Reference2ObjectMap<$DataComponentType_<never>, $Object>,  } | [map?: $Reference2ObjectMap<$DataComponentType_<never>, $Object>, ];
    export class $DataComponentType$Builder<T> implements $OwoComponentTypeBuilder<any> {
        networkSynchronized(arg0: $StreamCodec_<$RegistryFriendlyByteBuf, $Object>): $DataComponentType$Builder<$Object>;
        cacheEncoding(): $DataComponentType$Builder<$Object>;
        persistent(arg0: $Codec<$Object>): $DataComponentType$Builder<$Object>;
        build(): $DataComponentType<$Object>;
        endec(endec: $Endec<$Object>): $DataComponentType$Builder<$Object>;
        endec(endec: $Endec<$Object>, assumedContext: $SerializationContext): $DataComponentType$Builder<$Object>;
        constructor();
    }
}
