import { $SplashRendererAccessor, $ButtonBuilderAccessor } from "@package/com/aetherteam/cumulus/mixin/mixins/client/accessor";
import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $EventSource } from "@package/io/wispforest/owo/util";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Language } from "@package/net/minecraft/locale";
import { $PlayerTabOverlayInvoker } from "@package/com/vladmarica/betterpingdisplay/mixin";
import { $ParseResults } from "@package/com/mojang/brigadier";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $OptionInstance, $Minecraft, $GuiMessage_, $GuiMessage, $GuiMessage$Line, $GuiMessageTag, $OptionInstance$TooltipSupplier_, $GuiMessageTag_ } from "@package/net/minecraft/client";
import { $SuggestionsListAccessor, $SubtitleOverlayAccessor } from "@package/org/figuramc/figura/ducks";
import { $AbstractSelectionListAccessor } from "@package/dev/isxander/yacl3/mixin";
import { $FormattedCharSequence, $ArrayListDeque, $FormattedCharSequence_ } from "@package/net/minecraft/util";
import { $BossEvent$BossBarOverlay_, $BossEvent, $BossEvent$BossBarColor_ } from "@package/net/minecraft/world";
import { $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $SoundManager, $SoundEventListener, $WeighedSoundEvents } from "@package/net/minecraft/client/sounds";
import { $TabManager, $Tab } from "@package/net/minecraft/client/gui/components/tabs";
import { $IAbstractWidgetExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $PlayerTabOverlayAccessor, $ChatComponentAccessor } from "@package/org/figuramc/figura/mixin/gui";
import { $ClientTooltipPositioner } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $AbstractButtonExtension, $ButtonEvents$AdjustRendering_ } from "@package/io/wispforest/accessories/client/gui";
import { $HeaderAndFooterLayout, $LayoutElement } from "@package/net/minecraft/client/gui/layouts";
import { $MessageSignature_, $MutableComponent, $Component_, $FormattedText, $MutableComponent_, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $IMixinAbstractWidget, $IMixinEditBox } from "@package/de/keksuccino/konkrete/mixin/mixins/client";
import { $FocusNavigationEvent_, $ScreenRectangle, $ScreenRectangle_ } from "@package/net/minecraft/client/gui/navigation";
import { $AbstractButtonAccessor } from "@package/org/dawnoftime/dawnoftime/mixin/impl/client";
import { $SharedSuggestionProvider } from "@package/net/minecraft/commands";
import { $Duration_ } from "@package/java/time";
import { $RemoteDebugSampleType_, $LocalSampleLogger } from "@package/net/minecraft/util/debugchart";
import { $AccessEditBox } from "@package/com/blamejared/searchables/mixin";
import { $FocusHandler } from "@package/io/wispforest/owo/ui/util";
import { $PlayerSkin, $PlayerSkin_ } from "@package/net/minecraft/client/resources";
import { $AbstractWidgetAccessor as $AbstractWidgetAccessor$1 } from "@package/it/hurts/octostudios/octolib/mixin";
import { $Vec2, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $GuiEventListener, $ContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";
import { $ComponentExtension } from "@package/io/wispforest/accessories/pond/owo";
import { $IMixinEditBox as $IMixinEditBox$1, $IMixinAbstractWidget as $IMixinAbstractWidget$1, $IMixinAbstractSliderButton, $IMixinSplashRenderer, $IMixinButton, $IMixinCommandSuggestions, $IMixinBossHealthOverlay, $IMixinSuggestionsList } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $MultilineTextFieldAccess } from "@package/dev/ftb/mods/ftblibrary/core/mixin/common";
import { $ArbitrarySupplier_ } from "@package/wily/factoryapi/base";
import { $AbstractWidgetAccessor, $BossHealthOverlayAccessor, $ButtonAccessor } from "@package/com/aetherteam/aether/mixin/mixins/client/accessor";
import { $EditBoxAccessor, $ButtonWidgetAccessor, $ClickableWidgetAccessor, $TextFieldWidgetAccessor, $EditBoxWidgetAccessor, $CheckboxWidgetAccessor } from "@package/io/wispforest/owo/mixin/ui/access";
import { $UIModel } from "@package/io/wispforest/owo/ui/parsing";
import { $UUID_, $Map, $OptionalInt, $List, $Map_, $Collection_, $List_, $AbstractList, $UUID } from "@package/java/util";
import { $IClickableWidget } from "@package/xaero/lib/client/gui/widget";
import { $Event } from "@package/net/fabricmc/fabric/api/event";
import { $OptionsSubScreen } from "@package/net/minecraft/client/gui/screens/options";
import { $ImageButtonAccessor, $CheckboxAccessor } from "@package/net/blay09/mods/balm/mixin";
import { $PlayerModel } from "@package/net/minecraft/client/model";
import { $Supplier_, $BooleanSupplier_, $Supplier, $Consumer_, $BiFunction, $Predicate_, $Predicate, $Consumer, $Function_, $BooleanSupplier, $BiFunction_ } from "@package/java/util/function";
import { $Suggestions, $Suggestion } from "@package/com/mojang/brigadier/suggestion";
import { $WidgetAccessor } from "@package/wily/factoryapi/base/client";
import { $VanillaWidgetComponent } from "@package/io/wispforest/owo/ui/component";
import { $Positioning, $CursorStyle, $Component$DismountReason_, $Component as $Component$1, $ParentComponent, $Sizing, $PositionedRectangle, $Component$FocusSource_, $Size, $AnimatableProperty, $CursorStyle_, $OwoUIDrawContext, $Size_, $Insets_ } from "@package/io/wispforest/owo/ui/core";
import { $CustomizableWidget$CustomBackgroundResetBehavior_, $UniqueLabeledSwitchCycleButton, $CustomizableSlider, $CustomizableWidget$CustomBackgroundResetBehavior, $CustomizableWidget, $UniqueWidget } from "@package/de/keksuccino/fancymenu/util/rendering/ui/widget";
import { $IAudio } from "@package/de/keksuccino/fancymenu/util/resource/resources/audio";
import { $Enum, $Iterable, $Record, $Runnable_ } from "@package/java/lang";
import { $LuaSound } from "@package/org/figuramc/figura/lua/api/sound";
import { $RenderableResource } from "@package/de/keksuccino/fancymenu/util/resource";
import { $NarratableEntry$NarrationPriority, $NarratableEntry, $NarrationElementOutput, $NarrationSupplier } from "@package/net/minecraft/client/gui/narration";
import { $EntityModelSet } from "@package/net/minecraft/client/model/geom";
import { $AccessorAbstractWidget } from "@package/net/darkhax/bookshelf/common/mixin/access/client/gui";
import { $ClientboundBossEventPacket } from "@package/net/minecraft/network/protocol/game";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ChatComponentAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors/client";
import { $GreedyInputComponent, $ComponentStub } from "@package/io/wispforest/owo/ui/inject";
import { $Scoreboard, $Objective } from "@package/net/minecraft/world/scores";
import { $ComponentPath, $GuiGraphics, $Gui, $Font } from "@package/net/minecraft/client/gui";
import { $Element } from "@package/org/w3c/dom";
export * as toasts from "@package/net/minecraft/client/gui/components/toasts";
export * as tabs from "@package/net/minecraft/client/gui/components/tabs";
export * as spectator from "@package/net/minecraft/client/gui/components/spectator";
export * as debugchart from "@package/net/minecraft/client/gui/components/debugchart";
export * as events from "@package/net/minecraft/client/gui/components/events";

