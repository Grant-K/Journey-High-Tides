import { $VeilRenderLevelStageEvent$Stage, $VeilRenderLevelStageEvent$Stage_ } from "@package/foundry/veil/api/event";
import { $Codec } from "@package/com/mojang/serialization";
import { $ShaderUniformAccess } from "@package/foundry/veil/api/client/render/shader/uniform";
import { $ShaderTextureSource } from "@package/foundry/veil/api/client/render/shader/texture";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PostPipeline$Context, $PostPipeline } from "@package/foundry/veil/api/client/render/post";
import { $FramebufferDefinition_, $FramebufferDefinition } from "@package/foundry/veil/api/client/render/framebuffer";
import { $DynamicBufferType } from "@package/foundry/veil/api/client/render/dynamicbuffer";
import { $CharSequence } from "@package/java/lang";
import { $Map_, $Map } from "@package/java/util";
import { $PostPipelineStageRegistry$PipelineType } from "@package/foundry/veil/api/client/registry";

declare module "@package/foundry/veil/api/client/render/post/stage" {
    export class $CompositePostPipeline implements $PostPipeline {
        getUniform(arg0: $CharSequence): $ShaderUniformAccess;
        hasUniform(arg0: $CharSequence): boolean;
        setUniformBlock(arg0: $CharSequence, arg1: number): void;
        setStorageBlock(arg0: $CharSequence, arg1: number): void;
        getStages(): $PostPipeline[];
        getTextureSources(): $Map<string, $ShaderTextureSource>;
        getDynamicBuffers(): $DynamicBufferType[];
        getDynamicBuffersMask(): number;
        getRenderStage(): $VeilRenderLevelStageEvent$Stage;
        isReplace(): boolean;
        hasUniformBlock(arg0: $CharSequence): boolean;
        hasStorageBlock(arg0: $CharSequence): boolean;
        getUniformSafe(arg0: $CharSequence): $ShaderUniformAccess;
        getFramebuffers(): $Map<$ResourceLocation, $FramebufferDefinition>;
        free(): void;
        apply(arg0: $PostPipeline$Context): void;
        getPriority(): number;
        getType(): $PostPipelineStageRegistry$PipelineType<$PostPipeline>;
        getUniformBlock(arg0: $CharSequence): number;
        getStorageBlock(arg0: $CharSequence): number;
        getUniformLocation(arg0: $CharSequence): number;
        close(): void;
        static CODEC: $Codec<$CompositePostPipeline>;
        constructor(arg0: $PostPipeline[], arg1: $Map_<string, $ShaderTextureSource>, arg2: $Map_<$ResourceLocation_, $FramebufferDefinition_>, arg3: $VeilRenderLevelStageEvent$Stage_, arg4: number);
        get stages(): $PostPipeline[];
        get textureSources(): $Map<string, $ShaderTextureSource>;
        get dynamicBuffers(): $DynamicBufferType[];
        get dynamicBuffersMask(): number;
        get renderStage(): $VeilRenderLevelStageEvent$Stage;
        get replace(): boolean;
        get framebuffers(): $Map<$ResourceLocation, $FramebufferDefinition>;
        get priority(): number;
        get type(): $PostPipelineStageRegistry$PipelineType<$PostPipeline>;
    }
}
