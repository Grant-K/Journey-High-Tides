import { $JsonObject_ } from "@package/com/google/gson";
import { $RenderBuffers, $MultiBufferSource_, $LightTexture } from "@package/net/minecraft/client/renderer";
import { $Executor_, $CompletableFuture, $ConcurrentHashMap } from "@package/java/util/concurrent";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $ParticleType_, $SculkChargeParticleOptions, $ParticleGroup, $VibrationParticleOption, $BlockParticleOption, $ParticleOptions, $ColorParticleOption, $SimpleParticleType, $ScalableParticleOptionsBase, $DustParticleOptions, $SculkChargeParticleOptions_, $ParticleOptions_, $DustColorTransitionOptions, $ItemParticleOption, $ShriekParticleOption } from "@package/net/minecraft/core/particles";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Camera } from "@package/net/minecraft/client";
import { $ResourceManager, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $UUID_, $Map, $List, $List_ } from "@package/java/util";
import { $ParticleAccessor as $ParticleAccessor$3 } from "@package/com/almostreliable/ponderjs/mixin";
import { $Frustum } from "@package/net/minecraft/client/renderer/culling";
import { $SingleQuadParticleAccessor, $ParticleEngineAccessor as $ParticleEngineAccessor$1 } from "@package/org/figuramc/figura/ducks";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos, $BlockPos_, $Registry, $Direction_ } from "@package/net/minecraft/core";
import { $ExtendedParticleManager } from "@package/de/dafuqs/spectrum/particle/render";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $ParticleManagerAccessor as $ParticleManagerAccessor$1 } from "@package/de/dafuqs/spectrum/mixin/client/accessors";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ParticleManagerAccessor, $ParticleManagerAccessor$SimpleSpriteProviderAccessor } from "@package/net/fabricmc/fabric/mixin/client/particle";
import { $ParticleExtension } from "@package/dev/ryanhcode/sable/mixinterface/particle";
import { $TextureAtlasSprite, $TextureManager, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $Record, $Object } from "@package/java/lang";
import { $ParticleCreator, $BlockPosStorer, $CachedLightProvider, $CachedLightPreparer } from "@package/me/fzzyhmstrs/particle_core/interfaces";
import { $ParticleAccessor as $ParticleAccessor$2 } from "@package/me/fzzyhmstrs/particle_core/mixins";
import { $ParticleSubLevelKickable } from "@package/dev/ryanhcode/sable/api/particle";
import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $EntityRenderDispatcher } from "@package/net/minecraft/client/renderer/entity";
import { $ParticleAccessor as $ParticleAccessor$1 } from "@package/org/figuramc/figura/mixin/particle";
import { $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $FireworkExplosion_ } from "@package/net/minecraft/world/item/component";
import { $ParticleEngineAccessor as $ParticleEngineAccessor$2 } from "@package/com/telepathicgrunt/the_bumblezone/mixin/client";
import { $SubLevel, $ClientSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $ParticleEngineAccessor } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $ParticleManagerAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors/client";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $VertexConsumer, $BufferBuilder, $PoseStack, $Tesselator } from "@package/com/mojang/blaze3d/vertex";
import { $ParticleAccessor } from "@package/io/redspace/ironsspellbooks/mixin";
import { $AABB_, $Vec3, $AABB, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $Vector3dc, $Quaternionf } from "@package/org/joml";

