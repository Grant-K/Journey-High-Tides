import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Enum } from "@package/java/lang";
import { $KubeJEIScreenElement } from "@package/com/miiickey/kubejei/kubejs";

declare module "@package/com/miiickey/kubejei/kubejs/util" {
    export class $IconTextures extends $Enum<$IconTextures> implements $KubeJEIScreenElement {
        getWidth(): number;
        getHeight(): number;
        getStartX(): number;
        getStartY(): number;
        render(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        static values(): $IconTextures[];
        static valueOf(arg0: string): $IconTextures;
        location(arg0: string): $ResourceLocation;
        getLocation(): $ResourceLocation;
        static HISTORY_BUTTON_ENABLED: $IconTextures;
        static BOOKMARK_BUTTON_ENABLED: $IconTextures;
        static CONFIG_BUTTON_CHEAT: $IconTextures;
        static INFO: $IconTextures;
        static FLAME_EMPTY: $IconTextures;
        static FLAME: $IconTextures;
        static CRAFTABLE_FIRST: $IconTextures;
        static CONFIG_BUTTON: $IconTextures;
        static BOOKMARK_FIRST: $IconTextures;
        static RECIPE_TRANSFER: $IconTextures;
        static HISTORY_BUTTON_DISABLED: $IconTextures;
        static SHAPELESS_ICON: $IconTextures;
        static ARROW_NEXT: $IconTextures;
        static ARROW_PREVIOUS: $IconTextures;
        static BOOKMARK_BUTTON_DISABLED: $IconTextures;
        static RECIPE_BOOKMARK: $IconTextures;
        get width(): number;
        get height(): number;
        get startX(): number;
        get startY(): number;
    }
    /**
     * Values that may be interpreted as {@link $IconTextures}.
     */
    export type $IconTextures_ = "arrow_next" | "arrow_previous" | "bookmark_button_disabled" | "bookmark_button_enabled" | "bookmark_first" | "config_button" | "config_button_cheat" | "craftable_first" | "flame" | "flame_empty" | "history_button_disabled" | "history_button_enabled" | "info" | "recipe_bookmark" | "recipe_transfer" | "shapeless_icon";
    export class $GuiTextures extends $Enum<$GuiTextures> implements $KubeJEIScreenElement {
        getWidth(): number;
        getHeight(): number;
        getStartX(): number;
        getStartY(): number;
        render(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        static values(): $GuiTextures[];
        static valueOf(arg0: string): $GuiTextures;
        location(arg0: string): $ResourceLocation;
        getLocation(): $ResourceLocation;
        static BREWING_STAND_BACKGROUND: $GuiTextures;
        static SCROLLBAR_MARKER: $GuiTextures;
        static BREWING_STAND_ARROW: $GuiTextures;
        static BOOKMARK_LIST_BACKGROUND: $GuiTextures;
        static RECIPE_PREVIEW_BACKGROUND: $GuiTextures;
        static BUTTON_DISABLED: $GuiTextures;
        static SINGLE_RECIPE_BACKGROUND: $GuiTextures;
        static OUTPUT_SLOT: $GuiTextures;
        static RECIPE_PLUS_SIGN: $GuiTextures;
        static BREWING_STAND_BUBBLES: $GuiTextures;
        static INGREDIENT_LIST_BACKGROUND: $GuiTextures;
        static SLOT: $GuiTextures;
        static BREWING_STAND_BLAZE_HEAT: $GuiTextures;
        static INGREDIENT_LIST_SLOT_BACKGROUND: $GuiTextures;
        static GUI_BACKGROUND: $GuiTextures;
        static BUTTON_PRESSED: $GuiTextures;
        static TAB_UNSELECTED: $GuiTextures;
        static RECIPE_OPTIONS_TAB: $GuiTextures;
        static SEARCH_BACKGROUND: $GuiTextures;
        static BUTTON_ENABLED: $GuiTextures;
        static SCROLLBAR_BACKGROUND: $GuiTextures;
        static RECIPE_CATALYST_SLOT_BACKGROUND: $GuiTextures;
        static BUTTON_PRESSED_HIGHLIGHT: $GuiTextures;
        static BUTTON_PRESSED_HIGHLIGHTED: $GuiTextures;
        static RECIPE_ARROW: $GuiTextures;
        static CATALYST_TAB: $GuiTextures;
        static RECIPE_ARROW_FILLED: $GuiTextures;
        static BOOKMARK_LIST_SLOT_BACKGROUND: $GuiTextures;
        static TAB_SELECTED: $GuiTextures;
        static BUTTON_HIGHLIGHT: $GuiTextures;
        get width(): number;
        get height(): number;
        get startX(): number;
        get startY(): number;
    }
    /**
     * Values that may be interpreted as {@link $GuiTextures}.
     */
    export type $GuiTextures_ = "bookmark_list_background" | "bookmark_list_slot_background" | "brewing_stand_arrow" | "brewing_stand_background" | "brewing_stand_blaze_heat" | "brewing_stand_bubbles" | "button_disabled" | "button_enabled" | "button_highlight" | "button_pressed" | "button_pressed_highlight" | "button_pressed_highlighted" | "catalyst_tab" | "gui_background" | "ingredient_list_background" | "ingredient_list_slot_background" | "output_slot" | "recipe_arrow" | "recipe_arrow_filled" | "recipe_catalyst_slot_background" | "recipe_options_tab" | "recipe_plus_sign" | "recipe_preview_background" | "scrollbar_background" | "scrollbar_marker" | "search_background" | "single_recipe_background" | "slot" | "tab_selected" | "tab_unselected";
}
