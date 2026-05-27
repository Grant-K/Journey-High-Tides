import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $Codec } from "@package/com/mojang/serialization";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IGuiProperties, $IGhostIngredientHandler, $IGuiClickableArea } from "@package/mezz/jei/api/gui/handlers";
import { $IJeiHelpers } from "@package/mezz/jei/api/helpers";
import { $IJeiConfigManager } from "@package/mezz/jei/api/runtime/config";
import { $List, $Set, $Collection_, $List_, $Collection } from "@package/java/util";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $IRecipeTransferManager } from "@package/mezz/jei/api/recipe/transfer";
import { $IRecipeCategory } from "@package/mezz/jei/api/recipe/category";
import { $IClickableIngredientFactory } from "@package/mezz/jei/api/gui/builder";
import { $IIngredientType_, $IIngredientRenderer, $IIngredientTypeWithSubtypes, $IIngredientType, $ITypedIngredient, $IIngredientHelper } from "@package/mezz/jei/api/ingredients";
import { $Stream } from "@package/java/util/stream";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $AbstractContainerScreen } from "@package/net/minecraft/client/gui/screens/inventory";
import { $IRecipeManager, $RecipeType, $IFocus } from "@package/mezz/jei/api/recipe";
import { $Enum, $Class } from "@package/java/lang";
export * as config from "@package/mezz/jei/api/runtime/config";

