import { $ScreenRectangle, $FocusNavigationEvent_ } from "@package/net/minecraft/client/gui/navigation";
import { $TabOrderedElement } from "@package/net/minecraft/client/gui/components";
import { $List } from "@package/java/util";
import { $ComponentPath } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/components/events" {
    export class $ContainerEventHandler {
    }
    export interface $ContainerEventHandler extends $GuiEventListener {
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        charTyped(arg0: string, arg1: number): boolean;
        isFocused(): boolean;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        getCurrentFocusPath(): $ComponentPath;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        isDragging(): boolean;
        setDragging(arg0: boolean): void;
        getFocused(): $GuiEventListener;
        setFocused(arg0: boolean): void;
        setFocused(arg0: $GuiEventListener): void;
        getChildAt(arg0: number, arg1: number): ($GuiEventListener) | undefined;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        children(): $List<$GuiEventListener>;
        get currentFocusPath(): $ComponentPath;
    }
    export class $GuiEventListener {
        static DOUBLE_CLICK_THRESHOLD_MS: number;
    }
    export interface $GuiEventListener extends $TabOrderedElement {
        mouseMoved(arg0: number, arg1: number): void;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        charTyped(arg0: string, arg1: number): boolean;
        isFocused(): boolean;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        getCurrentFocusPath(): $ComponentPath;
        isMouseOver(arg0: number, arg1: number): boolean;
        getRectangle(): $ScreenRectangle;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        setFocused(arg0: boolean): void;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        get currentFocusPath(): $ComponentPath;
        get rectangle(): $ScreenRectangle;
    }
    export class $AbstractContainerEventHandler implements $ContainerEventHandler {
        isDragging(): boolean;
        setDragging(arg0: boolean): void;
        getFocused(): $GuiEventListener;
        setFocused(arg0: $GuiEventListener): void;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        charTyped(arg0: string, arg1: number): boolean;
        isFocused(): boolean;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        getCurrentFocusPath(): $ComponentPath;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        setFocused(arg0: boolean): void;
        getChildAt(arg0: number, arg1: number): ($GuiEventListener) | undefined;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        mouseMoved(arg0: number, arg1: number): void;
        isMouseOver(arg0: number, arg1: number): boolean;
        getRectangle(): $ScreenRectangle;
        getTabOrderGroup(): number;
        constructor();
        get currentFocusPath(): $ComponentPath;
        get rectangle(): $ScreenRectangle;
        get tabOrderGroup(): number;
    }
}
