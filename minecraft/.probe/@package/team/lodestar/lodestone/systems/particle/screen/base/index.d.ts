import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BufferBuilder, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $LodestoneScreenParticleRenderType } from "@package/team/lodestar/lodestone/systems/particle/render_types";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/team/lodestar/lodestone/systems/particle/screen/base" {
    export class $ScreenParticle {
        getRenderType(): $LodestoneScreenParticleRenderType;
        setLifetime(arg0: number): void;
        setColor(arg0: number, arg1: number, arg2: number): void;
        tick(): void;
        setParticleSpeed(arg0: number, arg1: number): void;
        getLifetime(): number;
        setSize(arg0: number): $ScreenParticle;
        render(arg0: $BufferBuilder, arg1: $PoseStack): void;
        remove(): void;
        isAlive(): boolean;
        level: $ClientLevel;
        yMotion: number;
        lifetime: number;
        roll: number;
        xMotion: number;
        xMoved: number;
        friction: number;
        oRoll: number;
        yMoved: number;
        random: $RandomSource;
        bCol: number;
        removed: boolean;
        size: number;
        yOld: number;
        gravity: number;
        gCol: number;
        alpha: number;
        xOld: number;
        x: number;
        y: number;
        rCol: number;
        age: number;
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: number);
        get renderType(): $LodestoneScreenParticleRenderType;
        get alive(): boolean;
    }
}