declare module "@package/mezz/jei/api/runtime" {
    export class $IEditModeConfig$HideMode extends $Enum<$IEditModeConfig$HideMode> {
        static values(): $IEditModeConfig$HideMode[];
        static valueOf(arg0: string): $IEditModeConfig$HideMode;
        static WILDCARD: $IEditModeConfig$HideMode;
        static SINGLE: $IEditModeConfig$HideMode;
    }
    /**
     * Values that may be interpreted as {@link $IEditModeConfig$HideMode}.
     */
    export type $IEditModeConfig$HideMode_ = "single" | "wildcard";
    export class $IClickableIngredient<T> {
    }
    export interface $IClickableIngredient<T> {
        getTypedIngredient(): $ITypedIngredient<T>;
        /**
         * @deprecated
         */
        getIngredient(): T;
        getArea(): $Rect2i;
        /**
         * @deprecated
         */
        getIngredientType(): $IIngredientType<T>;
        get typedIngredient(): $ITypedIngredient<T>;
        get ingredient(): T;
        get area(): $Rect2i;
        get ingredientType(): $IIngredientType<T>;
    }
    export class $IIngredientManager$IIngredientListener {
    }
    export interface $IIngredientManager$IIngredientListener {
        onIngredientsAdded<V>(arg0: $IIngredientHelper<V>, arg1: $Collection_<$ITypedIngredient<V>>): void;
        onIngredientsRemoved<V>(arg0: $IIngredientHelper<V>, arg1: $Collection_<$ITypedIngredient<V>>): void;
    }
    export class $IEditModeConfig {
    }
    export interface $IEditModeConfig {
        getIngredientHiddenUsingConfigFile<V>(arg0: $ITypedIngredient<V>): $Set<$IEditModeConfig$HideMode>;
        hideIngredientUsingConfigFile<V>(arg0: $ITypedIngredient<V>, arg1: $IEditModeConfig$HideMode_): void;
        isIngredientHiddenUsingConfigFile<V>(arg0: $ITypedIngredient<V>): boolean;
        showIngredientUsingConfigFile<V>(arg0: $ITypedIngredient<V>, arg1: $IEditModeConfig$HideMode_): void;
    }
    export class $IScreenHelper {
    }
    export interface $IScreenHelper {
        getGhostIngredientHandlers<T extends $Screen>(arg0: T): $List<$IGhostIngredientHandler<T>>;
        getGuiProperties<T extends $Screen>(arg0: T): ($IGuiProperties) | undefined;
        getGuiClickableArea(arg0: $AbstractContainerScreen<never>, arg1: number, arg2: number): $Stream<$IGuiClickableArea>;
        getGuiExclusionAreas(arg0: $Screen): $Stream<$Rect2i>;
        /**
         * @deprecated
         */
        getGhostIngredientHandler<T extends $Screen>(arg0: T): ($IGhostIngredientHandler<T>) | undefined;
        getClickableIngredientUnderMouse(arg0: $Screen, arg1: number, arg2: number): $Stream<$IClickableIngredient<never>>;
    }
    export class $IJeiKeyMapping {
    }
    export interface $IJeiKeyMapping {
        isUnbound(): boolean;
        getTranslatedKeyMessage(): $Component;
        isActiveAndMatches(arg0: $InputConstants$Key): boolean;
        get unbound(): boolean;
        get translatedKeyMessage(): $Component;
    }
    export class $IJeiKeyMappings {
    }
    export interface $IJeiKeyMappings {
        getShowRecipe(): $IJeiKeyMapping;
        getShowUses(): $IJeiKeyMapping;
        get showRecipe(): $IJeiKeyMapping;
        get showUses(): $IJeiKeyMapping;
    }
    export class $IJeiRuntime {
    }
    export interface $IJeiRuntime {
        getRecipeManager(): $IRecipeManager;
        getKeyMappings(): $IJeiKeyMappings;
        getConfigManager(): $IJeiConfigManager;
        getIngredientListOverlay(): $IIngredientListOverlay;
        getBookmarkOverlay(): $IBookmarkOverlay;
        getScreenHelper(): $IScreenHelper;
        getRecipeTransferManager(): $IRecipeTransferManager;
        getEditModeConfig(): $IEditModeConfig;
        getJeiHelpers(): $IJeiHelpers;
        getIngredientManager(): $IIngredientManager;
        getIngredientFilter(): $IIngredientFilter;
        /**
         * @deprecated
         */
        getIngredientVisibility(): $IIngredientVisibility;
        getRecipesGui(): $IRecipesGui;
        get recipeManager(): $IRecipeManager;
        get keyMappings(): $IJeiKeyMappings;
        get configManager(): $IJeiConfigManager;
        get ingredientListOverlay(): $IIngredientListOverlay;
        get bookmarkOverlay(): $IBookmarkOverlay;
        get screenHelper(): $IScreenHelper;
        get recipeTransferManager(): $IRecipeTransferManager;
        get editModeConfig(): $IEditModeConfig;
        get jeiHelpers(): $IJeiHelpers;
        get ingredientManager(): $IIngredientManager;
        get ingredientFilter(): $IIngredientFilter;
        get ingredientVisibility(): $IIngredientVisibility;
        get recipesGui(): $IRecipesGui;
    }
    export class $IBookmarkOverlay {
    }
    export interface $IBookmarkOverlay {
        getItemStackUnderMouse(): $ItemStack;
        getIngredientUnderMouse<T>(arg0: $IIngredientType_<T>): T;
        getIngredientUnderMouse(): ($ITypedIngredient<never>) | undefined;
        get itemStackUnderMouse(): $ItemStack;
    }
    export class $IIngredientListOverlay {
    }
    export interface $IIngredientListOverlay {
        isListDisplayed(): boolean;
        getVisibleIngredients<T>(arg0: $IIngredientType_<T>): $List<T>;
        hasKeyboardFocus(): boolean;
        getIngredientUnderMouse<T>(arg0: $IIngredientType_<T>): T;
        getIngredientUnderMouse(): ($ITypedIngredient<never>) | undefined;
        get listDisplayed(): boolean;
    }
    export class $IJeiFeatures {
    }
    export interface $IJeiFeatures {
        disableInventoryEffectRendererGuiHandler(): void;
    }
    /**
     * Values that may be interpreted as {@link $IJeiFeatures}.
     */
    export type $IJeiFeatures_ = (() => void);
    export class $IRecipesGui {
    }
    export interface $IRecipesGui {
        showTypes(arg0: $List_<$RecipeType<never>>): void;
        show<V>(arg0: $IFocus<V>): void;
        show(arg0: $List_<$IFocus<never>>): void;
        getParentScreen(): ($Screen) | undefined;
        getIngredientUnderMouse<T>(arg0: $IIngredientType_<T>): (T) | undefined;
        showRecipes<T>(arg0: $IRecipeCategory<T>, arg1: $List_<T>, arg2: $List_<$IFocus<never>>): void;
        get parentScreen(): ($Screen) | undefined;
    }
    export class $IIngredientVisibility$IListener {
    }
    export interface $IIngredientVisibility$IListener {
        onIngredientVisibilityChanged<V>(arg0: $ITypedIngredient<V>, arg1: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $IIngredientVisibility$IListener}.
     */
    export type $IIngredientVisibility$IListener_ = ((arg0: $ITypedIngredient<any>, arg1: boolean) => void);
    export class $IIngredientManager {
    }
    export interface $IIngredientManager {
        /**
         * @deprecated
         */
        createClickableIngredient<V>(arg0: $IIngredientType_<V>, arg1: V, arg2: $Rect2i, arg3: boolean): ($IClickableIngredient<V>) | undefined;
        /**
         * @deprecated
         */
        createClickableIngredient<V>(arg0: V, arg1: $Rect2i, arg2: boolean): ($IClickableIngredient<V>) | undefined;
        getAllTypedIngredients<V>(arg0: $IIngredientType_<V>): $Collection<$ITypedIngredient<V>>;
        getIngredientRenderer<V>(arg0: $IIngredientType_<V>): $IIngredientRenderer<V>;
        getIngredientRenderer<V>(arg0: V): $IIngredientRenderer<V>;
        getIngredientTypeForUid(arg0: string): ($IIngredientType<never>) | undefined;
        normalizeTypedIngredient<V>(arg0: $ITypedIngredient<V>): $ITypedIngredient<V>;
        /**
         * @deprecated
         */
        getIngredientByUid<V>(arg0: $IIngredientType_<V>, arg1: string): (V) | undefined;
        /**
         * @deprecated
         */
        getTypedIngredientByUid<V>(arg0: $IIngredientType_<V>, arg1: string): ($ITypedIngredient<V>) | undefined;
        getIngredientAliases(arg0: $ITypedIngredient<never>): $Collection<string>;
        registerIngredientListener(arg0: $IIngredientManager$IIngredientListener): void;
        getRegisteredIngredientTypes(): $Collection<$IIngredientType<never>>;
        getClickableIngredientFactory(): $IClickableIngredientFactory;
        getAllItemStacks(): $Collection<$ItemStack>;
        addIngredientsAtRuntime<V>(arg0: $IIngredientType_<V>, arg1: $Collection_<V>): void;
        getIngredientHelper<V>(arg0: $IIngredientType_<V>): $IIngredientHelper<V>;
        getIngredientHelper<V>(arg0: V): $IIngredientHelper<V>;
        removeIngredientsAtRuntime<V>(arg0: $IIngredientType_<V>, arg1: $Collection_<V>): void;
        getIngredientType<V>(arg0: V): $IIngredientType<V>;
        getIngredientCodec<V>(arg0: $IIngredientType_<V>): $Codec<V>;
        getIngredientTypeChecked<V>(arg0: $Class<V>): ($IIngredientType<V>) | undefined;
        getIngredientTypeChecked<V>(arg0: V): ($IIngredientType<V>) | undefined;
        getIngredientTypeWithSubtypesFromBase<B, I>(arg0: B): ($IIngredientTypeWithSubtypes<B, I>) | undefined;
        getAllIngredients<V>(arg0: $IIngredientType_<V>): $Collection<V>;
        createTypedIngredient<T>(arg0: T, arg1: boolean): ($ITypedIngredient<T>) | undefined;
        createTypedIngredient<V>(arg0: $IIngredientType_<V>, arg1: V, arg2: boolean): ($ITypedIngredient<V>) | undefined;
        /**
         * @deprecated
         */
        createTypedIngredient<V>(arg0: $IIngredientType_<V>, arg1: V): ($ITypedIngredient<V>) | undefined;
        /**
         * @deprecated
         */
        createTypedIngredient<V>(arg0: V): ($ITypedIngredient<V>) | undefined;
        get registeredIngredientTypes(): $Collection<$IIngredientType<never>>;
        get clickableIngredientFactory(): $IClickableIngredientFactory;
        get allItemStacks(): $Collection<$ItemStack>;
    }
    export class $IIngredientVisibility {
    }
    export interface $IIngredientVisibility {
        isIngredientVisible<V>(arg0: $IIngredientType_<V>, arg1: V): boolean;
        isIngredientVisible<V>(arg0: $ITypedIngredient<V>): boolean;
        registerListener(arg0: $IIngredientVisibility$IListener_): void;
    }
    export class $IIngredientFilter {
    }
    export interface $IIngredientFilter {
        getFilteredIngredients<T>(arg0: $IIngredientType_<T>): $List<T>;
        getFilteredItemStacks(): $List<$ItemStack>;
        setFilterText(arg0: string): void;
        getFilterText(): string;
        get filteredItemStacks(): $List<$ItemStack>;
    }
}
