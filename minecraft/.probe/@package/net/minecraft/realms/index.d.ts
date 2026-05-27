import { $ServerAddress } from "@package/net/minecraft/client/multiplayer/resolver";
import { $Duration_ } from "@package/java/time";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ObjectSelectionList$Entry, $ObjectSelectionList, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $GameNarrator } from "@package/net/minecraft/client";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $List } from "@package/java/util";
import { $RealmsServer } from "@package/com/mojang/realmsclient/dto";

declare module "@package/net/minecraft/realms" {
    export class $RealmsObjectSelectionList<E extends $ObjectSelectionList$Entry<E>> extends $ObjectSelectionList<E> {
        getRowTop(arg0: number): number;
        getMaxPosition(): number;
        setSelectedItem(arg0: number): void;
        selectItem(arg0: number): void;
        getItemCount(): number;
        clear(): void;
        addEntry(arg0: E): number;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        active: boolean;
        hovered: E;
        get maxPosition(): number;
        set selectedItem(value: number);
        get itemCount(): number;
    }
    export class $RepeatedNarrator$Params {
    }
    export class $RealmsScreen extends $Screen {
        createLabelNarration(): $Component;
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
        constructor(arg0: $Component_);
    }
    export class $RepeatedNarrator {
        narrate(arg0: $GameNarrator, arg1: $Component_): void;
        constructor(arg0: $Duration_);
    }
    export class $DisconnectedRealmsScreen extends $RealmsScreen {
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
        constructor(arg0: $Screen, arg1: $Component_, arg2: $Component_);
    }
    export class $RealmsLabel implements $Renderable {
        getText(): $Component;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        constructor(arg0: $Component_, arg1: number, arg2: number, arg3: number);
        get text(): $Component;
    }
    export class $RealmsConnect {
        abort(): void;
        tick(): void;
        connect(arg0: $RealmsServer, arg1: $ServerAddress): void;
        constructor(arg0: $Screen);
    }
}
