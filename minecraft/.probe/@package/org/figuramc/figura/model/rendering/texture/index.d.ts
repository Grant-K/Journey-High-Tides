import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $Path_ } from "@package/java/nio/file";
import { $TextureCustomization } from "@package/org/figuramc/figura/model";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Avatar } from "@package/org/figuramc/figura/avatar";
import { $FiguraVec2, $FiguraVec4 } from "@package/org/figuramc/figura/math/vector";
import { $SimpleTexture } from "@package/net/minecraft/client/renderer/texture";
import { $UUID_ } from "@package/java/util";
import { $Object, $Enum } from "@package/java/lang";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $LuaFunction } from "@package/org/luaj/vm2";
import { $FiguraMat4 } from "@package/org/figuramc/figura/math/matrix";

declare module "@package/org/figuramc/figura/model/rendering/texture" {
    export class $FiguraTextureSet {
        uploadIfNeeded(): void;
        getOverrideTexture(owner: $UUID_, pair: $TextureCustomization): $ResourceLocation;
        getWidth(): number;
        getHeight(): number;
        clean(): void;
        textures: $FiguraTexture[];
        name: string;
        constructor(name: string, mainData: $FiguraTexture, emissiveData: $FiguraTexture, specularData: $FiguraTexture, normalData: $FiguraTexture);
        get width(): number;
        get height(): number;
    }
    export class $FiguraTexture extends $SimpleTexture {
        __index(arg: string): $Object;
        uploadIfDirty(): void;
        writeTexture(dest: $Path_): void;
        getPixel(x: number, y: number): $FiguraVec4;
        setPixel(x: number, y: number, r: $Object, g: number, b: number, a: number): $FiguraTexture;
        applyMatrix(x: number, y: number, width: number, height: number, matrix: $FiguraMat4, clip: boolean): $FiguraTexture;
        restore(): $FiguraTexture;
        applyFunc(x: number, y: number, width: number, height: number, _function: $LuaFunction): $FiguraTexture;
        getDimensions(): $FiguraVec2;
        getWidth(): number;
        getHeight(): number;
        pixel(x: number, y: number, r: $Object, g: number, b: number, a: number): $FiguraTexture;
        getPath(): string;
        getName(): string;
        update(): $FiguraTexture;
        fill(x: number, y: number, width: number, height: number, r: $Object, g: number, b: number, a: number): $FiguraTexture;
        save(): string;
        copy(): $NativeImage;
        static NOT_ASSIGNED: number;
        constructor(owner: $Avatar, name: string, image: $NativeImage);
        constructor(owner: $Avatar, name: string, data: number[]);
        constructor(owner: $Avatar, name: string, width: number, height: number);
        get dimensions(): $FiguraVec2;
        get width(): number;
        get height(): number;
        get path(): string;
        get name(): string;
    }
    export class $RenderTypes extends $Enum<$RenderTypes> {
        isOffset(): boolean;
        get(id: $ResourceLocation_): $RenderType;
        static values(): $RenderTypes[];
        static valueOf(name: string): $RenderTypes;
        static EYES: $RenderTypes;
        static LINES_STRIP: $RenderTypes;
        static CUTOUT: $RenderTypes;
        static GLINT: $RenderTypes;
        static END_GATEWAY: $RenderTypes;
        static TEXTURED_PORTAL: $RenderTypes;
        static TRANSLUCENT_CULL: $RenderTypes;
        static EMISSIVE: $RenderTypes;
        static LINES: $RenderTypes;
        static CUTOUT_EMISSIVE_SOLID: $RenderTypes;
        static GLINT2: $RenderTypes;
        static CUTOUT_CULL: $RenderTypes;
        static EMISSIVE_SOLID: $RenderTypes;
        static TEXTURED_GLINT: $RenderTypes;
        static TRANSLUCENT: $RenderTypes;
        static END_PORTAL: $RenderTypes;
        static BLURRY: $RenderTypes;
        static NONE: $RenderTypes;
        static SOLID: $RenderTypes;
        get offset(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RenderTypes}.
     */
    export type $RenderTypes_ = "none" | "cutout" | "cutout_cull" | "cutout_emissive_solid" | "translucent" | "translucent_cull" | "emissive" | "emissive_solid" | "eyes" | "end_portal" | "end_gateway" | "textured_portal" | "glint" | "glint2" | "textured_glint" | "lines" | "lines_strip" | "solid" | "blurry";
}
