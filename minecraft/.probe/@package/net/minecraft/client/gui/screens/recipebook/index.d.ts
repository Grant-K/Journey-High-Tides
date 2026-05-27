import { $Ingredient, $Ingredient_, $RecipeHolder_, $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $NarratableEntry$NarrationPriority, $NarratableEntry, $NarrationElementOutput } from "@package/net/minecraft/client/gui/narration";
import { $AbstractWidget, $EditBox, $StateSwitchingButton, $WidgetSprites, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $ScreenRectangle, $FocusNavigationEvent_ } from "@package/net/minecraft/client/gui/navigation";
import { $StackedContents } from "@package/net/minecraft/world/entity/player";
import { $Minecraft, $ClientRecipeBook, $RecipeBookCategories, $RecipeBookCategories_ } from "@package/net/minecraft/client";
import { $Iterator, $List, $List_ } from "@package/java/util";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $RecipeBookComponentAccessor, $GhostRecipeAccessor } from "@package/umpaz/brewinandchewin/common/mixin/client";
import { $Slot, $RecipeBookMenu } from "@package/net/minecraft/world/inventory";
import { $GuiGraphics, $ComponentPath } from "@package/net/minecraft/client/gui";
import { $RecipeBook } from "@package/net/minecraft/stats";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";
import { $PlaceRecipe } from "@package/net/minecraft/recipebook";

