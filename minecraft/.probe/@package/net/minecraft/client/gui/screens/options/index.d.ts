import { $HeaderAndFooterLayout } from "@package/net/minecraft/client/gui/layouts";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $CycleButton, $ObjectSelectionList, $ObjectSelectionList$Entry, $Button$OnPress_, $OptionsList, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft, $Options } from "@package/net/minecraft/client";
import { $List, $List_ } from "@package/java/util";
import { $Difficulty } from "@package/net/minecraft/world";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $LanguageManager, $LanguageInfo_ } from "@package/net/minecraft/client/resources/language";
import { $Font } from "@package/net/minecraft/client/gui";
import { $AccessOptionsSubScreen } from "@package/com/blamejared/controlling/mixin";
export * as controls from "@package/net/minecraft/client/gui/screens/options/controls";

declare module "@package/net/minecraft/client/gui/screens/options" {
    export class $ChatOptionsScreen extends $OptionsSubScreen {
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
    export class $SkinCustomizationScreen extends $OptionsSubScreen {
        handler$loh000$blueprint$addSlabfishOptions(arg0: $CallbackInfo, arg1: $List_<any>): void;
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
    export class $OptionsSubScreen extends $Screen implements $AccessOptionsSubScreen {
        controlling$getLastScreen(): $Screen;
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
        constructor(arg0: $Screen, arg1: $Options, arg2: $Component_);
    }
    export class $AccessibilityOptionsScreen extends $OptionsSubScreen {
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
        static TITLE: $Component;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen, arg1: $Options);
    }
    export class $MouseSettingsScreen extends $OptionsSubScreen {
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
    export class $LanguageSelectScreen extends $OptionsSubScreen {
        wrapOperation$ejh000$chloride$redirect$resourcesReload(arg0: $Minecraft, arg1: $Operation_<any>): $CompletableFuture<any>;
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
        constructor(arg0: $Screen, arg1: $Options, arg2: $LanguageManager);
    }
    export class $FontOptionsScreen extends $OptionsSubScreen {
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
    export class $LanguageSelectScreen$LanguageSelectionList extends $ObjectSelectionList<$LanguageSelectScreen$LanguageSelectionList$Entry> {
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        active: boolean;
        hovered: $LanguageSelectScreen$LanguageSelectionList$Entry;
    }
    export class $UnsupportedGraphicsWarningScreen$ButtonOption {
        constructor(arg0: $Component_, arg1: $Button$OnPress_);
    }
    export class $UnsupportedGraphicsWarningScreen extends $Screen {
        init(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
    export class $SoundOptionsScreen extends $OptionsSubScreen {
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
    export class $OnlineOptionsScreen extends $OptionsSubScreen {
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
    export class $OptionsScreen extends $Screen {
        static createDifficultyButton(arg0: number, arg1: number, arg2: string, arg3: $Minecraft): $CycleButton<$Difficulty>;
        handler$lcj000$sable$createSableButton(arg0: $CallbackInfoReturnable<any>): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static TELEMETRY: $Component;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen, arg1: $Options);
    }
    export class $VideoSettingsScreen extends $OptionsSubScreen {
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
        constructor(arg0: $Screen, arg1: $Minecraft, arg2: $Options);
    }
    export class $LanguageSelectScreen$LanguageSelectionList$Entry extends $ObjectSelectionList$Entry<$LanguageSelectScreen$LanguageSelectionList$Entry> {
        constructor(arg0: $LanguageSelectScreen$LanguageSelectionList, arg1: string, arg2: $LanguageInfo_);
    }
}
