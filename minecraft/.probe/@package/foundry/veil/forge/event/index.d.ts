import { $VeilAddShaderPreProcessorsEvent$Registry, $VeilRegisterGlobalControllersEvent$Registry_, $VeilRegisterBlockLayersEvent$Registry, $VeilRegisterBlockLayersEvent$Registry_ } from "@package/foundry/veil/api/event";
import { $Event } from "@package/net/neoforged/bus/api";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $ShaderPreProcessor_ } from "@package/foundry/veil/api/client/render/shader/processor";
import { $ResourceProvider_, $ResourceProvider } from "@package/net/minecraft/server/packs/resources";
import { $Map_, $Map } from "@package/java/util";
import { $ShaderManager } from "@package/foundry/veil/api/client/render/shader";
import { $RenderLevelStageEvent$Stage } from "@package/net/neoforged/neoforge/client/event";
import { $ShaderProgram } from "@package/foundry/veil/api/client/render/shader/program";
import { $BiConsumer_ } from "@package/java/util/function";
import { $VeilRenderer } from "@package/foundry/veil/api/client/render";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $GlobalController } from "@package/foundry/veil/api/flare/modifier";
import { $PostPipeline, $PostPipeline$Context } from "@package/foundry/veil/api/client/render/post";
import { $DynamicBuffersChange, $DynamicBuffersChange_ } from "@package/foundry/veil/api/client/render/dynamicbuffer";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";

declare module "@package/foundry/veil/forge/event" {
    export class $ForgeVeilRendererAvailableEvent extends $Event implements $IModBusEvent {
        getRenderer(): $VeilRenderer;
        constructor(arg0: $VeilRenderer);
        get renderer(): $VeilRenderer;
    }
    export class $ForgeFreeNativeResourcesEvent extends $Event {
        constructor();
    }
    export class $ForgeVeilShaderCompileEvent extends $Event implements $IModBusEvent {
        getShaderManager(): $ShaderManager;
        getUpdatedPrograms(): $Map<$ResourceLocation, $ShaderProgram>;
        constructor(arg0: $ShaderManager, arg1: $Map_<$ResourceLocation_, $ShaderProgram>);
        get shaderManager(): $ShaderManager;
        get updatedPrograms(): $Map<$ResourceLocation, $ShaderProgram>;
    }
    export class $ForgeVeilRegisterFixedBuffersEvent extends $Event implements $IModBusEvent {
        register(arg0: $RenderLevelStageEvent$Stage, arg1: $RenderType): void;
        constructor(arg0: $BiConsumer_<$RenderLevelStageEvent$Stage, $RenderType>);
    }
    export class $ForgeVeilPostProcessingEvent$Post extends $ForgeVeilPostProcessingEvent {
        constructor(arg0: $ResourceLocation_, arg1: $PostPipeline, arg2: $PostPipeline$Context);
    }
    export class $ForgeVeilRegisterGlobalControllersEvent extends $Event implements $IModBusEvent {
        register(arg0: $GlobalController): void;
        constructor(arg0: $VeilRegisterGlobalControllersEvent$Registry_);
    }
    export class $ForgeVeilPostProcessingEvent$Pre extends $ForgeVeilPostProcessingEvent {
        constructor(arg0: $ResourceLocation_, arg1: $PostPipeline, arg2: $PostPipeline$Context);
    }
    export class $ForgeVeilAddShaderProcessorsEvent extends $Event implements $VeilAddShaderPreProcessorsEvent$Registry, $IModBusEvent {
        getResourceProvider(): $ResourceProvider;
        addPreprocessorFirst(arg0: $ShaderPreProcessor_): void;
        addPreprocessorFirst(arg0: $ShaderPreProcessor_, arg1: boolean): void;
        addPreprocessor(arg0: $ShaderPreProcessor_, arg1: boolean): void;
        addPreprocessor(arg0: $ShaderPreProcessor_): void;
        constructor(arg0: $ResourceProvider_, arg1: $VeilAddShaderPreProcessorsEvent$Registry);
        get resourceProvider(): $ResourceProvider;
    }
    export class $ForgeVeilRegisterBlockLayersEvent extends $Event implements $VeilRegisterBlockLayersEvent$Registry, $IModBusEvent {
        registerBlockLayer(arg0: $RenderType): void;
        constructor(arg0: $VeilRegisterBlockLayersEvent$Registry_);
    }
    export class $ForgeVeilPostProcessingEvent extends $Event {
        getPipeline(): $PostPipeline;
        getName(): $ResourceLocation;
        getContext(): $PostPipeline$Context;
        constructor(arg0: $ResourceLocation_, arg1: $PostPipeline, arg2: $PostPipeline$Context);
        get pipeline(): $PostPipeline;
        get name(): $ResourceLocation;
        get context(): $PostPipeline$Context;
    }
    export class $ForgeVeilDynamicBuffersChangedEvent extends $Event implements $IModBusEvent {
        getChange(): $DynamicBuffersChange;
        constructor(arg0: $DynamicBuffersChange_);
        get change(): $DynamicBuffersChange;
    }
}
