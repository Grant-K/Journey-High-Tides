import { $Holder_ } from "@package/net/minecraft/core";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $BookEntry } from "@package/com/sammy/malum/client/screen/codex";
import { $Component } from "@package/net/minecraft/network/chat";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Font } from "@package/net/minecraft/client/gui";
import { $List } from "@package/java/util";
import { $Runnable_ } from "@package/java/lang";
export * as progression from "@package/com/sammy/malum/client/screen/codex/screens/progression";

declare module "@package/com/sammy/malum/client/screen/codex/screens" {
    export class $CodexEntryScreen extends $AbstractMalumCodexScreen {
        getGuiTop(): number;
        getGuiLeft(): number;
        static openScreen(arg0: $BookEntry): void;
        getSweetenerPitch(): number;
        hasNextPage(): boolean;
        nextPage(): void;
        previousPage(arg0: boolean): void;
        close(arg0: boolean): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static BOOK_TEXTURE: $ResourceLocation;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static textJump: number;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static ITEM_SOCKET: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $AbstractMalumCodexScreen, arg1: $BookEntry);
        constructor(arg0: $BookEntry);
        get guiTop(): number;
        get guiLeft(): number;
        get sweetenerPitch(): number;
    }
    export class $AbstractMalumCodexScreen extends $Screen {
        playSound(arg0: $Holder_<$SoundEvent>, arg1: number, arg2: number): void;
        isHovering(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        isVoidTouched(): boolean;
        doLateRendering(): void;
        playSweetenedSound(arg0: $Holder_<$SoundEvent>, arg1: number, arg2: number): void;
        playSweetenedSound(arg0: $Holder_<$SoundEvent>, arg1: number): void;
        captureLateRendering(): boolean;
        renderLater(arg0: $Runnable_): void;
        setVoidTouched(arg0: boolean): void;
        playPageFlipSound(arg0: $Holder_<$SoundEvent>, arg1: number): void;
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
}
