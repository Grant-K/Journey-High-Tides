import { $SplashPlaneParticle } from "@package/com/leclowndu93150/wakes/particle/custom";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/leclowndu93150/wakes/duck" {
    export class $ProducesWake {
    }
    export interface $ProducesWake {
        wakes$onFluidSurface(): boolean;
        wakes$getNumericalVelocity(): $Vec3;
        wakes$getHorizontalVelocity(): number;
        wakes$getPrevPos(): $Vec3;
        wakes$setPrevPos(arg0: $Vec3_): void;
        wakes$wakeHeight(): number;
        wakes$setWakeHeight(arg0: number): void;
        wakes$setSplashPlane(arg0: $SplashPlaneParticle): void;
        wakes$setRecentlyTeleported(arg0: boolean): void;
        wakes$getSplashPlane(): $SplashPlaneParticle;
    }
}
