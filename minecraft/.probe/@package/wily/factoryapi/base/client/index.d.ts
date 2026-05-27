import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MultiBufferSource$BufferSource } from "@package/net/minecraft/client/renderer";
import { $SpectatorGui } from "@package/net/minecraft/client/gui/components/spectator";
import { $LayoutElement } from "@package/net/minecraft/client/gui/layouts";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Bearer, $ArbitrarySupplier, $ArbitrarySupplier_ } from "@package/wily/factoryapi/base";
import { $Renderable_, $AbstractWidget, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $User } from "@package/net/minecraft/client";
import { $List, $Map_, $List_, $Map } from "@package/java/util";
import { $VariableResolver, $VariablesMap } from "@package/wily/factoryapi/util";
import { $Predicate, $Consumer, $Function_, $Consumer_ } from "@package/java/util/function";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $SpectatorMenu } from "@package/net/minecraft/client/gui/spectator";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $TextureAtlasSprite, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $Gui, $GuiSpriteManager, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Class, $Number, $Object } from "@package/java/lang";
import { $Vec3, $Vec2, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";
import { $Matrix3x2fStack } from "@package/org/joml";

declare module "@package/wily/factoryapi/base/client" {
    export class $WidgetAccessor {
        static of(widget: $AbstractWidget): $WidgetAccessor;
    }
    export interface $WidgetAccessor {
        setVisibility(arg0: $ArbitrarySupplier_<boolean>): void;
        getSpriteOverride(): $ResourceLocation;
        setSpriteOverride(arg0: $ResourceLocation_): void;
        setHighlightedSpriteOverride(arg0: $ResourceLocation_): void;
        getOnPressOverride(): $Consumer<$AbstractWidget>;
        setOnPressOverride(arg0: $Consumer_<$AbstractWidget>): void;
        set visibility(value: $ArbitrarySupplier_<boolean>);
        set highlightedSpriteOverride(value: $ResourceLocation_);
    }
    export class $FactoryGuiGraphics {
        static getSprites(): $GuiSpriteManager;
        static of(guiGraphics: $GuiGraphics): $FactoryGuiGraphics;
        static get sprites(): $GuiSpriteManager;
    }
    export interface $FactoryGuiGraphics {
        /**
         * @deprecated
         */
        disableDepthTest(): void;
        blit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        blit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        blit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        blit(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $TextureAtlasSprite): void;
        blit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        /**
         * @deprecated
         */
        enableDepthTest(): void;
        pose(): $FactoryGuiMatrixStack;
        enableScissor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        enableScissor(x: number, y: number, xd: number, yd: number): void;
        clearColor(): void;
        clearColor(changeBlend: boolean): void;
        blitSprite(resourceLocation: $ResourceLocation_, textureWidth: number, textureHeight: number, uvX: number, uvY: number, x: number, y: number, width: number, height: number): void;
        blitSprite(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        blitSprite(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        blitSprite(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        blitTiledSprite(textureAtlasSprite: $TextureAtlasSprite, i: number, j: number, k: number, l: number, m: number, n: number, o: number, p: number, q: number, r: number, s: number): void;
        getColor(): number[];
        pushBufferSource(arg0: $MultiBufferSource$BufferSource): void;
        popBufferSource(): void;
        setColor(r: number, g: number, b: number, a: number): void;
        setColor(arg0: number, arg1: boolean): void;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        setColor(color: number): void;
        getBufferSource(): $MultiBufferSource$BufferSource;
        context(): $GuiGraphics;
        get bufferSource(): $MultiBufferSource$BufferSource;
    }
    export class $FactoryGuiGraphics$AtlasAccessor {
        static of(atlas: $TextureAtlas): $FactoryGuiGraphics$AtlasAccessor;
    }
    export interface $FactoryGuiGraphics$AtlasAccessor {
        getTexturesByName(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        get texturesByName(): $Map<$ResourceLocation, $TextureAtlasSprite>;
    }
    /**
     * Values that may be interpreted as {@link $FactoryGuiGraphics$AtlasAccessor}.
     */
    export type $FactoryGuiGraphics$AtlasAccessor_ = (() => $Map_<$ResourceLocation_, $TextureAtlasSprite>);
    export class $SpectatorGuiAccessor {
        static of(gui: $SpectatorGui): $SpectatorGuiAccessor;
        static getInstance(): $SpectatorGuiAccessor;
        static get instance(): $SpectatorGuiAccessor;
    }
    export interface $SpectatorGuiAccessor {
        getVisibility(): number;
        getMenu(): $SpectatorMenu;
        get visibility(): number;
        get menu(): $SpectatorMenu;
    }
    export class $FactoryGuiGraphics$Accessor {
    }
    export interface $FactoryGuiGraphics$Accessor {
        getFactoryGuiGraphics(): $FactoryGuiGraphics;
        get factoryGuiGraphics(): $FactoryGuiGraphics;
    }
    /**
     * Values that may be interpreted as {@link $FactoryGuiGraphics$Accessor}.
     */
    export type $FactoryGuiGraphics$Accessor_ = (() => $FactoryGuiGraphics);
    export class $GuiAccessor {
        static of(gui: $Gui): $GuiAccessor;
        static getInstance(): $GuiAccessor;
        static get instance(): $GuiAccessor;
    }
    export interface $GuiAccessor {
        getSpectatorGui(): $SpectatorGui;
        getLastToolHighlight(): $ItemStack;
        getToolHighlightTimer(): number;
        get spectatorGui(): $SpectatorGui;
        get lastToolHighlight(): $ItemStack;
        get toolHighlightTimer(): number;
    }
    export class $UIAccessor {
        static createRenderablesWrapper(accessor: $UIAccessor, renderables: $List_<$Renderable_>): $UIAccessor;
        static of(gui: $Gui): $UIAccessor;
        static of(screen: $Screen): $UIAccessor;
    }
    export interface $UIAccessor extends $UIDefinition, $VariableResolver {
        getElementValue<V>(name: string, defaultValue: V, valueClass: $Class<V>): V;
        getScreen(): $Screen;
        beforeInit(accessor: $UIAccessor): void;
        beforeInit(): void;
        afterInit(): void;
        reloadUI(): void;
        addRenderable<T extends $Renderable>(renderable: T): T;
        addRenderable<T extends $Renderable>(index: number, renderable: T): T;
        addRenderable<T extends $Renderable>(name: string, renderable: T): T;
        getChildrenRenderables(): $List<$Renderable>;
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
        removeChild<T extends $GuiEventListener>(arg0: T): T;
        getElements(): $VariablesMap<string, $ArbitrarySupplier<never>>;
        addChild<T extends $GuiEventListener>(name: string, listener: T): T;
        addChild<T extends $GuiEventListener>(arg0: number, arg1: T, arg2: boolean, arg3: boolean): T;
        addChild<T extends $GuiEventListener>(renderableIndex: number, listener: T): T;
        getChildren(): $List<$GuiEventListener>;
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
        initialized(): boolean;
        get screen(): $Screen;
        get childrenRenderables(): $List<$Renderable>;
        get elements(): $VariablesMap<string, $ArbitrarySupplier<never>>;
        get children(): $List<$GuiEventListener>;
    }
    export class $FactoryGuiMatrixStack {
        static of(stack: $PoseStack): $FactoryGuiMatrixStack;
        static of(stack: $Matrix3x2fStack): $FactoryGuiMatrixStack;
        static of(graphics: $GuiGraphics): $FactoryGuiMatrixStack;
    }
    export interface $FactoryGuiMatrixStack {
        /**
         * @deprecated
         */
        translate(arg0: number, arg1: number, arg2: number): void;
        translate(arg0: number, arg1: number): void;
        /**
         * @deprecated
         */
        pushPose(): void;
        /**
         * @deprecated
         */
        popPose(): void;
        push(): void;
        pop(): void;
        getNative<T>(): T;
        /**
         * @deprecated
         */
        scale(arg0: number, arg1: number, arg2: number): void;
        scale(arg0: number, arg1: number): void;
        get native(): T;
    }
    export class $UIDefinition {
        static createBeforeInit(beforeInit: $Consumer_<$UIAccessor>): $UIDefinition;
        /**
         * @deprecated
         */
        static createBeforeInit(name: string, beforeInit: $Consumer_<$UIAccessor>): $UIDefinition;
        /**
         * @deprecated
         */
        static createAfterInit(name: string, afterInit: $Consumer_<$UIAccessor>): $UIDefinition;
        static createAfterInit(afterInit: $Consumer_<$UIAccessor>): $UIDefinition;
        static createAfterInitWithAmount(name: string, afterInit: $Consumer_<$UIAccessor>): $UIDefinition;
        static createBeforeTick(beforeTick: $Consumer_<$UIAccessor>): $UIDefinition;
        static createAfterTick(afterTick: $Consumer_<$UIAccessor>): $UIDefinition;
        static EMPTY: $UIDefinition;
    }
    export interface $UIDefinition extends $Predicate<$UIAccessor> {
        beforeInit(accessor: $UIAccessor): void;
        afterInit(accessor: $UIAccessor): void;
        getDefinitions(): $List<$UIDefinition>;
        getStaticDefinitions(): $List<$UIDefinition>;
        beforeTick(accessor: $UIAccessor): void;
        afterTick(accessor: $UIAccessor): void;
        addStatic(uiDefinition: $UIDefinition): void;
        test(accessor: $UIAccessor): boolean;
        get definitions(): $List<$UIDefinition>;
        get staticDefinitions(): $List<$UIDefinition>;
    }
    export class $MinecraftAccessor {
        static reloadResourcePacksIfLoaded(): void;
        static getInstance(): $MinecraftAccessor;
        static get instance(): $MinecraftAccessor;
    }
    export interface $MinecraftAccessor {
        hasGameLoaded(): boolean;
        setUser(arg0: $User): boolean;
        set user(value: $User);
    }
    export class $DatapackRepositoryAccessor {
    }
    export interface $DatapackRepositoryAccessor {
        tryApplyNewDataPacks(arg0: $PackRepository): void;
        getDatapackRepository(): $PackRepository;
        get datapackRepository(): $PackRepository;
    }
}
