import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $TextureAtlasSprite, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $Map_ } from "@package/java/util";
import { $Vector2f, $Vector3f } from "@package/org/joml";

declare module "@package/appeng/thirdparty/fabric" {
    export class $SpriteFinderImpl$SpriteFinderAccess {
    }
    export interface $SpriteFinderImpl$SpriteFinderAccess {
        fabric_spriteFinder(): $SpriteFinderImpl;
    }
    /**
     * Values that may be interpreted as {@link $SpriteFinderImpl$SpriteFinderAccess}.
     */
    export type $SpriteFinderImpl$SpriteFinderAccess_ = (() => $SpriteFinderImpl);
    export class $SpriteFinderImpl implements $SpriteFinder {
        static get(arg0: $TextureAtlas): $SpriteFinderImpl;
        find(arg0: $QuadView): $TextureAtlasSprite;
        find(arg0: number, arg1: number): $TextureAtlasSprite;
        constructor(arg0: $Map_<$ResourceLocation_, $TextureAtlasSprite>, arg1: $TextureAtlas);
    }
    export class $SpriteFinder {
        static get(arg0: $TextureAtlas): $SpriteFinder;
    }
    export interface $SpriteFinder {
        find(arg0: $QuadView): $TextureAtlasSprite;
        find(arg0: number, arg1: number): $TextureAtlasSprite;
    }
    export class $QuadView {
        static VANILLA_QUAD_STRIDE: number;
        static VANILLA_VERTEX_STRIDE: number;
    }
    export interface $QuadView {
        cullFace(): $Direction;
        normalZ(arg0: number): number;
        hasNormal(arg0: number): boolean;
        lightmap(arg0: number): number;
        lightFace(): $Direction;
        toVanilla(arg0: number[], arg1: number): void;
        tag(): number;
        normalX(arg0: number): number;
        normalY(arg0: number): number;
        copyTo(arg0: $MutableQuadView): void;
        copyPos(arg0: number, arg1: $Vector3f): $Vector3f;
        hasShade(): boolean;
        faceNormal(): $Vector3f;
        hasAmbientOcclusion(): boolean;
        colorIndex(): number;
        toBakedQuad(arg0: $TextureAtlasSprite): $BakedQuad;
        posByIndex(arg0: number, arg1: number): number;
        copyUv(arg0: number, arg1: $Vector2f): $Vector2f;
        copyNormal(arg0: number, arg1: $Vector3f): $Vector3f;
        toBlockBakedQuad(): $BakedQuad;
        nominalFace(): $Direction;
        color(arg0: number): number;
        u(arg0: number): number;
        y(arg0: number): number;
        x(arg0: number): number;
        v(arg0: number): number;
        z(arg0: number): number;
    }
    export class $MutableQuadView {
        static getInstance(): $MutableQuadView;
        static BAKE_LOCK_UV: number;
        static BAKE_NORMALIZED: number;
        static BAKE_FLIP_V: number;
        static BAKE_ROTATE_90: number;
        static BAKE_FLIP_U: number;
        static BAKE_ROTATE_NONE: number;
        static BAKE_ROTATE_180: number;
        static BAKE_ROTATE_270: number;
        static get instance(): $MutableQuadView;
    }
    export interface $MutableQuadView extends $QuadView {
        cullFace(arg0: $Direction_): $MutableQuadView;
        ambientOcclusion(arg0: boolean): $MutableQuadView;
        shade(arg0: boolean): $MutableQuadView;
        lightmap(arg0: number, arg1: number): $MutableQuadView;
        lightmap(arg0: number, arg1: number, arg2: number, arg3: number): $MutableQuadView;
        uv(arg0: number, arg1: $Vector2f): $MutableQuadView;
        uv(arg0: number, arg1: number, arg2: number): $MutableQuadView;
        fromVanilla(arg0: number[], arg1: number): $MutableQuadView;
        fromVanilla(arg0: $BakedQuad, arg1: $Direction_): $MutableQuadView;
        normal(arg0: number, arg1: $Vector3f): $MutableQuadView;
        normal(arg0: number, arg1: number, arg2: number, arg3: number): $MutableQuadView;
        tag(arg0: number): $MutableQuadView;
        colorIndex(arg0: number): $MutableQuadView;
        nominalFace(arg0: $Direction_): $MutableQuadView;
        spriteBake(arg0: $TextureAtlasSprite, arg1: number): $MutableQuadView;
        color(arg0: number, arg1: number, arg2: number, arg3: number): $MutableQuadView;
        color(arg0: number, arg1: number): $MutableQuadView;
        pos(arg0: number, arg1: number, arg2: number, arg3: number): $MutableQuadView;
        pos(arg0: number, arg1: $Vector3f): $MutableQuadView;
    }
}
