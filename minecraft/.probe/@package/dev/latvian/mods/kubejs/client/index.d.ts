import { $MinecraftServer } from "@package/net/minecraft/server";
import { $EntityType_, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ParticleType_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $RegisterClientExtensionsEvent } from "@package/net/neoforged/neoforge/client/extensions/common";
import { $Minecraft } from "@package/net/minecraft/client";
import { $KubeEvent, $EventTargetType } from "@package/dev/latvian/mods/kubejs/event";
import { $DynamicItemTooltipsKubeEvent, $ItemTintFunction, $ItemTintFunction_ } from "@package/dev/latvian/mods/kubejs/item";
import { $ScreenEvent$Render$Post, $ClientPlayerNetworkEvent$LoggingOut, $RegisterKeyMappingsEvent, $ClientPlayerNetworkEvent$LoggingIn, $RenderLevelStageEvent, $RegisterParticleProvidersEvent, $RegisterColorHandlersEvent$Block, $RenderGuiEvent$Post, $RegisterMenuScreensEvent, $ScreenEvent$Opening, $RegisterShadersEvent, $EntityRenderersEvent$RegisterRenderers, $RegisterClientCommandsEvent, $ScreenEvent$Init$Post, $ClientTickEvent$Pre, $CustomizeGuiOverlayEvent$DebugText, $RegisterColorHandlersEvent$Item } from "@package/net/neoforged/neoforge/client/event";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ClientLevel, $ClientPacketListener } from "@package/net/minecraft/client/multiplayer";
import { $ScheduledEvents$ScheduledEvent, $BaseProperties, $ScheduledEvents, $NotificationToastData_ } from "@package/dev/latvian/mods/kubejs/util";
import { $FMLClientSetupEvent } from "@package/net/neoforged/fml/event/lifecycle";
import { $PackResources } from "@package/net/minecraft/server/packs";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $MenuType_ } from "@package/net/minecraft/world/inventory";
import { $ScriptType_, $ConsoleJS, $ScriptType, $ScriptPack, $KubeJSContextFactory, $ScriptManager, $ConsoleLine } from "@package/dev/latvian/mods/kubejs/script";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $SpriteSet, $Particle, $ParticleProvider_, $ParticleProvider, $SimpleAnimatedParticle, $ParticleEngine$SpriteParticleRegistration } from "@package/net/minecraft/client/particle";
import { $Component } from "@package/net/minecraft/network/chat";
import { $GeneratedDataStage, $VirtualAssetPack } from "@package/dev/latvian/mods/kubejs/script/data";
import { $Float2IntFunction_ } from "@package/it/unimi/dsi/fastutil/floats";
import { $RepositorySource, $Pack } from "@package/net/minecraft/server/packs/repository";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $AABB_, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $JsonObject_, $JsonObject, $JsonElement } from "@package/com/google/gson";
import { $TooltipRequirements_, $ItemTooltipData } from "@package/dev/latvian/mods/kubejs/text/tooltip";
import { $KeyConflictContext_, $KeyModifier_ } from "@package/net/neoforged/neoforge/client/settings";
import { $ItemColor } from "@package/net/minecraft/client/color/item";
import { $Map, $List, $Map_, $List_, $Calendar } from "@package/java/util";
import { $KubeServerData_ } from "@package/dev/latvian/mods/kubejs/net";
import { $KubePlayerEvent } from "@package/dev/latvian/mods/kubejs/player";
import { $ItemTooltipEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $Consumer_ } from "@package/java/util/function";
import { $BlockPos_, $RegistryAccess, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Path_, $Path } from "@package/java/nio/file";
import { $BlockColor } from "@package/net/minecraft/client/color/block";
import { $BlockEntityRendererProvider_ } from "@package/net/minecraft/client/renderer/blockentity";
import { $Record, $Object } from "@package/java/lang";
import { $BlockAndTintGetter, $Level } from "@package/net/minecraft/world/level";
import { $File_ } from "@package/java/io";
import { $EntityRendererProvider_ } from "@package/net/minecraft/client/renderer/entity";
import { $BlockTintFunction, $BlockTintFunction_ } from "@package/dev/latvian/mods/kubejs/block";
import { $Toast$Visibility, $Toast, $ToastComponent } from "@package/net/minecraft/client/gui/components/toasts";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $ObjectSelectionList, $Renderable, $ObjectSelectionList$Entry } from "@package/net/minecraft/client/gui/components";
import { $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $TagsUpdatedEvent, $AddPackFindersEvent } from "@package/net/neoforged/neoforge/event";
import { $InputConstants$Type_ } from "@package/com/mojang/blaze3d/platform";
import { $Pattern } from "@package/java/util/regex";
import { $BufferedImage } from "@package/java/awt/image";
import { $RecipeViewerData } from "@package/dev/latvian/mods/kubejs/recipe/viewer/server";
import { $MenuScreens$ScreenConstructor_, $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $KubeJSCommon } from "@package/dev/latvian/mods/kubejs";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";
export * as icon from "@package/dev/latvian/mods/kubejs/client/icon";
export * as highlight from "@package/dev/latvian/mods/kubejs/client/highlight";
export * as editor from "@package/dev/latvian/mods/kubejs/client/editor";

