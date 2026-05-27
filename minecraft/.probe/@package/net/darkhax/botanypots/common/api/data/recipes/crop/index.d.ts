import { $Level_ } from "@package/net/minecraft/world/level";
import { $Consumer_, $Supplier } from "@package/java/util/function";
import { $RecipeHolder, $RecipeType } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $SidedReloadableCache } from "@package/net/darkhax/bookshelf/common/api/function";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $BotanyPotContext } from "@package/net/darkhax/botanypots/common/api/context";
import { $Display } from "@package/net/darkhax/botanypots/common/api/data/display/types";
import { $List, $Map } from "@package/java/util";
import { $RecipeCache, $BotanyPotRecipe } from "@package/net/darkhax/botanypots/common/api/data/recipes";

declare module "@package/net/darkhax/botanypots/common/api/data/recipes/crop" {
    export class $Crop extends $BotanyPotRecipe {
        onTick(arg0: $BotanyPotContext, arg1: $Level_): void;
        getDisplayState(arg0: $BotanyPotContext, arg1: $Level_): $List<$Display>;
        getRequiredGrowthTicks(arg0: $BotanyPotContext, arg1: $Level_): number;
        isGrowthSustained(arg0: $BotanyPotContext, arg1: $Level_): boolean;
        getLightLevelEmitted(arg0: $BotanyPotContext, arg1: $Level_): number;
        getBaseYield(arg0: $BotanyPotContext, arg1: $Level_): number;
        getYieldScale(arg0: $BotanyPotContext, arg1: $Level_): number;
        onGrowthTick(arg0: $BotanyPotContext, arg1: $Level_): void;
        canHarvest(arg0: $BotanyPotContext, arg1: $Level_): boolean;
        onHarvest(arg0: $BotanyPotContext, arg1: $Level_, arg2: $Consumer_<$ItemStack>): void;
        static getCrop(arg0: $Level_, arg1: $BotanyPotContext, arg2: $ItemStack_): $RecipeHolder<$Crop>;
        static RECIPES: $SidedReloadableCache<$Map<$ResourceLocation, $RecipeHolder<$Crop>>>;
        static CACHE: $SidedReloadableCache<$RecipeCache<$Crop>>;
        static TYPE: $Supplier<$RecipeType<$Crop>>;
        constructor();
    }
}
