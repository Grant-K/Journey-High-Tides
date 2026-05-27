import { $BiConsumer_ } from "@package/java/util/function";
import { $TickableGuiEventListener } from "@package/net/createmod/catnip/gui";
import { $Component } from "@package/net/minecraft/network/chat";
import { $NarrationElementOutput } from "@package/net/minecraft/client/gui/narration";
import { $AbstractWidget } from "@package/net/minecraft/client/gui/components";
import { $Runnable_ } from "@package/java/lang";
import { $Color } from "@package/net/createmod/catnip/theme";
import { $List } from "@package/java/util";
import { $Couple } from "@package/net/createmod/catnip/data";

declare module "@package/net/createmod/catnip/gui/widget" {
    export class $AbstractSimiWidget extends $AbstractWidget implements $TickableGuiEventListener {
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        withCallback<T extends $AbstractSimiWidget>(arg0: $Runnable_): T;
        withCallback<T extends $AbstractSimiWidget>(arg0: $BiConsumer_<number, number>): T;
        getToolTip(): $List<$Component>;
        runCallback(arg0: number, arg1: number): void;
        tick(): void;
        atZLevel<T extends $AbstractSimiWidget>(arg0: number): T;
        setActive<T extends $AbstractSimiWidget>(arg0: boolean): T;
        static COLOR_SUCCESS: $Couple<$Color>;
        visible: boolean;
        static HEADER_RGB: $Color;
        lockedTooltipY: number;
        static COLOR_HOVER: $Couple<$Color>;
        active: boolean;
        static COLOR_CLICK: $Couple<$Color>;
        static UNSET_FG_COLOR: number;
        static HINT_RGB: $Color;
        static COLOR_IDLE: $Couple<$Color>;
        lockedTooltipX: number;
        static COLOR_DISABLED: $Couple<$Color>;
        static COLOR_FAIL: $Couple<$Color>;
        get toolTip(): $List<$Component>;
    }
}
