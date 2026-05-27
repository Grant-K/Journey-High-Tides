import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BoundedBitVolume3i } from "@package/dev/ryanhcode/sable/util";
import { $Set } from "@package/java/util";
import { $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/dev/ryanhcode/sable/sublevel/water_occlusion" {
    export class $WaterOcclusionContainer<T extends $WaterOcclusionRegion> {
        getRegions(): $Set<T>;
        addRegion(arg0: $BoundedBitVolume3i): $WaterOcclusionRegion;
        isOccluded(arg0: $Vec3_): boolean;
        getOccludingRegion(arg0: $Vec3_): T;
        markDirty(arg0: $BlockPos_): void;
        static getContainer(arg0: $Level_): $WaterOcclusionContainer<never>;
        removeRegion(arg0: $WaterOcclusionRegion): void;
        constructor(arg0: $Level_);
        get regions(): $Set<T>;
    }
    export class $WaterOcclusionRegion {
        getVolume(): $BoundedBitVolume3i;
        markDirty(): void;
        isDirty(): boolean;
        constructor(arg0: $BoundedBitVolume3i);
        get volume(): $BoundedBitVolume3i;
        get dirty(): boolean;
    }
}
