import { $TagKey_ } from "@package/net/minecraft/tags";
import { $DamageType } from "@package/net/minecraft/world/damagesource";

declare module "@package/dev/shadowsoffire/apotheosis/util" {
    export class $IFestiveMarker {
    }
    export interface $IFestiveMarker {
        setMarked(arg0: boolean): void;
        isMarked(): boolean;
    }
    export class $DamageSourceExtension {
    }
    export interface $DamageSourceExtension {
        removeTag(arg0: $TagKey_<$DamageType>): void;
        addTag(arg0: $TagKey_<$DamageType>): void;
    }
}
