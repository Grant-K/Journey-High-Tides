import { $Level } from "@package/net/minecraft/world/level";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
export * as voxel from "@package/mekanism/common/lib/math/voxel";

declare module "@package/mekanism/common/lib/math" {
    export class $Range3D extends $Record {
        xMin(): number;
        xMax(): number;
        zMin(): number;
        zMax(): number;
        dimension(): $ResourceKey<$Level>;
        clone(): $Range3D;
        constructor(xMin: number, zMin: number, xMax: number, zMax: number, dimension: $ResourceKey_<$Level>);
    }
    /**
     * Values that may be interpreted as {@link $Range3D}.
     */
    export type $Range3D_ = { zMax?: number, xMax?: number, zMin?: number, dimension?: $ResourceKey_<$Level>, xMin?: number,  } | [zMax?: number, xMax?: number, zMin?: number, dimension?: $ResourceKey_<$Level>, xMin?: number, ];
}
