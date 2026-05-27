import { $Closeable } from "@package/java/io";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $Enum, $AutoCloseable } from "@package/java/lang";
import { $Frustum } from "@package/net/minecraft/client/renderer/culling";
import { $AABB_, $AABB } from "@package/net/minecraft/world/phys";
import { $DepthShader, $CoverageShader, $ShadingShader, $ShaderParameters_, $DebugShader } from "@package/com/qendolin/betterclouds/clouds/shaders";
import { $Config } from "@package/com/qendolin/betterclouds/config";
import { $Matrix4f, $Vector3d } from "@package/org/joml";
export * as shaders from "@package/com/qendolin/betterclouds/clouds/shaders";

declare module "@package/com/qendolin/betterclouds/clouds" {
    export class $Renderer$PrepareResult extends $Enum<$Renderer$PrepareResult> {
        static values(): $Renderer$PrepareResult[];
        static valueOf(name: string): $Renderer$PrepareResult;
        static NO_RENDER: $Renderer$PrepareResult;
        static FALLBACK: $Renderer$PrepareResult;
        static RENDER: $Renderer$PrepareResult;
    }
    /**
     * Values that may be interpreted as {@link $Renderer$PrepareResult}.
     */
    export type $Renderer$PrepareResult_ = "render" | "no_render" | "fallback";
    export class $Renderer implements $AutoCloseable {
        setWorld(world: $ClientLevel): void;
        reload(manager: $ResourceManager): void;
        prepare(viewMat: $Matrix4f, projMat: $Matrix4f, ticks: number, tickDelta: number, cam: $Vector3d): $Renderer$PrepareResult;
        render(ticks: number, tickDelta: number, cam: $Vector3d, frustumPos: $Vector3d, frustum: $Frustum): void;
        resources(): $Resources;
        close(): void;
        constructor(client: $Minecraft);
        set world(value: $ClientLevel);
    }
    export class $PerfTimer implements $AutoCloseable {
        gpu(): $List<number>;
        cpu(): $List<number>;
        frames(): number;
        reset(): void;
        start(): void;
        stop(): void;
        close(): void;
        constructor();
    }
    export class $ChunkedGenerator implements $AutoCloseable {
        cloudCount(): number;
        chunks(): $List<$ChunkedGenerator$ChunkIndex>;
        originX(): number;
        originZ(): number;
        reallocateIfStale(options: $Config, fancy: boolean): boolean;
        generating(): boolean;
        canSwap(): boolean;
        renderOriginX(cameraX: number): number;
        renderOriginZ(cameraZ: number): number;
        instanceVertexCount(): number;
        generate(): void;
        bind(): void;
        unbind(): void;
        canGenerate(): boolean;
        canRender(): boolean;
        config(): $Config;
        swap(): void;
        allocate(options: $Config, fancy: boolean): void;
        update(camera: $Vector3d, ticks: number, tickDelta: number, options: $Config, cloudiness: number): void;
        clear(): void;
        buffer(): $Buffer;
        close(): void;
        constructor();
    }
    export class $ChunkedGenerator$ChunkIndex {
        count(): number;
        bounds(cloudsHeight: number, sizeXZ: number, sizeY: number): $AABB;
        start(): number;
        constructor(start: number, count: number, bounds: $AABB_);
    }
    export class $Resources implements $Closeable {
        reloadShaders(manager: $ResourceManager, shaderParameters: $ShaderParameters_): void;
        deleteShaders(): void;
        deleteFramebuffer(): void;
        debugShader(): $DebugShader;
        deleteTimer(): void;
        static unbindVao(): void;
        reloadGenerator(fancy: boolean): void;
        reloadTextures(client: $Minecraft): void;
        reloadMeshPrimitives(): void;
        reloadFramebuffer(width: number, height: number): void;
        failedToLoadCritical(): boolean;
        fboWidth(): number;
        fboHeight(): number;
        oitFbo(): number;
        coverageShader(): $CoverageShader;
        oitCoverageDepthTexture(): number;
        oitDataTexture(): number;
        oitCoverageTexture(): number;
        shadingShader(): $ShadingShader;
        cubeVao(): number;
        depthShader(): $DepthShader;
        static unbindVbo(): void;
        deleteGenerator(): void;
        deleteMeshPrimitives(): void;
        timer(): $PerfTimer;
        reloadTimer(): void;
        generator(): $ChunkedGenerator;
        close(): void;
        static NOISE_TEXTURE: $ResourceLocation;
        static LIGHTING_TEXTURE: $ResourceLocation;
        constructor();
    }
    export class $Buffer implements $AutoCloseable {
        swapCount(): number;
        hasChanged(size: number, fancy: boolean, persistent: boolean): boolean;
        bindDrawBuffer(): void;
        setVAPointerToInstance(baseInstance: number): void;
        instanceVertexCount(): number;
        bind(): void;
        unbind(): void;
        swap(): void;
        put(x: number, y: number, z: number): void;
        clear(): void;
        close(): void;
        constructor(size: number, fancy: boolean, preferPersistent: boolean);
        set VAPointerToInstance(value: number);
    }
}
