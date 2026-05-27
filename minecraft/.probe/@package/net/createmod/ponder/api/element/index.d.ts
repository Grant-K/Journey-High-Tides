import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $PonderScene } from "@package/net/createmod/ponder/foundation";
import { $PonderPalette_ } from "@package/net/createmod/ponder/api";
import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Selection } from "@package/net/createmod/ponder/api/scene";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $UUID } from "@package/java/util";
import { $Parrot } from "@package/net/minecraft/world/entity/animal";
import { $PonderUI } from "@package/net/createmod/ponder/foundation/ui";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ScreenElement_ } from "@package/net/createmod/catnip/gui/element";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Object } from "@package/java/lang";
import { $PonderLevel } from "@package/net/createmod/ponder/api/level";
import { $Vec3_, $Vec3, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $AbstractMinecart } from "@package/net/minecraft/world/entity/vehicle";
import { $Pair } from "@package/net/createmod/catnip/data";

declare module "@package/net/createmod/ponder/api/element" {
    export class $InputElementBuilder {
    }
    export interface $InputElementBuilder {
        scroll(): $InputElementBuilder;
        rightClick(): $InputElementBuilder;
        withItem(arg0: $ItemStack_): $InputElementBuilder;
        leftClick(): $InputElementBuilder;
        showing(arg0: $ScreenElement_): $InputElementBuilder;
        whileSneaking(): $InputElementBuilder;
        whileCTRL(): $InputElementBuilder;
    }
    export class $PonderSceneElement {
    }
    export interface $PonderSceneElement extends $PonderElement {
        renderLast(arg0: $PonderLevel, arg1: $MultiBufferSource_, arg2: $GuiGraphics, arg3: number): void;
        renderLayer(arg0: $PonderLevel, arg1: $MultiBufferSource_, arg2: $RenderType, arg3: $GuiGraphics, arg4: number): void;
        renderFirst(arg0: $PonderLevel, arg1: $MultiBufferSource_, arg2: $GuiGraphics, arg3: number): void;
    }
    export class $MinecartElement {
    }
    export interface $MinecartElement extends $AnimatedSceneElement {
        getRotation(): $Vec3;
        setRotation(arg0: number, arg1: boolean): void;
        setPositionOffset(arg0: $Vec3_, arg1: boolean): void;
        getPositionOffset(): $Vec3;
    }
    export class $PonderOverlayElement {
    }
    export interface $PonderOverlayElement extends $PonderElement {
        render(arg0: $PonderScene, arg1: $PonderUI, arg2: $GuiGraphics, arg3: number): void;
    }
    export class $TextElementBuilder {
    }
    export interface $TextElementBuilder {
        text(arg0: string): $TextElementBuilder;
        text(arg0: string, ...arg1: $Object[]): $TextElementBuilder;
        placeNearTarget(): $TextElementBuilder;
        pointAt(arg0: $Vec3_): $TextElementBuilder;
        attachKeyFrame(): $TextElementBuilder;
        sharedText(arg0: string, ...arg1: $Object[]): $TextElementBuilder;
        sharedText(arg0: string): $TextElementBuilder;
        sharedText(arg0: $ResourceLocation_, ...arg1: $Object[]): $TextElementBuilder;
        sharedText(arg0: $ResourceLocation_): $TextElementBuilder;
        independent(arg0: number): $TextElementBuilder;
        independent(): $TextElementBuilder;
        colored(arg0: $PonderPalette_): $TextElementBuilder;
    }
    export class $MinecartElement$MinecartConstructor {
    }
    export interface $MinecartElement$MinecartConstructor {
        create(arg0: $Level_, arg1: number, arg2: number, arg3: number): $AbstractMinecart;
    }
    /**
     * Values that may be interpreted as {@link $MinecartElement$MinecartConstructor}.
     */
    export type $MinecartElement$MinecartConstructor_ = ((arg0: $Level, arg1: number, arg2: number, arg3: number) => $AbstractMinecart);
    export class $ParrotElement {
    }
    export interface $ParrotElement extends $AnimatedSceneElement {
        getRotation(): $Vec3;
        setPose(arg0: $ParrotPose): void;
        setRotation(arg0: $Vec3_, arg1: boolean): void;
        setPositionOffset(arg0: $Vec3_, arg1: boolean): void;
        getPositionOffset(): $Vec3;
        set pose(value: $ParrotPose);
    }
    export class $PonderElement {
    }
    export interface $PonderElement {
        setVisible(arg0: boolean): void;
        isVisible(): boolean;
        tick(arg0: $PonderScene): void;
        whileSkipping(arg0: $PonderScene): void;
        reset(arg0: $PonderScene): void;
    }
    export class $ElementLink<T extends $PonderElement> {
    }
    export interface $ElementLink<T extends $PonderElement> {
        cast(arg0: $PonderElement): T;
        getId(): $UUID;
        get id(): $UUID;
    }
    export class $ParrotPose {
        tick(arg0: $PonderScene, arg1: $Parrot, arg2: $Vec3_): void;
        create(arg0: $PonderLevel): $Parrot;
        constructor();
    }
    export class $EntityElement {
    }
    export interface $EntityElement extends $TrackedElement<$Entity> {
    }
    export class $WorldSectionElement {
    }
    export interface $WorldSectionElement extends $AnimatedSceneElement {
        setCenterOfRotation(arg0: $Vec3_): void;
        stabilizeRotation(arg0: $Vec3_): void;
        setAnimatedRotation(arg0: $Vec3_, arg1: boolean): void;
        getAnimatedRotation(): $Vec3;
        getAnimatedOffset(): $Vec3;
        rayTrace(arg0: $PonderLevel, arg1: $Vec3_, arg2: $Vec3_): $Pair<$Vec3, $BlockHitResult>;
        selectBlock(arg0: $BlockPos_): void;
        setAnimatedOffset(arg0: $Vec3_, arg1: boolean): void;
        mergeOnto(arg0: $WorldSectionElement): void;
        queueRedraw(): void;
        resetSelectedBlock(): void;
        erase(arg0: $Selection): void;
        setEmpty(): void;
        isEmpty(): boolean;
        add(arg0: $Selection): void;
        set(arg0: $Selection): void;
        set centerOfRotation(value: $Vec3_);
    }
    export class $AnimatedSceneElement {
    }
    export interface $AnimatedSceneElement extends $PonderSceneElement {
        forceApplyFade(arg0: number): void;
        setFade(arg0: number): void;
        setFadeVec(arg0: $Vec3_): void;
        set fade(value: number);
        set fadeVec(value: $Vec3_);
    }
    export class $AnimatedOverlayElement {
    }
    export interface $AnimatedOverlayElement extends $PonderOverlayElement {
        setFade(arg0: number): void;
        getFade(arg0: number): number;
        render(arg0: $PonderScene, arg1: $PonderUI, arg2: $GuiGraphics, arg3: number, arg4: number): void;
        render(arg0: $PonderScene, arg1: $PonderUI, arg2: $GuiGraphics, arg3: number): void;
    }
}
