import { $HeaderAndFooterLayout } from "@package/net/minecraft/client/gui/layouts";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ContainerObjectSelectionList$Entry, $ContainerObjectSelectionList, $OptionsList, $Renderable, $Button } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $KeyMapping, $Options } from "@package/net/minecraft/client";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $Font } from "@package/net/minecraft/client/gui";
import { $List } from "@package/java/util";
import { $AccessKeyBindsScreen, $AccessKeyBindsScreenNeoForge } from "@package/com/blamejared/controlling/mixin";
import { $OptionsSubScreen } from "@package/net/minecraft/client/gui/screens/options";

declare module "@package/net/minecraft/client/gui/screens/options/controls" {
    export class $KeyBindsList extends $ContainerObjectSelectionList<$KeyBindsList$Entry> {
        refreshEntries(): void;
        resetMappingAndUpdateButtons(): void;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        active: boolean;
        hovered: $KeyBindsList$Entry;
        constructor(arg0: $KeyBindsScreen, arg1: $Minecraft);
    }
    export class $KeyBindsList$Entry extends $ContainerObjectSelectionList$Entry<$KeyBindsList$Entry> {
        constructor();
    }
    export class $ControlsScreen extends $OptionsSubScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        list: $OptionsList;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        layout: $HeaderAndFooterLayout;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen, arg1: $Options);
    }
    export class $KeyBindsList$CategoryEntry extends $KeyBindsList$Entry {
        constructor(arg0: $KeyBindsList, arg1: $Component_);
    }
    export class $KeyBindsList$KeyEntry extends $KeyBindsList$Entry {
    }
    export class $KeyBindsScreen extends $OptionsSubScreen implements $AccessKeyBindsScreen, $AccessKeyBindsScreenNeoForge {
        setLastPressedModifier(arg0: $InputConstants$Key): void;
        isIsLastKeyHeldDown(): boolean;
        setIsLastKeyHeldDown(arg0: boolean): void;
        isIsLastModifierHeldDown(): boolean;
        setIsLastModifierHeldDown(arg0: boolean): void;
        getLastPressedKey(): $InputConstants$Key;
        setLastPressedKey(arg0: $InputConstants$Key): void;
        controlling$setResetButton(arg0: $Button): void;
        getLastPressedModifier(): $InputConstants$Key;
        controlling$getKeyBindsList(): $KeyBindsList;
        controlling$setKeyBindsList(arg0: $KeyBindsList): void;
        controlling$getResetButton(): $Button;
        selectedKey: $KeyMapping;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        list: $OptionsList;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        layout: $HeaderAndFooterLayout;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        lastKeySelection: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen, arg1: $Options);
    }
}