declare module "@package/net/minecraft/client/gui/components" {
    export class $Tooltip implements $NarrationSupplier {
        updateNarration(arg0: $NarrationElementOutput): void;
        static splitTooltip(arg0: $Minecraft, arg1: $Component_): $List<$FormattedCharSequence>;
        static create(arg0: $Component_): $Tooltip;
        static create(arg0: $Component_, arg1: $Component_): $Tooltip;
        toCharSequence(arg0: $Minecraft): $List<$FormattedCharSequence>;
        static MAX_WIDTH: number;
        narration: $Component;
        cachedTooltip: $List<$FormattedCharSequence>;
        message: $Component;
        splitWithLanguage: $Language;
        constructor(arg0: $Component_, arg1: $Component_);
    }
    export class $CommonButtons {
        static accessibility(arg0: number, arg1: $Button$OnPress_, arg2: boolean): $SpriteIconButton;
        static language(arg0: number, arg1: $Button$OnPress_, arg2: boolean): $SpriteIconButton;
        constructor();
    }
    export class $WidgetTooltipHolder {
        updateNarration(arg0: $NarrationElementOutput): void;
        refreshTooltipForNextRenderPass(arg0: boolean, arg1: boolean, arg2: $ScreenRectangle_): void;
        createTooltipPositioner(arg0: $ScreenRectangle_, arg1: boolean, arg2: boolean): $ClientTooltipPositioner;
        setDelay(arg0: $Duration_): void;
        get(): $Tooltip;
        set(arg0: $Tooltip): void;
        constructor();
        set delay(value: $Duration_);
    }
    export class $PopupScreen$ButtonOption extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PopupScreen$ButtonOption}.
     */
    export type $PopupScreen$ButtonOption_ = { action?: $Consumer_<$PopupScreen>, message?: $Component_,  } | [action?: $Consumer_<$PopupScreen>, message?: $Component_, ];
    export class $MultilineTextField$StringView extends $Record {
        beginIndex(): number;
        endIndex(): number;
    }
    /**
     * Values that may be interpreted as {@link $MultilineTextField$StringView}.
     */
    export type $MultilineTextField$StringView_ = { beginIndex?: number, endIndex?: number,  } | [beginIndex?: number, endIndex?: number, ];
    export class $TabButton extends $AbstractWidget {
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        renderString(arg0: $GuiGraphics, arg1: $Font, arg2: number): void;
        isSelected(): boolean;
        tab(): $Tab;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(arg0: $TabManager, arg1: $Tab, arg2: number, arg3: number);
        get selected(): boolean;
    }
    export class $SubtitleOverlay$Subtitle {
        isAudibleFrom(arg0: $Vec3_): boolean;
        purgeOldInstances(arg0: number): void;
        isStillActive(): boolean;
        getClosest(arg0: $Vec3_): $SubtitleOverlay$SoundPlayedAt;
        refresh(arg0: $Vec3_): void;
        getText(): $Component;
        constructor(arg0: $Component_, arg1: number, arg2: $Vec3_);
        get stillActive(): boolean;
        get text(): $Component;
    }
    export class $SplashRenderer implements $SplashRendererAccessor, $IMixinSplashRenderer {
        render(arg0: $GuiGraphics, arg1: number, arg2: $Font, arg3: number): void;
        cumulus$getSplash(): string;
        cumulus$setSplash(arg0: string): void;
        getSplashFancyMenu(): string;
        static CHRISTMAS: $SplashRenderer;
        static HALLOWEEN: $SplashRenderer;
        splash: string;
        static NEW_YEAR: $SplashRenderer;
        constructor(arg0: string);
        get splashFancyMenu(): string;
    }
    export class $AbstractScrollWidget extends $AbstractWidget implements $Renderable, $GuiEventListener {
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        scrollbarWidth(): number;
        getScrollBarHeight(): number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_);
        get scrollBarHeight(): number;
    }
    export class $Button extends $AbstractButton implements $IMixinButton, $ButtonAccessor, $ButtonWidgetAccessor {
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        static builder(arg0: $Component_, arg1: $Button$OnPress_): $Button$Builder;
        setPressActionFancyMenu(arg0: $Button$OnPress_): void;
        callCreateNarrationMessage(): $MutableComponent;
        owo$setOnPress(arg0: $Button$OnPress_): void;
        visible: boolean;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        set pressActionFancyMenu(value: $Button$OnPress_);
    }
    export class $CycleButton$Builder<T> {
        withValues(arg0: $List_<T>, arg1: $List_<T>): $CycleButton$Builder<T>;
        withValues(arg0: $BooleanSupplier_, arg1: $List_<T>, arg2: $List_<T>): $CycleButton$Builder<T>;
        withValues(arg0: $CycleButton$ValueListSupplier<T>): $CycleButton$Builder<T>;
        withValues(...arg0: T[]): $CycleButton$Builder<T>;
        withValues(arg0: $Collection_<T>): $CycleButton$Builder<T>;
        withInitialValue(arg0: T): $CycleButton$Builder<T>;
        displayOnlyValue(): $CycleButton$Builder<T>;
        withTooltip(arg0: $OptionInstance$TooltipSupplier_<T>): $CycleButton$Builder<T>;
        withCustomNarration(arg0: $Function_<$CycleButton<T>, $MutableComponent>): $CycleButton$Builder<T>;
        create(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_): $CycleButton<T>;
        create(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $CycleButton$OnValueChange_<T>): $CycleButton<T>;
        create(arg0: $Component_, arg1: $CycleButton$OnValueChange_<T>): $CycleButton<T>;
        constructor(arg0: $Function_<T, $Component>);
    }
    export class $Whence extends $Enum<$Whence> {
        static values(): $Whence[];
        static valueOf(arg0: string): $Whence;
        static ABSOLUTE: $Whence;
        static RELATIVE: $Whence;
        static END: $Whence;
    }
    /**
     * Values that may be interpreted as {@link $Whence}.
     */
    export type $Whence_ = "absolute" | "relative" | "end";
    export class $Button$Builder implements $ButtonBuilderAccessor {
        tooltip(arg0: $Tooltip): $Button$Builder;
        createNarration(arg0: $Button$CreateNarration_): $Button$Builder;
        pos(arg0: number, arg1: number): $Button$Builder;
        build(arg0: $Function_<$Button$Builder, $Button>): $Button;
        build(): $Button;
        width(arg0: number): $Button$Builder;
        size(arg0: number, arg1: number): $Button$Builder;
        bounds(arg0: number, arg1: number, arg2: number, arg3: number): $Button$Builder;
        cumulus$x(): number;
        cumulus$y(): number;
        cumulus$width(): number;
        cumulus$height(): number;
        cumulus$message(): $Component;
        cumulus$onPress(): $Button$OnPress;
        cumulus$createNarration(): $Button$CreateNarration;
        cumulus$tooltip(): $Tooltip;
        constructor(arg0: $Component_, arg1: $Button$OnPress_);
    }
    export class $MultiLineLabel {
        static create(arg0: $Font, arg1: number, ...arg2: $Component_[]): $MultiLineLabel;
        static create(arg0: $Font, arg1: $Component_, arg2: number): $MultiLineLabel;
        static create(arg0: $Font, arg1: number, arg2: number, ...arg3: $Component_[]): $MultiLineLabel;
        static create(arg0: $Font, ...arg1: $Component_[]): $MultiLineLabel;
        static EMPTY: $MultiLineLabel;
    }
    export interface $MultiLineLabel {
        renderCentered(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        renderCentered(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        getLineCount(): number;
        renderLeftAlignedNoShadow(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): number;
        getWidth(): number;
        renderLeftAligned(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        get lineCount(): number;
        get width(): number;
    }
    export class $CommandSuggestions$SuggestionsList implements $IMixinSuggestionsList, $SuggestionsListAccessor {
        figura$setFiguraList(bool: boolean): void;
        cycle(arg0: number): void;
        mouseScrolled(arg0: number): boolean;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        useSuggestion(): void;
        select(arg0: number): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        getCurrentFancyMenu(): number;
        setLastMouseFancyMenu(arg0: $Vec2): void;
        getLastMouseFancyMenu(): $Vec2;
        getOffsetFancyMenu(): number;
        getRectFancyMenu(): $Rect2i;
        get currentFancyMenu(): number;
        get offsetFancyMenu(): number;
        get rectFancyMenu(): $Rect2i;
    }
    export class $LogoRenderer {
        renderLogo(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        renderLogo(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        static EASTER_EGG_LOGO: $ResourceLocation;
        static DEFAULT_HEIGHT_OFFSET: number;
        static LOGO_WIDTH: number;
        static LOGO_TEXTURE_WIDTH: number;
        static LOGO_HEIGHT: number;
        static MINECRAFT_LOGO: $ResourceLocation;
        static LOGO_TEXTURE_HEIGHT: number;
        static MINECRAFT_EDITION: $ResourceLocation;
        constructor(arg0: boolean);
    }
    export class $Checkbox$Builder {
        tooltip(arg0: $Tooltip): $Checkbox$Builder;
        onValueChange(arg0: $Checkbox$OnValueChange_): $Checkbox$Builder;
        selected(arg0: boolean): $Checkbox$Builder;
        selected(arg0: $OptionInstance<boolean>): $Checkbox$Builder;
        maxWidth(arg0: number): $Checkbox$Builder;
        pos(arg0: number, arg1: number): $Checkbox$Builder;
        build(): $Checkbox;
    }
    export class $PlayerTabOverlay$ScoreDisplayEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PlayerTabOverlay$ScoreDisplayEntry}.
     */
    export type $PlayerTabOverlay$ScoreDisplayEntry_ = { score?: number, name?: $Component_, scoreWidth?: number, formattedScore?: $Component_,  } | [score?: number, name?: $Component_, scoreWidth?: number, formattedScore?: $Component_, ];
    export class $ImageWidget$Texture extends $ImageWidget {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
    }
    export class $SpriteIconButton extends $Button {
        static builder(arg0: $Component_, arg1: $Button$OnPress_, arg2: boolean): $SpriteIconButton$Builder;
        visible: boolean;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
    }
    export class $CycleButton$OnValueChange<T> {
    }
    export interface $CycleButton$OnValueChange<T> {
        onValueChange(arg0: $CycleButton<T>, arg1: T): void;
    }
    /**
     * Values that may be interpreted as {@link $CycleButton$OnValueChange}.
     */
    export type $CycleButton$OnValueChange_<T> = ((arg0: $CycleButton<T>, arg1: T) => void);
    export class $AbstractSelectionList<E extends $AbstractSelectionList$Entry<E>> extends $AbstractContainerWidget implements $AbstractSelectionListAccessor {
        setSelected(arg0: E): void;
        getRowWidth(): number;
        getRowLeft(): number;
        getRowRight(): number;
        updateSizeAndPosition(arg0: number, arg1: number, arg2: number): void;
        getScrollAmount(): number;
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        clampScrollAmount(): void;
        setClampedScrollAmount(arg0: number): void;
        getMaxScroll(): number;
        getSelected(): E;
        setScrollAmount(arg0: number): void;
        getFirstElement(): E;
        updateSize(arg0: number, arg1: $HeaderAndFooterLayout): void;
        getEntryAtPosition(arg0: number, arg1: number): E;
        replaceEntries(arg0: $Collection_<E>): void;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        active: boolean;
        hovered: E;
        constructor(arg0: $Minecraft, arg1: number, arg2: number, arg3: number, arg4: number);
        get rowWidth(): number;
        get rowLeft(): number;
        get rowRight(): number;
        set clampedScrollAmount(value: number);
        get maxScroll(): number;
        get firstElement(): E;
    }
    export class $SpriteIconButton$TextAndIcon extends $SpriteIconButton {
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        visible: boolean;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
    }
    export class $AbstractContainerWidget extends $AbstractWidget implements $ContainerEventHandler {
        isDragging(): boolean;
        setDragging(arg0: boolean): void;
        getFocused(): $GuiEventListener;
        setFocused(arg0: $GuiEventListener): void;
        getChildAt(arg0: number, arg1: number): ($GuiEventListener) | undefined;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_);
    }
    export class $LerpingBossEvent extends $BossEvent {
        constructor(arg0: $UUID_, arg1: $Component_, arg2: number, arg3: $BossEvent$BossBarColor_, arg4: $BossEvent$BossBarOverlay_, arg5: boolean, arg6: boolean, arg7: boolean);
    }
    export class $MultilineTextField implements $MultilineTextFieldAccess, $EditBoxAccessor {
        keyPressed(arg0: number): boolean;
        insertText(arg0: string): void;
        getLineCount(): number;
        hasSelection(): boolean;
        setCharacterLimit(arg0: number): void;
        setValueListener(arg0: $Consumer_<string>): void;
        setCursorListener(arg0: $Runnable_): void;
        setSelecting(arg0: boolean): void;
        seekCursor(arg0: $Whence_, arg1: number): void;
        seekCursorLine(arg0: number): void;
        getPreviousWord(): $MultilineTextField$StringView;
        getNextWord(): $MultilineTextField$StringView;
        iterateLines(): $Iterable<$MultilineTextField$StringView>;
        hasCharacterLimit(): boolean;
        characterLimit(): number;
        getLineView(arg0: number): $MultilineTextField$StringView;
        getLineAtCursor(): number;
        seekCursorToPoint(arg0: number, arg1: number): void;
        getSelected(): $MultilineTextField$StringView;
        cursor(): number;
        deleteText(arg0: number): void;
        getSelectedText(): string;
        value(): string;
        setValue(arg0: string): void;
        owo$setWidth(arg0: number): void;
        owo$setSelectionEnd(arg0: number): void;
        setSelectCursor(arg0: number): void;
        owo$getSelectionEnd(): number;
        static NO_CHARACTER_LIMIT: number;
        constructor(arg0: $Font, arg1: number);
        get lineCount(): number;
        set valueListener(value: $Consumer_<string>);
        set cursorListener(value: $Runnable_);
        set selecting(value: boolean);
        get previousWord(): $MultilineTextField$StringView;
        get nextWord(): $MultilineTextField$StringView;
        get lineAtCursor(): number;
        get selected(): $MultilineTextField$StringView;
        get selectedText(): string;
        set selectCursor(value: number);
    }
    export class $ChatComponent$State {
        constructor(arg0: $List_<$GuiMessage_>, arg1: $List_<string>, arg2: $List_<$ChatComponent$DelayedMessageDeletion_>);
    }
    export class $ContainerObjectSelectionList$Entry<E extends $ContainerObjectSelectionList$Entry<E>> extends $AbstractSelectionList$Entry<E> implements $ContainerEventHandler {
        narratables(): $List<$NarratableEntry>;
        updateNarration(arg0: $NarrationElementOutput): void;
        isDragging(): boolean;
        setDragging(arg0: boolean): void;
        getFocused(): $GuiEventListener;
        setFocused(arg0: $GuiEventListener): void;
        focusPathAtIndex(arg0: $FocusNavigationEvent_, arg1: number): $ComponentPath;
        getChildAt(arg0: number, arg1: number): ($GuiEventListener) | undefined;
        constructor();
    }
    export class $Checkbox extends $AbstractButton implements $CheckboxAccessor, $CheckboxWidgetAccessor {
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        selected(): boolean;
        static getBoxSize(arg0: $Font): number;
        static builder(arg0: $Component_, arg1: $Font): $Checkbox$Builder;
        setSelected(arg0: boolean): void;
        owo$setChecked(arg0: boolean): void;
        owo$getTextWidget(): $MultiLineTextWidget;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $Component_, arg4: $Font, arg5: boolean, arg6: $Checkbox$OnValueChange_);
    }
    export class $LoadingDotsWidget extends $AbstractWidget {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(arg0: $Font, arg1: $Component_);
    }
    export class $SpriteIconButton$Builder {
        sprite(arg0: $ResourceLocation_, arg1: number, arg2: number): $SpriteIconButton$Builder;
        narration(arg0: $Button$CreateNarration_): $SpriteIconButton$Builder;
        build(): $SpriteIconButton;
        width(arg0: number): $SpriteIconButton$Builder;
        size(arg0: number, arg1: number): $SpriteIconButton$Builder;
        constructor(arg0: $Component_, arg1: $Button$OnPress_, arg2: boolean);
    }
    export class $PlainTextButton extends $Button {
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        visible: boolean;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Button$OnPress_, arg6: $Font);
    }
    export class $ImageWidget$Sprite extends $ImageWidget {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
    }
    export class $WidgetSprites extends $Record {
        enabledFocused(): $ResourceLocation;
        disabledFocused(): $ResourceLocation;
        disabled(): $ResourceLocation;
        get(arg0: boolean, arg1: boolean): $ResourceLocation;
        enabled(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_);
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_);
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $WidgetSprites}.
     */
    export type $WidgetSprites_ = { enabled?: $ResourceLocation_, disabledFocused?: $ResourceLocation_, disabled?: $ResourceLocation_, enabledFocused?: $ResourceLocation_,  } | [enabled?: $ResourceLocation_, disabledFocused?: $ResourceLocation_, disabled?: $ResourceLocation_, enabledFocused?: $ResourceLocation_, ];
    export class $ImageButton extends $Button implements $ImageButtonAccessor {
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        visible: boolean;
        active: boolean;
        static DEFAULT_WIDTH: number;
        sprites: $WidgetSprites;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $WidgetSprites_, arg5: $Button$OnPress_);
        constructor(arg0: number, arg1: number, arg2: $WidgetSprites_, arg3: $Button$OnPress_, arg4: $Component_);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $WidgetSprites_, arg5: $Button$OnPress_, arg6: $Component_);
    }
    export class $ComponentRenderUtils {
        static wrapComponents(arg0: $FormattedText, arg1: number, arg2: $Font): $List<$FormattedCharSequence>;
        constructor();
    }
    export class $PlayerTabOverlay$HealthState {
    }
    export class $StateSwitchingButton extends $AbstractWidget {
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        setStateTriggered(arg0: boolean): void;
        isStateTriggered(): boolean;
        initTextureValues(arg0: $WidgetSprites_): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean);
    }
    export class $MultiLineLabel$TextAndWidth extends $Record {
        text(): $FormattedCharSequence;
        width(): number;
        constructor(arg0: $FormattedCharSequence_, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $MultiLineLabel$TextAndWidth}.
     */
    export type $MultiLineLabel$TextAndWidth_ = { text?: $FormattedCharSequence_, width?: number,  } | [text?: $FormattedCharSequence_, width?: number, ];
    export class $PlayerSkinWidget$Model extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PlayerSkinWidget$Model}.
     */
    export type $PlayerSkinWidget$Model_ = { wideModel?: $PlayerModel<never>, slimModel?: $PlayerModel<never>,  } | [wideModel?: $PlayerModel<never>, slimModel?: $PlayerModel<never>, ];
    export class $SubtitleOverlay$SoundPlayedAt extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SubtitleOverlay$SoundPlayedAt}.
     */
    export type $SubtitleOverlay$SoundPlayedAt_ = { location?: $Vec3_, time?: number,  } | [location?: $Vec3_, time?: number, ];
    export class $Renderable {
    }
    export interface $Renderable {
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Renderable}.
     */
    export type $Renderable_ = ((arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number) => void);
    export class $AbstractWidget implements $Renderable, $GuiEventListener, $LayoutElement, $NarratableEntry, $IAbstractWidgetExtension, $ComponentStub, $ComponentExtension<any>, $AccessorAbstractWidget, $IMixinAbstractWidget, $WidgetAccessor, $IMixinAbstractWidget$1, $UniqueWidget, $CustomizableWidget, $AbstractWidgetAccessor, $ClickableWidgetAccessor, $AbstractWidgetAccessor$1 {
        setVisibility(supplier: $ArbitrarySupplier_<any>): void;
        setWidth(arg0: number): void;
        setWidgetIdentifierFancyMenu(arg0: string): $AbstractWidget;
        charTyped(): $EventSource<any>;
        isFocused(): boolean;
        tooltip(): $List<any>;
        tooltip(tooltip: $List_<any>): $Component$1;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        isMouseOver(arg0: number, arg1: number): boolean;
        getTabOrderGroup(): number;
        updateNarration(arg0: $NarrationElementOutput): void;
        narrationPriority(): $NarratableEntry$NarrationPriority;
        getRectangle(): $ScreenRectangle;
        /**
         * @deprecated
         */
        onClick(arg0: number, arg1: number): void;
        getTooltip(): $Tooltip;
        getSpriteOverride(): $ResourceLocation;
        setSpriteOverride(sprite: $ResourceLocation_): void;
        setHighlightedSpriteOverride(sprite: $ResourceLocation_): void;
        getOnPressOverride(): $Consumer<any>;
        setOnPressOverride(onPressOverride: $Consumer_<any>): void;
        setHeight(arg0: number): void;
        setX(arg0: number): void;
        setY(arg0: number): void;
        setTooltip(arg0: $Tooltip): void;
        setFocused(arg0: boolean): void;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        static renderScrollingString(arg0: $GuiGraphics, arg1: $Font, arg2: $Component_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        static renderScrollingString(arg0: $GuiGraphics, arg1: $Font, arg2: $Component_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        setAlpha(arg0: number): void;
        visitWidgets(arg0: $Consumer_<$AbstractWidget>): void;
        setTooltipDelay(arg0: $Duration_): void;
        isHiddenFancyMenu(): boolean;
        yOffset(): number;
        resetWidgetCustomizationsFancyMenu(): void;
        isHovered(): boolean;
        isNineSliceCustomBackgroundTexture_FancyMenu(): boolean;
        handler$eof002$factory_api$render(arg: $GuiGraphics, i: number, j: number, f: number, ci: $CallbackInfo): void;
        static wrapDefaultNarrationMessage(arg0: $Component_): $MutableComponent;
        handler$eof000$factory_api$onClick(ci: $CallbackInfo): void;
        onRelease(arg0: number, arg1: number): void;
        onDrag(arg0: number, arg1: number, arg2: number, arg3: number): void;
        playDownSound(arg0: $SoundManager): void;
        isHoveredOrFocused(): boolean;
        getFGColor(): number;
        setFGColor(arg0: number): void;
        clearFGColor(): void;
        getBottom(): number;
        setRectangle(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setTabOrderGroup(arg0: number): void;
        allowIndividualOverdraw(): boolean;
        allowIndividualOverdraw(value: boolean): $Component$1;
        addHoverOrFocusStateListenerFancyMenu(arg0: $Consumer_<any>): void;
        addResetCustomizationsListenerFancyMenu(arg0: $Runnable_): void;
        getResetCustomizationsListenersFancyMenu(): $List<any>;
        addHoverStateListenerFancyMenu(arg0: $Consumer_<any>): void;
        addFocusStateListenerFancyMenu(arg0: $Consumer_<any>): void;
        getHoverStateListenersFancyMenu(): $List<any>;
        getFocusStateListenersFancyMenu(): $List<any>;
        getHoverOrFocusStateListenersFancyMenu(): $List<any>;
        getLastHoverStateFancyMenu(): boolean;
        setLastHoverStateFancyMenu(arg0: boolean): void;
        getLastFocusStateFancyMenu(): boolean;
        setLastFocusStateFancyMenu(arg0: boolean): void;
        getLastHoverOrFocusStateFancyMenu(): boolean;
        setLastHoverOrFocusStateFancyMenu(arg0: boolean): void;
        getCustomBackgroundNormalFancyMenu(): $RenderableResource;
        getCustomBackgroundHoverFancyMenu(): $RenderableResource;
        getCustomBackgroundInactiveFancyMenu(): $RenderableResource;
        setCustomBackgroundNormalFancyMenu(arg0: $RenderableResource): void;
        setCustomBackgroundHoverFancyMenu(arg0: $RenderableResource): void;
        setCustomBackgroundInactiveFancyMenu(arg0: $RenderableResource): void;
        setCustomBackgroundResetBehaviorFancyMenu(arg0: $CustomizableWidget$CustomBackgroundResetBehavior_): void;
        setHoverSoundFancyMenu(arg0: $IAudio): void;
        setCustomClickSoundFancyMenu(arg0: $IAudio): void;
        setHiddenFancyMenu(arg0: boolean): void;
        setCustomLabelFancyMenu(arg0: $Component_): void;
        setHoverLabelFancyMenu(arg0: $Component_): void;
        setCustomWidthFancyMenu(arg0: number): void;
        setCustomHeightFancyMenu(arg0: number): void;
        setCustomXFancyMenu(arg0: number): void;
        setCustomYFancyMenu(arg0: number): void;
        resetWidgetSizeAndPositionFancyMenu(): void;
        getCustomLabelFancyMenu(): $Component;
        getHoverLabelFancyMenu(): $Component;
        getCustomClickSoundFancyMenu(): $IAudio;
        getHoverSoundFancyMenu(): $IAudio;
        setNineSliceCustomBackground_FancyMenu(arg0: boolean): void;
        setNineSliceBorderX_FancyMenu(arg0: number): void;
        getNineSliceCustomBackgroundBorderX_FancyMenu(): number;
        setNineSliceBorderY_FancyMenu(arg0: number): void;
        getNineSliceCustomBackgroundBorderY_FancyMenu(): number;
        getCustomBackgroundResetBehaviorFancyMenu(): $CustomizableWidget$CustomBackgroundResetBehavior;
        getCustomWidthFancyMenu(): number;
        getCustomHeightFancyMenu(): number;
        getCustomXFancyMenu(): number;
        getCustomYFancyMenu(): number;
        getWidgetIdentifierFancyMenu(): string;
        dismount(reason: $Component$DismountReason_): void;
        focusHandler(): $FocusHandler;
        positioning(): $AnimatableProperty<any>;
        positioning(positioning: $Positioning): $Component$1;
        margins(): $AnimatableProperty<any>;
        margins(margins: $Insets_): $Component$1;
        horizontalSizing(horizontalSizing: $Sizing): $Component$1;
        horizontalSizing(): $AnimatableProperty<any>;
        verticalSizing(): $AnimatableProperty<any>;
        verticalSizing(verticalSizing: $Sizing): $Component$1;
        mouseDown(): $EventSource<any>;
        shouldDrawTooltip(mouseX: number, mouseY: number): boolean;
        cursorStyle(style: $CursorStyle_): $Component$1;
        cursorStyle(): $CursorStyle;
        onMouseDown(mouseX: number, mouseY: number, button: number): boolean;
        onMouseUp(mouseX: number, mouseY: number, button: number): boolean;
        mouseUp(): $EventSource<any>;
        mouseScroll(): $EventSource<any>;
        mouseDrag(): $EventSource<any>;
        keyPress(): $EventSource<any>;
        focusGained(): $EventSource<any>;
        focusLost(): $EventSource<any>;
        mouseEnter(): $EventSource<any>;
        mouseLeave(): $EventSource<any>;
        onMouseScroll(mouseX: number, mouseY: number, amount: number): boolean;
        onMouseDrag(mouseX: number, mouseY: number, deltaX: number, deltaY: number, button: number): boolean;
        onKeyPress(keyCode: number, scanCode: number, modifiers: number): boolean;
        onCharTyped(chr: string, modifiers: number): boolean;
        canFocus(source: $Component$FocusSource_): boolean;
        onFocusGained(source: $Component$FocusSource_): void;
        onFocusLost(): void;
        parseProperties(spec: $UIModel, element: $Element, children: $Map_<any, any>): void;
        zIndex(zIndex: number): $Component$1;
        zIndex(): number;
        widgetWrapper(): $VanillaWidgetComponent;
        updateX(x: number): void;
        updateY(y: number): void;
        static renderScrollingString$bookshelf_$md$68cb88$0(arg0: $GuiGraphics, arg1: $Font, arg2: $Component_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        xOffset(): number;
        widthOffset(): number;
        heightOffset(): number;
        getY(): number;
        getX(): number;
        getWidth(): number;
        getHeight(): number;
        isActive(): boolean;
        y(): number;
        setSize(arg0: number, arg1: number): void;
        width(): number;
        height(): number;
        configure(closure: $Consumer_<any>): $Component$1;
        setMessage(arg0: $Component_): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        draw(context: $OwoUIDrawContext, mouseX: number, mouseY: number, partialTicks: number, delta: number): void;
        getRight(): number;
        parent(): $ParentComponent;
        inflate(space: $Size_): void;
        update(delta: number, mouseX: number, mouseY: number): void;
        x(): number;
        getMessage(): $Component;
        id(): string;
        id(id: string): $Component$1;
        mount(parent: $ParentComponent, x: number, y: number): void;
        mouseMoved(arg0: number, arg1: number): void;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        charTyped(arg0: string, arg1: number): boolean;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        getCurrentFocusPath(): $ComponentPath;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        setPosition(arg0: number, arg1: number): void;
        onClick(arg0: number, arg1: number, arg2: number): void;
        tickHoverStateListenersFancyMenu(arg0: boolean): void;
        tickHoverOrFocusStateListenersFancyMenu(arg0: boolean): void;
        getOriginalMessageFancyMenu(): $Component;
        stopCustomClickSoundFancyMenu(): void;
        stopHoverSoundFancyMenu(): void;
        renderCustomBackgroundFancyMenu(arg0: $AbstractWidget, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        tickFocusStateListenersFancyMenu(arg0: boolean): void;
        sizing(horizontalSizing: $Sizing, verticalSizing: $Sizing): $Component$1;
        sizing(sizing: $Sizing): $Component$1;
        tooltip(tooltip: $Component_): $Component$1;
        tooltip(tooltip: $Collection_<$Component_>): $Component$1;
        moveTo(x: number, y: number): void;
        drawTooltip(context: $OwoUIDrawContext, mouseX: number, mouseY: number, partialTicks: number, delta: number): void;
        drawFocusHighlight(context: $OwoUIDrawContext, mouseX: number, mouseY: number, partialTicks: number, delta: number): void;
        isInBoundingBox(x: number, y: number): boolean;
        hasParent(): boolean;
        baseX(): number;
        baseY(): number;
        fullSize(): $Size;
        remove(): void;
        root(): $ParentComponent;
        intersection(other: $PositionedRectangle): $PositionedRectangle;
        intersects(other: $PositionedRectangle): boolean;
        interpolate(next: $PositionedRectangle, delta: number): $PositionedRectangle;
        getAlphaFancyMenu(): number;
        setHeightKonkrete(arg0: number): void;
        setHeightFancyMenu(arg0: number): void;
        setMessageFieldFancyMenu(arg0: $Component_): void;
        aether$getAlpha(): number;
        owo$setHeight(arg0: number): void;
        owo$setWidth(arg0: number): void;
        owo$getTooltip(): $WidgetTooltipHolder;
        getLocalX(): number;
        getLocalY(): number;
        owo$setX(arg0: number): void;
        owo$setY(arg0: number): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_);
        set visibility(value: $ArbitrarySupplier_<any>);
        set highlightedSpriteOverride(value: $ResourceLocation_);
        set alpha(value: number);
        set tooltipDelay(value: $Duration_);
        get hovered(): boolean;
        get nineSliceCustomBackgroundTexture_FancyMenu(): boolean;
        get hoveredOrFocused(): boolean;
        get bottom(): number;
        get resetCustomizationsListenersFancyMenu(): $List<any>;
        get hoverStateListenersFancyMenu(): $List<any>;
        get focusStateListenersFancyMenu(): $List<any>;
        get hoverOrFocusStateListenersFancyMenu(): $List<any>;
        set nineSliceCustomBackground_FancyMenu(value: boolean);
        set nineSliceBorderX_FancyMenu(value: number);
        get nineSliceCustomBackgroundBorderX_FancyMenu(): number;
        set nineSliceBorderY_FancyMenu(value: number);
        get nineSliceCustomBackgroundBorderY_FancyMenu(): number;
        get right(): number;
        get currentFocusPath(): $ComponentPath;
        get originalMessageFancyMenu(): $Component;
        get alphaFancyMenu(): number;
        set heightKonkrete(value: number);
        set heightFancyMenu(value: number);
        set messageFieldFancyMenu(value: $Component_);
        get localX(): number;
        get localY(): number;
    }
    export class $Button$CreateNarration {
    }
    export interface $Button$CreateNarration {
        createNarrationMessage(arg0: $Supplier_<$MutableComponent>): $MutableComponent;
    }
    /**
     * Values that may be interpreted as {@link $Button$CreateNarration}.
     */
    export type $Button$CreateNarration_ = ((arg0: $Supplier<$MutableComponent>) => $MutableComponent_);
    export class $MultiLineTextWidget$CacheKey extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $MultiLineTextWidget$CacheKey}.
     */
    export type $MultiLineTextWidget$CacheKey_ = { maxRows?: $OptionalInt, message?: $Component_, maxWidth?: number,  } | [maxRows?: $OptionalInt, message?: $Component_, maxWidth?: number, ];
    export class $DebugScreenOverlay {
        showProfilerChart(): boolean;
        showDebugScreen(): boolean;
        logFrameDuration(arg0: number): void;
        toggleFpsCharts(): void;
        toggleProfilerChart(): void;
        toggleNetworkCharts(): void;
        toggleOverlay(): void;
        getTickTimeLogger(): $LocalSampleLogger;
        clearChunkCache(): void;
        getPingLogger(): $LocalSampleLogger;
        logRemoteSample(arg0: number[], arg1: $RemoteDebugSampleType_): void;
        showNetworkCharts(): boolean;
        handler$hlh000$entityculling$getLeftText(callback: $CallbackInfoReturnable<any>): $List<any>;
        localvar$ban000$veil$modifyGameInformation(arg0: $List_<any>): $List<any>;
        localvar$lbf000$sable$addDebugInfo(arg0: $List_<any>): $List<any>;
        showFpsCharts(): boolean;
        getBandwidthLogger(): $LocalSampleLogger;
        render(arg0: $GuiGraphics): void;
        reset(): void;
        constructor(arg0: $Minecraft);
        get tickTimeLogger(): $LocalSampleLogger;
        get pingLogger(): $LocalSampleLogger;
        get bandwidthLogger(): $LocalSampleLogger;
    }
    export class $PopupScreen extends $Screen {
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
    export class $DebugScreenOverlay$AllocationRateCalculator {
    }
    export class $EditBox extends $AbstractWidget implements $Renderable, $IMixinEditBox, $IMixinEditBox$1, $AccessEditBox, $GreedyInputComponent, $TextFieldWidgetAccessor {
        setVisible(arg0: boolean): void;
        insertText(arg0: string): void;
        getCursorPosition(): number;
        isVisible(): boolean;
        setMaxLength(arg0: number): void;
        setBordered(arg0: boolean): void;
        setResponder(arg0: $Consumer_<string>): void;
        setCanLoseFocus(arg0: boolean): void;
        setTextColor(arg0: number): void;
        setHint(arg0: $Component_): void;
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        onValueChange(arg0: string): void;
        canConsumeInput(): boolean;
        setFilter(arg0: $Predicate_<string>): void;
        setFormatter(arg0: $BiFunction_<string, number, $FormattedCharSequence>): void;
        isEditable(): boolean;
        moveCursorToEnd(arg0: boolean): void;
        setHighlightPos(arg0: number): void;
        getHighlighted(): string;
        setCursorPosition(arg0: number): void;
        deleteText(arg0: number): void;
        deleteWords(arg0: number): void;
        deleteChars(arg0: number): void;
        getWordPosition(arg0: number): number;
        getWordPosition(arg0: number, arg1: number): number;
        getWordPosition(arg0: number, arg1: number, arg2: boolean): number;
        deleteCharsToPos(arg0: number): void;
        moveCursorTo(arg0: number, arg1: boolean): void;
        moveCursor(arg0: number, arg1: boolean): void;
        moveCursorToStart(arg0: boolean): void;
        getInnerWidth(): number;
        isBordered(): boolean;
        renderHighlight(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        setTextColorUneditable(arg0: number): void;
        getScreenX(arg0: number): number;
        setTextShadow(arg0: boolean): void;
        getTextShadow(): boolean;
        setEditable(arg0: boolean): void;
        scrollTo(arg0: number): void;
        setSuggestion(arg0: string): void;
        getMaxLength(): number;
        getValue(): string;
        setValue(arg0: string): void;
        getIsEditableKonkrete(): boolean;
        getHightlightPosKonkrete(): number;
        getMaxLengthKonkrete(): number;
        onValueChangeKonkrete(arg0: string): void;
        getIsEditableFancyMenu(): boolean;
        getDisplayPosFancyMenu(): number;
        setDisplayPosFancyMenu(arg0: number): void;
        getBorderedFancyMenu(): boolean;
        getMaxLengthFancyMenu(): number;
        getFormatterFancyMenu(): $BiFunction<string, number, $FormattedCharSequence>;
        getHighlightPosFancyMenu(): number;
        invokeDeleteTextFancyMenu(arg0: number): void;
        getTextColorFancyMenu(): number;
        getTextColorUneditableFancyMenu(): number;
        getFocusedTimeFancyMenu(): number;
        getHintFancyMenu(): $Component;
        getSuggestionFancyMenu(): string;
        invokeRenderHighlightFancyMenu(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        searchables$getFilter(): $Predicate<string>;
        searchables$getResponder(): $Consumer<string>;
        owo$drawsBackground(): boolean;
        bordered: boolean;
        static DEFAULT_TEXT_COLOR: number;
        displayPos: number;
        static UNSET_FG_COLOR: number;
        textColorUneditable: number;
        value: string;
        static SPRITES: $WidgetSprites;
        canLoseFocus: boolean;
        focusedTime: number;
        visible: boolean;
        static BACKWARDS: number;
        suggestion: string;
        responder: $Consumer<string>;
        active: boolean;
        cursorPos: number;
        textColor: number;
        filter: $Predicate<string>;
        formatter: $BiFunction<string, number, $FormattedCharSequence>;
        highlightPos: number;
        hint: $Component;
        static FORWARDS: number;
        maxLength: number;
        font: $Font;
        constructor(arg0: $Font, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Component_);
        constructor(arg0: $Font, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $EditBox, arg6: $Component_);
        constructor(arg0: $Font, arg1: number, arg2: number, arg3: $Component_);
        get highlighted(): string;
        get innerWidth(): number;
        get isEditableKonkrete(): boolean;
        get hightlightPosKonkrete(): number;
        get maxLengthKonkrete(): number;
        get isEditableFancyMenu(): boolean;
        get borderedFancyMenu(): boolean;
        get maxLengthFancyMenu(): number;
        get formatterFancyMenu(): $BiFunction<string, number, $FormattedCharSequence>;
        get highlightPosFancyMenu(): number;
        get textColorFancyMenu(): number;
        get textColorUneditableFancyMenu(): number;
        get focusedTimeFancyMenu(): number;
        get hintFancyMenu(): $Component;
        get suggestionFancyMenu(): string;
    }
    export class $StringWidget extends $AbstractStringWidget {
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        setColor(arg0: number): $StringWidget;
        alignLeft(): $StringWidget;
        alignCenter(): $StringWidget;
        alignRight(): $StringWidget;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(arg0: $Component_, arg1: $Font);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Font);
        constructor(arg0: number, arg1: number, arg2: $Component_, arg3: $Font);
        set color(value: number);
    }
    export class $SpriteIconButton$CenteredIcon extends $SpriteIconButton {
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        visible: boolean;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
    }
    export class $Checkbox$OnValueChange {
        static NOP: $Checkbox$OnValueChange;
    }
    export interface $Checkbox$OnValueChange {
        onValueChange(arg0: $Checkbox, arg1: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $Checkbox$OnValueChange}.
     */
    export type $Checkbox$OnValueChange_ = ((arg0: $Checkbox, arg1: boolean) => void);
    export class $FocusableTextWidget extends $MultiLineTextWidget {
        containWithin(arg0: number): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(arg0: number, arg1: $Component_, arg2: $Font);
        constructor(arg0: number, arg1: $Component_, arg2: $Font, arg3: number);
        constructor(arg0: number, arg1: $Component_, arg2: $Font, arg3: boolean, arg4: number);
    }
    export class $CycleButton<T> extends $AbstractButton implements $UniqueLabeledSwitchCycleButton {
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        createDefaultNarrationMessage(): $MutableComponent;
        static booleanBuilder(arg0: $Component_, arg1: $Component_): $CycleButton$Builder<boolean>;
        static onOffBuilder(arg0: boolean): $CycleButton$Builder<boolean>;
        static onOffBuilder(): $CycleButton$Builder<boolean>;
        getLabeledSwitchComponentLabel_FancyMenu(): $Component;
        setLabeledSwitchComponentLabel_FancyMenu(arg0: $Component_): void;
        getValue(): $PositionedRectangle;
        static builder<T>(arg0: $Function_<T, $Component>): $CycleButton$Builder<T>;
        setValue(arg0: $PositionedRectangle): void;
        static DEFAULT_ALT_LIST_SELECTOR: $BooleanSupplier;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        onValueChange: $CycleButton$OnValueChange<$PositionedRectangle>;
        active: boolean;
    }
    export class $FittingMultiLineTextWidget extends $AbstractScrollWidget {
        showingScrollBar(): boolean;
        setColor(arg0: number): $FittingMultiLineTextWidget;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Font);
        set color(value: number);
    }
    export class $Button$OnPress {
    }
    export interface $Button$OnPress {
        onPress(arg0: $Button): void;
    }
    /**
     * Values that may be interpreted as {@link $Button$OnPress}.
     */
    export type $Button$OnPress_ = ((arg0: $Button) => void);
    export class $AbstractOptionSliderButton extends $AbstractSliderButton {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
    }
    export class $ImageWidget extends $AbstractWidget {
        static sprite(arg0: number, arg1: number, arg2: $ResourceLocation_): $ImageWidget;
        static texture(arg0: number, arg1: number, arg2: $ResourceLocation_, arg3: number, arg4: number): $ImageWidget;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
    }
    export class $ObjectSelectionList<E extends $ObjectSelectionList$Entry<E>> extends $AbstractSelectionList<E> {
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        active: boolean;
        hovered: E;
        constructor(arg0: $Minecraft, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $BossHealthOverlay implements $IMixinBossHealthOverlay, $BossHealthOverlayAccessor {
        shouldDarkenScreen(): boolean;
        shouldPlayMusic(): boolean;
        shouldCreateWorldFog(): boolean;
        handler$eoo000$factory_api$renderReturn(guiGraphics: $GuiGraphics, ci: $CallbackInfo): void;
        handler$eoo001$factory_api$render(guiGraphics: $GuiGraphics, ci: $CallbackInfo): void;
        render(arg0: $GuiGraphics): void;
        reset(): void;
        update(arg0: $ClientboundBossEventPacket): void;
        get_events_FancyMenu(): $Map<$UUID, $LerpingBossEvent>;
        getEvents(): $Map<$UUID, $LerpingBossEvent>;
        constructor(arg0: $Minecraft);
        get _events_FancyMenu(): $Map<$UUID, $LerpingBossEvent>;
        get events(): $Map<$UUID, $LerpingBossEvent>;
    }
    export class $CycleButton$ValueListSupplier<T> {
        static create<T>(arg0: $BooleanSupplier_, arg1: $List_<T>, arg2: $List_<T>): $CycleButton$ValueListSupplier<T>;
        static create<T>(arg0: $Collection_<T>): $CycleButton$ValueListSupplier<T>;
    }
    export interface $CycleButton$ValueListSupplier<T> {
        getSelectedList(): $List<T>;
        getDefaultList(): $List<T>;
        get selectedList(): $List<T>;
        get defaultList(): $List<T>;
    }
    export class $AbstractStringWidget extends $AbstractWidget {
        setColor(arg0: number): $AbstractStringWidget;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Font);
        set color(value: number);
    }
    export class $AbstractSelectionList$Entry<E extends $AbstractSelectionList$Entry<E>> implements $GuiEventListener {
        isFocused(): boolean;
        isMouseOver(arg0: number, arg1: number): boolean;
        setFocused(arg0: boolean): void;
        renderBack(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: number): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: number): void;
        mouseMoved(arg0: number, arg1: number): void;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        charTyped(arg0: string, arg1: number): boolean;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        getCurrentFocusPath(): $ComponentPath;
        getRectangle(): $ScreenRectangle;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        getTabOrderGroup(): number;
        get currentFocusPath(): $ComponentPath;
        get rectangle(): $ScreenRectangle;
        get tabOrderGroup(): number;
    }
    export class $AbstractSelectionList$TrackedList extends $AbstractList<E> {
    }
    export class $LockIconButton$Icon extends $Enum<$LockIconButton$Icon> {
    }
    /**
     * Values that may be interpreted as {@link $LockIconButton$Icon}.
     */
    export type $LockIconButton$Icon_ = "locked" | "locked_hover" | "locked_disabled" | "unlocked" | "unlocked_hover" | "unlocked_disabled";
    export class $ContainerObjectSelectionList<E extends $ContainerObjectSelectionList$Entry<E>> extends $AbstractSelectionList<E> {
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        active: boolean;
        hovered: E;
        constructor(arg0: $Minecraft, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $ChatComponent$DelayedMessageDeletion extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ChatComponent$DelayedMessageDeletion}.
     */
    export type $ChatComponent$DelayedMessageDeletion_ = { deletableAfter?: number, signature?: $MessageSignature_,  } | [deletableAfter?: number, signature?: $MessageSignature_, ];
    export class $AbstractButton extends $AbstractWidget implements $AbstractButtonExtension, $IClickableWidget, $WidgetAccessor, $AbstractButtonAccessor {
        onPress(): void;
        renderString(arg0: $GuiGraphics, arg1: $Font, arg2: number): void;
        handler$eon000$factory_api$renderString(guiGraphics: $GuiGraphics, font: $Font, i: number, ci: $CallbackInfo): void;
        handler$eon000$factory_api$keyPressed(i: number, j: number, k: number, cir: $CallbackInfoReturnable<any>): void;
        getRenderingEvent(): $Event<any>;
        getXaero_tooltip(): $Supplier<any>;
        setXaero_tooltip(arg0: $Supplier_<any>): void;
        handler$eon000$factory_api$onClick(d: number, e: number, ci: $CallbackInfo): void;
        adjustRendering<B extends $AbstractButton>(event: $ButtonEvents$AdjustRendering_): B;
        getSprites(): $WidgetSprites;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_);
        get renderingEvent(): $Event<any>;
        get sprites(): $WidgetSprites;
    }
    export class $PlayerSkinWidget extends $AbstractWidget {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(arg0: number, arg1: number, arg2: $EntityModelSet, arg3: $Supplier_<$PlayerSkin>);
    }
    export class $OptionsList$OptionEntry extends $OptionsList$Entry {
    }
    export class $MultiLineTextWidget extends $AbstractStringWidget {
        setMaxWidth(arg0: number): $MultiLineTextWidget;
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        setMaxRows(arg0: number): $MultiLineTextWidget;
        setColor(arg0: number): $MultiLineTextWidget;
        setCentered(arg0: boolean): $MultiLineTextWidget;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(arg0: number, arg1: number, arg2: $Component_, arg3: $Font);
        constructor(arg0: $Component_, arg1: $Font);
        set maxWidth(value: number);
        set maxRows(value: number);
        set color(value: number);
        set centered(value: boolean);
    }
    export class $ObjectSelectionList$Entry<E extends $ObjectSelectionList$Entry<E>> extends $AbstractSelectionList$Entry<E> implements $NarrationSupplier {
        updateNarration(arg0: $NarrationElementOutput): void;
        getNarration(): $Component;
        constructor();
        get narration(): $Component;
    }
    export class $CommandSuggestions implements $IMixinCommandSuggestions {
        showSuggestions(arg0: boolean): void;
        renderSuggestions(arg0: $GuiGraphics, arg1: number, arg2: number): boolean;
        renderUsage(arg0: $GuiGraphics): void;
        mouseScrolled(arg0: number): boolean;
        getNarrationMessage(): $Component;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        getUsageNarration(): $Component;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        isVisible(): boolean;
        setAllowHiding(arg0: boolean): void;
        updateCommandInfo(): void;
        setAllowSuggestions(arg0: boolean): void;
        hide(): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        getAllowSuggestionsFancyMenu(): boolean;
        getKeepSuggestionsFancyMenu(): boolean;
        getCurrentParseFancyMenu(): $ParseResults<$SharedSuggestionProvider>;
        setCurrentParseFancyMenu(arg0: $ParseResults<$SharedSuggestionProvider>): void;
        getPendingSuggestionsFancyMenu(): $CompletableFuture<$Suggestions>;
        setPendingSuggestionsFancyMenu(arg0: $CompletableFuture<$Suggestions>): void;
        getCommandUsageFancyMenu(): $List<$FormattedCharSequence>;
        getSuggestionsFancyMenu(): $CommandSuggestions$SuggestionsList;
        setSuggestionsFancyMenu(arg0: $CommandSuggestions$SuggestionsList): void;
        invokeUpdateUsageInfoFancyMenu(): void;
        invokeSortSuggestionsFancyMenu(arg0: $Suggestions): $List<$Suggestion>;
        suggestions: $CommandSuggestions$SuggestionsList;
        constructor(arg0: $Minecraft, arg1: $Screen, arg2: $EditBox, arg3: $Font, arg4: boolean, arg5: boolean, arg6: number, arg7: number, arg8: boolean, arg9: number);
        get narrationMessage(): $Component;
        get usageNarration(): $Component;
        get visible(): boolean;
        set allowHiding(value: boolean);
        set allowSuggestions(value: boolean);
        get allowSuggestionsFancyMenu(): boolean;
        get keepSuggestionsFancyMenu(): boolean;
        get commandUsageFancyMenu(): $List<$FormattedCharSequence>;
    }
    export class $PopupScreen$Builder {
        setWidth(arg0: number): $PopupScreen$Builder;
        setImage(arg0: $ResourceLocation_): $PopupScreen$Builder;
        addButton(arg0: $Component_, arg1: $Consumer_<$PopupScreen>): $PopupScreen$Builder;
        build(): $PopupScreen;
        onClose(arg0: $Runnable_): $PopupScreen$Builder;
        setMessage(arg0: $Component_): $PopupScreen$Builder;
        constructor(arg0: $Screen, arg1: $Component_);
        set width(value: number);
        set image(value: $ResourceLocation_);
        set message(value: $Component_);
    }
    export class $OptionsList$Entry extends $ContainerObjectSelectionList$Entry<$OptionsList$Entry> {
    }
    export class $ChatComponent implements $ChatComponentAccess, $ChatComponentAccessor {
        getScale(): number;
        getMessageTagAt(arg0: number, arg1: number): $GuiMessageTag;
        addRecentChat(arg0: string): void;
        getRecentChat(): $ArrayListDeque<string>;
        resetChatScroll(): void;
        getLinesPerPage(): number;
        handleChatQueueClicked(arg0: number, arg1: number): boolean;
        getClickedComponentStyleAt(arg0: number, arg1: number): $Style;
        constant$dnc000$placebo$unEscapeChatLogNewlines(arg0: string): string;
        isChatFocused(): boolean;
        deleteMessage(arg0: $MessageSignature_): void;
        static defaultUnfocusedPct(): number;
        rescaleChat(): void;
        clearMessages(arg0: boolean): void;
        storeState(): $ChatComponent$State;
        static getWidth(arg0: number): number;
        getWidth(): number;
        static getHeight(arg0: number): number;
        getHeight(): number;
        tick(): void;
        scrollChat(arg0: number): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        addMessage(arg0: $Component_): void;
        addMessage(arg0: $Component_, arg1: $MessageSignature_, arg2: $GuiMessageTag_): void;
        restoreState(arg0: $ChatComponent$State): void;
        getAllMessages(): $List<$GuiMessage>;
        invokeRefreshTrimmedMessages(): void;
        trimmedMessages: $List<$GuiMessage$Line>;
        chatScrollbarPos: number;
        allMessages: $List<$GuiMessage>;
        newMessageSinceScroll: boolean;
        constructor(arg0: $Minecraft);
        get scale(): number;
        get recentChat(): $ArrayListDeque<string>;
        get linesPerPage(): number;
        get chatFocused(): boolean;
    }
    export class $PlayerTabOverlay implements $PlayerTabOverlayInvoker, $PlayerTabOverlayAccessor {
        setVisible(arg0: boolean): void;
        getNameForDisplay(arg0: $PlayerInfo): $Component;
        setHeader(arg0: $Component_): void;
        setFooter(arg0: $Component_): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: $Scoreboard, arg3: $Objective): void;
        reset(): void;
        invokeRenderPingIcon(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: $PlayerInfo): void;
        getThePlayerInfos(): $List<$PlayerInfo>;
        getHeader(): $Component;
        getFooter(): $Component;
        static MAX_ROWS_PER_COL: number;
        visible: boolean;
        constructor(arg0: $Minecraft, arg1: $Gui);
        get thePlayerInfos(): $List<$PlayerInfo>;
    }
    export class $PlayerFaceRenderer {
        static draw(arg0: $GuiGraphics, arg1: $ResourceLocation_, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: boolean): void;
        static draw(arg0: $GuiGraphics, arg1: $ResourceLocation_, arg2: number, arg3: number, arg4: number): void;
        static draw(arg0: $GuiGraphics, arg1: $PlayerSkin_, arg2: number, arg3: number, arg4: number): void;
        static SKIN_HAT_WIDTH: number;
        static SKIN_HAT_HEIGHT: number;
        static SKIN_HEAD_WIDTH: number;
        static SKIN_HAT_U: number;
        static SKIN_TEX_HEIGHT: number;
        static SKIN_HEAD_HEIGHT: number;
        static SKIN_HEAD_V: number;
        static SKIN_HEAD_U: number;
        static SKIN_HAT_V: number;
        static SKIN_TEX_WIDTH: number;
        constructor();
    }
    export class $TabOrderedElement {
    }
    export interface $TabOrderedElement {
        getTabOrderGroup(): number;
        get tabOrderGroup(): number;
    }
    export class $OptionsList extends $ContainerObjectSelectionList<$OptionsList$Entry> {
        getMouseOver(arg0: number, arg1: number): ($GuiEventListener) | undefined;
        findOption(arg0: $OptionInstance<never>): $AbstractWidget;
        addBig(arg0: $OptionInstance<never>): void;
        addSmall(arg0: $AbstractWidget, arg1: $AbstractWidget): void;
        addSmall(arg0: $List_<$AbstractWidget>): void;
        addSmall(...arg0: $OptionInstance<never>[]): void;
        applyUnsavedChanges(): void;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        active: boolean;
        hovered: $OptionsList$Entry;
        constructor(arg0: $Minecraft, arg1: number, arg2: $OptionsSubScreen);
    }
    export class $SubtitleOverlay implements $SoundEventListener, $SubtitleOverlayAccessor {
        figura$PlaySound(sound: $LuaSound, volume: number): void;
        onPlaySound(arg0: $SoundInstance, arg1: $WeighedSoundEvents, arg2: number): void;
        render(arg0: $GuiGraphics): void;
        constructor(arg0: $Minecraft);
    }
    export class $AbstractSliderButton extends $AbstractWidget implements $IMixinAbstractSliderButton, $CustomizableSlider {
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        isNineSliceCustomSliderHandle_FancyMenu(): boolean;
        getNineSliceSliderHandleBorderY_FancyMenu(): number;
        isNineSliceCustomSliderBackground_FancyMenu(): boolean;
        setNineSliceCustomSliderBackground_FancyMenu(arg0: boolean): void;
        setNineSliceSliderBackgroundBorderX_FancyMenu(arg0: number): void;
        getNineSliceSliderBackgroundBorderX_FancyMenu(): number;
        setNineSliceSliderBackgroundBorderY_FancyMenu(arg0: number): void;
        getNineSliceSliderBackgroundBorderY_FancyMenu(): number;
        setNineSliceCustomSliderHandle_FancyMenu(arg0: boolean): void;
        setNineSliceSliderHandleBorderX_FancyMenu(arg0: number): void;
        setNineSliceSliderHandleBorderY_FancyMenu(arg0: number): void;
        setCustomSliderBackgroundNormalFancyMenu(arg0: $RenderableResource): void;
        getCustomSliderBackgroundNormalFancyMenu(): $RenderableResource;
        setCustomSliderBackgroundHighlightedFancyMenu(arg0: $RenderableResource): void;
        getCustomSliderBackgroundHighlightedFancyMenu(): $RenderableResource;
        getNineSliceSliderHandleBorderX_FancyMenu(): number;
        renderSliderBackgroundFancyMenu(arg0: $GuiGraphics, arg1: $AbstractSliderButton, arg2: boolean): boolean;
        getCanChangeValueFancyMenu(): boolean;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: number);
        get canChangeValueFancyMenu(): boolean;
    }
    export class $LockIconButton extends $Button {
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        setLocked(arg0: boolean): void;
        isLocked(): boolean;
        visible: boolean;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        constructor(arg0: number, arg1: number, arg2: $Button$OnPress_);
    }
    export class $MultiLineEditBox extends $AbstractScrollWidget implements $GreedyInputComponent, $EditBoxWidgetAccessor {
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        setCharacterLimit(arg0: number): void;
        setValueListener(arg0: $Consumer_<string>): void;
        getInnerHeight(): number;
        getValue(): string;
        setValue(arg0: string): void;
        owo$getEditBox(): $MultilineTextField;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        constructor(arg0: $Font, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Component_, arg6: $Component_);
        set characterLimit(value: number);
        set valueListener(value: $Consumer_<string>);
        get innerHeight(): number;
    }
}
