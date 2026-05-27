import { $IGui, $Gui } from "@package/com/tom/cpl/gui";
import { $Box } from "@package/com/tom/cpl/math";

declare module "@package/com/tom/cpl/gui/elements" {
    export class $GuiElement extends $Gui {
        setVisible(arg0: boolean): void;
        setEnabled(arg0: boolean): void;
        /**
         * @deprecated
         */
        keyPressed(arg0: number, arg1: string): boolean;
        isVisible(): boolean;
        /**
         * @deprecated
         */
        mouseDrag(arg0: number, arg1: number, arg2: number): boolean;
        /**
         * @deprecated
         */
        mouseClick(arg0: number, arg1: number, arg2: number): boolean;
        /**
         * @deprecated
         */
        mouseRelease(arg0: number, arg1: number, arg2: number): boolean;
        /**
         * @deprecated
         */
        mouseWheel(arg0: number, arg1: number, arg2: number): boolean;
        setBounds(arg0: $Box): $GuiElement;
        getBounds(): $Box;
        isEnabled(): boolean;
        constructor(arg0: $IGui);
    }
}
