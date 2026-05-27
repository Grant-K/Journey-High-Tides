import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $List } from "@package/java/util";
import { $BlockRecipe, $BlockRecipeType, $BlockRecipeIngredient, $BlockRecipeSerializer } from "@package/rbasamoyai/createbigcannons/crafting";

declare module "@package/rbasamoyai/createbigcannons/crafting/boring" {
    export class $DrillBoringBlockRecipe implements $BlockRecipe {
        ingredients(): $List<$ItemStack>;
        getSerializer(): $BlockRecipeSerializer<never>;
        getResultState(arg0: $BlockState_): $BlockState;
        getResultBlock(): $Block;
        assembleInWorld(arg0: $Level_, arg1: $BlockPos_): void;
        matches(arg0: $BlockState_, arg1: $Direction_): boolean;
        matches(arg0: $Level_, arg1: $BlockPos_): boolean;
        getType(): $BlockRecipeType<never>;
        constructor(arg0: $BlockRecipeIngredient, arg1: $Block_, arg2: boolean);
        get serializer(): $BlockRecipeSerializer<never>;
        get resultBlock(): $Block;
        get type(): $BlockRecipeType<never>;
    }
}
