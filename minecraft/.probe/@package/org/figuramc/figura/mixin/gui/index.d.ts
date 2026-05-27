import { $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $Component } from "@package/net/minecraft/network/chat";
import { $EditBox, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $GuiMessage_, $GuiMessage } from "@package/net/minecraft/client";
import { $List_, $List } from "@package/java/util";

declare module "@package/org/figuramc/figura/mixin/gui" {
    export class $ScreenAccessor {
    }
    export interface $ScreenAccessor {
        getRenderables(): $List<$Renderable>;
        get renderables(): $List<$Renderable>;
    }
    /**
     * Values that may be interpreted as {@link $ScreenAccessor}.
     */
    export type $ScreenAccessor_ = (() => $List_<$Renderable>);
    export class $PlayerTabOverlayAccessor {
    }
    export interface $PlayerTabOverlayAccessor {
        getThePlayerInfos(): $List<$PlayerInfo>;
        getHeader(): $Component;
        getFooter(): $Component;
        get thePlayerInfos(): $List<$PlayerInfo>;
        get header(): $Component;
        get footer(): $Component;
    }
    export class $ChatScreenAccessor {
    }
    export interface $ChatScreenAccessor {
        getInput(): $EditBox;
        get input(): $EditBox;
    }
    /**
     * Values that may be interpreted as {@link $ChatScreenAccessor}.
     */
    export type $ChatScreenAccessor_ = (() => $EditBox);
    export class $GuiAccessor {
    }
    export interface $GuiAccessor {
        getSubtitle(): $Component;
        getActionbar(): $Component;
        getActionbarTime(): number;
        getTime(): number;
        getTitle(): $Component;
        get subtitle(): $Component;
        get actionbar(): $Component;
        get actionbarTime(): number;
        get time(): number;
        get title(): $Component;
    }
    export class $ChatComponentAccessor {
    }
    export interface $ChatComponentAccessor {
        getAllMessages(): $List<$GuiMessage>;
        get allMessages(): $List<$GuiMessage>;
    }
    /**
     * Values that may be interpreted as {@link $ChatComponentAccessor}.
     */
    export type $ChatComponentAccessor_ = (() => $List_<$GuiMessage_>);
}
