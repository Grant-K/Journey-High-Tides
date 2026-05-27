import { $GLCapabilities } from "@package/org/lwjgl/opengl";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Object, $Enum } from "@package/java/lang";
import { $GlslTree } from "@package/io/github/ocelot/glslprocessor/api/node";
import { $Collection_, $Map, $Collection } from "@package/java/util";
import { $ShaderFeature_, $ShaderPreDefinitions } from "@package/foundry/veil/api/client/render/shader";

declare module "@package/foundry/veil/api/client/render/shader/processor" {
    export class $ShaderImporter {
    }
    export interface $ShaderImporter {
        loadImport(arg0: $ShaderPreProcessor$Context, arg1: $ResourceLocation_, arg2: boolean): $GlslTree;
        addedImports(): $Collection<$ResourceLocation>;
    }
    export class $ShaderPreProcessor$Context {
    }
    export interface $ShaderPreProcessor$Context {
        activeBuffers(): number;
        glCapabilities(): $GLCapabilities;
        modifyInclude(arg0: $ResourceLocation_, arg1: string): $GlslTree;
        isSourceFile(): boolean;
        isVertex(): boolean;
        isFragment(): boolean;
        isGeometry(): boolean;
        isTessellationControl(): boolean;
        isTessellationEvaluation(): boolean;
        preDefinitions(): $ShaderPreDefinitions;
        include(arg0: $GlslTree, arg1: string, arg2: $GlslTree, arg3: $ShaderPreProcessor$IncludeOverloadStrategy_): void;
        include(arg0: $GlslTree, arg1: $ResourceLocation_, arg2: $ShaderPreProcessor$IncludeOverloadStrategy_): void;
        hasFeatures(...arg0: $ShaderFeature_[]): boolean;
        macros(): $Map<string, string>;
        customProgramData(): $Map<string, $Object>;
        shaderImporter(): $ShaderImporter;
        typeName(): string;
        name(): $ResourceLocation;
        type(): number;
        get sourceFile(): boolean;
        get vertex(): boolean;
        get fragment(): boolean;
        get geometry(): boolean;
        get tessellationControl(): boolean;
        get tessellationEvaluation(): boolean;
    }
    export class $ShaderPreProcessor {
        static allOf(...arg0: $ShaderPreProcessor_[]): $ShaderPreProcessor;
        static allOf(arg0: $Collection_<$ShaderPreProcessor_>): $ShaderPreProcessor;
        static NOOP: $ShaderPreProcessor;
    }
    export interface $ShaderPreProcessor {
        prepare(): void;
        modify(arg0: $ShaderPreProcessor$Context, arg1: $GlslTree): void;
    }
    /**
     * Values that may be interpreted as {@link $ShaderPreProcessor}.
     */
    export type $ShaderPreProcessor_ = ((arg0: $ShaderPreProcessor$Context, arg1: $GlslTree) => void);
    export class $ShaderPreProcessor$IncludeOverloadStrategy extends $Enum<$ShaderPreProcessor$IncludeOverloadStrategy> {
        static values(): $ShaderPreProcessor$IncludeOverloadStrategy[];
        static valueOf(arg0: string): $ShaderPreProcessor$IncludeOverloadStrategy;
        static SOURCE: $ShaderPreProcessor$IncludeOverloadStrategy;
        static INCLUDE: $ShaderPreProcessor$IncludeOverloadStrategy;
        static FAIL: $ShaderPreProcessor$IncludeOverloadStrategy;
    }
    /**
     * Values that may be interpreted as {@link $ShaderPreProcessor$IncludeOverloadStrategy}.
     */
    export type $ShaderPreProcessor$IncludeOverloadStrategy_ = "fail" | "source" | "include";
}
