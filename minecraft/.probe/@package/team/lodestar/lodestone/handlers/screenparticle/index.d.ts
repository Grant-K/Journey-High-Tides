import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ScreenParticleHolder } from "@package/team/lodestar/lodestone/systems/particle/screen";

declare module "@package/team/lodestar/lodestone/handlers/screenparticle" {
    export class $ParticleEmitterHandler$ItemParticleSupplier {
    }
    export interface $ParticleEmitterHandler$ItemParticleSupplier {
        spawnLateParticles(arg0: $ScreenParticleHolder, arg1: $Level_, arg2: number, arg3: $ItemStack_, arg4: number, arg5: number): void;
        spawnEarlyParticles(arg0: $ScreenParticleHolder, arg1: $Level_, arg2: number, arg3: $ItemStack_, arg4: number, arg5: number): void;
    }
}
