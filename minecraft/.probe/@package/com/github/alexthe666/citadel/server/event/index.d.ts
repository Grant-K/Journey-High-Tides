import { $StructureManager } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $TriState_, $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $MobSpawnSettings$SpawnerData } from "@package/net/minecraft/world/level/biome";
import { $MobCategory_, $MobCategory, $Entity } from "@package/net/minecraft/world/entity";
import { $WeightedRandomList } from "@package/net/minecraft/util/random";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";

declare module "@package/com/github/alexthe666/citadel/server/event" {
    export class $EventChangeEntityTickRate extends $Event implements $ICancellableEvent {
        getEntity(): $Entity;
        getTargetTickRate(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Entity, arg1: number);
        get entity(): $Entity;
        get targetTickRate(): number;
    }
    export class $EventMergeStructureSpawns extends $Event {
        getPos(): $BlockPos;
        getStructureManager(): $StructureManager;
        isStructureTagged(arg0: $TagKey_<$Structure>): boolean;
        mergeSpawns(): void;
        getBiomeSpawns(): $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        getStructureSpawns(): $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        setStructureSpawns(arg0: $WeightedRandomList<$MobSpawnSettings$SpawnerData>): void;
        getResult(): $TriState;
        setResult(arg0: $TriState_): void;
        getCategory(): $MobCategory;
        constructor(arg0: $StructureManager, arg1: $BlockPos_, arg2: $MobCategory_, arg3: $WeightedRandomList<$MobSpawnSettings$SpawnerData>, arg4: $WeightedRandomList<$MobSpawnSettings$SpawnerData>);
        get pos(): $BlockPos;
        get structureManager(): $StructureManager;
        get biomeSpawns(): $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        get category(): $MobCategory;
    }
}
