import { $Level_ } from "@package/net/minecraft/world/level";
import { $Supplier } from "@package/java/util/function";
import { $RecipeHolder, $RecipeType } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $SidedReloadableCache } from "@package/net/darkhax/bookshelf/common/api/function";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Display } from "@package/net/darkhax/botanypots/common/api/data/display/types";
import { $BotanyPotContext } from "@package/net/darkhax/botanypots/common/api/context";
import { $Map } from "@package/java/util";
import { $BotanyPotRecipe, $RecipeCache } from "@package/net/darkhax/botanypots/common/api/data/recipes";

declare module "@package/net/darkhax/botanypots/common/api/data/recipes/soil" {
    export class $Soil extends $BotanyPotRecipe {
        onTick(arg0: $BotanyPotContext, arg1: $Level_): void;
        static getSoil(arg0: $Level_, arg1: $BotanyPotContext, arg2: $ItemStack_): $RecipeHolder<$Soil>;
        getLightLevel(arg0: $BotanyPotContext, arg1: $Level_): number;
        getDisplay(arg0: $BotanyPotContext, arg1: $Level_): $Display;
        getGrowthModifier(arg0: $BotanyPotContext, arg1: $Level_): number;
        getYieldModifier(arg0: $BotanyPotContext, arg1: $Level_): number;
        static TYPE_ID: $ResourceLocation;
        static RECIPES: $SidedReloadableCache<$Map<$ResourceLocation, $RecipeHolder<$Soil>>>;
        static CACHE: $SidedReloadableCache<$RecipeCache<$Soil>>;
        static TYPE: $Supplier<$RecipeType<$Soil>>;
        constructor();
    }
}
