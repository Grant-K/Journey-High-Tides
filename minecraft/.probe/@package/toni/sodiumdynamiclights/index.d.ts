import { $Level } from "@package/net/minecraft/world/level";
import { $LevelRenderer } from "@package/net/minecraft/client/renderer";
export * as accessor from "@package/toni/sodiumdynamiclights/accessor";

declare module "@package/toni/sodiumdynamiclights" {
    export class $DynamicLightSource {
    }
    export interface $DynamicLightSource {
        sdl$dynamicLightTick(): void;
        sdl$getLuminance(): number;
        sdl$shouldUpdateDynamicLight(): boolean;
        sdl$getDynamicLightX(): number;
        sdl$getDynamicLightY(): number;
        sdl$getDynamicLightZ(): number;
        sdl$getDynamicLightLevel(): $Level;
        sdl$isDynamicLightEnabled(): boolean;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        sdl$resetDynamicLight(): void;
        sodiumdynamiclights$updateDynamicLight(arg0: $LevelRenderer): boolean;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(arg0: $LevelRenderer): void;
    }
}
