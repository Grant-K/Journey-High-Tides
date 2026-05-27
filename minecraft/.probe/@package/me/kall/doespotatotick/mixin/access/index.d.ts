import { $Raid } from "@package/net/minecraft/world/entity/raid";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/me/kall/doespotatotick/mixin/access" {
    export class $LivingEntityAccessor {
    }
    export interface $LivingEntityAccessor {
        dpt$isDead(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LivingEntityAccessor}.
     */
    export type $LivingEntityAccessor_ = (() => boolean);
    export class $RaidsAccessor {
    }
    export interface $RaidsAccessor {
        dpt$getRaids(): $Map<number, $Raid>;
    }
    /**
     * Values that may be interpreted as {@link $RaidsAccessor}.
     */
    export type $RaidsAccessor_ = (() => $Map_<number, $Raid>);
}
