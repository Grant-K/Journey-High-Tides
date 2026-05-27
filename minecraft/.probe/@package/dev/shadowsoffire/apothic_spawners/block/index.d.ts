import { $BaseSpawner } from "@package/net/minecraft/world/level";
import { $HolderLookup$Provider, $BlockPos_ } from "@package/net/minecraft/core";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $SpawnerStat } from "@package/dev/shadowsoffire/apothic_spawners/stats";
import { $Object } from "@package/java/lang";
import { $Map } from "@package/java/util";
import { $SpawnerBlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/dev/shadowsoffire/apothic_spawners/block" {
    export class $ApothSpawnerTile extends $SpawnerBlockEntity {
        loadAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        hasBeenModified(): boolean;
        saveAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getStatsMap(): $Map<$SpawnerStat<never>, $Object>;
        spawner: $BaseSpawner;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get statsMap(): $Map<$SpawnerStat<never>, $Object>;
    }
}
