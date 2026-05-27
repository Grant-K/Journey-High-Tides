import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $LightMatrix, $LC } from "@package/codechicken/lib/render/lighting";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $RenderType, $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $IVertexOperation, $IVertexSource, $VertexAttribute, $CCRenderPipeline } from "@package/codechicken/lib/render/pipeline";
import { $Matrix4, $Vertex5, $Vector3 } from "@package/codechicken/lib/vec";
import { $BufferBuilder, $PoseStack, $VertexConsumer, $VertexFormat } from "@package/com/mojang/blaze3d/vertex";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $ColourRGBA, $Colour } from "@package/codechicken/lib/colour";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $CachedFormat } from "@package/codechicken/lib/model";
export * as pipeline from "@package/codechicken/lib/render/pipeline";

declare module "@package/codechicken/lib/render" {
    export class $CCRenderState {
        getVertexFormat(): $VertexFormat;
        runPipeline(): void;
        setPipeline(arg0: $IVertexSource, arg1: number, arg2: number, ...arg3: $IVertexOperation[]): void;
        setPipeline(...arg0: $IVertexOperation[]): void;
        setFluidColour(arg0: $FluidStack_): void;
        setFluidColour(arg0: $FluidStack_, arg1: number): void;
        preRenderWorld(arg0: $BlockAndTintGetter, arg1: $BlockPos_): void;
        setVertexRange(arg0: number, arg1: number): void;
        writeVert(): void;
        bind(arg0: $RenderType, arg1: $MultiBufferSource_, arg2: $Matrix4): void;
        bind(arg0: $BufferBuilder): void;
        bind(arg0: $RenderType, arg1: $MultiBufferSource_): void;
        bind(arg0: $RenderType, arg1: $MultiBufferSource_, arg2: $PoseStack): void;
        bind(arg0: $VertexConsumer, arg1: $VertexFormat): void;
        setBrightness(arg0: $Entity, arg1: number): void;
        setBrightness(arg0: $BlockAndTintGetter, arg1: $BlockPos_): void;
        getColour(): $ColourRGBA;
        getConsumer(): $VertexConsumer;
        bindModel(arg0: $IVertexSource): void;
        setColour(arg0: $Colour): void;
        setModel(arg0: $IVertexSource): void;
        setModel(arg0: $IVertexSource, arg1: number, arg2: number): void;
        static instance(): $CCRenderState;
        render(): void;
        render(...arg0: $IVertexOperation[]): void;
        reset(): void;
        cFmt: $CachedFormat;
        lightingAttrib: $VertexAttribute<number[]>;
        vert: $Vertex5;
        fmt: $VertexFormat;
        colourAttrib: $VertexAttribute<number[]>;
        lastVertexIndex: number;
        alphaOverride: number;
        lightMatrix: $LightMatrix;
        baseColour: number;
        sprite: $TextureAtlasSprite;
        model: $IVertexSource;
        normalAttrib: $VertexAttribute<$Vector3[]>;
        sideAttrib: $VertexAttribute<number[]>;
        firstVertexIndex: number;
        normal: $Vector3;
        side: number;
        overlay: number;
        /**
         * @deprecated
         */
        hackyReallyDontComputeLighting: boolean;
        computeLighting: boolean;
        pipeline: $CCRenderPipeline;
        r: $VertexConsumer;
        colour: number;
        brightness: number;
        vertexIndex: number;
        lc: $LC;
        lightCoordAttrib: $VertexAttribute<$LC[]>;
        get vertexFormat(): $VertexFormat;
        get consumer(): $VertexConsumer;
    }
}