declare module "@package/net/minecraft/client/gui/screens/recipebook" {
    export class $OverlayRecipeComponent$OverlayRecipeButton extends $AbstractWidget implements $PlaceRecipe<$Ingredient> {
        placeRecipe(arg0: number, arg1: number, arg2: number, arg3: $RecipeHolder_<never>, arg4: $Iterator<$Ingredient_>, arg5: number): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
    }
    export class $RecipeBookComponent implements $PlaceRecipe<$Ingredient>, $Renderable, $GuiEventListener, $NarratableEntry, $RecipeShownListener, $RecipeBookComponentAccessor {
        charTyped(arg0: string, arg1: number): boolean;
        isFocused(): boolean;
        renderTooltip(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        isMouseOver(arg0: number, arg1: number): boolean;
        updateNarration(arg0: $NarrationElementOutput): void;
        narrationPriority(): $NarratableEntry$NarrationPriority;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        setFocused(arg0: boolean): void;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        isVisible(): boolean;
        updateScreenPosition(arg0: number, arg1: number): number;
        renderGhostRecipe(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: boolean, arg4: number): void;
        hasClickedOutside(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
        slotClicked(arg0: $Slot): void;
        recipesUpdated(): void;
        toggleVisibility(): void;
        checkSearchStringUpdate(): void;
        initVisuals(): void;
        recipesShown(arg0: $List_<$RecipeHolder_<never>>): void;
        addItemToSlot(arg0: $Ingredient_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        tick(): void;
        setupGhostRecipe(arg0: $RecipeHolder_<never>, arg1: $List_<$Slot>): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        init(arg0: number, arg1: number, arg2: $Minecraft, arg3: boolean, arg4: $RecipeBookMenu<never, never>): void;
        placeRecipe(arg0: number, arg1: number, arg2: number, arg3: $RecipeHolder_<never>, arg4: $Iterator<$Ingredient_>, arg5: number): void;
        mouseMoved(arg0: number, arg1: number): void;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        getCurrentFocusPath(): $ComponentPath;
        getRectangle(): $ScreenRectangle;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        isActive(): boolean;
        getTabOrderGroup(): number;
        brewinandchewin$setStackedContents(arg0: $StackedContents): void;
        xOffset: number;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        recipeBookPage: $RecipeBookPage;
        height: number;
        tabButtons: $List<$RecipeBookTabButton>;
        searchBox: $EditBox;
        constructor();
        get visible(): boolean;
        get currentFocusPath(): $ComponentPath;
        get rectangle(): $ScreenRectangle;
        get active(): boolean;
        get tabOrderGroup(): number;
    }
    export class $SmeltingRecipeBookComponent extends $AbstractFurnaceRecipeBookComponent {
        xOffset: number;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        recipeBookPage: $RecipeBookPage;
        height: number;
        tabButtons: $List<$RecipeBookTabButton>;
        searchBox: $EditBox;
        constructor();
    }
    export class $AbstractFurnaceRecipeBookComponent extends $RecipeBookComponent {
        xOffset: number;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        recipeBookPage: $RecipeBookPage;
        height: number;
        tabButtons: $List<$RecipeBookTabButton>;
        searchBox: $EditBox;
        constructor();
    }
    export class $SmokingRecipeBookComponent extends $AbstractFurnaceRecipeBookComponent {
        xOffset: number;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        recipeBookPage: $RecipeBookPage;
        height: number;
        tabButtons: $List<$RecipeBookTabButton>;
        searchBox: $EditBox;
        constructor();
    }
    export class $RecipeBookTabButton extends $StateSwitchingButton {
        updateVisibility(arg0: $ClientRecipeBook): boolean;
        startAnimation(arg0: $Minecraft): void;
        getCategory(): $RecipeBookCategories;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(arg0: $RecipeBookCategories_);
        get category(): $RecipeBookCategories;
    }
    export class $GhostRecipe implements $GhostRecipeAccessor {
        getRecipe(): $RecipeHolder<never>;
        setRecipe(arg0: $RecipeHolder_<never>): void;
        addIngredient(arg0: $Ingredient_, arg1: number, arg2: number): void;
        render(arg0: $GuiGraphics, arg1: $Minecraft, arg2: number, arg3: number, arg4: boolean, arg5: number): void;
        size(): number;
        get(arg0: number): $GhostRecipe$GhostIngredient;
        clear(): void;
        brewinandchewin$getTime(): number;
        constructor();
    }
    export class $OverlayRecipeComponent$OverlayRecipeButton$Pos {
    }
    export class $OverlayRecipeComponent$OverlaySmeltingRecipeButton extends $OverlayRecipeComponent$OverlayRecipeButton {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
    }
    export class $RecipeCollection {
        hasSingleResultItem(): boolean;
        registryAccess(): $RegistryAccess;
        hasCraftable(): boolean;
        hasFitting(): boolean;
        hasKnownRecipes(): boolean;
        getRecipes(arg0: boolean): $List<$RecipeHolder<never>>;
        getRecipes(): $List<$RecipeHolder<never>>;
        canCraft(arg0: $StackedContents, arg1: number, arg2: number, arg3: $RecipeBook): void;
        getDisplayRecipes(arg0: boolean): $List<$RecipeHolder<never>>;
        isCraftable(arg0: $RecipeHolder_<never>): boolean;
        updateKnownRecipes(arg0: $RecipeBook): void;
        constructor(arg0: $RegistryAccess, arg1: $List_<$RecipeHolder_<never>>);
    }
    export class $RecipeUpdateListener {
    }
    export interface $RecipeUpdateListener {
        recipesUpdated(): void;
        getRecipeBookComponent(): $RecipeBookComponent;
        get recipeBookComponent(): $RecipeBookComponent;
    }
    export class $GhostRecipe$GhostIngredient {
        getY(): number;
        getX(): number;
        getItem(): $ItemStack;
        ingredient: $Ingredient;
        constructor(arg0: $GhostRecipe, arg1: $Ingredient_, arg2: number, arg3: number);
        get y(): number;
        get x(): number;
        get item(): $ItemStack;
    }
    export class $RecipeBookPage {
        setInvisible(): void;
        renderTooltip(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        mouseClicked(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
        getRecipeBook(): $RecipeBook;
        updateCollections(arg0: $List_<$RecipeCollection>, arg1: boolean): void;
        getLastClickedRecipeCollection(): $RecipeCollection;
        getLastClickedRecipe(): $RecipeHolder<never>;
        recipesShown(arg0: $List_<$RecipeHolder_<never>>): void;
        getMinecraft(): $Minecraft;
        addListener(arg0: $RecipeBookComponent): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        init(arg0: $Minecraft, arg1: number, arg2: number): void;
        recipeCollections: $List<$RecipeCollection>;
        static ITEMS_PER_PAGE: number;
        constructor();
        get recipeBook(): $RecipeBook;
        get lastClickedRecipeCollection(): $RecipeCollection;
        get lastClickedRecipe(): $RecipeHolder<never>;
        get minecraft(): $Minecraft;
    }
    export class $BlastingRecipeBookComponent extends $AbstractFurnaceRecipeBookComponent {
        xOffset: number;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        recipeBookPage: $RecipeBookPage;
        height: number;
        tabButtons: $List<$RecipeBookTabButton>;
        searchBox: $EditBox;
        constructor();
    }
    export class $OverlayRecipeComponent implements $Renderable, $GuiEventListener {
        getRecipeCollection(): $RecipeCollection;
        setVisible(arg0: boolean): void;
        isFocused(): boolean;
        isMouseOver(arg0: number, arg1: number): boolean;
        setFocused(arg0: boolean): void;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        isVisible(): boolean;
        getLastRecipeClicked(): $RecipeHolder<never>;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        init(arg0: $Minecraft, arg1: $RecipeCollection, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        mouseMoved(arg0: number, arg1: number): void;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        charTyped(arg0: string, arg1: number): boolean;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        getCurrentFocusPath(): $ComponentPath;
        getRectangle(): $ScreenRectangle;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        getTabOrderGroup(): number;
        static BUTTON_SIZE: number;
        constructor();
        get recipeCollection(): $RecipeCollection;
        get lastRecipeClicked(): $RecipeHolder<never>;
        get currentFocusPath(): $ComponentPath;
        get rectangle(): $ScreenRectangle;
        get tabOrderGroup(): number;
    }
    export class $RecipeShownListener {
    }
    export interface $RecipeShownListener {
        recipesShown(arg0: $List_<$RecipeHolder_<never>>): void;
    }
    /**
     * Values that may be interpreted as {@link $RecipeShownListener}.
     */
    export type $RecipeShownListener_ = ((arg0: $List<$RecipeHolder<never>>) => void);
    export class $RecipeButton extends $AbstractWidget {
        isOnlyOption(): boolean;
        getCollection(): $RecipeCollection;
        getRecipe(): $RecipeHolder<never>;
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        getTooltipText(): $List<$Component>;
        init(arg0: $RecipeCollection, arg1: $RecipeBookPage): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        static TICKS_TO_SWAP: number;
        constructor();
        get onlyOption(): boolean;
        get collection(): $RecipeCollection;
        get recipe(): $RecipeHolder<never>;
        get tooltipText(): $List<$Component>;
    }
}
