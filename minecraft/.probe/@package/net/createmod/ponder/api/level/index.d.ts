import { $Level, $EntityGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $PonderScene } from "@package/net/createmod/ponder/foundation";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $Codec } from "@package/com/mojang/serialization";
import { $Particle } from "@package/net/minecraft/client/particle";
import { $Selection } from "@package/net/createmod/ponder/api/scene";
import { $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $Camera } from "@package/net/minecraft/client";
import { $ArrayList, $List, $Map } from "@package/java/util";
import { $PonderWorldAccessor } from "@package/com/almostreliable/ponderjs/mixin";
import { $RandomSource } from "@package/net/minecraft/util";
import { $SuperRenderTypeBuffer } from "@package/net/createmod/catnip/render";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $SchematicLevel } from "@package/net/createmod/catnip/levelWrappers";
import { $Thread } from "@package/java/lang";
import { $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/createmod/ponder/api/level" {
    export class $PonderLevel extends $SchematicLevel implements $PonderWorldAccessor {
        addParticle(arg0: $Particle): void;
        clearMask(): void;
        restore(): void;
        tick(): void;
        createBackup(): void;
        getBlockBreakingProgressions(): $Map<$BlockPos, number>;
        renderParticles(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $Camera, arg3: number): void;
        restoreBlocks(arg0: $Selection): void;
        pushFakeLight(arg0: number): void;
        popLight(): void;
        setMask(arg0: $Selection): void;
        renderEntities(arg0: $PoseStack, arg1: $SuperRenderTypeBuffer, arg2: $Camera, arg3: number): void;
        setBlockBreakingProgress(arg0: $BlockPos_, arg1: number): void;
        addBlockDestroyEffects(arg0: $BlockPos_, arg1: $BlockState_): void;
        self(): $EntityGetter;
        ponderjs$makeParticle<T extends $ParticleOptions>(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): $Particle;
        restoringBlockSnapshots: boolean;
        /**
         * @deprecated
         */
        threadSafeRandom: $RandomSource;
        static LONG_PARTICLE_CLIP_RANGE: number;
        scene: $PonderScene;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        static MAX_BRIGHTNESS: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        rainLevel: number;
        oThunderLevel: number;
        static ATTACHMENTS_NBT_KEY: string;
        thread: $Thread;
        renderMode: boolean;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        oRainLevel: number;
        anchor: $BlockPos;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        captureBlockSnapshots: boolean;
        constructor(arg0: $BlockPos_, arg1: $Level_);
        get blockBreakingProgressions(): $Map<$BlockPos, number>;
        set mask(value: $Selection);
    }
}
