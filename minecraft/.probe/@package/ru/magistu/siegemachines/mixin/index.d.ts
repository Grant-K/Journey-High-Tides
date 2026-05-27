import { $RecipeHolder, $RecipeInput, $RecipeType, $RecipeHolder_, $Recipe, $RecipeType_ } from "@package/net/minecraft/world/item/crafting";
import { $Collection, $Collection_ } from "@package/java/util";

declare module "@package/ru/magistu/siegemachines/mixin" {
    export class $EntityAccessForge {
    }
    export interface $EntityAccessForge {
        setIsAddedToLevel(arg0: boolean): void;
        set isAddedToLevel(value: boolean);
    }
    /**
     * Values that may be interpreted as {@link $EntityAccessForge}.
     */
    export type $EntityAccessForge_ = ((arg0: boolean) => void);
    export class $RecipeManagerAccessForge {
    }
    export interface $RecipeManagerAccessForge {
        invokeByType<I extends $RecipeInput, T extends $Recipe<I>>(arg0: $RecipeType_<T>): $Collection<$RecipeHolder<T>>;
    }
    /**
     * Values that may be interpreted as {@link $RecipeManagerAccessForge}.
     */
    export type $RecipeManagerAccessForge_ = ((arg0: $RecipeType<any>) => $Collection_<$RecipeHolder_<any>>);
}
