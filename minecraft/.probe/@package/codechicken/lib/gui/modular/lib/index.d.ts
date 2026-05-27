import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ModularGui } from "@package/codechicken/lib/gui/modular";
import { $MultiBufferSource$BufferSource, $RenderType } from "@package/net/minecraft/client/renderer";
import { $Component_, $Style, $Component, $FormattedText } from "@package/net/minecraft/network/chat";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List, $List_ } from "@package/java/util";
import { $GuiElement } from "@package/codechicken/lib/gui/modular/elements";
import { $FormattedCharSequence_ } from "@package/net/minecraft/util";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Material } from "@package/codechicken/lib/gui/modular/sprite";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $ClientTooltipPositioner_ } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Runnable_, $Enum } from "@package/java/lang";
import { $Borders, $Rectangle } from "@package/codechicken/lib/gui/modular/lib/geometry";
export * as geometry from "@package/codechicken/lib/gui/modular/lib/geometry";

declare module "@package/codechicken/lib/gui/modular/lib" {
    export class $Constraints$LayoutPos extends $Enum<$Constraints$LayoutPos> {
        static values(): $Constraints$LayoutPos[];
        static valueOf(arg0: string): $Constraints$LayoutPos;
        static TOP_LEFT: $Constraints$LayoutPos;
        static BOTTOM_CENTER: $Constraints$LayoutPos;
        static TOP_CENTER: $Constraints$LayoutPos;
        static BOTTOM_RIGHT: $Constraints$LayoutPos;
        static TOP_RIGHT: $Constraints$LayoutPos;
        static MIDDLE_RIGHT: $Constraints$LayoutPos;
        static BOTTOM_LEFT: $Constraints$LayoutPos;
        static MIDDLE_LEFT: $Constraints$LayoutPos;
    }
    /**
     * Values that may be interpreted as {@link $Constraints$LayoutPos}.
     */
    export type $Constraints$LayoutPos_ = "top_left" | "top_center" | "top_right" | "middle_right" | "middle_left" | "bottom_right" | "bottom_center" | "bottom_left";
    export class $GuiRender$RenderWrapper extends $GuiGraphics {
        minecraft: $Minecraft;
        static MIN_GUI_Z: number;
        static MAX_GUI_Z: number;
    }
    export class $TooltipHandler<T extends $TooltipHandler<T>> {
    }
    export interface $TooltipHandler<T extends $TooltipHandler<T>> {
        renderTooltip(arg0: $GuiRender, arg1: number, arg2: number): boolean;
        getTooltip(): $Supplier<$List<$Component>>;
        setTooltip(arg0: $Supplier_<$List<$Component>>): T;
        setTooltip(arg0: $List_<$Component_>): T;
        setTooltip(arg0: $Supplier_<$List<$Component>>, arg1: number): T;
        setTooltip(...arg0: $Component_[]): T;
        setTooltipDelay(arg0: number): T;
        setTooltipSingle(arg0: $Supplier_<$Component>): T;
        setTooltipSingle(arg0: $Component_): T;
        getTooltipDelay(): number;
    }
    export class $ElementEvents {
    }
    export interface $ElementEvents {
        mouseMoved(arg0: number, arg1: number): void;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): boolean;
        charTyped(arg0: string, arg1: number, arg2: boolean): boolean;
        charTyped(arg0: string, arg1: number): boolean;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        keyPressed(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseReleased(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        blockMouseEvents(): boolean;
        getChildren(): $List<$GuiElement<never>>;
        get children(): $List<$GuiElement<never>>;
    }
    /**
     * Values that may be interpreted as {@link $ElementEvents}.
     */
    export type $ElementEvents_ = (() => $List_<$GuiElement<never>>);
    export class $GuiRender {
        toolTipWithImage(arg0: $List_<$Component_>, arg1: ($TooltipComponent) | undefined, arg2: $ItemStack_, arg3: number, arg4: number): void;
        toolTipWithImage(arg0: $List_<$Component_>, arg1: ($TooltipComponent) | undefined, arg2: number, arg3: number): void;
        toolTipWithImage(arg0: $List_<$Component_>, arg1: ($TooltipComponent) | undefined, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        toolTipWithImage(arg0: $List_<$Component_>, arg1: ($TooltipComponent) | undefined, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        static mixColours(arg0: number, arg1: number): number;
        static mixColours(arg0: number, arg1: number, arg2: boolean): number;
        borderFill(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        borderFill(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        static midColour(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        guiGraphicsWrapper(): $GuiRender$RenderWrapper;
        shadedFillInternal(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        batchDraw(arg0: $Runnable_): void;
        shadedFill(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        shadedFill(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        shadedFill(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        gradientFillH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        gradientFillH(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        partialSpriteTex(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $TextureAtlasSprite, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        partialSpriteTex(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $TextureAtlasSprite, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        gradientFillV(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        gradientFillV(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        spriteRect(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $TextureAtlasSprite, arg7: number, arg8: number, arg9: number, arg10: number): void;
        spriteRect(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $TextureAtlasSprite, arg7: number): void;
        spriteRect(arg0: $RenderType, arg1: $Rectangle, arg2: $TextureAtlasSprite, arg3: number, arg4: number, arg5: number, arg6: number): void;
        spriteRect(arg0: $RenderType, arg1: $Rectangle, arg2: number, arg3: $TextureAtlasSprite, arg4: number): void;
        spriteRect(arg0: $RenderType, arg1: $Rectangle, arg2: number, arg3: $TextureAtlasSprite): void;
        spriteRect(arg0: $RenderType, arg1: $Rectangle, arg2: $TextureAtlasSprite): void;
        spriteRect(arg0: $RenderType, arg1: $Rectangle, arg2: $TextureAtlasSprite, arg3: number): void;
        spriteRect(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $TextureAtlasSprite, arg6: number): void;
        spriteRect(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $TextureAtlasSprite): void;
        spriteRect(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $TextureAtlasSprite): void;
        spriteRect(arg0: $RenderType, arg1: $Rectangle, arg2: number, arg3: $TextureAtlasSprite, arg4: number, arg5: number, arg6: number, arg7: number): void;
        spriteRect(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $TextureAtlasSprite, arg6: number, arg7: number, arg8: number, arg9: number): void;
        partialSprite(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $TextureAtlasSprite, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        partialSprite(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $TextureAtlasSprite, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        pushScissorRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
        pushScissorRect(arg0: $Rectangle): void;
        overrideFont(arg0: $Font): void;
        static texType(arg0: $ResourceLocation_): $RenderType;
        static texColType(arg0: $ResourceLocation_): $RenderType;
        shadedRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        shadedRect(arg0: $Rectangle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        shadedRect(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        shadedRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        shadedRect(arg0: $Rectangle, arg1: number, arg2: number, arg3: number, arg4: number): void;
        tileSprite(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $TextureAtlasSprite, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        tileSprite(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $TextureAtlasSprite, arg6: number, arg7: number, arg8: number, arg9: number): void;
        tileSprite(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $TextureAtlasSprite, arg6: number, arg7: number, arg8: number): void;
        tileSprite(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $TextureAtlasSprite, arg6: number): void;
        texRect(arg0: $Material, arg1: $Rectangle, arg2: number): void;
        texRect(arg0: $Material, arg1: $Rectangle): void;
        texRect(arg0: $Material, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        texRect(arg0: $Material, arg1: number, arg2: $Rectangle, arg3: number): void;
        texRect(arg0: $Material, arg1: number, arg2: $Rectangle): void;
        texRect(arg0: $Material, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        texRect(arg0: $Material, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        texRect(arg0: $Material, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        texRect(arg0: $Material, arg1: $Rectangle, arg2: number, arg3: number, arg4: number, arg5: number): void;
        texRect(arg0: $Material, arg1: number, arg2: number, arg3: number, arg4: number): void;
        texRect(arg0: $Material, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        texRect(arg0: $Material, arg1: number, arg2: $Rectangle, arg3: number, arg4: number, arg5: number, arg6: number): void;
        dynamicTex(arg0: $Material, arg1: $Rectangle, arg2: number, arg3: number, arg4: number, arg5: number): void;
        dynamicTex(arg0: $Material, arg1: $Rectangle, arg2: $Borders): void;
        dynamicTex(arg0: $Material, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        dynamicTex(arg0: $Material, arg1: $Rectangle, arg2: $Borders, arg3: number): void;
        dynamicTex(arg0: $Material, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        dynamicTex(arg0: $Material, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        dynamicTex(arg0: $Material, arg1: $Rectangle, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        borderRect(arg0: $RenderType, arg1: $Rectangle, arg2: number, arg3: number, arg4: number): void;
        borderRect(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        borderRect(arg0: $Rectangle, arg1: number, arg2: number, arg3: number): void;
        borderRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        guiWidth(): number;
        guiHeight(): number;
        pose(): $PoseStack;
        drawCenteredString(arg0: string, arg1: number, arg2: number, arg3: number): void;
        drawCenteredString(arg0: $Component_, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        drawCenteredString(arg0: string, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        drawCenteredString(arg0: $FormattedCharSequence_, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        drawCenteredString(arg0: $Component_, arg1: number, arg2: number, arg3: number): void;
        drawCenteredString(arg0: $FormattedCharSequence_, arg1: number, arg2: number, arg3: number): void;
        drawWordWrap(arg0: $FormattedText, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): void;
        drawWordWrap(arg0: $FormattedText, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: number): void;
        drawWordWrap(arg0: $FormattedText, arg1: number, arg2: number, arg3: number, arg4: number): void;
        renderTooltip(arg0: $Component_, arg1: number, arg2: number): void;
        renderTooltip(arg0: $Component_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        renderTooltip(arg0: $List_<$FormattedCharSequence_>, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        renderTooltip(arg0: $List_<$FormattedCharSequence_>, arg1: $ClientTooltipPositioner_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        renderTooltip(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        renderTooltip(arg0: $List_<$FormattedCharSequence_>, arg1: number, arg2: number): void;
        renderTooltip(arg0: $ItemStack_, arg1: number, arg2: number): void;
        drawString(arg0: string, arg1: number, arg2: number, arg3: number): number;
        drawString(arg0: string, arg1: number, arg2: number, arg3: number, arg4: boolean): number;
        drawString(arg0: $Component_, arg1: number, arg2: number, arg3: number): number;
        drawString(arg0: $Component_, arg1: number, arg2: number, arg3: number, arg4: boolean): number;
        drawString(arg0: $FormattedCharSequence_, arg1: number, arg2: number, arg3: number): number;
        drawString(arg0: $FormattedCharSequence_, arg1: number, arg2: number, arg3: number, arg4: boolean): number;
        renderItem(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number, arg3: number, arg4: number, arg5: number): void;
        renderItem(arg0: $ItemStack_, arg1: number, arg2: number): void;
        renderItem(arg0: $LivingEntity, arg1: $Level_, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number, arg6: number): void;
        renderItem(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        renderItem(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number, arg3: number, arg4: number): void;
        renderItem(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number): void;
        renderFakeItem(arg0: $ItemStack_, arg1: number, arg2: number): void;
        renderFakeItem(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number): void;
        renderItemDecorations(arg0: $ItemStack_, arg1: number, arg2: number, arg3: string): void;
        renderItemDecorations(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number, arg4: string): void;
        renderItemDecorations(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number): void;
        renderItemDecorations(arg0: $ItemStack_, arg1: number, arg2: number): void;
        renderComponentHoverEffect(arg0: $Style, arg1: number, arg2: number): void;
        sprite(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $TextureAtlasSprite, arg7: number, arg8: number, arg9: number, arg10: number): void;
        sprite(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $TextureAtlasSprite): void;
        sprite(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $TextureAtlasSprite, arg6: number): void;
        sprite(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $TextureAtlasSprite, arg7: number): void;
        sprite(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $TextureAtlasSprite): void;
        sprite(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $TextureAtlasSprite, arg6: number, arg7: number, arg8: number, arg9: number): void;
        drawScrollingString(arg0: $Component_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: boolean): void;
        drawScrollingString(arg0: $Component_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): void;
        tex(arg0: $Material, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        tex(arg0: $Material, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        tex(arg0: $Material, arg1: number, arg2: number, arg3: number, arg4: number): void;
        tex(arg0: $Material, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        tex(arg0: $Material, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        tex(arg0: $Material, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        rect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        rect(arg0: $Rectangle, arg1: number): void;
        rect(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        rect(arg0: $RenderType, arg1: $Rectangle, arg2: number): void;
        static isInRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        static isInRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        toolTipBackground(arg0: number, arg1: number, arg2: number, arg3: number): void;
        toolTipBackground(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): void;
        toolTipBackground(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        componentTooltip(arg0: $List_<$FormattedText>, arg1: number, arg2: number, arg3: $ItemStack_): void;
        componentTooltip(arg0: $List_<$FormattedText>, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $ItemStack_): void;
        componentTooltip(arg0: $List_<$Component_>, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        componentTooltip(arg0: $List_<$FormattedText>, arg1: number, arg2: number): void;
        pushScissor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        popScissor(): void;
        buffers(): $MultiBufferSource$BufferSource;
        font(): $Font;
        static convert(arg0: $GuiGraphics): $GuiRender;
        flush(): void;
        fill(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        fill(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        mc(): $Minecraft;
        static SOLID: $RenderType;
        constructor(arg0: $Minecraft, arg1: $PoseStack, arg2: $MultiBufferSource$BufferSource);
        constructor(arg0: $Minecraft, arg1: $MultiBufferSource$BufferSource);
    }
    export class $GuiProvider {
    }
    export interface $GuiProvider {
        createRootElement(arg0: $ModularGui): $GuiElement<never>;
        buildGui(arg0: $ModularGui): void;
    }
    /**
     * Values that may be interpreted as {@link $GuiProvider}.
     */
    export type $GuiProvider_ = ((arg0: $ModularGui) => void);
    export class $ForegroundRender {
    }
    export interface $ForegroundRender {
        getForegroundDepth(): number;
        renderForeground(arg0: $GuiRender, arg1: number, arg2: number, arg3: number): void;
        get foregroundDepth(): number;
    }
    /**
     * Values that may be interpreted as {@link $ForegroundRender}.
     */
    export type $ForegroundRender_ = ((arg0: $GuiRender, arg1: number, arg2: number, arg3: number) => void);
}
