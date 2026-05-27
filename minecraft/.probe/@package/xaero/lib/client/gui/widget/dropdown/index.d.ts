import { $NarrationElementOutput } from "@package/net/minecraft/client/gui/narration";
import { $AbstractWidget } from "@package/net/minecraft/client/gui/components";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/xaero/lib/client/gui/widget/dropdown" {
    export class $DropDownWidget extends $AbstractWidget {
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): void;
        mouseClicked(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        mouseReleased(arg0: number, arg1: number, arg2: number, arg3: number): void;
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        selectId(arg0: number, arg1: boolean): void;
        getXWithOffset(): number;
        getRenderYWithOffset(): number;
        getSelected(): number;
        getRenderY(): number;
        setClosed(arg0: boolean): void;
        onDropDown(arg0: number, arg1: number, arg2: number): boolean;
        onDropDown(arg0: number, arg1: number, arg2: boolean, arg3: number): boolean;
        isClosed(): boolean;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        setActive(arg0: boolean): void;
        size(): number;
        visible: boolean;
        static TRIM: number;
        static TRIM_OPEN: number;
        active: boolean;
        static LINE_HEIGHT: number;
        static SELECTED_DEFAULT_BACKGROUND: number;
        static SELECTED_DEFAULT_HOVERED_BACKGROUND: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_BACKGROUND: number;
        static TRIM_INSIDE: number;
        get XWithOffset(): number;
        get renderYWithOffset(): number;
        get selected(): number;
        get renderY(): number;
    }
}
