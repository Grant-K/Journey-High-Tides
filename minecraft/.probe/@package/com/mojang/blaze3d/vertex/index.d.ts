import { $PoseTransformStack } from "@package/dev/engine_room/flywheel/lib/transform";
import { $PoseStackAccessor as $PoseStackAccessor$2 } from "@package/org/figuramc/figura/mixin/render";
import { $ShaderInstance } from "@package/net/minecraft/client/renderer";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List, $Deque } from "@package/java/util";
import { $ByteBuffer, $FloatBuffer } from "@package/java/nio";
import { $BufferBuilderAccessor as $BufferBuilderAccessor$2 } from "@package/io/wispforest/owo/mixin";
import { $PoseStackExtension } from "@package/dev/engine_room/flywheel/impl/extension";
import { $Consumer_ } from "@package/java/util/function";
import { $OwoTessellatorExtension } from "@package/io/wispforest/owo/util/pond";
import { $MatrixStack } from "@package/foundry/veil/api/client/render";
import { $IPoseStackExtension, $IVertexConsumerExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $BufferBuilderExtension } from "@package/net/caffeinemc/mods/sodium/client/render/vertex/buffer";
import { $BufferRendererAccessor, $VertexBufferAccessor } from "@package/com/qendolin/betterclouds/mixin/runtime";
import { $Enum, $Record, $AutoCloseable } from "@package/java/lang";
import { $MemoryStack } from "@package/org/lwjgl/system";
import { $ParticleVertexer } from "@package/me/fzzyhmstrs/particle_core/interfaces";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $BlockSensitiveBufferBuilder, $MojangBufferAccessor } from "@package/net/irisshaders/iris/vertices";
import { $PoseCopy } from "@package/me/clefal/lootbeams/duck";
import { $PoseStackAccessor as $PoseStackAccessor$1 } from "@package/dev/engine_room/flywheel/impl/mixin";
import { $IVertexBuffer } from "@package/team/lodestar/lodestone/systems/rendering";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $VertexFormatExtensions } from "@package/net/caffeinemc/mods/sodium/api/vertex/format";
import { $VertexBufferHelper } from "@package/net/irisshaders/iris/helpers";
import { $PoseInvoker } from "@package/me/clefal/lootbeams/mixin";
import { $ImmutableMap } from "@package/com/google/common/collect";
import { $VertexBufferExtension, $DebugVertexBufferExt } from "@package/foundry/veil/ext";
import { $MemoryTrackingBuffer, $BufferBuilderExt } from "@package/net/irisshaders/batchedentityrendering/impl";
import { $VertexBufferWriter } from "@package/net/caffeinemc/mods/sodium/api/vertex/buffer";
import { $BufferBuilderAccessor as $BufferBuilderAccessor$1 } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $Stream } from "@package/java/util/stream";
import { $Transformation } from "@package/com/mojang/math";
import { $Vector3dc, $Matrix4f, $Vector3f, $Quaterniondc, $Matrix3f, $Vector3fc, $Quaternionf, $Quaternionfc } from "@package/org/joml";
import { $PoseStackAccessor } from "@package/org/embeddedt/modernfix/common/mixin/bugfix/entity_pose_stack";
import { $BufferBuilderAccessor } from "@package/rbasamoyai/createbigcannons/mixin/client";

