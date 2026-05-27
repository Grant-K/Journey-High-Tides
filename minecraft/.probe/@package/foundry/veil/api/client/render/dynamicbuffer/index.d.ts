import { $Codec } from "@package/com/mojang/serialization";
import { $GlslTypeSpecifier$BuiltinType } from "@package/io/github/ocelot/glslprocessor/api/grammar";
import { $Map_ } from "@package/java/util";
import { $Enum, $Record } from "@package/java/lang";

declare module "@package/foundry/veil/api/client/render/dynamicbuffer" {
    export class $DynamicBufferType extends $Enum<$DynamicBufferType> {
        getInternalFormat(): number;
        getMask(): number;
        static addMacros(arg0: number, arg1: $Map_<string, string>): void;
        getTexelFormat(): number;
        getMacroName(): string;
        getOutputDeclaration(arg0: number): string;
        getTypeGlsl(): string;
        getSourceName(): string;
        getName(): string;
        static values(): $DynamicBufferType[];
        static valueOf(arg0: string): $DynamicBufferType;
        static decode(arg0: number): $DynamicBufferType[];
        static encode(...arg0: $DynamicBufferType_[]): number;
        getType(): $GlslTypeSpecifier$BuiltinType;
        static ALBEDO: $DynamicBufferType;
        static CODEC: $Codec<$DynamicBufferType>;
        static LIGHT_COLOR: $DynamicBufferType;
        static PACKED_LIST_CODEC: $Codec<number>;
        static LIGHT_UV: $DynamicBufferType;
        static DEBUG: $DynamicBufferType;
        static NORMAL: $DynamicBufferType;
        get internalFormat(): number;
        get mask(): number;
        get texelFormat(): number;
        get macroName(): string;
        get typeGlsl(): string;
        get sourceName(): string;
        get type(): $GlslTypeSpecifier$BuiltinType;
    }
    /**
     * Values that may be interpreted as {@link $DynamicBufferType}.
     */
    export type $DynamicBufferType_ = "albedo" | "normal" | "light_uv" | "light_color" | "debug";
    export class $DynamicBuffersChange extends $Record {
        enabledBuffersMask(): number;
        hasChanged(arg0: $DynamicBufferType_): boolean;
        getEnabledBuffers(): $DynamicBufferType[];
        /**
         * @deprecated
         */
        getPreviouslyEnabledBuffersMask(): number;
        wasPreviouslyEnabled(arg0: $DynamicBufferType_): boolean;
        /**
         * @deprecated
         */
        getEnabledBuffersMask(): number;
        previouslyEnabledBuffersMask(): number;
        getPreviouslyEnabledBuffers(): $DynamicBufferType[];
        isEnabled(arg0: $DynamicBufferType_): boolean;
        constructor(previouslyEnabledBuffersMask: number, enabledBuffersMask: number);
        get enabledBuffers(): $DynamicBufferType[];
        get previouslyEnabledBuffers(): $DynamicBufferType[];
    }
    /**
     * Values that may be interpreted as {@link $DynamicBuffersChange}.
     */
    export type $DynamicBuffersChange_ = { previouslyEnabledBuffersMask?: number, enabledBuffersMask?: number,  } | [previouslyEnabledBuffersMask?: number, enabledBuffersMask?: number, ];
}
