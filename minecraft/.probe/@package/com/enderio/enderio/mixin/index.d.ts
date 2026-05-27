import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack } from "@package/net/minecraft/world/item";

declare module "@package/com/enderio/enderio/mixin" {
    export class $AbstractCookingRecipeAccessor {
    }
    export interface $AbstractCookingRecipeAccessor {
        getExperience(): number;
        getIngredient(): $Ingredient;
        getResult(): $ItemStack;
        get experience(): number;
        get ingredient(): $Ingredient;
        get result(): $ItemStack;
    }
}