declare module "@package/com/mojang/blaze3d/vertex" {
    export class $DefaultVertexFormat {
        static POSITION_COLOR_NORMAL: $VertexFormat;
        static BLIT_SCREEN: $VertexFormat;
        static PARTICLE: $VertexFormat;
        static POSITION_TEX_COLOR_NORMAL: $VertexFormat;
        static BLOCK: $VertexFormat;
        static POSITION_TEX: $VertexFormat;
        static POSITION_TEX_COLOR: $VertexFormat;
        static POSITION: $VertexFormat;
        static POSITION_TEX_LIGHTMAP_COLOR: $VertexFormat;
        static POSITION_COLOR_LIGHTMAP: $VertexFormat;
        static POSITION_COLOR: $VertexFormat;
        static POSITION_COLOR_TEX_LIGHTMAP: $VertexFormat;
        static NEW_ENTITY: $VertexFormat;
        constructor();
    }
    export class $ByteBufferBuilder implements $AutoCloseable, $MojangBufferAccessor, $MemoryTrackingBuffer {
        getAllocatedSize(): number;
        getUsedSize(): number;
        freeAndDeleteBuffer(): void;
        build(): $ByteBufferBuilder$Result;
        reserve(arg0: number): number;
        discard(): void;
        getPointer(): number;
        clear(): void;
        close(): void;
        pointer: number;
        constructor(arg0: number);
        get allocatedSize(): number;
        get usedSize(): number;
    }
    export class $VertexConsumer {
    }
    export interface $VertexConsumer extends $IVertexConsumerExtension {
        addVertex(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        addVertex(arg0: $PoseStack$Pose, arg1: $Vector3f): $VertexConsumer;
        addVertex(arg0: $Vector3f): $VertexConsumer;
        addVertex(arg0: $Matrix4f, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: number, arg1: number, arg2: number): $VertexConsumer;
        setOverlay(arg0: number): $VertexConsumer;
        setUv(arg0: number, arg1: number): $VertexConsumer;
        setUv1(arg0: number, arg1: number): $VertexConsumer;
        setUv2(arg0: number, arg1: number): $VertexConsumer;
        setNormal(arg0: number, arg1: number, arg2: number): $VertexConsumer;
        setNormal(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        setLight(arg0: number): $VertexConsumer;
        setWhiteAlpha(arg0: number): $VertexConsumer;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean): void;
        setColor(arg0: number): $VertexConsumer;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        set overlay(value: number);
        set light(value: number);
        set whiteAlpha(value: number);
    }
    export class $VertexFormat$Mode extends $Enum<$VertexFormat$Mode> {
        indexCount(arg0: number): number;
        static values(): $VertexFormat$Mode[];
        static valueOf(arg0: string): $VertexFormat$Mode;
        asGLMode: number;
        static QUADS: $VertexFormat$Mode;
        primitiveLength: number;
        primitiveStride: number;
        connectedPrimitives: boolean;
        static TRIANGLE_FAN: $VertexFormat$Mode;
        static DEBUG_LINES: $VertexFormat$Mode;
        static TRIANGLES: $VertexFormat$Mode;
        static DEBUG_LINE_STRIP: $VertexFormat$Mode;
        static LINE_STRIP: $VertexFormat$Mode;
        static LINES: $VertexFormat$Mode;
        static TRIANGLE_STRIP: $VertexFormat$Mode;
    }
    /**
     * Values that may be interpreted as {@link $VertexFormat$Mode}.
     */
    export type $VertexFormat$Mode_ = "lines" | "line_strip" | "debug_lines" | "debug_line_strip" | "triangles" | "triangle_strip" | "triangle_fan" | "quads";
    export class $VertexSorting$DistanceFunction {
    }
    export interface $VertexSorting$DistanceFunction {
        apply(arg0: $Vector3f): number;
    }
    /**
     * Values that may be interpreted as {@link $VertexSorting$DistanceFunction}.
     */
    export type $VertexSorting$DistanceFunction_ = ((arg0: $Vector3f) => number);
    export class $MeshData$SortState extends $Record {
        buildSortedIndexBuffer(arg0: $ByteBufferBuilder, arg1: $VertexSorting_): $ByteBufferBuilder$Result;
        centroids(): $Vector3f[];
        indexType(): $VertexFormat$IndexType;
        constructor(arg0: $Vector3f[], arg1: $VertexFormat$IndexType_);
    }
    /**
     * Values that may be interpreted as {@link $MeshData$SortState}.
     */
    export type $MeshData$SortState_ = { centroids?: $Vector3f[], indexType?: $VertexFormat$IndexType_,  } | [centroids?: $Vector3f[], indexType?: $VertexFormat$IndexType_, ];
    export class $VertexMultiConsumer {
        static create(arg0: $VertexConsumer, arg1: $VertexConsumer): $VertexConsumer;
        static create(...arg0: $VertexConsumer[]): $VertexConsumer;
        static create(): $VertexConsumer;
        static create(arg0: $VertexConsumer): $VertexConsumer;
        constructor();
    }
    export class $VertexMultiConsumer$Multiple extends $Record implements $VertexConsumer, $VertexBufferWriter {
        addVertex(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        addVertex(arg0: $PoseStack$Pose, arg1: $Vector3f): $VertexConsumer;
        addVertex(arg0: $Vector3f): $VertexConsumer;
        addVertex(arg0: $Matrix4f, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        setOverlay(arg0: number): $VertexConsumer;
        setNormal(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        setLight(arg0: number): $VertexConsumer;
        setWhiteAlpha(arg0: number): $VertexConsumer;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean): void;
        setColor(arg0: number): $VertexConsumer;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        canUseIntrinsics(): boolean;
        applyBakedLighting(arg0: number, arg1: $ByteBuffer): number;
        applyBakedNormals(arg0: $Vector3f, arg1: $ByteBuffer, arg2: $Matrix3f): void;
        misc(arg0: $VertexFormatElement_, ...arg1: number[]): $VertexConsumer;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): void;
        set overlay(value: number);
        set light(value: number);
        set whiteAlpha(value: number);
    }
    /**
     * Values that may be interpreted as {@link $VertexMultiConsumer$Multiple}.
     */
    export type $VertexMultiConsumer$Multiple_ = { delegates?: $VertexConsumer[],  } | [delegates?: $VertexConsumer[], ];
    export class $BufferBuilder implements $VertexConsumer, $BlockSensitiveBufferBuilder, $BufferBuilderExtension, $VertexBufferWriter, $ParticleVertexer, $BufferBuilderAccessor$1, $BufferBuilderAccessor, $BufferBuilderAccessor$2, $BufferBuilderExt {
        addVertex(arg0: number, arg1: number, arg2: number): $VertexConsumer;
        addVertex(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        setOverlay(arg0: number): $VertexConsumer;
        setUv(arg0: number, arg1: number): $VertexConsumer;
        setUv1(arg0: number, arg1: number): $VertexConsumer;
        setUv2(arg0: number, arg1: number): $VertexConsumer;
        setNormal(arg0: number, arg1: number, arg2: number): $VertexConsumer;
        setLight(arg0: number): $VertexConsumer;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean): void;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        sodium$duplicateVertex(): void;
        push(arg0: $MemoryStack, arg1: number, arg2: number, arg3: $VertexFormat): void;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        setColor(arg0: number): $VertexConsumer;
        particle_core_particleVertex(x: number, y: number, z: number, red: number, green: number, blue: number, alpha: number, u: number, v: number, light: number): void;
        beginElement(arg0: $VertexFormatElement_): number;
        beginBlock(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        endBlock(): void;
        splitStrip(): void;
        build(): $MeshData;
        buildOrThrow(): $MeshData;
        addVertex(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: $PoseStack$Pose, arg1: $Vector3f): $VertexConsumer;
        addVertex(arg0: $Vector3f): $VertexConsumer;
        addVertex(arg0: $Matrix4f, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        setNormal(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        setWhiteAlpha(arg0: number): $VertexConsumer;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        canUseIntrinsics(): boolean;
        applyBakedLighting(arg0: number, arg1: $ByteBuffer): number;
        applyBakedNormals(arg0: $Vector3f, arg1: $ByteBuffer, arg2: $Matrix3f): void;
        misc(arg0: $VertexFormatElement_, ...arg1: number[]): $VertexConsumer;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): void;
        getDrawMode(): $VertexFormat$Mode;
        isBuilding(): boolean;
        getFormat(): $VertexFormat;
        catnip$getVertices(): number;
        callBeginElement(arg0: $VertexFormatElement_): number;
        format: $VertexFormat;
        buffer: $ByteBufferBuilder;
        building: boolean;
        constructor(arg0: $ByteBufferBuilder, arg1: $VertexFormat$Mode_, arg2: $VertexFormat);
        set overlay(value: number);
        set light(value: number);
        set whiteAlpha(value: number);
        get drawMode(): $VertexFormat$Mode;
    }
    export class $VertexSorting {
        static byDistance(arg0: number, arg1: number, arg2: number): $VertexSorting;
        static byDistance(arg0: $VertexSorting$DistanceFunction_): $VertexSorting;
        static byDistance(arg0: $Vector3f): $VertexSorting;
        static ORTHOGRAPHIC_Z: $VertexSorting;
        static DISTANCE_TO_ORIGIN: $VertexSorting;
    }
    export interface $VertexSorting {
        sort(arg0: $Vector3f[]): number[];
    }
    /**
     * Values that may be interpreted as {@link $VertexSorting}.
     */
    export type $VertexSorting_ = ((arg0: $Vector3f[]) => number[]);
    export class $VertexFormatElement$Type extends $Enum<$VertexFormatElement$Type> {
        glType(): number;
        size(): number;
        static values(): $VertexFormatElement$Type[];
        static valueOf(arg0: string): $VertexFormatElement$Type;
        static UBYTE: $VertexFormatElement$Type;
        static FLOAT: $VertexFormatElement$Type;
        static BYTE: $VertexFormatElement$Type;
        static USHORT: $VertexFormatElement$Type;
        static UINT: $VertexFormatElement$Type;
        static INT: $VertexFormatElement$Type;
        static SHORT: $VertexFormatElement$Type;
    }
    /**
     * Values that may be interpreted as {@link $VertexFormatElement$Type}.
     */
    export type $VertexFormatElement$Type_ = "float" | "ubyte" | "byte" | "ushort" | "short" | "uint" | "int";
    export class $VertexFormatElement$Usage$SetupState {
    }
    export interface $VertexFormatElement$Usage$SetupState {
        setupBufferState(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
    }
    /**
     * Values that may be interpreted as {@link $VertexFormatElement$Usage$SetupState}.
     */
    export type $VertexFormatElement$Usage$SetupState_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: number) => void);
    export class $VertexFormat implements $VertexFormatExtensions {
        getVertexSize(): number;
        getOffsetsByElement(): number[];
        getElementsMask(): number;
        setupBufferState(): void;
        clearBufferState(): void;
        getImmediateDrawVertexBuffer(): $VertexBuffer;
        handler$zpo000$veil$nameImmediateDrawVertexBuffer(arg0: $CallbackInfoReturnable<any>): void;
        getElementMapping(): $ImmutableMap<string, $VertexFormatElement>;
        hasPosition(): boolean;
        hasNormal(): boolean;
        hasColor(): boolean;
        hasUV(arg0: number): boolean;
        getElementAttributeNames(): $List<string>;
        sodium$getGlobalId(): number;
        getElements(): $List<$VertexFormatElement>;
        getOffset(arg0: $VertexFormatElement_): number;
        getElementName(arg0: $VertexFormatElement_): string;
        static builder(): $VertexFormat$Builder;
        contains(arg0: $VertexFormatElement_): boolean;
        static UNKNOWN_ELEMENT: number;
        get vertexSize(): number;
        get offsetsByElement(): number[];
        get elementsMask(): number;
        get immediateDrawVertexBuffer(): $VertexBuffer;
        get elementMapping(): $ImmutableMap<string, $VertexFormatElement>;
        get elementAttributeNames(): $List<string>;
        get elements(): $List<$VertexFormatElement>;
    }
    export class $ByteBufferBuilder$Result implements $AutoCloseable {
        byteBuffer(): $ByteBuffer;
        close(): void;
    }
    export class $MeshData implements $AutoCloseable {
        sortQuads(arg0: $ByteBufferBuilder, arg1: $VertexSorting_): $MeshData$SortState;
        drawState(): $MeshData$DrawState;
        vertexBuffer(): $ByteBuffer;
        indexBuffer(): $ByteBuffer;
        close(): void;
        constructor(arg0: $ByteBufferBuilder$Result, arg1: $MeshData$DrawState_);
    }
    export class $VertexFormatElement$Usage extends $Enum<$VertexFormatElement$Usage> implements $IExtensibleEnum {
        static getExtensionInfo(): $ExtensionInfo;
        static values(): $VertexFormatElement$Usage[];
        static valueOf(arg0: string): $VertexFormatElement$Usage;
        static POSITION: $VertexFormatElement$Usage;
        static UV: $VertexFormatElement$Usage;
        static GENERIC: $VertexFormatElement$Usage;
        static COLOR: $VertexFormatElement$Usage;
        static NORMAL: $VertexFormatElement$Usage;
        static get extensionInfo(): $ExtensionInfo;
    }
    /**
     * Values that may be interpreted as {@link $VertexFormatElement$Usage}.
     */
    export type $VertexFormatElement$Usage_ = "position" | "normal" | "color" | "uv" | "generic";
    export class $Tesselator implements $OwoTessellatorExtension {
        owo$skipNextBegin(): void;
        owo$setStoredBuilder(builder: $BufferBuilder): void;
        owo$getStoredBuilder(): $BufferBuilder;
        clear(): void;
        begin(arg0: $VertexFormat$Mode_, arg1: $VertexFormat): $BufferBuilder;
        static getInstance(): $Tesselator;
        static init(): void;
        constructor(arg0: number);
        constructor();
        static get instance(): $Tesselator;
    }
    export class $MeshData$DrawState extends $Record {
        indexCount(): number;
        vertexCount(): number;
        indexType(): $VertexFormat$IndexType;
        mode(): $VertexFormat$Mode;
        format(): $VertexFormat;
        constructor(arg0: $VertexFormat, arg1: number, arg2: number, arg3: $VertexFormat$Mode_, arg4: $VertexFormat$IndexType_);
    }
    /**
     * Values that may be interpreted as {@link $MeshData$DrawState}.
     */
    export type $MeshData$DrawState_ = { mode?: $VertexFormat$Mode_, indexType?: $VertexFormat$IndexType_, indexCount?: number, format?: $VertexFormat, vertexCount?: number,  } | [mode?: $VertexFormat$Mode_, indexType?: $VertexFormat$IndexType_, indexCount?: number, format?: $VertexFormat, vertexCount?: number, ];
    export class $BufferUploader implements $BufferRendererAccessor {
        static drawWithShader(arg0: $MeshData): void;
        static setCurrentVertexBuffer$betterclouds_$md$68cb88$1(arg0: $VertexBuffer): void;
        static getCurrentVertexBuffer$betterclouds_$md$68cb88$0(): $VertexBuffer;
        static invalidate(): void;
        static draw(arg0: $MeshData): void;
        static reset(): void;
        static lastImmediateBuffer: $VertexBuffer;
        constructor();
        static set currentVertexBuffer$betterclouds_$md$68cb88$1(value: $VertexBuffer);
        static get currentVertexBuffer$betterclouds_$md$68cb88$0(): $VertexBuffer;
    }
    export class $VertexMultiConsumer$Double implements $VertexConsumer, $VertexBufferWriter {
        addVertex(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        addVertex(arg0: number, arg1: number, arg2: number): $VertexConsumer;
        setUv(arg0: number, arg1: number): $VertexConsumer;
        setUv1(arg0: number, arg1: number): $VertexConsumer;
        setUv2(arg0: number, arg1: number): $VertexConsumer;
        setNormal(arg0: number, arg1: number, arg2: number): $VertexConsumer;
        push(arg0: $MemoryStack, arg1: number, arg2: number, arg3: $VertexFormat): void;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        canUseIntrinsics(): boolean;
        addVertex(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: $PoseStack$Pose, arg1: $Vector3f): $VertexConsumer;
        addVertex(arg0: $Vector3f): $VertexConsumer;
        addVertex(arg0: $Matrix4f, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        setOverlay(arg0: number): $VertexConsumer;
        setNormal(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        setLight(arg0: number): $VertexConsumer;
        setWhiteAlpha(arg0: number): $VertexConsumer;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean): void;
        setColor(arg0: number): $VertexConsumer;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        applyBakedLighting(arg0: number, arg1: $ByteBuffer): number;
        applyBakedNormals(arg0: $Vector3f, arg1: $ByteBuffer, arg2: $Matrix3f): void;
        misc(arg0: $VertexFormatElement_, ...arg1: number[]): $VertexConsumer;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): void;
        first: $VertexConsumer;
        second: $VertexConsumer;
        constructor(arg0: $VertexConsumer, arg1: $VertexConsumer);
        set overlay(value: number);
        set light(value: number);
        set whiteAlpha(value: number);
    }
    export class $SheetedDecalTextureGenerator implements $VertexConsumer, $VertexBufferWriter {
        addVertex(arg0: number, arg1: number, arg2: number): $VertexConsumer;
        setUv(arg0: number, arg1: number): $VertexConsumer;
        setUv1(arg0: number, arg1: number): $VertexConsumer;
        setUv2(arg0: number, arg1: number): $VertexConsumer;
        setNormal(arg0: number, arg1: number, arg2: number): $VertexConsumer;
        push(arg0: $MemoryStack, arg1: number, arg2: number, arg3: $VertexFormat): void;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        canUseIntrinsics(): boolean;
        addVertex(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        addVertex(arg0: $PoseStack$Pose, arg1: $Vector3f): $VertexConsumer;
        addVertex(arg0: $Vector3f): $VertexConsumer;
        addVertex(arg0: $Matrix4f, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        setOverlay(arg0: number): $VertexConsumer;
        setNormal(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        setLight(arg0: number): $VertexConsumer;
        setWhiteAlpha(arg0: number): $VertexConsumer;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean): void;
        setColor(arg0: number): $VertexConsumer;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        applyBakedLighting(arg0: number, arg1: $ByteBuffer): number;
        applyBakedNormals(arg0: $Vector3f, arg1: $ByteBuffer, arg2: $Matrix3f): void;
        misc(arg0: $VertexFormatElement_, ...arg1: number[]): $VertexConsumer;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): void;
        constructor(arg0: $VertexConsumer, arg1: $PoseStack$Pose, arg2: number);
        set overlay(value: number);
        set light(value: number);
        set whiteAlpha(value: number);
    }
    export class $VertexBuffer implements $AutoCloseable, $VertexBufferHelper, $DebugVertexBufferExt, $VertexBufferExtension, $IVertexBuffer, $VertexBufferAccessor {
        drawWithShader(arg0: $Matrix4f, arg1: $Matrix4f, arg2: $ShaderInstance): void;
        upload(arg0: $MeshData): void;
        veil$setName(arg0: string): void;
        drawInstanced(arg0: number): void;
        veil$drawInstanced(arg0: number): void;
        veil$drawIndirect(arg0: number, arg1: number, arg2: number): void;
        veil$getIndexCount(): number;
        bind(): void;
        static unbind(): void;
        getFormat(): $VertexFormat;
        uploadIndexBuffer(arg0: $ByteBufferBuilder$Result): void;
        handler$bbh000$veil$drawPatches(arg0: $CallbackInfo): void;
        modify$bbh000$veil$modifyDrawMode(arg0: number): number;
        handler$fhm004$lodestone$close(arg0: $CallbackInfo): void;
        saveBinding(): void;
        restoreBinding(): void;
        addAttributeVBO(arg0: number, arg1: $FloatBuffer, arg2: $VertexBuffer$Usage_, arg3: $Consumer_<any>): void;
        drawWithShaderInstanced(arg0: $Matrix4f, arg1: $Matrix4f, arg2: $ShaderInstance, arg3: number): void;
        isInvalid(): boolean;
        draw(): void;
        close(): void;
        getVertexBufferId(): number;
        getIndexBufferId(): number;
        getVertexArrayId(): number;
        indexBufferId: number;
        vertexBufferId: number;
        constructor(arg0: $VertexBuffer$Usage_);
        get format(): $VertexFormat;
        get invalid(): boolean;
        get vertexArrayId(): number;
    }
    export class $VertexBuffer$Usage extends $Enum<$VertexBuffer$Usage> {
        static values(): $VertexBuffer$Usage[];
        static valueOf(arg0: string): $VertexBuffer$Usage;
        id: number;
        static STATIC: $VertexBuffer$Usage;
        static DYNAMIC: $VertexBuffer$Usage;
    }
    /**
     * Values that may be interpreted as {@link $VertexBuffer$Usage}.
     */
    export type $VertexBuffer$Usage_ = "static" | "dynamic";
    export class $PoseStack$Pose implements $PoseCopy, $PoseInvoker {
        pose(): $Matrix4f;
        transformNormal(arg0: number, arg1: number, arg2: number, arg3: $Vector3f): $Vector3f;
        transformNormal(arg0: $Vector3f, arg1: $Vector3f): $Vector3f;
        loot_Beams_Refork$copy(): $PoseStack$Pose;
        static createPose$lootbeams_$md$68cb88$0(arg0: $PoseStack$Pose): $PoseStack$Pose;
        normal(): $Matrix3f;
        copy(): $PoseStack$Pose;
        trustedNormals: boolean;
        constructor(arg0: $Matrix4f, arg1: $Matrix3f);
    }
    export class $VertexFormatElement extends $Record {
        static byId(arg0: number): $VertexFormatElement;
        setupBufferState(arg0: number, arg1: number, arg2: number): void;
        static elementsFromMask(arg0: number): $Stream<$VertexFormatElement>;
        static findNextId(): number;
        byteSize(): number;
        usage(): $VertexFormatElement$Usage;
        mask(): number;
        index(): number;
        type(): $VertexFormatElement$Type;
        count(): number;
        static register(arg0: number, arg1: number, arg2: $VertexFormatElement$Type_, arg3: $VertexFormatElement$Usage_, arg4: number): $VertexFormatElement;
        id(): number;
        static UV2: $VertexFormatElement;
        static POSITION: $VertexFormatElement;
        static UV: $VertexFormatElement;
        static UV1: $VertexFormatElement;
        static MAX_COUNT: number;
        static COLOR: $VertexFormatElement;
        static BY_ID: $VertexFormatElement[];
        static UV0: $VertexFormatElement;
        static NORMAL: $VertexFormatElement;
        constructor(id: number, index: number, type: $VertexFormatElement$Type_, usage: $VertexFormatElement$Usage_, count: number);
    }
    /**
     * Values that may be interpreted as {@link $VertexFormatElement}.
     */
    export type $VertexFormatElement_ = { usage?: $VertexFormatElement$Usage_, count?: number, id?: number, index?: number, type?: $VertexFormatElement$Type_,  } | [usage?: $VertexFormatElement$Usage_, count?: number, id?: number, index?: number, type?: $VertexFormatElement$Type_, ];
    export class $PoseStack implements $IPoseStackExtension, $PoseStackAccessor, $MatrixStack, $PoseStackAccessor$1, $PoseStackExtension, $PoseStackAccessor$2 {
        translate(arg0: number, arg1: number, arg2: number): void;
        translate(arg0: number, arg1: number, arg2: number): void;
        pose(): $PoseStack$Pose;
        pushPose(): void;
        popPose(): void;
        mulPose(arg0: $Matrix4f): void;
        mulPose(arg0: $Quaternionf): void;
        rotateAround(arg0: $Quaternionfc, arg1: number, arg2: number, arg3: number): void;
        rotateAround(arg0: $Quaternionf, arg1: number, arg2: number, arg3: number): void;
        rotateAround(arg0: $Quaterniondc, arg1: number, arg2: number, arg3: number): void;
        rotateXYZ(arg0: number, arg1: number, arg2: number): void;
        rotateZYX(arg0: number, arg1: number, arg2: number): void;
        setIdentity(): void;
        applyScale(arg0: number, arg1: number, arg2: number): void;
        toPoseStack(): $PoseStack;
        flywheel$transformStack(): $PoseTransformStack;
        matrixPush(): void;
        matrixPop(): void;
        isIdentity(): boolean;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number): void;
        rotate(arg0: $Quaterniondc): void;
        rotate(arg0: $Quaternionfc): void;
        clear(): void;
        scale(arg0: number, arg1: number, arg2: number): void;
        isEmpty(): boolean;
        last(): $PoseStack$Pose;
        pushTransformation(arg0: $Transformation): void;
        translate(arg0: $Vector3fc): void;
        translate(arg0: $Vector3dc): void;
        rotateXYZ(arg0: number, arg1: number, arg2: number): void;
        rotateZYX(arg0: number, arg1: number, arg2: number): void;
        applyScale(arg0: number): void;
        applyScale(arg0: number): void;
        applyScale(arg0: $Vector3dc): void;
        applyScale(arg0: $Vector3fc): void;
        applyScale(arg0: number, arg1: number, arg2: number): void;
        normal(): $Matrix3f;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number): void;
        position(): $Matrix4f;
        copy(arg0: $MatrixStack): void;
        copy(arg0: $PoseStack$Pose): void;
        copy(arg0: $PoseStack): void;
        flywheel$getPoseStack(): $Deque<$PoseStack$Pose>;
        getPoseStack(): $Deque<$PoseStack$Pose>;
        constructor();
        get empty(): boolean;
        get poseStack(): $Deque<$PoseStack$Pose>;
    }
    export class $VertexFormat$Builder {
        padding(arg0: number): $VertexFormat$Builder;
        build(): $VertexFormat;
        add(arg0: string, arg1: $VertexFormatElement_): $VertexFormat$Builder;
    }
    export class $VertexFormat$IndexType extends $Enum<$VertexFormat$IndexType> {
        static least(arg0: number): $VertexFormat$IndexType;
        static values(): $VertexFormat$IndexType[];
        static valueOf(arg0: string): $VertexFormat$IndexType;
        bytes: number;
        asGLType: number;
        static INT: $VertexFormat$IndexType;
        static SHORT: $VertexFormat$IndexType;
    }
    /**
     * Values that may be interpreted as {@link $VertexFormat$IndexType}.
     */
    export type $VertexFormat$IndexType_ = "short" | "int";
}
