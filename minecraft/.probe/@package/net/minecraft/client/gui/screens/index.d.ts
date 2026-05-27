import { $AccessorMenuScreens as $AccessorMenuScreens$1 } from "@package/net/darkhax/bookshelf/neoforge/mixin/access/gui/screen";
import { $ScreenAccessor as $ScreenAccessor$6, $TitleScreenAccessor as $TitleScreenAccessor$1 } from "@package/com/aetherteam/cumulus/mixin/mixins/client/accessor";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $MenuScreensAccessor } from "@package/wily/factoryapi/mixin/base";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft, $Options } from "@package/net/minecraft/client";
import { $ReloadInstance } from "@package/net/minecraft/server/packs/resources";
import { $FormattedCharSequence, $FormattedCharSequence_, $ProgressListener } from "@package/net/minecraft/util";
import { $ScreenAccessor as $ScreenAccessor$3 } from "@package/io/wispforest/owo/mixin";
import { $TransferState_, $ServerData } from "@package/net/minecraft/client/multiplayer";
import { $CustomizableScreen } from "@package/de/keksuccino/fancymenu/util/rendering/ui/screen";
import { $CreateWorldScreen, $WorldCreationContext_ } from "@package/net/minecraft/client/gui/screens/worldselection";
import { $Music } from "@package/net/minecraft/sounds";
import { $Connection, $DisconnectionDetails_ } from "@package/net/minecraft/network";
import { $URI } from "@package/java/net";
import { $ChatScreenAccessor, $ScreenAccessor as $ScreenAccessor$1 } from "@package/org/figuramc/figura/mixin/gui";
import { $ClientTooltipPositioner, $ClientTooltipPositioner_ } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $MenuType_, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $BooleanConsumer_, $BooleanConsumer } from "@package/it/unimi/dsi/fastutil/booleans";
import { $StructureSet_ } from "@package/net/minecraft/world/level/levelgen/structure";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $LayoutElement } from "@package/net/minecraft/client/gui/layouts";
import { $Component_, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $ScreenAccessor as $ScreenAccessor$5 } from "@package/dev/tr7zw/trender/gui/impl/mixin/client";
import { $Biome, $Biome_ } from "@package/net/minecraft/world/level/biome";
import { $IMixinScreen } from "@package/de/keksuccino/konkrete/mixin/mixins/client";
import { $FocusNavigationEvent$TabNavigation, $FocusNavigationEvent$ArrowNavigation, $ScreenDirection_ } from "@package/net/minecraft/client/gui/navigation";
import { $FlatLevelGeneratorSettings } from "@package/net/minecraft/world/level/levelgen/flat";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $PlacedFeature_ } from "@package/net/minecraft/world/level/levelgen/placement";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $AccessorScreen } from "@package/vazkii/patchouli/mixin/client";
import { $BanDetails_ } from "@package/com/mojang/authlib/minecraft";
import { $Vec3, $Vec2, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $GuiEventListener, $AbstractContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";
import { $IMixinConnectScreen, $IMixinChatScreen, $IMixinProgressScreen, $IMixinLevelLoadingScreen, $IMixinReceivingLevelScreen, $IMixinScreen as $IMixinScreen$1 } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $Bearer, $ArbitrarySupplier_, $ArbitrarySupplier } from "@package/wily/factoryapi/base";
import { $TitleScreenAccessor, $ScreenAccessor } from "@package/com/aetherteam/aether/mixin/mixins/client/accessor";
import { $ScreenAccessor as $ScreenAccessor$7 } from "@package/com/blackgear/platform/core/mixin/access";
import { $List, $List_ } from "@package/java/util";
import { $Event } from "@package/net/fabricmc/fabric/api/event";
import { $ScreenAccessor as $ScreenAccessor$8 } from "@package/net/blay09/mods/balm/mixin";
import { $Consumer_, $Predicate_, $Predicate, $IntSupplier, $Function_, $BooleanSupplier_ } from "@package/java/util/function";
import { $StoringChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $HolderGetter, $Holder } from "@package/net/minecraft/core";
import { $OwoScreenExtension } from "@package/io/wispforest/owo/util/pond";
import { $Path_ } from "@package/java/nio/file";
import { $UIAccessor, $UIDefinition } from "@package/wily/factoryapi/base/client";
import { $Layer, $Layer$Instance } from "@package/io/wispforest/owo/ui/layers";
import { $SimpleTexture, $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Number, $Throwable, $Record, $AutoCloseable, $Class, $Runnable_, $Object } from "@package/java/lang";
import { $ScreenExtensions } from "@package/net/fabricmc/fabric/impl/client/screen";
import { $NarratableEntry$NarrationPriority, $NarratableEntry, $NarratableEntry$NarrationPriority_ } from "@package/net/minecraft/client/gui/narration";
import { $Tooltip, $EditBox, $Renderable_, $AbstractWidget, $ObjectSelectionList, $SplashRenderer, $Renderable, $LogoRenderer, $Button$OnPress, $ObjectSelectionList$Entry } from "@package/net/minecraft/client/gui/components";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $VariablesMap } from "@package/wily/factoryapi/util";
import { $ServerAddress } from "@package/net/minecraft/client/multiplayer/resolver";
import { $IMixinLoadingOverlay } from "@package/de/keksuccino/drippyloadingscreen/mixin/mixins/common/client";
import { $ScreenAccessor as $ScreenAccessor$4 } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $ScreenAccessor as $ScreenAccessor$2 } from "@package/net/fabricmc/fabric/mixin/screen";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ConnectScreenAccessor } from "@package/net/fabricmc/fabric/mixin/networking/client/accessor";
import { $ScreenAccessor as $ScreenAccessor$9 } from "@package/thelm/jeidrawables/mixin";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $AccessorMenuScreens } from "@package/org/violetmoon/quark/mixin/mixins/client/accessor";
export * as options from "@package/net/minecraft/client/gui/screens/options";
export * as inventory from "@package/net/minecraft/client/gui/screens/inventory";
export * as reporting from "@package/net/minecraft/client/gui/screens/reporting";
export * as recipebook from "@package/net/minecraft/client/gui/screens/recipebook";
export * as achievement from "@package/net/minecraft/client/gui/screens/achievement";
export * as worldselection from "@package/net/minecraft/client/gui/screens/worldselection";
export * as packs from "@package/net/minecraft/client/gui/screens/packs";
export * as advancements from "@package/net/minecraft/client/gui/screens/advancements";
export * as telemetry from "@package/net/minecraft/client/gui/screens/telemetry";
export * as multiplayer from "@package/net/minecraft/client/gui/screens/multiplayer";
export * as social from "@package/net/minecraft/client/gui/screens/social";
export * as debug from "@package/net/minecraft/client/gui/screens/debug";

