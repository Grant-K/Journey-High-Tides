import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $ShaderInstance } from "@package/net/minecraft/client/renderer";
import { $Codec } from "@package/com/mojang/serialization";
import { $ShaderTextureSource, $ShaderTextureSource$Context_ } from "@package/foundry/veil/api/client/render/shader/texture";
import { $GlStateManager$DestFactor, $GlStateManager$SourceFactor_, $GlStateManager$DestFactor_, $GlStateManager$SourceFactor } from "@package/com/mojang/blaze3d/platform";
import { $Map_, $Map, $Set, $Set_ } from "@package/java/util";
import { $ShaderFeature, $ShaderPreDefinitions, $ShaderFeature_ } from "@package/foundry/veil/api/client/render/shader";
import { $ShaderUniform, $ShaderUniformAccess } from "@package/foundry/veil/api/client/render/shader/uniform";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexFormat, $VertexFormat$Mode_ } from "@package/com/mojang/blaze3d/vertex";
import { $AdvancedFbo } from "@package/foundry/veil/api/client/render/framebuffer";
import { $AbstractTexture } from "@package/net/minecraft/client/renderer/texture";
import { $CharSequence, $Enum, $Record } from "@package/java/lang";
import { $NativeResource } from "@package/org/lwjgl/system";
import { $Matrix4fc } from "@package/org/joml";
import { $CompiledShader } from "@package/foundry/veil/api/client/render/shader/compiler";

