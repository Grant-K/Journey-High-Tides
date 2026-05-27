import { $AnimationMetadataSection } from "@package/net/minecraft/client/resources/metadata/animation";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $TextureAtlasSprite, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $Pair, $Serializer } from "@package/com/supermartijn642/fusion/api/util";

declare module "@package/com/supermartijn642/fusion/api/texture" {
    export class $SpritePreparationContext {
    }
    export interface $SpritePreparationContext {
        getIdentifier(): $ResourceLocation;
        getTextureHeight(): number;
        getTextureWidth(): number;
        getOriginalFrameWith(): number;
        getOriginalFrameHeight(): number;
        getOriginalFrameSize(): $Pair<number, number>;
        getAnimationMetadata(): $AnimationMetadataSection;
        get identifier(): $ResourceLocation;
        get textureHeight(): number;
        get textureWidth(): number;
        get originalFrameWith(): number;
        get originalFrameHeight(): number;
        get originalFrameSize(): $Pair<number, number>;
        get animationMetadata(): $AnimationMetadataSection;
    }
    export class $SpriteCreationContext {
    }
    export interface $SpriteCreationContext {
        getAtlas(): $TextureAtlas;
        getTextureHeight(): number;
        getTextureWidth(): number;
        createOriginalSprite(): $TextureAtlasSprite;
        getAtlasWidth(): number;
        getAtlasHeight(): number;
        getSpritePositionX(): number;
        getSpritePositionY(): number;
        getTextureIdentifier(): $ResourceLocation;
        getTextureBuffers(): $NativeImage[];
        getSpriteWidth(): number;
        getSpriteHeight(): number;
        getMipmapLevels(): number;
        get atlas(): $TextureAtlas;
        get textureHeight(): number;
        get textureWidth(): number;
        get atlasWidth(): number;
        get atlasHeight(): number;
        get spritePositionX(): number;
        get spritePositionY(): number;
        get textureIdentifier(): $ResourceLocation;
        get textureBuffers(): $NativeImage[];
        get spriteWidth(): number;
        get spriteHeight(): number;
        get mipmapLevels(): number;
    }
    export class $TextureType<T> {
    }
    export interface $TextureType<T> extends $Serializer<T> {
        getFrameSize(context: $SpritePreparationContext, data: T): $Pair<number, number>;
        createSprite(context: $SpriteCreationContext, data: T): $TextureAtlasSprite;
    }
}
