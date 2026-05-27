import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $CloudStatus, $CloudStatus_ } from "@package/net/minecraft/client";
import { $AutoCloseable, $Record } from "@package/java/lang";
import { $Map_ } from "@package/java/util";
import { $Matrix4f, $Vector3f } from "@package/org/joml";

declare module "@package/com/qendolin/betterclouds/clouds/shaders" {
    export class $ShaderParameters extends $Record {
        blockViewDistance(): number;
        cloudRenderMode(): $CloudStatus;
        useStencilTextureFallback(): boolean;
        useDepthWriteFallback(): boolean;
        configSizeXZ(): number;
        configSizeY(): number;
        useDistantHorizonsCompat(): boolean;
        configCelestialBodyHalo(): boolean;
        worldCurvatureSize(): number;
        constructor(cloudRenderMode: $CloudStatus_, blockViewDistance: number, configSizeXZ: number, configSizeY: number, configCelestialBodyHalo: boolean, useDepthWriteFallback: boolean, useStencilTextureFallback: boolean, useDistantHorizonsCompat: boolean, worldCurvatureSize: number);
    }
    /**
     * Values that may be interpreted as {@link $ShaderParameters}.
     */
    export type $ShaderParameters_ = { configSizeY?: number, useDistantHorizonsCompat?: boolean, useDepthWriteFallback?: boolean, useStencilTextureFallback?: boolean, configSizeXZ?: number, cloudRenderMode?: $CloudStatus_, worldCurvatureSize?: number, blockViewDistance?: number, configCelestialBodyHalo?: boolean,  } | [configSizeY?: number, useDistantHorizonsCompat?: boolean, useDepthWriteFallback?: boolean, useStencilTextureFallback?: boolean, configSizeXZ?: number, cloudRenderMode?: $CloudStatus_, worldCurvatureSize?: number, blockViewDistance?: number, configCelestialBodyHalo?: boolean, ];
    export class $ShadingShader extends $Shader {
        static create(manager: $ResourceManager, depthWriteFallback: boolean, stencilFallback: boolean, enableCelestialBodyHalo: boolean): $ShadingShader;
        uCoverageTexture: $Uniform;
        uVPMatrix: $Uniform;
        uColorGrading: $Uniform;
        uTint: $Uniform;
        uSunDirection: $Uniform;
        uNoiseFactor: $Uniform;
        uOpacity: $Uniform;
        static DEF_UINT_COVERAGE_KEY: string;
        uDepthTexture: $Uniform;
        uDataTexture: $Uniform;
        static DEF_CELESTIAL_BODY_HALO_KEY: string;
        static VERTEX_SHADER_ID: $ResourceLocation;
        static DEF_BLIT_DEPTH_KEY: string;
        uSunAxis: $Uniform;
        uLightTexture: $Uniform;
        static FRAGMENT_SHADER_ID: $ResourceLocation;
        constructor(resMan: $ResourceManager, defs: $Map_<string, string>);
    }
    export class $Uniform {
        setMat4(arg0: number[], arg1: boolean): void;
        setMat4(arg0: $Matrix4f): void;
        setVec3(arg0: number, arg1: number, arg2: number): void;
        setVec3(arg0: $Vector3f): void;
        setVec4(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setVec2(arg0: number, arg1: number): void;
        setInt(arg0: number): void;
        setFloat(arg0: number): void;
        set int(value: number);
        set float(value: number);
    }
    export class $CoverageShader extends $Shader {
        static create(manager: $ResourceManager, sizeXZ: number, sizeY: number, stencilFallback: boolean, dhCompat: boolean, worldCurvatureSize: number): $CoverageShader;
        uNoiseTexture: $Uniform;
        static DEF_DISTANT_HORIZONS: string;
        uMVPMatrix: $Uniform;
        static DEF_SIZE_XZ_KEY: string;
        uDhPMatrix: $Uniform;
        uDepthTexture: $Uniform;
        static DEF_SIZE_Y_KEY: string;
        static DEF_WORLD_CURVATURE: string;
        uMiscellaneous: $Uniform;
        uBoundingBox: $Uniform;
        static DEF_POSITIONAL_COLORING: string;
        uMVMatrix: $Uniform;
        uFogRange: $Uniform;
        uOriginOffset: $Uniform;
        static VERTEX_SHADER_ID: $ResourceLocation;
        uMcPMatrix: $Uniform;
        uTime: $Uniform;
        uDhDepthTexture: $Uniform;
        static FRAGMENT_SHADER_ID: $ResourceLocation;
        constructor(resMan: $ResourceManager, defs: $Map_<string, string>);
    }
    export class $DebugShader extends $Shader {
        uColorModulator: $Uniform;
        static VERTEX_SHADER_ID: $ResourceLocation;
        uModelViewMatrix: $Uniform;
        static FRAGMENT_SHADER_ID: $ResourceLocation;
        uProjectionMatrix: $Uniform;
        constructor(resMan: $ResourceManager);
    }
    export class $Shader implements $AutoCloseable {
        glId(): number;
        isIncomplete(): boolean;
        bind(): void;
        close(): void;
        constructor(resMan: $ResourceManager, vshId: $ResourceLocation_, fshId: $ResourceLocation_, defs: $Map_<string, string>);
        get incomplete(): boolean;
    }
    export class $DepthShader extends $Shader {
        static create(manager: $ResourceManager): $DepthShader;
        static VERTEX_SHADER_ID: $ResourceLocation;
        uDepthTexture: $Uniform;
        static FRAGMENT_SHADER_ID: $ResourceLocation;
        constructor(resMan: $ResourceManager, defs: $Map_<string, string>);
    }
}