declare module "@package/foundry/veil/api/client/render/shader/program" {
    export class $TextureUniformAccess {
        static setFramebufferSamplers(arg0: $ShaderInstance, arg1: $AdvancedFbo): void;
    }
    export interface $TextureUniformAccess {
        /**
         * @deprecated
         */
        setSampler(arg0: $CharSequence, arg1: number): void;
        /**
         * @deprecated
         */
        setSampler(arg0: $CharSequence, arg1: $ResourceLocation_, arg2: number): void;
        /**
         * @deprecated
         */
        setSampler(arg0: $CharSequence, arg1: number, arg2: number): void;
        /**
         * @deprecated
         */
        setSampler(arg0: $CharSequence, arg1: $ResourceLocation_): void;
        bindSamplers(arg0: number): void;
        bindSamplers(arg0: $ShaderTextureSource$Context_, arg1: number): void;
        removeTexture(arg0: $CharSequence): void;
        setTexture(arg0: $CharSequence, arg1: number, arg2: number): void;
        setTexture(arg0: $CharSequence, arg1: number, arg2: number, arg3: number): void;
        setTexture(arg0: $CharSequence, arg1: $ResourceLocation_): void;
        setTexture(arg0: $CharSequence, arg1: $AbstractTexture, arg2: number): void;
        setTexture(arg0: $CharSequence, arg1: $AbstractTexture): void;
        setTexture(arg0: $CharSequence, arg1: $ResourceLocation_, arg2: number): void;
        clearSamplers(): void;
        setFramebufferSamplers(arg0: $AdvancedFbo): void;
        /**
         * @deprecated
         */
        removeSampler(arg0: $CharSequence): void;
    }
    export class $ShaderBlendMode$BlendEquation extends $Enum<$ShaderBlendMode$BlendEquation> {
        getGlType(): number;
        static values(): $ShaderBlendMode$BlendEquation[];
        static valueOf(arg0: string): $ShaderBlendMode$BlendEquation;
        static ADD: $ShaderBlendMode$BlendEquation;
        static MIN: $ShaderBlendMode$BlendEquation;
        static CODEC: $Codec<$ShaderBlendMode$BlendEquation>;
        static REVERSE_SUBTRACT: $ShaderBlendMode$BlendEquation;
        static MAX: $ShaderBlendMode$BlendEquation;
        static SUBTRACT: $ShaderBlendMode$BlendEquation;
        get glType(): number;
    }
    /**
     * Values that may be interpreted as {@link $ShaderBlendMode$BlendEquation}.
     */
    export type $ShaderBlendMode$BlendEquation_ = "add" | "subtract" | "reverse_subtract" | "min" | "max";
    export class $ProgramDefinition extends $Record {
        requiredFeatures(): $ShaderFeature[];
        vertex(): $ResourceLocation;
        samplers(): $Map<string, $ShaderTextureSource>;
        geometry(): $ResourceLocation;
        definitionDefaults(): $Map<string, string>;
        shaders(): $Int2ObjectMap<$ResourceLocation>;
        fragment(): $ResourceLocation;
        tesselationControl(): $ResourceLocation;
        tesselationEvaluation(): $ResourceLocation;
        getMacros(arg0: $Set_<string>, arg1: $ShaderPreDefinitions): $Map<string, string>;
        blendMode(): $ShaderBlendMode;
        definitions(): string[];
        compute(): $ResourceLocation;
        constructor(vertex: $ResourceLocation_, tesselationControl: $ResourceLocation_, tesselationEvaluation: $ResourceLocation_, geometry: $ResourceLocation_, fragment: $ResourceLocation_, compute: $ResourceLocation_, definitions: string[], definitionDefaults: $Map_<string, string>, samplers: $Map_<string, $ShaderTextureSource>, shaders: $Int2ObjectMap<$ResourceLocation_>, requiredFeatures: $ShaderFeature_[], blendMode: $ShaderBlendMode_);
    }
    /**
     * Values that may be interpreted as {@link $ProgramDefinition}.
     */
    export type $ProgramDefinition_ = { samplers?: $Map_<string, $ShaderTextureSource>, requiredFeatures?: $ShaderFeature_[], definitionDefaults?: $Map_<string, string>, blendMode?: $ShaderBlendMode_, tesselationEvaluation?: $ResourceLocation_, vertex?: $ResourceLocation_, shaders?: $Int2ObjectMap<$ResourceLocation_>, compute?: $ResourceLocation_, tesselationControl?: $ResourceLocation_, definitions?: string[], geometry?: $ResourceLocation_, fragment?: $ResourceLocation_,  } | [samplers?: $Map_<string, $ShaderTextureSource>, requiredFeatures?: $ShaderFeature_[], definitionDefaults?: $Map_<string, string>, blendMode?: $ShaderBlendMode_, tesselationEvaluation?: $ResourceLocation_, vertex?: $ResourceLocation_, shaders?: $Int2ObjectMap<$ResourceLocation_>, compute?: $ResourceLocation_, tesselationControl?: $ResourceLocation_, definitions?: string[], geometry?: $ResourceLocation_, fragment?: $ResourceLocation_, ];
    export class $ShaderProgram {
        static unbind(): void;
    }
    export interface $ShaderProgram extends $NativeResource, $UniformAccess, $TextureUniformAccess {
        getUniform(arg0: $CharSequence): $ShaderUniform;
        setDefaultUniforms(arg0: $VertexFormat$Mode_, arg1: $Matrix4fc, arg2: $Matrix4fc): void;
        setDefaultUniforms(arg0: $VertexFormat$Mode_): void;
        /**
         * @deprecated
         */
        toShaderInstance(): $ShaderInstance;
        getShaders(): $Int2ObjectMap<$CompiledShader>;
        setUniformBlock(arg0: $CharSequence, arg1: number): void;
        setStorageBlock(arg0: $CharSequence, arg1: number): void;
        getActiveDynamicBuffers(): number;
        getVertexShader(): $CompiledShader;
        getGeometryShader(): $CompiledShader;
        getTessellationControlShader(): $CompiledShader;
        getTessellationEvaluationShader(): $CompiledShader;
        getFragmentShader(): $CompiledShader;
        getComputeShader(): $CompiledShader;
        hasVertex(): boolean;
        hasGeometry(): boolean;
        hasFragment(): boolean;
        isCompute(): boolean;
        getRequiredFeatures(): $Set<$ShaderFeature>;
        bind(): void;
        isValid(): boolean;
        getFormat(): $VertexFormat;
        getDefinitionDependencies(): $Set<string>;
        hasTesselation(): boolean;
        getDefinition(): $ProgramDefinition;
        getProgram(): number;
        getName(): $ResourceLocation;
        get shaders(): $Int2ObjectMap<$CompiledShader>;
        get activeDynamicBuffers(): number;
        get vertexShader(): $CompiledShader;
        get geometryShader(): $CompiledShader;
        get tessellationControlShader(): $CompiledShader;
        get tessellationEvaluationShader(): $CompiledShader;
        get fragmentShader(): $CompiledShader;
        get computeShader(): $CompiledShader;
        get compute(): boolean;
        get requiredFeatures(): $Set<$ShaderFeature>;
        get valid(): boolean;
        get format(): $VertexFormat;
        get definitionDependencies(): $Set<string>;
        get definition(): $ProgramDefinition;
        get program(): number;
        get name(): $ResourceLocation;
    }
    export class $UniformAccess {
    }
    export interface $UniformAccess {
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
    }
    /**
     * @deprecated
     */
    export class $MutableUniformAccess {
    }
    export interface $MutableUniformAccess extends $UniformAccess {
    }
    export class $ShaderBlendMode extends $Record {
        srcColorFactor(): $GlStateManager$SourceFactor;
        dstColorFactor(): $GlStateManager$DestFactor;
        srcAlphaFactor(): $GlStateManager$SourceFactor;
        dstAlphaFactor(): $GlStateManager$DestFactor;
        hasEquation(): boolean;
        colorEquation(): $ShaderBlendMode$BlendEquation;
        alphaEquation(): $ShaderBlendMode$BlendEquation;
        apply(): void;
        static CODEC: $Codec<$ShaderBlendMode>;
        static DESTINATION_FACTOR_CODEC: $Codec<$GlStateManager$DestFactor>;
        static SOURCE_FACTOR_CODEC: $Codec<$GlStateManager$SourceFactor>;
        constructor(colorEquation: $ShaderBlendMode$BlendEquation_, alphaEquation: $ShaderBlendMode$BlendEquation_, srcColorFactor: $GlStateManager$SourceFactor_, dstColorFactor: $GlStateManager$DestFactor_, srcAlphaFactor: $GlStateManager$SourceFactor_, dstAlphaFactor: $GlStateManager$DestFactor_);
    }
    /**
     * Values that may be interpreted as {@link $ShaderBlendMode}.
     */
    export type $ShaderBlendMode_ = { srcColorFactor?: $GlStateManager$SourceFactor_, colorEquation?: $ShaderBlendMode$BlendEquation_, srcAlphaFactor?: $GlStateManager$SourceFactor_, alphaEquation?: $ShaderBlendMode$BlendEquation_, dstColorFactor?: $GlStateManager$DestFactor_, dstAlphaFactor?: $GlStateManager$DestFactor_,  } | [srcColorFactor?: $GlStateManager$SourceFactor_, colorEquation?: $ShaderBlendMode$BlendEquation_, srcAlphaFactor?: $GlStateManager$SourceFactor_, alphaEquation?: $ShaderBlendMode$BlendEquation_, dstColorFactor?: $GlStateManager$DestFactor_, dstAlphaFactor?: $GlStateManager$DestFactor_, ];
}
