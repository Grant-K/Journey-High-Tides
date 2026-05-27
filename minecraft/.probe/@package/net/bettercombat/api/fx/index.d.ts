import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $LinkedHashMap } from "@package/java/util";
import { $Record } from "@package/java/lang";

declare module "@package/net/bettercombat/api/fx" {
    export class $ParticlePlacement extends $Record {
        particle_type(): string;
        x_addition(): number;
        y_addition(): number;
        z_addition(): number;
        local_yaw(): number;
        pitch_addition(): number;
        roll_set(): number;
        static DEFAULT: $ParticlePlacement;
        constructor(particle_type: string, x_addition: number, y_addition: number, z_addition: number, local_yaw: number, pitch_addition: number, roll_set: number);
    }
    /**
     * Values that may be interpreted as {@link $ParticlePlacement}.
     */
    export type $ParticlePlacement_ = { local_yaw?: number, particle_type?: string, roll_set?: number, x_addition?: number, y_addition?: number, z_addition?: number, pitch_addition?: number,  } | [local_yaw?: number, particle_type?: string, roll_set?: number, x_addition?: number, y_addition?: number, z_addition?: number, pitch_addition?: number, ];
    export class $TrailAppearance {
        secondary: $TrailAppearance$Part;
        static DEFAULT: $TrailAppearance;
        primary: $TrailAppearance$Part;
        constructor();
        constructor(primary: $TrailAppearance$Part_, secondary: $TrailAppearance$Part_);
    }
    export class $TrailAppearance$Part extends $Record {
        color_rgba(): number;
        glows(): boolean;
        static DEFAULT_PRIMARY: $TrailAppearance$Part;
        static DEFAULT_SECONDARY: $TrailAppearance$Part;
        constructor(color_rgba: number, glows: boolean);
    }
    /**
     * Values that may be interpreted as {@link $TrailAppearance$Part}.
     */
    export type $TrailAppearance$Part_ = { glows?: boolean, color_rgba?: number,  } | [glows?: boolean, color_rgba?: number, ];
    export class $ConditionalTrailAppearance extends $Record {
        conditional(): $LinkedHashMap<string, $TrailAppearance>;
        default_appearance(): $TrailAppearance;
        merge(override: $ConditionalTrailAppearance_): $ConditionalTrailAppearance;
        resolve(itemStack: $ItemStack_): $TrailAppearance;
        constructor(default_appearance: $TrailAppearance);
        constructor(default_appearance: $TrailAppearance, conditional: $LinkedHashMap<string, $TrailAppearance>);
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $ConditionalTrailAppearance}.
     */
    export type $ConditionalTrailAppearance_ = { conditional?: $LinkedHashMap<string, $TrailAppearance>, default_appearance?: $TrailAppearance,  } | [conditional?: $LinkedHashMap<string, $TrailAppearance>, default_appearance?: $TrailAppearance, ];
}
