import { $MultiBufferSource_, $RenderType, $MultiBufferSource, $MultiBufferSource$BufferSource } from "@package/net/minecraft/client/renderer";
import { $SpectatorGui } from "@package/net/minecraft/client/gui/components/spectator";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $FontAccessor as $FontAccessor$1 } from "@package/wily/factoryapi/mixin/base";
import { $LivingEntity, $PlayerRideableJumping, $Entity } from "@package/net/minecraft/world/entity";
import { $IAntiquable } from "@package/net/mehvahdjukaar/supplementaries/common/block";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft, $DeltaTracker, $StringSplitter } from "@package/net/minecraft/client";
import { $JadeFont } from "@package/snownee/jade/gui";
import { $FormattedCharSequence, $FormattedCharSequence_, $RandomSource, $FormattedCharSink } from "@package/net/minecraft/util";
import { $RenderTooltipEvent$Pre } from "@package/net/neoforged/neoforge/client/event";
import { $DrawContextInvoker } from "@package/io/wispforest/owo/mixin/ui";
import { $GuiAccessor as $GuiAccessor$1 } from "@package/com/tom/cpm/mixin";
import { $GuiGraphicsAccessor } from "@package/io/wispforest/accessories/mixin/client";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IFontExtension, $IGuiGraphicsExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $GuiAccessor as $GuiAccessor$3 } from "@package/org/figuramc/figura/mixin/gui";
import { $MapAtlasTexture } from "@package/net/raphimc/immediatelyfast/feature/map_atlas_generation";
import { $ClientTooltipComponent, $ClientTooltipPositioner_ } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $LocalFloatRef, $LocalRef, $LocalBooleanRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $GuiGraphicsAccessor as $GuiGraphicsAccessor$2 } from "@package/com/blackgear/vanillabackport/core/mixin/access";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $AccessorFont } from "@package/com/sammy/malum/mixin/client";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $LayoutElement } from "@package/net/minecraft/client/gui/layouts";
import { $Component_, $TextColor, $FormattedText, $Style, $TextColor_, $Component } from "@package/net/minecraft/network/chat";
import { $DrawContextAccessor } from "@package/dev/tr7zw/trender/gui/impl/mixin/client";
import { $GuiGraphicsExtensions } from "@package/com/misterpemodder/shulkerboxtooltip/impl/hook";
import { $ScreenRectangle_, $ScreenRectangle } from "@package/net/minecraft/client/gui/navigation";
import { $GuiSpriteScaling$NineSlice_, $GuiSpriteScaling } from "@package/net/minecraft/client/resources/metadata/gui";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BakedGlyph, $BakedGlyph$Effect } from "@package/net/minecraft/client/gui/font/glyphs";
import { $MatrixStackTransformer } from "@package/io/wispforest/owo/ui/util";
import { $MapDecorationTextureManager, $TextureAtlasHolder } from "@package/net/minecraft/client/resources";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $Vec3, $Vec2, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $GuiEventListener, $ContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";
import { $Matrix4f, $Vector3f, $Quaternionf, $Vector2ic } from "@package/org/joml";
import { $IMixinGui, $IMixinGuiGraphics } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $GuiGraphicsAccessor as $GuiGraphicsAccessor$1 } from "@package/dev/shadowsoffire/apotheosis/mixin/client";
import { $Bearer, $ArbitrarySupplier_, $ArbitrarySupplier } from "@package/wily/factoryapi/base";
import { $HeartTypeAccessor, $GuiAccessor as $GuiAccessor$4 } from "@package/com/aetherteam/aether/mixin/mixins/client/accessor";
import { $FontAccessor, $GuiAccessor as $GuiAccessor$2 } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $List, $List_ } from "@package/java/util";
import { $GuiRenderStateSink } from "@package/dev/isxander/yacl3/gui/render";
import { $IMapRenderer } from "@package/net/raphimc/immediatelyfast/injection/interfaces";
import { $Consumer_, $Predicate_, $Function, $Predicate, $Function_, $BooleanSupplier_ } from "@package/java/util/function";
import { $GuiAccessor, $UIAccessor, $UIDefinition, $FactoryGuiGraphics$Accessor, $FactoryGuiGraphics } from "@package/wily/factoryapi/base/client";
import { $DynamicTexture, $TextureAtlasSprite, $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $FontSet } from "@package/net/minecraft/client/gui/font";
import { $MapDecoration_, $MapId_, $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $Enum, $Number, $Record, $AutoCloseable, $Class, $Runnable_, $Object } from "@package/java/lang";
import { $GuiGraphicsInvoker } from "@package/com/anthonyhilyard/iceberg/mixin";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $Renderable_, $BossHealthOverlay, $AbstractWidget, $PlayerTabOverlay, $ChatComponent, $Renderable, $SubtitleOverlay, $DebugScreenOverlay } from "@package/net/minecraft/client/gui/components";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $ITooltipAccess } from "@package/com/anthonyhilyard/iceberg/util";
import { $VariablesMap } from "@package/wily/factoryapi/util";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $GuiSubtitleOverlayAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors/client";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
export * as components from "@package/net/minecraft/client/gui/components";
export * as layouts from "@package/net/minecraft/client/gui/layouts";
export * as screens from "@package/net/minecraft/client/gui/screens";
export * as navigation from "@package/net/minecraft/client/gui/navigation";
export * as font from "@package/net/minecraft/client/gui/font";
export * as narration from "@package/net/minecraft/client/gui/narration";
export * as spectator from "@package/net/minecraft/client/gui/spectator";

