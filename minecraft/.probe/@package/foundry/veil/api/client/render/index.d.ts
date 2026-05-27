import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $ResourceManager, $ResourceManagerReloadListener, $PreparableReloadListener$PreparationBarrier_, $ReloadableResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $Map_, $Map } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $Frustum } from "@package/net/minecraft/client/renderer/culling";
import { $ShaderManager, $ShaderModificationManager, $ShaderPreDefinitions } from "@package/foundry/veil/api/client/render/shader";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $Position, $BlockPos_, $SectionPos } from "@package/net/minecraft/core";
import { $ParticleSystemManager } from "@package/foundry/veil/api/quasar/particle";
import { $GlslStructSpecifier } from "@package/io/github/ocelot/glslprocessor/api/grammar";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $PostProcessingManager } from "@package/foundry/veil/api/client/render/post";
import { $DynamicBufferType_ } from "@package/foundry/veil/api/client/render/dynamicbuffer";
import { $Record } from "@package/java/lang";
import { $DynamicRenderTypeManager } from "@package/foundry/veil/impl/client/render/rendertype";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $LightRenderer } from "@package/foundry/veil/api/client/render/light/renderer";
import { $EditorManager } from "@package/foundry/veil/api/client/editor";
import { $Window } from "@package/com/mojang/blaze3d/platform";
import { $FlareEffectManager } from "@package/foundry/veil/api/flare";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VanillaShaderCompiler, $DynamicBufferManager } from "@package/foundry/veil/impl/client/render/dynamicbuffer";
import { $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $FramebufferManager } from "@package/foundry/veil/api/client/render/framebuffer";
import { $GlslNode } from "@package/io/github/ocelot/glslprocessor/api/node";
import { $ShaderBlock$MemoryLayout, $ShaderBlock$MemoryLayout_, $ShaderBlock$BufferBinding, $ShaderBlock$BufferBinding_ } from "@package/foundry/veil/api/client/render/shader/block";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $Matrix4x3dc, $Vector4fc, $Vector3dc, $Matrix3x2fc, $Vector2fc, $Matrix4f, $Matrix4fc, $Matrix3dc, $Matrix2fc, $Vector4ic, $Vector3f, $Quaterniondc, $Matrix4x3fc, $Vector2dc, $Vector4dc, $Matrix3f, $Vector3fc, $Vector2ic, $Matrix4dc, $Matrix2dc, $Matrix3fc, $Vector3ic, $Matrix3x2dc, $Quaternionfc } from "@package/org/joml";
export * as vertex from "@package/foundry/veil/api/client/render/vertex";
export * as shader from "@package/foundry/veil/api/client/render/shader";
export * as post from "@package/foundry/veil/api/client/render/post";
export * as texture from "@package/foundry/veil/api/client/render/texture";
export * as framebuffer from "@package/foundry/veil/api/client/render/framebuffer";
export * as rendertype from "@package/foundry/veil/api/client/render/rendertype";
export * as dynamicbuffer from "@package/foundry/veil/api/client/render/dynamicbuffer";
export * as light from "@package/foundry/veil/api/client/render/light";

