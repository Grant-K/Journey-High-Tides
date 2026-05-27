import { $Level_ } from "@package/net/minecraft/world/level";
import { $Supplier_, $Consumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $RecipeHolder, $Ingredient, $RecipeType, $Recipe } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Codec } from "@package/com/mojang/serialization";
import { $Component } from "@package/net/minecraft/network/chat";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $SidedReloadableCache } from "@package/net/darkhax/bookshelf/common/api/function";
import { $Multimap } from "@package/com/google/common/collect";
import { $BotanyPotContext } from "@package/net/darkhax/botanypots/common/api/context";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as soil from "@package/net/darkhax/botanypots/common/api/data/recipes/soil";
export * as crop from "@package/net/darkhax/botanypots/common/api/data/recipes/crop";

declare module "@package/net/darkhax/botanypots/common/api/data/recipes" {
    export class $BotanyPotRecipe implements $Recipe<$BotanyPotContext> {
        static recipeCodec<T extends $Recipe<never>>(arg0: $Supplier_<$RecipeType<T>>): $Codec<T>;
        couldMatch(arg0: $ItemStack_, arg1: $BotanyPotContext, arg2: $Level_): boolean;
        hoverTooltip(arg0: $ItemStack_, arg1: $BotanyPotContext, arg2: $Level_, arg3: $Consumer_<$Component>): void;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        assemble(arg0: $BotanyPotContext, arg1: $HolderLookup$Provider): $ItemStack;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        static recipeStream<T extends $Recipe<never>>(arg0: $Supplier_<$RecipeType<T>>): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        isSpecial(): boolean;
        getRemainingItems(arg0: $BotanyPotContext): $NonNullList<$ItemStack>;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        getGroup(): string;
        constructor();
        get special(): boolean;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
        get ingredients(): $NonNullList<$Ingredient>;
        get group(): string;
    }
    export class $RecipeCache<T extends $BotanyPotRecipe> {
        getCachedValues(): $Multimap<$Item, $RecipeHolder<T>>;
        isCached(arg0: $ItemStack_): boolean;
        static of<T extends $BotanyPotRecipe>(arg0: $Supplier_<$RecipeType<T>>): $SidedReloadableCache<$RecipeCache<T>>;
        lookup(arg0: $ItemStack_, arg1: $BotanyPotContext, arg2: $Level_): $RecipeHolder<T>;
        get cachedValues(): $Multimap<$Item, $RecipeHolder<T>>;
    }
}
