import { $CodecReloadListener } from "@package/foundry/veil/api";
import { $Codec } from "@package/com/mojang/serialization";
import { $ResourceLocation_, $ResourceLocation, $FileToIdConverter } from "@package/net/minecraft/resources";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $MolangExpression_, $MolangExpression, $MolangEnvironment } from "@package/gg/moonflower/molangcompiler/api";
import { $TextureFilter, $TextureFilter_, $TextureFilter$Wrap_, $TextureFilter$CompareFunction_ } from "@package/foundry/veil/api/client/render/texture";
import { $AbstractTexture } from "@package/net/minecraft/client/renderer/texture";
import { $Map } from "@package/java/util";
import { $Enum, $Record, $Cloneable } from "@package/java/lang";
import { $NativeResource } from "@package/org/lwjgl/system";

declare module "@package/foundry/veil/api/client/render/framebuffer" {
    export class $FramebufferAttachmentDefinition$Format extends $Enum<$FramebufferAttachmentDefinition$Format> {
        getInternalFormat(): number;
        getFormat(): number;
        static values(): $FramebufferAttachmentDefinition$Format[];
        static valueOf(arg0: string): $FramebufferAttachmentDefinition$Format;
        static RGB16F: $FramebufferAttachmentDefinition$Format;
        static RGB4: $FramebufferAttachmentDefinition$Format;
        static R11F_G11F_B10F: $FramebufferAttachmentDefinition$Format;
        static RGB16I: $FramebufferAttachmentDefinition$Format;
        static RG32UI: $FramebufferAttachmentDefinition$Format;
        static RGB16UI: $FramebufferAttachmentDefinition$Format;
        static RGBA16_SNORM: $FramebufferAttachmentDefinition$Format;
        static R16F: $FramebufferAttachmentDefinition$Format;
        static RGB32I: $FramebufferAttachmentDefinition$Format;
        static RGB8UI: $FramebufferAttachmentDefinition$Format;
        static RGB8: $FramebufferAttachmentDefinition$Format;
        static RGB5: $FramebufferAttachmentDefinition$Format;
        static RGB32F: $FramebufferAttachmentDefinition$Format;
        static RGBA: $FramebufferAttachmentDefinition$Format;
        static RGB565: $FramebufferAttachmentDefinition$Format;
        static R32F: $FramebufferAttachmentDefinition$Format;
        static R16I: $FramebufferAttachmentDefinition$Format;
        static R8UI: $FramebufferAttachmentDefinition$Format;
        static DEPTH_COMPONENT32F: $FramebufferAttachmentDefinition$Format;
        static R32I: $FramebufferAttachmentDefinition$Format;
        static R32UI: $FramebufferAttachmentDefinition$Format;
        static RGBA8: $FramebufferAttachmentDefinition$Format;
        static RG8I: $FramebufferAttachmentDefinition$Format;
        static RGBA12: $FramebufferAttachmentDefinition$Format;
        static RGBA32UI: $FramebufferAttachmentDefinition$Format;
        static DEPTH24_STENCIL8: $FramebufferAttachmentDefinition$Format;
        static RG8: $FramebufferAttachmentDefinition$Format;
        static CODEC: $Codec<$FramebufferAttachmentDefinition$Format>;
        static RGBA4: $FramebufferAttachmentDefinition$Format;
        static RGB5_A1: $FramebufferAttachmentDefinition$Format;
        static R8: $FramebufferAttachmentDefinition$Format;
        static RGB9_E5: $FramebufferAttachmentDefinition$Format;
        static RGB10: $FramebufferAttachmentDefinition$Format;
        static RGB12: $FramebufferAttachmentDefinition$Format;
        static RGBA16F: $FramebufferAttachmentDefinition$Format;
        static BGRA: $FramebufferAttachmentDefinition$Format;
        static RGB: $FramebufferAttachmentDefinition$Format;
        static BGR: $FramebufferAttachmentDefinition$Format;
        static RGBA16: $FramebufferAttachmentDefinition$Format;
        static R16_SNORM: $FramebufferAttachmentDefinition$Format;
        static RGBA8I: $FramebufferAttachmentDefinition$Format;
        static RGBA32I: $FramebufferAttachmentDefinition$Format;
        static RGBA8_SNORM: $FramebufferAttachmentDefinition$Format;
        static RGBA32F: $FramebufferAttachmentDefinition$Format;
        static RG: $FramebufferAttachmentDefinition$Format;
        static RGB16: $FramebufferAttachmentDefinition$Format;
        static RGBA16I: $FramebufferAttachmentDefinition$Format;
        static DEPTH_COMPONENT16: $FramebufferAttachmentDefinition$Format;
        static RG16: $FramebufferAttachmentDefinition$Format;
        static RGBA8UI: $FramebufferAttachmentDefinition$Format;
        static RGB10_A2: $FramebufferAttachmentDefinition$Format;
        static RGB32UI: $FramebufferAttachmentDefinition$Format;
        static RG16UI: $FramebufferAttachmentDefinition$Format;
        static RGB8_SNORM: $FramebufferAttachmentDefinition$Format;
        static DEPTH_COMPONENT: $FramebufferAttachmentDefinition$Format;
        static RG16F: $FramebufferAttachmentDefinition$Format;
        static SRGB8: $FramebufferAttachmentDefinition$Format;
        static RG16I: $FramebufferAttachmentDefinition$Format;
        static R16UI: $FramebufferAttachmentDefinition$Format;
        static RG32I: $FramebufferAttachmentDefinition$Format;
        static RG8UI: $FramebufferAttachmentDefinition$Format;
        static SRGB8_ALPHA8: $FramebufferAttachmentDefinition$Format;
        static RG32F: $FramebufferAttachmentDefinition$Format;
        static RG16_SNORM: $FramebufferAttachmentDefinition$Format;
        static DEPTH32F_STENCIL8: $FramebufferAttachmentDefinition$Format;
        static RGB10_A2UI: $FramebufferAttachmentDefinition$Format;
        static RGBA2: $FramebufferAttachmentDefinition$Format;
        static RGB8I: $FramebufferAttachmentDefinition$Format;
        static VALUES: $FramebufferAttachmentDefinition$Format[];
        static SRGB: $FramebufferAttachmentDefinition$Format;
        static DEPTH_COMPONENT24: $FramebufferAttachmentDefinition$Format;
        static RGB16_SNORM: $FramebufferAttachmentDefinition$Format;
        static R8I: $FramebufferAttachmentDefinition$Format;
        static COMPRESSED_SRGB_ALPHA: $FramebufferAttachmentDefinition$Format;
        static SRGB_ALPHA: $FramebufferAttachmentDefinition$Format;
        static RGBA16UI: $FramebufferAttachmentDefinition$Format;
        static RED: $FramebufferAttachmentDefinition$Format;
        static R16: $FramebufferAttachmentDefinition$Format;
        static R8_SNORM: $FramebufferAttachmentDefinition$Format;
        static COMPRESSED_SRGB: $FramebufferAttachmentDefinition$Format;
        static DEPTH_STENCIL: $FramebufferAttachmentDefinition$Format;
        static DEPTH_COMPONENT32: $FramebufferAttachmentDefinition$Format;
        static RG8_SNORM: $FramebufferAttachmentDefinition$Format;
        static R3_G3_B2: $FramebufferAttachmentDefinition$Format;
        get internalFormat(): number;
        get format(): number;
    }
    /**
     * Values that may be interpreted as {@link $FramebufferAttachmentDefinition$Format}.
     */
    export type $FramebufferAttachmentDefinition$Format_ = "red" | "rg" | "rgb" | "bgr" | "rgba" | "bgra" | "depth_component" | "depth_stencil" | "r8" | "r8_snorm" | "r16" | "r16_snorm" | "rg8" | "rg8_snorm" | "rg16" | "rg16_snorm" | "r3_g3_b2" | "rgb4" | "rgb5" | "rgb565" | "rgb8" | "rgb8_snorm" | "rgb10" | "rgb12" | "rgb16" | "rgb16_snorm" | "rgba2" | "rgba4" | "rgb5_a1" | "rgba8" | "rgba8_snorm" | "rgb10_a2" | "rgb10_a2ui" | "rgba12" | "rgba16" | "rgba16_snorm" | "srgb" | "srgb8" | "srgb_alpha" | "srgb8_alpha8" | "compressed_srgb" | "compressed_srgb_alpha" | "r16f" | "rg16f" | "rgb16f" | "rgba16f" | "r32f" | "rg32f" | "rgb32f" | "rgb9_e5" | "rgba32f" | "r11f_g11f_b10f" | "r8i" | "r8ui" | "r16i" | "r16ui" | "r32i" | "r32ui" | "rg8i" | "rg8ui" | "rg16i" | "rg16ui" | "rg32i" | "rg32ui" | "rgb8i" | "rgb8ui" | "rgb16i" | "rgb16ui" | "rgb32i" | "rgb32ui" | "rgba8i" | "rgba8ui" | "rgba16i" | "rgba16ui" | "rgba32i" | "rgba32ui" | "depth_component16" | "depth_component24" | "depth_component32" | "depth_component32f" | "depth24_stencil8" | "depth32f_stencil8";
    export class $AdvancedFbo$Builder {
        setCompareFunction(arg0: $TextureFilter$CompareFunction_): $AdvancedFbo$Builder;
        addAttachments(arg0: $AdvancedFbo): $AdvancedFbo$Builder;
        addAttachments(arg0: $RenderTarget): $AdvancedFbo$Builder;
        addColorTextureBuffer(arg0: number, arg1: number): $AdvancedFbo$Builder;
        addColorTextureBuffer(): $AdvancedFbo$Builder;
        setDepthTextureWrapper(arg0: number, arg1: number): $AdvancedFbo$Builder;
        setDepthTextureWrapper(arg0: number): $AdvancedFbo$Builder;
        setDebugLabel(arg0: string): $AdvancedFbo$Builder;
        addColorRenderBuffer(): $AdvancedFbo$Builder;
        addColorRenderBuffer(arg0: number, arg1: number): $AdvancedFbo$Builder;
        setDepthRenderBuffer(): $AdvancedFbo$Builder;
        setDepthRenderBuffer(arg0: number, arg1: number): $AdvancedFbo$Builder;
        setWrapT(arg0: number): $AdvancedFbo$Builder;
        setWrapT(arg0: $TextureFilter$Wrap_): $AdvancedFbo$Builder;
        addColorBuffer(arg0: $AdvancedFboAttachment): $AdvancedFbo$Builder;
        setWrapS(arg0: number): $AdvancedFbo$Builder;
        setWrapS(arg0: $TextureFilter$Wrap_): $AdvancedFbo$Builder;
        setBorderColor(arg0: number): $AdvancedFbo$Builder;
        setAnisotropy(arg0: number): $AdvancedFbo$Builder;
        setDepthBuffer(arg0: $AdvancedFboAttachment): $AdvancedFbo$Builder;
        setLevels(arg0: number): $AdvancedFbo$Builder;
        setFilter(arg0: boolean, arg1: boolean): $AdvancedFbo$Builder;
        setFilter(arg0: $TextureFilter_): $AdvancedFbo$Builder;
        setFormat(arg0: $FramebufferAttachmentDefinition$Format_): $AdvancedFbo$Builder;
        setFormat(arg0: number, arg1: number): $AdvancedFbo$Builder;
        addColorTextureWrapper(arg0: number, arg1: number): $AdvancedFbo$Builder;
        addColorTextureWrapper(arg0: number): $AdvancedFbo$Builder;
        setDepthTextureBuffer(): $AdvancedFbo$Builder;
        setDepthTextureBuffer(arg0: number, arg1: number): $AdvancedFbo$Builder;
        setWrap(arg0: $TextureFilter$Wrap_, arg1: $TextureFilter$Wrap_): $AdvancedFbo$Builder;
        setWrap(arg0: number, arg1: number): $AdvancedFbo$Builder;
        build(arg0: boolean): $AdvancedFbo;
        setName(arg0: string): $AdvancedFbo$Builder;
        constructor(arg0: number, arg1: number);
        set compareFunction(value: $TextureFilter$CompareFunction_);
        set debugLabel(value: string);
        set borderColor(value: number);
        set anisotropy(value: number);
        set depthBuffer(value: $AdvancedFboAttachment);
        set levels(value: number);
        set name(value: string);
    }
    export class $AdvancedFbo {
        static withSize(arg0: number, arg1: number): $AdvancedFbo$Builder;
        static unbindRead(): void;
        static getMainFramebuffer(): $AdvancedFbo;
        static unbindDraw(): void;
        static unbind(): void;
        static copy(arg0: $RenderTarget): $AdvancedFbo$Builder;
        static copy(arg0: $AdvancedFbo): $AdvancedFbo$Builder;
        static get mainFramebuffer(): $AdvancedFbo;
    }
    export interface $AdvancedFbo extends $NativeResource {
        bindRead(): void;
        isColorTextureAttachment(arg0: number): boolean;
        getColorTextureAttachment(arg0: number): $AdvancedFboTextureAttachment;
        getDepthTextureAttachment(): $AdvancedFboTextureAttachment;
        getClearMask(): number;
        getDrawBuffers(): number[];
        resolveToAdvancedFbo(arg0: $AdvancedFbo, arg1: number, arg2: number): void;
        resolveToAdvancedFbo(arg0: $AdvancedFbo): void;
        resolveToRenderTarget(arg0: $RenderTarget): void;
        resolveToRenderTarget(arg0: $RenderTarget, arg1: number, arg2: number): void;
        hasColorAttachment(arg0: number): boolean;
        getColorAttachment(arg0: number): $AdvancedFboAttachment;
        setColorAttachmentTexture(arg0: number, arg1: number, arg2: number): void;
        setColorAttachmentTexture(arg0: number, arg1: number): void;
        isColorRenderAttachment(arg0: number): boolean;
        hasDepthAttachment(): boolean;
        getDepthAttachment(): $AdvancedFboAttachment;
        hasStencilAttachment(): boolean;
        getDebugLabel(): string;
        isDepthTextureAttachment(): boolean;
        setDepthAttachmentTexture(arg0: number, arg1: number): void;
        setDepthAttachmentTexture(arg0: number): void;
        isDepthMutableTextureAttachment(): boolean;
        isDepthRenderAttachment(): boolean;
        resetDrawBuffers(): void;
        drawBuffers(...arg0: number[]): void;
        bindDraw(arg0: boolean): void;
        resolveToFbo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        resolveToScreen(arg0: number, arg1: number): void;
        resolveToScreen(): void;
        getColorAttachments(): number;
        getColorRenderAttachment(arg0: number): $AdvancedFboRenderAttachment;
        getDepthRenderAttachment(): $AdvancedFboRenderAttachment;
        toRenderTarget(): $RenderTarget;
        isMutableColorTextureAttachment(arg0: number): boolean;
        bind(arg0: boolean): void;
        getWidth(): number;
        getHeight(): number;
        create(): void;
        clear(arg0: number, ...arg1: number[]): void;
        clear(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        clear(arg0: number): void;
        clear(): void;
        clear(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, ...arg6: number[]): void;
        clear(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, ...arg5: number[]): void;
        clear(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getId(): number;
        get clearMask(): number;
        get depthAttachment(): $AdvancedFboAttachment;
        get debugLabel(): string;
        get depthMutableTextureAttachment(): boolean;
        get colorAttachments(): number;
        get width(): number;
        get height(): number;
        get id(): number;
    }
    export class $FramebufferManager extends $CodecReloadListener<$FramebufferDefinition> implements $NativeResource {
        getFramebuffer(arg0: $ResourceLocation_): $AdvancedFbo;
        removeFramebuffer(arg0: $ResourceLocation_): $AdvancedFbo;
        setFramebuffer(arg0: $ResourceLocation_, arg1: $AdvancedFbo): void;
        resizeFramebuffers(arg0: number, arg1: number): void;
        setDefinition(arg0: $ResourceLocation_, arg1: $FramebufferDefinition_): void;
        getFramebufferDefinition(arg0: $ResourceLocation_): $FramebufferDefinition;
        getFramebuffers(): $Map<$ResourceLocation, $AdvancedFbo>;
        free(): void;
        clear(): void;
        close(): void;
        static FRAMEBUFFER_LISTER: $FileToIdConverter;
        static FRAMEBUFFER_CODEC: $Codec<$ResourceLocation>;
        constructor();
        get framebuffers(): $Map<$ResourceLocation, $AdvancedFbo>;
    }
    export class $FramebufferAttachmentDefinition$Type extends $Enum<$FramebufferAttachmentDefinition$Type> {
        getDisplayName(): string;
        static values(): $FramebufferAttachmentDefinition$Type[];
        static valueOf(arg0: string): $FramebufferAttachmentDefinition$Type;
        static TEXTURE: $FramebufferAttachmentDefinition$Type;
        static RENDER_BUFFER: $FramebufferAttachmentDefinition$Type;
        static CODEC: $Codec<$FramebufferAttachmentDefinition$Type>;
        static VALUES: $FramebufferAttachmentDefinition$Type[];
        get displayName(): string;
    }
    /**
     * Values that may be interpreted as {@link $FramebufferAttachmentDefinition$Type}.
     */
    export type $FramebufferAttachmentDefinition$Type_ = "texture" | "render_buffer";
    export class $AdvancedFboRenderAttachment implements $AdvancedFboAttachment {
        canSample(): boolean;
        getLevels(): number;
        bindAttachment(): void;
        unbindAttachment(): void;
        getFormat(): number;
        getAttachmentType(): number;
        create(): void;
        attach(arg0: $AdvancedFbo, arg1: number): void;
        free(): void;
        getName(): string;
        clone(): $AdvancedFboAttachment;
        getId(): number;
        close(): void;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number);
        get levels(): number;
        get format(): number;
        get attachmentType(): number;
        get name(): string;
        get id(): number;
    }
    export class $AdvancedFboAttachment {
    }
    export interface $AdvancedFboAttachment extends $NativeResource, $Cloneable {
        canSample(): boolean;
        getLevels(): number;
        bindAttachment(): void;
        unbindAttachment(): void;
        getFormat(): number;
        getAttachmentType(): number;
        create(): void;
        attach(arg0: $AdvancedFbo, arg1: number): void;
        getName(): string;
        clone(): $AdvancedFboAttachment;
        get levels(): number;
        get format(): number;
        get attachmentType(): number;
        get name(): string;
    }
    export class $AdvancedFboTextureAttachment extends $AbstractTexture implements $AdvancedFboAttachment {
        canSample(): boolean;
        getLevels(): number;
        bindAttachment(): void;
        unbindAttachment(): void;
        getWidth(): number;
        getHeight(): number;
        getFilter(): $TextureFilter;
        getFormat(): number;
        getAttachmentType(): number;
        create(): void;
        attach(arg0: $AdvancedFbo, arg1: number): void;
        free(): void;
        getName(): string;
        clone(): $AdvancedFboAttachment;
        static NOT_ASSIGNED: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $TextureFilter_, arg7: string);
        get levels(): number;
        get width(): number;
        get height(): number;
        get filter(): $TextureFilter;
        get format(): number;
        get attachmentType(): number;
        get name(): string;
    }
    export class $FramebufferAttachmentDefinition extends $Record {
        levels(): number;
        isCompactDepthAttachment(): boolean;
        name(): string;
        type(): $FramebufferAttachmentDefinition$Type;
        format(): $FramebufferAttachmentDefinition$Format;
        filter(): $TextureFilter;
        depth(): boolean;
        static COLOR_CODEC: $Codec<$FramebufferAttachmentDefinition>;
        static DEPTH_CODEC: $Codec<$FramebufferAttachmentDefinition>;
        constructor(type: $FramebufferAttachmentDefinition$Type_, format: $FramebufferAttachmentDefinition$Format_, depth: boolean, filter: $TextureFilter_, levels: number, name: string);
        get compactDepthAttachment(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FramebufferAttachmentDefinition}.
     */
    export type $FramebufferAttachmentDefinition_ = { levels?: number, format?: $FramebufferAttachmentDefinition$Format_, name?: string, type?: $FramebufferAttachmentDefinition$Type_, depth?: boolean, filter?: $TextureFilter_,  } | [levels?: number, format?: $FramebufferAttachmentDefinition$Format_, name?: string, type?: $FramebufferAttachmentDefinition$Type_, depth?: boolean, filter?: $TextureFilter_, ];
    export class $FramebufferDefinition extends $Record {
        colorBuffers(): $FramebufferAttachmentDefinition[];
        autoClear(): boolean;
        depthBuffer(): $FramebufferAttachmentDefinition;
        width(): $MolangExpression;
        height(): $MolangExpression;
        createBuilder(arg0: $MolangEnvironment): $AdvancedFbo$Builder;
        createBuilder(arg0: number, arg1: number): $AdvancedFbo$Builder;
        static CODEC: $Codec<$FramebufferDefinition>;
        static DEFAULT_HEIGHT: $MolangExpression;
        static DEFAULT_WIDTH: $MolangExpression;
        constructor(width: $MolangExpression_, height: $MolangExpression_, colorBuffers: $FramebufferAttachmentDefinition_[], depthBuffer: $FramebufferAttachmentDefinition_, autoClear: boolean);
    }
    /**
     * Values that may be interpreted as {@link $FramebufferDefinition}.
     */
    export type $FramebufferDefinition_ = { autoClear?: boolean, width?: $MolangExpression_, depthBuffer?: $FramebufferAttachmentDefinition_, height?: $MolangExpression_, colorBuffers?: $FramebufferAttachmentDefinition_[],  } | [autoClear?: boolean, width?: $MolangExpression_, depthBuffer?: $FramebufferAttachmentDefinition_, height?: $MolangExpression_, colorBuffers?: $FramebufferAttachmentDefinition_[], ];
}
