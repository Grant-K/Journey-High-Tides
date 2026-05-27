import { $IModInfo } from "@package/net/neoforged/neoforgespi/language";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AbstractSliderButton, $ObjectSelectionList$Entry, $Button$OnPress_, $Button$CreateNarration_, $Button$Builder, $ObjectSelectionList, $Renderable, $Button } from "@package/net/minecraft/client/gui/components";
import { $Minecraft } from "@package/net/minecraft/client";
import { $ModListScreen } from "@package/net/neoforged/neoforge/client/gui";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $ModContainer } from "@package/net/neoforged/fml";
import { $AbstractContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/net/neoforged/neoforge/client/gui/widget" {
    export class $ExtendedSlider extends $AbstractSliderButton {
        getValueLong(): number;
        getValueInt(): number;
        getValueString(): string;
        getValue(): number;
        setValue(arg0: number): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Component_, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: boolean);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Component_, arg6: number, arg7: number, arg8: number, arg9: boolean);
        get valueLong(): number;
        get valueInt(): number;
        get valueString(): string;
    }
    export class $ModListWidget extends $ObjectSelectionList<$ModListWidget$ModEntry> {
        refreshList(): void;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        active: boolean;
        hovered: $ModListWidget$ModEntry;
        constructor(arg0: $ModListScreen, arg1: number, arg2: number, arg3: number);
    }
    export class $ScrollPanel extends $AbstractContainerEventHandler implements $Renderable, $NarratableEntry {
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        isActive(): boolean;
        constructor(arg0: $Minecraft, arg1: number, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $Minecraft, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        constructor(arg0: $Minecraft, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
        constructor(arg0: $Minecraft, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number);
        get active(): boolean;
    }
    export class $ExtendedButton extends $Button {
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        visible: boolean;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Button$OnPress_);
        constructor(arg0: $Button$Builder);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Button$OnPress_, arg6: $Button$CreateNarration_);
    }
    export class $ModsButton extends $Button {
        visible: boolean;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        constructor(arg0: $Button$Builder);
    }
    export class $ModListWidget$ModEntry extends $ObjectSelectionList$Entry<$ModListWidget$ModEntry> {
        getContainer(): $ModContainer;
        getInfo(): $IModInfo;
        get container(): $ModContainer;
        get info(): $IModInfo;
    }
    export class $UnicodeGlyphButton extends $ExtendedButton {
        visible: boolean;
        active: boolean;
        static DEFAULT_WIDTH: number;
        glyph: string;
        static UNSET_FG_COLOR: number;
        glyphScale: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: string, arg6: number, arg7: $Button$OnPress_);
    }
}
