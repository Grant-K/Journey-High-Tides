import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $Closeable } from "@package/java/io";
import { $ShaderModification } from "@package/foundry/veil/impl/client/render/shader/modifier";
import { $Codec } from "@package/com/mojang/serialization";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $ResourceManager, $SimplePreparableReloadListener, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $List, $Map_, $Map, $List_ } from "@package/java/util";
import { $ShaderProgram } from "@package/foundry/veil/api/client/render/shader/program";
import { $Consumer_ } from "@package/java/util/function";
import { $ResourceLocation_, $ResourceLocation, $FileToIdConverter } from "@package/net/minecraft/resources";
import { $DynamicBufferManager } from "@package/foundry/veil/impl/client/render/dynamicbuffer";
import { $Enum, $Record } from "@package/java/lang";
import { $GlslTree } from "@package/io/github/ocelot/glslprocessor/api/node";
export * as compiler from "@package/foundry/veil/api/client/render/shader/compiler";
export * as texture from "@package/foundry/veil/api/client/render/shader/texture";
export * as processor from "@package/foundry/veil/api/client/render/shader/processor";
export * as uniform from "@package/foundry/veil/api/client/render/shader/uniform";
export * as program from "@package/foundry/veil/api/client/render/shader/program";
export * as block from "@package/foundry/veil/api/client/render/shader/block";

declare module "@package/foundry/veil/api/client/render/shader" {
    export class $ShaderPreDefinitions {
        getDefinitions(): $Map<string, string>;
        getStaticDefinitions(): $Map<string, string>;
        getDefinition(arg0: string): string;
        addListener(arg0: $Consumer_<string>): void;
        setStatic(arg0: string, arg1: string): void;
        setStatic(arg0: string): void;
        remove(arg0: string): void;
        set(arg0: string, arg1: string): void;
        set(arg0: string): void;
        constructor();
        get definitions(): $Map<string, string>;
        get staticDefinitions(): $Map<string, string>;
    }
    export class $ShaderFeature extends $Enum<$ShaderFeature> {
        /**
         * @deprecated
         */
        modifyShader(arg0: $GlslTree): void;
        modifyShader(arg0: number, arg1: $GlslTree): void;
        getDefinitionName(): string;
        static values(): $ShaderFeature[];
        static valueOf(arg0: string): $ShaderFeature;
        isSupported(): boolean;
        static CODEC: $Codec<$ShaderFeature>;
        static COMPUTE: $ShaderFeature;
        static INT64: $ShaderFeature;
        static VERTEX_ATTRIBUTE64: $ShaderFeature;
        static BINDLESS_TEXTURE: $ShaderFeature;
        static CUBE_MAP_ARRAY: $ShaderFeature;
        static TESSELLATION: $ShaderFeature;
        static FLOAT64: $ShaderFeature;
        static SHADER_STORAGE: $ShaderFeature;
        static ATOMIC_COUNTER: $ShaderFeature;
        static FEATURES: $ShaderFeature[];
        get definitionName(): string;
        get supported(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ShaderFeature}.
     */
    export type $ShaderFeature_ = "compute" | "shader_storage" | "atomic_counter" | "bindless_texture" | "cube_map_array" | "float64" | "int64" | "vertex_attribute64" | "tessellation";
    export class $ShaderManager implements $PreparableReloadListener, $Closeable {
        setActiveBuffers(arg0: number): void;
        getShader(arg0: $ResourceLocation_): $ShaderProgram;
        getShaders(): $Map<$ResourceLocation, $ShaderProgram>;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        addMacros(arg0: $Map_<string, string>): void;
        hasFeatures(...arg0: $ShaderFeature_[]): boolean;
        scheduleRecompile(arg0: $ResourceLocation_): void;
        getSourceSet(): $ShaderSourceSet;
        createDynamicProgram(arg0: $ResourceLocation_, arg1: $Int2ObjectMap<string>): $CompletableFuture<$ShaderProgram>;
        getRecompileFuture(): $CompletableFuture<void>;
        getUpdateBuffersFuture(): $CompletableFuture<void>;
        setGlobal(arg0: $Consumer_<$ShaderProgram>): void;
        getName(): string;
        static getTypeName(arg0: number): string;
        close(): void;
        static PROGRAM_SET: $ShaderSourceSet;
        static INCLUDE_LISTER: $FileToIdConverter;
        constructor(arg0: $ShaderSourceSet, arg1: $ShaderPreDefinitions, arg2: $DynamicBufferManager);
        set activeBuffers(value: number);
        get shaders(): $Map<$ResourceLocation, $ShaderProgram>;
        get sourceSet(): $ShaderSourceSet;
        get recompileFuture(): $CompletableFuture<void>;
        get updateBuffersFuture(): $CompletableFuture<void>;
        set global(value: $Consumer_<$ShaderProgram>);
        get name(): string;
    }
    export class $ShaderSourceSet {
        getGlslConverter(): $FileToIdConverter;
        getShaderDefinitionLister(): $FileToIdConverter;
        getFolder(): string;
        static getShaderType(arg0: $ResourceLocation_): number;
        getTypeConverter(arg0: number): $FileToIdConverter;
        constructor(arg0: string);
        get glslConverter(): $FileToIdConverter;
        get shaderDefinitionLister(): $FileToIdConverter;
        get folder(): string;
    }
    export class $ShaderModificationManager extends $SimplePreparableReloadListener<$ShaderModificationManager$Preparations> {
        getModifierId(arg0: $ShaderModification): $ResourceLocation;
        applyModifiers(arg0: $ResourceLocation_, arg1: $GlslTree, arg2: number): void;
        getModifiers(arg0: $ResourceLocation_): $List<$ShaderModification>;
        static MODIFIER_LISTER: $FileToIdConverter;
        constructor();
    }
    export class $ShaderModificationManager$Preparations extends $Record {
        shaders(): $Map<$ResourceLocation, $List<$ShaderModification>>;
        names(): $Map<$ShaderModification, $ResourceLocation>;
        constructor(shaders: $Map_<$ResourceLocation_, $List_<$ShaderModification>>, names: $Map_<$ShaderModification, $ResourceLocation_>);
    }
    /**
     * Values that may be interpreted as {@link $ShaderModificationManager$Preparations}.
     */
    export type $ShaderModificationManager$Preparations_ = { shaders?: $Map_<$ResourceLocation_, $List_<$ShaderModification>>, names?: $Map_<$ShaderModification, $ResourceLocation_>,  } | [shaders?: $Map_<$ResourceLocation_, $List_<$ShaderModification>>, names?: $Map_<$ShaderModification, $ResourceLocation_>, ];
}
