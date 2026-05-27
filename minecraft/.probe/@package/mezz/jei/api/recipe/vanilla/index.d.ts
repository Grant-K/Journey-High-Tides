import { $CraftingBookCategory_, $Ingredient_, $CraftingRecipe } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $List, $List_ } from "@package/java/util";

declare module "@package/mezz/jei/api/recipe/vanilla" {
    export class $IVanillaRecipeFactory {
    }
    export interface $IVanillaRecipeFactory {
        createGrindstoneRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>, arg3: number, arg4: number, arg5: $ResourceLocation_): $IJeiGrindstoneRecipe;
        createBrewingRecipe(arg0: $List_<$ItemStack_>, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $ResourceLocation_): $IJeiBrewingRecipe;
        createBrewingRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $ItemStack_, arg3: $ResourceLocation_): $IJeiBrewingRecipe;
        /**
         * @deprecated
         */
        createBrewingRecipe(arg0: $List_<$ItemStack_>, arg1: $ItemStack_, arg2: $ItemStack_): $IJeiBrewingRecipe;
        /**
         * @deprecated
         */
        createBrewingRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $ItemStack_): $IJeiBrewingRecipe;
        createShapedRecipeBuilder(arg0: $CraftingBookCategory_, arg1: $List_<$ItemStack_>): $IJeiShapedRecipeBuilder;
        createAnvilRecipe(arg0: $ItemStack_, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>, arg3: $ResourceLocation_): $IJeiAnvilRecipe;
        createAnvilRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>, arg3: $ResourceLocation_): $IJeiAnvilRecipe;
        /**
         * @deprecated
         */
        createAnvilRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>): $IJeiAnvilRecipe;
        /**
         * @deprecated
         */
        createAnvilRecipe(arg0: $ItemStack_, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>): $IJeiAnvilRecipe;
    }
    export class $IJeiShapedRecipeBuilder {
    }
    export interface $IJeiShapedRecipeBuilder {
        build(): $CraftingRecipe;
        define(arg0: string, arg1: $Ingredient_): $IJeiShapedRecipeBuilder;
        group(arg0: string): $IJeiShapedRecipeBuilder;
        pattern(arg0: string): $IJeiShapedRecipeBuilder;
    }
    export class $IJeiGrindstoneRecipe {
    }
    export interface $IJeiGrindstoneRecipe {
        getUid(): $ResourceLocation;
        getTopInputs(): $List<$ItemStack>;
        getBottomInputs(): $List<$ItemStack>;
        getMinXpReward(): number;
        getMaxXpReward(): number;
        isOutputRenderOnly(): boolean;
        getOutputs(): $List<$ItemStack>;
        get uid(): $ResourceLocation;
        get topInputs(): $List<$ItemStack>;
        get bottomInputs(): $List<$ItemStack>;
        get minXpReward(): number;
        get maxXpReward(): number;
        get outputRenderOnly(): boolean;
        get outputs(): $List<$ItemStack>;
    }
    export class $IJeiBrewingRecipe {
    }
    export interface $IJeiBrewingRecipe {
        getPotionInputs(): $List<$ItemStack>;
        getPotionOutput(): $ItemStack;
        getUid(): $ResourceLocation;
        getIngredients(): $List<$ItemStack>;
        getBrewingSteps(): number;
        get potionInputs(): $List<$ItemStack>;
        get potionOutput(): $ItemStack;
        get uid(): $ResourceLocation;
        get ingredients(): $List<$ItemStack>;
        get brewingSteps(): number;
    }
    export class $IJeiAnvilRecipe {
    }
    export interface $IJeiAnvilRecipe {
        getUid(): $ResourceLocation;
        getLeftInputs(): $List<$ItemStack>;
        getRightInputs(): $List<$ItemStack>;
        getOutputs(): $List<$ItemStack>;
        get uid(): $ResourceLocation;
        get leftInputs(): $List<$ItemStack>;
        get rightInputs(): $List<$ItemStack>;
        get outputs(): $List<$ItemStack>;
    }
}
