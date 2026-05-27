import { $ScreenParticle } from "@package/team/lodestar/lodestone/systems/particle/screen/base";
import { $Tesselator, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $ArrayList, $Map } from "@package/java/util";
import { $LodestoneScreenParticleRenderType } from "@package/team/lodestar/lodestone/systems/particle/render_types";
export * as base from "@package/team/lodestar/lodestone/systems/particle/screen/base";

declare module "@package/team/lodestar/lodestone/systems/particle/screen" {
    export class $ScreenParticleHolder {
        tick(): void;
        addFrom(arg0: $ScreenParticleHolder): void;
        render(arg0: $PoseStack): void;
        render(): void;
        render(arg0: $GuiGraphics): void;
        isEmpty(): boolean;
        static TESSELATOR: $Tesselator;
        particles: $Map<$LodestoneScreenParticleRenderType, $ArrayList<$ScreenParticle>>;
        constructor();
        get empty(): boolean;
    }
}
