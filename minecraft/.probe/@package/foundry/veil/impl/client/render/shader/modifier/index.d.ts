import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $GlslTree } from "@package/io/github/ocelot/glslprocessor/api/node";
import { $Collection } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $Pattern } from "@package/java/util/regex";
import { $ShaderModificationManager } from "@package/foundry/veil/api/client/render/shader";

declare module "@package/foundry/veil/impl/client/render/shader/modifier" {
    export class $ShaderModification {
        static parse(arg0: string, arg1: boolean): $ShaderModification;
        static OUT_PATTERN: $Pattern;
        static PLACEHOLDER_PATTERN: $Pattern;
        static VERSION_PATTERN: $Pattern;
        static UNIFORM_PATTERN: $Pattern;
        static RETURN_PATTERN: $Pattern;
        static IN_PATTERN: $Pattern;
    }
    export interface $ShaderModification {
        inject(arg0: $GlslTree, arg1: $VeilJobParameters_): void;
        priority(): number;
    }
    export class $VeilJobParameters extends $Record {
        modificationManager(): $ShaderModificationManager;
        applyVersion(): boolean;
        allowOut(): boolean;
        shaderId(): $ResourceLocation;
        modifiers(): $Collection<$ShaderModification>;
        flags(): number;
        static ALLOW_OUT: number;
        static APPLY_VERSION: number;
        constructor(modificationManager: $ShaderModificationManager, shaderId: $ResourceLocation_, flags: number);
    }
    /**
     * Values that may be interpreted as {@link $VeilJobParameters}.
     */
    export type $VeilJobParameters_ = { modificationManager?: $ShaderModificationManager, flags?: number, shaderId?: $ResourceLocation_,  } | [modificationManager?: $ShaderModificationManager, flags?: number, shaderId?: $ResourceLocation_, ];
}
