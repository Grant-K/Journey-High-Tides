import { $Colorc } from "@package/foundry/veil/api/client/color";
import { $Codec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $MolangEnvironment } from "@package/gg/moonflower/molangcompiler/api";
import { $Camera } from "@package/net/minecraft/client";
import { $Iterator, $List, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos } from "@package/net/minecraft/core";
import { $CullFrustum, $MatrixStack } from "@package/foundry/veil/api/client/render";
import { $TickTaskScheduler } from "@package/foundry/veil/api";
import { $Trail } from "@package/foundry/veil/api/quasar/fx";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $CodeModule_ } from "@package/foundry/veil/api/quasar/data/module";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Record } from "@package/java/lang";
import { $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $ForceParticleModule, $ParticleModule, $CollisionParticleModule, $UpdateParticleModule, $InitParticleModule, $RenderParticleModule } from "@package/foundry/veil/api/quasar/emitters/module";
import { $Vector4fc, $Vector3dc, $Vector3d, $Vector3f, $Vector4f, $Vector3fc } from "@package/org/joml";
import { $QuasarParticleData_, $QuasarParticleData, $ParticleSettings, $ParticleSettings_, $EmitterShapeSettings, $ParticleEmitterData, $EmitterShapeSettings_ } from "@package/foundry/veil/api/quasar/data";

