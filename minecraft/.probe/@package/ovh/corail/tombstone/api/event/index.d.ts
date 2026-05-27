import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Zombie } from "@package/net/minecraft/world/entity/monster";
import { $MerchantOffers, $Merchant } from "@package/net/minecraft/world/item/trading";

declare module "@package/ovh/corail/tombstone/api/event" {
    export class $VillageSiegeEvent$SpawnZombie extends $VillageSiegeEvent implements $ICancellableEvent {
        getZombie(): $Zombie;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $ServerLevel, arg1: $Zombie);
        get zombie(): $Zombie;
    }
    export class $VillageSiegeEvent extends $Event {
        getLevel(): $ServerLevel;
        constructor(arg0: $ServerLevel);
        get level(): $ServerLevel;
    }
    export class $MerchantOffersEvent extends $Event {
        getMerchant(): $Merchant;
        getMerchantLevel(): number;
        getMerchantOffers(): $MerchantOffers;
        constructor(arg0: $Merchant, arg1: number, arg2: $MerchantOffers);
        get merchant(): $Merchant;
        get merchantLevel(): number;
        get merchantOffers(): $MerchantOffers;
    }
    export class $PhantomSpawnerEvent extends $Event {
        getPlayer(): $Player;
        getTimeForCheck(): number;
        constructor(arg0: $Player, arg1: number);
        get player(): $Player;
        get timeForCheck(): number;
    }
    export class $PhantomSpawnerEvent$TimeForCheck extends $PhantomSpawnerEvent {
        modifyTimeForCheck(arg0: number): void;
        constructor(arg0: $Player, arg1: number);
    }
    export class $CaptureSoulEvent extends $Event implements $ICancellableEvent {
        getPlayer(): $Player;
        getCapturedEntity(): $LivingEntity;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $LivingEntity);
        get player(): $Player;
        get capturedEntity(): $LivingEntity;
    }
    export class $PhantomSpawnerEvent$CheckPhantomSpawn extends $PhantomSpawnerEvent {
        getTimeSinceRest(): number;
        constructor(arg0: $Player, arg1: number, arg2: number);
        get timeSinceRest(): number;
    }
    export class $VillageSiegeEvent$Start extends $VillageSiegeEvent implements $ICancellableEvent {
        getSpawnPos(): $BlockPos;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $ServerLevel, arg1: $BlockPos_);
        get spawnPos(): $BlockPos;
    }
    export class $RestoreInventoryEvent extends $Event {
        getInventory(): $IItemHandler;
        getPlayer(): $Player;
        getOwnerDeathTime(): number;
        getGravePos(): $BlockPos;
        getOwnerName(): string;
        constructor(arg0: $Player, arg1: $BlockPos_, arg2: $IItemHandler, arg3: string, arg4: number);
        get inventory(): $IItemHandler;
        get player(): $Player;
        get ownerDeathTime(): number;
        get gravePos(): $BlockPos;
        get ownerName(): string;
    }
}
