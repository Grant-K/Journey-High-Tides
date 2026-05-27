import { $LevelAccessor, $Level_ } from "@package/net/minecraft/world/level";
import { $Behavior, $BehaviorControl } from "@package/net/minecraft/world/entity/ai/behavior";
import { $SensorType_, $Sensor } from "@package/net/minecraft/world/entity/ai/sensing";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $LightningBolt } from "@package/net/minecraft/world/entity";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Map } from "@package/java/util";
import { $Activity_ } from "@package/net/minecraft/world/entity/schedule";
import { $Villager } from "@package/net/minecraft/world/entity/npc";
import { $MemoryModuleType, $ExpirableValue } from "@package/net/minecraft/world/entity/ai/memory";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $VillagerBrainEventInternal } from "@package/net/mehvahdjukaar/moonlight/core/misc";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
export * as neoforge from "@package/net/mehvahdjukaar/moonlight/api/events/neoforge";

declare module "@package/net/mehvahdjukaar/moonlight/api/events" {
    export class $ILightningStruckBlockEvent {
        static create(state: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, entity: $LightningBolt): $ILightningStruckBlockEvent;
    }
    export interface $ILightningStruckBlockEvent extends $SimpleEvent {
        getPos(): $BlockPos;
        getLevel(): $LevelAccessor;
        getEntity(): $LightningBolt;
        getState(): $BlockState;
        get pos(): $BlockPos;
        get level(): $LevelAccessor;
        get entity(): $LightningBolt;
        get state(): $BlockState;
    }
    export class $IFireConsumeBlockEvent {
        static create(pos: $BlockPos_, level: $Level_, state: $BlockState_, chance: number, age: number, face: $Direction_, wasReplacedByFire: boolean): $IFireConsumeBlockEvent;
    }
    export interface $IFireConsumeBlockEvent extends $SimpleEvent {
        getPos(): $BlockPos;
        getFinalState(): $BlockState;
        getFace(): $Direction;
        getChance(): number;
        setFinalState(arg0: $BlockState_): void;
        getLevel(): $LevelAccessor;
        wasReplacedByFire(): boolean;
        getAge(): number;
        getState(): $BlockState;
        get pos(): $BlockPos;
        get face(): $Direction;
        get chance(): number;
        get level(): $LevelAccessor;
        get age(): number;
        get state(): $BlockState;
    }
    export class $IVillagerBrainEvent {
    }
    export interface $IVillagerBrainEvent extends $SimpleEvent {
        getInternal(): $VillagerBrainEventInternal;
        addSensor(arg0: $SensorType_<$Sensor<$Villager>>): void;
        getVillager(): $Villager;
        addOrReplaceActivity(arg0: $Activity_, arg1: $ImmutableList<$Pair<number, $BehaviorControl<$Villager>>>): void;
        scheduleActivity(arg0: $Activity_, arg1: number, arg2: number): void;
        addTaskToActivity<P extends $Pair<number, $Behavior<$Villager>>>(arg0: $Activity_, arg1: P): boolean;
        getMemories(): $Map<$MemoryModuleType<never>, ($ExpirableValue<never>) | undefined>;
        get internal(): $VillagerBrainEventInternal;
        get villager(): $Villager;
        get memories(): $Map<$MemoryModuleType<never>, ($ExpirableValue<never>) | undefined>;
    }
    export class $IDropItemOnDeathEvent {
        static create(itemStack: $ItemStack_, player: $Player, beforeDrop: boolean): $IDropItemOnDeathEvent;
    }
    export interface $IDropItemOnDeathEvent extends $SimpleEvent {
        setCanceled(arg0: boolean): void;
        getItemStack(): $ItemStack;
        getPlayer(): $Player;
        getReturnItemStack(): $ItemStack;
        isBeforeDrop(): boolean;
        setReturnItemStack(arg0: $ItemStack_): void;
        isCanceled(): boolean;
        get itemStack(): $ItemStack;
        get player(): $Player;
        get beforeDrop(): boolean;
    }
    export class $SimpleEvent {
    }
    export interface $SimpleEvent {
    }
}
