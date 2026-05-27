import { $RegisterBrewingRecipesEvent } from "@package/net/neoforged/neoforge/event/brewing";
import { $DeferredRegister } from "@package/net/neoforged/neoforge/registries";
import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $Potion } from "@package/net/minecraft/world/item/alchemy";

declare module "@package/io/redspace/ironsspellbooks/registries" {
    export class $PotionRegistry {
        static addRecipes(arg0: $RegisterBrewingRecipesEvent): void;
        static register(arg0: $IEventBus): void;
        static POTIONS: $DeferredRegister<$Potion>;
        static INSTANT_MANA_ONE: never;
        static INSTANT_MANA_TWO: never;
        static INSTANT_MANA_FOUR: never;
        static INSTANT_MANA_THREE: never;
        constructor();
    }
}