declare module "@package/foundry/veil/api/client/render" {
    export class $MatrixStack {
    }
    export interface $MatrixStack {
        translate(arg0: number, arg1: number, arg2: number): void;
        translate(arg0: $Vector3fc): void;
        translate(arg0: $Vector3dc): void;
        translate(arg0: number, arg1: number, arg2: number): void;
        pose(): $PoseStack$Pose;
        rotateAround(arg0: $Quaterniondc, arg1: number, arg2: number, arg3: number): void;
        rotateAround(arg0: $Quaternionfc, arg1: number, arg2: number, arg3: number): void;
        rotateXYZ(arg0: number, arg1: number, arg2: number): void;
        rotateXYZ(arg0: number, arg1: number, arg2: number): void;
        rotateZYX(arg0: number, arg1: number, arg2: number): void;
        rotateZYX(arg0: number, arg1: number, arg2: number): void;
        setIdentity(): void;
        applyScale(arg0: number): void;
        applyScale(arg0: number): void;
        applyScale(arg0: $Vector3dc): void;
        applyScale(arg0: $Vector3fc): void;
        applyScale(arg0: number, arg1: number, arg2: number): void;
        applyScale(arg0: number, arg1: number, arg2: number): void;
        toPoseStack(): $PoseStack;
        matrixPush(): void;
        matrixPop(): void;
        normal(): $Matrix3f;
        isIdentity(): boolean;
        rotate(arg0: $Quaterniondc): void;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number): void;
        rotate(arg0: $Quaternionfc): void;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number): void;
        clear(): void;
        position(): $Matrix4f;
        isEmpty(): boolean;
        copy(arg0: $MatrixStack): void;
        copy(arg0: $PoseStack$Pose): void;
        copy(arg0: $PoseStack): void;
        get empty(): boolean;
    }
    export class $VeilShaderBufferLayout<T> extends $Record {
        memoryLayout(): $ShaderBlock$MemoryLayout;
        createNode(arg0: boolean, arg1: string): $GlslNode;
        structSpecifier(): $GlslStructSpecifier;
        requestedBinding(): $ShaderBlock$BufferBinding;
        binding(): $ShaderBlock$BufferBinding;
        name(): string;
        static builder<T>(): $VeilShaderBufferLayout$Builder<T>;
        fields(): $Map<string, $VeilShaderBufferLayout$FieldSerializer<T>>;
        constructor(name: string, fields: $Map_<string, $VeilShaderBufferLayout$FieldSerializer_<T>>, requestedBinding: $ShaderBlock$BufferBinding_, memoryLayout: $ShaderBlock$MemoryLayout_, structSpecifier: $GlslStructSpecifier);
    }
    /**
     * Values that may be interpreted as {@link $VeilShaderBufferLayout}.
     */
    export type $VeilShaderBufferLayout_<T> = RegistryTypes.VeilShaderBuffer | { fields?: $Map_<string, $VeilShaderBufferLayout$FieldSerializer_<any>>, name?: string, memoryLayout?: $ShaderBlock$MemoryLayout_, requestedBinding?: $ShaderBlock$BufferBinding_, structSpecifier?: $GlslStructSpecifier,  } | [fields?: $Map_<string, $VeilShaderBufferLayout$FieldSerializer_<any>>, name?: string, memoryLayout?: $ShaderBlock$MemoryLayout_, requestedBinding?: $ShaderBlock$BufferBinding_, structSpecifier?: $GlslStructSpecifier, ];
    export class $GuiInfo {
        getGuiScale(): number;
        unbind(): void;
        isGuiRendering(): boolean;
        static createLayout(): $VeilShaderBufferLayout<$GuiInfo>;
        update(): void;
        constructor();
        get guiScale(): number;
        get guiRendering(): boolean;
    }
    export interface $VeilShaderBufferLayout<T> extends RegistryMarked<RegistryTypes.VeilShaderBufferTag, RegistryTypes.VeilShaderBuffer> {}
    export class $CullFrustum {
    }
    export interface $CullFrustum {
        testPoint(arg0: number, arg1: number, arg2: number): boolean;
        testPoint(arg0: $Vector3fc): boolean;
        testPoint(arg0: $Vector3ic): boolean;
        testPoint(arg0: $Vector3dc): boolean;
        testPoint(arg0: $Position): boolean;
        testSphere(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        testSphere(arg0: $Vector3fc, arg1: number): boolean;
        testSphere(arg0: $Vector3dc, arg1: number): boolean;
        testAab(arg0: $AABB_): boolean;
        testAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        testAab(arg0: $Vector3dc, arg1: $Vector3dc): boolean;
        testAab(arg0: $Vector3fc, arg1: $Vector3fc): boolean;
        getViewVector(): $Vector3fc;
        testPlaneXY(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        testPlaneXY(arg0: $Vector2fc, arg1: $Vector2fc): boolean;
        testPlaneXY(arg0: $Vector2dc, arg1: $Vector2dc): boolean;
        testPlaneXZ(arg0: $Vector2fc, arg1: $Vector2fc): boolean;
        testPlaneXZ(arg0: $Vector2dc, arg1: $Vector2dc): boolean;
        testPlaneXZ(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        testLineSegment(arg0: $Vector3fc, arg1: $Vector3fc): boolean;
        testLineSegment(arg0: $Vector3dc, arg1: $Vector3dc): boolean;
        testLineSegment(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        getPlanes(): $Vector4fc[];
        getModelViewProjectionMatrix(): $Matrix4fc;
        toFrustum(): $Frustum;
        testBlock(arg0: $BlockPos_): boolean;
        testSection(arg0: $SectionPos): boolean;
        getPosition(): $Vector3dc;
        get viewVector(): $Vector3fc;
        get planes(): $Vector4fc[];
        get modelViewProjectionMatrix(): $Matrix4fc;
        get position(): $Vector3dc;
    }
    export class $VeilRenderer implements $ResourceManagerReloadListener {
        endFrame(): void;
        getEditorManager(): $EditorManager;
        onResourceManagerReload(arg0: $ResourceManager): void;
        getVanillaShaderCompiler(): $VanillaShaderCompiler;
        getGuiInfo(): $GuiInfo;
        getShaderModificationManager(): $ShaderModificationManager;
        getShaderManager(): $ShaderManager;
        getDynamicRenderTypeManager(): $DynamicRenderTypeManager;
        getFramebufferManager(): $FramebufferManager;
        getDynamicBufferManger(): $DynamicBufferManager;
        getCameraMatrices(): $CameraMatrices;
        getPostProcessingManager(): $PostProcessingManager;
        getLightRenderer(): $LightRenderer;
        addDebugInfo(arg0: $Consumer_<string>): void;
        getActiveBuffers(): number;
        getParticleManager(): $ParticleSystemManager;
        enableBuffers(arg0: $ResourceLocation_, ...arg1: $DynamicBufferType_[]): boolean;
        disableBuffers(arg0: $ResourceLocation_, ...arg1: $DynamicBufferType_[]): boolean;
        disableBuffers(arg0: $ResourceLocation_): boolean;
        getShaderDefinitions(): $ShaderPreDefinitions;
        getEffectManager(): $FlareEffectManager;
        resize(arg0: number, arg1: number): void;
        free(): void;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        getName(): string;
        static DEBUG_BUFFER_TEXTURE: $ResourceLocation;
        static NORMAL_BUFFER_TEXTURE: $ResourceLocation;
        static LIGHT_UV_BUFFER_TEXTURE: $ResourceLocation;
        static ALBEDO_BUFFER_TEXTURE: $ResourceLocation;
        static LIGHT_COLOR_BUFFER_TEXTURE: $ResourceLocation;
        static COMPOSITE: $ResourceLocation;
        constructor(arg0: $ReloadableResourceManager, arg1: $Window);
        get editorManager(): $EditorManager;
        get vanillaShaderCompiler(): $VanillaShaderCompiler;
        get guiInfo(): $GuiInfo;
        get shaderModificationManager(): $ShaderModificationManager;
        get shaderManager(): $ShaderManager;
        get dynamicRenderTypeManager(): $DynamicRenderTypeManager;
        get framebufferManager(): $FramebufferManager;
        get dynamicBufferManger(): $DynamicBufferManager;
        get cameraMatrices(): $CameraMatrices;
        get postProcessingManager(): $PostProcessingManager;
        get lightRenderer(): $LightRenderer;
        get activeBuffers(): number;
        get particleManager(): $ParticleSystemManager;
        get shaderDefinitions(): $ShaderPreDefinitions;
        get effectManager(): $FlareEffectManager;
        get name(): string;
    }
    export class $VeilShaderBufferLayout$Builder$FloatSerializer<T> {
    }
    export interface $VeilShaderBufferLayout$Builder$FloatSerializer<T> {
        serialize(arg0: T): number;
    }
    /**
     * Values that may be interpreted as {@link $VeilShaderBufferLayout$Builder$FloatSerializer}.
     */
    export type $VeilShaderBufferLayout$Builder$FloatSerializer_<T> = ((arg0: T) => number);
    export class $VeilShaderBufferLayout$Builder$DoubleSerializer<T> {
    }
    export interface $VeilShaderBufferLayout$Builder$DoubleSerializer<T> {
        serialize(arg0: T): number;
    }
    /**
     * Values that may be interpreted as {@link $VeilShaderBufferLayout$Builder$DoubleSerializer}.
     */
    export type $VeilShaderBufferLayout$Builder$DoubleSerializer_<T> = ((arg0: T) => number);
    export class $VeilShaderBufferLayout$Builder$IntSerializer<T> {
    }
    export interface $VeilShaderBufferLayout$Builder$IntSerializer<T> {
        serialize(arg0: T): number;
    }
    /**
     * Values that may be interpreted as {@link $VeilShaderBufferLayout$Builder$IntSerializer}.
     */
    export type $VeilShaderBufferLayout$Builder$IntSerializer_<T> = ((arg0: T) => number);
    export class $VeilShaderBufferLayout$Builder<T> {
        vec3(arg0: string, arg1: $Function_<T, $Vector3fc>): $VeilShaderBufferLayout$Builder<T>;
        vec3(arg0: string, arg1: $VeilShaderBufferLayout$Builder$FloatSerializer_<T>, arg2: $VeilShaderBufferLayout$Builder$FloatSerializer_<T>, arg3: $VeilShaderBufferLayout$Builder$FloatSerializer_<T>): $VeilShaderBufferLayout$Builder<T>;
        vec2(arg0: string, arg1: $Function_<T, $Vector2fc>): $VeilShaderBufferLayout$Builder<T>;
        vec2(arg0: string, arg1: $VeilShaderBufferLayout$Builder$FloatSerializer_<T>, arg2: $VeilShaderBufferLayout$Builder$FloatSerializer_<T>): $VeilShaderBufferLayout$Builder<T>;
        memoryLayout(arg0: $ShaderBlock$MemoryLayout_): $VeilShaderBufferLayout$Builder<T>;
        f64(arg0: string, arg1: $VeilShaderBufferLayout$Builder$DoubleSerializer_<T>): $VeilShaderBufferLayout$Builder<T>;
        uint(arg0: string, arg1: $VeilShaderBufferLayout$Builder$IntSerializer_<T>): $VeilShaderBufferLayout$Builder<T>;
        vec4(arg0: string, arg1: $VeilShaderBufferLayout$Builder$FloatSerializer_<T>, arg2: $VeilShaderBufferLayout$Builder$FloatSerializer_<T>, arg3: $VeilShaderBufferLayout$Builder$FloatSerializer_<T>, arg4: $VeilShaderBufferLayout$Builder$FloatSerializer_<T>): $VeilShaderBufferLayout$Builder<T>;
        vec4(arg0: string, arg1: $Function_<T, $Vector4fc>): $VeilShaderBufferLayout$Builder<T>;
        dvec2(arg0: string, arg1: $VeilShaderBufferLayout$Builder$DoubleSerializer_<T>, arg2: $VeilShaderBufferLayout$Builder$DoubleSerializer_<T>): $VeilShaderBufferLayout$Builder<T>;
        dvec2(arg0: string, arg1: $Function_<T, $Vector2dc>): $VeilShaderBufferLayout$Builder<T>;
        dvec3(arg0: string, arg1: $VeilShaderBufferLayout$Builder$DoubleSerializer_<T>, arg2: $VeilShaderBufferLayout$Builder$DoubleSerializer_<T>, arg3: $VeilShaderBufferLayout$Builder$DoubleSerializer_<T>): $VeilShaderBufferLayout$Builder<T>;
        dvec3(arg0: string, arg1: $Function_<T, $Vector3dc>): $VeilShaderBufferLayout$Builder<T>;
        dvec4(arg0: string, arg1: $VeilShaderBufferLayout$Builder$DoubleSerializer_<T>, arg2: $VeilShaderBufferLayout$Builder$DoubleSerializer_<T>, arg3: $VeilShaderBufferLayout$Builder$DoubleSerializer_<T>, arg4: $VeilShaderBufferLayout$Builder$DoubleSerializer_<T>): $VeilShaderBufferLayout$Builder<T>;
        dvec4(arg0: string, arg1: $Function_<T, $Vector4dc>): $VeilShaderBufferLayout$Builder<T>;
        ivec2(arg0: string, arg1: $VeilShaderBufferLayout$Builder$IntSerializer_<T>, arg2: $VeilShaderBufferLayout$Builder$IntSerializer_<T>): $VeilShaderBufferLayout$Builder<T>;
        ivec2(arg0: string, arg1: $Function_<T, $Vector2ic>): $VeilShaderBufferLayout$Builder<T>;
        ivec3(arg0: string, arg1: $VeilShaderBufferLayout$Builder$IntSerializer_<T>, arg2: $VeilShaderBufferLayout$Builder$IntSerializer_<T>, arg3: $VeilShaderBufferLayout$Builder$IntSerializer_<T>): $VeilShaderBufferLayout$Builder<T>;
        ivec3(arg0: string, arg1: $Function_<T, $Vector3ic>): $VeilShaderBufferLayout$Builder<T>;
        ivec4(arg0: string, arg1: $Function_<T, $Vector4ic>): $VeilShaderBufferLayout$Builder<T>;
        ivec4(arg0: string, arg1: $VeilShaderBufferLayout$Builder$IntSerializer_<T>, arg2: $VeilShaderBufferLayout$Builder$IntSerializer_<T>, arg3: $VeilShaderBufferLayout$Builder$IntSerializer_<T>, arg4: $VeilShaderBufferLayout$Builder$IntSerializer_<T>): $VeilShaderBufferLayout$Builder<T>;
        uvec2(arg0: string, arg1: $VeilShaderBufferLayout$Builder$IntSerializer_<T>, arg2: $VeilShaderBufferLayout$Builder$IntSerializer_<T>): $VeilShaderBufferLayout$Builder<T>;
        uvec2(arg0: string, arg1: $Function_<T, $Vector2ic>): $VeilShaderBufferLayout$Builder<T>;
        uvec3(arg0: string, arg1: $VeilShaderBufferLayout$Builder$IntSerializer_<T>, arg2: $VeilShaderBufferLayout$Builder$IntSerializer_<T>, arg3: $VeilShaderBufferLayout$Builder$IntSerializer_<T>): $VeilShaderBufferLayout$Builder<T>;
        uvec3(arg0: string, arg1: $Function_<T, $Vector3ic>): $VeilShaderBufferLayout$Builder<T>;
        uvec4(arg0: string, arg1: $VeilShaderBufferLayout$Builder$IntSerializer_<T>, arg2: $VeilShaderBufferLayout$Builder$IntSerializer_<T>, arg3: $VeilShaderBufferLayout$Builder$IntSerializer_<T>, arg4: $VeilShaderBufferLayout$Builder$IntSerializer_<T>): $VeilShaderBufferLayout$Builder<T>;
        uvec4(arg0: string, arg1: $Function_<T, $Vector4ic>): $VeilShaderBufferLayout$Builder<T>;
        mat2(arg0: string, arg1: $Function_<T, $Matrix2fc>): $VeilShaderBufferLayout$Builder<T>;
        mat3(arg0: string, arg1: $Function_<T, $Matrix3fc>): $VeilShaderBufferLayout$Builder<T>;
        mat4(arg0: string, arg1: $Function_<T, $Matrix4fc>): $VeilShaderBufferLayout$Builder<T>;
        mat3x2(arg0: string, arg1: $Function_<T, $Matrix3x2fc>): $VeilShaderBufferLayout$Builder<T>;
        mat4x3(arg0: string, arg1: $Function_<T, $Matrix4x3fc>): $VeilShaderBufferLayout$Builder<T>;
        dmat2(arg0: string, arg1: $Function_<T, $Matrix2dc>): $VeilShaderBufferLayout$Builder<T>;
        dmat3(arg0: string, arg1: $Function_<T, $Matrix3dc>): $VeilShaderBufferLayout$Builder<T>;
        dmat4(arg0: string, arg1: $Function_<T, $Matrix4dc>): $VeilShaderBufferLayout$Builder<T>;
        dmat3x2(arg0: string, arg1: $Function_<T, $Matrix3x2dc>): $VeilShaderBufferLayout$Builder<T>;
        dmat4x3(arg0: string, arg1: $Function_<T, $Matrix4x3dc>): $VeilShaderBufferLayout$Builder<T>;
        f32(arg0: string, arg1: $VeilShaderBufferLayout$Builder$FloatSerializer_<T>): $VeilShaderBufferLayout$Builder<T>;
        binding(arg0: $ShaderBlock$BufferBinding_): $VeilShaderBufferLayout$Builder<T>;
        build(): $VeilShaderBufferLayout<T>;
        integer(arg0: string, arg1: $VeilShaderBufferLayout$Builder$IntSerializer_<T>): $VeilShaderBufferLayout$Builder<T>;
        constructor();
    }
    export class $CameraMatrices {
        getProjectionMatrix(): $Matrix4f;
        getNearPlane(): number;
        getFarPlane(): number;
        getCameraBobOffset(): $Vector3f;
        restore(arg0: $CameraMatrices): void;
        backup(arg0: $CameraMatrices): void;
        updateRenderSystem(): void;
        getInverseProjectionMatrix(): $Matrix4f;
        getViewMatrix(): $Matrix4f;
        getInverseViewMatrix(): $Matrix4f;
        getInverseViewRotMatrix(): $Matrix3f;
        getCameraPosition(): $Vector3f;
        setNearPlane(arg0: number): void;
        setFarPlane(arg0: number): void;
        static createLayout(): $VeilShaderBufferLayout<$CameraMatrices>;
        update(arg0: $Matrix4fc, arg1: $Matrix4fc, arg2: number, arg3: number, arg4: number): void;
        constructor();
        get projectionMatrix(): $Matrix4f;
        get cameraBobOffset(): $Vector3f;
        get inverseProjectionMatrix(): $Matrix4f;
        get viewMatrix(): $Matrix4f;
        get inverseViewMatrix(): $Matrix4f;
        get inverseViewRotMatrix(): $Matrix3f;
        get cameraPosition(): $Vector3f;
    }
    export class $VeilShaderBufferLayout$FieldSerializer<T> {
    }
    export interface $VeilShaderBufferLayout$FieldSerializer<T> {
        write(arg0: T, arg1: number, arg2: $ByteBuffer): void;
    }
    /**
     * Values that may be interpreted as {@link $VeilShaderBufferLayout$FieldSerializer}.
     */
    export type $VeilShaderBufferLayout$FieldSerializer_<T> = ((arg0: T, arg1: number, arg2: $ByteBuffer) => void);
}
