import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $Codec } from "@package/com/mojang/serialization";
import { $GlobalController } from "@package/foundry/veil/api/flare/modifier";
import { $ShaderPreProcessor_ } from "@package/foundry/veil/api/client/render/shader/processor";
import { $Enum } from "@package/java/lang";

declare module "@package/foundry/veil/api/event" {
    export class $VeilRegisterGlobalControllersEvent$Registry {
    }
    export interface $VeilRegisterGlobalControllersEvent$Registry {
        registerGlobalController(arg0: $GlobalController): void;
    }
    /**
     * Values that may be interpreted as {@link $VeilRegisterGlobalControllersEvent$Registry}.
     */
    export type $VeilRegisterGlobalControllersEvent$Registry_ = ((arg0: $GlobalController) => void);
    export class $VeilRegisterBlockLayersEvent$Registry {
    }
    export interface $VeilRegisterBlockLayersEvent$Registry {
        registerBlockLayer(arg0: $RenderType): void;
    }
    /**
     * Values that may be interpreted as {@link $VeilRegisterBlockLayersEvent$Registry}.
     */
    export type $VeilRegisterBlockLayersEvent$Registry_ = ((arg0: $RenderType) => void);
    export class $VeilAddShaderPreProcessorsEvent$Registry {
    }
    export interface $VeilAddShaderPreProcessorsEvent$Registry {
        addPreprocessorFirst(arg0: $ShaderPreProcessor_, arg1: boolean): void;
        addPreprocessorFirst(arg0: $ShaderPreProcessor_): void;
        addPreprocessor(arg0: $ShaderPreProcessor_): void;
        addPreprocessor(arg0: $ShaderPreProcessor_, arg1: boolean): void;
    }
    export class $VeilRenderLevelStageEvent$Stage extends $Enum<$VeilRenderLevelStageEvent$Stage> {
        getName(): string;
        static values(): $VeilRenderLevelStageEvent$Stage[];
        static valueOf(arg0: string): $VeilRenderLevelStageEvent$Stage;
        static AFTER_WEATHER: $VeilRenderLevelStageEvent$Stage;
        static AFTER_SKY: $VeilRenderLevelStageEvent$Stage;
        static AFTER_CUTOUT_BLOCKS: $VeilRenderLevelStageEvent$Stage;
        static AFTER_TRANSLUCENT_BLOCKS: $VeilRenderLevelStageEvent$Stage;
        static CODEC: $Codec<$VeilRenderLevelStageEvent$Stage>;
        static AFTER_SOLID_BLOCKS: $VeilRenderLevelStageEvent$Stage;
        static AFTER_TRIPWIRE_BLOCKS: $VeilRenderLevelStageEvent$Stage;
        static AFTER_LEVEL: $VeilRenderLevelStageEvent$Stage;
        static AFTER_BLOCK_ENTITIES: $VeilRenderLevelStageEvent$Stage;
        static AFTER_CUTOUT_MIPPED_BLOCKS: $VeilRenderLevelStageEvent$Stage;
        static AFTER_ENTITIES: $VeilRenderLevelStageEvent$Stage;
        static AFTER_PARTICLES: $VeilRenderLevelStageEvent$Stage;
    }
    /**
     * Values that may be interpreted as {@link $VeilRenderLevelStageEvent$Stage}.
     */
    export type $VeilRenderLevelStageEvent$Stage_ = "after_sky" | "after_solid_blocks" | "after_cutout_mipped_blocks" | "after_cutout_blocks" | "after_entities" | "after_block_entities" | "after_translucent_blocks" | "after_tripwire_blocks" | "after_particles" | "after_weather" | "after_level";
}
