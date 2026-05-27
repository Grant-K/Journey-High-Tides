import { $DataResult, $DynamicOps, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $RecipeManagerAccessor } from "@package/plus/dragons/createdragonsplus/mixin/minecraft";
import { $Tag_, $Tag } from "@package/net/minecraft/nbt";
import { $RecipeManagerAccessor as $RecipeManagerAccessor$1 } from "@package/wily/factoryapi/mixin/base";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $AccessorSmithingTrimRecipe, $AccessorSmithingTransformRecipe as $AccessorSmithingTransformRecipe$1 } from "@package/vazkii/patchouli/mixin";
import { $ResourceManager, $SimpleJsonResourceReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $AccessorSmithingTrimRecipe as $AccessorSmithingTrimRecipe$1, $AccessorSmithingTransformRecipe } from "@package/com/illusivesoulworks/polymorph/mixin/core";
import { $ItemStackSet } from "@package/dev/latvian/mods/kubejs/item";
import { $AccessorIngredient$TagValue, $AccessorIngredient } from "@package/com/railwayteam/railways/mixin";
import { $StringRepresentable, $StringRepresentable$EnumCodec } from "@package/net/minecraft/util";
import { $SlotFilter_ } from "@package/dev/latvian/mods/kubejs/util";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes, SpecialTypes } from "@special/types";
import { $RecipeMatchContext } from "@package/dev/latvian/mods/kubejs/recipe/filter";
import { $SizedIngredient, $ICustomIngredient } from "@package/net/neoforged/neoforge/common/crafting";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ShapedRecipePatternAccessor } from "@package/com/telepathicgrunt/the_bumblezone/mixin/containers";
import { $Player, $StackedContents } from "@package/net/minecraft/world/entity/player";
import { $ShapedRecipeAccess, $ShapedPatternAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $RecipeManagerAccessForge } from "@package/ru/magistu/siegemachines/mixin";
import { $IngredientKJS, $RecipeHolderKJS, $ReloadableServerResourcesKJS, $RecipeInputKJS, $RecipeManagerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $JsonObject_, $JsonElement } from "@package/com/google/gson";
import { $FactoryIngredient } from "@package/wily/factoryapi/base";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $ShapedRecipeAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $CommonNetwork$Payload$Context, $CommonNetwork$PlayBuf_, $CommonNetwork$Identifier } from "@package/wily/factoryapi/base/network";
import { $Map, $Set, $List, $Map_, $Collection_, $List_, $Collection } from "@package/java/util";
import { $ServerboundCustomPayloadPacket, $ClientboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $Supplier_, $IntFunction, $Predicate_, $Predicate } from "@package/java/util/function";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $ReplacementMatchInfo_ } from "@package/dev/latvian/mods/kubejs/recipe/match";
import { $ISidedRecipeManager } from "@package/net/darkhax/bookshelf/common/api/data";
import { $RecipeSchema } from "@package/dev/latvian/mods/kubejs/recipe/schema";
import { $WithConditions } from "@package/net/neoforged/neoforge/common/conditions";
import { $Enum, $Iterable_, $Record, $ThreadLocal, $Object } from "@package/java/lang";
import { $ShapelessRecipeAccessor, $ShapedRecipeAccessor as $ShapedRecipeAccessor$1 } from "@package/ovh/corail/tombstone/mixin/accessor";
import { $ItemLike_, $ItemLike, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Logger } from "@package/org/slf4j";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $ExtendedIngredient } from "@package/org/embeddedt/modernfix/neoforge/recipe";
import { $FireworkExplosion$Shape } from "@package/net/minecraft/world/item/component";
import { $IRecipeContext } from "@package/com/illusivesoulworks/polymorph/api/common/base";
import { $ImmutableMultimap$Builder, $ImmutableMap$Builder, $Multimap } from "@package/com/google/common/collect";
import { $AccessorRecipeManager } from "@package/net/darkhax/bookshelf/common/mixin/access/level";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $RecipeInputMixin } from "@package/dev/latvian/mods/kubejs/core/mixin";
import { $AccessorIngredient as $AccessorIngredient$1 } from "@package/xfacthd/framedblocks/mixin";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $CustomIngredient, $FabricIngredient } from "@package/net/fabricmc/fabric/api/recipe/v1/ingredient";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/item/crafting" {
    export class $RecipeCache$Entry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $RecipeCache$Entry}.
     */
    export type $RecipeCache$Entry_ = { value?: $RecipeHolder_<$CraftingRecipe>, width?: number, key?: $NonNullList<$ItemStack_>, height?: number,  } | [value?: $RecipeHolder_<$CraftingRecipe>, width?: number, key?: $NonNullList<$ItemStack_>, height?: number, ];
    export class $Recipe<T extends $RecipeInput> {
        static CODEC: $Codec<$Recipe<never>>;
        static CONDITIONAL_CODEC: $Codec<($WithConditions<$Recipe<never>>) | undefined>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Recipe<never>>;
    }
    export interface $Recipe<T extends $RecipeInput> {
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        assemble(arg0: T, arg1: $HolderLookup$Provider): $ItemStack;
        getRemainingItems(arg0: T): $NonNullList<$ItemStack>;
        getSerializer(): $RecipeSerializer<never>;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        getGroup(): string;
        isSpecial(): boolean;
        matches(arg0: T, arg1: $Level_): boolean;
        getType(): $RecipeType<never>;
        get serializer(): $RecipeSerializer<never>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
        get ingredients(): $NonNullList<$Ingredient>;
        get group(): string;
        get special(): boolean;
        get type(): $RecipeType<never>;
    }
    export class $CampfireCookingRecipe extends $AbstractCookingRecipe {
        ingredient: $Ingredient;
        constructor(arg0: string, arg1: $CookingBookCategory_, arg2: $Ingredient_, arg3: $ItemStack_, arg4: number, arg5: number);
    }
    export class $SmithingRecipeInput extends $Record implements $RecipeInput {
        getItem(arg0: number): $ItemStack;
        template(): $ItemStack;
        addition(): $ItemStack;
        base(): $ItemStack;
        size(): number;
        isEmpty(): boolean;
        self(): $RecipeInput;
        findAll(): $List<$ItemStack>;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        find(filter: $SlotFilter_): $ItemStack;
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SmithingRecipeInput}.
     */
    export type $SmithingRecipeInput_ = { template?: $ItemStack_, base?: $ItemStack_, addition?: $ItemStack_,  } | [template?: $ItemStack_, base?: $ItemStack_, addition?: $ItemStack_, ];
    export class $Ingredient$TagValue extends $Record implements $Ingredient$Value, $AccessorIngredient$TagValue {
        getItems(): $Collection<$ItemStack>;
        static create$railways_$md$68cb88$0(arg0: $TagKey_<any>): $Ingredient$TagValue;
        tag(): $TagKey<$Item>;
        getTag(): $TagKey<$Item>;
        constructor(tag: $TagKey_<$Item>);
        get items(): $Collection<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $Ingredient$TagValue}.
     */
    export type $Ingredient$TagValue_ = { tag?: $TagKey_<$Item>,  } | [tag?: $TagKey_<$Item>, ];
    export class $RecipeCache {
        get(arg0: $Level_, arg1: $CraftingInput): ($RecipeHolder<$CraftingRecipe>) | undefined;
        constructor(arg0: number);
    }
    export class $RecipeHolder<T extends $Recipe<never>> extends $Record implements $RecipeHolderKJS {
        kjs$getTypeKey(): $ResourceKey<any>;
        value(): T;
        id(): $ResourceLocation;
        self(): $RecipeHolder<never>;
        getSerializer(): $RecipeSerializer<never>;
        getRecipe(): $Recipe<never>;
        getGroup(): string;
        setGroup(group: string): void;
        getOrCreateId(): $ResourceLocation;
        getSchema(): $RecipeSchema;
        hasInput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        replaceInput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, _with: $Object): boolean;
        hasOutput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        replaceOutput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, _with: $Object): boolean;
        getType(): $ResourceLocation;
        getMod(): string;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $RecipeHolder<never>>;
        constructor(arg0: $ResourceLocation_, arg1: T);
        get serializer(): $RecipeSerializer<never>;
        get recipe(): $Recipe<never>;
        get orCreateId(): $ResourceLocation;
        get schema(): $RecipeSchema;
        get type(): $ResourceLocation;
        get mod(): string;
    }
    /**
     * Values that may be interpreted as {@link $RecipeHolder}.
     */
    export type $RecipeHolder_<T> = { value?: $Recipe<never>, id?: $ResourceLocation_,  } | [value?: $Recipe<never>, id?: $ResourceLocation_, ];
    export class $SuspiciousStewRecipe extends $CustomRecipe {
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        constructor(arg0: $CraftingBookCategory_);
    }
    export class $Ingredient$Value {
        static CODEC: $Codec<$Ingredient$Value>;
        static MAP_CODEC: $MapCodec<$Ingredient$Value>;
    }
    export interface $Ingredient$Value {
        getItems(): $Collection<$ItemStack>;
        get items(): $Collection<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $Ingredient$Value}.
     */
    export type $Ingredient$Value_ = (() => $Collection_<$ItemStack_>);
    export interface $RecipeType<T> extends RegistryMarked<RegistryTypes.RecipeTypeTag, RegistryTypes.RecipeType> {}
    export class $SingleItemRecipe$Factory<T extends $SingleItemRecipe> {
    }
    export interface $SingleItemRecipe$Factory<T extends $SingleItemRecipe> {
        create(arg0: string, arg1: $Ingredient_, arg2: $ItemStack_): T;
    }
    /**
     * Values that may be interpreted as {@link $SingleItemRecipe$Factory}.
     */
    export type $SingleItemRecipe$Factory_<T> = ((arg0: string, arg1: $Ingredient, arg2: $ItemStack) => T);
    export class $CraftingInput implements $RecipeInput {
        static ofPositioned(arg0: number, arg1: number, arg2: $List_<$ItemStack_>): $CraftingInput$Positioned;
        ingredientCount(): number;
        stackedContents(): $StackedContents;
        items(): $List<$ItemStack>;
        getItem(arg0: number, arg1: number): $ItemStack;
        getItem(arg0: number): $ItemStack;
        width(): number;
        height(): number;
        size(): number;
        isEmpty(): boolean;
        static of(arg0: number, arg1: number, arg2: $List_<$ItemStack_>): $CraftingInput;
        self(): $RecipeInput;
        findAll(): $List<$ItemStack>;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        find(filter: $SlotFilter_): $ItemStack;
        static EMPTY: $CraftingInput;
        constructor(arg0: number, arg1: number, arg2: $List_<$ItemStack_>);
        get empty(): boolean;
    }
    export class $CookingBookCategory extends $Enum<$CookingBookCategory> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $CookingBookCategory[];
        static valueOf(arg0: string): $CookingBookCategory;
        getRemappedEnumConstantName(): string;
        static CODEC: $StringRepresentable$EnumCodec<$CookingBookCategory>;
        static BLOCKS: $CookingBookCategory;
        static MISC: $CookingBookCategory;
        static FOOD: $CookingBookCategory;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CookingBookCategory}.
     */
    export type $CookingBookCategory_ = "food" | "blocks" | "misc";
    export class $Ingredient implements $Predicate<$ItemStack>, $ExtendedIngredient, $FactoryIngredient, $FabricIngredient, $AccessorIngredient, $IngredientKJS, $AccessorIngredient$1 {
        self(): $Ingredient;
        static fromValues(arg0: $Stream<$Ingredient$Value_>): $Ingredient;
        getStackingIds(): $IntList;
        isCustom(): boolean;
        hasNoItems(): boolean;
        handler$zeh000$modernfix$hasNoItems(arg0: $CallbackInfoReturnable<any>): void;
        getCustomIngredient(): $CustomIngredient;
        mfix$clearReference(): void;
        canBeUsedForMatching(): boolean;
        identifier(): $CommonNetwork$Identifier<any>;
        isSimple(): boolean;
        getStacks(): $ItemStack[];
        test(arg0: $ItemStack_): boolean;
        encode(buf: $CommonNetwork$PlayBuf_): void;
        isEmpty(): boolean;
        static of(arg0: $TagKey_<$Item>): $Ingredient;
        static of(): $Ingredient;
        static of(...arg0: $ItemLike_[]): $Ingredient;
        static of(...arg0: $ItemStack_[]): $Ingredient;
        static of(arg0: $Stream<$ItemStack_>): $Ingredient;
        getCount(): number;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        toIngredient(): $Ingredient;
        apply(context: $CommonNetwork$Payload$Context): void;
        requiresTesting(): boolean;
        getCodec(): $Codec<never>;
        isWildcard(): boolean;
        replaceThisWith(cx: $RecipeScriptContext, _with: $Object): $Object;
        asIngredient(): $Ingredient;
        withCount(count: number): $SizedIngredient;
        getStackArray(): $ItemStack[];
        and(ingredient: $Ingredient_): $Ingredient;
        or(ingredient: $Ingredient_): $Ingredient;
        except(subtracted: $Ingredient_): $Ingredient;
        asStack(): $SizedIngredient;
        getTagKey(): $TagKey<$Item>;
        containsAnyTag(): boolean;
        toIngredientString(ops: $DynamicOps<$Tag_>): string;
        matches(cx: $RecipeMatchContext, _in: $Ingredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, item: $ItemStack_, exact: boolean): boolean;
        applyClient(): void;
        applyServer(player: $Supplier_<$Player>): void;
        applySided(client: boolean, player: $Supplier_<$Player>): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        encode(buf: $RegistryFriendlyByteBuf): void;
        getStacks(): $ItemStackSet;
        testItem(item: $Item_): boolean;
        getDisplayStacks(): $ItemStackSet;
        getItemStream(): $Stream<$Item>;
        getItemTypes(): $Set<$Item>;
        getItemIds(): $Set<string>;
        getFirst(): $ItemStack;
        toNBT(): $Tag;
        toJson(): $JsonElement;
        matchesAny(cx: $RecipeMatchContext, itemLikes: $Iterable_<$ItemLike>, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, itemLike: $ItemLike_, exact: boolean): boolean;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        framedblocks$getValues(): $Ingredient$Value[];
        getValues(): $Ingredient$Value[];
        static CODEC: $Codec<$Ingredient>;
        static LIST_CODEC_NONEMPTY: $Codec<$List<$Ingredient>>;
        stackingIds: $IntList;
        static CODEC_NONEMPTY: $Codec<$Ingredient>;
        static CONTENTS_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Ingredient>;
        values: $Ingredient$Value[];
        static LIST_CODEC: $Codec<$List<$Ingredient>>;
        itemStacks: $ItemStack[];
        static EMPTY: $Ingredient;
        static MAP_CODEC_NONEMPTY: $MapCodec<$Ingredient>;
        constructor(arg0: $Stream<$Ingredient$Value_>);
        constructor(arg0: $ICustomIngredient);
        get custom(): boolean;
        get customIngredient(): $CustomIngredient;
        get simple(): boolean;
        get empty(): boolean;
        get count(): number;
        get wildcard(): boolean;
        get stackArray(): $ItemStack[];
        get tagKey(): $TagKey<$Item>;
        get displayStacks(): $ItemStackSet;
        get itemStream(): $Stream<$Item>;
        get itemTypes(): $Set<$Item>;
        get itemIds(): $Set<string>;
        get first(): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $Ingredient}.
     */
    export type $Ingredient_ = $ItemStack_ | $Ingredient[] | RegExp | "*" | "-" | `#${RegistryTypes.ItemTag}` | `@${SpecialTypes.ModId}` | `%${RegistryTypes.CreativeModeTab}`;
    export class $SmithingTransformRecipe implements $SmithingRecipe, $AccessorSmithingTransformRecipe, $AccessorSmithingTransformRecipe$1 {
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        assemble(arg0: $SmithingRecipeInput_, arg1: $HolderLookup$Provider): $ItemStack;
        getSerializer(): $RecipeSerializer<never>;
        isTemplateIngredient(arg0: $ItemStack_): boolean;
        isBaseIngredient(arg0: $ItemStack_): boolean;
        isAdditionIngredient(arg0: $ItemStack_): boolean;
        isIncomplete(): boolean;
        handler$fal000$irons_spellbooks$fixSpellbookSlotCount(arg0: $SmithingRecipeInput_, arg1: $HolderLookup$Provider, arg2: $CallbackInfoReturnable<any>): void;
        matches(arg0: $SmithingRecipeInput_, arg1: $Level_): boolean;
        getToastSymbol(): $ItemStack;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getType(): $RecipeType<never>;
        getRemainingItems(arg0: $SmithingRecipeInput_): $NonNullList<$ItemStack>;
        getIngredients(): $NonNullList<$Ingredient>;
        showNotification(): boolean;
        getGroup(): string;
        isSpecial(): boolean;
        getAddition(): $Ingredient;
        getBase(): $Ingredient;
        getTemplate(): $Ingredient;
        template: $Ingredient;
        result: $ItemStack;
        base: $Ingredient;
        addition: $Ingredient;
        constructor(arg0: $Ingredient_, arg1: $Ingredient_, arg2: $Ingredient_, arg3: $ItemStack_);
        get serializer(): $RecipeSerializer<never>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
        get type(): $RecipeType<never>;
        get ingredients(): $NonNullList<$Ingredient>;
        get group(): string;
        get special(): boolean;
    }
    export interface $RecipeSerializer<T> extends RegistryMarked<RegistryTypes.RecipeSerializerTag, RegistryTypes.RecipeSerializer> {}
    export class $SmokingRecipe extends $AbstractCookingRecipe {
        ingredient: $Ingredient;
        constructor(arg0: string, arg1: $CookingBookCategory_, arg2: $Ingredient_, arg3: $ItemStack_, arg4: number, arg5: number);
    }
    export class $RecipeManager extends $SimpleJsonResourceReloadListener implements $IRecipeContext, $AccessorRecipeManager, $ISidedRecipeManager, $RecipeManagerAccessForge, $IdentifiableResourceReloadListener, $RecipeManagerAccessor$1, $RecipeManagerAccessor, $RecipeManagerKJS {
        getFabricId(): $ResourceLocation;
        getFabricDependencies(): $Collection<any>;
        getRecipeIds(): $Stream<$ResourceLocation>;
        polymorph$setContext(arg0: $Object): void;
        static createCheck<I extends $RecipeInput, T extends $Recipe<I>>(arg0: $RecipeType_<T>): $RecipeManager$CachedCheck<I, T>;
        getRecipeFor<I extends $RecipeInput, T extends $Recipe<I>>(arg0: $RecipeType_<T>, arg1: I, arg2: $Level_): ($RecipeHolder<T>) | undefined;
        getRecipeFor<I extends $RecipeInput, T extends $Recipe<I>>(arg0: $RecipeType_<T>, arg1: I, arg2: $Level_, arg3: $ResourceLocation_): ($RecipeHolder<T>) | undefined;
        getRecipeFor<I extends $RecipeInput, T extends $Recipe<I>>(arg0: $RecipeType_<T>, arg1: I, arg2: $Level_, arg3: $RecipeHolder_<T>): ($RecipeHolder<T>) | undefined;
        getRecipes(): $Collection<$RecipeHolder<never>>;
        getAllRecipesFor<I extends $RecipeInput, T extends $Recipe<I>>(arg0: $RecipeType_<T>): $List<$RecipeHolder<T>>;
        getRecipesFor<I extends $RecipeInput, T extends $Recipe<I>>(arg0: $RecipeType_<T>, arg1: I, arg2: $Level_): $List<$RecipeHolder<T>>;
        byType<I extends $RecipeInput, T extends $Recipe<I>>(arg0: $RecipeType_<T>): $Collection<$RecipeHolder<T>>;
        getRemainingItemsFor<I extends $RecipeInput, T extends $Recipe<I>>(arg0: $RecipeType_<T>, arg1: I, arg2: $Level_): $NonNullList<$ItemStack>;
        bookshelf$setLogicalServer(): void;
        kjs$setResources(resources: $ReloadableServerResourcesKJS): void;
        polymorph$getContext(): $Object;
        handler$kgh000$cucumber$apply(arg0: $Map_<any, any>, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $CallbackInfo, arg4: $ImmutableMultimap$Builder<any, any>, arg5: $ImmutableMap$Builder<any, any>): void;
        hadErrorsLoading(): boolean;
        kjs$getResources(): $ReloadableServerResourcesKJS;
        kjs$getRecipeIdMap(): $Map<any, any>;
        kjs$replaceRecipes(map: $Map_<any, any>): void;
        getOrderedRecipes(): $Collection<$RecipeHolder<never>>;
        replaceRecipes(arg0: $Iterable_<$RecipeHolder<never>>): void;
        bookshelf$setLogicalClient(): void;
        static fromJson(arg0: $ResourceLocation_, arg1: $JsonObject_, arg2: $HolderLookup$Provider): $RecipeHolder<never>;
        byKey(arg0: $ResourceLocation_): ($RecipeHolder<never>) | undefined;
        getByType(): $Multimap<$RecipeType<never>, $RecipeHolder<never>>;
        invokeByType<I extends $RecipeInput, T extends $Recipe<I>>(arg0: $RecipeType_<T>): $Collection<$RecipeHolder<T>>;
        getRecipeByType<R extends $Recipe<never>>(arg0: $RecipeType_<R>): $Collection<$RecipeHolder<R>>;
        setByType(arg0: $Multimap<$RecipeType_<never>, $RecipeHolder_<never>>): void;
        setByName(arg0: $Map_<$ResourceLocation_, $RecipeHolder_<never>>): void;
        bookshelf$byTypeMap(): $Multimap<$RecipeType<never>, $RecipeHolder<never>>;
        getByName(): $Map<$ResourceLocation, $RecipeHolder<never>>;
        static LOGGER: $Logger;
        byName: $Map<$ResourceLocation, $RecipeHolder<never>>;
        registries: $HolderLookup$Provider;
        previousMapEntry: $ThreadLocal<any>;
        constructor(arg0: $HolderLookup$Provider);
        get fabricId(): $ResourceLocation;
        get fabricDependencies(): $Collection<any>;
        get recipeIds(): $Stream<$ResourceLocation>;
        get recipes(): $Collection<$RecipeHolder<never>>;
        get orderedRecipes(): $Collection<$RecipeHolder<never>>;
    }
    export class $SimpleCraftingRecipeSerializer<T extends $CraftingRecipe> implements $RecipeSerializer<T> {
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        constructor(arg0: $SimpleCraftingRecipeSerializer$Factory_<T>);
    }
    export class $CraftingBookCategory extends $Enum<$CraftingBookCategory> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $CraftingBookCategory[];
        static valueOf(arg0: string): $CraftingBookCategory;
        getRemappedEnumConstantName(): string;
        static EQUIPMENT: $CraftingBookCategory;
        static CODEC: $Codec<$CraftingBookCategory>;
        static BUILDING: $CraftingBookCategory;
        static REDSTONE: $CraftingBookCategory;
        static MISC: $CraftingBookCategory;
        static BY_ID: $IntFunction<$CraftingBookCategory>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $CraftingBookCategory>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CraftingBookCategory}.
     */
    export type $CraftingBookCategory_ = "building" | "redstone" | "equipment" | "misc";
    export class $MapExtendingRecipe extends $ShapedRecipe {
        result: $ItemStack;
        pattern: $ShapedRecipePattern;
        group: string;
        constructor(arg0: $CraftingBookCategory_);
    }
    export class $CraftingInput$Positioned extends $Record {
        input(): $CraftingInput;
        top(): number;
        left(): number;
        static EMPTY: $CraftingInput$Positioned;
        constructor(arg0: $CraftingInput, arg1: number, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $CraftingInput$Positioned}.
     */
    export type $CraftingInput$Positioned_ = { left?: number, input?: $CraftingInput, top?: number,  } | [left?: number, input?: $CraftingInput, top?: number, ];
    export class $ShapedRecipe$Serializer implements $RecipeSerializer<$ShapedRecipe> {
        codec(): $MapCodec<$ShapedRecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ShapedRecipe>;
        static CODEC: $MapCodec<$ShapedRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ShapedRecipe>;
        constructor();
    }
    export class $CraftingRecipe {
    }
    export interface $CraftingRecipe extends $Recipe<$CraftingInput> {
        category(): $CraftingBookCategory;
        getType(): $RecipeType<never>;
        get type(): $RecipeType<never>;
    }
    export class $ShapedRecipe implements $CraftingRecipe, $ShapedRecipeAccessor$1, $ShapedRecipeAccess, $ShapedRecipeAccessor {
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        getSerializer(): $RecipeSerializer<never>;
        isIncomplete(): boolean;
        getIngredients(): $NonNullList<$Ingredient>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        category(): $CraftingBookCategory;
        getWidth(): number;
        getHeight(): number;
        getGroup(): string;
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        getType(): $RecipeType<never>;
        getRemainingItems(arg0: $CraftingInput): $NonNullList<$ItemStack>;
        getToastSymbol(): $ItemStack;
        isSpecial(): boolean;
        create$getPattern(): $ShapedRecipePattern;
        getResult(): $ItemStack;
        getPattern(): $ShapedRecipePattern;
        result: $ItemStack;
        pattern: $ShapedRecipePattern;
        group: string;
        constructor(arg0: string, arg1: $CraftingBookCategory_, arg2: $ShapedRecipePattern, arg3: $ItemStack_);
        constructor(arg0: string, arg1: $CraftingBookCategory_, arg2: $ShapedRecipePattern, arg3: $ItemStack_, arg4: boolean);
        get serializer(): $RecipeSerializer<never>;
        get incomplete(): boolean;
        get ingredients(): $NonNullList<$Ingredient>;
        get width(): number;
        get height(): number;
        get type(): $RecipeType<never>;
        get toastSymbol(): $ItemStack;
        get special(): boolean;
    }
    export class $FireworkStarRecipe extends $CustomRecipe {
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        static SHAPE_INGREDIENT: $Ingredient;
        static SHAPE_BY_ITEM: $Map<$Item, $FireworkExplosion$Shape>;
        constructor(arg0: $CraftingBookCategory_);
    }
    export class $SmithingRecipe {
    }
    export interface $SmithingRecipe extends $Recipe<$SmithingRecipeInput> {
        isTemplateIngredient(arg0: $ItemStack_): boolean;
        isBaseIngredient(arg0: $ItemStack_): boolean;
        isAdditionIngredient(arg0: $ItemStack_): boolean;
        getToastSymbol(): $ItemStack;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getType(): $RecipeType<never>;
        get toastSymbol(): $ItemStack;
        get type(): $RecipeType<never>;
    }
    export class $SingleRecipeInput extends $Record implements $RecipeInput {
        getItem(arg0: number): $ItemStack;
        item(): $ItemStack;
        size(): number;
        isEmpty(): boolean;
        self(): $RecipeInput;
        findAll(): $List<$ItemStack>;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        find(filter: $SlotFilter_): $ItemStack;
        constructor(arg0: $ItemStack_);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SingleRecipeInput}.
     */
    export type $SingleRecipeInput_ = { item?: $ItemStack_,  } | [item?: $ItemStack_, ];
    export class $AbstractCookingRecipe implements $Recipe<$SingleRecipeInput> {
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getCookingTime(): number;
        assemble(arg0: $SingleRecipeInput_, arg1: $HolderLookup$Provider): $ItemStack;
        getExperience(): number;
        getIngredients(): $NonNullList<$Ingredient>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        category(): $CookingBookCategory;
        getGroup(): string;
        matches(arg0: $SingleRecipeInput_, arg1: $Level_): boolean;
        getType(): $RecipeType<never>;
        getRemainingItems(arg0: $SingleRecipeInput_): $NonNullList<$ItemStack>;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        showNotification(): boolean;
        isSpecial(): boolean;
        ingredient: $Ingredient;
        constructor(arg0: $RecipeType_<never>, arg1: string, arg2: $CookingBookCategory_, arg3: $Ingredient_, arg4: $ItemStack_, arg5: number, arg6: number);
        get cookingTime(): number;
        get experience(): number;
        get ingredients(): $NonNullList<$Ingredient>;
        get group(): string;
        get type(): $RecipeType<never>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
        get special(): boolean;
    }
    export class $ShieldDecorationRecipe extends $CustomRecipe {
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        constructor(arg0: $CraftingBookCategory_);
    }
    export class $ArmorDyeRecipe extends $CustomRecipe {
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        constructor(arg0: $CraftingBookCategory_);
    }
    export class $Ingredient$ItemValue extends $Record implements $Ingredient$Value {
        getItems(): $Collection<$ItemStack>;
        item(): $ItemStack;
        constructor(item: $ItemStack_);
        get items(): $Collection<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $Ingredient$ItemValue}.
     */
    export type $Ingredient$ItemValue_ = { item?: $ItemStack_,  } | [item?: $ItemStack_, ];
    export class $SimpleCookingSerializer<T extends $AbstractCookingRecipe> implements $RecipeSerializer<T> {
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        create(arg0: string, arg1: $CookingBookCategory_, arg2: $Ingredient_, arg3: $ItemStack_, arg4: number, arg5: number): $AbstractCookingRecipe;
        factory: $AbstractCookingRecipe$Factory<T>;
        constructor(arg0: $AbstractCookingRecipe$Factory_<T>, arg1: number);
    }
    export class $MapCloningRecipe extends $CustomRecipe {
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        constructor(arg0: $CraftingBookCategory_);
    }
    export class $SingleItemRecipe$Serializer<T extends $SingleItemRecipe> implements $RecipeSerializer<T> {
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
    }
    export class $ShapelessRecipe$Serializer implements $RecipeSerializer<$ShapelessRecipe> {
        codec(): $MapCodec<$ShapelessRecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ShapelessRecipe>;
        static CODEC: $MapCodec<$ShapelessRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ShapelessRecipe>;
        constructor();
    }
    export class $ShapedRecipePattern$Data extends $Record {
        pattern(): $List<string>;
        key(): $Map<string, $Ingredient>;
        static MAP_CODEC: $MapCodec<$ShapedRecipePattern$Data>;
        constructor(key: $Map_<string, $Ingredient_>, pattern: $List_<string>);
    }
    /**
     * Values that may be interpreted as {@link $ShapedRecipePattern$Data}.
     */
    export type $ShapedRecipePattern$Data_ = { key?: $Map_<string, $Ingredient_>, pattern?: $List_<string>,  } | [key?: $Map_<string, $Ingredient_>, pattern?: $List_<string>, ];
    export class $ShapedRecipePattern implements $ShapedRecipePatternAccessor, $ShapedPatternAccess {
        ingredients(): $NonNullList<$Ingredient>;
        static getMaxWidth(): number;
        static getMaxHeight(): number;
        static setCraftingSize(arg0: number, arg1: number): void;
        static bumblezone$callShrink$the_bumblezone_$md$68cb88$0(arg0: $List_<any>): string[];
        width(): number;
        height(): number;
        static unpack(arg0: $ShapedRecipePattern$Data_): $DataResult<$ShapedRecipePattern>;
        matches(arg0: $CraftingInput): boolean;
        static of(arg0: $Map_<string, $Ingredient_>, arg1: $List_<string>): $ShapedRecipePattern;
        static of(arg0: $Map_<string, $Ingredient_>, ...arg1: string[]): $ShapedRecipePattern;
        getData(): ($ShapedRecipePattern$Data) | undefined;
        data: ($ShapedRecipePattern$Data) | undefined;
        static MAP_CODEC: $MapCodec<$ShapedRecipePattern>;
        symmetrical: boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ShapedRecipePattern>;
        constructor(arg0: number, arg1: number, arg2: $NonNullList<$Ingredient_>, arg3: ($ShapedRecipePattern$Data_) | undefined);
        static get maxWidth(): number;
        static get maxHeight(): number;
    }
    export class $ShapelessRecipe implements $CraftingRecipe, $ShapelessRecipeAccessor {
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        getSerializer(): $RecipeSerializer<never>;
        getIngredients(): $NonNullList<$Ingredient>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        category(): $CraftingBookCategory;
        getGroup(): string;
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        getType(): $RecipeType<never>;
        getRemainingItems(arg0: $CraftingInput): $NonNullList<$ItemStack>;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        showNotification(): boolean;
        isSpecial(): boolean;
        getResult(): $ItemStack;
        result: $ItemStack;
        ingredients: $NonNullList<$Ingredient>;
        group: string;
        constructor(arg0: string, arg1: $CraftingBookCategory_, arg2: $ItemStack_, arg3: $NonNullList<$Ingredient_>);
        get serializer(): $RecipeSerializer<never>;
        get type(): $RecipeType<never>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
        get special(): boolean;
    }
    export class $BannerDuplicateRecipe extends $CustomRecipe {
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        getRemainingItems(arg0: $CraftingInput): $NonNullList<$ItemStack>;
        modifyExpressionValue$mgl000$quark$getLimitMatches(arg0: number): number;
        modifyExpressionValue$mgl000$quark$getLimitAssemble(arg0: number): number;
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        constructor(arg0: $CraftingBookCategory_);
    }
    export class $SingleItemRecipe implements $Recipe<$SingleRecipeInput> {
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        assemble(arg0: $SingleRecipeInput_, arg1: $HolderLookup$Provider): $ItemStack;
        getSerializer(): $RecipeSerializer<never>;
        getIngredients(): $NonNullList<$Ingredient>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getGroup(): string;
        getType(): $RecipeType<never>;
        getRemainingItems(arg0: $SingleRecipeInput_): $NonNullList<$ItemStack>;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        showNotification(): boolean;
        isSpecial(): boolean;
        constructor(arg0: $RecipeType_<never>, arg1: $RecipeSerializer_<never>, arg2: string, arg3: $Ingredient_, arg4: $ItemStack_);
        get serializer(): $RecipeSerializer<never>;
        get ingredients(): $NonNullList<$Ingredient>;
        get group(): string;
        get type(): $RecipeType<never>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
        get special(): boolean;
    }
    export class $FireworkRocketRecipe extends $CustomRecipe {
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        constructor(arg0: $CraftingBookCategory_);
    }
    export class $DecoratedPotRecipe extends $CustomRecipe {
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        constructor(arg0: $CraftingBookCategory_);
    }
    export class $StonecutterRecipe extends $SingleItemRecipe {
        matches(arg0: $SingleRecipeInput_, arg1: $Level_): boolean;
        constructor(arg0: string, arg1: $Ingredient_, arg2: $ItemStack_);
    }
    export class $BlastingRecipe extends $AbstractCookingRecipe {
        ingredient: $Ingredient;
        constructor(arg0: string, arg1: $CookingBookCategory_, arg2: $Ingredient_, arg3: $ItemStack_, arg4: number, arg5: number);
    }
    export class $SmithingTransformRecipe$Serializer implements $RecipeSerializer<$SmithingTransformRecipe> {
        codec(): $MapCodec<$SmithingTransformRecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $SmithingTransformRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SmithingTransformRecipe>;
        constructor();
    }
    export class $ShulkerBoxColoring extends $CustomRecipe {
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        constructor(arg0: $CraftingBookCategory_);
    }
    export class $TippedArrowRecipe extends $CustomRecipe {
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        constructor(arg0: $CraftingBookCategory_);
    }
    export class $SimpleCraftingRecipeSerializer$Factory<T extends $CraftingRecipe> {
    }
    export interface $SimpleCraftingRecipeSerializer$Factory<T extends $CraftingRecipe> {
        create(arg0: $CraftingBookCategory_): T;
    }
    /**
     * Values that may be interpreted as {@link $SimpleCraftingRecipeSerializer$Factory}.
     */
    export type $SimpleCraftingRecipeSerializer$Factory_<T> = ((arg0: $CraftingBookCategory) => T);
    export class $SmithingTrimRecipe$Serializer implements $RecipeSerializer<$SmithingTrimRecipe> {
        codec(): $MapCodec<$SmithingTrimRecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $SmithingTrimRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SmithingTrimRecipe>;
        constructor();
    }
    export class $CustomRecipe implements $CraftingRecipe {
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        category(): $CraftingBookCategory;
        isSpecial(): boolean;
        getType(): $RecipeType<never>;
        getRemainingItems(arg0: $CraftingInput): $NonNullList<$ItemStack>;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        showNotification(): boolean;
        getGroup(): string;
        constructor(arg0: $CraftingBookCategory_);
        get special(): boolean;
        get type(): $RecipeType<never>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
        get ingredients(): $NonNullList<$Ingredient>;
        get group(): string;
    }
    export class $SmithingTrimRecipe implements $SmithingRecipe, $AccessorSmithingTrimRecipe$1, $AccessorSmithingTrimRecipe {
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        assemble(arg0: $SmithingRecipeInput_, arg1: $HolderLookup$Provider): $ItemStack;
        getSerializer(): $RecipeSerializer<never>;
        isTemplateIngredient(arg0: $ItemStack_): boolean;
        isBaseIngredient(arg0: $ItemStack_): boolean;
        isAdditionIngredient(arg0: $ItemStack_): boolean;
        isIncomplete(): boolean;
        matches(arg0: $SmithingRecipeInput_, arg1: $Level_): boolean;
        getToastSymbol(): $ItemStack;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getType(): $RecipeType<never>;
        getRemainingItems(arg0: $SmithingRecipeInput_): $NonNullList<$ItemStack>;
        getIngredients(): $NonNullList<$Ingredient>;
        showNotification(): boolean;
        getGroup(): string;
        isSpecial(): boolean;
        getAddition(): $Ingredient;
        getBase(): $Ingredient;
        getTemplate(): $Ingredient;
        template: $Ingredient;
        base: $Ingredient;
        addition: $Ingredient;
        constructor(arg0: $Ingredient_, arg1: $Ingredient_, arg2: $Ingredient_);
        get serializer(): $RecipeSerializer<never>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
        get type(): $RecipeType<never>;
        get ingredients(): $NonNullList<$Ingredient>;
        get group(): string;
        get special(): boolean;
    }
    export class $RecipeManager$CachedCheck<I extends $RecipeInput, T extends $Recipe<I>> {
    }
    export interface $RecipeManager$CachedCheck<I extends $RecipeInput, T extends $Recipe<I>> {
        getRecipeFor(arg0: I, arg1: $Level_): ($RecipeHolder<T>) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $RecipeManager$CachedCheck}.
     */
    export type $RecipeManager$CachedCheck_<I, T> = ((arg0: I, arg1: $Level) => ($RecipeHolder_<T>) | undefined);
    export class $RecipeType<T extends $Recipe<never>> {
        static simple<T extends $Recipe<never>>(arg0: $ResourceLocation_): $RecipeType<T>;
        static register<T extends $Recipe<never>>(arg0: string): $RecipeType<T>;
        static BLASTING: $RecipeType<$BlastingRecipe>;
        static STONECUTTING: $RecipeType<$StonecutterRecipe>;
        static CRAFTING: $RecipeType<$CraftingRecipe>;
        static SMELTING: $RecipeType<$SmeltingRecipe>;
        static SMOKING: $RecipeType<$SmokingRecipe>;
        static CAMPFIRE_COOKING: $RecipeType<$CampfireCookingRecipe>;
        static SMITHING: $RecipeType<$SmithingRecipe>;
    }
    export interface $RecipeType<T extends $Recipe<never>> {
    }
    /**
     * Values that may be interpreted as {@link $RecipeType}.
     */
    export type $RecipeType_<T> = RegistryTypes.RecipeType;
    export class $SmeltingRecipe extends $AbstractCookingRecipe {
        ingredient: $Ingredient;
        constructor(arg0: string, arg1: $CookingBookCategory_, arg2: $Ingredient_, arg3: $ItemStack_, arg4: number, arg5: number);
    }
    export class $AbstractCookingRecipe$Factory<T extends $AbstractCookingRecipe> {
    }
    export interface $AbstractCookingRecipe$Factory<T extends $AbstractCookingRecipe> {
        create(arg0: string, arg1: $CookingBookCategory_, arg2: $Ingredient_, arg3: $ItemStack_, arg4: number, arg5: number): T;
    }
    /**
     * Values that may be interpreted as {@link $AbstractCookingRecipe$Factory}.
     */
    export type $AbstractCookingRecipe$Factory_<T> = ((arg0: string, arg1: $CookingBookCategory, arg2: $Ingredient, arg3: $ItemStack, arg4: number, arg5: number) => T);
    export class $RecipeInput {
    }
    export interface $RecipeInput extends $RecipeInputKJS, $RecipeInputMixin {
        getItem(arg0: number): $ItemStack;
        size(): number;
        isEmpty(): boolean;
        get empty(): boolean;
    }
    export class $RecipeSerializer<T extends $Recipe<never>> {
        static register<S extends $RecipeSerializer<T>, T extends $Recipe<never>>(arg0: string, arg1: S): S;
        static MAP_CLONING: $RecipeSerializer<$MapCloningRecipe>;
        static SMELTING_RECIPE: $RecipeSerializer<$SmeltingRecipe>;
        static REPAIR_ITEM: $RecipeSerializer<$RepairItemRecipe>;
        static FIREWORK_STAR: $RecipeSerializer<$FireworkStarRecipe>;
        static FIREWORK_STAR_FADE: $RecipeSerializer<$FireworkStarFadeRecipe>;
        static SMOKING_RECIPE: $RecipeSerializer<$SmokingRecipe>;
        static SHAPED_RECIPE: $RecipeSerializer<$ShapedRecipe>;
        static ARMOR_DYE: $RecipeSerializer<$ArmorDyeRecipe>;
        static MAP_EXTENDING: $RecipeSerializer<$MapExtendingRecipe>;
        static BOOK_CLONING: $RecipeSerializer<$BookCloningRecipe>;
        static SMITHING_TRANSFORM: $RecipeSerializer<$SmithingTransformRecipe>;
        static BANNER_DUPLICATE: $RecipeSerializer<$BannerDuplicateRecipe>;
        static CAMPFIRE_COOKING_RECIPE: $RecipeSerializer<$CampfireCookingRecipe>;
        static STONECUTTER: $RecipeSerializer<$StonecutterRecipe>;
        static DECORATED_POT_RECIPE: $RecipeSerializer<$DecoratedPotRecipe>;
        static TIPPED_ARROW: $RecipeSerializer<$TippedArrowRecipe>;
        static SHIELD_DECORATION: $RecipeSerializer<$ShieldDecorationRecipe>;
        static BLASTING_RECIPE: $RecipeSerializer<$BlastingRecipe>;
        static SHAPELESS_RECIPE: $RecipeSerializer<$ShapelessRecipe>;
        static SHULKER_BOX_COLORING: $RecipeSerializer<$ShulkerBoxColoring>;
        static SMITHING_TRIM: $RecipeSerializer<$SmithingTrimRecipe>;
        static SUSPICIOUS_STEW: $RecipeSerializer<$SuspiciousStewRecipe>;
        static FIREWORK_ROCKET: $RecipeSerializer<$FireworkRocketRecipe>;
    }
    export interface $RecipeSerializer<T extends $Recipe<never>> {
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
    }
    /**
     * Values that may be interpreted as {@link $RecipeSerializer}.
     */
    export type $RecipeSerializer_<T> = RegistryTypes.RecipeSerializer;
    export class $FireworkStarFadeRecipe extends $CustomRecipe {
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        constructor(arg0: $CraftingBookCategory_);
    }
    export class $RepairItemRecipe extends $CustomRecipe {
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        constructor(arg0: $CraftingBookCategory_);
    }
    export class $BookCloningRecipe extends $CustomRecipe {
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        getRemainingItems(arg0: $CraftingInput): $NonNullList<$ItemStack>;
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        constructor(arg0: $CraftingBookCategory_);
    }
}
