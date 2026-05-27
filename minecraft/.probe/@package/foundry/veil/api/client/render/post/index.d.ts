import { $VeilRenderLevelStageEvent$Stage_ } from "@package/foundry/veil/api/event";
import { $Codec } from "@package/com/mojang/serialization";
import { $ShaderTextureSource$Context } from "@package/foundry/veil/api/client/render/shader/texture";
import { $List, $Set } from "@package/java/util";
import { $PostPipelineStageRegistry$PipelineType } from "@package/foundry/veil/api/client/registry";
import { $MutableUniformAccess, $ShaderProgram, $TextureUniformAccess } from "@package/foundry/veil/api/client/render/shader/program";
import { $CodecReloadListener } from "@package/foundry/veil/api";
import { $ShaderUniformAccess } from "@package/foundry/veil/api/client/render/shader/uniform";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $AdvancedFbo } from "@package/foundry/veil/api/client/render/framebuffer";
import { $CharSequence } from "@package/java/lang";
import { $NativeResource } from "@package/org/lwjgl/system";
import { $CompositePostPipeline } from "@package/foundry/veil/api/client/render/post/stage";
export * as stage from "@package/foundry/veil/api/client/render/post/stage";

declare module "@package/foundry/veil/api/client/render/post" {
    export class $PostPipeline$Context {
    }
    export interface $PostPipeline$Context extends $ShaderTextureSource$Context {
        getShader(arg0: $ResourceLocation_): $ShaderProgram;
        /**
         * @deprecated
         */
        setSampler(arg0: $CharSequence, arg1: number, arg2: number): void;
        getPipeline(arg0: $ResourceLocation_): $PostPipeline;
        setTexture(arg0: $CharSequence, arg1: number, arg2: number, arg3: number): void;
        setFramebuffer(arg0: $ResourceLocation_, arg1: $AdvancedFbo): void;
        getDrawFramebuffer(): $AdvancedFbo;
        applySamplers(arg0: $TextureUniformAccess): void;
        clearSamplers(arg0: $TextureUniformAccess): void;
        getFramebufferOrDraw(arg0: $ResourceLocation_): $AdvancedFbo;
        get drawFramebuffer(): $AdvancedFbo;
    }
    export class $PostProcessingManager extends $CodecReloadListener<$CompositePostPipeline> implements $NativeResource {
        endFrame(): void;
        getPipeline(arg0: $ResourceLocation_): $PostPipeline;
        runDefaultPipeline(arg0: $VeilRenderLevelStageEvent$Stage_): void;
        runPipeline(arg0: $PostPipeline): void;
        runPipeline(arg0: $PostPipeline, arg1: boolean): void;
        static resolvePost(arg0: $AdvancedFbo): void;
        static resolvePost(arg0: $AdvancedFbo, arg1: number): void;
        getPostPipelineContext(): $PostPipeline$Context;
        getPipelines(): $Set<$ResourceLocation>;
        getActivePipelines(): $List<$PostProcessingManager$ProfileEntry>;
        isActive(arg0: $ResourceLocation_): boolean;
        free(): void;
        remove(arg0: $ResourceLocation_): boolean;
        add(arg0: $ResourceLocation_): boolean;
        add(arg0: number, arg1: $ResourceLocation_): boolean;
        close(): void;
        constructor();
        get postPipelineContext(): $PostPipeline$Context;
        get pipelines(): $Set<$ResourceLocation>;
        get activePipelines(): $List<$PostProcessingManager$ProfileEntry>;
    }
    export class $PostPipeline {
        static CODEC: $Codec<$PostPipeline>;
    }
    export interface $PostPipeline extends $MutableUniformAccess, $NativeResource {
        getUniform(arg0: $CharSequence): $ShaderUniformAccess;
        hasUniform(arg0: $CharSequence): boolean;
        setUniformBlock(arg0: $CharSequence, arg1: number): void;
        setStorageBlock(arg0: $CharSequence, arg1: number): void;
        getUniformBlock(arg0: $CharSequence): number;
        getStorageBlock(arg0: $CharSequence): number;
        hasUniformBlock(arg0: $CharSequence): boolean;
        hasStorageBlock(arg0: $CharSequence): boolean;
        getUniformSafe(arg0: $CharSequence): $ShaderUniformAccess;
        getUniformLocation(arg0: $CharSequence): number;
        free(): void;
        apply(arg0: $PostPipeline$Context): void;
        getType(): $PostPipelineStageRegistry$PipelineType<$PostPipeline>;
        get type(): $PostPipelineStageRegistry$PipelineType<$PostPipeline>;
    }
    export class $PostProcessingManager$ProfileEntry {
        getPipeline(): $ResourceLocation;
        setPriority(arg0: number): void;
        getPriority(): number;
        constructor(arg0: $ResourceLocation_, arg1: number);
        get pipeline(): $ResourceLocation;
    }
}