declare module "@package/net/minecraft/client/particle" {
    export class $ParticleEngine$SpriteParticleRegistration<T extends $ParticleOptions> {
    }
    export interface $ParticleEngine$SpriteParticleRegistration<T extends $ParticleOptions> {
        create(arg0: $SpriteSet): $ParticleProvider<T>;
    }
    /**
     * Values that may be interpreted as {@link $ParticleEngine$SpriteParticleRegistration}.
     */
    export type $ParticleEngine$SpriteParticleRegistration_<T> = ((arg0: $SpriteSet) => $ParticleProvider<T>);
    export class $PortalParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $GlowParticle extends $TextureSheetParticle {
        getLightColor(arg0: number): number;
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $FallingDustParticle extends $TextureSheetParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $DustPlumeParticle extends $BaseAshSmokeParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $MobAppearanceParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor();
    }
    export class $DragonBreathParticle extends $TextureSheetParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $FlyStraightTowardsParticle extends $TextureSheetParticle {
        getLightColor(arg0: number): number;
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $SpitParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $LavaParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $TotemParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $GustParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $FireworkParticles$Starter extends $NoRenderParticle {
        createParticleBall(arg0: number, arg1: number, arg2: $IntList, arg3: $IntList, arg4: boolean, arg5: boolean): void;
        createParticleShape(arg0: number, arg1: number[][], arg2: $IntList, arg3: $IntList, arg4: boolean, arg5: boolean, arg6: boolean): void;
        createParticleBurst(arg0: $IntList, arg1: $IntList, arg2: boolean, arg3: boolean): void;
        handler$ejf000$chloride$inject$create(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $IntList, arg7: $IntList, arg8: boolean, arg9: boolean, arg10: $CallbackInfo): void;
        createParticle(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $IntList, arg7: $IntList, arg8: boolean, arg9: boolean): void;
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $ParticleEngine, arg8: $List_<$FireworkExplosion_>);
    }
    export class $ExplodeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $TerrainParticle$DustPillarProvider implements $ParticleProvider<$BlockParticleOption> {
        createParticle(arg0: $BlockParticleOption, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor();
    }
    export class $HeartParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $AshParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SquidInkParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SingleQuadParticle$FacingCameraMode {
        static LOOKAT_Y: $SingleQuadParticle$FacingCameraMode;
        static LOOKAT_XYZ: $SingleQuadParticle$FacingCameraMode;
    }
    export interface $SingleQuadParticle$FacingCameraMode {
        setRotation(arg0: $Quaternionf, arg1: $Camera, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $SingleQuadParticle$FacingCameraMode}.
     */
    export type $SingleQuadParticle$FacingCameraMode_ = ((arg0: $Quaternionf, arg1: $Camera, arg2: number) => void);
    export class $CampfireSmokeParticle$SignalProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SpellParticle extends $TextureSheetParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $GustParticle extends $TextureSheetParticle {
        getLightColor(arg0: number): number;
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $HeartParticle$AngryVillagerProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SculkChargePopParticle extends $TextureSheetParticle {
        getLightColor(arg0: number): number;
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $WhiteSmokeParticle extends $BaseAshSmokeParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $PortalParticle extends $TextureSheetParticle {
        getLightColor(arg0: number): number;
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $SpellParticle$WitchProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SimpleAnimatedParticle extends $TextureSheetParticle {
        setFadeColor(arg0: number): void;
        getLightColor(arg0: number): number;
        setColor(arg0: number): void;
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
        set fadeColor(value: number);
        set color(value: number);
    }
    export class $DustPlumeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SmokeParticle extends $BaseAshSmokeParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $FlameParticle extends $RisingParticle implements $ParticleExtension {
        wrapMethod$lcl000$sable$move(arg0: number, arg1: number, arg2: number, arg3: $Operation_<any>): void;
        getLightColor(arg0: number): number;
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $SuspendedTownParticle$HappyVillagerProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $ReversePortalParticle extends $PortalParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $GlowParticle$WaxOffProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SuspendedTownParticle extends $TextureSheetParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $SonicBoomParticle extends $HugeExplosionParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $PlayerCloudParticle$SneezeProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $DustParticle extends $DustParticleBase<$DustParticleOptions> {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $WhiteAshParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $LavaParticle extends $TextureSheetParticle {
        getLightColor(arg0: number): number;
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number);
    }
    export class $BreakingItemParticle$SnowballProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor();
    }
    export class $GustSeedParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: number, arg1: number, arg2: number);
    }
    export class $SquidInkParticle$GlowInkProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SingleQuadParticle extends $Particle implements $SingleQuadParticleAccessor {
        figura$fixQuadSize(): void;
        getFacingCameraMode(): $SingleQuadParticle$FacingCameraMode;
        getQuadSize(arg0: number): number;
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
        get facingCameraMode(): $SingleQuadParticle$FacingCameraMode;
    }
    export class $Particle$LifetimeAlpha extends $Record {
        currentAlphaForAge(arg0: number, arg1: number, arg2: number): number;
        startAtNormalizedAge(): number;
        endAtNormalizedAge(): number;
        startAlpha(): number;
        endAlpha(): number;
        isOpaque(): boolean;
        static ALWAYS_OPAQUE: $Particle$LifetimeAlpha;
        constructor(startAlpha: number, endAlpha: number, startAtNormalizedAge: number, endAtNormalizedAge: number);
        get opaque(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Particle$LifetimeAlpha}.
     */
    export type $Particle$LifetimeAlpha_ = { endAtNormalizedAge?: number, startAtNormalizedAge?: number, endAlpha?: number, startAlpha?: number,  } | [endAtNormalizedAge?: number, startAtNormalizedAge?: number, endAlpha?: number, startAlpha?: number, ];
    export class $BlockMarker extends $TextureSheetParticle implements $ParticleSubLevelKickable {
        sable$shouldCollideWithTrackingSubLevel(): boolean;
        sable$shouldKickFromTracking(): boolean;
        sable$shouldCareAboutIntersectingSubLevels(): boolean;
        sable$getUpDirection(): $Vector3dc;
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $ParticleRenderType {
        static NO_RENDER: $ParticleRenderType;
        static TERRAIN_SHEET: $ParticleRenderType;
        static PARTICLE_SHEET_LIT: $ParticleRenderType;
        static PARTICLE_SHEET_OPAQUE: $ParticleRenderType;
        static PARTICLE_SHEET_TRANSLUCENT: $ParticleRenderType;
        static CUSTOM: $ParticleRenderType;
    }
    export interface $ParticleRenderType {
        isTranslucent(): boolean;
        begin(arg0: $Tesselator, arg1: $TextureManager): $BufferBuilder;
        get translucent(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ParticleRenderType}.
     */
    export type $ParticleRenderType_ = ((arg0: $Tesselator, arg1: $TextureManager) => $BufferBuilder);
    export class $SuspendedTownParticle$DolphinSpeedProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $CritParticle$MagicProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SoulParticle$EmissiveProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $FlyTowardsPositionParticle$VaultConnectionProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $WaterDropParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $BaseAshSmokeParticle extends $TextureSheetParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $FlameParticle$SmallFlameProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $NoteParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $CherryParticle extends $TextureSheetParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $AshParticle extends $BaseAshSmokeParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $FireworkParticles$SparkParticle extends $SimpleAnimatedParticle {
        setTrail(arg0: boolean): void;
        setTwinkle(arg0: boolean): void;
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
        set trail(value: boolean);
        set twinkle(value: boolean);
    }
    export class $FlyTowardsPositionParticle$NautilusProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $CritParticle$DamageIndicatorProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SculkChargeParticle$Provider extends $Record implements $ParticleProvider<$SculkChargeParticleOptions> {
        sprite(): $SpriteSet;
        createParticle(arg0: $SculkChargeParticleOptions_, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    /**
     * Values that may be interpreted as {@link $SculkChargeParticle$Provider}.
     */
    export type $SculkChargeParticle$Provider_ = { sprite?: $SpriteSet,  } | [sprite?: $SpriteSet, ];
    export class $HugeExplosionParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $DripParticle extends $TextureSheetParticle {
        getLightColor(arg0: number): number;
        static createWaterHangParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
        static createSporeBlossomFallParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
        static createWaterFallParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
        static createLavaHangParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
        static createLavaFallParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
        static createLavaLandParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
        static createHoneyHangParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
        static createHoneyFallParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
        static createHoneyLandParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
        static createDripstoneWaterHangParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
        static createDripstoneWaterFallParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
        static createDripstoneLavaHangParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
        static createDripstoneLavaFallParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
        static createNectarFallParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
        static createObsidianTearHangParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
        static createObsidianTearFallParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
        static createObsidianTearLandParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
        level: $ClientLevel;
        zd: number;
        yd: number;
        type: $Fluid;
        xd: number;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        age: number;
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: $Fluid_);
    }
    export class $CampfireSmokeParticle extends $TextureSheetParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $BreakingItemParticle$Provider implements $ParticleProvider<$ItemParticleOption> {
        createParticle(arg0: $ItemParticleOption, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor();
    }
    export class $WakeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $PlayerCloudParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $FireworkParticles {
        constructor();
    }
    export class $ParticleEngine$MutableSpriteSet implements $SpriteSet, $ParticleManagerAccessor$SimpleSpriteProviderAccessor {
        rebind(arg0: $List_<$TextureAtlasSprite>): void;
        get(arg0: number, arg1: number): $TextureAtlasSprite;
        get(arg0: $RandomSource): $TextureAtlasSprite;
        getSprites(): $List<$TextureAtlasSprite>;
        sprites: $List<$TextureAtlasSprite>;
        constructor();
    }
    export class $GlowParticle$WaxOnProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $GlowParticle$GlowSquidProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $DripParticle$DripHangParticle extends $DripParticle {
        level: $ClientLevel;
        zd: number;
        yd: number;
        type: $Fluid;
        xd: number;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        age: number;
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: $Fluid_, arg5: $ParticleOptions_);
    }
    export class $ParticleProvider$Sprite<T extends $ParticleOptions> {
    }
    export interface $ParticleProvider$Sprite<T extends $ParticleOptions> {
        createParticle(arg0: T, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
    }
    /**
     * Values that may be interpreted as {@link $ParticleProvider$Sprite}.
     */
    export type $ParticleProvider$Sprite_<T> = ((arg0: T, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number) => $TextureSheetParticle);
    export class $GlowParticle$ScrapeProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SuspendedParticle$CrimsonSporeProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $DripParticle$FallAndLandParticle extends $DripParticle$FallingParticle {
        level: $ClientLevel;
        zd: number;
        yd: number;
        type: $Fluid;
        xd: number;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        age: number;
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: $Fluid_, arg5: $ParticleOptions_);
    }
    export class $BreakingItemParticle$SlimeProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor();
    }
    export class $SmokeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $FireworkParticles$OverlayParticle extends $TextureSheetParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $ShriekParticle$Provider implements $ParticleProvider<$ShriekParticleOption> {
        createParticle(arg0: $ShriekParticleOption, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $ExplodeParticle extends $TextureSheetParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $SculkChargePopParticle$Provider extends $Record implements $ParticleProvider<$SimpleParticleType> {
        sprite(): $SpriteSet;
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    /**
     * Values that may be interpreted as {@link $SculkChargePopParticle$Provider}.
     */
    export type $SculkChargePopParticle$Provider_ = { sprite?: $SpriteSet,  } | [sprite?: $SpriteSet, ];
    export class $SuspendedTownParticle$ComposterFillProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $NoRenderParticle extends $Particle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $BubbleParticle extends $TextureSheetParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $SoulParticle extends $RisingParticle {
        getLightColor(arg0: number): number;
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $DripParticle$FallingParticle extends $DripParticle {
        level: $ClientLevel;
        zd: number;
        yd: number;
        type: $Fluid;
        xd: number;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        age: number;
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: $Fluid_, arg5: number);
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: $Fluid_);
    }
    export class $ItemPickupParticle extends $Particle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
        constructor(arg0: $EntityRenderDispatcher, arg1: $RenderBuffers, arg2: $ClientLevel, arg3: $Entity, arg4: $Entity);
    }
    export class $FireworkParticles$SparkProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $BlockMarker$Provider implements $ParticleProvider<$BlockParticleOption> {
        createParticle(arg0: $BlockParticleOption, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor();
    }
    export class $DustParticleBase<T extends $ScalableParticleOptionsBase> extends $TextureSheetParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $VibrationSignalParticle extends $TextureSheetParticle {
        getLightColor(arg0: number): number;
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $ParticleProvider<T extends $ParticleOptions> {
    }
    export interface $ParticleProvider<T extends $ParticleOptions> {
        createParticle(arg0: T, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
    }
    /**
     * Values that may be interpreted as {@link $ParticleProvider}.
     */
    export type $ParticleProvider_<T> = ((arg0: T, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number) => $Particle);
    export class $WaterCurrentDownParticle extends $TextureSheetParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $CampfireSmokeParticle$CosyProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $HugeExplosionSeedParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor();
    }
    export class $EndRodParticle extends $SimpleAnimatedParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $TrialSpawnerDetectionParticle extends $TextureSheetParticle {
        getLightColor(arg0: number): number;
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $DripParticle$CoolingDripHangParticle extends $DripParticle$DripHangParticle {
        level: $ClientLevel;
        zd: number;
        yd: number;
        type: $Fluid;
        xd: number;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        age: number;
    }
    export class $WaterCurrentDownParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $TotemParticle extends $SimpleAnimatedParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $BubbleColumnUpParticle extends $TextureSheetParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $BreakingItemParticle extends $TextureSheetParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $WhiteSmokeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SpellParticle$MobEffectProvider implements $ParticleProvider<$ColorParticleOption> {
        createParticle(arg0: $ColorParticleOption, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $CritParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $TrackingEmitter extends $NoRenderParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
        constructor(arg0: $ClientLevel, arg1: $Entity, arg2: $ParticleOptions_);
        constructor(arg0: $ClientLevel, arg1: $Entity, arg2: $ParticleOptions_, arg3: number);
    }
    export class $SplashParticle extends $WaterDropParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $NoteParticle extends $TextureSheetParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $TerrainParticle extends $TextureSheetParticle {
        getLightColor(arg0: number): number;
        updateSprite(arg0: $BlockState_, arg1: $BlockPos_): $TerrainParticle;
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $BlockState_);
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $BlockState_, arg8: $BlockPos_);
    }
    export class $DustParticle$Provider implements $ParticleProvider<$DustParticleOptions> {
        createParticle(arg0: $DustParticleOptions, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $DripParticle$DripstoneFallAndLandParticle extends $DripParticle$FallAndLandParticle {
        level: $ClientLevel;
        zd: number;
        yd: number;
        type: $Fluid;
        xd: number;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        age: number;
    }
    export class $WaterDropParticle extends $TextureSheetParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $ParticleEngine$1ParticleDefinition extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ParticleEngine$1ParticleDefinition}.
     */
    export type $ParticleEngine$1ParticleDefinition_ = { sprites?: ($List_<$ResourceLocation_>) | undefined, id?: $ResourceLocation_,  } | [sprites?: ($List_<$ResourceLocation_>) | undefined, id?: $ResourceLocation_, ];
    export class $SpitParticle extends $ExplodeParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $BubbleColumnUpParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $BubblePopParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $LargeSmokeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $CritParticle extends $TextureSheetParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
    }
    export class $Particle implements $ParticleAccessor$2, $CachedLightPreparer, $BlockPosStorer, $ParticleAccessor, $ParticleAccessor$1, $ParticleAccessor$3, $ParticleExtension {
        getRenderType(): $ParticleRenderType;
        setPos(arg0: number, arg1: number, arg2: number): void;
        getBoundingBox(): $AABB;
        setBoundingBox(arg0: $AABB_): void;
        sable$setTrackingSubLevel(arg0: $ClientSubLevel, arg1: $Vec3_): void;
        getPos(): $Vec3;
        sable$getTrackingSubLevel(): $SubLevel;
        getRenderBoundingBox(arg0: number): $AABB;
        setPower(arg0: number): $Particle;
        setLifetime(arg0: number): void;
        particle_core_tickLightUpdate(): void;
        sable$moveWithInheritedVelocity(): void;
        move(arg0: number, arg1: number, arg2: number): void;
        setColor(arg0: number, arg1: number, arg2: number): void;
        tick(): void;
        setParticleSpeed(arg0: number, arg1: number, arg2: number): void;
        getLifetime(): number;
        getParticleGroup(): ($ParticleGroup) | undefined;
        particle_core_getCachedPos(): $BlockPos;
        particle_core_getCachedState(): $BlockState;
        particle_core_tickCachedPos(): void;
        particle_core_getCachedEmpty(): boolean;
        sable$initialKickOut(): void;
        render(arg0: $VertexConsumer, arg1: $Camera, arg2: number): void;
        remove(): void;
        scale(arg0: number): $Particle;
        isAlive(): boolean;
        getZ(): number;
        getBbWidth(): number;
        getGravity(): number;
        setGravity(arg0: number): void;
        getAlpha(): number;
        getY(): number;
        getX(): number;
        irons_spellbooks$xo(arg0: number): void;
        irons_spellbooks$yo(arg0: number): void;
        irons_spellbooks$zo(arg0: number): void;
        irons_spellbooks$gravity(arg0: number): void;
        irons_spellbooks$stoppedByCollision(arg0: boolean): void;
        setHasPhysics(arg0: boolean): void;
        getHasPhysics(): boolean;
        setXo(arg0: number): void;
        setYo(arg0: number): void;
        setZo(arg0: number): void;
        setParticleAlpha(arg0: number): void;
        getRCol(): number;
        getGCol(): number;
        getBCol(): number;
        getXd(): number;
        getYd(): number;
        getZd(): number;
        ponderjs$setHasPhysics(arg0: boolean): void;
        ponderjs$setGravity(arg0: number): void;
        ponderjs$setStoppedByCollision(arg0: boolean): void;
        ponderjs$setRoll(arg0: number): void;
        ponderjs$setFriction(arg0: number): void;
        ponderjs$setAlpha(arg0: number): void;
        ponderjs$setLifetime(arg0: number): void;
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
        get renderType(): $ParticleRenderType;
        set power(value: number);
        get particleGroup(): ($ParticleGroup) | undefined;
        get alive(): boolean;
        get bbWidth(): number;
        get alpha(): number;
        set particleAlpha(value: number);
        get RCol(): number;
        get GCol(): number;
        get BCol(): number;
    }
    export class $FlyTowardsPositionParticle$EnchantProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SpellParticle$InstantProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $DustColorTransitionParticle extends $DustParticleBase<$DustColorTransitionOptions> {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $FallingDustParticle$Provider implements $ParticleProvider<$BlockParticleOption> {
        createParticle(arg0: $BlockParticleOption, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $ReversePortalParticle$ReversePortalProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $FlameParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SpellParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SuspendedParticle$UnderwaterProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SuspendedParticle$WarpedSporeProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SpriteSet {
    }
    export interface $SpriteSet {
        get(arg0: number, arg1: number): $TextureAtlasSprite;
        get(arg0: $RandomSource): $TextureAtlasSprite;
    }
    export class $EndRodParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $GustParticle$SmallProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $FlyStraightTowardsParticle$OminousSpawnProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $ParticleDescription {
        getTextures(): $List<$ResourceLocation>;
        static fromJson(arg0: $JsonObject_): $ParticleDescription;
        get textures(): $List<$ResourceLocation>;
    }
    export class $BubblePopParticle extends $TextureSheetParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $SuspendedParticle$SporeBlossomAirProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $BubbleParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SuspendedParticle extends $TextureSheetParticle implements $ParticleSubLevelKickable {
        sable$shouldCollideWithTrackingSubLevel(): boolean;
        sable$shouldKickFromTracking(): boolean;
        sable$shouldCareAboutIntersectingSubLevels(): boolean;
        sable$getUpDirection(): $Vector3dc;
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
        constructor(arg0: $ClientLevel, arg1: $SpriteSet, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number);
        constructor(arg0: $ClientLevel, arg1: $SpriteSet, arg2: number, arg3: number, arg4: number);
    }
    export class $SplashParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $LargeSmokeParticle extends $SmokeParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $GustSeedParticle extends $NoRenderParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $WhiteAshParticle extends $BaseAshSmokeParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $ParticleEngine implements $PreparableReloadListener, $ParticleEngineAccessor$2, $ParticleManagerAccessor, $CachedLightProvider, $ParticleCreator, $ParticleEngineAccessor, $ParticleManagerAccess, $ParticleEngineAccessor$1, $ExtendedParticleManager, $ParticleManagerAccessor$1 {
        addBlockHitEffects(arg0: $BlockPos_, arg1: $BlockHitResult): void;
        createTrackingEmitter(arg0: $Entity, arg1: $ParticleOptions_, arg2: number): void;
        createTrackingEmitter(arg0: $Entity, arg1: $ParticleOptions_): void;
        createParticle(arg0: $ParticleOptions_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): $Particle;
        crack(arg0: $BlockPos_, arg1: $Direction_): void;
        setLevel(arg0: $ClientLevel): void;
        tick(): void;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        figura$clearParticles(owner: $UUID_): void;
        particle_core_getCache(): $ConcurrentHashMap<any, any>;
        iterateParticles(arg0: $Consumer_<$Particle>): void;
        countParticles(): string;
        handler$eje000$chloride$inject$create(arg0: $ParticleOptions_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $CallbackInfoReturnable<any>): void;
        redirect$eje000$chloride$redirect$particleRegistry(arg0: $Registry<any>, arg1: $Object): $ResourceLocation;
        handler$bbk000$veil$tick(arg0: $CallbackInfo): void;
        handler$bbk000$veil$setLevel(arg0: $ClientLevel, arg1: $CallbackInfo): void;
        handler$eje000$chloride$inject$destroy(arg0: $BlockPos_, arg1: $BlockState_, arg2: $CallbackInfo): void;
        handler$eje000$chloride$inject$crack(arg0: $BlockPos_, arg1: $Direction_, arg2: $CallbackInfo): void;
        handler$bbk000$veil$countParticles(arg0: $CallbackInfoReturnable<any>): void;
        handler$bbk000$veil$clear(arg0: $CallbackInfo): void;
        particle_core_createSafe(parameters: $ParticleOptions_, x: number, y: number, z: number, velocityX: number, velocityY: number, velocityZ: number): $Particle;
        figura$makeParticle(parameters: $ParticleOptions_, x: number, y: number, z: number, velocityX: number, velocityY: number, velocityZ: number): $Particle;
        figura$spawnParticle(particle: $Particle, owner: $UUID_): void;
        figura$getParticleSprite(particleID: $ResourceLocation_): $SpriteSet;
        render(arg0: $LightTexture, arg1: $Camera, arg2: number, arg3: $Frustum, arg4: $Predicate_<$ParticleRenderType>): void;
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $Camera, arg3: number): void;
        /**
         * @deprecated
         */
        render(arg0: $LightTexture, arg1: $Camera, arg2: number): void;
        add(arg0: $Particle): void;
        /**
         * @deprecated
         */
        register<T extends $ParticleOptions>(arg0: $ParticleType_<T>, arg1: $ParticleProvider_<T>): void;
        /**
         * @deprecated
         */
        register<T extends $ParticleOptions>(arg0: $ParticleType_<T>, arg1: $ParticleProvider$Sprite_<T>): void;
        /**
         * @deprecated
         */
        register<T extends $ParticleOptions>(arg0: $ParticleType_<T>, arg1: $ParticleEngine$SpriteParticleRegistration_<T>): void;
        destroy(arg0: $BlockPos_, arg1: $BlockState_): void;
        close(): void;
        getName(): string;
        getTextureAtlas(): $TextureAtlas;
        invokeMakeParticle<T extends $ParticleOptions>(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): $Particle;
        bumblezone$getTextureAtlas(): $TextureAtlas;
        getParticleAtlasTexture(): $TextureAtlas;
        ponder$getProviders(): $Map<$ResourceLocation, $ParticleProvider<never>>;
        getSpriteSets(): $Map<$ResourceLocation, $SpriteSet>;
        random: $RandomSource;
        textureAtlas: $TextureAtlas;
        spriteSets: $Map<$ResourceLocation, $ParticleEngine$MutableSpriteSet>;
        constructor(arg0: $ClientLevel, arg1: $TextureManager);
        set level(value: $ClientLevel);
        get name(): string;
        get particleAtlasTexture(): $TextureAtlas;
    }
    export class $DripParticle$DripLandParticle extends $DripParticle {
        level: $ClientLevel;
        zd: number;
        yd: number;
        type: $Fluid;
        xd: number;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        age: number;
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: $Fluid_);
    }
    export class $TrialSpawnerDetectionParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $RisingParticle extends $TextureSheetParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $FlyTowardsPositionParticle extends $TextureSheetParticle {
        getLightColor(arg0: number): number;
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $SnowflakeParticle extends $TextureSheetParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $SonicBoomParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $MobAppearanceParticle extends $Particle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $HugeExplosionParticle extends $TextureSheetParticle {
        getLightColor(arg0: number): number;
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $VibrationSignalParticle$Provider implements $ParticleProvider<$VibrationParticleOption> {
        createParticle(arg0: $VibrationParticleOption, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $BreakingItemParticle$CobwebProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor();
    }
    export class $SuspendedTownParticle$EggCrackProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $DragonBreathParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SquidInkParticle extends $SimpleAnimatedParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $ShriekParticle extends $TextureSheetParticle {
        getLightColor(arg0: number): number;
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $HugeExplosionSeedParticle extends $NoRenderParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $TextureSheetParticle extends $SingleQuadParticle {
        setSpriteFromAge(arg0: $SpriteSet): void;
        pickSprite(arg0: $SpriteSet): void;
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
        set spriteFromAge(value: $SpriteSet);
    }
    export class $DustColorTransitionParticle$Provider implements $ParticleProvider<$DustColorTransitionOptions> {
        createParticle(arg0: $DustColorTransitionOptions, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $AttackSweepParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SculkChargeParticle extends $TextureSheetParticle {
        getLightColor(arg0: number): number;
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $SuspendedTownParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SnowflakeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $FireworkParticles$FlashProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $TerrainParticle$Provider implements $ParticleProvider<$BlockParticleOption> {
        createParticle(arg0: $BlockParticleOption, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor();
    }
    export class $PlayerCloudParticle extends $TextureSheetParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $GlowParticle$ElectricSparkProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SoulParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $DripParticle$HoneyFallAndLandParticle extends $DripParticle$FallAndLandParticle {
        level: $ClientLevel;
        zd: number;
        yd: number;
        type: $Fluid;
        xd: number;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        age: number;
    }
    export class $AttackSweepParticle extends $TextureSheetParticle {
        getLightColor(arg0: number): number;
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $WakeParticle extends $TextureSheetParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
    export class $HeartParticle extends $TextureSheetParticle {
        level: $ClientLevel;
        zo: number;
        yo: number;
        gravity: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        zd: number;
        yd: number;
        xd: number;
        age: number;
    }
}
