import { $AdvancementHolder_, $DisplayInfo, $AdvancementProgress, $AdvancementType_, $AdvancementNode } from "@package/net/minecraft/advancements";
import { $ClientAdvancements, $ClientAdvancements$Listener } from "@package/net/minecraft/client/multiplayer";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $Component } from "@package/net/minecraft/network/chat";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $List } from "@package/java/util";
import { $Enum, $Record } from "@package/java/lang";

declare module "@package/net/minecraft/client/gui/screens/advancements" {
    export class $AdvancementTabType extends $Enum<$AdvancementTabType> {
        isMouseOver(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        drawIcon(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: $ItemStack_): void;
        getY(arg0: number): number;
        getX(arg0: number): number;
        getMax(): number;
        draw(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: boolean, arg4: number): void;
        static values(): $AdvancementTabType[];
        static valueOf(arg0: string): $AdvancementTabType;
        static MAX_TABS: number;
        static BELOW: $AdvancementTabType;
        static LEFT: $AdvancementTabType;
        static RIGHT: $AdvancementTabType;
        static ABOVE: $AdvancementTabType;
        get max(): number;
    }
    /**
     * Values that may be interpreted as {@link $AdvancementTabType}.
     */
    export type $AdvancementTabType_ = "above" | "below" | "left" | "right";
    export class $AdvancementTabType$Sprites extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $AdvancementTabType$Sprites}.
     */
    export type $AdvancementTabType$Sprites_ = { middle?: $ResourceLocation_, last?: $ResourceLocation_, first?: $ResourceLocation_,  } | [middle?: $ResourceLocation_, last?: $ResourceLocation_, first?: $ResourceLocation_, ];
    export class $AdvancementsScreen extends $Screen implements $ClientAdvancements$Listener {
        onUpdateAdvancementProgress(arg0: $AdvancementNode, arg1: $AdvancementProgress): void;
        renderWindow(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        onAddAdvancementRoot(arg0: $AdvancementNode): void;
        onRemoveAdvancementRoot(arg0: $AdvancementNode): void;
        onAddAdvancementTask(arg0: $AdvancementNode): void;
        onRemoveAdvancementTask(arg0: $AdvancementNode): void;
        getAdvancementWidget(arg0: $AdvancementNode): $AdvancementWidget;
        onSelectedTabChanged(arg0: $AdvancementHolder_): void;
        onAdvancementsCleared(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static WINDOW_INSIDE_HEIGHT: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static WINDOW_HEIGHT: number;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static WINDOW_WIDTH: number;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static WINDOW_INSIDE_WIDTH: number;
        static BACKGROUND_TILE_COUNT_X: number;
        static BACKGROUND_TILE_COUNT_Y: number;
        static BACKGROUND_TILE_WIDTH: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        static BACKGROUND_TILE_HEIGHT: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $ClientAdvancements, arg1: $Screen);
        constructor(arg0: $ClientAdvancements);
    }
    export class $AdvancementWidgetType extends $Enum<$AdvancementWidgetType> {
        frameSprite(arg0: $AdvancementType_): $ResourceLocation;
        boxSprite(): $ResourceLocation;
        static values(): $AdvancementWidgetType[];
        static valueOf(arg0: string): $AdvancementWidgetType;
        static OBTAINED: $AdvancementWidgetType;
        static UNOBTAINED: $AdvancementWidgetType;
    }
    /**
     * Values that may be interpreted as {@link $AdvancementWidgetType}.
     */
    export type $AdvancementWidgetType_ = "obtained" | "unobtained";
    export class $AdvancementTab {
        getScreen(): $AdvancementsScreen;
        isMouseOver(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getPage(): number;
        scroll(arg0: number, arg1: number): void;
        drawContents(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        drawTab(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: boolean): void;
        drawIcon(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        drawTooltips(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addAdvancement(arg0: $AdvancementNode): void;
        getWidget(arg0: $AdvancementHolder_): $AdvancementWidget;
        getDisplay(): $DisplayInfo;
        static create(arg0: $Minecraft, arg1: $AdvancementsScreen, arg2: number, arg3: $AdvancementNode): $AdvancementTab;
        getIndex(): number;
        getRootNode(): $AdvancementNode;
        getTitle(): $Component;
        getType(): $AdvancementTabType;
        constructor(arg0: $Minecraft, arg1: $AdvancementsScreen, arg2: $AdvancementTabType_, arg3: number, arg4: $AdvancementNode, arg5: $DisplayInfo);
        constructor(arg0: $Minecraft, arg1: $AdvancementsScreen, arg2: $AdvancementTabType_, arg3: number, arg4: number, arg5: $AdvancementNode, arg6: $DisplayInfo);
        get screen(): $AdvancementsScreen;
        get page(): number;
        get display(): $DisplayInfo;
        get index(): number;
        get rootNode(): $AdvancementNode;
        get title(): $Component;
        get type(): $AdvancementTabType;
    }
    export class $AdvancementWidget {
        drawHover(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        isMouseOver(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        setProgress(arg0: $AdvancementProgress): void;
        getY(): number;
        getX(): number;
        drawConnectivity(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: boolean): void;
        attachToParent(): void;
        getWidth(): number;
        addChild(arg0: $AdvancementWidget): void;
        draw(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        constructor(arg0: $AdvancementTab, arg1: $Minecraft, arg2: $AdvancementNode, arg3: $DisplayInfo);
        set progress(value: $AdvancementProgress);
        get y(): number;
        get x(): number;
        get width(): number;
    }
}
