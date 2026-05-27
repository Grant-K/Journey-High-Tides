import { $Function_ } from "@package/java/util/function";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UUID_, $UUID, $List, $List_ } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $AABB, $Vec3_, $AABB_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/com/aetherteam/nitrogen/entity" {
    export class $BossRoomTracker<T extends $Mob> extends $Record {
        addAdditionalSaveData(): $CompoundTag;
        static readAdditionalSaveData<T extends $Mob>(arg0: $CompoundTag_, arg1: T): $BossRoomTracker<T>;
        isPlayerWithinRoomInterior(arg0: $Entity): boolean;
        originCoordinates(): $Vec3;
        grantAdvancements(arg0: $DamageSource_): void;
        isPlayerTracked(arg0: $Player): boolean;
        roomBounds(): $AABB;
        modifyRoom(arg0: $Function_<$BlockState, $BlockState>): void;
        trackPlayers(): void;
        dungeonPlayers(): $List<$UUID>;
        isBossWithinRoom(): boolean;
        isPlayerWithinRoom(arg0: $Entity): boolean;
        boss(): T;
        constructor(boss: T, originCoordinates: $Vec3_, roomBounds: $AABB_, dungeonPlayers: $List_<$UUID_>);
        get bossWithinRoom(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BossRoomTracker}.
     */
    export type $BossRoomTracker_<T> = { roomBounds?: $AABB_, boss?: $Mob, originCoordinates?: $Vec3_, dungeonPlayers?: $List_<$UUID_>,  } | [roomBounds?: $AABB_, boss?: $Mob, originCoordinates?: $Vec3_, dungeonPlayers?: $List_<$UUID_>, ];
}
