import { $Level_ } from "@package/net/minecraft/world/level";
import { $SizedFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $RecipeSerializer, $Ingredient_, $Ingredient, $RecipeInput, $RecipeType, $Recipe } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";

declare module "@package/cy/jdkdigital/productivemetalworks/recipe" {
    export class $ItemCastingRecipe implements $ICastingRecipe {
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getResultItem(arg0: $Level_, arg1: $FluidStack_): $ItemStack;
        assemble(arg0: $RecipeInput, arg1: $HolderLookup$Provider): $ItemStack;
        getSerializer(): $RecipeSerializer<never>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getFluidAmount(arg0: $Level_, arg1: $FluidStack_): number;
        isSpecial(): boolean;
        matches(arg0: $RecipeInput, arg1: $Level_): boolean;
        matches(arg0: $ItemStack_, arg1: $FluidStack_, arg2: $Level_): boolean;
        matches(arg0: $ItemStack_, arg1: $FluidStack_, arg2: boolean, arg3: $Level_): boolean;
        getType(): $RecipeType<never>;
        getRemainingItems(arg0: $RecipeInput): $NonNullList<$ItemStack>;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        showNotification(): boolean;
        getGroup(): string;
        result: $ItemStack;
        cast: $Ingredient;
        fluid: $SizedFluidIngredient;
        consumeCast: boolean;
        constructor(arg0: $Ingredient_, arg1: $SizedFluidIngredient, arg2: $ItemStack_, arg3: boolean);
        get serializer(): $RecipeSerializer<never>;
        get special(): boolean;
        get type(): $RecipeType<never>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
        get ingredients(): $NonNullList<$Ingredient>;
        get group(): string;
    }
    export class $ICastingRecipe {
    }
    export interface $ICastingRecipe extends $Recipe<$RecipeInput> {
        getResultItem(arg0: $Level_, arg1: $FluidStack_): $ItemStack;
        getFluidAmount(arg0: $Level_, arg1: $FluidStack_): number;
        matches(arg0: $ItemStack_, arg1: $FluidStack_, arg2: boolean, arg3: $Level_): boolean;
        matches(arg0: $ItemStack_, arg1: $FluidStack_, arg2: $Level_): boolean;
    }
}
