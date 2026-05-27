import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $TextureAtlasSprite, $AbstractTexture } from "@package/net/minecraft/client/renderer/texture";
import { $Map_, $Deque, $Map } from "@package/java/util";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
export * as layers from "@package/org/figuramc/figura/mixin/render/layers";
export * as renderers from "@package/org/figuramc/figura/mixin/render/renderers";

declare module "@package/org/figuramc/figura/mixin/render" {
    export class $MissingTextureAtlasSpriteAccessor {
        static generateImage(width: number, height: number): $NativeImage;
    }
    export interface $MissingTextureAtlasSpriteAccessor {
    }
    export class $TextureAtlasAccessor {
    }
    export interface $TextureAtlasAccessor {
        getTexturesByName(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        getWidth(): number;
        getHeight(): number;
        get texturesByName(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        get width(): number;
        get height(): number;
    }
    export class $TextureManagerAccessor {
    }
    export interface $TextureManagerAccessor {
        getByPath(): $Map<$ResourceLocation, $AbstractTexture>;
        get byPath(): $Map<$ResourceLocation, $AbstractTexture>;
    }
    /**
     * Values that may be interpreted as {@link $TextureManagerAccessor}.
     */
    export type $TextureManagerAccessor_ = (() => $Map_<$ResourceLocation_, $AbstractTexture>);
    export class $PoseStackAccessor {
    }
    export interface $PoseStackAccessor {
        getPoseStack(): $Deque<$PoseStack$Pose>;
        get poseStack(): $Deque<$PoseStack$Pose>;
    }
    /**
     * Values that may be interpreted as {@link $PoseStackAccessor}.
     */
    export type $PoseStackAccessor_ = (() => $Deque<$PoseStack$Pose>);
    export class $ModelManagerAccessor {
        static getVanillaAtlases(): $Map<$ResourceLocation, $ResourceLocation>;
        static get vanillaAtlases(): $Map<$ResourceLocation, $ResourceLocation>;
    }
    export interface $ModelManagerAccessor {
    }
}
