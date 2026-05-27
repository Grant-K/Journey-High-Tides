import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Particle } from "@package/net/minecraft/client/particle";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $RenderLevelStageEvent } from "@package/net/neoforged/neoforge/client/event";

declare module "@package/com/leclowndu93150/wakes/particle/custom" {
    export class $SplashPlaneParticle extends $Particle {
        translateMatrix(arg0: $RenderLevelStageEvent, arg1: $PoseStack): void;
        initTexture(arg0: number): void;
        deallocTexture(): void;
        populatePixels(): void;
        owner: $Entity;
        texRes: number;
        lerpedYaw: number;
        level: $ClientLevel;
        zd: number;
        yd: number;
        hasPopulatedPixels: boolean;
        xd: number;
        isRenderReady: boolean;
        zo: number;
        yo: number;
        gravity: number;
        imgPtr: number;
        xo: number;
        x: number;
        y: number;
        z: number;
        age: number;
    }
}
