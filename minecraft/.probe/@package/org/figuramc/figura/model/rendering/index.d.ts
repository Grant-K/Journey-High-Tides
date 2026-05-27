import { $MultiBufferSource_, $MultiBufferSource } from "@package/net/minecraft/client/renderer";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $FiguraModelPart, $VanillaModelData, $ParentType_, $ParentType } from "@package/org/figuramc/figura/model";
import { $ConcurrentLinkedQueue } from "@package/java/util/concurrent";
import { $Avatar } from "@package/org/figuramc/figura/avatar";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $FiguraTexture, $FiguraTextureSet } from "@package/org/figuramc/figura/model/rendering/texture";
import { $FiguraVec2, $FiguraVec3 } from "@package/org/figuramc/figura/math/vector";
import { $HashMap, $List_ } from "@package/java/util";
import { $Enum, $Object } from "@package/java/lang";
import { $FiguraMat3, $FiguraMat4 } from "@package/org/figuramc/figura/math/matrix";
export * as texture from "@package/org/figuramc/figura/model/rendering/texture";

declare module "@package/org/figuramc/figura/model/rendering" {
    export class $Vertex {
        getNormal(): $FiguraVec3;
        setNormal(vec: $FiguraVec3): void;
        setNormal(x: $Object, y: number, z: number): $Vertex;
        setPos(x: $Object, y: number, z: number): $Vertex;
        getPos(): $FiguraVec3;
        uv(x: $Object, y: number): $Vertex;
        normal(x: $Object, y: number, z: number): $Vertex;
        setUV(x: $Object, y: number): $Vertex;
        getUV(): $FiguraVec2;
        pos(x: $Object, y: number, z: number): $Vertex;
        copy(): $Vertex;
        u: number;
        v: number;
        x: number;
        y: number;
        z: number;
        nx: number;
        ny: number;
        nz: number;
        constructor(x: number, y: number, z: number, u: number, v: number, nx: number, ny: number, nz: number);
    }
    export class $AvatarRenderer {
        sortParts(): void;
        static entityToWorldMatrix(e: $Entity, delta: number): $FiguraMat4;
        static getYawOffsetRot(e: $Entity, delta: number): number;
        static worldToViewMatrix(): $FiguraMat4;
        static worldToCameraPosMatrix(): $FiguraMat4;
        invalidate(): void;
        renderSpecialParts(): number;
        setMatrices(matrices: $PoseStack): void;
        setMatrices(camX: number, camY: number, camZ: number, matrices: $PoseStack): void;
        updateMatrices(): void;
        setupRenderer(currentFilterScheme: $PartFilterScheme_, bufferSource: $MultiBufferSource_, matrices: $PoseStack, tickDelta: number, light: number, alpha: number, overlay: number, translucent: boolean, glowing: boolean, camX: number, camY: number, camZ: number): void;
        setupRenderer(currentFilterScheme: $PartFilterScheme_, bufferSource: $MultiBufferSource_, matrices: $PoseStack, tickDelta: number, light: number, alpha: number, overlay: number, translucent: boolean, glowing: boolean): void;
        render(): number;
        getTexture(name: string): $FiguraTexture;
        translucent: boolean;
        doIrisEmissiveFix: boolean;
        textures: $HashMap<string, $FiguraTexture>;
        vanillaModelData: $VanillaModelData;
        updateLight: boolean;
        ignoreVanillaVisibility: boolean;
        root: $FiguraModelPart;
        alpha: number;
        bufferSource: $MultiBufferSource;
        posMat: $FiguraMat4;
        allowHiddenTransforms: boolean;
        interceptRendersIntoFigura: boolean;
        allowPivotParts: boolean;
        allowMatrixUpdate: boolean;
        normalMat: $FiguraMat3;
        overlay: number;
        itemToRender: $FiguraModelPart;
        offsetRenderLayers: boolean;
        yaw: number;
        customTextures: $HashMap<string, $FiguraTexture>;
        tickDelta: number;
        glowing: boolean;
        light: number;
        entity: $Entity;
        currentFilterScheme: $PartFilterScheme;
        pivotCustomizations: $HashMap<$ParentType, $ConcurrentLinkedQueue<$Pair<$FiguraMat4, $FiguraMat3>>>;
        constructor(avatar: $Avatar);
    }
    export class $ImmediateAvatarRenderer extends $AvatarRenderer {
        checkEmpty(): void;
        pushFaces(faceCount: number, remainingComplexity: number[], textureSet: $FiguraTextureSet, vertices: $List_<$Vertex>): void;
        translucent: boolean;
        doIrisEmissiveFix: boolean;
        textures: $HashMap<string, $FiguraTexture>;
        vanillaModelData: $VanillaModelData;
        updateLight: boolean;
        ignoreVanillaVisibility: boolean;
        root: $FiguraModelPart;
        alpha: number;
        bufferSource: $MultiBufferSource;
        posMat: $FiguraMat4;
        allowHiddenTransforms: boolean;
        interceptRendersIntoFigura: boolean;
        allowPivotParts: boolean;
        allowMatrixUpdate: boolean;
        normalMat: $FiguraMat3;
        overlay: number;
        itemToRender: $FiguraModelPart;
        static CAMERA_POS_TO_WORLD_MATRIX: $FiguraMat4;
        offsetRenderLayers: boolean;
        yaw: number;
        customTextures: $HashMap<string, $FiguraTexture>;
        tickDelta: number;
        glowing: boolean;
        light: number;
        entity: $Entity;
        currentFilterScheme: $PartFilterScheme;
        pivotCustomizations: $HashMap<$ParentType, $ConcurrentLinkedQueue<$Pair<$FiguraMat4, $FiguraMat3>>>;
        constructor(avatar: $Avatar);
    }
    export class $EntityRenderMode extends $Enum<$EntityRenderMode> {
        static values(): $EntityRenderMode[];
        static valueOf(name: string): $EntityRenderMode;
        static OTHER: $EntityRenderMode;
        static MINECRAFT_GUI: $EntityRenderMode;
        static PAPERDOLL: $EntityRenderMode;
        static FIRST_PERSON_WORLD: $EntityRenderMode;
        static FIGURA_GUI: $EntityRenderMode;
        static RENDER: $EntityRenderMode;
        static FIRST_PERSON: $EntityRenderMode;
        static WORLD: $EntityRenderMode;
    }
    /**
     * Values that may be interpreted as {@link $EntityRenderMode}.
     */
    export type $EntityRenderMode_ = "figura_gui" | "paperdoll" | "minecraft_gui" | "first_person" | "first_person_world" | "render" | "world" | "other";
    export class $PartFilterScheme$SchemeFunction {
    }
    export interface $PartFilterScheme$SchemeFunction {
    }
    /**
     * Values that may be interpreted as {@link $PartFilterScheme$SchemeFunction}.
     */
    export type $PartFilterScheme$SchemeFunction_ = (() => void);
    export class $PartFilterScheme extends $Enum<$PartFilterScheme> {
        static values(): $PartFilterScheme[];
        test(toTest: $ParentType_, prevResult: boolean): boolean;
        static valueOf(name: string): $PartFilterScheme;
        static HEAD: $PartFilterScheme;
        static PIVOTS: $PartFilterScheme;
        static LEFT_ARM: $PartFilterScheme;
        static PORTRAIT: $PartFilterScheme;
        static SKULL: $PartFilterScheme;
        static MODEL: $PartFilterScheme;
        static CAPE: $PartFilterScheme;
        parentType: $ParentType;
        static TRIDENT: $PartFilterScheme;
        static RIGHT_ELYTRA: $PartFilterScheme;
        static ITEM: $PartFilterScheme;
        predicate: $PartFilterScheme$SchemeFunction;
        static ARROW: $PartFilterScheme;
        static HUD: $PartFilterScheme;
        static LEFT_ELYTRA: $PartFilterScheme;
        static RIGHT_ARM: $PartFilterScheme;
        static WORLD: $PartFilterScheme;
        initialValue: boolean;
    }
    /**
     * Values that may be interpreted as {@link $PartFilterScheme}.
     */
    export type $PartFilterScheme_ = "model" | "head" | "left_arm" | "right_arm" | "cape" | "left_elytra" | "right_elytra" | "world" | "hud" | "skull" | "portrait" | "arrow" | "trident" | "item" | "pivots";
}
