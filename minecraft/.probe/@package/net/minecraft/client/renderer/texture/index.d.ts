import { $QuadBounds } from "@package/ca/fxco/moreculling/api/data";
import { $SpriteContentsAnimatedTextureAccessor, $SpriteContentsTickerAccessor as $SpriteContentsTickerAccessor$1, $SpriteContentsAccessor as $SpriteContentsAccessor$2, $TextureAtlasAccessor as $TextureAtlasAccessor$1, $SimpleTextureAccessor, $SpriteContentsFrameInfoAccessor as $SpriteContentsFrameInfoAccessor$2 } from "@package/net/irisshaders/iris/mixin/texture";
import { $AnimatedTextureDuck, $IPotentiallyInvisibleSpriteContents } from "@package/com/railwayteam/railways/mixin_interfaces";
import { $SpriteContentsExtension as $SpriteContentsExtension$5, $TextureAtlasSpriteExtension } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/pipeline";
import { $TextureAtlasAccessor as $TextureAtlasAccessor$2, $TextureManagerAccessor, $MissingTextureAtlasSpriteAccessor } from "@package/org/figuramc/figura/mixin/render";
import { $TextureMetadataSection } from "@package/net/minecraft/client/resources/metadata/texture";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $FrameSize_ } from "@package/net/minecraft/client/resources/metadata/animation";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ResourceManager, $ResourceMetadata_, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener, $ResourceMetadata } from "@package/net/minecraft/server/packs/resources";
import { $SpriteContentsFrameInfoAccessor, $AnimatedTextureAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/features/textures/animations/tracking";
import { $ResourceTextureAtlasAccessor } from "@package/foundry/veil/mixin/resource/accessor";
import { $SpriteContentsInvoker } from "@package/net/caffeinemc/mods/sodium/mixin/features/textures";
import { $Map, $Set, $List, $Map_, $Collection_, $List_, $Collection } from "@package/java/util";
import { $SpriteResourceLoader, $SpriteResourceLoader_ } from "@package/net/minecraft/client/renderer/texture/atlas";
import { $MetadataSectionSerializer } from "@package/net/minecraft/server/packs/metadata";
import { $TextureType } from "@package/com/supermartijn642/fusion/api/texture";
import { $Function_ } from "@package/java/util/function";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $SpriteOpacity } from "@package/ca/fxco/moreculling/api/sprite";
import { $Path_, $Path } from "@package/java/nio/file";
import { $FactoryGuiGraphics$AtlasAccessor } from "@package/wily/factoryapi/base/client";
import { $SpriteContentsTickerAccessor, $SpriteContentsAccessor, $SpriteContentsAnimatedTextureAccessor as $SpriteContentsAnimatedTextureAccessor$1, $SpriteContentsFrameInfoAccessor as $SpriteContentsFrameInfoAccessor$1 } from "@package/net/caffeinemc/mods/sodium/mixin/features/textures/animations/upload";
import { $PBRAtlasHolder, $PBRSpriteHolder, $SpriteContentsExtension, $TextureAtlasExtension as $TextureAtlasExtension$1 } from "@package/net/irisshaders/iris/pbr/texture";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $SpriteFinderImpl$SpriteFinderAccess as $SpriteFinderImpl$SpriteFinderAccess$1 } from "@package/appeng/thirdparty/fabric";
import { $RuntimeException, $Record, $AutoCloseable, $Runnable_ } from "@package/java/lang";
import { $File_, $File, $IOException, $Closeable } from "@package/java/io";
import { $SpriteContentsExtension as $SpriteContentsExtension$3 } from "@package/net/irisshaders/iris/pbr";
import { $TextureAtlasSpriteExtension as $TextureAtlasSpriteExtension$1, $SpriteContentsExtension as $SpriteContentsExtension$4 } from "@package/com/supermartijn642/fusion/extensions";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $IMixinDynamicTexture } from "@package/de/keksuccino/konkrete/mixin/mixins/client";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $TextureAtlasExtension, $TextureManagerExtension, $AbstractTextureExtension } from "@package/foundry/veil/ext";
import { $Darkness$DynamicTextureHook } from "@package/me/srrapero720/chloride/impl";
import { $SpriteFinderImpl$SpriteFinderAccess, $SpriteFinderImpl } from "@package/net/fabricmc/fabric/impl/renderer";
import { $IntStream } from "@package/java/util/stream";
import { $IExtendedSimpleTexture } from "@package/io/redspace/ironsspellbooks/render";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $TickerExtension, $SpriteContentsExtension as $SpriteContentsExtension$2 } from "@package/dev/simulated_team/simulated/mixin_interface";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $SpriteContentsAccessor as $SpriteContentsAccessor$1 } from "@package/ca/fxco/moreculling/mixin/accessors";
import { $SpriteContentsExtension as $SpriteContentsExtension$1 } from "@package/net/caffeinemc/mods/sodium/client/render/texture";
import { $TextureAtlasAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/core/render/texture";
import { $Pair } from "@package/com/supermartijn642/fusion/api/util";
export * as atlas from "@package/net/minecraft/client/renderer/texture/atlas";

declare module "@package/net/minecraft/client/renderer/texture" {
    export class $StitcherException extends $RuntimeException {
        getAllSprites(): $Collection<$Stitcher$Entry>;
        constructor(arg0: $Stitcher$Entry, arg1: $Collection_<$Stitcher$Entry>);
        get allSprites(): $Collection<$Stitcher$Entry>;
    }
    export class $Stitcher<T extends $Stitcher$Entry> {
        stitch(): void;
        getWidth(): number;
        getHeight(): number;
        registerSprite(arg0: T): void;
        gatherSprites(arg0: $Stitcher$SpriteLoader_<T>): void;
        constructor(arg0: number, arg1: number, arg2: number);
        get width(): number;
        get height(): number;
    }
    export class $SpriteTicker {
    }
    export interface $SpriteTicker extends $AutoCloseable {
        tickAndUpload(arg0: number, arg1: number): void;
        close(): void;
    }
    export class $AbstractTexture implements $AutoCloseable, $AbstractTextureExtension {
        restoreLastBlurMipmap(): void;
        releaseId(): void;
        handler$baj000$veil$bind(arg0: $CallbackInfo): void;
        setBlurMipmap(arg0: boolean, arg1: boolean): void;
        handler$baj000$veil$setFilterDSA(arg0: boolean, arg1: boolean, arg2: $CallbackInfo, arg3: number, arg4: number): void;
        setFilter(arg0: boolean, arg1: boolean): void;
        bind(): void;
        reset(arg0: $TextureManager, arg1: $ResourceManager, arg2: $ResourceLocation_, arg3: $Executor_): void;
        load(arg0: $ResourceManager): void;
        getId(): number;
        close(): void;
        getTextureTarget(): number;
        static NOT_ASSIGNED: number;
        constructor();
        get id(): number;
        get textureTarget(): number;
    }
    export class $OverlayTexture implements $AutoCloseable {
        setupOverlayColor(): void;
        teardownOverlayColor(): void;
        static pack(arg0: number, arg1: boolean): number;
        static pack(arg0: number, arg1: number): number;
        static u(arg0: number): number;
        static v(arg0: boolean): number;
        close(): void;
        static NO_WHITE_U: number;
        static WHITE_OVERLAY_V: number;
        static NO_OVERLAY: number;
        static RED_OVERLAY_V: number;
        constructor();
    }
    export class $Dumpable {
    }
    export interface $Dumpable {
        dumpContents(arg0: $ResourceLocation_, arg1: $Path_): void;
    }
    /**
     * Values that may be interpreted as {@link $Dumpable}.
     */
    export type $Dumpable_ = ((arg0: $ResourceLocation, arg1: $Path) => void);
    export class $HttpTexture extends $SimpleTexture {
        static NOT_ASSIGNED: number;
        file: $File;
        urlString: string;
        constructor(arg0: $File_, arg1: string, arg2: $ResourceLocation_, arg3: boolean, arg4: $Runnable_);
    }
    export class $SpriteContents$InterpolationData implements $AutoCloseable {
        handler$dak000$sodium$assignParent(arg0: $SpriteContents, arg1: $CallbackInfo): void;
        close(): void;
    }
    export class $SpriteLoader$Preparations extends $Record {
        mipLevel(): number;
        regions(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        readyForUpload(): $CompletableFuture<void>;
        waitForUpload(): $CompletableFuture<$SpriteLoader$Preparations>;
        width(): number;
        height(): number;
        missing(): $TextureAtlasSprite;
        constructor(width: number, height: number, mipLevel: number, missing: $TextureAtlasSprite, regions: $Map_<$ResourceLocation_, $TextureAtlasSprite>, readyForUpload: $CompletableFuture<void>);
    }
    /**
     * Values that may be interpreted as {@link $SpriteLoader$Preparations}.
     */
    export type $SpriteLoader$Preparations_ = { regions?: $Map_<$ResourceLocation_, $TextureAtlasSprite>, mipLevel?: number, readyForUpload?: $CompletableFuture<void>, width?: number, missing?: $TextureAtlasSprite, height?: number,  } | [regions?: $Map_<$ResourceLocation_, $TextureAtlasSprite>, mipLevel?: number, readyForUpload?: $CompletableFuture<void>, width?: number, missing?: $TextureAtlasSprite, height?: number, ];
    export class $Tickable {
    }
    export interface $Tickable {
        tick(): void;
    }
    /**
     * Values that may be interpreted as {@link $Tickable}.
     */
    export type $Tickable_ = (() => void);
    export class $Stitcher$Holder<T extends $Stitcher$Entry> extends $Record {
        width(): number;
        height(): number;
        entry(): T;
        constructor(arg0: T, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $Stitcher$Holder}.
     */
    export type $Stitcher$Holder_<T> = { entry?: $Stitcher$Entry, width?: number, height?: number,  } | [entry?: $Stitcher$Entry, width?: number, height?: number, ];
    export class $SpriteLoader {
        stitch(arg0: $List_<$SpriteContents>, arg1: number, arg2: $Executor_): $SpriteLoader$Preparations;
        static runSpriteSuppliers(arg0: $SpriteResourceLoader_, arg1: $List_<$Function_<$SpriteResourceLoader, $SpriteContents>>, arg2: $Executor_): $CompletableFuture<$List<$SpriteContents>>;
        loadAndStitch(arg0: $ResourceManager, arg1: $ResourceLocation_, arg2: number, arg3: $Executor_, arg4: $Collection_<$MetadataSectionSerializer<never>>): $CompletableFuture<$SpriteLoader$Preparations>;
        loadAndStitch(arg0: $ResourceManager, arg1: $ResourceLocation_, arg2: number, arg3: $Executor_): $CompletableFuture<$SpriteLoader$Preparations>;
        handler$eod000$factory_api$loadAndStitch(cir: $CallbackInfoReturnable<any>, types: $LocalRef<any>): void;
        static create(arg0: $TextureAtlas): $SpriteLoader;
        static DEFAULT_METADATA_SECTIONS: $Set<$MetadataSectionSerializer<never>>;
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number);
    }
    export class $Stitcher$SpriteLoader<T extends $Stitcher$Entry> {
    }
    export interface $Stitcher$SpriteLoader<T extends $Stitcher$Entry> {
        load(arg0: T, arg1: number, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Stitcher$SpriteLoader}.
     */
    export type $Stitcher$SpriteLoader_<T> = ((arg0: T, arg1: number, arg2: number) => void);
    export class $MissingTextureAtlasSprite implements $MissingTextureAtlasSpriteAccessor {
        static generateImage$figura_$md$68cb88$0(arg0: number, arg1: number): $NativeImage;
        static create(): $SpriteContents;
        static getTexture(): $DynamicTexture;
        static getLocation(): $ResourceLocation;
        constructor();
        static get texture(): $DynamicTexture;
        static get location(): $ResourceLocation;
    }
    export class $SpriteContents$FrameInfo implements $SpriteContentsFrameInfoAccessor$2, $SpriteContentsFrameInfoAccessor, $SpriteContentsFrameInfoAccessor$1 {
        getIndex(): number;
        getTime(): number;
        index: number;
        time: number;
    }
    export class $Stitcher$Entry {
    }
    export interface $Stitcher$Entry {
        width(): number;
        height(): number;
        name(): $ResourceLocation;
    }
    export class $PreloadedTexture extends $SimpleTexture {
        getFuture(): $CompletableFuture<void>;
        static NOT_ASSIGNED: number;
        constructor(arg0: $ResourceManager, arg1: $ResourceLocation_, arg2: $Executor_);
        get future(): $CompletableFuture<void>;
    }
    export class $SpriteContents$Ticker implements $SpriteTicker, $SpriteContentsTickerAccessor$1, $SpriteContentsTickerAccessor, $TickerExtension {
        tickAndUpload(arg0: number, arg1: number): void;
        simulated$isPlaying(): boolean;
        simulated$setPlaying(arg0: boolean): void;
        handler$daj000$sodium$assignParent(arg0: $SpriteContents, arg1: $SpriteContents$AnimatedTexture, arg2: $SpriteContents$InterpolationData, arg3: $CallbackInfo): void;
        close(): void;
        getFrameTicks(): number;
        getSubFrame(): number;
        setSubFrame(arg0: number): void;
        getAnimationInfo(): $SpriteContents$AnimatedTexture;
        setFrame(arg0: number): void;
        getFrame(): number;
        getFrameIndex(): number;
        get frameTicks(): number;
        get animationInfo(): $SpriteContents$AnimatedTexture;
        get frameIndex(): number;
    }
    export class $SpriteContents implements $Stitcher$Entry, $AutoCloseable, $SpriteContentsExtension$3, $SpriteContentsAccessor$2, $SpriteContentsExtension, $SpriteContentsExtension$4, $SpriteContentsInvoker, $SpriteContentsExtension$1, $SpriteContentsAccessor, $SpriteContentsExtension$5, $SpriteContentsAccessor$1, $SpriteContentsExtension$2, $IPotentiallyInvisibleSpriteContents {
        upload(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $NativeImage[]): void;
        uploadFirstFrame(arg0: number, arg1: number): void;
        getPBRHolder(): $PBRSpriteHolder;
        getOrCreatePBRHolder(): $PBRSpriteHolder;
        createTicker(): $SpriteTicker;
        getOriginalImage(): $NativeImage;
        fusionTextureMetadata(): $Pair<any, any>;
        sodium$hasTranslucentPixels(): boolean;
        railways$shouldDoInvisibility(): boolean;
        increaseMipLevel(arg0: number): void;
        sodium$hasTransparentPixels(): boolean;
        handler$eoj000$factory_api$increaseMipLevel(i: number, ci: $CallbackInfo): void;
        getFrameCount(): number;
        getUniqueFrames(): $IntStream;
        isTransparent(arg0: number, arg1: number, arg2: number): boolean;
        getCreatedTicker(): $SpriteContents$Ticker;
        clearFusionTextureMetadata(): void;
        sodium$setActive(arg0: boolean): void;
        sodium$hasAnimation(): boolean;
        sodium$isActive(): boolean;
        simulated$getTicker(): $SpriteContents$Ticker;
        simulated$setTicker(arg0: $SpriteContents$Ticker): void;
        railways$uploadFrame(arg0: boolean): void;
        railways$isVisible(): boolean;
        width(): number;
        height(): number;
        metadata(): $ResourceMetadata;
        name(): $ResourceLocation;
        close(): void;
        getAnimatedTexture(): $SpriteContents$AnimatedTexture;
        invokeUpload(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $NativeImage[]): void;
        getImages(): $NativeImage[];
        getImage(): $NativeImage;
        animatedTexture: $SpriteContents$AnimatedTexture;
        byMipLevel: $NativeImage[];
        originalImage: $NativeImage;
        constructor(arg0: $ResourceLocation_, arg1: $FrameSize_, arg2: $NativeImage, arg3: $ResourceMetadata_);
        get PBRHolder(): $PBRSpriteHolder;
        get orCreatePBRHolder(): $PBRSpriteHolder;
        get frameCount(): number;
        get uniqueFrames(): $IntStream;
        get createdTicker(): $SpriteContents$Ticker;
        get images(): $NativeImage[];
        get image(): $NativeImage;
    }
    export class $DynamicTexture extends $AbstractTexture implements $Dumpable, $IMixinDynamicTexture, $Darkness$DynamicTextureHook {
        upload(): void;
        wrapOperation$mbk000$moonlight$forceMipMap(instance: $NativeImage, a: number, b: number, c: number, autoClose: boolean, op: $Operation_<any>): void;
        wrapOperation$mbk000$moonlight$forceMipMap(a: number, b: number, c: number, op: $Operation_<any>): void;
        chloride$enableDarkness(): void;
        dumpContents(pResourceLocation: $ResourceLocation_, pPath: $Path_): void;
        getPixels(): $NativeImage;
        setPixels(arg0: $NativeImage): void;
        getPixelsKonkrete(): $NativeImage;
        setPixelsKonkrete(arg0: $NativeImage): void;
        static NOT_ASSIGNED: number;
        constructor(arg0: $NativeImage);
        constructor(arg0: number, arg1: number, arg2: boolean);
    }
    export class $SpriteContents$AnimatedTexture implements $SpriteContentsAnimatedTextureAccessor, $AnimatedTextureAccessor, $SpriteContentsAnimatedTextureAccessor$1, $AnimatedTextureDuck {
        uploadFirstFrame(arg0: number, arg1: number): void;
        createTicker(): $SpriteTicker;
        getFrameX(arg0: number): number;
        getFrameY(arg0: number): number;
        uploadFrame(arg0: number, arg1: number, arg2: number): void;
        getUniqueFrames(): $IntStream;
        railways$uploadWithVisibility(): void;
        getFrames(): $List<$SpriteContents$FrameInfo>;
        invokeUploadFrame(arg0: number, arg1: number, arg2: number): void;
        getFrameRowSize(): number;
        frames: $List<$SpriteContents$FrameInfo>;
        frameRowSize: number;
        interpolateFrames: boolean;
        get uniqueFrames(): $IntStream;
    }
    export class $TextureAtlas extends $AbstractTexture implements $Dumpable, $Tickable, $TextureAtlasAccessor$2, $TextureAtlasAccessor$1, $TextureAtlasExtension$1, $ResourceTextureAtlasAccessor, $TextureAtlasExtension, $TextureAtlasAccessor, $SpriteFinderImpl$SpriteFinderAccess, $FactoryGuiGraphics$AtlasAccessor, $SpriteFinderImpl$SpriteFinderAccess$1 {
        upload(arg0: $SpriteLoader$Preparations_): void;
        getSprite(arg0: $ResourceLocation_): $TextureAtlasSprite;
        dumpContents(arg0: $ResourceLocation_, arg1: $Path_): void;
        fabric_spriteFinder(): $SpriteFinderImpl;
        clearTextureData(): void;
        maxSupportedTextureSize(): number;
        cycleAnimationFrames(): void;
        updateFilter(arg0: $SpriteLoader$Preparations_): void;
        getTextures(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        getPBRHolder(): $PBRAtlasHolder;
        getOrCreatePBRHolder(): $PBRAtlasHolder;
        veil$hasTexture(arg0: $ResourceLocation_): boolean;
        getTexturesByName(): $Map<any, any>;
        tick(): void;
        location(): $ResourceLocation;
        getMipLevel(): number;
        callGetWidth(): number;
        callGetHeight(): number;
        getWidth(): number;
        getHeight(): number;
        static NOT_ASSIGNED: number;
        /**
         * @deprecated
         */
        static LOCATION_BLOCKS: $ResourceLocation;
        /**
         * @deprecated
         */
        static LOCATION_PARTICLES: $ResourceLocation;
        texturesByName: $Map<$ResourceLocation, $TextureAtlasSprite>;
        sprites: $List<$SpriteContents>;
        constructor(arg0: $ResourceLocation_);
        get textures(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        get PBRHolder(): $PBRAtlasHolder;
        get orCreatePBRHolder(): $PBRAtlasHolder;
        get mipLevel(): number;
        get width(): number;
        get height(): number;
    }
    export class $Stitcher$Region<T extends $Stitcher$Entry> {
        getY(): number;
        getX(): number;
        walk(arg0: $Stitcher$SpriteLoader_<T>): void;
        add(arg0: $Stitcher$Holder_<T>): boolean;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get y(): number;
        get x(): number;
    }
    export class $SimpleTexture extends $AbstractTexture implements $SimpleTextureAccessor, $IExtendedSimpleTexture {
        irons_spellbooks$isRectangular(): boolean;
        getLocation(): $ResourceLocation;
        static NOT_ASSIGNED: number;
        constructor(arg0: $ResourceLocation_);
        get location(): $ResourceLocation;
    }
    export class $TextureManager implements $PreparableReloadListener, $Tickable, $AutoCloseable, $TextureManagerExtension, $IdentifiableResourceReloadListener, $TextureManagerAccessor {
        preload(arg0: $ResourceLocation_, arg1: $Executor_): $CompletableFuture<void>;
        getFabricId(): $ResourceLocation;
        getFabricDependencies(): $Collection<any>;
        dumpAllSheets(arg0: $Path_): void;
        veil$registerPreloadedTexture(arg0: $ResourceLocation_, arg1: $AbstractTexture, arg2: $Executor_): $CompletableFuture<any>;
        tick(): void;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        bindForSetup(arg0: $ResourceLocation_): void;
        handler$zpn000$veil$applyLabel(arg0: $ResourceLocation_, arg1: $AbstractTexture, arg2: $CallbackInfo): void;
        modify$bbg000$veil$wrap(arg0: $AbstractTexture, arg1: $ResourceLocation_): $AbstractTexture;
        release(arg0: $ResourceLocation_): void;
        getTexture(arg0: $ResourceLocation_): $AbstractTexture;
        getTexture(arg0: $ResourceLocation_, arg1: $AbstractTexture): $AbstractTexture;
        register(arg0: $ResourceLocation_, arg1: $AbstractTexture): void;
        register(arg0: string, arg1: $DynamicTexture): $ResourceLocation;
        close(): void;
        getName(): string;
        getByPath(): $Map<$ResourceLocation, $AbstractTexture>;
        byPath: $Map<$ResourceLocation, $AbstractTexture>;
        static INTENTIONAL_MISSING_TEXTURE: $ResourceLocation;
        constructor(arg0: $ResourceManager);
        get fabricId(): $ResourceLocation;
        get fabricDependencies(): $Collection<any>;
        get name(): string;
    }
    export class $TextureAtlasSprite implements $TextureAtlasSpriteExtension$1, $TextureAtlasSpriteExtension, $SpriteOpacity {
        atlasLocation(): $ResourceLocation;
        getU0(): number;
        getU1(): number;
        getV0(): number;
        getU(arg0: number): number;
        getV(arg0: number): number;
        getPixelRGBA(arg0: number, arg1: number, arg2: number): number;
        uploadFirstFrame(): void;
        createTicker(): $TextureAtlasSprite$Ticker;
        getY(): number;
        getX(): number;
        contents(): $SpriteContents;
        moreculling$hasTransparency(): boolean;
        moreculling$hasTransparency(arg0: $QuadBounds): boolean;
        uvShrinkRatio(): number;
        sodium$hasUnknownImageContents(): boolean;
        getUOffset(arg0: number): number;
        getVOffset(arg0: number): number;
        setFusionTextureType(type: $TextureType<any>): void;
        getFusionTextureType(): $TextureType<any>;
        moreculling$getUnmipmappedImage(): $NativeImage;
        moreculling$hasTranslucency(): boolean;
        moreculling$hasTranslucency(arg0: $QuadBounds): boolean;
        moreculling$hasTranslucency(arg0: $List_<any>): boolean;
        moreculling$hasTranslucency(arg0: $QuadBounds, arg1: $List_<any>): boolean;
        getV1(): number;
        wrap(arg0: $VertexConsumer): $VertexConsumer;
        v0: number;
        u0: number;
        v1: number;
        u1: number;
        constructor(arg0: $ResourceLocation_, arg1: $SpriteContents, arg2: number, arg3: number, arg4: number, arg5: number);
        get y(): number;
        get x(): number;
    }
    export class $SimpleTexture$TextureImage implements $Closeable {
        throwIfError(): void;
        getTextureMetadata(): $TextureMetadataSection;
        getImage(): $NativeImage;
        static load(arg0: $ResourceManager, arg1: $ResourceLocation_): $SimpleTexture$TextureImage;
        close(): void;
        constructor(arg0: $IOException);
        constructor(arg0: $TextureMetadataSection, arg1: $NativeImage);
        get textureMetadata(): $TextureMetadataSection;
        get image(): $NativeImage;
    }
    export class $MipmapGenerator {
        static generateMipLevels(arg0: $NativeImage[], arg1: number): $NativeImage[];
    }
    export class $TextureAtlasSprite$Ticker {
    }
    export interface $TextureAtlasSprite$Ticker extends $AutoCloseable {
        tickAndUpload(): void;
        close(): void;
    }
}
