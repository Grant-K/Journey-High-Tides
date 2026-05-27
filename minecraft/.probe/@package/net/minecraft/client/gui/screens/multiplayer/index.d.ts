import { $ServerLinks_ } from "@package/net/minecraft/server";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $ObjectSelectionList, $ContainerObjectSelectionList$Entry, $ObjectSelectionList$Entry, $ContainerObjectSelectionList, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List, $List_ } from "@package/java/util";
import { $LanServer } from "@package/net/minecraft/client/server";
import { $ServerData, $ServerList, $ServerStatusPinger } from "@package/net/minecraft/client/multiplayer";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $Connection } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Font } from "@package/net/minecraft/client/gui";
import { $AutoCloseable } from "@package/java/lang";

declare module "@package/net/minecraft/client/gui/screens/multiplayer" {
    export class $ServerSelectionList$NetworkServerEntry extends $ServerSelectionList$Entry {
        getServerData(): $LanServer;
        getServerNarration(): $Component;
        get serverData(): $LanServer;
        get serverNarration(): $Component;
    }
    export class $ServerSelectionList$Entry extends $ObjectSelectionList$Entry<$ServerSelectionList$Entry> implements $AutoCloseable {
        close(): void;
        constructor();
    }
    export class $JoinMultiplayerScreen extends $Screen {
        setSelected(arg0: $ServerSelectionList$Entry): void;
        joinSelectedServer(): void;
        getPinger(): $ServerStatusPinger;
        getServers(): $ServerList;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static LOWER_ROW_BUTTON_WIDTH: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static FOOTER_HEIGHT: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        static TOP_ROW_BUTTON_WIDTH: number;
        static BUTTON_ROW_WIDTH: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen);
        set selected(value: $ServerSelectionList$Entry);
        get pinger(): $ServerStatusPinger;
        get servers(): $ServerList;
    }
    export class $SafetyScreen extends $WarningScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        message: $Component;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen);
    }
    export class $ServerReconfigScreen extends $Screen {
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
        constructor(arg0: $Component_, arg1: $Connection);
    }
    export class $WarningScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        message: $Component;
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
    export class $ServerLinksScreen$LinkListEntry extends $ContainerObjectSelectionList$Entry<$ServerLinksScreen$LinkListEntry> {
    }
    export class $ServerSelectionList extends $ObjectSelectionList<$ServerSelectionList$Entry> {
        setSelected(arg0: $ServerSelectionList$Entry): void;
        updateOnlineServers(arg0: $ServerList): void;
        updateNetworkServers(arg0: $List_<$LanServer>): void;
        removed(): void;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        active: boolean;
        hovered: $ServerSelectionList$Entry;
        constructor(arg0: $JoinMultiplayerScreen, arg1: $Minecraft, arg2: number, arg3: number, arg4: number, arg5: number);
        set selected(value: $ServerSelectionList$Entry);
    }
    export class $ServerSelectionList$OnlineServerEntry extends $ServerSelectionList$Entry {
        getServerData(): $ServerData;
        updateServerList(): void;
        get serverData(): $ServerData;
    }
    export class $ServerSelectionList$LANHeader extends $ServerSelectionList$Entry {
        constructor();
    }
    export class $ServerLinksScreen$LinkList extends $ContainerObjectSelectionList<$ServerLinksScreen$LinkListEntry> {
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        active: boolean;
        hovered: $ServerLinksScreen$LinkListEntry;
    }
    export class $ServerLinksScreen extends $Screen {
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
        constructor(arg0: $Screen, arg1: $ServerLinks_);
    }
}
