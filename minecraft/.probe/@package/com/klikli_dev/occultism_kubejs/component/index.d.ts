import { $Level } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Holder_ } from "@package/net/minecraft/core";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $RitualRecipe$EntityToSacrifice_, $RitualRecipe$EntityToSacrifice } from "@package/com/klikli_dev/occultism/crafting/recipe";
import { $StringReader } from "@package/com/mojang/brigadier";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $IsInBiomeCondition, $IsInDimensionTypeCondition, $IsInBiomeWithTagCondition, $IsInDimensionCondition } from "@package/com/klikli_dev/occultism/crafting/recipe/conditionextension/condition";
import { $WeightedRecipeResult, $RecipeResult } from "@package/com/klikli_dev/occultism/crafting/recipe/result";
import { $Object } from "@package/java/lang";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";

declare module "@package/com/klikli_dev/occultism_kubejs/component" {
    export class $IsInDimensionConditionWrapper {
        /**
         * Returns an IsInDimensionCondition of the input
         */
        static of(arg0: $IsInDimensionCondition): $IsInDimensionCondition;
        /**
         * Returns an IsInDimensionCondition of the input
         */
        static of(arg0: $ResourceKey_<$Level>): $IsInDimensionCondition;
    }
    export interface $IsInDimensionConditionWrapper {
    }
    export class $IsInBiomeWithTagConditionWrapper {
        /**
         * Returns an IsInBiomeWithTagCondition of the input
         */
        static of(arg0: $IsInBiomeWithTagCondition): $IsInBiomeWithTagCondition;
        /**
         * Returns an IsInBiomeWithTagCondition of the input
         */
        static of(arg0: $TagKey_<$Biome>): $IsInBiomeWithTagCondition;
    }
    export interface $IsInBiomeWithTagConditionWrapper {
    }
    export class $IsInBiomeConditionWrapper {
        /**
         * Returns an IsInBiomeCondition of the input
         */
        static of(arg0: $IsInBiomeCondition): $IsInBiomeCondition;
        /**
         * Returns an IsInBiomeCondition of the input
         */
        static of(arg0: $Holder_<$Biome>): $IsInBiomeCondition;
    }
    export interface $IsInBiomeConditionWrapper {
    }
    export class $RecipeResultWrapper {
        static ofString(arg1: string): $RecipeResult;
        static wrap(arg1: $Object): $RecipeResult;
        /**
         * Returns an RecipeResult of the input
         */
        static of(arg0: $RecipeResult): $RecipeResult;
        /**
         * Returns an RecipeResult of the input
         */
        static of(arg0: $RecipeResult, arg1: number): $RecipeResult;
        static read(arg1: $StringReader): $RecipeResult;
    }
    export interface $RecipeResultWrapper {
    }
    export class $EntityToSacrificeWrapper {
        /**
         * Returns an RitualRecipe.EntityToSacrifice of the input
         */
        static of(arg0: $RitualRecipe$EntityToSacrifice_): $RitualRecipe$EntityToSacrifice;
        /**
         * Returns an RitualRecipe.EntityToSacrifice of the input
         */
        static of(arg0: $TagKey_<$EntityType<never>>, arg1: string): $RitualRecipe$EntityToSacrifice;
    }
    export interface $EntityToSacrificeWrapper {
    }
    export class $IsInDimensionTypeConditionWrapper {
        /**
         * Returns an IsInDimensionTypeCondition of the input
         */
        static of(arg0: $IsInDimensionTypeCondition): $IsInDimensionTypeCondition;
        /**
         * Returns an IsInDimensionTypeCondition of the input
         */
        static of(arg0: $Holder_<$DimensionType>): $IsInDimensionTypeCondition;
    }
    export interface $IsInDimensionTypeConditionWrapper {
    }
    export class $WeightedRecipeResultWrapper {
        static ofString(arg1: string): $WeightedRecipeResult;
        static wrap(arg1: $Object): $WeightedRecipeResult;
        /**
         * Returns an WeightedRecipeResult of the input
         */
        static of(arg0: $WeightedRecipeResult): $WeightedRecipeResult;
        static of(arg0: $WeightedRecipeResult, arg1: number, arg2: number): $WeightedRecipeResult;
        /**
         * Returns an WeightedRecipeResult of the input
         */
        static of(arg0: $WeightedRecipeResult, arg1: number): $WeightedRecipeResult;
        static read(arg1: $StringReader): $WeightedRecipeResult;
    }
    export interface $WeightedRecipeResultWrapper {
    }
}
