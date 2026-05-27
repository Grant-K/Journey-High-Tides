import { $ShaderInstance } from "@package/net/minecraft/client/renderer";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $DynamicBufferType_ } from "@package/foundry/veil/api/client/render/dynamicbuffer";
import { $AdvancedFbo } from "@package/foundry/veil/api/client/render/framebuffer";
import { $Collection_ } from "@package/java/util";
import { $NativeResource } from "@package/org/lwjgl/system";

declare module "@package/foundry/veil/impl/client/render/dynamicbuffer" {
    export class $DynamicBufferManager implements $NativeResource {
        setEnabled(arg0: boolean): void;
        endFrame(): void;
        setActiveBuffers(arg0: $ResourceLocation_, arg1: number): boolean;
        setupRenderState(arg0: $ResourceLocation_, arg1: $RenderTarget, arg2: boolean): void;
        getActiveBuffers(): number;
        getActiveBuffers(arg0: $ResourceLocation_): number;
        getBufferTexture(arg0: $DynamicBufferType_): number;
        getDynamicFbo(arg0: $AdvancedFbo): $AdvancedFbo;
        getClearBuffers(): number[];
        markRecompiled(arg0: $ShaderInstance): void;
        resizeFramebuffers(arg0: number, arg1: number): void;
        free(): void;
        isEnabled(): boolean;
        close(): void;
        static MAIN_WRAPPER: $ResourceLocation;
        constructor(arg0: number, arg1: number);
        get clearBuffers(): number[];
    }
    export class $VanillaShaderCompiler {
        static markRendered(arg0: string): void;
        static getActiveDynamicBuffers(arg0: $ShaderInstance): number;
        isCompilingShaders(): boolean;
        reload(arg0: $Collection_<$ShaderInstance>): $CompletableFuture<never>;
        static clear(): void;
        constructor();
        get compilingShaders(): boolean;
    }
}
