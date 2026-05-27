import { $Direction } from "@package/net/minecraft/core";
import { $ModelQuadFacing } from "@package/net/caffeinemc/mods/sodium/client/model/quad/properties";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
export * as properties from "@package/net/caffeinemc/mods/sodium/client/model/quad/properties";

declare module "@package/net/caffeinemc/mods/sodium/client/model/quad" {
    export class $ModelQuadView {
    }
    export interface $ModelQuadView {
        getZ(arg0: number): number;
        getSprite(): $TextureAtlasSprite;
        getColor(arg0: number): number;
        hasColor(): boolean;
        getVertexNormal(arg0: number): number;
        getFaceNormal(): number;
        getLightFace(): $Direction;
        calculateNormal(): number;
        getAccurateNormal(arg0: number): number;
        getColorIndex(): number;
        getTexU(arg0: number): number;
        getTexV(arg0: number): number;
        getLight(arg0: number): number;
        getY(arg0: number): number;
        getX(arg0: number): number;
        getFlags(): number;
        get sprite(): $TextureAtlasSprite;
        get faceNormal(): number;
        get lightFace(): $Direction;
        get colorIndex(): number;
        get flags(): number;
    }
    export class $BakedQuadView {
    }
    export interface $BakedQuadView extends $ModelQuadView {
        getFaceNormal(): number;
        hasShade(): boolean;
        hasAO(): boolean;
        getNormalFace(): $ModelQuadFacing;
        get faceNormal(): number;
        get normalFace(): $ModelQuadFacing;
    }
}
