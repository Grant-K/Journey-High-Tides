import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $ItemCastingRecipe } from "@package/cy/jdkdigital/productivemetalworks/recipe";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";

declare module "@package/cy/jdkdigital/productivemetalworks/event" {
    export class $CastingRecipeEvent extends $Event implements $IModBusEvent {
        getRecipe(): $ItemCastingRecipe;
        hasRecipe(): boolean;
        setRecipe(arg0: $ItemCastingRecipe): void;
        cast: $ItemStack;
        level: $Level;
        fluid: $FluidStack;
        isTable: boolean;
        constructor(arg0: $Level_, arg1: $ItemStack_, arg2: $FluidStack_, arg3: boolean);
    }
}
