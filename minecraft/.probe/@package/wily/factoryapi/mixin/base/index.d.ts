import { $RecipeHolder, $RecipeType_, $RecipeType, $RecipeHolder_, $Recipe } from "@package/net/minecraft/world/item/crafting";
import { $MenuScreens$ScreenConstructor } from "@package/net/minecraft/client/gui/screens";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $RealmsAvailability$Result_ } from "@package/com/mojang/realmsclient";
import { $FontSet } from "@package/net/minecraft/client/gui/font";
import { $MenuType$MenuSupplier_, $MenuType$MenuSupplier, $MenuType_, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Collection_, $Collection } from "@package/java/util";

declare module "@package/wily/factoryapi/mixin/base" {
    export class $TabNavigationBarAccessor {
    }
    export interface $TabNavigationBarAccessor {
        getCurrentTabIndex(): number;
        get currentTabIndex(): number;
    }
    /**
     * Values that may be interpreted as {@link $TabNavigationBarAccessor}.
     */
    export type $TabNavigationBarAccessor_ = (() => number);
    export class $FontAccessor {
    }
    export interface $FontAccessor {
        getDefaultFontSet(arg0: $ResourceLocation_): $FontSet;
        getFilterFishyGlyphs(): boolean;
        get filterFishyGlyphs(): boolean;
    }
    export class $MenuTypeAccessor {
    }
    export interface $MenuTypeAccessor {
        getConstructor(): $MenuType$MenuSupplier<never>;
        get constructor(): $MenuType$MenuSupplier<never>;
    }
    /**
     * Values that may be interpreted as {@link $MenuTypeAccessor}.
     */
    export type $MenuTypeAccessor_ = (() => $MenuType$MenuSupplier_<never>);
    export class $RealmsAvailabilityAccessor {
        static setFuture(userProperties: $CompletableFuture<$RealmsAvailability$Result_>): void;
        static set future(value: $CompletableFuture<$RealmsAvailability$Result_>);
    }
    export interface $RealmsAvailabilityAccessor {
    }
    export class $RecipeManagerAccessor {
    }
    export interface $RecipeManagerAccessor {
        getRecipeByType<R extends $Recipe<never>>(arg0: $RecipeType_<R>): $Collection<$RecipeHolder<R>>;
    }
    /**
     * Values that may be interpreted as {@link $RecipeManagerAccessor}.
     */
    export type $RecipeManagerAccessor_ = ((arg0: $RecipeType<any>) => $Collection_<$RecipeHolder_<any>>);
    export class $MenuScreensAccessor {
        static getConstructor<T extends $AbstractContainerMenu>(menuType: $MenuType_<T>): $MenuScreens$ScreenConstructor<T, never>;
    }
    export interface $MenuScreensAccessor {
    }
}
