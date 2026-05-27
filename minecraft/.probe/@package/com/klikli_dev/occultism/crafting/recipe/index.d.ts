import { $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $RecipeSerializer, $Ingredient, $Ingredient_, $SingleRecipeInput_, $Recipe, $SingleRecipeInput, $RecipeType } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType_, $EntityType } from "@package/net/minecraft/world/entity";
import { $Ritual } from "@package/com/klikli_dev/occultism/common/ritual";
import { $HolderLookup$Provider, $BlockPos_, $NonNullList } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Multiblock } from "@package/com/klikli_dev/modonomicon/api/multiblock";
import { $ICondition } from "@package/net/neoforged/neoforge/common/conditions";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as conditionextension from "@package/com/klikli_dev/occultism/crafting/recipe/conditionextension";
export * as result from "@package/com/klikli_dev/occultism/crafting/recipe/result";

declare module "@package/com/klikli_dev/occultism/crafting/recipe" {
    export class $RitualRecipe$RitualRequirementSettings extends $Record {
        pentacleId(): $ResourceLocation;
        durationPerIngredient(): number;
        ingredients(): $NonNullList<$Ingredient>;
        activationItem(): $Ingredient;
        duration(): number;
        static CODEC: $MapCodec<$RitualRecipe$RitualRequirementSettings>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $RitualRecipe$RitualRequirementSettings>;
        constructor(pentacleId: $ResourceLocation_, ingredients: $NonNullList<$Ingredient_>, activationItem: $Ingredient_, duration: number, durationPerIngredient: number);
    }
    /**
     * Values that may be interpreted as {@link $RitualRecipe$RitualRequirementSettings}.
     */
    export type $RitualRecipe$RitualRequirementSettings_ = { duration?: number, activationItem?: $Ingredient_, durationPerIngredient?: number, ingredients?: $NonNullList<$Ingredient_>, pentacleId?: $ResourceLocation_,  } | [duration?: number, activationItem?: $Ingredient_, durationPerIngredient?: number, ingredients?: $NonNullList<$Ingredient_>, pentacleId?: $ResourceLocation_, ];
    export class $RitualRecipe$Serializer implements $RecipeSerializer<$RitualRecipe> {
        codec(): $MapCodec<$RitualRecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $RitualRecipe>;
        constructor();
    }
    export class $RitualRecipe$EntityToSummonSettings extends $Record {
        spiritMaxAge(): number;
        entityToSummon(): $EntityType<never>;
        entityTagToSummon(): $TagKey<$EntityType<never>>;
        spiritJobType(): $ResourceLocation;
        summonNumber(): number;
        entityNbt(): $CompoundTag;
        static CODEC: $MapCodec<$RitualRecipe$EntityToSummonSettings>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $RitualRecipe$EntityToSummonSettings>;
        constructor(entityToSummon: $EntityType_<never>, entityTagToSummon: $TagKey_<$EntityType<never>>, entityNbt: $CompoundTag_, spiritJobType: $ResourceLocation_, spiritMaxAge: number, summonNumber: number);
    }
    /**
     * Values that may be interpreted as {@link $RitualRecipe$EntityToSummonSettings}.
     */
    export type $RitualRecipe$EntityToSummonSettings_ = { spiritJobType?: $ResourceLocation_, entityToSummon?: $EntityType_<never>, entityTagToSummon?: $TagKey_<$EntityType<never>>, entityNbt?: $CompoundTag_, summonNumber?: number, spiritMaxAge?: number,  } | [spiritJobType?: $ResourceLocation_, entityToSummon?: $EntityType_<never>, entityTagToSummon?: $TagKey_<$EntityType<never>>, entityNbt?: $CompoundTag_, summonNumber?: number, spiritMaxAge?: number, ];
    export class $RitualRecipe implements $Recipe<$SingleRecipeInput> {
        getEntityToSacrificeDisplayName(): string;
        getActivationItemStack(): $ItemStack[];
        getRitualType(): $ResourceLocation;
        getSpiritJobType(): $ResourceLocation;
        getSummonNumber(): number;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getCommand(): string;
        assemble(arg0: $SingleRecipeInput_, arg1: $HolderLookup$Provider): $ItemStack;
        getSerializer(): $RecipeSerializer<never>;
        getIngredients(): $NonNullList<$Ingredient>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getDuration(): number;
        getCondition(): $ICondition;
        getRitual(): $Ritual;
        getRitualDummy(): $ItemStack;
        getPentacleId(): $ResourceLocation;
        getPentacle(): $Multiblock;
        getActivationItem(): $Ingredient;
        getDurationPerIngredient(): number;
        requiresSacrifice(): boolean;
        getEntityToSacrifice(): $TagKey<$EntityType<never>>;
        requiresItemUse(): boolean;
        getItemToUse(): $Ingredient;
        getEntityNbt(): $CompoundTag;
        getEntityToSummon(): $EntityType<never>;
        getEntityTagToSummon(): $TagKey<$EntityType<never>>;
        getSpiritMaxAge(): number;
        isSpecial(): boolean;
        matches(arg0: $SingleRecipeInput_, arg1: $Level_): boolean;
        matches(arg0: $Level_, arg1: $BlockPos_, arg2: $ItemStack_): boolean;
        getType(): $RecipeType<never>;
        getRemainingItems(arg0: $SingleRecipeInput_): $NonNullList<$ItemStack>;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        showNotification(): boolean;
        getGroup(): string;
        static CODEC: $MapCodec<$RitualRecipe>;
        static DEFAULT_DURATION: number;
        static SERIALIZER: $RitualRecipe$Serializer;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $RitualRecipe>;
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: $ItemStack_, arg3: $ItemStack_, arg4: $EntityType_<never>, arg5: $TagKey_<$EntityType<never>>, arg6: $CompoundTag_, arg7: $Ingredient_, arg8: $NonNullList<$Ingredient_>, arg9: number, arg10: number, arg11: number, arg12: $ResourceLocation_, arg13: $RitualRecipe$EntityToSacrifice_, arg14: $Ingredient_, arg15: string);
        constructor(arg0: $ResourceLocation_, arg1: $RitualRecipe$RitualRequirementSettings_, arg2: $RitualRecipe$RitualStartSettings_, arg3: $RitualRecipe$EntityToSummonSettings_, arg4: $ItemStack_, arg5: $ItemStack_, arg6: string);
        get entityToSacrificeDisplayName(): string;
        get activationItemStack(): $ItemStack[];
        get ritualType(): $ResourceLocation;
        get spiritJobType(): $ResourceLocation;
        get summonNumber(): number;
        get command(): string;
        get serializer(): $RecipeSerializer<never>;
        get ingredients(): $NonNullList<$Ingredient>;
        get duration(): number;
        get condition(): $ICondition;
        get ritual(): $Ritual;
        get ritualDummy(): $ItemStack;
        get pentacleId(): $ResourceLocation;
        get pentacle(): $Multiblock;
        get activationItem(): $Ingredient;
        get durationPerIngredient(): number;
        get entityToSacrifice(): $TagKey<$EntityType<never>>;
        get itemToUse(): $Ingredient;
        get entityNbt(): $CompoundTag;
        get entityToSummon(): $EntityType<never>;
        get entityTagToSummon(): $TagKey<$EntityType<never>>;
        get spiritMaxAge(): number;
        get special(): boolean;
        get type(): $RecipeType<never>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
        get group(): string;
    }
    export class $RitualRecipe$EntityToSacrifice extends $Record {
        tag(): $TagKey<$EntityType<never>>;
        displayName(): string;
        static CODEC: $MapCodec<$RitualRecipe$EntityToSacrifice>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $RitualRecipe$EntityToSacrifice>;
        constructor(tag: $TagKey_<$EntityType<never>>, displayName: string);
    }
    /**
     * Values that may be interpreted as {@link $RitualRecipe$EntityToSacrifice}.
     */
    export type $RitualRecipe$EntityToSacrifice_ = { displayName?: string, tag?: $TagKey_<$EntityType<never>>,  } | [displayName?: string, tag?: $TagKey_<$EntityType<never>>, ];
    export class $RitualRecipe$RitualStartSettings extends $Record {
        getEntityToSacrificeDisplayName(): string;
        entityToSacrifice(): $RitualRecipe$EntityToSacrifice;
        itemToUse(): $Ingredient;
        requiresSacrifice(): boolean;
        requiresItemUse(): boolean;
        condition(): $ICondition;
        static CODEC: $MapCodec<$RitualRecipe$RitualStartSettings>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $RitualRecipe$RitualStartSettings>;
        constructor(entityToSacrifice: $RitualRecipe$EntityToSacrifice_, itemToUse: $Ingredient_, condition: $ICondition);
        get entityToSacrificeDisplayName(): string;
    }
    /**
     * Values that may be interpreted as {@link $RitualRecipe$RitualStartSettings}.
     */
    export type $RitualRecipe$RitualStartSettings_ = { condition?: $ICondition, entityToSacrifice?: $RitualRecipe$EntityToSacrifice_, itemToUse?: $Ingredient_,  } | [condition?: $ICondition, entityToSacrifice?: $RitualRecipe$EntityToSacrifice_, itemToUse?: $Ingredient_, ];
}
