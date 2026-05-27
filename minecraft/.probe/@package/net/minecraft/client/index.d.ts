import { $MinecraftAccessor as $MinecraftAccessor$2 } from "@package/com/aetherteam/cumulus/mixin/mixins/client/accessor";
import { $LevelRenderer, $GameRenderer, $RenderBuffers, $GpuWarnlistManager } from "@package/net/minecraft/client/renderer";
import { $WorldStem_ } from "@package/net/minecraft/server";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity, $HumanoidArm } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SimplePreparableReloadListener, $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $KeyBindingAccessor as $KeyBindingAccessor$1 } from "@package/net/fabricmc/fabric/mixin/event/interaction/client";
import { $IntegratedServer } from "@package/net/minecraft/client/server";
import { $GuiMessageAccessor } from "@package/org/figuramc/figura/ducks";
import { $BlockRenderDispatcher } from "@package/net/minecraft/client/renderer/block";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $ScheduledEvents$Callback_, $ScheduledEvents$ScheduledEvent, $ScheduledEvents, $TickDuration_ } from "@package/dev/latvian/mods/kubejs/util";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Connection } from "@package/net/minecraft/network";
import { $Proxy } from "@package/java/net";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $CameraZoomExtension } from "@package/dev/ryanhcode/sable/mixinterface/camera/camera_zoom";
import { $TimerAccessor as $TimerAccessor$1 } from "@package/net/createmod/ponder/mixin/accessor";
import { $AccessorKeyMapping } from "@package/com/railwayteam/railways/mixin/conductor_possession";
import { $KeyMappingAccessor as $KeyMappingAccessor$1 } from "@package/org/figuramc/figura/mixin/input";
import { $MessageSignature_, $Component_, $MessageSignature, $FormattedText, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $ISimpleOption } from "@package/com/ishland/c2me/client/uncapvd/mixin";
import { $LevelStorageSource, $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $ChatListener } from "@package/net/minecraft/client/multiplayer/chat";
import { $DownloadedPackSource } from "@package/net/minecraft/client/resources/server";
import { $FloatUnaryOperator_ } from "@package/it/unimi/dsi/fastutil/floats";
import { $SkinManager, $MapDecorationTextureManager, $PaintingTextureManager, $SplashManager, $MobEffectTextureManager } from "@package/net/minecraft/client/resources";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $RecipeBook } from "@package/net/minecraft/stats";
import { $Vector3f, $Quaternionf } from "@package/org/joml";
import { $KeyModifier, $KeyModifier_, $IKeyConflictContext } from "@package/net/neoforged/neoforge/client/settings";
import { $IMixinOptions, $IMixinMinecraft } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $GameConfig$QuickPlayData, $SilentInitException, $GameConfig$QuickPlayData_, $GameConfig } from "@package/net/minecraft/client/main";
import { $IWorldMapMinecraftClient } from "@package/xaero/map/core";
import { $ItemColors } from "@package/net/minecraft/client/color/item";
import { $ModelManager } from "@package/net/minecraft/client/resources/model";
import { $KeyBindingAccessor } from "@package/net/fabricmc/fabric/mixin/client/keybinding";
import { $TimerAccessor, $MinecraftAccessor as $MinecraftAccessor$3, $MouseHandlerAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $UUID_, $Map, $TimerTask, $List, $List_, $Collection, $Locale, $Set, $UUID } from "@package/java/util";
import { $RealmsDataFetcher } from "@package/com/mojang/realmsclient/gui";
import { $RealmsClient } from "@package/com/mojang/realmsclient/client";
import { $KeyMappingAccessor as $KeyMappingAccessor$2, $MouseHandlerAccessor as $MouseHandlerAccessor$1 } from "@package/net/blay09/mods/balm/mixin";
import { $BlockPos, $BlockPos_, $RegistryAccess } from "@package/net/minecraft/core";
import { $MinecraftAccessor as $MinecraftAccessor$1 } from "@package/wily/factoryapi/base/client";
import { $AccessorMinecraft } from "@package/net/darkhax/bookshelf/common/mixin/access/client";
import { $FontManager } from "@package/net/minecraft/client/gui/font";
import { $TextureAtlasSprite, $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $Throwable, $Runnable, $Enum, $Comparable, $Iterable_, $Record, $AutoCloseable, $Object } from "@package/java/lang";
import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $File_, $File } from "@package/java/io";
import { $EntityRenderDispatcher, $ItemRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $ToastComponent } from "@package/net/minecraft/client/gui/components/toasts";
import { $FogType } from "@package/net/minecraft/world/level/material";
import { $EntityModelSet } from "@package/net/minecraft/client/model/geom";
import { $Hotbar } from "@package/net/minecraft/client/player/inventory";
import { $CycleButton$ValueListSupplier, $DebugScreenOverlay, $Tooltip, $AbstractWidget, $AbstractOptionSliderButton } from "@package/net/minecraft/client/gui/components";
import { $TemporalAmount_ } from "@package/java/time/temporal";
import { $Narrator } from "@package/com/mojang/text2speech";
import { $IXaeroMinimapMinecraftClient } from "@package/xaero/common/core";
import { $IMixinMinecraft as $IMixinMinecraft$1 } from "@package/de/keksuccino/drippyloadingscreen/mixin/mixins/common/client";
import { $CameraWaterOcclusionExtension } from "@package/dev/ryanhcode/sable/mixinterface/water_occlusion";
import { $Screen, $Overlay, $ReceivingLevelScreen$Reason_ } from "@package/net/minecraft/client/gui/screens";
import { $MinecraftAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors/client";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MinecraftClientAccessor as $MinecraftClientAccessor$1 } from "@package/net/fabricmc/fabric/mixin/networking/client/accessor";
import { $KeyMappingAccessor } from "@package/net/blay09/mods/kuma/mixin";
import { $DirectoryValidator } from "@package/net/minecraft/world/level/validation";
import { $KeyMappingsAccessor } from "@package/dev/simulated_team/simulated/mixin/accessor";
import { $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeCollection } from "@package/net/minecraft/client/gui/screens/recipebook";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $ByteBuffer } from "@package/java/nio";
import { $OptionInstanceAccessor } from "@package/dev/isxander/yacl3/mixin";
import { $FormattedCharSequence, $OptionEnum, $FormattedCharSequence_, $StringRepresentable, $FormattedCharSink, $ModCheck, $SignatureValidator } from "@package/net/minecraft/util";
import { $ClientLevel, $ServerData, $ProfileKeyPairManager, $MultiPlayerGameMode, $ClientPacketListener } from "@package/net/minecraft/client/multiplayer";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $SoundSource_, $Music } from "@package/net/minecraft/sounds";
import { $CrashReport } from "@package/net/minecraft";
import { $WorldOpenFlows } from "@package/net/minecraft/client/gui/screens/worldselection";
import { $SoundManager, $MusicManager } from "@package/net/minecraft/client/sounds";
import { $MinecraftClientAccessor } from "@package/net/bettercombat/mixin/client";
import { $Tutorial, $TutorialSteps } from "@package/net/minecraft/client/tutorial";
import { $PackResources, $VanillaPackResources } from "@package/net/minecraft/server/packs";
import { $IMinecraftExtension, $IKeyMappingExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $RecipeBookType_ } from "@package/net/minecraft/world/inventory";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $TimerQuery$FrameProfile } from "@package/com/mojang/blaze3d/systems";
import { $ParticleEngine } from "@package/net/minecraft/client/particle";
import { $IMixinMouseHandler } from "@package/de/keksuccino/konkrete/mixin/mixins/client";
import { $PlayerModelPart_, $ChatVisiblity, $PlayerModelPart } from "@package/net/minecraft/world/entity/player";
import { $ReportEnvironment_, $ReportingContext } from "@package/net/minecraft/client/multiplayer/chat/report";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $LanguageManager } from "@package/net/minecraft/client/resources/language";
import { $AccessorKeyMapping as $AccessorKeyMapping$1 } from "@package/vazkii/patchouli/mixin/client";
import { $MinecraftClientKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $MinecraftSessionService, $BanDetails } from "@package/com/mojang/authlib/minecraft";
import { $Vec3, $Vec3_, $HitResult } from "@package/net/minecraft/world/phys";
import { $AccessKeyMapping } from "@package/com/blamejared/controlling/mixin";
import { $MinecraftAccessor } from "@package/com/aetherteam/aether/mixin/mixins/client/accessor";
import { $WeaponAttributes$Attack, $MinecraftClient_BetterCombat, $AttackHand } from "@package/net/bettercombat/api";
import { $CameraAccessor, $NearPlaneAccessor } from "@package/com/blackgear/platform/core/mixin/access";
import { $DebugRenderer } from "@package/net/minecraft/client/renderer/debug";
import { $MinecraftAccesor } from "@package/org/figuramc/figura/mixin";
import { $Supplier_, $Function, $BiConsumer_, $DoubleFunction_, $BooleanSupplier_, $Supplier, $Consumer_, $IntSupplier_, $ToDoubleFunction_, $IntSupplier, $Function_, $BooleanSupplier } from "@package/java/util/function";
import { $StoringChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $ClientInformation } from "@package/net/minecraft/server/level";
import { $Object2BooleanFunction_ } from "@package/it/unimi/dsi/fastutil/objects";
import { $Path_, $Path } from "@package/java/nio/file";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $BlockEntityRenderDispatcher } from "@package/net/minecraft/client/renderer/blockentity";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $WindowEventHandler, $InputConstants$Type_, $InputConstants$Key, $NativeImage, $Window } from "@package/com/mojang/blaze3d/platform";
import { $CameraAccessor as $CameraAccessor$1 } from "@package/dev/kosmx/playerAnim/mixin/firstPerson";
import { $YggdrasilAuthenticationService } from "@package/com/mojang/authlib/yggdrasil";
import { $ClientTelemetryManager } from "@package/net/minecraft/client/telemetry";
import { $QuickPlayLog } from "@package/net/minecraft/client/quickplay";
import { $GuiGraphics, $Gui, $Font, $GuiSpriteManager } from "@package/net/minecraft/client/gui";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $PlayerSocialManager } from "@package/net/minecraft/client/gui/screens/social";
export * as resources from "@package/net/minecraft/client/resources";
export * as renderer from "@package/net/minecraft/client/renderer";
export * as gui from "@package/net/minecraft/client/gui";
export * as particle from "@package/net/minecraft/client/particle";
export * as telemetry from "@package/net/minecraft/client/telemetry";
export * as model from "@package/net/minecraft/client/model";
export * as sounds from "@package/net/minecraft/client/sounds";
export * as animation from "@package/net/minecraft/client/animation";
export * as color from "@package/net/minecraft/client/color";
export * as multiplayer from "@package/net/minecraft/client/multiplayer";
export * as tutorial from "@package/net/minecraft/client/tutorial";
export * as searchtree from "@package/net/minecraft/client/searchtree";
export * as quickplay from "@package/net/minecraft/client/quickplay";
export * as main from "@package/net/minecraft/client/main";
export * as player from "@package/net/minecraft/client/player";
export * as server from "@package/net/minecraft/client/server";
export * as profiling from "@package/net/minecraft/client/profiling";

