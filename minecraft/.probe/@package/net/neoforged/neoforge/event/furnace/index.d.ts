import { $RecipeType, $RecipeType_ } from "@package/net/minecraft/world/item/crafting";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";

declare module "@package/net/neoforged/neoforge/event/furnace" {
    export class $FurnaceFuelBurnTimeEvent extends $Event implements $ICancellableEvent {
        getItemStack(): $ItemStack;
        getBurnTime(): number;
        setBurnTime(arg0: number): void;
        getRecipeType(): $RecipeType<never>;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $ItemStack_, arg1: number, arg2: $RecipeType_<never>);
        get itemStack(): $ItemStack;
        get recipeType(): $RecipeType<never>;
    }
}
