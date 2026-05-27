import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/mehvahdjukaar/supplementaries/common/entities/dispenser_minecart" {
    export class $ILevelEventRedirect {
        static supp$tryRedirect(serverLevel: $ServerLevel, pPlayer: $Player, vec3: $Vec3_, pType: number, pPos: $BlockPos_, pData: number): boolean;
    }
    export interface $ILevelEventRedirect {
        supp$setRedirected(arg0: boolean, arg1: $Vec3_): void;
    }
    /**
     * Values that may be interpreted as {@link $ILevelEventRedirect}.
     */
    export type $ILevelEventRedirect_ = ((arg0: boolean, arg1: $Vec3) => void);
}