declare module "@package/net/minecraft/client/gui/screens" {
    export class $LoadingOverlay extends $Overlay implements $IMixinLoadingOverlay {
        static registerTextures(arg0: $Minecraft): void;
        static getBrandBackgroundDrippy$drippyloadingscreen_$md$68cb88$1(): $IntSupplier;
        getCurrentProgressDrippy(): number;
        reload: $ReloadInstance;
        static FADE_OUT_TIME: number;
        static FADE_IN_TIME: number;
        fadeOutStart: number;
        constructor(arg0: $Minecraft, arg1: $ReloadInstance, arg2: $Consumer_<($Throwable) | undefined>, arg3: boolean);
        static get brandBackgroundDrippy$drippyloadingscreen_$md$68cb88$1(): $IntSupplier;
        get currentProgressDrippy(): number;
    }
    export class $MenuScreens$ScreenConstructor<T extends $AbstractContainerMenu, U extends $Screen> {
    }
    export interface $MenuScreens$ScreenConstructor<T extends $AbstractContainerMenu, U extends $Screen> {
        fromPacket(arg0: $Component_, arg1: $MenuType_<T>, arg2: $Minecraft, arg3: number): void;
        create(arg0: T, arg1: $Inventory, arg2: $Component_): U;
    }
    /**
     * Values that may be interpreted as {@link $MenuScreens$ScreenConstructor}.
     */
    export type $MenuScreens$ScreenConstructor_<T, U> = ((arg0: T, arg1: $Inventory, arg2: $Component) => U);
    export class $ReceivingLevelScreen extends $Screen implements $IMixinReceivingLevelScreen {
        setCreatedAtFancyMenu(arg0: number): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $BooleanSupplier_, arg1: $ReceivingLevelScreen$Reason_);
        set createdAtFancyMenu(value: number);
    }
    export class $DatapackLoadFailureScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Runnable_, arg1: $Runnable_);
    }
    export class $CreateBuffetWorldScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen, arg1: $WorldCreationContext_, arg2: $Consumer_<$Holder<$Biome>>);
    }
    export class $OutOfMemoryScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor();
    }
    export class $ReceivingLevelScreen$Reason extends $Enum<$ReceivingLevelScreen$Reason> {
        static values(): $ReceivingLevelScreen$Reason[];
        static valueOf(arg0: string): $ReceivingLevelScreen$Reason;
        static OTHER: $ReceivingLevelScreen$Reason;
        static NETHER_PORTAL: $ReceivingLevelScreen$Reason;
        static END_PORTAL: $ReceivingLevelScreen$Reason;
    }
    /**
     * Values that may be interpreted as {@link $ReceivingLevelScreen$Reason}.
     */
    export type $ReceivingLevelScreen$Reason_ = "nether_portal" | "end_portal" | "other";
    export class $PresetFlatWorldScreen$PresetsList$Entry extends $ObjectSelectionList$Entry<$PresetFlatWorldScreen$PresetsList$Entry> {
    }
    export class $ProgressScreen extends $Screen implements $ProgressListener, $IMixinProgressScreen {
        progressStartNoAbort(arg0: $Component_): void;
        progressStart(arg0: $Component_): void;
        progressStage(arg0: $Component_): void;
        progressStagePercentage(arg0: number): void;
        stop(): void;
        getProgressFancyMenu(): number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: boolean);
        get progressFancyMenu(): number;
    }
    export class $ConnectScreen extends $Screen implements $IMixinConnectScreen, $ConnectScreenAccessor {
        static invokeConstructFancyMenu$fancymenu_$md$68cb88$0(arg0: $Screen, arg1: $Component_): $ConnectScreen;
        static startConnecting(arg0: $Screen, arg1: $Minecraft, arg2: $ServerAddress, arg3: $ServerData, arg4: boolean, arg5: $TransferState_): void;
        getConnection(): $Connection;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static UNKNOWN_HOST_MESSAGE: $Component;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static ABORT_CONNECTION: $Component;
        narratables: $List<$NarratableEntry>;
        width: number;
        connection: $Connection;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
    export class $ErrorScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Component_, arg1: $Component_);
    }
    export class $DirectJoinServerScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen, arg1: $BooleanConsumer_, arg2: $ServerData);
    }
    export class $CreateBuffetWorldScreen$BiomeList$Entry extends $ObjectSelectionList$Entry<$CreateBuffetWorldScreen$BiomeList$Entry> {
    }
    export class $CreateFlatWorldScreen extends $Screen {
        setConfig(arg0: $FlatLevelGeneratorSettings): void;
        settings(): $FlatLevelGeneratorSettings;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $CreateWorldScreen, arg1: $Consumer_<$FlatLevelGeneratorSettings>, arg2: $FlatLevelGeneratorSettings);
        set config(value: $FlatLevelGeneratorSettings);
    }
    export class $Screen extends $AbstractContainerEventHandler implements $Renderable, $ScreenExtensions, $ScreenAccessor$6, $ScreenAccessor$9, $IMixinScreen, $UIAccessor, $IMixinScreen$1, $CustomizableScreen, $ScreenAccessor$4, $ScreenAccessor$8, $ScreenAccessor$2, $ScreenAccessor$1, $ScreenAccessor, $AccessorScreen, $ScreenAccessor$3, $ScreenAccessor$5, $ScreenAccessor$7, $OwoScreenExtension {
        getScreen(): $Screen;
        addWidget<T extends $GuiEventListener>(arg0: T): T;
        isPauseScreen(): boolean;
        renderWithTooltip(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        addRenderableWidget<T extends $GuiEventListener>(arg0: T): T;
        removeOnInitChildrenFancyMenu(): $List<any>;
        getNarrationMessage(): $Component;
        handler$iod005$relics$render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: $CallbackInfo): void;
        handler$mge002$equipmentcompare$keyPressed(i: number, j: number, k: number, info: $CallbackInfoReturnable<any>): void;
        shouldCloseOnEsc(): boolean;
        createTabEvent(): $FocusNavigationEvent$TabNavigation;
        createArrowEvent(arg0: $ScreenDirection_): $FocusNavigationEvent$ArrowNavigation;
        clearFocus(): void;
        static hasShiftDown(): boolean;
        setInitialFocus(arg0: $GuiEventListener): void;
        handler$mge000$equipmentcompare$screenClosed(info: $CallbackInfo): void;
        addRenderableOnly<T extends $Renderable>(arg0: T): T;
        static getTooltipFromItem(arg0: $Minecraft, arg1: $ItemStack_): $List<$Component>;
        handleComponentClicked(arg0: $Style): boolean;
        handler$eoi000$factory_api$beforeInit(ci: $CallbackInfo): void;
        handler$eoi000$factory_api$afterInit(ci: $CallbackInfo): void;
        triggerImmediateNarration(arg0: boolean): void;
        rebuildWidgets(): void;
        handler$eoi000$factory_api$rebuildWidgetsBefore(ci: $CallbackInfo): void;
        handler$eoi000$factory_api$rebuildWidgetsAfter(ci: $CallbackInfo): void;
        handler$iod00a$relics$tick(arg0: $CallbackInfo): void;
        renderBackground(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        static renderMenuBackgroundTexture(arg0: $GuiGraphics, arg1: $ResourceLocation_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        renderTransparentBackground(arg0: $GuiGraphics): void;
        handler$eoi000$factory_api$isPauseScreen(cir: $CallbackInfoReturnable<any>): void;
        static hasControlDown(): boolean;
        static hasAltDown(): boolean;
        static isCut(arg0: number): boolean;
        static isPaste(arg0: number): boolean;
        static isSelectAll(arg0: number): boolean;
        static wrapScreenError(arg0: $Runnable_, arg1: string, arg2: string): void;
        onFilesDrop(arg0: $List_<$Path_>): void;
        afterMouseMove(): void;
        afterMouseAction(): void;
        afterKeyboardAction(): void;
        handleDelayedNarration(): void;
        static findNarratableWidget(arg0: $List_<$NarratableEntry>, arg1: $NarratableEntry): $Screen$NarratableSearchResult;
        updateNarratorStatus(arg0: boolean): void;
        setTooltipForNextRenderPass(arg0: $List_<$FormattedCharSequence_>): void;
        setTooltipForNextRenderPass(arg0: $Tooltip, arg1: $ClientTooltipPositioner_, arg2: boolean): void;
        setTooltipForNextRenderPass(arg0: $List_<$FormattedCharSequence_>, arg1: $ClientTooltipPositioner_, arg2: boolean): void;
        setTooltipForNextRenderPass(arg0: $Component_): void;
        getBackgroundMusic(): $Music;
        fabric_getButtons(): $List<any>;
        fabric_getRemoveEvent(): $Event<any>;
        fabric_getBeforeTickEvent(): $Event<any>;
        fabric_getAfterTickEvent(): $Event<any>;
        fabric_getBeforeRenderEvent(): $Event<any>;
        fabric_getAfterRenderEvent(): $Event<any>;
        fabric_getAllowKeyPressEvent(): $Event<any>;
        fabric_getBeforeKeyPressEvent(): $Event<any>;
        fabric_getAfterKeyPressEvent(): $Event<any>;
        fabric_getAllowKeyReleaseEvent(): $Event<any>;
        fabric_getBeforeKeyReleaseEvent(): $Event<any>;
        fabric_getAfterKeyReleaseEvent(): $Event<any>;
        fabric_getAllowMouseClickEvent(): $Event<any>;
        fabric_getBeforeMouseClickEvent(): $Event<any>;
        fabric_getAfterMouseClickEvent(): $Event<any>;
        fabric_getAllowMouseReleaseEvent(): $Event<any>;
        fabric_getBeforeMouseReleaseEvent(): $Event<any>;
        fabric_getAfterMouseReleaseEvent(): $Event<any>;
        fabric_getAllowMouseScrollEvent(): $Event<any>;
        fabric_getBeforeMouseScrollEvent(): $Event<any>;
        fabric_getAfterMouseScrollEvent(): $Event<any>;
        reloadUI(): void;
        getDefinitions(): $List<any>;
        getStaticDefinitions(): $List<any>;
        owo$updateLayers(): void;
        owo$getInstance(layer: $Layer<any, any>): $Layer$Instance;
        owo$getInstancesView(): $List<any>;
        static cumulus$getCubeMap$cumulus_menus_$md$68cb88$0(): $CubeMap;
        static cumulus$setCubeMap$cumulus_menus_$md$68cb88$1(arg0: $CubeMap): void;
        static cumulus$getPanorama$cumulus_menus_$md$68cb88$2(): $PanoramaRenderer;
        static cumulus$setPanorama$cumulus_menus_$md$68cb88$3(arg0: $PanoramaRenderer): void;
        static PANORAMA_RENDERER$owo_$md$68cb88$5(): $CubeMap;
        static ROTATING_PANORAMA_RENDERER$owo_$md$68cb88$6(): $PanoramaRenderer;
        removeChild(listener: $GuiEventListener): $GuiEventListener;
        getElements(): $VariablesMap<any, any>;
        addChild(renderableIndex: number, listener: $GuiEventListener, isRenderable: boolean, isNarratable: boolean): $GuiEventListener;
        tick(): void;
        getChildren(): $List<any>;
        resize(arg0: $Minecraft, arg1: number, arg2: number): void;
        added(): void;
        removed(): void;
        onClose(): void;
        getTitle(): $Component;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        static isCopy(arg0: number): boolean;
        init(arg0: $Minecraft, arg1: number, arg2: number): void;
        initialized(): boolean;
        getElementValue<V>(name: string, defaultValue: V, valueClass: $Class<V>): V;
        beforeInit(accessor: $UIAccessor): void;
        beforeInit(): void;
        afterInit(): void;
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
        getRenderables(): $List<$Renderable>;
        getChildrenFancyMenu(): $List<$GuiEventListener>;
        getRenderablesFancyMenu(): $List<$Renderable>;
        getNarratablesFancyMenu(): $List<$NarratableEntry>;
        getNarratables(): $List<$NarratableEntry>;
        jeidas$addRenderable<T extends $Renderable>(arg0: T): T;
        setFontKonkrete(arg0: $Font): void;
        getRenderablesKonkrete(): $List<$Renderable>;
        getChildrenKonkrete(): $List<$GuiEventListener>;
        invokeAddWidgetKonkrete<T extends $GuiEventListener>(arg0: T): T;
        invokeAddRenderableWidgetKonkrete<T extends $GuiEventListener>(arg0: T): T;
        getChildrenRenderables(): $List<$Renderable>;
        invokeRemoveWidgetFancyMenu(arg0: $GuiEventListener): void;
        get_initialized_FancyMenu(): boolean;
        invoke_init_FancyMenu(): void;
        catnip$getRenderables(): $List<$Renderable>;
        balm_getChildren(): $List<$GuiEventListener>;
        balm_getNarratables(): $List<$NarratableEntry>;
        balm_getRenderables(): $List<$Renderable>;
        balm$addRenderableWidget<T extends $GuiEventListener>(arg0: T): T;
        getFont(): $Font;
        aether$getNarratables(): $List<$NarratableEntry>;
        owo$addDrawableChild<T extends $GuiEventListener>(arg0: T): T;
        libgui$getChildren(): $List<$GuiEventListener>;
        callAddRenderableWidget<T extends $GuiEventListener>(arg0: T): T;
        callAddRenderableOnly<T extends $Renderable>(arg0: T): T;
        callAddWidget<T extends $GuiEventListener>(arg0: T): T;
        getMinecraft(): $Minecraft;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        get screen(): $Screen;
        get pauseScreen(): boolean;
        get narrationMessage(): $Component;
        set initialFocus(value: $GuiEventListener);
        get backgroundMusic(): $Music;
        get definitions(): $List<any>;
        get staticDefinitions(): $List<any>;
        get elements(): $VariablesMap<any, any>;
        get childrenFancyMenu(): $List<$GuiEventListener>;
        get renderablesFancyMenu(): $List<$Renderable>;
        get narratablesFancyMenu(): $List<$NarratableEntry>;
        set fontKonkrete(value: $Font);
        get renderablesKonkrete(): $List<$Renderable>;
        get childrenKonkrete(): $List<$GuiEventListener>;
        get childrenRenderables(): $List<$Renderable>;
        get _initialized_FancyMenu(): boolean;
    }
    export class $CreateFlatWorldScreen$DetailsList$Entry extends $ObjectSelectionList$Entry<$CreateFlatWorldScreen$DetailsList$Entry> {
    }
    export class $MenuScreens implements $AccessorMenuScreens$1, $MenuScreensAccessor, $AccessorMenuScreens {
        static selfTest(): boolean;
        static register$bookshelf_$md$68cb88$0(arg0: $MenuType_<any>, arg1: $MenuScreens$ScreenConstructor_<any, any>): void;
        static invokeRegister$quark_$md$68cb88$2(arg0: $MenuType_<any>, arg1: $MenuScreens$ScreenConstructor_<any, any>): void;
        static getScreenFactory<T extends $AbstractContainerMenu>(arg0: $MenuType_<T>): ($MenuScreens$ScreenConstructor<T, never>) | undefined;
        static getConstructor$factory_api_$md$68cb88$1(arg0: $MenuType_<any>): $MenuScreens$ScreenConstructor<any, any>;
        static create<T extends $AbstractContainerMenu>(arg0: $MenuType_<T>, arg1: $Minecraft, arg2: number, arg3: $Component_): void;
        static getConstructor<T extends $AbstractContainerMenu>(arg0: $MenuType_<T>): $MenuScreens$ScreenConstructor<T, never>;
        /**
         * @deprecated
         */
        static register<M extends $AbstractContainerMenu, U extends $Screen>(arg0: $MenuType_<M>, arg1: $MenuScreens$ScreenConstructor_<M, U>): void;
        static init(): void;
        constructor();
    }
    export class $DemoIntroScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor();
    }
    export class $LevelLoadingScreen extends $Screen implements $IMixinLevelLoadingScreen {
        static renderChunks(arg0: $GuiGraphics, arg1: $StoringChunkProgressListener, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getProgressListenerFancyMenu(): $StoringChunkProgressListener;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $StoringChunkProgressListener);
        get progressListenerFancyMenu(): $StoringChunkProgressListener;
    }
    export class $RecoverWorldDataScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Minecraft, arg1: $BooleanConsumer_, arg2: $LevelStorageSource$LevelStorageAccess);
    }
    export class $EditServerScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen, arg1: $BooleanConsumer_, arg2: $ServerData);
    }
    export class $TitleScreen extends $Screen implements $TitleScreenAccessor$1, $TitleScreenAccessor {
        handler$zla000$iris$firstInit(arg0: $CallbackInfo): void;
        static preloadResources(arg0: $TextureManager, arg1: $Executor_): $CompletableFuture<void>;
        modifyReturnValue$bop000$cumulus_menus$isPauseScreen(arg0: boolean): boolean;
        cumulus$getSplash(): $SplashRenderer;
        setSplash(arg0: $SplashRenderer): void;
        cumulus$setFading(arg0: boolean): void;
        cumulus$setFadeInStart(arg0: number): void;
        aether$getSplash(): $SplashRenderer;
        aether$setSplash(arg0: $SplashRenderer): void;
        aether$setFading(arg0: boolean): void;
        aether$getLogoRenderer(): $LogoRenderer;
        aether$setLogoRenderer(arg0: $LogoRenderer): void;
        callGetMultiplayerDisabledReason(): $Component;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        fading: boolean;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: boolean);
        constructor(arg0: boolean, arg1: $LogoRenderer);
        constructor();
        set splash(value: $SplashRenderer);
    }
    export class $GenericMessageScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Component_);
    }
    export class $GenericWaitingScreen extends $Screen {
        static createWaiting(arg0: $Component_, arg1: $Component_, arg2: $Runnable_): $GenericWaitingScreen;
        static createCompleted(arg0: $Component_, arg1: $Component_, arg2: $Component_, arg3: $Runnable_): $GenericWaitingScreen;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
    export class $ConfirmScreen extends $Screen {
        setDelay(arg0: number): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        callback: $BooleanConsumer;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $BooleanConsumer_, arg1: $Component_, arg2: $Component_, arg3: $Component_, arg4: $Component_);
        constructor(arg0: $BooleanConsumer_, arg1: $Component_, arg2: $Component_);
        set delay(value: number);
    }
    export class $LoadingDotsText {
        static get(arg0: number): string;
        constructor();
    }
    export class $NoticeWithLinkScreen extends $Screen {
        static createPackSymlinkWarningScreen(arg0: $Runnable_): $Screen;
        static createWorldSymlinkWarningScreen(arg0: $Runnable_): $Screen;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Component_, arg1: $Component_, arg2: $URI, arg3: $Runnable_);
    }
    export class $ChatScreen extends $Screen implements $IMixinChatScreen, $ChatScreenAccessor {
        normalizeChatMessage(arg0: string): string;
        handler$hgn000$nochatreports$onBeforeMessage(arg0: string, arg1: $CallbackInfoReturnable<any>): void;
        handleChatInput(arg0: string, arg1: boolean): void;
        moveInHistory(arg0: number): void;
        getInputFancyMenu(): $EditBox;
        getInput(): $EditBox;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static MOUSE_SCROLL_SPEED: number;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: string);
        get inputFancyMenu(): $EditBox;
        get input(): $EditBox;
    }
    export class $PauseScreen$FeedbackSubScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
    export class $CreateBuffetWorldScreen$BiomeList extends $ObjectSelectionList<$CreateBuffetWorldScreen$BiomeList$Entry> {
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        active: boolean;
        hovered: $CreateBuffetWorldScreen$BiomeList$Entry;
    }
    export class $DisconnectedScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen, arg1: $Component_, arg2: $DisconnectionDetails_);
        constructor(arg0: $Screen, arg1: $Component_, arg2: $Component_, arg3: $Component_);
        constructor(arg0: $Screen, arg1: $Component_, arg2: $Component_);
        constructor(arg0: $Screen, arg1: $Component_, arg2: $DisconnectionDetails_, arg3: $Component_);
    }
    export class $ConfirmLinkScreen extends $ConfirmScreen {
        copyToClipboard(): void;
        static confirmLinkNow(arg0: $Screen, arg1: string, arg2: boolean): void;
        static confirmLinkNow(arg0: $Screen, arg1: $URI): void;
        static confirmLinkNow(arg0: $Screen, arg1: $URI, arg2: boolean): void;
        static confirmLinkNow(arg0: $Screen, arg1: string): void;
        static confirmLink(arg0: $Screen, arg1: string): $Button$OnPress;
        static confirmLink(arg0: $Screen, arg1: $URI): $Button$OnPress;
        static confirmLink(arg0: $Screen, arg1: string, arg2: boolean): $Button$OnPress;
        static confirmLink(arg0: $Screen, arg1: $URI, arg2: boolean): $Button$OnPress;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        callback: $BooleanConsumer;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $BooleanConsumer_, arg1: $Component_, arg2: string, arg3: boolean);
        constructor(arg0: $BooleanConsumer_, arg1: $Component_, arg2: $URI, arg3: boolean);
        constructor(arg0: $BooleanConsumer_, arg1: $Component_, arg2: $Component_, arg3: $URI, arg4: $Component_, arg5: boolean);
        constructor(arg0: $BooleanConsumer_, arg1: $Component_, arg2: $Component_, arg3: string, arg4: $Component_, arg5: boolean);
        constructor(arg0: $BooleanConsumer_, arg1: string, arg2: boolean);
    }
    export class $ShareToLanScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen);
    }
    export class $DeathScreen$TitleConfirmScreen extends $ConfirmScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        callback: $BooleanConsumer;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $BooleanConsumer_, arg1: $Component_, arg2: $Component_, arg3: $Component_, arg4: $Component_);
    }
    export class $BackupConfirmScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        onProceed: $BackupConfirmScreen$Listener;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Runnable_, arg1: $BackupConfirmScreen$Listener_, arg2: $Component_, arg3: $Component_, arg4: boolean);
    }
    export class $BackupConfirmScreen$Listener {
    }
    export interface $BackupConfirmScreen$Listener {
        proceed(arg0: boolean, arg1: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $BackupConfirmScreen$Listener}.
     */
    export type $BackupConfirmScreen$Listener_ = ((arg0: boolean, arg1: boolean) => void);
    export class $FaviconTexture implements $AutoCloseable {
        upload(arg0: $NativeImage): void;
        static forServer(arg0: $TextureManager, arg1: string): $FaviconTexture;
        textureLocation(): $ResourceLocation;
        static forWorld(arg0: $TextureManager, arg1: string): $FaviconTexture;
        clear(): void;
        close(): void;
    }
    export class $PresetFlatWorldScreen extends $Screen {
        updateButtonValidity(arg0: boolean): void;
        static fromString(arg0: $HolderGetter<$Block_>, arg1: $HolderGetter<$Biome_>, arg2: $HolderGetter<$StructureSet_>, arg3: $HolderGetter<$PlacedFeature_>, arg4: string, arg5: $FlatLevelGeneratorSettings): $FlatLevelGeneratorSettings;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static UNKNOWN_PRESET: $Component;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $CreateFlatWorldScreen);
    }
    export class $PauseScreen extends $Screen {
        showsPauseMenu(): boolean;
        handler$boo000$cumulus_menus$onDisconnectWorldPreview(arg0: $CallbackInfo): void;
        handler$ibn000$aether$onDisconnectServerButton(arg0: $CallbackInfo): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: boolean);
    }
    export class $WinScreen$CreditsReader {
    }
    export interface $WinScreen$CreditsReader {
    }
    /**
     * Values that may be interpreted as {@link $WinScreen$CreditsReader}.
     */
    export type $WinScreen$CreditsReader_ = (() => void);
    export class $Screen$DeferredTooltipRendering extends $Record {
        tooltip(): $List<$FormattedCharSequence>;
        positioner(): $ClientTooltipPositioner;
        constructor(tooltip: $List_<$FormattedCharSequence_>, positioner: $ClientTooltipPositioner_);
    }
    /**
     * Values that may be interpreted as {@link $Screen$DeferredTooltipRendering}.
     */
    export type $Screen$DeferredTooltipRendering_ = { positioner?: $ClientTooltipPositioner_, tooltip?: $List_<$FormattedCharSequence_>,  } | [positioner?: $ClientTooltipPositioner_, tooltip?: $List_<$FormattedCharSequence_>, ];
    export class $AccessibilityOnboardingScreen extends $Screen {
        init(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Options, arg1: $Runnable_);
    }
    export class $InBedChatScreen extends $ChatScreen {
        onPlayerWokeUp(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static MOUSE_SCROLL_SPEED: number;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor();
    }
    export class $CreditsAndAttributionScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen);
    }
    export class $Overlay implements $Renderable {
        isPauseScreen(): boolean;
        constructor();
        get pauseScreen(): boolean;
    }
    export class $LoadingOverlay$LogoTexture extends $SimpleTexture {
        static NOT_ASSIGNED: number;
    }
    export class $CreateFlatWorldScreen$DetailsList extends $ObjectSelectionList<$CreateFlatWorldScreen$DetailsList$Entry> {
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        active: boolean;
        hovered: $CreateFlatWorldScreen$DetailsList$Entry;
    }
    export class $PresetFlatWorldScreen$PresetsList extends $ObjectSelectionList<$PresetFlatWorldScreen$PresetsList$Entry> {
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        active: boolean;
        hovered: $PresetFlatWorldScreen$PresetsList$Entry;
    }
    export class $AlertScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Runnable_, arg1: $Component_, arg2: $Component_);
        constructor(arg0: $Runnable_, arg1: $Component_, arg2: $Component_, arg3: $Component_, arg4: boolean);
    }
    export class $Screen$NarratableSearchResult {
        entry: $NarratableEntry;
        index: number;
        priority: $NarratableEntry$NarrationPriority;
        constructor(arg0: $NarratableEntry, arg1: number, arg2: $NarratableEntry$NarrationPriority_);
    }
    export class $DeathScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Component_, arg1: boolean);
    }
    export class $WinScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: boolean, arg1: $Runnable_);
    }
    export class $BanNoticeScreens {
        static createSkinBan(arg0: $Runnable_): $ConfirmLinkScreen;
        static createNameBan(arg0: string, arg1: $Runnable_): $ConfirmLinkScreen;
        static create(arg0: $BooleanConsumer_, arg1: $BanDetails_): $ConfirmLinkScreen;
        static NAME_BAN_TITLE: $Component;
        constructor();
    }
}
