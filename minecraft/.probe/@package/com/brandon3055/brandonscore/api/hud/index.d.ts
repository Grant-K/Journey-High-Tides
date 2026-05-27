import { $Vector2 } from "@package/com/brandon3055/brandonscore/api/math";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $GuiRender } from "@package/codechicken/lib/gui/modular/lib";
import { $Runnable_ } from "@package/java/lang";
import { $GuiContextMenu, $GuiElement } from "@package/codechicken/lib/gui/modular/elements";

declare module "@package/com/brandon3055/brandonscore/api/hud" {
    export class $AbstractHudElement {
        setEnabled(arg0: boolean): $AbstractHudElement;
        screenWidth(): number;
        screenHeight(): number;
        xPos(): number;
        yPos(): number;
        shouldRender(arg0: boolean): boolean;
        markDirty(): void;
        tick(arg0: boolean): void;
        setChangeListener(arg0: $Runnable_): void;
        addConfigElements(arg0: $GuiContextMenu): void;
        createConfigDialog(arg0: $GuiElement<never>): $GuiContextMenu;
        onDragged(arg0: number, arg1: number): void;
        writeNBT(arg0: $CompoundTag_): void;
        startMoving(arg0: number, arg1: number): void;
        stopMoving(): void;
        readNBT(arg0: $CompoundTag_): void;
        width(): number;
        height(): number;
        render(arg0: $GuiRender, arg1: number, arg2: boolean): void;
        constructor(arg0: $Vector2);
        set enabled(value: boolean);
        set changeListener(value: $Runnable_);
    }
    /**
     * Values that may be interpreted as {@link $AbstractHudElement}.
     */
    export type $AbstractHudElement_ = RegistryTypes.BrandonscoreHudElements;
    export interface $AbstractHudElement extends RegistryMarked<RegistryTypes.BrandonscoreHudElementsTag, RegistryTypes.BrandonscoreHudElements> {}
}
