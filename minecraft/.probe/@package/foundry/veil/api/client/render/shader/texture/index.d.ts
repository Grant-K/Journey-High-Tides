import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $TextureFilter } from "@package/foundry/veil/api/client/render/texture";
import { $AdvancedFbo } from "@package/foundry/veil/api/client/render/framebuffer";
import { $Enum } from "@package/java/lang";

declare module "@package/foundry/veil/api/client/render/shader/texture" {
    export class $ShaderTextureSource {
        static CODEC: $Codec<$ShaderTextureSource>;
        static GLOBAL_CONTEXT: $ShaderTextureSource$Context;
    }
    export interface $ShaderTextureSource {
        getTarget(arg0: $ShaderTextureSource$Context_): number;
        type(): $ShaderTextureSource$Type;
        filter(): $TextureFilter;
        getId(arg0: $ShaderTextureSource$Context_): number;
    }
    export class $ShaderTextureSource$Context {
    }
    export interface $ShaderTextureSource$Context {
        getTextureTarget(arg0: $ResourceLocation_): number;
        getFramebuffer(arg0: $ResourceLocation_): $AdvancedFbo;
        getTexture(arg0: $ResourceLocation_): number;
    }
    /**
     * Values that may be interpreted as {@link $ShaderTextureSource$Context}.
     */
    export type $ShaderTextureSource$Context_ = ((arg0: $ResourceLocation) => $AdvancedFbo);
    export class $ShaderTextureSource$Type extends $Enum<$ShaderTextureSource$Type> {
        codec(): $MapCodec<$ShaderTextureSource>;
        static values(): $ShaderTextureSource$Type[];
        static valueOf(arg0: string): $ShaderTextureSource$Type;
        static LOCATION: $ShaderTextureSource$Type;
        static CODEC: $Codec<$ShaderTextureSource$Type>;
        static FRAMEBUFFER: $ShaderTextureSource$Type;
    }
    /**
     * Values that may be interpreted as {@link $ShaderTextureSource$Type}.
     */
    export type $ShaderTextureSource$Type_ = "location" | "framebuffer";
}
