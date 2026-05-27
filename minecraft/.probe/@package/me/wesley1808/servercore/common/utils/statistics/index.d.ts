import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $StatisticEntry } from "@package/me/wesley1808/servercore/common/utils/statistics/entry";
import { $Map, $List } from "@package/java/util";
import { $Iterable_ } from "@package/java/lang";
import { $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as entry from "@package/me/wesley1808/servercore/common/utils/statistics/entry";

declare module "@package/me/wesley1808/servercore/common/utils/statistics" {
    export class $Statistics {
        getAllEntities(): $List<$Entity>;
        getEntitiesByPlayer(players: $Iterable_<$ServerPlayer>): $Map<string, $StatisticEntry<$Entity>>;
        getEntitiesNear(player: $ServerPlayer): $List<$Entity>;
        getEntitiesByType(entities: $Iterable_<$Entity>): $Map<string, $StatisticEntry<$Entity>>;
        getBlockEntitiesByPlayer(players: $Iterable_<$ServerPlayer>): $Map<string, $StatisticEntry<$TickingBlockEntity>>;
        getAllBlockEntities(): $List<$TickingBlockEntity>;
        getBlockEntitiesNear(player: $ServerPlayer): $List<$TickingBlockEntity>;
        getBlockEntitiesByType(blockEntities: $Iterable_<$TickingBlockEntity>): $Map<string, $StatisticEntry<$TickingBlockEntity>>;
        getChunkCount(onlyLoaded: boolean): number;
        static getInstance(server: $MinecraftServer): $Statistics;
        constructor(server: $MinecraftServer);
        get allEntities(): $List<$Entity>;
        get allBlockEntities(): $List<$TickingBlockEntity>;
    }
}
