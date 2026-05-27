import { $Predicate_, $Supplier_ } from "@package/java/util/function";
import { $GeasEffectType } from "@package/com/sammy/malum/core/systems/geas";
import { $Holder_ } from "@package/net/minecraft/core";
import { $ItemStack, $Item_, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $AbstractMalumCodexScreen } from "@package/com/sammy/malum/client/screen/codex/screens";
import { $BookEntry } from "@package/com/sammy/malum/client/screen/codex";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $List } from "@package/java/util";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $EntryReference } from "@package/com/sammy/malum/client/screen/codex/pages";
export * as progression from "@package/com/sammy/malum/client/screen/codex/objects/progression";

declare module "@package/com/sammy/malum/client/screen/codex/objects" {
    export class $BookObject<T extends $AbstractMalumCodexScreen> {
        isHovering(arg0: T, arg1: number, arg2: number): boolean;
        applyTransforms(arg0: T, arg1: $PoseStack, arg2: number, arg3: number, arg4: number): void;
        click(arg0: T, arg1: number, arg2: number): boolean;
        isInView(arg0: T): boolean;
        renderLate(arg0: T, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number): void;
        tryClick(arg0: T, arg1: number, arg2: number): boolean;
        getOffsetXPosition(): number;
        getOffsetYPosition(): number;
        tick(arg0: T, arg1: number, arg2: number): void;
        isValid(arg0: T): boolean;
        hasPriority(arg0: T): boolean;
        render(arg0: T, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number): void;
        exit(arg0: T): void;
        posX: number;
        posY: number;
        yOffset: number;
        xOffset: number;
        width: number;
        isHoveredOver: boolean;
        isSubspace: boolean;
        static WIDGET_FADE_TEXTURE: $ResourceLocation;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get offsetXPosition(): number;
        get offsetYPosition(): number;
    }
    export class $AbstractSelectableEntryObject<T extends $AbstractMalumCodexScreen> extends $BookObject<T> {
        setIcon(arg0: $Holder_<$GeasEffectType>): $AbstractSelectableEntryObject<T>;
        setIcon(arg0: $Item_): $AbstractSelectableEntryObject<T>;
        setIcon(arg0: $ItemStack_): $AbstractSelectableEntryObject<T>;
        setIcon(arg0: $Supplier_<$Item>): $AbstractSelectableEntryObject<T>;
        gatherTooltip(arg0: T): $List<$Component>;
        setCondition(arg0: $Predicate_<T>): $AbstractSelectableEntryObject<T>;
        posX: number;
        entry: $BookEntry;
        posY: number;
        yOffset: number;
        xOffset: number;
        width: number;
        isHoveredOver: boolean;
        iconStack: $ItemStack;
        isSubspace: boolean;
        static WIDGET_FADE_TEXTURE: $ResourceLocation;
        height: number;
        constructor(arg0: $EntryReference, arg1: number, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $BookEntry, arg1: number, arg2: number, arg3: number, arg4: number);
        set condition(value: $Predicate_<T>);
    }
}