declare module "@package/foundry/veil/api/quasar/particle" {
    export class $RenderStyle {
        static CODEC: $Codec<$RenderStyle>;
    }
    export interface $RenderStyle {
        getRenderType(arg0: $QuasarParticle, arg1: $RenderData): $RenderType;
        render(arg0: $MatrixStack, arg1: $QuasarParticle, arg2: $RenderData, arg3: $Vector3fc, arg4: $VertexConsumer, arg5: number, arg6: number): void;
        clear(): void;
        setup(arg0: number): boolean;
        set up(value: number);
    }
    /**
     * Values that may be interpreted as {@link $RenderStyle}.
     */
    export type $RenderStyle_ = RegistryTypes.VeilQuasarRenderStyle | ((arg0: $MatrixStack, arg1: $QuasarParticle, arg2: $RenderData, arg3: $Vector3fc, arg4: $VertexConsumer, arg5: number, arg6: number) => void);
    export class $ParticleSystemManager {
        getLevel(): $ClientLevel;
        setLevel(arg0: $ClientLevel): void;
        tick(): void;
        createEmitter(arg0: $ResourceLocation_): $ParticleEmitter;
        addParticleSystem(arg0: $ParticleEmitter): void;
        getParticleCount(): number;
        getEmitterCount(): number;
        reserve(arg0: number): void;
        getScheduler(): $TickTaskScheduler;
        render(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Camera, arg3: $CullFrustum, arg4: number): void;
        clear(): void;
        constructor();
        get particleCount(): number;
        get emitterCount(): number;
        get scheduler(): $TickTaskScheduler;
    }
    export class $RenderData {
        getRenderType(): $RenderType;
        setAlpha(arg0: number): void;
        getAlpha(): number;
        markDirty(): void;
        getRed(): number;
        getGreen(): number;
        getBlue(): number;
        getRenderPosition(): $Vector3dc;
        getTrails(): $List<$Trail>;
        setSpriteData(arg0: $SpriteData_): void;
        getFixedPackedLight(): number;
        setColor(arg0: $Vector4fc): void;
        setColor(arg0: $Colorc): void;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        tick(arg0: $QuasarParticle, arg1: number): void;
        setFixedPackedLight(arg0: number): void;
        setAtlasSprite(arg0: $TextureAtlasSprite): void;
        getAtlasSprite(): $TextureAtlasSprite;
        getSpriteData(): $SpriteData;
        getRenderRotation(): $Vector3fc;
        getRenderRadius(): number;
        getRenderAge(): number;
        getAgePercent(): number;
        getPackedLight(): number;
        setRed(arg0: number): void;
        setGreen(arg0: number): void;
        setBlue(arg0: number): void;
        renderTrails(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Vec3_, arg3: number): void;
        isAdditive(): boolean;
        setAdditive(arg0: boolean): void;
        render(arg0: $QuasarParticle, arg1: number): void;
        /**
         * @deprecated
         */
        static BLANK: $ResourceLocation;
        agePercent: number;
        renderAge: number;
        constructor(arg0: $QuasarParticle, arg1: $QuasarParticleData_);
        get renderType(): $RenderType;
        get renderPosition(): $Vector3dc;
        get trails(): $List<$Trail>;
        get renderRotation(): $Vector3fc;
        get renderRadius(): number;
        get packedLight(): number;
    }
    export interface $RenderStyle extends RegistryMarked<RegistryTypes.VeilQuasarRenderStyleTag, RegistryTypes.VeilQuasarRenderStyle> {}
    export class $ParticleModuleSet {
        getEnabledRenderModuleCount(): number;
        getCollisionModules(): $CollisionParticleModule[];
        getEnabledRenderModulesArray(): $RenderParticleModule[];
        getInitModules(): $InitParticleModule[];
        getUpdateModules(): $UpdateParticleModule[];
        getForceModules(): $ForceParticleModule[];
        getRenderModules(): $RenderParticleModule[];
        getEnabledRenderModules(): $Iterator<$RenderParticleModule>;
        getAllModules(): $ParticleModule[];
        updateEnabled(): void;
        static builder(): $ParticleModuleSet$Builder;
        copy(): $ParticleModuleSet;
        get enabledRenderModuleCount(): number;
        get collisionModules(): $CollisionParticleModule[];
        get enabledRenderModulesArray(): $RenderParticleModule[];
        get initModules(): $InitParticleModule[];
        get updateModules(): $UpdateParticleModule[];
        get forceModules(): $ForceParticleModule[];
        get renderModules(): $RenderParticleModule[];
        get enabledRenderModules(): $Iterator<$RenderParticleModule>;
        get allModules(): $ParticleModule[];
    }
    export class $ParticleModuleSet$Builder {
        build(): $ParticleModuleSet;
        addModule(arg0: $ParticleModule): void;
        constructor();
    }
    export class $QuasarParticle {
        isRemoved(): boolean;
        onRemove(): void;
        getRotation(): $Vector3f;
        getBoundingBox(): $AABB;
        getVelocity(): $Vector3d;
        getRenderData(): $RenderData;
        getBlockPosition(): $BlockPos;
        setAge(arg0: number): void;
        getRadius(): number;
        setRadius(arg0: number): void;
        getRandomSource(): $RandomSource;
        vectorToRotation(arg0: number, arg1: number, arg2: number): void;
        getLevel(): $ClientLevel;
        getSettings(): $ParticleSettings;
        getEnvironment(): $MolangEnvironment;
        tick(): void;
        getPosition(): $Vector3d;
        getBlockStateInOrUnder(): $BlockState;
        getEmitter(): $ParticleEmitter;
        getLifetime(): number;
        getData(): $QuasarParticleData;
        getScheduler(): $TickTaskScheduler;
        getAge(): number;
        render(arg0: number): void;
        getModules(): $ParticleModuleSet;
        remove(): void;
        init(): void;
        constructor(arg0: $ClientLevel, arg1: $RandomSource, arg2: $TickTaskScheduler, arg3: $QuasarParticleData_, arg4: $ParticleModuleSet, arg5: $ParticleSettings_, arg6: $ParticleEmitter);
        get removed(): boolean;
        get rotation(): $Vector3f;
        get boundingBox(): $AABB;
        get velocity(): $Vector3d;
        get renderData(): $RenderData;
        get blockPosition(): $BlockPos;
        get randomSource(): $RandomSource;
        get level(): $ClientLevel;
        get settings(): $ParticleSettings;
        get environment(): $MolangEnvironment;
        get position(): $Vector3d;
        get blockStateInOrUnder(): $BlockState;
        get emitter(): $ParticleEmitter;
        get lifetime(): number;
        get data(): $QuasarParticleData;
        get scheduler(): $TickTaskScheduler;
        get modules(): $ParticleModuleSet;
    }
    export class $ParticleEmitter {
        isRemoved(): boolean;
        setPosition(arg0: $Vec3_): void;
        setPosition(arg0: $Vector3dc): void;
        setPosition(arg0: number, arg1: number, arg2: number): void;
        getRegistryName(): $ResourceLocation;
        getPosition(): $Vector3d;
        getParticleCount(): number;
        static clearErrors(): void;
        addCodeModule(arg0: $CodeModule_): void;
        getMaxLifetime(): number;
        getRate(): number;
        getMaxParticles(): number;
        getEmitterShapeSettings(): $List<$EmitterShapeSettings>;
        getParticleSettings(): $ParticleSettings;
        isForceSpawn(): boolean;
        getParticleData(): $QuasarParticleData;
        getAttachedEntity(): $Entity;
        setMaxLifetime(arg0: number): void;
        setLoop(arg0: boolean): void;
        setRate(arg0: number): void;
        setMaxParticles(arg0: number): void;
        setEmitterShapeSettings(arg0: $List_<$EmitterShapeSettings_>): void;
        setParticleSettings(arg0: $ParticleSettings_): void;
        setForceSpawn(arg0: boolean): void;
        setParticleData(arg0: $QuasarParticleData_): void;
        setAttachedEntity(arg0: $Entity): void;
        isLoop(): boolean;
        getData(): $ParticleEmitterData;
        render(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Camera, arg3: number): void;
        setCount(arg0: number): void;
        remove(): void;
        reset(): void;
        trim(arg0: number): number;
        getCount(): number;
        get removed(): boolean;
        get registryName(): $ResourceLocation;
        get particleCount(): number;
        get data(): $ParticleEmitterData;
    }
    export class $SpriteData extends $Record {
        sprite(): $ResourceLocation;
        uv(arg0: number, arg1: number, arg2: $Vector4f): $Vector4f;
        frameCount(): number;
        frameTime(): number;
        frameWidth(): number;
        frameHeight(): number;
        stretchToLifetime(): boolean;
        u(arg0: number, arg1: number, arg2: number): number;
        v(arg0: number, arg1: number, arg2: number): number;
        static CODEC: $Codec<$SpriteData>;
        constructor(sprite: $ResourceLocation_, frameCount: number, frameTime: number, frameWidth: number, frameHeight: number, stretchToLifetime: boolean);
    }
    /**
     * Values that may be interpreted as {@link $SpriteData}.
     */
    export type $SpriteData_ = { frameCount?: number, stretchToLifetime?: boolean, frameWidth?: number, sprite?: $ResourceLocation_, frameTime?: number, frameHeight?: number,  } | [frameCount?: number, stretchToLifetime?: boolean, frameWidth?: number, sprite?: $ResourceLocation_, frameTime?: number, frameHeight?: number, ];
}
