import { $InputStream } from "@package/java/io";
import { $GlslPreprocessor } from "@package/com/mojang/blaze3d/preprocessor";
import { $Shader } from "@package/com/mojang/blaze3d/shaders";
import { $Map } from "@package/java/util";
import { $Enum } from "@package/java/lang";

declare module "@package/team/lodestar/lodestone/systems/rendering/shader" {
    export class $LodestoneProgram$Type extends $Enum<$LodestoneProgram$Type> {
        getPrograms(): $Map<string, $LodestoneProgram>;
        getExtension(): string;
        getName(): string;
        static values(): $LodestoneProgram$Type[];
        static valueOf(arg0: string): $LodestoneProgram$Type;
        static VERTEX: $LodestoneProgram$Type;
        static FRAGMENT: $LodestoneProgram$Type;
        static GEOMETRY: $LodestoneProgram$Type;
        get programs(): $Map<string, $LodestoneProgram>;
        get extension(): string;
    }
    /**
     * Values that may be interpreted as {@link $LodestoneProgram$Type}.
     */
    export type $LodestoneProgram$Type_ = "vertex" | "fragment" | "geometry";
    export class $IShaderInstance {
    }
    export interface $IShaderInstance {
        getGeometryProgram(): $LodestoneProgram;
        get geometryProgram(): $LodestoneProgram;
    }
    /**
     * Values that may be interpreted as {@link $IShaderInstance}.
     */
    export type $IShaderInstance_ = (() => $LodestoneProgram);
    export class $LodestoneProgram {
        static compileShader(arg0: $LodestoneProgram$Type_, arg1: string, arg2: $InputStream, arg3: string, arg4: $GlslPreprocessor): $LodestoneProgram;
        attachToShader(arg0: $Shader): void;
        getName(): string;
        close(): void;
        get name(): string;
    }
}
