import { $LevelAccessor } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $ItemStack, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $RecipeManager, $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List_ } from "@package/java/util";

declare module "@package/com/blakebr0/cucumber/event" {
    export class $RecipeManagerLoadedEvent extends $Event {
        getRecipeManager(): $RecipeManager;
        constructor(arg0: $RecipeManager);
        get recipeManager(): $RecipeManager;
    }
    export class $ScytheHarvestCropEvent extends $Event implements $ICancellableEvent {
        getItemStack(): $ItemStack;
        getPos(): $BlockPos;
        getPlayer(): $Player;
        getLevel(): $LevelAccessor;
        getState(): $BlockState;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ItemStack_, arg4: $Player);
        get itemStack(): $ItemStack;
        get pos(): $BlockPos;
        get player(): $Player;
        get level(): $LevelAccessor;
        get state(): $BlockState;
    }
    export class $RecipeManagerLoadingEvent extends $Event {
        getRecipeManager(): $RecipeManager;
        addRecipe(arg0: $RecipeHolder_<never>): void;
        constructor(arg0: $RecipeManager, arg1: $List_<$RecipeHolder_<never>>);
        get recipeManager(): $RecipeManager;
    }
    export class $ItemBreakEvent extends $Event {
        getItemStack(): $ItemStack;
        getAmount(): number;
        getLevel(): $ServerLevel;
        getEntity(): $LivingEntity;
        getItem(): $Item;
        constructor(arg0: $ItemStack_, arg1: number, arg2: $ServerLevel, arg3: $LivingEntity);
        get itemStack(): $ItemStack;
        get amount(): number;
        get level(): $ServerLevel;
        get entity(): $LivingEntity;
        get item(): $Item;
    }
}