declare module "@package/net/minecraft/client" {
    export class $MouseHandler implements $IMixinMouseHandler, $MouseHandlerAccessor$1, $MouseHandlerAccessor {
        isRightPressed(): boolean;
        releaseMouse(): void;
        grabMouse(): void;
        handleAccumulatedMovement(): void;
        setIgnoreFirstMove(): void;
        cursorEntered(): void;
        isMouseGrabbed(): boolean;
        isLeftPressed(): boolean;
        isMiddlePressed(): boolean;
        handler$bag000$veil$scrollCallback(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfo): void;
        handler$ioi000$relics$onKeyPress(arg0: $CallbackInfo): void;
        modifyExpressionValue$nci000$spectrum$makeMouseSluggish(arg0: $Object): $Object;
        modifyExpressionValue$nci000$spectrum$forceSmoothCamera(arg0: boolean): boolean;
        modify$gfc000$icarus$changeLookDirectionX(arg0: number): number;
        handler$bag000$veil$cancelMouseX(arg0: $CallbackInfoReturnable<any>): void;
        handler$bag000$veil$cancelMouseY(arg0: $CallbackInfoReturnable<any>): void;
        getXVelocity(): number;
        getYVelocity(): number;
        handler$bag000$veil$grabMouse(arg0: $CallbackInfo): void;
        handler$bag000$veil$mouseButtonCallback(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $CallbackInfo): void;
        xpos(): number;
        ypos(): number;
        setup(arg0: number): void;
        getMouseX(): number;
        getMouseY(): number;
        getActiveButtonKonkrete(): number;
        create$setXPos(arg0: number): void;
        create$setYPos(arg0: number): void;
        mouseGrabbed: boolean;
        constructor(arg0: $Minecraft);
        get rightPressed(): boolean;
        get leftPressed(): boolean;
        get middlePressed(): boolean;
        get XVelocity(): number;
        get YVelocity(): number;
        set up(value: number);
        get mouseX(): number;
        get mouseY(): number;
        get activeButtonKonkrete(): number;
    }
    export class $User {
        getSessionId(): string;
        getAccessToken(): string;
        getProfileId(): $UUID;
        getClientId(): (string) | undefined;
        getXuid(): (string) | undefined;
        getName(): string;
        getType(): $User$Type;
        constructor(arg0: string, arg1: $UUID_, arg2: string, arg3: (string) | undefined, arg4: (string) | undefined, arg5: $User$Type_);
        get sessionId(): string;
        get accessToken(): string;
        get profileId(): $UUID;
        get clientId(): (string) | undefined;
        get xuid(): (string) | undefined;
        get name(): string;
        get type(): $User$Type;
    }
    export class $ClientRecipeBook extends $RecipeBook {
        getCollection(arg0: $RecipeBookCategories_): $List<$RecipeCollection>;
        setupCollections(arg0: $Iterable_<$RecipeHolder<never>>, arg1: $RegistryAccess): void;
        getCollections(): $List<$RecipeCollection>;
        constructor();
        get collections(): $List<$RecipeCollection>;
    }
    export class $CloudStatus extends $Enum<$CloudStatus> implements $OptionEnum, $StringRepresentable {
        getSerializedName(): string;
        static values(): $CloudStatus[];
        static valueOf(arg0: string): $CloudStatus;
        getKey(): string;
        getId(): number;
        getCaption(): $Component;
        getRemappedEnumConstantName(): string;
        static FANCY: $CloudStatus;
        static CODEC: $Codec<$CloudStatus>;
        static FAST: $CloudStatus;
        static OFF: $CloudStatus;
        get serializedName(): string;
        get key(): string;
        get id(): number;
        get caption(): $Component;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CloudStatus}.
     */
    export type $CloudStatus_ = "false" | "fast" | "true";
    export class $OptionInstance$OptionInstanceSliderButton<N> extends $AbstractOptionSliderButton {
        applyUnsavedValue(): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
    }
    export class $HotbarManager {
        get(arg0: number): $Hotbar;
        save(): void;
        static NUM_HOTBAR_GROUPS: number;
        constructor(arg0: $Path_, arg1: $DataFixer);
    }
    export class $GraphicsStatus extends $Enum<$GraphicsStatus> implements $OptionEnum {
        static byId(arg0: number): $GraphicsStatus;
        static values(): $GraphicsStatus[];
        static valueOf(arg0: string): $GraphicsStatus;
        getKey(): string;
        getId(): number;
        getCaption(): $Component;
        static FANCY: $GraphicsStatus;
        static FABULOUS: $GraphicsStatus;
        static FAST: $GraphicsStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $GraphicsStatus}.
     */
    export type $GraphicsStatus_ = "fast" | "fancy" | "fabulous";
    export class $InputType extends $Enum<$InputType> {
        isKeyboard(): boolean;
        isMouse(): boolean;
        static values(): $InputType[];
        static valueOf(arg0: string): $InputType;
        static MOUSE: $InputType;
        static KEYBOARD_TAB: $InputType;
        static NONE: $InputType;
        static KEYBOARD_ARROW: $InputType;
        get keyboard(): boolean;
        get mouse(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $InputType}.
     */
    export type $InputType_ = "none" | "mouse" | "keyboard_arrow" | "keyboard_tab";
    export class $AttackIndicatorStatus extends $Enum<$AttackIndicatorStatus> implements $OptionEnum {
        static byId(arg0: number): $AttackIndicatorStatus;
        static values(): $AttackIndicatorStatus[];
        static valueOf(arg0: string): $AttackIndicatorStatus;
        getKey(): string;
        getId(): number;
        getCaption(): $Component;
        static CROSSHAIR: $AttackIndicatorStatus;
        static HOTBAR: $AttackIndicatorStatus;
        static OFF: $AttackIndicatorStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $AttackIndicatorStatus}.
     */
    export type $AttackIndicatorStatus_ = "off" | "crosshair" | "hotbar";
    export class $OptionInstance$LazyEnum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        codec(): $Codec<T>;
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        validateValue(arg0: T): (T) | undefined;
        validateValue(): $Function<T, (T) | undefined>;
        values(): $Supplier<$List<T>>;
        constructor(arg0: $Supplier_<$List<T>>, arg1: $Function_<T, (T) | undefined>, arg2: $Codec<T>);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$LazyEnum}.
     */
    export type $OptionInstance$LazyEnum_<T> = { validateValue?: $Function_<any, (T) | undefined>, values?: $Supplier_<$List<any>>, codec?: $Codec<any>,  } | [validateValue?: $Function_<any, (T) | undefined>, values?: $Supplier_<$List<any>>, codec?: $Codec<any>, ];
    export class $PeriodicNotificationManager$Notification extends $Record {
        period(): number;
        title(): string;
        message(): string;
        delay(): number;
        constructor(arg0: number, arg1: number, arg2: string, arg3: string);
    }
    /**
     * Values that may be interpreted as {@link $PeriodicNotificationManager$Notification}.
     */
    export type $PeriodicNotificationManager$Notification_ = { period?: number, delay?: number, message?: string, title?: string,  } | [period?: number, delay?: number, message?: string, title?: string, ];
    export class $StringSplitter$WidthLimitedCharSink implements $FormattedCharSink {
    }
    export class $GameNarrator$NarratorInitException extends $SilentInitException {
        constructor(arg0: string);
    }
    export class $DeltaTracker {
        static ZERO: $DeltaTracker;
        static ONE: $DeltaTracker;
    }
    export interface $DeltaTracker {
        getGameTimeDeltaPartialTick(arg0: boolean): number;
        getGameTimeDeltaTicks(): number;
        getRealtimeDeltaTicks(): number;
        get gameTimeDeltaTicks(): number;
        get realtimeDeltaTicks(): number;
    }
    export class $Screenshot {
        static takeScreenshot(arg0: $RenderTarget): $NativeImage;
        static grab(arg0: $File_, arg1: $RenderTarget, arg2: $Consumer_<$Component>): void;
        static grab(arg0: $File_, arg1: string, arg2: $RenderTarget, arg3: $Consumer_<$Component>): void;
        addRegion(arg0: $ByteBuffer, arg1: number, arg2: number, arg3: number, arg4: number): void;
        saveRow(): void;
        close(): $File;
        static SCREENSHOT_DIR: string;
        constructor(arg0: $File_, arg1: number, arg2: number, arg3: number);
    }
    export class $OptionInstance$IntRangeBase {
    }
    export interface $OptionInstance$IntRangeBase extends $OptionInstance$SliderableValueSet<number> {
    }
    export class $Options implements $IMixinOptions {
        fovEffectScale(): $OptionInstance<number>;
        damageTiltStrength(): $OptionInstance<number>;
        bobView(): $OptionInstance<boolean>;
        screenEffectScale(): $OptionInstance<number>;
        guiScale(): $OptionInstance<number>;
        getBackgroundColor(arg0: number): number;
        getBackgroundColor(arg0: number): number;
        chatLinks(): $OptionInstance<boolean>;
        chatLinksPrompt(): $OptionInstance<boolean>;
        narrator(): $OptionInstance<$NarratorStatus>;
        particles(): $OptionInstance<$ParticleStatus>;
        glintStrength(): $OptionInstance<number>;
        framerateLimit(): $OptionInstance<number>;
        loadSelectedResourcePacks(arg0: $PackRepository): void;
        mipmapLevels(): $OptionInstance<number>;
        fullscreen(): $OptionInstance<boolean>;
        enableVsync(): $OptionInstance<boolean>;
        rawMouseInput(): $OptionInstance<boolean>;
        chatDelay(): $OptionInstance<number>;
        forceUnicodeFont(): $OptionInstance<boolean>;
        graphicsMode(): $OptionInstance<$GraphicsStatus>;
        cloudStatus(): $OptionInstance<$CloudStatus>;
        biomeBlendRadius(): $OptionInstance<number>;
        dumpOptionsForReport(): string;
        getCameraType(): $CameraType;
        setCameraType(arg0: $CameraType_): void;
        telemetryOptInExtra(): $OptionInstance<boolean>;
        chatVisibility(): $OptionInstance<$ChatVisiblity>;
        ambientOcclusion(): $OptionInstance<boolean>;
        getEffectiveRenderDistance(): number;
        renderDistance(): $OptionInstance<number>;
        reducedDebugInfo(): $OptionInstance<boolean>;
        textBackgroundOpacity(): $OptionInstance<number>;
        chatOpacity(): $OptionInstance<number>;
        menuBackgroundBlurriness(): $OptionInstance<number>;
        hideSplashTexts(): $OptionInstance<boolean>;
        getMenuBackgroundBlurriness(): number;
        onboardingAccessibilityFinished(): void;
        autoJump(): $OptionInstance<boolean>;
        fov(): $OptionInstance<number>;
        operatorItemsTab(): $OptionInstance<boolean>;
        hideLightningFlash(): $OptionInstance<boolean>;
        simulationDistance(): $OptionInstance<number>;
        touchscreen(): $OptionInstance<boolean>;
        getCloudsType(): $CloudStatus;
        prioritizeChunkUpdates(): $OptionInstance<$PrioritizeChunkUpdates>;
        sensitivity(): $OptionInstance<number>;
        entityDistanceScaling(): $OptionInstance<number>;
        chatLineSpacing(): $OptionInstance<number>;
        panoramaSpeed(): $OptionInstance<number>;
        highContrast(): $OptionInstance<boolean>;
        narratorHotkey(): $OptionInstance<boolean>;
        chatScale(): $OptionInstance<number>;
        chatWidth(): $OptionInstance<number>;
        chatHeightUnfocused(): $OptionInstance<number>;
        chatHeightFocused(): $OptionInstance<number>;
        useNativeTransport(): boolean;
        attackIndicator(): $OptionInstance<$AttackIndicatorStatus>;
        mouseWheelSensitivity(): $OptionInstance<number>;
        autoSuggestions(): $OptionInstance<boolean>;
        entityShadows(): $OptionInstance<boolean>;
        japaneseGlyphVariants(): $OptionInstance<boolean>;
        invertYMouse(): $OptionInstance<boolean>;
        discreteMouseScroll(): $OptionInstance<boolean>;
        realmsNotifications(): $OptionInstance<boolean>;
        notificationDisplayTime(): $OptionInstance<number>;
        allowServerListing(): $OptionInstance<boolean>;
        showSubtitles(): $OptionInstance<boolean>;
        directionalAudio(): $OptionInstance<boolean>;
        backgroundForChatOnly(): $OptionInstance<boolean>;
        toggleCrouch(): $OptionInstance<boolean>;
        toggleSprint(): $OptionInstance<boolean>;
        hideMatchedNames(): $OptionInstance<boolean>;
        showAutosaveIndicator(): $OptionInstance<boolean>;
        onlyShowSecureChat(): $OptionInstance<boolean>;
        darknessEffectScale(): $OptionInstance<number>;
        soundDevice(): $OptionInstance<string>;
        updateResourcePacks(arg0: $PackRepository): void;
        getSoundSourceVolume(arg0: $SoundSource_): number;
        getSoundSourceOptionInstance(arg0: $SoundSource_): $OptionInstance<number>;
        static genericValueOrOffLabel(arg0: $Component_, arg1: number): $Component;
        getBackgroundOpacity(arg0: number): number;
        broadcastOptions(): void;
        buildPlayerInformation(): $ClientInformation;
        isModelPartEnabled(arg0: $PlayerModelPart_): boolean;
        toggleModelPart(arg0: $PlayerModelPart_, arg1: boolean): void;
        setServerRenderDistance(arg0: number): void;
        static genericValueLabel(arg0: $Component_, arg1: $Component_): $Component;
        static genericValueLabel(arg0: $Component_, arg1: number): $Component;
        chatColors(): $OptionInstance<boolean>;
        mainHand(): $OptionInstance<$HumanoidArm>;
        glintSpeed(): $OptionInstance<number>;
        getFile(): $File;
        setKey(arg0: $KeyMapping, arg1: $InputConstants$Key): void;
        darkMojangStudiosBackground(): $OptionInstance<boolean>;
        gamma(): $OptionInstance<number>;
        load(): void;
        load(arg0: boolean): void;
        save(): void;
        getModelPartsFancyMenu(): $Set<$PlayerModelPart>;
        invokeProcessOptionsFancyMenu(arg0: $Options$FieldAccess): void;
        tutorialStep: $TutorialSteps;
        static RENDER_DISTANCE_REALLY_FAR: number;
        static DEFAULT_SOUND_DEVICE: string;
        keyChat: $KeyMapping;
        resourcePacks: $List<string>;
        keyInventory: $KeyMapping;
        keyCommand: $KeyMapping;
        keySwapOffhand: $KeyMapping;
        keyHotbarSlots: $KeyMapping[];
        keySpectatorOutlines: $KeyMapping;
        static RENDER_DISTANCE_NORMAL: number;
        keySprint: $KeyMapping;
        keyAdvancements: $KeyMapping;
        static RENDER_DISTANCE_EXTREME: number;
        keySaveHotbarActivator: $KeyMapping;
        advancedItemTooltips: boolean;
        fullscreenVideoModeString: string;
        keyFullscreen: $KeyMapping;
        incompatibleResourcePacks: $List<string>;
        modelParts: $Set<$PlayerModelPart>;
        languageCode: string;
        static RENDER_DISTANCE_SHORT: number;
        keyDrop: $KeyMapping;
        overrideHeight: number;
        keyMappings: $KeyMapping[];
        keyAttack: $KeyMapping;
        skipMultiplayerWarning: boolean;
        static RENDER_DISTANCE_FAR: number;
        keyUp: $KeyMapping;
        keyJump: $KeyMapping;
        keyLoadHotbarActivator: $KeyMapping;
        onboardAccessibility: boolean;
        keyShift: $KeyMapping;
        smoothCamera: boolean;
        keyScreenshot: $KeyMapping;
        static AUTO_GUI_SCALE: number;
        keyTogglePerspective: $KeyMapping;
        keySocialInteractions: $KeyMapping;
        pauseOnLostFocus: boolean;
        keyRight: $KeyMapping;
        lastMpIp: string;
        syncWrites: boolean;
        keySmoothCamera: $KeyMapping;
        overrideWidth: number;
        keyLeft: $KeyMapping;
        hideServerAddress: boolean;
        glDebugVerbosity: number;
        static RENDER_DISTANCE_TINY: number;
        keyPlayerList: $KeyMapping;
        static UNLIMITED_FRAMERATE_CUTOFF: number;
        joinedFirstServer: boolean;
        hideBundleTutorial: boolean;
        keyUse: $KeyMapping;
        keyPickItem: $KeyMapping;
        keyDown: $KeyMapping;
        hideGui: boolean;
        constructor(arg0: $Minecraft, arg1: $File_);
        get effectiveRenderDistance(): number;
        get cloudsType(): $CloudStatus;
        set serverRenderDistance(value: number);
        get file(): $File;
        get modelPartsFancyMenu(): $Set<$PlayerModelPart>;
    }
    export class $ResourceLoadStateTracker$ReloadState {
    }
    export class $OptionInstance$IntRange extends $Record implements $OptionInstance$IntRangeBase {
        codec(): $Codec<number>;
        minInclusive(): number;
        maxInclusive(): number;
        applyValueImmediately(): boolean;
        validateValue(arg0: number): (number) | undefined;
        constructor(arg0: number, arg1: number);
        constructor(arg0: number, arg1: number, arg2: boolean);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$IntRange}.
     */
    export type $OptionInstance$IntRange_ = { applyValueImmediately?: boolean, maxInclusive?: number, minInclusive?: number,  } | [applyValueImmediately?: boolean, maxInclusive?: number, minInclusive?: number, ];
    export class $ToggleKeyMapping extends $KeyMapping {
        modifyReturnValue$hip000$xaerominimap$onIsDown(arg0: boolean): boolean;
        static ALL: $Map<string, $KeyMapping>;
        static CATEGORY_INTERFACE: string;
        static CATEGORY_MULTIPLAYER: string;
        static CATEGORY_CREATIVE: string;
        static CATEGORY_MOVEMENT: string;
        static CATEGORY_GAMEPLAY: string;
        static CATEGORY_MISC: string;
        key: $InputConstants$Key;
        static CATEGORY_INVENTORY: string;
        constructor(arg0: string, arg1: number, arg2: string, arg3: $BooleanSupplier_);
    }
    export class $PrioritizeChunkUpdates extends $Enum<$PrioritizeChunkUpdates> implements $OptionEnum {
        static byId(arg0: number): $PrioritizeChunkUpdates;
        static values(): $PrioritizeChunkUpdates[];
        static valueOf(arg0: string): $PrioritizeChunkUpdates;
        getKey(): string;
        getId(): number;
        getCaption(): $Component;
        static NEARBY: $PrioritizeChunkUpdates;
        static NONE: $PrioritizeChunkUpdates;
        static PLAYER_AFFECTED: $PrioritizeChunkUpdates;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $PrioritizeChunkUpdates}.
     */
    export type $PrioritizeChunkUpdates_ = "none" | "player_affected" | "nearby";
    export class $OptionInstance$UnitDouble extends $Enum<$OptionInstance$UnitDouble> implements $OptionInstance$SliderableValueSet<number> {
        codec(): $Codec<number>;
        xmap<R>(arg0: $DoubleFunction_<R>, arg1: $ToDoubleFunction_<R>): $OptionInstance$SliderableValueSet<R>;
        toSliderValue(arg0: number): number;
        fromSliderValue(arg0: number): $Object;
        validateValue(arg0: number): (number) | undefined;
        static values(): $OptionInstance$UnitDouble[];
        static valueOf(arg0: string): $OptionInstance$UnitDouble;
        static INSTANCE: $OptionInstance$UnitDouble;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$UnitDouble}.
     */
    export type $OptionInstance$UnitDouble_ = "instance";
    export class $DeltaTracker$Timer implements $DeltaTracker, $TimerAccessor$1, $TimerAccessor {
        getGameTimeDeltaPartialTick(arg0: boolean): number;
        advanceTime(arg0: number, arg1: boolean): number;
        updatePauseState(arg0: boolean): void;
        updateFrozenState(arg0: boolean): void;
        getGameTimeDeltaTicks(): number;
        getRealtimeDeltaTicks(): number;
        catnip$getDeltaTickResidual(): number;
        getDeltaTickResidual(): number;
        msPerTick: number;
        constructor(arg0: number, arg1: number, arg2: $FloatUnaryOperator_);
        get gameTimeDeltaTicks(): number;
        get realtimeDeltaTicks(): number;
        get deltaTickResidual(): number;
    }
    export class $CameraType extends $Enum<$CameraType> {
        cycle(): $CameraType;
        isFirstPerson(): boolean;
        isMirrored(): boolean;
        static values(): $CameraType[];
        static valueOf(arg0: string): $CameraType;
        static THIRD_PERSON_BACK: $CameraType;
        static THIRD_PERSON_FRONT: $CameraType;
        static FIRST_PERSON: $CameraType;
        get firstPerson(): boolean;
        get mirrored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CameraType}.
     */
    export type $CameraType_ = "first_person" | "third_person_back" | "third_person_front" | "sub_level_view" | "sub_level_view_unlocked";
    export class $GuiMessage$Line extends $Record implements $GuiMessageAccessor {
        endOfEntry(): boolean;
        addedTime(): number;
        figura$setColor(color: number): void;
        figura$getColor(): number;
        content(): $FormattedCharSequence;
        tag(): $GuiMessageTag;
        constructor(arg0: number, arg1: $FormattedCharSequence_, arg2: $GuiMessageTag_, arg3: boolean);
    }
    /**
     * Values that may be interpreted as {@link $GuiMessage$Line}.
     */
    export type $GuiMessage$Line_ = { content?: $FormattedCharSequence_, tag?: $GuiMessageTag_, addedTime?: number, endOfEntry?: boolean,  } | [content?: $FormattedCharSequence_, tag?: $GuiMessageTag_, addedTime?: number, endOfEntry?: boolean, ];
    export class $GameNarrator {
        sayNow(arg0: $Component_): void;
        sayNow(arg0: string): void;
        updateNarratorStatus(arg0: $NarratorStatus_): void;
        checkStatus(arg0: boolean): void;
        say(arg0: $Component_): void;
        sayChat(arg0: $Component_): void;
        isActive(): boolean;
        clear(): void;
        destroy(): void;
        narrator: $Narrator;
        static NO_TITLE: $Component;
        constructor(arg0: $Minecraft);
        get active(): boolean;
    }
    export class $OptionInstance$ClampingLazyMaxIntRange extends $Record implements $OptionInstance$IntRangeBase, $OptionInstance$SliderableOrCyclableValueSet<number> {
        codec(): $Codec<number>;
        minInclusive(): number;
        maxInclusive(): number;
        valueListSupplier(): $CycleButton$ValueListSupplier<number>;
        maxSupplier(): $IntSupplier;
        encodableMaxInclusive(): number;
        createCycleButton(): boolean;
        validateValue(arg0: number): (number) | undefined;
        constructor(arg0: number, arg1: $IntSupplier_, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$ClampingLazyMaxIntRange}.
     */
    export type $OptionInstance$ClampingLazyMaxIntRange_ = { encodableMaxInclusive?: number, minInclusive?: number, maxSupplier?: $IntSupplier_,  } | [encodableMaxInclusive?: number, minInclusive?: number, maxSupplier?: $IntSupplier_, ];
    export class $OptionInstance$SliderableValueSet<T> {
    }
    export interface $OptionInstance$SliderableValueSet<T> extends $OptionInstance$ValueSet<T> {
    }
    export class $GuiMessageTag extends $Record {
        static chatNotSecure(): $GuiMessageTag;
        static systemSinglePlayer(): $GuiMessageTag;
        logTag(): string;
        indicatorColor(): number;
        text(): $Component;
        static chatError(): $GuiMessageTag;
        static chatModified(arg0: string): $GuiMessageTag;
        icon(): $GuiMessageTag$Icon;
        static system(): $GuiMessageTag;
        constructor(arg0: number, arg1: $GuiMessageTag$Icon_, arg2: $Component_, arg3: string);
    }
    /**
     * Values that may be interpreted as {@link $GuiMessageTag}.
     */
    export type $GuiMessageTag_ = { icon?: $GuiMessageTag$Icon_, indicatorColor?: number, text?: $Component_, logTag?: string,  } | [icon?: $GuiMessageTag$Icon_, indicatorColor?: number, text?: $Component_, logTag?: string, ];
    export class $Options$OptionAccess {
    }
    export interface $Options$OptionAccess {
    }
    /**
     * Values that may be interpreted as {@link $Options$OptionAccess}.
     */
    export type $Options$OptionAccess_ = (() => void);
    export class $PeriodicNotificationManager extends $SimplePreparableReloadListener<$Map<string, $List<$PeriodicNotificationManager$Notification>>> implements $AutoCloseable {
        close(): void;
        constructor(arg0: $ResourceLocation_, arg1: $Object2BooleanFunction_<string>);
    }
    export class $GuiMessage extends $Record implements $GuiMessageAccessor {
        addedTime(): number;
        figura$setColor(color: number): void;
        figura$getColor(): number;
        content(): $Component;
        tag(): $GuiMessageTag;
        icon(): $GuiMessageTag$Icon;
        signature(): $MessageSignature;
        constructor(arg0: number, arg1: $Component_, arg2: $MessageSignature_, arg3: $GuiMessageTag_);
    }
    /**
     * Values that may be interpreted as {@link $GuiMessage}.
     */
    export type $GuiMessage_ = { content?: $Component_, tag?: $GuiMessageTag_, addedTime?: number, signature?: $MessageSignature_,  } | [content?: $Component_, tag?: $GuiMessageTag_, addedTime?: number, signature?: $MessageSignature_, ];
    export class $RecipeBookCategories extends $Enum<$RecipeBookCategories> implements $IExtensibleEnum {
        static getCategories(arg0: $RecipeBookType_): $List<$RecipeBookCategories>;
        getIconItems(): $List<$ItemStack>;
        static getExtensionInfo(): $ExtensionInfo;
        static values(): $RecipeBookCategories[];
        static valueOf(arg0: string): $RecipeBookCategories;
        static CRAFTING_REDSTONE: $RecipeBookCategories;
        static AETHER_FREEZABLE_SEARCH: $RecipeBookCategories;
        static FARMERSDELIGHT_COOKING_SEARCH: $RecipeBookCategories;
        static CRAFTING_SEARCH: $RecipeBookCategories;
        static BLAST_FURNACE_MISC: $RecipeBookCategories;
        static SMOKER_FOOD: $RecipeBookCategories;
        static CRAFTING_BUILDING_BLOCKS: $RecipeBookCategories;
        static AETHER_FREEZABLE_MISC: $RecipeBookCategories;
        static FARMERSDELIGHT_COOKING_DRINKS: $RecipeBookCategories;
        static SMOKER_CATEGORIES: $List<$RecipeBookCategories>;
        static SMOKER_SEARCH: $RecipeBookCategories;
        static STONECUTTER: $RecipeBookCategories;
        static AETHER_ENCHANTING_MISC: $RecipeBookCategories;
        static AGGREGATE_CATEGORIES: $Map<$RecipeBookCategories, $List<$RecipeBookCategories>>;
        static CRAFTING_EQUIPMENT: $RecipeBookCategories;
        static BLAST_FURNACE_BLOCKS: $RecipeBookCategories;
        static AETHER_INCUBATION_MISC: $RecipeBookCategories;
        static BLAST_FURNACE_CATEGORIES: $List<$RecipeBookCategories>;
        static FARMERSDELIGHT_COOKING_MEALS: $RecipeBookCategories;
        static AETHER_INCUBATION_SEARCH: $RecipeBookCategories;
        static BREWINANDCHEWIN_FERMENTING_SEARCH: $RecipeBookCategories;
        static CRAFTING_MISC: $RecipeBookCategories;
        static CAMPFIRE: $RecipeBookCategories;
        static FURNACE_CATEGORIES: $List<$RecipeBookCategories>;
        static CRAFTING_CATEGORIES: $List<$RecipeBookCategories>;
        static SMITHING: $RecipeBookCategories;
        static AETHER_ENCHANTING_REPAIR: $RecipeBookCategories;
        static FURNACE_FOOD: $RecipeBookCategories;
        static FURNACE_BLOCKS: $RecipeBookCategories;
        static AETHER_FREEZABLE_BLOCKS: $RecipeBookCategories;
        static FARMERSDELIGHT_COOKING_MISC: $RecipeBookCategories;
        static AETHER_ENCHANTING_FOOD: $RecipeBookCategories;
        static AETHER_ENCHANTING_SEARCH: $RecipeBookCategories;
        static FURNACE_SEARCH: $RecipeBookCategories;
        static AETHER_ENCHANTING_BLOCKS: $RecipeBookCategories;
        static BLAST_FURNACE_SEARCH: $RecipeBookCategories;
        static UNKNOWN: $RecipeBookCategories;
        static BREWINANDCHEWIN_FERMENTING_MEALS: $RecipeBookCategories;
        static FURNACE_MISC: $RecipeBookCategories;
        static BREWINANDCHEWIN_FERMENTING_DRINKS: $RecipeBookCategories;
        get iconItems(): $List<$ItemStack>;
        static get extensionInfo(): $ExtensionInfo;
    }
    /**
     * Values that may be interpreted as {@link $RecipeBookCategories}.
     */
    export type $RecipeBookCategories_ = "crafting_search" | "crafting_building_blocks" | "crafting_redstone" | "crafting_equipment" | "crafting_misc" | "furnace_search" | "furnace_food" | "furnace_blocks" | "furnace_misc" | "blast_furnace_search" | "blast_furnace_blocks" | "blast_furnace_misc" | "smoker_search" | "smoker_food" | "stonecutter" | "smithing" | "campfire" | "unknown" | "aether_enchanting_blocks" | "aether_enchanting_food" | "aether_enchanting_misc" | "aether_enchanting_repair" | "aether_enchanting_search" | "aether_freezable_blocks" | "aether_freezable_misc" | "aether_freezable_search" | "aether_incubation_misc" | "aether_incubation_search" | "brewinandchewin_fermenting_drinks" | "brewinandchewin_fermenting_meals" | "brewinandchewin_fermenting_search" | "farmersdelight_cooking_drinks" | "farmersdelight_cooking_meals" | "farmersdelight_cooking_misc" | "farmersdelight_cooking_search";
    export class $OptionInstance$Enum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        codec(): $Codec<T>;
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        validateValue(arg0: T): (T) | undefined;
        values(): $List<T>;
        constructor(arg0: $List_<T>, arg1: $Codec<T>);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$Enum}.
     */
    export type $OptionInstance$Enum_<T> = { codec?: $Codec<any>, values?: $List_<any>,  } | [codec?: $Codec<any>, values?: $List_<any>, ];
    export class $OptionInstance$TooltipSupplier<T> {
    }
    export interface $OptionInstance$TooltipSupplier<T> {
        apply(arg0: T): $Tooltip;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$TooltipSupplier}.
     */
    export type $OptionInstance$TooltipSupplier_<T> = ((arg0: T) => $Tooltip);
    export class $CommandHistory {
        addCommand(arg0: string): void;
        history(): $Collection<string>;
        constructor(arg0: $Path_);
    }
    export class $Camera implements $CameraAccessor$1, $CameraZoomExtension, $CameraWaterOcclusionExtension, $CameraAccessor {
        getFluidInCamera(): $FogType;
        getPartialTickTime(): number;
        rotation(): $Quaternionf;
        getXRot(): number;
        getYRot(): number;
        sable$setZoomAmount(arg0: number): void;
        getUpVector(): $Vector3f;
        sable$isOccluded(): boolean;
        setPosition(arg0: $Vec3_): void;
        isDetached(): boolean;
        getBlockPosition(): $BlockPos;
        getNearPlane(): $Camera$NearPlane;
        sable$getZoomAmount(): number;
        /**
         * @deprecated
         */
        setRotation(arg0: number, arg1: number): void;
        getEntity(): $Entity;
        move(arg0: number, arg1: number, arg2: number): void;
        tick(): void;
        getPosition(): $Vec3;
        handler$bhn000$supplementaries$supp$setupCannonCamera(level: $BlockGetter, entity: $Entity, detached: boolean, thirdPersonReverse: boolean, partialTick: number, ci: $CallbackInfo): void;
        getRoll(): number;
        getMaxZoom(arg0: number): number;
        handler$iof000$relics$onRotationUpdate(arg0: number, arg1: number, arg2: $CallbackInfo): void;
        handler$lin000$sable$rotateView(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfo): void;
        handler$lci000$sable$getFluidInCamera(arg0: $CallbackInfoReturnable<any>): void;
        handler$ldp001$sable$getFluidInCamera(arg0: $CallbackInfoReturnable<any>): void;
        getLookVector(): $Vector3f;
        getLeftVector(): $Vector3f;
        getBlockAtCamera(): $BlockState;
        sable$setIgnoreOcclusion(arg0: boolean): void;
        sable$isIgnoreOcclusion(): boolean;
        isInitialized(): boolean;
        reset(): void;
        setup(arg0: $BlockGetter, arg1: $Entity, arg2: boolean, arg3: boolean, arg4: number): void;
        setDetached(arg0: boolean): void;
        getLevel(): $BlockGetter;
        eyeHeightOld: number;
        static FOG_DISTANCE_SCALE: number;
        eyeHeight: number;
        constructor();
        get fluidInCamera(): $FogType;
        get partialTickTime(): number;
        get XRot(): number;
        get YRot(): number;
        get upVector(): $Vector3f;
        get blockPosition(): $BlockPos;
        get nearPlane(): $Camera$NearPlane;
        get entity(): $Entity;
        get roll(): number;
        get lookVector(): $Vector3f;
        get leftVector(): $Vector3f;
        get blockAtCamera(): $BlockState;
        get initialized(): boolean;
        get level(): $BlockGetter;
    }
    export class $StringSplitter$LinePosConsumer {
    }
    export interface $StringSplitter$LinePosConsumer {
        accept(arg0: $Style, arg1: number, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $StringSplitter$LinePosConsumer}.
     */
    export type $StringSplitter$LinePosConsumer_ = ((arg0: $Style, arg1: number, arg2: number) => void);
    export class $User$Type extends $Enum<$User$Type> {
        static byName(arg0: string): $User$Type;
        getName(): string;
        static values(): $User$Type[];
        static valueOf(arg0: string): $User$Type;
        static MOJANG: $User$Type;
        static LEGACY: $User$Type;
        static MSA: $User$Type;
    }
    /**
     * Values that may be interpreted as {@link $User$Type}.
     */
    export type $User$Type_ = "legacy" | "mojang" | "msa";
    export class $Minecraft$GameLoadCookie extends $Record {
        quickPlayData(): $GameConfig$QuickPlayData;
        realmsClient(): $RealmsClient;
        constructor(realmsClient: $RealmsClient, quickPlayData: $GameConfig$QuickPlayData_);
    }
    /**
     * Values that may be interpreted as {@link $Minecraft$GameLoadCookie}.
     */
    export type $Minecraft$GameLoadCookie_ = { realmsClient?: $RealmsClient, quickPlayData?: $GameConfig$QuickPlayData_,  } | [realmsClient?: $RealmsClient, quickPlayData?: $GameConfig$QuickPlayData_, ];
    export class $OptionInstance<T> implements $OptionInstanceAccessor<any>, $ISimpleOption<any> {
        codec(): $Codec<$Object>;
        static createBoolean(arg0: string, arg1: $OptionInstance$TooltipSupplier_<boolean>, arg2: $OptionInstance$CaptionBasedToString_<boolean>, arg3: boolean, arg4: $Consumer_<boolean>): $OptionInstance<boolean>;
        static createBoolean(arg0: string, arg1: $OptionInstance$TooltipSupplier_<boolean>, arg2: boolean, arg3: $Consumer_<boolean>): $OptionInstance<boolean>;
        static createBoolean(arg0: string, arg1: boolean, arg2: $Consumer_<boolean>): $OptionInstance<boolean>;
        static createBoolean(arg0: string, arg1: boolean): $OptionInstance<boolean>;
        static createBoolean(arg0: string, arg1: $OptionInstance$TooltipSupplier_<boolean>, arg2: boolean): $OptionInstance<boolean>;
        createButton(arg0: $Options): $AbstractWidget;
        createButton(arg0: $Options, arg1: number, arg2: number, arg3: number): $AbstractWidget;
        createButton(arg0: $Options, arg1: number, arg2: number, arg3: number, arg4: $Consumer_<$Object>): $AbstractWidget;
        static noTooltip<T>(): $OptionInstance$TooltipSupplier<T>;
        static cachedConstantTooltip<T>(arg0: $Component_): $OptionInstance$TooltipSupplier<T>;
        static forOptionEnum<T extends $OptionEnum>(): $OptionInstance$CaptionBasedToString<T>;
        get(): $Object;
        values(): $OptionInstance$ValueSet<$Object>;
        set(arg0: $Object): void;
        setCallbacks(arg0: $OptionInstance$ValueSet<$Object>): void;
        setCodec(arg0: $Codec<$Object>): void;
        getInitialValue(): $Object;
        caption: $Component;
        static BOOLEAN_VALUES: $OptionInstance$Enum<boolean>;
        static BOOLEAN_TO_STRING: $OptionInstance$CaptionBasedToString<boolean>;
        constructor(arg0: string, arg1: $OptionInstance$TooltipSupplier_<$Object>, arg2: $OptionInstance$CaptionBasedToString_<$Object>, arg3: $OptionInstance$ValueSet<$Object>, arg4: $Object, arg5: $Consumer_<$Object>);
        constructor(arg0: string, arg1: $OptionInstance$TooltipSupplier_<$Object>, arg2: $OptionInstance$CaptionBasedToString_<$Object>, arg3: $OptionInstance$ValueSet<$Object>, arg4: $Codec<$Object>, arg5: $Object, arg6: $Consumer_<$Object>);
        set callbacks(value: $OptionInstance$ValueSet<$Object>);
        get initialValue(): $Object;
    }
    export class $StringSplitter$LineComponent implements $FormattedText {
        getString(): string;
        get string(): string;
    }
    export class $Minecraft extends $ReentrantBlockableEventLoop<$Runnable> implements $WindowEventHandler, $IMinecraftExtension, $MinecraftAccessor$2, $AccessorMinecraft, $MinecraftAccessor$1, $IMixinMinecraft, $IMixinMinecraft$1, $MinecraftClientAccessor, $MinecraftClient_BetterCombat, $MinecraftAccess, $IXaeroMinimapMinecraftClient, $MinecraftAccesor, $MinecraftAccessor, $IWorldMapMinecraftClient, $MinecraftClientAccessor$1, $MinecraftClientKJS, $MinecraftAccessor$3 {
        getProxy(): $Proxy;
        getCurrentServer(): $ServerData;
        getResourceManager(): $ResourceManager;
        getTextureManager(): $TextureManager;
        getVanillaPackResources(): $VanillaPackResources;
        setOverlay(arg0: $Overlay): void;
        getWindow(): $Window;
        getGuiSprites(): $GuiSpriteManager;
        getLastInputType(): $InputType;
        setScreen(arg0: $Screen): void;
        getMainRenderTarget(): $RenderTarget;
        getNarrator(): $GameNarrator;
        getTimer(): $DeltaTracker;
        getOverlay(): $Overlay;
        renderBuffers(): $RenderBuffers;
        allowsMultiplayer(): boolean;
        realmsDataFetcher(): $RealmsDataFetcher;
        quickPlayLog(): $QuickPlayLog;
        isLocalServer(): boolean;
        commandHistory(): $CommandHistory;
        directoryValidator(): $DirectoryValidator;
        setWindowActive(arg0: boolean): void;
        getItemRenderer(): $ItemRenderer;
        getBlockRenderer(): $BlockRenderDispatcher;
        resizeDisplay(): void;
        handler$gjk000$darkwindowbar$createWindow(gameConfig: $GameConfig, ci: $CallbackInfo): void;
        isGameLoadFinished(): boolean;
        multiplayerBan(): $BanDetails;
        updateTitle(): void;
        static checkModStatus(): $ModCheck;
        handler$eig000$nochatrestrictions$onCreateUserApi(arg0: $YggdrasilAuthenticationService, arg1: $GameConfig, arg2: $CallbackInfoReturnable<any>): void;
        clearResourcePacksOnError(arg0: $Throwable, arg1: $Component_, arg2: $Minecraft$GameLoadCookie_): void;
        reloadResourcePacks(): $CompletableFuture<void>;
        getToasts(): $ToastComponent;
        getDebugOverlay(): $DebugScreenOverlay;
        emergencySaveAndCrash(arg0: $CrashReport): void;
        getLaunchedVersion(): string;
        getVersionType(): string;
        delayCrash(arg0: $CrashReport): void;
        delayCrashRaw(arg0: $CrashReport): void;
        static fillReport(arg0: $Minecraft, arg1: $LanguageManager, arg2: string, arg3: $Options, arg4: $CrashReport): void;
        fillReport(arg0: $CrashReport): $CrashReport;
        isEnforceUnicode(): boolean;
        getModelManager(): $ModelManager;
        getLevelSource(): $LevelStorageSource;
        getChatStatus(): $Minecraft$ChatStatus;
        setLastInputType(arg0: $InputType_): void;
        handler$eoh000$factory_api$setScreen(screen: $Screen, ci: $CallbackInfo): void;
        handler$bcd002$veil$close(arg0: $CallbackInfo): void;
        handler$ich000$xaeroworldmap$onRunTickStart(arg0: $CallbackInfo): void;
        handler$bbb000$veil$beginFrame(arg0: $CallbackInfo): void;
        handler$dmp000$prism$runTick(tickWorld: boolean, callbackInfo: $CallbackInfo): void;
        handler$mfl001$iceberg$runTick(tickWorld: boolean, callbackInfo: $CallbackInfo): void;
        modify$ich000$xaeroworldmap$onRenderCall(arg0: boolean): boolean;
        handler$bbb000$veil$endFrame(arg0: $CallbackInfo): void;
        hasSingleplayerServer(): boolean;
        handler$eoh000$factory_api$resizeDisplay(ci: $CallbackInfo): void;
        cursorEntered(): void;
        getFps(): number;
        getFrameTimeNs(): number;
        debugClientMetricsStart(arg0: $Consumer_<$Component>): boolean;
        getSingleplayerServer(): $IntegratedServer;
        debugFpsMeterKeyPress(arg0: number): void;
        handler$eoh000$factory_api$stop(ci: $CallbackInfo): void;
        pauseGame(arg0: boolean): void;
        redirect$hbe000$glitchcore$startUseItem_getItemInHand(arg0: $LocalPlayer, arg1: $InteractionHand_): $ItemStack;
        handler$hbe000$glitchcore$onStartUseItem(arg0: $CallbackInfo): void;
        getMusicManager(): $MusicManager;
        handler$hbe000$glitchcore$onBeginTick(arg0: $CallbackInfo): void;
        handler$eoh000$factory_api$beforeScreenTick(ci: $CallbackInfo): void;
        handler$eoh000$factory_api$afterScreenTick(ci: $CallbackInfo): void;
        handler$hbe000$glitchcore$onEndTick(arg0: $CallbackInfo): void;
        handler$lbd000$sable$postCycleCameraType(arg0: $CallbackInfo): void;
        getCameraEntity(): $Entity;
        getTelemetryManager(): $ClientTelemetryManager;
        getGpuUtilization(): number;
        getProfileKeyPairManager(): $ProfileKeyPairManager;
        createWorldOpenFlows(): $WorldOpenFlows;
        doWorldLoad(arg0: $LevelStorageSource$LevelStorageAccess, arg1: $PackRepository, arg2: $WorldStem_, arg3: boolean): void;
        updateReportEnvironment(arg0: $ReportEnvironment_): void;
        handler$dml000$revelationary$onLogout(arg0: $Screen, arg1: boolean, arg2: $CallbackInfo): void;
        clearDownloadedResourcePacks(): void;
        clearClientLevel(arg0: $Screen): void;
        handler$zkc000$iris$trackLastDimensionOnLeave(arg0: $Screen, arg1: $CallbackInfo): void;
        forceSetScreen(arg0: $Screen): void;
        telemetryOptInExtra(): boolean;
        extraTelemetryAvailable(): boolean;
        allowsTelemetry(): boolean;
        handler$fhp000$no_telemetry$isTelemetryEnabledByApi(cir: $CallbackInfoReturnable<any>): void;
        isNameBanned(): boolean;
        allowsRealms(): boolean;
        handler$eig000$nochatrestrictions$onCheckNameBan(arg0: $CallbackInfoReturnable<any>): void;
        isBlocked(arg0: $UUID_): boolean;
        isDemo(): boolean;
        static renderNames(): boolean;
        static useFancyGraphics(): boolean;
        static useShaderTransparency(): boolean;
        static useAmbientOcclusion(): boolean;
        handler$mdd000$ae2$pickColor(arg0: $CallbackInfo): void;
        addCustomNbtData(arg0: $ItemStack_, arg1: $BlockEntity, arg2: $RegistryAccess): void;
        localvar$neo000$fabric_events_interaction_v0$modifyItemPick(arg0: $ItemStack_): $ItemStack;
        handler$neo000$fabric_events_interaction_v0$cancelItemPick(arg0: $CallbackInfo): void;
        handler$mec000$ae2wtlib$pickBlock(arg0: $CallbackInfo, arg1: $ItemStack_, arg2: number): void;
        handler$bpc000$transition$fillReport(theCrash: $CrashReport, ci: $CallbackInfoReturnable<any>): void;
        static getLauncherBrand(): string;
        getGpuWarnlistManager(): $GpuWarnlistManager;
        delayTextureReload(): $CompletableFuture<void>;
        isSingleplayer(): boolean;
        isLocalPlayer(arg0: $UUID_): boolean;
        getGameProfile(): $GameProfile;
        getResourcePackRepository(): $PackRepository;
        getDownloadedPackSource(): $DownloadedPackSource;
        getResourcePackDirectory(): $Path;
        getLanguageManager(): $LanguageManager;
        getTextureAtlas(arg0: $ResourceLocation_): $Function<$ResourceLocation, $TextureAtlasSprite>;
        isPaused(): boolean;
        getSoundManager(): $SoundManager;
        getSituationalMusic(): $Music;
        getMinecraftSessionService(): $MinecraftSessionService;
        getSkinManager(): $SkinManager;
        setCameraEntity(arg0: $Entity): void;
        shouldEntityAppearGlowing(arg0: $Entity): boolean;
        handler$fbc000$irons_spellbooks$changeGlowOutline(arg0: $Entity, arg1: $CallbackInfoReturnable<any>): void;
        getBlockEntityRenderDispatcher(): $BlockEntityRenderDispatcher;
        getFixerUpper(): $DataFixer;
        getBlockColors(): $BlockColors;
        showOnlyReducedInfo(): boolean;
        getTutorial(): $Tutorial;
        isWindowActive(): boolean;
        getHotbarManager(): $HotbarManager;
        getPaintingTextures(): $PaintingTextureManager;
        getMobEffectTextures(): $MobEffectTextureManager;
        getMapDecorationTextures(): $MapDecorationTextureManager;
        grabPanoramixScreenshot(arg0: $File_, arg1: number, arg2: number): $Component;
        getProgressListener(): $StoringChunkProgressListener;
        getSplashManager(): $SplashManager;
        getPlayerSocialManager(): $PlayerSocialManager;
        updateMaxMipLevel(arg0: number): void;
        getItemColors(): $ItemColors;
        getEntityModels(): $EntityModelSet;
        isTextFilteringEnabled(): boolean;
        prepareForMultiplayer(): void;
        getProfileKeySignatureValidator(): $SignatureValidator;
        canValidateProfileKeys(): boolean;
        getChatListener(): $ChatListener;
        getReportingContext(): $ReportingContext;
        hasGameLoaded(): boolean;
        setUser(user: $User): boolean;
        hasTargetsInReach(): boolean;
        getComboCount(): number;
        getSwingProgress(): number;
        getUpswingTicks(): number;
        cancelUpswing(): void;
        getCurrentAttackHand(): $AttackHand;
        getXaeroMinimap_fps(): number;
        getXaeroWorldMap_fps(): number;
        getTitle(): string;
        getScheduledEvents(): $ScheduledEvents;
        setLevel(arg0: $ClientLevel, arg1: $ReceivingLevelScreen$Reason_): void;
        tick(): void;
        getConnection(): $ClientPacketListener;
        disconnect(arg0: $Screen, arg1: boolean): void;
        disconnect(arg0: $Screen): void;
        disconnect(): void;
        isRunning(): boolean;
        static crash(arg0: $Minecraft, arg1: $File_, arg2: $CrashReport): void;
        getUser(): $User;
        getProfiler(): $ProfilerFiller;
        run(): void;
        static getInstance(): $Minecraft;
        stop(): void;
        destroy(): void;
        popGuiLayer(): void;
        pushGuiLayer(arg0: $Screen): void;
        getLocale(): $Locale;
        getCurrentAttack(): $WeaponAttributes$Attack;
        getCursorTarget(): $Entity;
        isWeaponSwingInProgress(): boolean;
        setStatusMessage(message: $Component_): void;
        /**
         * Runs the specified console command client-side with the player's permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        /**
         * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        isKeyDown(key: number): boolean;
        isKeyDown(keyName: string): boolean;
        getName(): $Component;
        setTitle(t: string): void;
        getCurrentScreen(): $Screen;
        setCurrentScreen(gui: $Screen): void;
        getCurrentWorldName(): string;
        isKeyBindDown(id: string): boolean;
        getKeyBindPressedTicks(id: string): number;
        isKeyMappingDown(key: $KeyMapping): boolean;
        isShiftDown(): boolean;
        isCtrlDown(): boolean;
        isAltDown(): boolean;
        getBlockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        getParticleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        self(): $Minecraft;
        tell(message: $Component_): void;
        schedule(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        getDisplayName(): $Component;
        getFontManagerDrippy(): $FontManager;
        getEntityRenderDispatcher(): $EntityRenderDispatcher;
        setAttackCooldown(arg0: number): void;
        cumulus$setIsLocalServer(arg0: boolean): void;
        cumulus$getCurrentFrameProfile(): $TimerQuery$FrameProfile;
        cumulus$setCurrentFrameProfile(arg0: $TimerQuery$FrameProfile): void;
        bookshelf$getFontManager(): $FontManager;
        openChatScreenFancyMenu(arg0: string): void;
        getReloadStateTrackerFancyMenu(): $ResourceLoadStateTracker;
        getMissTime(): number;
        getFontManager(): $FontManager;
        figura$invokeGetTickTargetMillis(arg0: number): number;
        aether$setIsLocalServer(arg0: boolean): void;
        create$setMissTime(arg0: number): void;
        itemColors: $ItemColors;
        crosshairPickEntity: $Entity;
        screen: $Screen;
        cameraEntity: $Entity;
        blockRenderer: $BlockRenderDispatcher;
        running: boolean;
        timer: $DeltaTracker$Timer;
        sectionVisibility: boolean;
        static ON_OSX: boolean;
        mouseHandler: $MouseHandler;
        static UNIFORM_FONT: $ResourceLocation;
        gameRenderer: $GameRenderer;
        wireframe: boolean;
        options: $Options;
        levelRenderer: $LevelRenderer;
        player: $LocalPlayer;
        pendingConnection: $Connection;
        fontFilterFishy: $Font;
        missTime: number;
        level: $ClientLevel;
        gameDirectory: $File;
        static fps: number;
        sectionPath: boolean;
        debugRenderer: $DebugRenderer;
        toast: $ToastComponent;
        noRender: boolean;
        static DEFAULT_FONT: $ResourceLocation;
        fpsString: string;
        keyboardHandler: $KeyboardHandler;
        fontManager: $FontManager;
        static UPDATE_DRIVERS_ADVICE: string;
        particleEngine: $ParticleEngine;
        clientTickCount: number;
        gui: $Gui;
        gameMode: $MultiPlayerGameMode;
        static ALT_FONT: $ResourceLocation;
        hitResult: $HitResult;
        smartCull: boolean;
        font: $Font;
        constructor(arg0: $GameConfig);
        get proxy(): $Proxy;
        get currentServer(): $ServerData;
        get resourceManager(): $ResourceManager;
        get textureManager(): $TextureManager;
        get vanillaPackResources(): $VanillaPackResources;
        get window(): $Window;
        get guiSprites(): $GuiSpriteManager;
        get mainRenderTarget(): $RenderTarget;
        get narrator(): $GameNarrator;
        get localServer(): boolean;
        get itemRenderer(): $ItemRenderer;
        get gameLoadFinished(): boolean;
        get toasts(): $ToastComponent;
        get debugOverlay(): $DebugScreenOverlay;
        get launchedVersion(): string;
        get versionType(): string;
        get enforceUnicode(): boolean;
        get modelManager(): $ModelManager;
        get levelSource(): $LevelStorageSource;
        get chatStatus(): $Minecraft$ChatStatus;
        get frameTimeNs(): number;
        get singleplayerServer(): $IntegratedServer;
        get musicManager(): $MusicManager;
        get telemetryManager(): $ClientTelemetryManager;
        get gpuUtilization(): number;
        get profileKeyPairManager(): $ProfileKeyPairManager;
        get nameBanned(): boolean;
        get demo(): boolean;
        static get launcherBrand(): string;
        get gpuWarnlistManager(): $GpuWarnlistManager;
        get singleplayer(): boolean;
        get gameProfile(): $GameProfile;
        get resourcePackRepository(): $PackRepository;
        get downloadedPackSource(): $DownloadedPackSource;
        get resourcePackDirectory(): $Path;
        get languageManager(): $LanguageManager;
        get paused(): boolean;
        get soundManager(): $SoundManager;
        get situationalMusic(): $Music;
        get minecraftSessionService(): $MinecraftSessionService;
        get skinManager(): $SkinManager;
        get blockEntityRenderDispatcher(): $BlockEntityRenderDispatcher;
        get fixerUpper(): $DataFixer;
        get blockColors(): $BlockColors;
        get tutorial(): $Tutorial;
        get hotbarManager(): $HotbarManager;
        get paintingTextures(): $PaintingTextureManager;
        get mobEffectTextures(): $MobEffectTextureManager;
        get mapDecorationTextures(): $MapDecorationTextureManager;
        get progressListener(): $StoringChunkProgressListener;
        get splashManager(): $SplashManager;
        get playerSocialManager(): $PlayerSocialManager;
        get entityModels(): $EntityModelSet;
        get textFilteringEnabled(): boolean;
        get profileKeySignatureValidator(): $SignatureValidator;
        get chatListener(): $ChatListener;
        get reportingContext(): $ReportingContext;
        get comboCount(): number;
        get swingProgress(): number;
        get upswingTicks(): number;
        get currentAttackHand(): $AttackHand;
        get xaeroMinimap_fps(): number;
        get xaeroWorldMap_fps(): number;
        get scheduledEvents(): $ScheduledEvents;
        get connection(): $ClientPacketListener;
        get profiler(): $ProfilerFiller;
        static get instance(): $Minecraft;
        get locale(): $Locale;
        get currentAttack(): $WeaponAttributes$Attack;
        get cursorTarget(): $Entity;
        get weaponSwingInProgress(): boolean;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get currentWorldName(): string;
        get shiftDown(): boolean;
        get ctrlDown(): boolean;
        get altDown(): boolean;
        get blockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        get particleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        get displayName(): $Component;
        get fontManagerDrippy(): $FontManager;
        get entityRenderDispatcher(): $EntityRenderDispatcher;
        set attackCooldown(value: number);
        get reloadStateTrackerFancyMenu(): $ResourceLoadStateTracker;
    }
    export class $Camera$NearPlane implements $NearPlaneAccessor {
        getTopLeft(): $Vec3;
        getTopRight(): $Vec3;
        getBottomLeft(): $Vec3;
        getBottomRight(): $Vec3;
        getPointOnPlane(arg0: number, arg1: number): $Vec3;
        getForward(): $Vec3;
        get topLeft(): $Vec3;
        get topRight(): $Vec3;
        get bottomLeft(): $Vec3;
        get bottomRight(): $Vec3;
        get forward(): $Vec3;
    }
    export class $GuiMessageTag$Icon extends $Enum<$GuiMessageTag$Icon> {
        draw(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        static values(): $GuiMessageTag$Icon[];
        static valueOf(arg0: string): $GuiMessageTag$Icon;
        static CHAT_MODIFIED: $GuiMessageTag$Icon;
        sprite: $ResourceLocation;
        width: number;
        height: number;
    }
    /**
     * Values that may be interpreted as {@link $GuiMessageTag$Icon}.
     */
    export type $GuiMessageTag$Icon_ = "chat_modified" | "chat_ncr_encrypted";
    export class $KeyboardHandler {
        setClipboard(arg0: string): void;
        keyPress(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        handler$zpj000$veil$handleChunkDebugKeys(arg0: number, arg1: $CallbackInfoReturnable<any>): void;
        handler$zpj000$veil$printChunkDebugKeys(arg0: number, arg1: $CallbackInfoReturnable<any>): void;
        handler$baf000$veil$keyCallback(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        handler$ioh000$relics$onKeyPress(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        handler$hbd000$glitchcore$onKeyInput(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        handler$baf000$veil$charCallback(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfo): void;
        getClipboard(): string;
        handler$eih000$chloride$redirect$handleFullScreenToggle(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        tick(): void;
        setup(arg0: number): void;
        static DEBUG_CRASH_TIME: number;
        constructor(arg0: $Minecraft);
        set up(value: number);
    }
    export class $StringSplitter$WidthProvider {
    }
    export interface $StringSplitter$WidthProvider {
        getWidth(arg0: number, arg1: $Style): number;
    }
    /**
     * Values that may be interpreted as {@link $StringSplitter$WidthProvider}.
     */
    export type $StringSplitter$WidthProvider_ = ((arg0: number, arg1: $Style) => number);
    export class $ResourceLoadStateTracker {
        startReload(arg0: $ResourceLoadStateTracker$ReloadReason_, arg1: $List_<$PackResources>): void;
        startRecovery(arg0: $Throwable): void;
        fillCrashReport(arg0: $CrashReport): void;
        finishReload(): void;
        constructor();
    }
    export class $StringSplitter$LineBreakFinder implements $FormattedCharSink {
    }
    export class $ResourceLoadStateTracker$ReloadReason extends $Enum<$ResourceLoadStateTracker$ReloadReason> {
        static values(): $ResourceLoadStateTracker$ReloadReason[];
        static valueOf(arg0: string): $ResourceLoadStateTracker$ReloadReason;
        static INITIAL: $ResourceLoadStateTracker$ReloadReason;
        static MANUAL: $ResourceLoadStateTracker$ReloadReason;
        static UNKNOWN: $ResourceLoadStateTracker$ReloadReason;
    }
    /**
     * Values that may be interpreted as {@link $ResourceLoadStateTracker$ReloadReason}.
     */
    export type $ResourceLoadStateTracker$ReloadReason_ = "initial" | "manual" | "unknown";
    export class $OptionInstance$SliderableOrCyclableValueSet<T> {
    }
    export interface $OptionInstance$SliderableOrCyclableValueSet<T> extends $OptionInstance$CycleableValueSet<T>, $OptionInstance$SliderableValueSet<T> {
    }
    export class $OptionInstance$ValueSet<T> {
    }
    export interface $OptionInstance$ValueSet<T> {
        codec(): $Codec<T>;
        createButton(arg0: $OptionInstance$TooltipSupplier_<T>, arg1: $Options, arg2: number, arg3: number, arg4: number, arg5: $Consumer_<T>): $Function<$OptionInstance<T>, $AbstractWidget>;
        validateValue(arg0: T): (T) | undefined;
    }
    export class $ComponentCollector {
        getResultOrEmpty(): $FormattedText;
        getResult(): $FormattedText;
        reset(): void;
        append(arg0: $FormattedText): void;
        constructor();
        get resultOrEmpty(): $FormattedText;
        get result(): $FormattedText;
    }
    export class $ClientBrandRetriever {
        static getClientModName(): string;
        static VANILLA_NAME: string;
        constructor();
        static get clientModName(): string;
    }
    export class $OptionInstance$AltEnum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        codec(): $Codec<T>;
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        valueSetter(): $OptionInstance$CycleableValueSet$ValueSetter<T>;
        altCondition(): $BooleanSupplier;
        altValues(): $List<T>;
        validateValue(arg0: T): (T) | undefined;
        values(): $List<T>;
        constructor(arg0: $List_<T>, arg1: $List_<T>, arg2: $BooleanSupplier_, arg3: $OptionInstance$CycleableValueSet$ValueSetter_<T>, arg4: $Codec<T>);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$AltEnum}.
     */
    export type $OptionInstance$AltEnum_<T> = { altValues?: $List_<any>, values?: $List_<any>, altCondition?: $BooleanSupplier_, valueSetter?: $OptionInstance$CycleableValueSet$ValueSetter_<any>, codec?: $Codec<any>,  } | [altValues?: $List_<any>, values?: $List_<any>, altCondition?: $BooleanSupplier_, valueSetter?: $OptionInstance$CycleableValueSet$ValueSetter_<any>, codec?: $Codec<any>, ];
    export class $StringSplitter$FlatComponents {
    }
    export class $StringSplitter {
        componentStyleAtWidth(arg0: $FormattedCharSequence_, arg1: number): $Style;
        componentStyleAtWidth(arg0: $FormattedText, arg1: number): $Style;
        plainTailByWidth(arg0: string, arg1: number, arg2: $Style): string;
        plainHeadByWidth(arg0: string, arg1: number, arg2: $Style): string;
        headByWidth(arg0: $FormattedText, arg1: number, arg2: $Style): $FormattedText;
        plainIndexAtWidth(arg0: string, arg1: number, arg2: $Style): number;
        formattedIndexByWidth(arg0: string, arg1: number, arg2: $Style): number;
        formattedHeadByWidth(arg0: string, arg1: number, arg2: $Style): string;
        findLineBreak(arg0: string, arg1: number, arg2: $Style): number;
        stringWidth(arg0: string): number;
        stringWidth(arg0: $FormattedCharSequence_): number;
        stringWidth(arg0: $FormattedText): number;
        static getWordPosition(arg0: string, arg1: number, arg2: number, arg3: boolean): number;
        splitLines(arg0: string, arg1: number, arg2: $Style, arg3: boolean, arg4: $StringSplitter$LinePosConsumer_): void;
        splitLines(arg0: string, arg1: number, arg2: $Style): $List<$FormattedText>;
        splitLines(arg0: $FormattedText, arg1: number, arg2: $Style): $List<$FormattedText>;
        splitLines(arg0: $FormattedText, arg1: number, arg2: $Style, arg3: $FormattedText): $List<$FormattedText>;
        splitLines(arg0: $FormattedText, arg1: number, arg2: $Style, arg3: $BiConsumer_<$FormattedText, boolean>): void;
        constructor(arg0: $StringSplitter$WidthProvider_);
    }
    export class $PeriodicNotificationManager$NotificationTask extends $TimerTask {
    }
    export class $KeyMapping implements $Comparable<$KeyMapping>, $IKeyMappingExtension, $KeyMappingAccessor, $KeyBindingAccessor, $KeyMappingAccessor$2, $KeyMappingAccessor$1, $AccessKeyMapping, $KeyMappingsAccessor, $AccessorKeyMapping, $AccessorKeyMapping$1, $KeyBindingAccessor$1 {
        isUnbound(): boolean;
        static createNameSupplier(arg0: string): $Supplier<$Component>;
        consumeClick(): boolean;
        isDown(): boolean;
        static resetToggleKeys(): void;
        getTranslatedKeyMessage(): $Component;
        matchesMouse(arg0: number): boolean;
        setDown(arg0: boolean): void;
        static resetMapping(): void;
        getKeyConflictContext(): $IKeyConflictContext;
        getKeyModifier(): $KeyModifier;
        getDefaultKeyModifier(): $KeyModifier;
        saveString(): string;
        setKeyConflictContext(arg0: $IKeyConflictContext): void;
        setKeyModifierAndCode(arg0: $KeyModifier_, arg1: $InputConstants$Key): void;
        static fabric_getCategoryMap$fabric_key_binding_api_v1_$md$68cb88$0(): $Map<any, any>;
        static getAll$figura_$md$68cb88$1(): $Map<any, any>;
        static getAllKeyMappings$patchouli_$md$68cb88$2(): $Map<any, any>;
        getDefaultKey(): $InputConstants$Key;
        static click(arg0: $InputConstants$Key): void;
        isDefault(): boolean;
        static setAll(): void;
        getCategory(): string;
        setKey(arg0: $InputConstants$Key): void;
        static releaseAll(): void;
        same(arg0: $KeyMapping): boolean;
        getName(): string;
        compareTo(arg0: $KeyMapping): number;
        matches(arg0: number, arg1: number): boolean;
        static set(arg0: $InputConstants$Key, arg1: boolean): void;
        isConflictContextAndModifierActive(): boolean;
        isActiveAndMatches(arg0: $InputConstants$Key): boolean;
        hasKeyModifierConflict(arg0: $KeyMapping): boolean;
        getDisplayName(): $Component;
        setToDefault(): void;
        fabric_getTimesPressed(): number;
        fabric_getBoundKey(): $InputConstants$Key;
        controlling$getKey(): $InputConstants$Key;
        getKey(): $InputConstants$Key;
        static ALL: $Map<string, $KeyMapping>;
        static CATEGORY_INTERFACE: string;
        static CATEGORY_MULTIPLAYER: string;
        static CATEGORY_CREATIVE: string;
        static CATEGORY_MOVEMENT: string;
        static CATEGORY_GAMEPLAY: string;
        static CATEGORY_MISC: string;
        key: $InputConstants$Key;
        static CATEGORY_INVENTORY: string;
        constructor(arg0: string, arg1: number, arg2: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $InputConstants$Type_, arg3: number, arg4: string);
        constructor(arg0: string, arg1: $InputConstants$Type_, arg2: number, arg3: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $InputConstants$Key, arg3: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $KeyModifier_, arg3: $InputConstants$Type_, arg4: number, arg5: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $KeyModifier_, arg3: $InputConstants$Key, arg4: string);
        get unbound(): boolean;
        get translatedKeyMessage(): $Component;
        get keyModifier(): $KeyModifier;
        get defaultKeyModifier(): $KeyModifier;
        static get all$figura_$md$68cb88$1(): $Map<any, any>;
        static get allKeyMappings$patchouli_$md$68cb88$2(): $Map<any, any>;
        get defaultKey(): $InputConstants$Key;
        get default(): boolean;
        get category(): string;
        get name(): string;
        get conflictContextAndModifierActive(): boolean;
        get displayName(): $Component;
    }
    export class $DeltaTracker$DefaultValue implements $DeltaTracker {
        getGameTimeDeltaPartialTick(arg0: boolean): number;
        getGameTimeDeltaTicks(): number;
        getRealtimeDeltaTicks(): number;
        get gameTimeDeltaTicks(): number;
        get realtimeDeltaTicks(): number;
    }
    export class $Options$FieldAccess {
    }
    export interface $Options$FieldAccess extends $Options$OptionAccess {
        process<T>(arg0: string, arg1: T, arg2: $Function_<string, T>, arg3: $Function_<T, string>): T;
        process(arg0: string, arg1: number): number;
        process(arg0: string, arg1: string): string;
        process(arg0: string, arg1: boolean): boolean;
        process(arg0: string, arg1: number): number;
    }
    export class $DebugQueryHandler {
        queryBlockEntityTag(arg0: $BlockPos_, arg1: $Consumer_<$CompoundTag>): void;
        queryEntityTag(arg0: number, arg1: $Consumer_<$CompoundTag>): void;
        handleResponse(arg0: number, arg1: $CompoundTag_): boolean;
        constructor(arg0: $ClientPacketListener);
    }
    export class $NarratorStatus extends $Enum<$NarratorStatus> {
        static byId(arg0: number): $NarratorStatus;
        shouldNarrateChat(): boolean;
        shouldNarrateSystem(): boolean;
        getName(): $Component;
        static values(): $NarratorStatus[];
        static valueOf(arg0: string): $NarratorStatus;
        getId(): number;
        static SYSTEM: $NarratorStatus;
        static ALL: $NarratorStatus;
        static CHAT: $NarratorStatus;
        static OFF: $NarratorStatus;
        get id(): number;
    }
    /**
     * Values that may be interpreted as {@link $NarratorStatus}.
     */
    export type $NarratorStatus_ = "off" | "all" | "chat" | "system";
    export class $ResourceLoadStateTracker$RecoveryInfo {
    }
    export class $Minecraft$ChatStatus extends $Enum<$Minecraft$ChatStatus> {
        isChatAllowed(arg0: boolean): boolean;
        static values(): $Minecraft$ChatStatus[];
        static valueOf(arg0: string): $Minecraft$ChatStatus;
        getMessage(): $Component;
        static DISABLED_BY_OPTIONS: $Minecraft$ChatStatus;
        static DISABLED_BY_PROFILE: $Minecraft$ChatStatus;
        static ENABLED: $Minecraft$ChatStatus;
        static DISABLED_BY_LAUNCHER: $Minecraft$ChatStatus;
        get message(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $Minecraft$ChatStatus}.
     */
    export type $Minecraft$ChatStatus_ = "enabled" | "disabled_by_options" | "disabled_by_launcher" | "disabled_by_profile";
    export class $OptionInstance$CaptionBasedToString<T> {
    }
    export interface $OptionInstance$CaptionBasedToString<T> {
        toString(arg0: $Component_, arg1: T): $Component;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$CaptionBasedToString}.
     */
    export type $OptionInstance$CaptionBasedToString_<T> = ((arg0: $Component, arg1: T) => $Component_);
    export class $ParticleStatus extends $Enum<$ParticleStatus> implements $OptionEnum {
        static byId(arg0: number): $ParticleStatus;
        static values(): $ParticleStatus[];
        static valueOf(arg0: string): $ParticleStatus;
        getKey(): string;
        getId(): number;
        getCaption(): $Component;
        static ALL: $ParticleStatus;
        static DECREASED: $ParticleStatus;
        static MINIMAL: $ParticleStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ParticleStatus}.
     */
    export type $ParticleStatus_ = "all" | "decreased" | "minimal";
    export class $OptionInstance$CycleableValueSet$ValueSetter<T> {
    }
    export interface $OptionInstance$CycleableValueSet$ValueSetter<T> {
        set(arg0: $OptionInstance<T>, arg1: T): void;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$CycleableValueSet$ValueSetter}.
     */
    export type $OptionInstance$CycleableValueSet$ValueSetter_<T> = ((arg0: $OptionInstance<T>, arg1: T) => void);
    export class $OptionInstance$CycleableValueSet<T> {
    }
    export interface $OptionInstance$CycleableValueSet<T> extends $OptionInstance$ValueSet<T> {
    }
}