declare module "@package/net/minecraft/client/gui" {
    export class $Font$StringRenderOutput implements $FormattedCharSink {
        handler$ejb000$chloride$inject$accept(arg0: number, arg1: $Style, arg2: number, arg3: $CallbackInfoReturnable<any>): void;
        modifyExpressionValue$mng000$malum$enableSubtractiveBlending(arg0: $TextColor_, arg1: $LocalBooleanRef): $TextColor;
        wrapOperation$mng000$malum$useSubtractiveRenderingType$mixinextras$bridge$14(arg0: $BakedGlyph, arg1: $Font$DisplayMode_, arg2: $Operation_<any>, arg3: $LocalFloatRef, arg4: $LocalBooleanRef): $RenderType;
        wrapOperation$mng000$malum$shouldRenderCharacter(arg0: $Font, arg1: $BakedGlyph, arg2: boolean, arg3: boolean, arg4: number, arg5: number, arg6: number, arg7: $Matrix4f, arg8: $VertexConsumer, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: $Operation_<any>, arg15: $LocalBooleanRef): void;
        wrapWithCondition$mng000$malum$flagEffectAsSubtractive(arg0: $Font$StringRenderOutput, arg1: $BakedGlyph$Effect, arg2: number, arg3: $LocalBooleanRef): boolean;
        handler$mng000$malum$renderSubtractiveEffects(arg0: number, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        wrapOperation$mng000$malum$useSubtractiveRenderingType(arg0: $BakedGlyph, arg1: $Font$DisplayMode_, arg2: $Operation_<any>, arg3: number, arg4: $LocalBooleanRef): $RenderType;
        finish(arg0: number, arg1: number): number;
        accept(arg0: number, arg1: $Style, arg2: number): boolean;
        x: number;
        y: number;
        constructor(arg0: $Font, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: $Matrix4f, arg7: $Font$DisplayMode_, arg8: number);
    }
    export class $GuiGraphics implements $IGuiGraphicsExtension, $GuiGraphicsAccessor, $GuiGraphicsExtensions, $FactoryGuiGraphics$Accessor, $IMixinGuiGraphics, $GuiGraphicsAccessor$2, $GuiGraphicsAccessor$1, $MatrixStackTransformer, $DrawContextInvoker, $DrawContextAccessor, $GuiGraphicsInvoker, $GuiRenderStateSink, $ITooltipAccess {
        getMouseX(): number;
        getMouseY(): number;
        guiWidth(): number;
        guiHeight(): number;
        blit(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $TextureAtlasSprite, arg6: number, arg7: number, arg8: number, arg9: number): void;
        blit(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $TextureAtlasSprite): void;
        blit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        blit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        blit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        blit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        pose(): $PoseStack;
        bufferSource(): $MultiBufferSource$BufferSource;
        /**
         * @deprecated
         */
        drawManaged(arg0: $Runnable_): void;
        /**
         * @deprecated
         */
        flushIfUnmanaged(): void;
        hLine(arg0: number, arg1: number, arg2: number, arg3: number): void;
        hLine(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number): void;
        vLine(arg0: number, arg1: number, arg2: number, arg3: number): void;
        vLine(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number): void;
        enableScissor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        disableScissor(): void;
        containsPointInScissor(arg0: number, arg1: number): boolean;
        fillRenderType(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        drawCenteredString(arg0: $Font, arg1: string, arg2: number, arg3: number, arg4: number): void;
        drawCenteredString(arg0: $Font, arg1: $Component_, arg2: number, arg3: number, arg4: number): void;
        drawCenteredString(arg0: $Font, arg1: $FormattedCharSequence_, arg2: number, arg3: number, arg4: number): void;
        drawWordWrap(arg0: $Font, arg1: $FormattedText, arg2: number, arg3: number, arg4: number, arg5: number): void;
        drawStringWithBackdrop(arg0: $Font, arg1: $Component_, arg2: number, arg3: number, arg4: number, arg5: number): number;
        renderTooltip(arg0: $Font, arg1: $List_<$FormattedCharSequence_>, arg2: $ClientTooltipPositioner_, arg3: number, arg4: number): void;
        renderTooltip(arg0: $Font, arg1: $List_<$FormattedCharSequence_>, arg2: number, arg3: number): void;
        renderTooltip(arg0: $Font, arg1: $List_<$Component_>, arg2: ($TooltipComponent) | undefined, arg3: number, arg4: number): void;
        renderTooltip(arg0: $Font, arg1: $List_<$Component_>, arg2: ($TooltipComponent) | undefined, arg3: $ItemStack_, arg4: number, arg5: number): void;
        renderTooltip(arg0: $Font, arg1: $ItemStack_, arg2: number, arg3: number): void;
        renderTooltip(arg0: $Font, arg1: $Component_, arg2: number, arg3: number): void;
        fillGradient(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        fillGradient(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        fillGradient(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        drawString(arg0: $Font, arg1: string, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        drawString(arg0: $Font, arg1: string, arg2: number, arg3: number, arg4: number): number;
        drawString(arg0: $Font, arg1: $Component_, arg2: number, arg3: number, arg4: number): number;
        drawString(arg0: $Font, arg1: $FormattedCharSequence_, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        drawString(arg0: $Font, arg1: $FormattedCharSequence_, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        drawString(arg0: $Font, arg1: $Component_, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        drawString(arg0: $Font, arg1: string, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        drawString(arg0: $Font, arg1: $FormattedCharSequence_, arg2: number, arg3: number, arg4: number): number;
        blitSprite(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        blitSprite(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        blitSprite(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        blitSprite(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        blitSprite(arg0: $TextureAtlasSprite, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        innerBlit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        innerBlit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        renderOutline(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        blitTiledSprite(arg0: $TextureAtlasSprite, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        blitNineSlicedSprite(arg0: $TextureAtlasSprite, arg1: $GuiSpriteScaling$NineSlice_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        handler$eog000$factory_api$blitTiledSprite(textureAtlasSprite: $TextureAtlasSprite, i: number, j: number, k: number, l: number, m: number, n: number, o: number, p: number, q: number, r: number, s: number, ci: $CallbackInfo): void;
        renderItem(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number): void;
        renderItem(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        renderItem(arg0: $ItemStack_, arg1: number, arg2: number): void;
        renderItem(arg0: $LivingEntity, arg1: $Level_, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number, arg6: number): void;
        renderItem(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number, arg3: number, arg4: number): void;
        renderFakeItem(arg0: $ItemStack_, arg1: number, arg2: number): void;
        renderFakeItem(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number): void;
        renderItemDecorations(arg0: $Font, arg1: $ItemStack_, arg2: number, arg3: number, arg4: string): void;
        renderItemDecorations(arg0: $Font, arg1: $ItemStack_, arg2: number, arg3: number): void;
        handler$iog000$relics$renderItemDecorations(arg0: $Font, arg1: $ItemStack_, arg2: number, arg3: number, arg4: string, arg5: $CallbackInfo): void;
        handler$mgd000$equipmentcompare$renderTooltip(font: $Font, itemStack: $ItemStack_, x: number, y: number, info: $CallbackInfo): void;
        renderTooltipInternal(arg0: $Font, arg1: $List_<$ClientTooltipComponent>, arg2: number, arg3: number, arg4: $ClientTooltipPositioner_): void;
        renderComponentTooltip(arg0: $Font, arg1: $List_<$Component_>, arg2: number, arg3: number): void;
        renderComponentTooltip(arg0: $Font, arg1: $List_<$FormattedText>, arg2: number, arg3: number, arg4: $ItemStack_): void;
        renderComponentTooltipFromElements(arg0: $Font, arg1: $List_<$Either<$FormattedText, $TooltipComponent>>, arg2: number, arg3: number, arg4: $ItemStack_): void;
        handler$mgd000$equipmentcompare$renderTooltipInternal(font: $Font, components: $List_<any>, x: number, y: number, positioner: $ClientTooltipPositioner_, info: $CallbackInfo): void;
        handler$iog000$relics$onTooltipRender(arg0: $Font, arg1: $List_<any>, arg2: number, arg3: number, arg4: $ClientTooltipPositioner_, arg5: $CallbackInfo, arg6: $RenderTooltipEvent$Pre, arg7: number, arg8: number, arg9: number, arg10: number, arg11: $Vector2ic): void;
        renderComponentHoverEffect(arg0: $Font, arg1: $Style, arg2: number, arg3: number): void;
        getTooltipTopYPosition(): number;
        getTooltipBottomYPosition(): number;
        setTooltipTopYPosition(topY: number): void;
        setTooltipBottomYPosition(bottomY: number): void;
        setMouseX(mouseX: number): void;
        setMouseY(mouseY: number): void;
        getFactoryGuiGraphics(): $FactoryGuiGraphics;
        handler$iog001$relics$renderItem(arg0: $LivingEntity, arg1: $Level_, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $CallbackInfo): void;
        getMatrixStack(): $PoseStack;
        yacl$bufferSource(): $MultiBufferSource;
        setIcebergTooltipStack(stack: $ItemStack_): void;
        getIcebergTooltipStack(): $ItemStack;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        flush(): void;
        fill(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        fill(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        fill(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        fill(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        blitWithBorder(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        blitWithBorder(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        blitInscribed(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: boolean): void;
        blitInscribed(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        getColorFromFormattingCharacter(arg0: string, arg1: boolean): number;
        drawScrollingString(arg0: $Font, arg1: $Component_, arg2: number, arg3: number, arg4: number, arg5: number): number;
        translate(x: number, y: number, z: number): $MatrixStackTransformer;
        translate(x: number, y: number, z: number): $MatrixStackTransformer;
        multiplyPositionMatrix(matrix: $Matrix4f): $MatrixStackTransformer;
        push(): $MatrixStackTransformer;
        pop(): $MatrixStackTransformer;
        multiply(quaternion: $Quaternionf, originX: number, originY: number, originZ: number): $MatrixStackTransformer;
        multiply(quaternion: $Quaternionf): $MatrixStackTransformer;
        scale(x: number, y: number, z: number): $MatrixStackTransformer;
        getTooltipStack(): $ItemStack;
        callBlitSprite(arg0: $TextureAtlasSprite, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getBufferSource_FancyMenu(): $MultiBufferSource$BufferSource;
        callBlitNineSlicedSprite(arg0: $TextureAtlasSprite, arg1: $GuiSpriteScaling$NineSlice_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        setTooltipStack(arg0: $ItemStack_): void;
        owo$renderTooltipFromComponents(arg0: $Font, arg1: $List_<$ClientTooltipComponent>, arg2: number, arg3: number, arg4: $ClientTooltipPositioner_): void;
        owo$getMatrices(): $PoseStack;
        owo$setMatrices(arg0: $PoseStack): void;
        owo$getScissorStack(): $GuiGraphics$ScissorStack;
        owo$setScissorStack(arg0: $GuiGraphics$ScissorStack): void;
        libgui$getVertexConsumers(): $MultiBufferSource$BufferSource;
        invokeRenderTooltipInternal(arg0: $Font, arg1: $List_<$ClientTooltipComponent>, arg2: number, arg3: number, arg4: $ClientTooltipPositioner_): void;
        minecraft: $Minecraft;
        static MIN_GUI_Z: number;
        static MAX_GUI_Z: number;
        constructor(arg0: $Minecraft, arg1: $PoseStack, arg2: $MultiBufferSource$BufferSource);
        constructor(arg0: $Minecraft, arg1: $MultiBufferSource$BufferSource);
        get factoryGuiGraphics(): $FactoryGuiGraphics;
        get matrixStack(): $PoseStack;
        get bufferSource_FancyMenu(): $MultiBufferSource$BufferSource;
    }
    export class $LayeredDraw {
        render(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
        add(arg0: $LayeredDraw$Layer_): $LayeredDraw;
        add(arg0: $LayeredDraw, arg1: $BooleanSupplier_): $LayeredDraw;
        static Z_SEPARATION: number;
        constructor();
    }
    export class $MapRenderer$MapInstance implements $AutoCloseable {
        forceUpload(): void;
        wrapOperation$mbn000$moonlight$forceMipMap(instance: $DynamicTexture, op: $Operation_<any>): void;
        wrapOperation$bij000$supplementaries$supp$updateColoredTexture(instance: $MapRenderer$MapInstance, original: $Operation_<any>): $DynamicTexture;
        wrapOperation$ncf000$spectrum$scaleDecorations$mixinextras$bridge$19(arg0: $PoseStack, arg1: number, arg2: number, arg3: number, arg4: $Operation_<any>, arg5: $LocalRef<any>): void;
        handler$kgk000$treasuredistance$drawInject(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: boolean, arg3: number, arg4: $CallbackInfo): void;
        wrapOperation$ncf000$spectrum$scaleDecorations(arg0: $PoseStack, arg1: number, arg2: number, arg3: number, arg4: $Operation_<any>, arg5: $MapDecoration_): void;
        wrapOperation$bek000$supplementaries$IFupdateColoredTexture(instance: $NativeImage, level: number, xOffset: number, yOffset: number, unpackSkipPixels: number, unpackSkipRows: number, width: number, height: number, mipmap: boolean, autoClose: boolean, operation: $Operation_<any>): void;
        close(): void;
    }
    export class $MapRenderer implements $AutoCloseable, $IMapRenderer {
        resetData(): void;
        immediatelyFast$getMapAtlasTexture(id: number): $MapAtlasTexture;
        immediatelyFast$getAtlasMapping(mapId: number): number;
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $MapId_, arg3: $MapItemSavedData, arg4: boolean, arg5: number): void;
        update(arg0: $MapId_, arg1: $MapItemSavedData): void;
        close(): void;
        constructor(arg0: $TextureManager, arg1: $MapDecorationTextureManager);
    }
    export class $ComponentPath$Leaf extends $Record implements $ComponentPath {
        applyFocus(arg0: boolean): void;
        component(): $GuiEventListener;
        constructor(arg0: $GuiEventListener);
    }
    /**
     * Values that may be interpreted as {@link $ComponentPath$Leaf}.
     */
    export type $ComponentPath$Leaf_ = { component?: $GuiEventListener,  } | [component?: $GuiEventListener, ];
    export class $Gui$1DisplayEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $Gui$1DisplayEntry}.
     */
    export type $Gui$1DisplayEntry_ = { name?: $Component_, scoreWidth?: number, score?: $Component_,  } | [name?: $Component_, scoreWidth?: number, score?: $Component_, ];
    export class $Font implements $IFontExtension, $IAntiquable, $FontAccessor$1, $FontAccessor, $JadeFont, $AccessorFont {
        isBidirectional(): boolean;
        drawInBatch(arg0: string, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: $Matrix4f, arg6: $MultiBufferSource_, arg7: $Font$DisplayMode_, arg8: number, arg9: number, arg10: boolean): number;
        drawInBatch(arg0: string, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: $Matrix4f, arg6: $MultiBufferSource_, arg7: $Font$DisplayMode_, arg8: number, arg9: number): number;
        drawInBatch(arg0: $FormattedCharSequence_, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: $Matrix4f, arg6: $MultiBufferSource_, arg7: $Font$DisplayMode_, arg8: number, arg9: number): number;
        drawInBatch(arg0: $Component_, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: $Matrix4f, arg6: $MultiBufferSource_, arg7: $Font$DisplayMode_, arg8: number, arg9: number): number;
        getSplitter(): $StringSplitter;
        getFontSet(arg0: $ResourceLocation_): $FontSet;
        bidirectionalShaping(arg0: string): string;
        drawInBatch8xOutline(arg0: $FormattedCharSequence_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Matrix4f, arg6: $MultiBufferSource_, arg7: number): void;
        static adjustColor(arg0: number): number;
        handler$eja000$chloride$inject$renderText(arg0: $FormattedCharSequence_, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: $Matrix4f, arg6: $MultiBufferSource_, arg7: $Font$DisplayMode_, arg8: number, arg9: number, arg10: $CallbackInfoReturnable<any>): void;
        handler$eja000$chloride$inject$renderText(arg0: string, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: $Matrix4f, arg6: $MultiBufferSource_, arg7: $Font$DisplayMode_, arg8: number, arg9: number, arg10: $CallbackInfoReturnable<any>): void;
        plainSubstrByWidth(arg0: string, arg1: number): string;
        plainSubstrByWidth(arg0: string, arg1: number, arg2: boolean): string;
        substrByWidth(arg0: $FormattedText, arg1: number): $FormattedText;
        wordWrapHeight(arg0: $FormattedText, arg1: number): number;
        wordWrapHeight(arg0: string, arg1: number): number;
        supplementaries$isAntique(): boolean;
        supplementaries$setAntique(hasInk: boolean): void;
        jade$setGlint(arg0: number, arg1: number): void;
        jade$setGlintStrength(arg0: number, arg1: number): void;
        renderText(arg0: string, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: $Matrix4f, arg6: $MultiBufferSource_, arg7: $Font$DisplayMode_, arg8: number, arg9: number): number;
        self(): $Font;
        width(arg0: string): number;
        width(arg0: $FormattedText): number;
        width(arg0: $FormattedCharSequence_): number;
        split(arg0: $FormattedText, arg1: number): $List<$FormattedCharSequence>;
        ellipsize(arg0: $FormattedText, arg1: number): $FormattedText;
        getDefaultFontSet(arg0: $ResourceLocation_): $FontSet;
        getFilterFishyGlyphs(): boolean;
        create$getFonts(): $Function<$ResourceLocation, $FontSet>;
        static SHADOW_OFFSET: $Vector3f;
        random: $RandomSource;
        filterFishyGlyphs: boolean;
        fonts: $Function<$ResourceLocation, $FontSet>;
        static ALPHA_CUTOFF: number;
        lineHeight: number;
        splitter: $StringSplitter;
        constructor(arg0: $Function_<$ResourceLocation, $FontSet>, arg1: boolean);
        get bidirectional(): boolean;
    }
    export class $Gui$HeartType extends $Enum<$Gui$HeartType> implements $IExtensibleEnum, $HeartTypeAccessor {
        getSprite(arg0: boolean, arg1: boolean, arg2: boolean): $ResourceLocation;
        static callForPlayer$aether_$md$68cb88$0(arg0: $Player): $Gui$HeartType;
        static getExtensionInfo(): $ExtensionInfo;
        static values(): $Gui$HeartType[];
        static valueOf(arg0: string): $Gui$HeartType;
        static ABSORBING: $Gui$HeartType;
        static CONTAINER: $Gui$HeartType;
        static WITHERED: $Gui$HeartType;
        static POISIONED: $Gui$HeartType;
        static FROZEN: $Gui$HeartType;
        static NORMAL: $Gui$HeartType;
        static get extensionInfo(): $ExtensionInfo;
    }
    /**
     * Values that may be interpreted as {@link $Gui$HeartType}.
     */
    export type $Gui$HeartType_ = "container" | "normal" | "poisioned" | "withered" | "absorbing" | "frozen";
    export class $Font$DisplayMode extends $Enum<$Font$DisplayMode> {
        static values(): $Font$DisplayMode[];
        static valueOf(arg0: string): $Font$DisplayMode;
        static POLYGON_OFFSET: $Font$DisplayMode;
        static SEE_THROUGH: $Font$DisplayMode;
        static NORMAL: $Font$DisplayMode;
    }
    /**
     * Values that may be interpreted as {@link $Font$DisplayMode}.
     */
    export type $Font$DisplayMode_ = "normal" | "see_through" | "polygon_offset";
    export class $GuiGraphics$ScissorStack {
        containsPoint(arg0: number, arg1: number): boolean;
        push(arg0: $ScreenRectangle_): $ScreenRectangle;
        pop(): $ScreenRectangle;
    }
    export class $Gui implements $GuiAccessor$1, $UIAccessor, $GuiAccessor, $IMixinGui, $GuiSubtitleOverlayAccess, $GuiAccessor$3, $GuiAccessor$4, $GuiAccessor$2 {
        renderSavingIndicator(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
        getScreen(): $Screen;
        beforeInit(accessor: $UIAccessor): void;
        getDefinitions(): $List<any>;
        getStaticDefinitions(): $List<any>;
        getChildrenRenderables(): $List<any>;
        getFont(): $Font;
        setTitle(arg0: $Component_): void;
        getDebugOverlay(): $DebugScreenOverlay;
        isShowingChatDisabledByPlayer(): boolean;
        setChatDisabledByPlayerShown(arg0: boolean): void;
        setOverlayMessage(arg0: $Component_, arg1: boolean): void;
        onDisconnected(): void;
        getBossOverlay(): $BossHealthOverlay;
        getGuiTicks(): number;
        getChat(): $ChatComponent;
        setNowPlaying(arg0: $Component_): void;
        resetTitleTimes(): void;
        wrapMethod$zlo000$iris$handleHudHidingScreens(arg0: $GuiGraphics, arg1: $DeltaTracker, arg2: $Operation_<any>): void;
        handler$eom000$factory_api$renderOverlayMessage(guiGraphics: $GuiGraphics, deltaTracker: $DeltaTracker, ci: $CallbackInfo): void;
        handler$eom000$factory_api$renderOverlayMessageReturn(guiGraphics: $GuiGraphics, deltaTracker: $DeltaTracker, ci: $CallbackInfo): void;
        handler$eom000$factory_api$renderCrosshairReturn(guiGraphics: $GuiGraphics, deltaTracker: $DeltaTracker, ci: $CallbackInfo): void;
        handler$eom000$factory_api$renderEffects(guiGraphics: $GuiGraphics, deltaTracker: $DeltaTracker, ci: $CallbackInfo): void;
        handler$jnh000$ftbchunks$onRenderEffectsEnter(guiGraphics: $GuiGraphics, deltaTracker: $DeltaTracker, info: $CallbackInfo): void;
        handler$eom000$factory_api$renderEffectsReturn(guiGraphics: $GuiGraphics, deltaTracker: $DeltaTracker, ci: $CallbackInfo): void;
        handler$jnh000$ftbchunks$onRenderEffectsReturn(guiGraphics: $GuiGraphics, deltaTracker: $DeltaTracker, info: $CallbackInfo): void;
        renderSelectedItemName(arg0: $GuiGraphics, arg1: number): void;
        handler$eom000$factory_api$renderHotbar(guiGraphics: $GuiGraphics, deltaTracker: $DeltaTracker, ci: $CallbackInfo): void;
        handler$eom000$factory_api$renderHotbarReturn(guiGraphics: $GuiGraphics, deltaTracker: $DeltaTracker, ci: $CallbackInfo): void;
        handler$eom000$factory_api$renderJumpMeter(playerRideableJumping: $PlayerRideableJumping, guiGraphics: $GuiGraphics, i: number, ci: $CallbackInfo): void;
        handler$eom000$factory_api$renderJumpMeterReturn(playerRideableJumping: $PlayerRideableJumping, guiGraphics: $GuiGraphics, i: number, ci: $CallbackInfo): void;
        handler$eom000$factory_api$renderExperienceBar(guiGraphics: $GuiGraphics, i: number, ci: $CallbackInfo): void;
        handler$eom000$factory_api$renderExperienceBarReturn(guiGraphics: $GuiGraphics, i: number, ci: $CallbackInfo): void;
        handler$fba000$irons_spellbooks$disableXpBar(arg0: $CallbackInfoReturnable<any>): void;
        handler$eom000$factory_api$renderSelectedItemName(guiGraphics: $GuiGraphics, shift: number, ci: $CallbackInfo): void;
        handler$eom000$factory_api$renderSelectedItemNameReturn(guiGraphics: $GuiGraphics, shift: number, ci: $CallbackInfo): void;
        getPlayerVehicleWithHealth(): $LivingEntity;
        getVehicleMaxHearts(arg0: $LivingEntity): number;
        handler$eom000$factory_api$renderHealth(guiGraphics: $GuiGraphics, ci: $CallbackInfo): void;
        handler$eom000$factory_api$renderNeoForgeHealth(guiGraphics: $GuiGraphics, ci: $CallbackInfo): void;
        handler$eom000$factory_api$renderNeoForgeHealthReturn(guiGraphics: $GuiGraphics, ci: $CallbackInfo): void;
        handler$eom000$factory_api$renderVehicleHealth(guiGraphics: $GuiGraphics, ci: $CallbackInfo): void;
        handler$eom000$factory_api$renderVehicleHealthReturn(guiGraphics: $GuiGraphics, ci: $CallbackInfo): void;
        handler$mki000$quark$changeArmorItem(arg0: $GuiGraphics, arg1: $ResourceLocation_, arg2: number, arg3: $CallbackInfo): void;
        handler$eom000$factory_api$renderVignette(guiGraphics: $GuiGraphics, entity: $Entity, ci: $CallbackInfo): void;
        handler$eom000$factory_api$renderVignetteReturn(guiGraphics: $GuiGraphics, entity: $Entity, ci: $CallbackInfo): void;
        handler$meb000$ae2wtlib$restockOverlay(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: $DeltaTracker, arg4: $Player, arg5: $ItemStack_, arg6: number, arg7: $CallbackInfo): void;
        handler$mgf000$itemborders$renderSlot(graphics: $GuiGraphics, x: number, y: number, tracker: $DeltaTracker, player: $Player, item: $ItemStack_, something: number, info: $CallbackInfo): void;
        handler$eom000$factory_api$beforeTick(ci: $CallbackInfo): void;
        handler$eom000$factory_api$afterTick(ci: $CallbackInfo): void;
        constant$gjh000$apotheosis$apoth_extendTime(arg0: number): number;
        setSubtitle(arg0: $Component_): void;
        getTabList(): $PlayerTabOverlay;
        initModdedOverlays(): void;
        getLayerCount(): number;
        handler$bjl000$immersiveui$renderCode(guiGraphics: $GuiGraphics, deltaTracker: $DeltaTracker, ci: $CallbackInfo): void;
        handler$hbg000$glitchcore$onRender(arg0: $GuiGraphics, arg1: $DeltaTracker, arg2: $CallbackInfo): void;
        removeChild(listener: $GuiEventListener): $GuiEventListener;
        getElements(): $VariablesMap<any, any>;
        handler$eom000$factory_api$renderCrosshair(guiGraphics: $GuiGraphics, deltaTracker: $DeltaTracker, ci: $CallbackInfo): void;
        handler$eom000$factory_api$renderHealthReturn(guiGraphics: $GuiGraphics, ci: $CallbackInfo): void;
        addChild(renderableIndex: number, listener: $GuiEventListener, isRenderable: boolean, isNarratable: boolean): $GuiEventListener;
        tick(arg0: boolean): void;
        getChildren(): $List<any>;
        clearCache(): void;
        setTimes(arg0: number, arg1: number, arg2: number): void;
        render(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
        clear(): void;
        initialized(): boolean;
        getElementValue<V>(name: string, defaultValue: V, valueClass: $Class<V>): V;
        beforeInit(): void;
        afterInit(): void;
        reloadUI(): void;
        addRenderable<T extends $Renderable>(renderable: T): T;
        addRenderable<T extends $Renderable>(index: number, renderable: T): T;
        addRenderable<T extends $Renderable>(name: string, renderable: T): T;
        putStaticElement<E>(name: string, e: E): E;
        putSupplierComponent(name: string, component: $ArbitrarySupplier_<$Component>): void;
        beforeTick(): void;
        afterTick(): void;
        putBearer<E>(name: string, e: $Bearer<E>, convertOldValue: $Function_<$Object, E>): E;
        putBearer<E>(name: string, e: $Bearer<E>): E;
        putIntegerBearer(name: string, e: $Bearer<number>): number;
        putWidget<E extends $AbstractWidget>(name: string, e: E): E;
        putLayoutElement<E extends $LayoutElement>(name: string, e: E, setWidth: $Consumer_<number>, setHeight: $Consumer_<number>): E;
        putComponent(name: string, component: $Component_): $Component;
        putVec3(name: string, vec3: $Vec3_): $Vec3;
        putVec2(name: string, offset: $Vec2): $Vec2;
        createModifiableRenderable(name: string, renderable: $Renderable_): $Renderable;
        replaceValidElementValues(s: string): string;
        getBooleanElement(name: string): $ArbitrarySupplier<boolean>;
        getIntegerElement(name: string): $ArbitrarySupplier<number>;
        getResourceLocation(name: string): $ResourceLocation;
        getResourceLocation(name: string, defaultValue: $ResourceLocation_): $ResourceLocation;
        getItemStack(name: string, defaultValue: $ItemStack_): $ItemStack;
        getItemStack(name: string): $ItemStack;
        getVec3(name: string, defaultValue: $Vec3_): $Vec3;
        getVec3(name: string): $Vec3;
        addChild<T extends $GuiEventListener>(name: string, listener: T): T;
        addChild<T extends $GuiEventListener>(renderableIndex: number, listener: T): T;
        getElement<V>(name: string, valueClass: $Class<V>): $ArbitrarySupplier<V>;
        getElement(name: string): $ArbitrarySupplier<never>;
        getInteger(name: string, defaultValue: number): number;
        getNumber(name: string, defaultValue: $Number): $Number;
        getComponent(name: string, defaultValue: $Component_): $Component;
        getComponent(name: string): $Component;
        getBoolean(name: string, defaultValue: boolean): boolean;
        getBoolean(name: string): boolean;
        getFloat(name: string, defaultValue: number): number;
        getDouble(name: string, defaultValue: number): number;
        afterInit(accessor: $UIAccessor): void;
        beforeTick(accessor: $UIAccessor): void;
        afterTick(accessor: $UIAccessor): void;
        addStatic(uiDefinition: $UIDefinition): void;
        test(accessor: $UIAccessor): boolean;
        or(arg0: $Predicate_<$UIAccessor>): $Predicate<$UIAccessor>;
        negate(): $Predicate<$UIAccessor>;
        and(arg0: $Predicate_<$UIAccessor>): $Predicate<$UIAccessor>;
        getSpectatorGui(): $SpectatorGui;
        aether$getRandom(): $RandomSource;
        callRenderChat(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
        getLastToolHighlight(): $ItemStack;
        getToolHighlightTimer(): number;
        get_title_FancyMenu(): $Component;
        get_subtitle_FancyMenu(): $Component;
        getSubtitleOverlay(): $SubtitleOverlay;
        getSubtitle(): $Component;
        getActionbar(): $Component;
        getActionbarTime(): number;
        aether$getLastHealthTime(): number;
        aether$getHealthBlinkTime(): number;
        create$getSubtitleOverlay(): $SubtitleOverlay;
        create$getToolHighlightTimer(): number;
        create$renderTextureOverlay(arg0: $GuiGraphics, arg1: $ResourceLocation_, arg2: number): void;
        getTime(): number;
        getTitle(): $Component;
        minecraft: $Minecraft;
        static ARMOR_FULL_SPRITE: $ResourceLocation;
        overlayMessageString: $Component;
        static SPYGLASS_SCOPE_LOCATION: $ResourceLocation;
        vignetteBrightness: number;
        static ARMOR_EMPTY_SPRITE: $ResourceLocation;
        rightHeight: number;
        static ARMOR_HALF_SPRITE: $ResourceLocation;
        displayHealth: number;
        leftHeight: number;
        constructor(arg0: $Minecraft);
        get screen(): $Screen;
        get definitions(): $List<any>;
        get staticDefinitions(): $List<any>;
        get childrenRenderables(): $List<any>;
        get font(): $Font;
        get debugOverlay(): $DebugScreenOverlay;
        get showingChatDisabledByPlayer(): boolean;
        set chatDisabledByPlayerShown(value: boolean);
        get bossOverlay(): $BossHealthOverlay;
        get guiTicks(): number;
        get chat(): $ChatComponent;
        set nowPlaying(value: $Component_);
        get playerVehicleWithHealth(): $LivingEntity;
        get tabList(): $PlayerTabOverlay;
        get layerCount(): number;
        get elements(): $VariablesMap<any, any>;
        get children(): $List<any>;
        get spectatorGui(): $SpectatorGui;
        get lastToolHighlight(): $ItemStack;
        get toolHighlightTimer(): number;
        get _title_FancyMenu(): $Component;
        get _subtitle_FancyMenu(): $Component;
        get subtitleOverlay(): $SubtitleOverlay;
        get actionbar(): $Component;
        get actionbarTime(): number;
        get time(): number;
    }
    export class $GuiSpriteManager extends $TextureAtlasHolder {
        getSpriteScaling(arg0: $TextureAtlasSprite): $GuiSpriteScaling;
        constructor(arg0: $TextureManager);
    }
    export class $ComponentPath$Path extends $Record implements $ComponentPath {
        applyFocus(arg0: boolean): void;
        childPath(): $ComponentPath;
        component(): $ContainerEventHandler;
        constructor(arg0: $ContainerEventHandler, arg1: $ComponentPath);
    }
    /**
     * Values that may be interpreted as {@link $ComponentPath$Path}.
     */
    export type $ComponentPath$Path_ = { childPath?: $ComponentPath, component?: $ContainerEventHandler,  } | [childPath?: $ComponentPath, component?: $ContainerEventHandler, ];
    export class $LayeredDraw$Layer {
    }
    export interface $LayeredDraw$Layer {
        render(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
    }
    /**
     * Values that may be interpreted as {@link $LayeredDraw$Layer}.
     */
    export type $LayeredDraw$Layer_ = ((arg0: $GuiGraphics, arg1: $DeltaTracker) => void);
    export class $ComponentPath {
        static leaf(arg0: $GuiEventListener): $ComponentPath;
        static path(arg0: $ContainerEventHandler, arg1: $ComponentPath): $ComponentPath;
        static path(arg0: $GuiEventListener, ...arg1: $ContainerEventHandler[]): $ComponentPath;
    }
    export interface $ComponentPath {
        applyFocus(arg0: boolean): void;
        component(): $GuiEventListener;
    }
}
