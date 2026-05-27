import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $RenderableResource } from "@package/de/keksuccino/fancymenu/util/resource";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $AbstractWidget, $AbstractSliderButton } from "@package/net/minecraft/client/gui/components";
import { $IAudio } from "@package/de/keksuccino/fancymenu/util/resource/resources/audio";
import { $List } from "@package/java/util";
import { $Runnable_, $Runnable, $Enum } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/de/keksuccino/fancymenu/util/rendering/ui/widget" {
    export class $UniqueLabeledSwitchCycleButton {
    }
    export interface $UniqueLabeledSwitchCycleButton {
        getLabeledSwitchComponentLabel_FancyMenu(): $Component;
        setLabeledSwitchComponentLabel_FancyMenu(arg0: $Component_): void;
    }
    export class $CustomizableSlider {
    }
    export interface $CustomizableSlider {
        isNineSliceCustomSliderHandle_FancyMenu(): boolean;
        getNineSliceSliderHandleBorderY_FancyMenu(): number;
        isNineSliceCustomSliderBackground_FancyMenu(): boolean;
        setNineSliceCustomSliderBackground_FancyMenu(arg0: boolean): void;
        renderSliderBackgroundFancyMenu(arg0: $GuiGraphics, arg1: $AbstractSliderButton, arg2: boolean): boolean;
        setNineSliceSliderBackgroundBorderX_FancyMenu(arg0: number): void;
        getNineSliceSliderBackgroundBorderX_FancyMenu(): number;
        setNineSliceSliderBackgroundBorderY_FancyMenu(arg0: number): void;
        getNineSliceSliderBackgroundBorderY_FancyMenu(): number;
        setNineSliceCustomSliderHandle_FancyMenu(arg0: boolean): void;
        setNineSliceSliderHandleBorderX_FancyMenu(arg0: number): void;
        setNineSliceSliderHandleBorderY_FancyMenu(arg0: number): void;
        setCustomSliderBackgroundNormalFancyMenu(arg0: $RenderableResource): void;
        getCustomSliderBackgroundNormalFancyMenu(): $RenderableResource;
        setCustomSliderBackgroundHighlightedFancyMenu(arg0: $RenderableResource): void;
        getCustomSliderBackgroundHighlightedFancyMenu(): $RenderableResource;
        getNineSliceSliderHandleBorderX_FancyMenu(): number;
    }
    export class $CustomizableWidget$CustomBackgroundResetBehavior extends $Enum<$CustomizableWidget$CustomBackgroundResetBehavior> {
        static values(): $CustomizableWidget$CustomBackgroundResetBehavior[];
        static valueOf(arg0: string): $CustomizableWidget$CustomBackgroundResetBehavior;
        static RESET_ON_UNHOVER: $CustomizableWidget$CustomBackgroundResetBehavior;
        static RESET_NEVER: $CustomizableWidget$CustomBackgroundResetBehavior;
        static RESET_ON_HOVER: $CustomizableWidget$CustomBackgroundResetBehavior;
        static RESET_ON_HOVER_AND_UNHOVER: $CustomizableWidget$CustomBackgroundResetBehavior;
    }
    /**
     * Values that may be interpreted as {@link $CustomizableWidget$CustomBackgroundResetBehavior}.
     */
    export type $CustomizableWidget$CustomBackgroundResetBehavior_ = "reset_never" | "reset_on_hover" | "reset_on_unhover" | "reset_on_hover_and_unhover";
    export class $UniqueWidget {
    }
    export interface $UniqueWidget {
        setWidgetIdentifierFancyMenu(arg0: string): $AbstractWidget;
        getWidgetIdentifierFancyMenu(): string;
    }
    export class $CustomizableWidget {
    }
    export interface $CustomizableWidget {
        isHiddenFancyMenu(): boolean;
        resetWidgetCustomizationsFancyMenu(): void;
        isNineSliceCustomBackgroundTexture_FancyMenu(): boolean;
        tickHoverStateListenersFancyMenu(arg0: boolean): void;
        tickHoverOrFocusStateListenersFancyMenu(arg0: boolean): void;
        addHoverOrFocusStateListenerFancyMenu(arg0: $Consumer_<boolean>): void;
        addResetCustomizationsListenerFancyMenu(arg0: $Runnable_): void;
        getResetCustomizationsListenersFancyMenu(): $List<$Runnable>;
        addHoverStateListenerFancyMenu(arg0: $Consumer_<boolean>): void;
        addFocusStateListenerFancyMenu(arg0: $Consumer_<boolean>): void;
        getHoverStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        getFocusStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        getHoverOrFocusStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        getLastHoverStateFancyMenu(): boolean;
        setLastHoverStateFancyMenu(arg0: boolean): void;
        getLastFocusStateFancyMenu(): boolean;
        setLastFocusStateFancyMenu(arg0: boolean): void;
        getLastHoverOrFocusStateFancyMenu(): boolean;
        setLastHoverOrFocusStateFancyMenu(arg0: boolean): void;
        getCustomBackgroundNormalFancyMenu(): $RenderableResource;
        getCustomBackgroundHoverFancyMenu(): $RenderableResource;
        getCustomBackgroundInactiveFancyMenu(): $RenderableResource;
        setCustomBackgroundNormalFancyMenu(arg0: $RenderableResource): void;
        setCustomBackgroundHoverFancyMenu(arg0: $RenderableResource): void;
        setCustomBackgroundInactiveFancyMenu(arg0: $RenderableResource): void;
        setCustomBackgroundResetBehaviorFancyMenu(arg0: $CustomizableWidget$CustomBackgroundResetBehavior_): void;
        setHoverSoundFancyMenu(arg0: $IAudio): void;
        setCustomClickSoundFancyMenu(arg0: $IAudio): void;
        setHiddenFancyMenu(arg0: boolean): void;
        setCustomLabelFancyMenu(arg0: $Component_): void;
        setHoverLabelFancyMenu(arg0: $Component_): void;
        setCustomWidthFancyMenu(arg0: number): void;
        setCustomHeightFancyMenu(arg0: number): void;
        setCustomXFancyMenu(arg0: number): void;
        setCustomYFancyMenu(arg0: number): void;
        resetWidgetSizeAndPositionFancyMenu(): void;
        getCustomLabelFancyMenu(): $Component;
        getHoverLabelFancyMenu(): $Component;
        getCustomClickSoundFancyMenu(): $IAudio;
        getHoverSoundFancyMenu(): $IAudio;
        setNineSliceCustomBackground_FancyMenu(arg0: boolean): void;
        setNineSliceBorderX_FancyMenu(arg0: number): void;
        getNineSliceCustomBackgroundBorderX_FancyMenu(): number;
        setNineSliceBorderY_FancyMenu(arg0: number): void;
        getNineSliceCustomBackgroundBorderY_FancyMenu(): number;
        getCustomBackgroundResetBehaviorFancyMenu(): $CustomizableWidget$CustomBackgroundResetBehavior;
        getCustomWidthFancyMenu(): number;
        getCustomHeightFancyMenu(): number;
        getCustomXFancyMenu(): number;
        getCustomYFancyMenu(): number;
        getOriginalMessageFancyMenu(): $Component;
        stopCustomClickSoundFancyMenu(): void;
        stopHoverSoundFancyMenu(): void;
        renderCustomBackgroundFancyMenu(arg0: $AbstractWidget, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        tickFocusStateListenersFancyMenu(arg0: boolean): void;
        get nineSliceCustomBackgroundTexture_FancyMenu(): boolean;
        get resetCustomizationsListenersFancyMenu(): $List<$Runnable>;
        get hoverStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        get focusStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        get hoverOrFocusStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        set nineSliceCustomBackground_FancyMenu(value: boolean);
        set nineSliceBorderX_FancyMenu(value: number);
        get nineSliceCustomBackgroundBorderX_FancyMenu(): number;
        set nineSliceBorderY_FancyMenu(value: number);
        get nineSliceCustomBackgroundBorderY_FancyMenu(): number;
        get originalMessageFancyMenu(): $Component;
    }
}
