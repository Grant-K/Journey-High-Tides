import { $Function_ } from "@package/java/util/function";
import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $Material as $Material$1 } from "@package/net/minecraft/client/resources/model";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";

declare module "@package/codechicken/lib/gui/modular/sprite" {
    export class $Material {
        atlasLocation(): $ResourceLocation;
        renderType(arg0: $Function_<$ResourceLocation, $RenderType>): $RenderType;
        sprite(): $TextureAtlasSprite;
        texture(): $ResourceLocation;
        getVanillaMat(): $Material$1;
        static fromAtlas(arg0: $ResourceLocation_, arg1: string): $Material;
        static fromSprite(arg0: $TextureAtlasSprite): $Material;
        buffer(arg0: $MultiBufferSource_, arg1: $Function_<$ResourceLocation, $RenderType>): $VertexConsumer;
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: $Function_<$ResourceLocation, $TextureAtlasSprite>);
        get vanillaMat(): $Material$1;
    }
}
