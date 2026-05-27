import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $VertexFormat$IndexType_, $VertexBuffer$Usage_, $MeshData, $VertexFormat$Mode_, $VertexFormat$Mode, $VertexFormat, $MeshData$DrawState_ } from "@package/com/mojang/blaze3d/vertex";
import { $Enum } from "@package/java/lang";
import { $NativeResource } from "@package/org/lwjgl/system";
import { $ByteBuffer } from "@package/java/nio";

declare module "@package/foundry/veil/api/client/render/vertex" {
    export class $VertexArrayBuilder {
        static validateRelativeOffset(arg0: number): void;
        static validateFloatType(arg0: $VertexArrayBuilder$DataType, arg1: number): void;
        static validateIntType(arg0: $VertexArrayBuilder$DataType): void;
        static validateLongType(arg0: $VertexArrayBuilder$DataType): void;
    }
    export interface $VertexArrayBuilder {
        setVertexIAttribute(arg0: number, arg1: number, arg2: number, arg3: $VertexArrayBuilder$DataType, arg4: number): $VertexArrayBuilder;
        setVertexLAttribute(arg0: number, arg1: number, arg2: number, arg3: $VertexArrayBuilder$DataType, arg4: number): $VertexArrayBuilder;
        removeVertexBuffer(arg0: number): $VertexArrayBuilder;
        clearVertexBuffers(): $VertexArrayBuilder;
        clearVertexAttributes(): $VertexArrayBuilder;
        vertexArray(): $VertexArray;
        setVertexAttribute(arg0: number, arg1: number, arg2: number, arg3: $VertexArrayBuilder$DataType, arg4: boolean, arg5: number): $VertexArrayBuilder;
        defineVertexBuffer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): $VertexArrayBuilder;
        applyFrom(arg0: number, arg1: number, arg2: number, arg3: $VertexFormat): $VertexArrayBuilder;
        removeAttribute(arg0: number): $VertexArrayBuilder;
    }
    export class $VertexArray$DrawUsage extends $Enum<$VertexArray$DrawUsage> {
        getGlType(): number;
        static fromBlaze3D(arg0: $VertexBuffer$Usage_): $VertexArray$DrawUsage;
        static values(): $VertexArray$DrawUsage[];
        static valueOf(arg0: string): $VertexArray$DrawUsage;
        static STREAM: $VertexArray$DrawUsage;
        static STATIC: $VertexArray$DrawUsage;
        static DYNAMIC: $VertexArray$DrawUsage;
        get glType(): number;
    }
    /**
     * Values that may be interpreted as {@link $VertexArray$DrawUsage}.
     */
    export type $VertexArray$DrawUsage_ = "static" | "dynamic" | "stream";
    export class $VertexArray implements $NativeResource {
        upload(arg0: number, arg1: $MeshData, arg2: $VertexArray$DrawUsage_): void;
        static upload(arg0: number, arg1: $ByteBuffer, arg2: $VertexArray$DrawUsage_): void;
        upload(arg0: $MeshData, arg1: $VertexArray$DrawUsage_): void;
        getDrawMode(): $VertexFormat$Mode;
        drawInstanced(arg0: number): void;
        drawIndirect(arg0: number, arg1: number, arg2: number): void;
        getIndexCount(): number;
        drawWithRenderType(arg0: $RenderType): void;
        setIndexCount(arg0: number, arg1: $VertexArray$IndexType_): void;
        drawIndirectWithRenderType(arg0: $RenderType, arg1: number, arg2: number, arg3: number): void;
        setDrawMode(arg0: $VertexFormat$Mode_): void;
        bind(): void;
        static unbind(): void;
        getOrCreateBuffer(arg0: number): number;
        editFormat(): $VertexArrayBuilder;
        drawInstancedWithRenderType(arg0: $RenderType, arg1: number): void;
        uploadIndexBuffer(arg0: $ByteBuffer, arg1: $VertexArray$IndexType_): void;
        uploadIndexBuffer(arg0: $ByteBuffer): void;
        uploadIndexBuffer(arg0: $MeshData$DrawState_): void;
        getIndexType(): $VertexArray$IndexType;
        static create(arg0: $VertexArray[]): void;
        static create(): $VertexArray;
        static create(arg0: number): $VertexArray[];
        free(): void;
        draw(): void;
        clear(arg0: $RenderType): void;
        setup(arg0: $RenderType): void;
        getId(): number;
        close(): void;
        static ELEMENT_ARRAY_BUFFER: number;
        static VERTEX_BUFFER: number;
        get indexType(): $VertexArray$IndexType;
        set up(value: $RenderType);
        get id(): number;
    }
    export class $VertexArray$IndexType extends $Enum<$VertexArray$IndexType> {
        getGlType(): number;
        static least(arg0: number): $VertexArray$IndexType;
        static fromBlaze3D(arg0: $VertexFormat$IndexType_): $VertexArray$IndexType;
        static values(): $VertexArray$IndexType[];
        static valueOf(arg0: string): $VertexArray$IndexType;
        getBytes(): number;
        static BYTE: $VertexArray$IndexType;
        static INT: $VertexArray$IndexType;
        static SHORT: $VertexArray$IndexType;
        get glType(): number;
        get bytes(): number;
    }
    /**
     * Values that may be interpreted as {@link $VertexArray$IndexType}.
     */
    export type $VertexArray$IndexType_ = "byte" | "short" | "int";
}
