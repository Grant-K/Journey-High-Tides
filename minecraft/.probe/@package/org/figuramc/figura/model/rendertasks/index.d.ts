import { $EntityAPI } from "@package/org/figuramc/figura/lua/api/entity";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $PartCustomization$PartCustomizationStack, $FiguraModelPart } from "@package/org/figuramc/figura/model";
import { $Avatar } from "@package/org/figuramc/figura/avatar";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $FiguraVec2, $FiguraVec4, $FiguraVec3 } from "@package/org/figuramc/figura/math/vector";
import { $Object } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $Vertex } from "@package/org/figuramc/figura/model/rendering";
import { $FiguraMat3, $FiguraMat4 } from "@package/org/figuramc/figura/math/matrix";

declare module "@package/org/figuramc/figura/model/rendertasks" {
    export class $EntityTask extends $RenderTask {
        setHeadRotation(vec2: $FiguraVec2): $EntityTask;
        asEntity(): $EntityAPI<never>;
        updateWalkingDistance(distance: number): $EntityTask;
        setNbt(nbtOrId: string, nullOrNbt: string): $EntityTask;
        constructor(name: string, owner: $Avatar, parent: $FiguraModelPart);
        set headRotation(value: $FiguraVec2);
    }
    export class $BlockTask extends $RenderTask {
        block(block: $Object): $BlockTask;
        setBlock(block: $Object): $BlockTask;
        constructor(name: string, owner: $Avatar, parent: $FiguraModelPart);
    }
    export class $TextTask extends $RenderTask {
        setWidth(width: number): $TextTask;
        getBackgroundColor(): $FiguraVec4;
        hasBackground(): boolean;
        setAlignment(alignment: string): $TextTask;
        backgroundColor(r: $Object, g: number, b: number, a: number): $TextTask;
        setOpacity(opacity: number): $TextTask;
        outlineColor(x: $Object, y: number, z: number): $TextTask;
        seeThrough(seeThrough: boolean): $TextTask;
        hasOutline(): boolean;
        hasShadow(): boolean;
        setBackgroundColor(r: $Object, g: number, b: number, a: number): $TextTask;
        setBackground(background: boolean): $TextTask;
        setOutline(outline: boolean): $TextTask;
        getOutlineColor(): $FiguraVec3;
        setOutlineColor(x: $Object, y: number, z: number): $TextTask;
        hasWrap(): boolean;
        isSeeThrough(): boolean;
        setSeeThrough(seeThrough: boolean): $TextTask;
        getWidth(): number;
        setText(text: string): $TextTask;
        text(text: string): $TextTask;
        alignment(alignment: string): $TextTask;
        setShadow(shadow: boolean): $TextTask;
        shadow(shadow: boolean): $TextTask;
        getOpacity(): number;
        setWrap(wrap: boolean): $TextTask;
        width(width: number): $TextTask;
        getText(): string;
        getAlignment(): string;
        background(background: boolean): $TextTask;
        opacity(opacity: number): $TextTask;
        outline(outline: boolean): $TextTask;
        wrap(wrap: boolean): $TextTask;
        constructor(name: string, owner: $Avatar, parent: $FiguraModelPart);
    }
    export class $RenderTask {
        setVisible(visible: boolean): $RenderTask;
        setOverlay(whiteOverlay: $Object, hurtOverlay: number): $RenderTask;
        matrix(mat: $FiguraMat4): $RenderTask;
        setLight(blockLight: $Object, skyLight: number): $RenderTask;
        getOverlay(): $FiguraVec2;
        light(blockLight: $Object, skyLight: number): $RenderTask;
        getScale(): $FiguraVec3;
        rot(x: $Object, y: number, z: number): $RenderTask;
        setPos(x: $Object, y: number, z: number): $RenderTask;
        isVisible(): boolean;
        setRot(x: $Object, y: number, z: number): $RenderTask;
        shouldRender(): boolean;
        getPos(): $FiguraVec3;
        getNormalMatrix(): $FiguraMat3;
        getPositionMatrix(): $FiguraMat4;
        getLight(): $FiguraVec2;
        getPositionMatrixRaw(): $FiguraMat4;
        getNormalMatrixRaw(): $FiguraMat3;
        visible(visible: boolean): $RenderTask;
        setScale(x: $Object, y: number, z: number): $RenderTask;
        setMatrix(matrix: $FiguraMat4): $RenderTask;
        getRot(): $FiguraVec3;
        getComplexity(): number;
        pos(x: $Object, y: number, z: number): $RenderTask;
        render(stack: $PartCustomization$PartCustomizationStack, buffer: $MultiBufferSource_, light: number, overlay: number): void;
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number): void;
        overlay(whiteOverlay: $Object, hurtOverlay: number): $RenderTask;
        getName(): string;
        remove(): $RenderTask;
        scale(x: $Object, y: number, z: number): $RenderTask;
        constructor(name: string, owner: $Avatar, parent: $FiguraModelPart);
        get normalMatrix(): $FiguraMat3;
        get positionMatrix(): $FiguraMat4;
        get positionMatrixRaw(): $FiguraMat4;
        get normalMatrixRaw(): $FiguraMat3;
        get complexity(): number;
        get name(): string;
    }
    export class $ItemTask extends $RenderTask {
        setItem(item: $Object): $ItemTask;
        setDisplayMode(mode: string): $ItemTask;
        displayMode(mode: string): $ItemTask;
        getDisplayMode(): string;
        item(item: $Object): $ItemTask;
        constructor(name: string, owner: $Avatar, parent: $FiguraModelPart);
    }
    export class $SpriteTask extends $RenderTask {
        renderType(renderType: string): $SpriteTask;
        getVertices(): $List<$Vertex>;
        getColor(): $FiguraVec4;
        getRenderType(): string;
        setTexture(texture: $Object, width: $Object, height: number): $SpriteTask;
        texture(texture: $Object, width: number, height: number): $SpriteTask;
        uv(u: $Object, v: number): $SpriteTask;
        setRenderType(renderType: string): $SpriteTask;
        setUVPixels(u: $Object, v: number): $SpriteTask;
        uvPixels(u: $Object, v: number): $SpriteTask;
        getUVPixels(): $FiguraVec2;
        getDimensions(): $FiguraVec2;
        setColor(r: $Object, g: number, b: number, a: number): $SpriteTask;
        getRegion(): $FiguraVec2;
        region(w: $Object, h: number): $SpriteTask;
        setRegion(w: $Object, h: number): $SpriteTask;
        setUV(u: $Object, v: number): $SpriteTask;
        setDimensions(w: $Object, h: number): $SpriteTask;
        getUV(): $FiguraVec2;
        getSize(): $FiguraVec2;
        color(r: $Object, g: number, b: number, a: number): $SpriteTask;
        setSize(w: $Object, h: number): $SpriteTask;
        getTexture(): string;
        size(w: $Object, h: number): $SpriteTask;
        dimensions(w: $Object, h: number): $SpriteTask;
        constructor(name: string, owner: $Avatar, parent: $FiguraModelPart);
        get vertices(): $List<$Vertex>;
    }
}
