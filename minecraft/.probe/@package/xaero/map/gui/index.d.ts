import { $Component } from "@package/net/minecraft/network/chat";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $GuiSettings } from "@package/xaero/lib/client/gui";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $MapProcessor } from "@package/xaero/map";
import { $ConfigOptionScreenEntry } from "@package/xaero/lib/client/config/option/ui";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Font } from "@package/net/minecraft/client/gui";
import { $PNGExportResult } from "@package/xaero/map/file/export";
export * as message from "@package/xaero/map/gui/message";

declare module "@package/xaero/map/gui" {
    export class $MapTileSelection {
        getBottom(): number;
        getStartZ(): number;
        getEndX(): number;
        getEndZ(): number;
        setEnd(arg0: number, arg1: number): void;
        getStartX(): number;
        getTop(): number;
        getLeft(): number;
        getRight(): number;
        constructor(arg0: number, arg1: number);
        get bottom(): number;
        get startZ(): number;
        get endX(): number;
        get endZ(): number;
        get startX(): number;
        get top(): number;
        get left(): number;
        get right(): number;
    }
    export class $ExportScreen extends $GuiSettings {
        onExportDone(arg0: $PNGExportResult): void;
        getSelection(): $MapTileSelection;
        primaryOptionEntry<T>(arg0: $ConfigOption<T>): $ConfigOptionScreenEntry<T>;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        parent: $Screen;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        fullExport: boolean;
        narratables: $List<$NarratableEntry>;
        width: number;
        escape: $Screen;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen, arg1: $Screen, arg2: $MapProcessor, arg3: $MapTileSelection);
        get selection(): $MapTileSelection;
    }
}