declare module "@package/dev/latvian/mods/kubejs/client" {
    export class $KeybindRegistryKubeEvent$Builder {
        gui(): $KeybindRegistryKubeEvent$Builder;
        inputType(inputType: $InputConstants$Type_): $KeybindRegistryKubeEvent$Builder;
        inGame(): $KeybindRegistryKubeEvent$Builder;
        conflictContext(keyConflictContext: $KeyConflictContext_): $KeybindRegistryKubeEvent$Builder;
        scanCodeInputType(): $KeybindRegistryKubeEvent$Builder;
        mouseInputType(): $KeybindRegistryKubeEvent$Builder;
        defaultKey(keyName: string): $KeybindRegistryKubeEvent$Builder;
        category(category: string): $KeybindRegistryKubeEvent$Builder;
        modifier(modifier: $KeyModifier_): $KeybindRegistryKubeEvent$Builder;
    }
    export class $ClientAssetPacks {
        inject(original: $List_<$PackResources>): $List<$PackResources>;
        internalAssetPack: $VirtualAssetPack;
        virtualPacks: $Map<$GeneratedDataStage, $VirtualAssetPack>;
        static INSTANCE: $ClientAssetPacks;
        constructor();
    }
    export class $MultipartBlockStateGenerator {
        part(when: string, model: $ResourceLocation_): void;
        part(when: string, consumer: $Consumer_<$MultipartBlockStateGenerator$Part>): void;
        toJson(): $JsonObject;
        constructor();
    }
    export class $KubeJSResourcePackFinder implements $RepositorySource {
        loadPacks(nameToPackMap: $Consumer_<$Pack>): void;
        constructor();
    }
    export class $BlockTintFunctionWrapper extends $Record implements $BlockColor {
        getColor(state: $BlockState_, level: $BlockAndTintGetter, pos: $BlockPos_, index: number): number;
        function(): $BlockTintFunction;
        constructor(_function: $BlockTintFunction_);
    }
    /**
     * Values that may be interpreted as {@link $BlockTintFunctionWrapper}.
     */
    export type $BlockTintFunctionWrapper_ = { function?: $BlockTintFunction_,  } | [function?: $BlockTintFunction_, ];
    export class $ModelGenerator$Override {
        predicate(property: $ResourceLocation_, value: number): void;
        toJson(): $JsonObject;
        constructor(model: $ResourceLocation_);
    }
    export class $ItemTintFunctionWrapper extends $Record implements $ItemColor {
        getColor(stack: $ItemStack_, index: number): number;
        function(): $ItemTintFunction;
        constructor(_function: $ItemTintFunction_);
    }
    /**
     * Values that may be interpreted as {@link $ItemTintFunctionWrapper}.
     */
    export type $ItemTintFunctionWrapper_ = { function?: $ItemTintFunction_,  } | [function?: $ItemTintFunction_, ];
    export class $KubeAnimatedParticle extends $SimpleAnimatedParticle {
        onTick(tick: $Consumer_<$KubeAnimatedParticle>): void;
        getRandom(): $RandomSource;
        setSpeed(speed: $Vec3_): void;
        getSpriteSet(): $SpriteSet;
        /**
         * Sets teh friction of the particle, the particle's motion is multiplied by this value every tick
         */
        setFriction(f: number): void;
        setPhysicality(hasPhysics: boolean): void;
        setFasterWhenYMotionBlocked(b: boolean): void;
        setLightColor(_function: $Float2IntFunction_): void;
        getXSpeed(): number;
        getYSpeed(): number;
        getZSpeed(): number;
        getLevel(): $ClientLevel;
        setColor(color: $KubeColor_, alpha: boolean): void;
        setColor(color: $KubeColor_): void;
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
        constructor(level: $ClientLevel, x: number, y: number, z: number, sprites: $SpriteSet);
        get random(): $RandomSource;
        set speed(value: $Vec3_);
        get spriteSet(): $SpriteSet;
        set friction(value: number);
        set physicality(value: boolean);
        set fasterWhenYMotionBlocked(value: boolean);
        set lightColor(value: $Float2IntFunction_);
        get XSpeed(): number;
        get YSpeed(): number;
        get ZSpeed(): number;
    }
    export class $LangKubeEvent extends $Record implements $KubeEvent {
        renameBlock(block: $Block_, name: string): void;
        renameItem(item: $ItemStack_, name: string): void;
        renameEntity(id: $ResourceLocation_, name: string): void;
        renameBiome(id: $ResourceLocation_, name: string): void;
        painting(paintingId: $ResourceLocation_, title: string, author: string): void;
        lang(): string;
        add(namespace: string, key: string, value: string): void;
        add(key: string, value: string): void;
        map(): $Map<$LangKubeEvent$Key, string>;
        addAll(map: $Map_<string, string>): void;
        addAll(namespace: string, map: $Map_<string, string>): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        static PATTERN: $Pattern;
        constructor(lang: string, map: $Map_<$LangKubeEvent$Key_, string>);
    }
    /**
     * Values that may be interpreted as {@link $LangKubeEvent}.
     */
    export type $LangKubeEvent_ = { lang?: string, map?: $Map_<$LangKubeEvent$Key_, string>,  } | [lang?: string, map?: $Map_<$LangKubeEvent$Key_, string>, ];
    export class $EntityRendererRegistryKubeEvent implements $ClientKubeEvent {
        register(type: $EntityType_<never>, renderer: $EntityRendererProvider_<any>): void;
        getClient(): $Minecraft;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        constructor(event: $EntityRenderersEvent$RegisterRenderers);
        get client(): $Minecraft;
    }
    export class $ParticleProviderRegistryKubeEvent implements $ClientKubeEvent {
        registerSpecial<T extends $ParticleOptions>(type: $ParticleType_<T>, provider: $ParticleProvider_<T>): void;
        register<T extends $ParticleOptions>(type: $ParticleType_<T>, spriteProvider: $ParticleProviderRegistryKubeEvent$SpriteSetParticleProvider_<T>): void;
        register<T extends $ParticleOptions>(type: $ParticleType_<T>): void;
        register<T extends $ParticleOptions>(type: $ParticleType_<T>, particle: $Consumer_<$KubeAnimatedParticle>): void;
        getClient(): $Minecraft;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        constructor(event: $RegisterParticleProvidersEvent);
        get client(): $Minecraft;
    }
    export class $SoundsGenerator {
        addSound(path: string, consumer: $Consumer_<$SoundsGenerator$SoundGen>): void;
        addSound(path: string, consumer: $Consumer_<$SoundsGenerator$SoundGen>, overlayExisting: boolean): void;
        toJson(): $JsonObject;
        constructor();
    }
    export class $LoadedTexture {
        remap(remap: $Map_<$KubeColor_, $KubeColor_>): $LoadedTexture;
        tint(tint: $KubeColor_): $LoadedTexture;
        resize(newWidth: number, newHeight: number): $LoadedTexture;
        toBytes(): number[];
        static load(id: $ResourceLocation_): $LoadedTexture;
        copy(): $LoadedTexture;
        pixels: number[];
        width: number;
        static EMPTY: $LoadedTexture;
        mcmeta: number[];
        height: number;
        constructor(width: number, height: number, pixels: number[], mcmeta: number[]);
        constructor(img: $BufferedImage, mcmeta: number[]);
    }
    export class $ModelGenerator$OverridePredicate extends $Record {
        property(): $ResourceLocation;
        toJson(json: $JsonObject_): void;
        value(): number;
        constructor(property: $ResourceLocation_, value: number);
    }
    /**
     * Values that may be interpreted as {@link $ModelGenerator$OverridePredicate}.
     */
    export type $ModelGenerator$OverridePredicate_ = { property?: $ResourceLocation_, value?: number,  } | [property?: $ResourceLocation_, value?: number, ];
    export class $VariantBlockStateGenerator$Model {
        uvlock(): $VariantBlockStateGenerator$Model;
        model(s: $ResourceLocation_): $VariantBlockStateGenerator$Model;
        y(y: number): $VariantBlockStateGenerator$Model;
        toJson(): $JsonObject;
        x(x: number): $VariantBlockStateGenerator$Model;
        constructor();
    }
    export class $LangKubeEvent$Key extends $Record {
        namespace(): string;
        lang(): string;
        key(): string;
        constructor(namespace: string, lang: string, key: string);
    }
    /**
     * Values that may be interpreted as {@link $LangKubeEvent$Key}.
     */
    export type $LangKubeEvent$Key_ = { lang?: string, namespace?: string, key?: string,  } | [lang?: string, namespace?: string, key?: string, ];
    export class $BlockEntityRendererRegistryKubeEvent implements $ClientKubeEvent {
        register(type: $BlockEntityType_<never>, renderer: $BlockEntityRendererProvider_<any>): void;
        getClient(): $Minecraft;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        constructor(event: $EntityRenderersEvent$RegisterRenderers);
        get client(): $Minecraft;
    }
    export class $KubeJSKeybinds$KubeKey {
        id: string;
        constructor(id: string);
    }
    export class $NotificationToast implements $Toast {
        width(): number;
        height(): number;
        render(graphics: $GuiGraphics, toastComponent: $ToastComponent, l: number): $Toast$Visibility;
        getToken(): $Object;
        slotCount(): number;
        constructor(mc: $Minecraft, notification: $NotificationToastData_);
        get token(): $Object;
    }
    export class $KubeJSErrorScreen$ErrorList extends $ObjectSelectionList<$KubeJSErrorScreen$Entry> {
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        screen: $KubeJSErrorScreen;
        active: boolean;
        scrolling: boolean;
        static UNSET_FG_COLOR: number;
        static SCROLLER_SPRITE: $ResourceLocation;
        hovered: $KubeJSErrorScreen$Entry;
        lines: $List<$ConsoleLine>;
        constructor(screen: $KubeJSErrorScreen, minecraft: $Minecraft, width: number, height: number, top: number, bottom: number, lines: $List_<$ConsoleLine>);
    }
    export class $ScheduledClientEvent extends $ScheduledEvents$ScheduledEvent {
        getClient(): $Minecraft;
        timer: number;
        static EVENTS: $ScheduledEvents;
        repeating: boolean;
        scheduledEvents: $ScheduledEvents;
        id: number;
        endTime: number;
        ofTicks: boolean;
        constructor();
        get client(): $Minecraft;
    }
    export class $KubeJSKeybinds {
        static getOrCreate(id: string): $KubeJSKeybinds$KubeKey;
        static generateLang(event: $LangKubeEvent_): void;
        static triggerReload(): void;
        static triggerKeyEvents(client: $Minecraft): void;
        static get(id: string): $KubeJSKeybinds$KubeKey;
        static TARGET: $EventTargetType<$KubeJSKeybinds$KubeKey>;
        constructor();
    }
    export class $ClientKubeEvent {
    }
    export interface $ClientKubeEvent extends $KubeEvent {
        getClient(): $Minecraft;
        get client(): $Minecraft;
    }
    export class $ModelGenerator {
        textures(map: $Map_<string, string>): void;
        texture(name: string[], texture: string): void;
        element(consumer: $Consumer_<$ModelGenerator$Element>): void;
        toJson(): $JsonObject;
        custom(json: $Consumer_<$JsonObject>): void;
        parent(s: $ResourceLocation_): void;
        override(model: $ResourceLocation_, override: $Consumer_<$ModelGenerator$Override>): void;
        constructor();
    }
    export class $SoundsGenerator$SoundGen {
        sound(file: string): $SoundsGenerator$SoundGen;
        sound(file: string, consumer: $Consumer_<$SoundsGenerator$SoundInstance>): $SoundsGenerator$SoundGen;
        sounds(...sounds: string[]): $SoundsGenerator$SoundGen;
        subtitle(subtitle: string): $SoundsGenerator$SoundGen;
        toJson(): $JsonObject;
        replace(b: boolean): $SoundsGenerator$SoundGen;
        replace(): $SoundsGenerator$SoundGen;
        constructor();
    }
    export class $KeybindRegistryKubeEvent implements $ClientKubeEvent {
        register(id: string): $KeybindRegistryKubeEvent$Builder;
        register(id: string, defaultKey: string): $KeybindRegistryKubeEvent$Builder;
        getClient(): $Minecraft;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        constructor();
        get client(): $Minecraft;
    }
    export class $ModelGenerator$Face {
        cull(): $ModelGenerator$Face;
        cull(d: $Direction_): $ModelGenerator$Face;
        tex(t: string): $ModelGenerator$Face;
        uv(u0: number, v0: number, u1: number, v1: number): $ModelGenerator$Face;
        tintindex(i: number): $ModelGenerator$Face;
        toJson(): $JsonObject;
        side: $Direction;
        constructor(side: $Direction_);
    }
    export class $ClientPlayerKubeEvent implements $KubePlayerEvent, $ClientKubeEvent {
        getPlayer(): $LocalPlayer;
        getClient(): $Minecraft;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        getEntity(): $LivingEntity;
        constructor(player: $LocalPlayer);
        get player(): $LocalPlayer;
        get client(): $Minecraft;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
        get entity(): $LivingEntity;
    }
    export class $AtlasSpriteRegistryKubeEvent implements $KubeEvent {
        register(id: $ResourceLocation_): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        constructor(registry: $Consumer_<$ResourceLocation>);
    }
    export class $MenuScreenRegistryKubeEvent implements $ClientKubeEvent {
        register(type: $MenuType_<never>, constructor: $MenuScreens$ScreenConstructor_<any, any>): void;
        getClient(): $Minecraft;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        constructor(event: $RegisterMenuScreensEvent);
        get client(): $Minecraft;
    }
    export class $DebugInfoKubeEvent extends $ClientPlayerKubeEvent {
        /**
         * Whether the debug info should be rendered.
         */
        getShowDebug(): boolean;
        /**
         * The lines of debug info. Mutating this list will change the debug info.
         */
        getLines(): $List<string>;
        constructor(player: $LocalPlayer, l: $List_<string>);
        get showDebug(): boolean;
        get lines(): $List<string>;
    }
    export class $VariantBlockStateGenerator$Variant {
        model(s: $ResourceLocation_): $VariantBlockStateGenerator$Model;
        toJson(): $JsonElement;
        constructor();
    }
    export class $KubeJSClient extends $KubeJSCommon {
        static drawStackSize(graphics: $GuiGraphics, font: $Font, size: number, x: number, y: number, color: number, dropShadow: boolean): number;
        static loadPostChains(mc: $Minecraft): void;
        static resizePostChains(width: number, height: number): void;
        static copyDefaultOptionsFile(optionsFile: $File_): void;
        static reloadClientScripts(): void;
        static formatNumber(count: number): string;
        static CLIENT_PACKS: $Map<$GeneratedDataStage, $VirtualAssetPack>;
        static WHITE_TEXTURE: $ResourceLocation;
        static clientItemTooltips: $List<$ItemTooltipData>;
        static RECIPE_BUTTON_TEXTURE: $ResourceLocation;
        constructor();
    }
    export class $KubeJSErrorScreen$Entry extends $ObjectSelectionList$Entry<$KubeJSErrorScreen$Entry> {
        open(): void;
        constructor(errorList: $KubeJSErrorScreen$ErrorList, minecraft: $Minecraft, index: number, line: $ConsoleLine, calendar: $Calendar);
    }
    export class $KubeJSClientEventHandler {
        static setScreen(screen: $Screen): $Screen;
        static blockColors(event: $RegisterColorHandlersEvent$Block): void;
        static itemColors(event: $RegisterColorHandlersEvent$Item): void;
        static clientTick(event: $ClientTickEvent$Pre): void;
        static worldRender(event: $RenderLevelStageEvent): void;
        static registerKeyMappings(event: $RegisterKeyMappingsEvent): void;
        static registerClientExtensions(event: $RegisterClientExtensionsEvent): void;
        static registerMenuScreens(event: $RegisterMenuScreensEvent): void;
        static debugInfo(event: $CustomizeGuiOverlayEvent$DebugText): void;
        static onItemTooltip(event: $ItemTooltipEvent): void;
        static setupClient(event: $FMLClientSetupEvent): void;
        static tagsUpdated(event: $TagsUpdatedEvent): void;
        static registerParticleProviders(event: $RegisterParticleProvidersEvent): void;
        static onRegisterClientCommands(event: $RegisterClientCommandsEvent): void;
        static registerRenderers(event: $EntityRenderersEvent$RegisterRenderers): void;
        static testRequirements(mc: $Minecraft, event: $DynamicItemTooltipsKubeEvent, r: $TooltipRequirements_): boolean;
        static hudPostDraw(event: $RenderGuiEvent$Post): void;
        static addClientPacks(event: $AddPackFindersEvent): void;
        static registerCoreShaders(event: $RegisterShadersEvent): void;
        static loggingIn(event: $ClientPlayerNetworkEvent$LoggingIn): void;
        static loggingOut(event: $ClientPlayerNetworkEvent$LoggingOut): void;
        static screenPostDraw(event: $ScreenEvent$Render$Post): void;
        static guiPostInit(event: $ScreenEvent$Init$Post): void;
        static openScreenEvent(event: $ScreenEvent$Opening): void;
        static COMPONENT_ERROR: $Pattern;
        constructor();
        static set screen(value: $Screen);
        static set upClient(value: $FMLClientSetupEvent);
    }
    export class $ParticleProviderRegistryKubeEvent$SpriteSetParticleProvider<T extends $ParticleOptions> {
    }
    export interface $ParticleProviderRegistryKubeEvent$SpriteSetParticleProvider<T extends $ParticleOptions> extends $ParticleEngine$SpriteParticleRegistration<T> {
        create(sprites: $SpriteSet): $ParticleProvider<T>;
        create(type: T, clientLevel: $ClientLevel, x: number, y: number, z: number, sprites: $SpriteSet, xSpeed: number, ySpeed: number, zSpeed: number): $Particle;
    }
    /**
     * Values that may be interpreted as {@link $ParticleProviderRegistryKubeEvent$SpriteSetParticleProvider}.
     */
    export type $ParticleProviderRegistryKubeEvent$SpriteSetParticleProvider_<T> = ((type: T, clientLevel: $ClientLevel, x: number, y: number, z: number, sprites: $SpriteSet, xSpeed: number, ySpeed: number, zSpeed: number) => $Particle);
    export class $SoundsGenerator$SoundInstance {
        preload(): $SoundsGenerator$SoundInstance;
        preload(b: boolean): $SoundsGenerator$SoundInstance;
        volume(f: number): $SoundsGenerator$SoundInstance;
        pitch(f: number): $SoundsGenerator$SoundInstance;
        asReferenceToEvent(): $SoundsGenerator$SoundInstance;
        attenuationDistance(i: number): $SoundsGenerator$SoundInstance;
        toJson(): $JsonElement;
        weight(i: number): $SoundsGenerator$SoundInstance;
        stream(b: boolean): $SoundsGenerator$SoundInstance;
        stream(): $SoundsGenerator$SoundInstance;
        constructor(fileLocation: string);
    }
    export class $KubeSessionData {
        sync(data: $KubeServerData_): void;
        static of(listener: $ClientPacketListener): $KubeSessionData;
        static of(mc: $Minecraft): $KubeSessionData;
        activePostShader: $ResourceLocation;
        itemTooltips: $List<$ItemTooltipData>;
        recipeViewerData: $RecipeViewerData;
        constructor();
    }
    export class $ClientScriptManager extends $ScriptManager {
        scriptType: $ScriptType;
        canListenEvents: boolean;
        packs: $Map<string, $ScriptPack>;
        contextFactory: $KubeJSContextFactory;
        constructor();
    }
    export class $VariantBlockStateGenerator {
        variant(key: string, consumer: $Consumer_<$VariantBlockStateGenerator$Variant>): void;
        simpleVariant(key: string, model: $ResourceLocation_): void;
        toJson(): $JsonObject;
        constructor();
    }
    export class $ParticleGenerator {
        textures(textures: $List_<string>): $ParticleGenerator;
        texture(texture: string): $ParticleGenerator;
        toJson(): $JsonObject;
        constructor();
    }
    export class $EditorExt {
        static openFile(path: $Path_, line: number, column: number): void;
        static isKnownVSCode(): boolean;
        static VSCODE_OSS: string;
        static VSCODE: string;
        static VSCODIUM: string;
        constructor();
        static get knownVSCode(): boolean;
    }
    export class $MultipartBlockStateGenerator$Part {
        model(s: $ResourceLocation_): $VariantBlockStateGenerator$Model;
        toJson(): $JsonObject;
        constructor();
    }
    export class $ModelGenerator$Element {
        faces(sides: $Direction_[], face: $Consumer_<$ModelGenerator$Face>): void;
        allFaces(face: $Consumer_<$ModelGenerator$Face>): void;
        toJson(): $JsonObject;
        size(b: $AABB_): $ModelGenerator$Element;
        constructor();
    }
    export class $KubeJSKeybinds$TickingKeyEvent extends $KubeJSKeybinds$KeyEvent {
        getTicks(): number;
        constructor(player: $LocalPlayer, key: $KubeJSKeybinds$KubeKey);
        get ticks(): number;
    }
    export class $KubeJSKeybinds$KeyEvent extends $ClientPlayerKubeEvent {
        constructor(player: $LocalPlayer, key: $KubeJSKeybinds$KubeKey);
    }
    export class $KubeJSErrorScreen extends $Screen {
        canClose: boolean;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        warnings: $List<$ConsoleLine>;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        lastScreen: $Screen;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        viewing: $List<$ConsoleLine>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        scriptType: $ScriptType;
        logFile: $Path;
        narratables: $List<$NarratableEntry>;
        width: number;
        errors: $List<$ConsoleLine>;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(lastScreen: $Screen, console: $ConsoleJS, canClose: boolean);
        constructor(lastScreen: $Screen, scriptType: $ScriptType_, logFile: $Path_, errors: $List_<$ConsoleLine>, warnings: $List_<$ConsoleLine>, canClose: boolean);
    }
    export class $ClientProperties extends $BaseProperties {
        static reload(): void;
        static get(): $ClientProperties;
        exportAtlases: boolean;
        blurScaledPackIcon: boolean;
        customStackSizeText: boolean;
        shrinkStackSizeText: boolean;
        windowTitle: string;
        disableRecipeBook: boolean;
    }
}
