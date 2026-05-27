import { $AbstractProgressionCodexScreen } from "@package/com/sammy/malum/client/screen/codex/screens/progression";
import { $Int2ObjectFunction_ } from "@package/it/unimi/dsi/fastutil/ints";
import { $ItemStack, $Item_, $Item } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $List } from "@package/java/util";
import { $Supplier_, $Function_ } from "@package/java/util/function";
import { $GeasEffectType } from "@package/com/sammy/malum/core/systems/geas";
import { $Holder_ } from "@package/net/minecraft/core";
import { $WidgetDesignType$FillingType_, $WidgetDesignType, $WidgetDesignType$FrameType_, $BookEntry, $WidgetDesign } from "@package/com/sammy/malum/client/screen/codex";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $AbstractSelectableEntryObject } from "@package/com/sammy/malum/client/screen/codex/objects";
import { $Color } from "@package/java/awt";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/com/sammy/malum/client/screen/codex/objects/progression" {
    export class $ProgressionEntryObject extends $AbstractSelectableEntryObject<$AbstractProgressionCodexScreen> {
        renderOutline(arg0: $PoseStack, arg1: number, arg2: number, arg3: $Function_<$WidgetDesignType, $ResourceLocation>, arg4: $Int2ObjectFunction_<$Color>): void;
        setIcon(arg0: $Holder_<$GeasEffectType>): $ProgressionEntryObject;
        setIcon(arg0: $Item_): $ProgressionEntryObject;
        setIcon(arg0: $Supplier_<$Item>): $ProgressionEntryObject;
        getCenterX(): number;
        applyTransforms(arg0: $AbstractProgressionCodexScreen, arg1: $PoseStack, arg2: number, arg3: number, arg4: number): void;
        getCenterY(): number;
        isInView(arg0: $AbstractProgressionCodexScreen): boolean;
        setDesign(arg0: $WidgetDesign): $ProgressionEntryObject;
        setDesign(arg0: $WidgetDesignType, arg1: $WidgetDesignType$FrameType_, arg2: $WidgetDesignType$FillingType_): $ProgressionEntryObject;
        getSpiritColor(arg0: number): $Color;
        tick(arg0: $AbstractProgressionCodexScreen, arg1: number, arg2: number): void;
        setOrigin(): $ProgressionEntryObject;
        gatherTooltip(arg0: $AbstractProgressionCodexScreen): $List<$Component>;
        render(arg0: $AbstractProgressionCodexScreen, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number): void;
        yOffset: number;
        xOffset: number;
        isSubspace: boolean;
        posX: number;
        entry: $BookEntry;
        posY: number;
        design: $WidgetDesign;
        width: number;
        isHoveredOver: boolean;
        iconStack: $ItemStack;
        static WIDGET_FADE_TEXTURE: $ResourceLocation;
        isOrigin: boolean;
        height: number;
        constructor(arg0: $BookEntry, arg1: number, arg2: number);
        get centerX(): number;
        get centerY(): number;
    }
}
