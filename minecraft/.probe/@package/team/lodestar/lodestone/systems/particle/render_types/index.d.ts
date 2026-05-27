import { $Tesselator, $BufferBuilder } from "@package/com/mojang/blaze3d/vertex";
import { $TextureManager } from "@package/net/minecraft/client/renderer/texture";

declare module "@package/team/lodestar/lodestone/systems/particle/render_types" {
    export class $LodestoneScreenParticleRenderType {
        static ADDITIVE: $LodestoneScreenParticleRenderType;
        static LUMITRANSPARENT: $LodestoneScreenParticleRenderType;
        static TRANSPARENT: $LodestoneScreenParticleRenderType;
    }
    export interface $LodestoneScreenParticleRenderType {
        begin(arg0: $Tesselator, arg1: $TextureManager): $BufferBuilder;
        end(arg0: $BufferBuilder): void;
    }
}
