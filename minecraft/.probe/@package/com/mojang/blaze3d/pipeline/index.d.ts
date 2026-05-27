import { $FramebufferRenderTargetAccessor } from "@package/foundry/veil/mixin/framebuffer/accessor";
import { $ConcurrentLinkedQueue } from "@package/java/util/concurrent";
import { $AccessoriesFrameBufferExtension } from "@package/io/wispforest/accessories/pond";
import { $CallbackInfoReturnable, $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Blaze3dRenderTargetExt } from "@package/net/irisshaders/iris/targets";
import { $AdvancedFbo } from "@package/foundry/veil/api/client/render/framebuffer";
import { $RenderTargetExtension, $PerformanceRenderTargetExtension } from "@package/foundry/veil/ext";
import { $Enum } from "@package/java/lang";

declare module "@package/com/mojang/blaze3d/pipeline" {
    export class $MainTarget$AttachmentState extends $Enum<$MainTarget$AttachmentState> {
    }
    /**
     * Values that may be interpreted as {@link $MainTarget$AttachmentState}.
     */
    export type $MainTarget$AttachmentState_ = "none" | "color" | "depth" | "color_depth";
    export class $RenderCall {
    }
    export interface $RenderCall {
        execute(): void;
    }
    /**
     * Values that may be interpreted as {@link $RenderCall}.
     */
    export type $RenderCall_ = (() => void);
    export class $RenderTarget implements $Blaze3dRenderTargetExt, $FramebufferRenderTargetAccessor, $PerformanceRenderTargetExtension, $RenderTargetExtension, $AccessoriesFrameBufferExtension {
        bindWrite(arg0: boolean): void;
        setClearColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        checkStatus(): void;
        unbindWrite(): void;
        blitToScreen(arg0: number, arg1: number): void;
        blitToScreen(arg0: number, arg1: number, arg2: boolean): void;
        destroyBuffers(): void;
        createBuffers(arg0: number, arg1: number, arg2: boolean): void;
        unbindRead(): void;
        copyDepthFrom(arg0: $RenderTarget): void;
        setFilterMode(arg0: number): void;
        setFilterMode(arg0: number, arg1: boolean): void;
        handler$bbe000$veil$destroyBuffers(arg0: $CallbackInfo): void;
        handler$bal000$veil$copyDepthFrom(arg0: $RenderTarget, arg1: $CallbackInfo): void;
        handler$bbe000$veil$createBuffers(arg0: $CallbackInfo): void;
        bindRead(): void;
        handler$bbe000$veil$bindRead(arg0: $CallbackInfo): void;
        handler$bbe000$veil$bindWrite(arg0: boolean, arg1: $CallbackInfo): void;
        handler$cpj000$sodium$blitToScreen(arg0: number, arg1: number, arg2: boolean, arg3: $CallbackInfo): void;
        handler$bal000$veil$clear(arg0: boolean, arg1: $CallbackInfo): void;
        getColorTextureId(): number;
        handler$bbe000$veil$getColorTextureId(arg0: $CallbackInfoReturnable<any>): void;
        getDepthTextureId(): number;
        handler$bbe000$veil$getDepthTextureId(arg0: $CallbackInfoReturnable<any>): void;
        enableStencil(): void;
        isStencilEnabled(): boolean;
        iris$getDepthBufferVersion(): number;
        iris$getColorBufferVersion(): number;
        veil$clearColorBuffer(arg0: boolean): void;
        veil$setWrapper(arg0: $AdvancedFbo): void;
        veil$getTexture(arg0: number): number;
        accessories$setUseHighlightShader(useHighlightShader: boolean): void;
        resize(arg0: number, arg1: number, arg2: boolean): void;
        clear(arg0: boolean): void;
        getClearChannels(): number[];
        useDepth: boolean;
        filterMode: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        height: number;
        constructor(arg0: boolean);
        get colorTextureId(): number;
        get depthTextureId(): number;
        get stencilEnabled(): boolean;
        get clearChannels(): number[];
    }
    export class $MainTarget extends $RenderTarget {
        useDepth: boolean;
        filterMode: number;
        static DEFAULT_HEIGHT: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        static DEFAULT_WIDTH: number;
        height: number;
        constructor(arg0: number, arg1: number);
    }
    export class $RenderPipeline {
        recordRenderCall(arg0: $RenderCall_): void;
        getRecordingQueue(): $ConcurrentLinkedQueue<$RenderCall>;
        getProcessedQueue(): $ConcurrentLinkedQueue<$RenderCall>;
        canBeginRecording(): boolean;
        canBeginProcessing(): boolean;
        beginProcessing(): boolean;
        processRecordedQueue(): void;
        endProcessing(): void;
        startRendering(): $ConcurrentLinkedQueue<$RenderCall>;
        beginRecording(): boolean;
        endRecording(): void;
        constructor();
        get recordingQueue(): $ConcurrentLinkedQueue<$RenderCall>;
        get processedQueue(): $ConcurrentLinkedQueue<$RenderCall>;
    }
    export class $MainTarget$Dimension {
    }
    export class $TextureTarget extends $RenderTarget {
        useDepth: boolean;
        filterMode: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: boolean, arg3: boolean);
    }
}
