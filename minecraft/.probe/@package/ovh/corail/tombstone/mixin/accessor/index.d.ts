import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ShapedRecipePattern } from "@package/net/minecraft/world/item/crafting";

declare module "@package/ovh/corail/tombstone/mixin/accessor" {
    export class $ShapedRecipeAccessor {
    }
    export interface $ShapedRecipeAccessor {
        getResult(): $ItemStack;
        getPattern(): $ShapedRecipePattern;
        get result(): $ItemStack;
        get pattern(): $ShapedRecipePattern;
    }
    export class $VillagerAccessor {
    }
    export interface $VillagerAccessor {
        callIncreaseMerchantCareer(): void;
    }
    /**
     * Values that may be interpreted as {@link $VillagerAccessor}.
     */
    export type $VillagerAccessor_ = (() => void);
    export class $ShapelessRecipeAccessor {
    }
    export interface $ShapelessRecipeAccessor {
        getResult(): $ItemStack;
        get result(): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $ShapelessRecipeAccessor}.
     */
    export type $ShapelessRecipeAccessor_ = (() => $ItemStack_);
}
