import { $LevelAccessor, $Level_ } from "@package/net/minecraft/world/level";
import { $Behavior, $BehaviorControl } from "@package/net/minecraft/world/entity/ai/behavior";
import { $SensorType_, $Sensor } from "@package/net/minecraft/world/entity/ai/sensing";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $LightningBolt } from "@package/net/minecraft/world/entity";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Map } from "@package/java/util";
import { $Activity_ } from "@package/net/minecraft/world/entity/schedule";
import { $Villager } from "@package/net/minecraft/world/entity/npc";
import { $MemoryModuleType, $ExpirableValue } from "@package/net/minecraft/world/entity/ai/memory";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $VillagerBrainEventInternal } from "@package/net/mehvahdjukaar/moonlight/core/misc";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Brain } from "@package/net/minecraft/world/entity/ai";
import { $ILightningStruckBlockEvent, $IVillagerBrainEvent, $IFireConsumeBlockEvent, $IDropItemOnDeathEvent } from "@package/net/mehvahdjukaar/moonlight/api/events";
import { $BlockEvent } from "@package/net/neoforged/neoforge/event/level";

declare module "@package/net/mehvahdjukaar/moonlight/api/events/neoforge" {
    export class $DropItemOnDeathEvent extends $Event implements $IDropItemOnDeathEvent, $ICancellableEvent {
        setCanceled(cancelled: boolean): void;
        getItemStack(): $ItemStack;
        getPlayer(): $Player;
        getReturnItemStack(): $ItemStack;
        isBeforeDrop(): boolean;
        setReturnItemStack(stack: $ItemStack_): void;
        static create(itemStack: $ItemStack_, player: $Player, beforeDrop: boolean): $IDropItemOnDeathEvent;
        isCanceled(): boolean;
        constructor(itemStack: $ItemStack_, player: $Player, beforeDrop: boolean);
        get itemStack(): $ItemStack;
        get player(): $Player;
        get beforeDrop(): boolean;
    }
    export class $LightningStruckBlockEvent extends $BlockEvent implements $ILightningStruckBlockEvent {
        getEntity(): $LightningBolt;
        constructor(state: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, entity: $LightningBolt);
        get entity(): $LightningBolt;
    }
    export class $VillagerBrainEvent extends $Event implements $IVillagerBrainEvent {
        getInternal(): $VillagerBrainEventInternal;
        addSensor(newSensor: $SensorType_<$Sensor<$Villager>>): void;
        getVillager(): $Villager;
        addOrReplaceActivity(activity: $Activity_, activityPackage: $ImmutableList<$Pair<number, $BehaviorControl<$Villager>>>): void;
        scheduleActivity(activity: $Activity_, startTime: number, endTime: number): void;
        addTaskToActivity<P extends $Pair<number, $Behavior<$Villager>>>(activity: $Activity_, task: P): boolean;
        getMemories(): $Map<$MemoryModuleType<never>, ($ExpirableValue<never>) | undefined>;
        constructor(brain: $Brain<$Villager>, villager: $Villager);
        get internal(): $VillagerBrainEventInternal;
        get villager(): $Villager;
        get memories(): $Map<$MemoryModuleType<never>, ($ExpirableValue<never>) | undefined>;
    }
    export class $FireConsumeBlockEvent extends $BlockEvent implements $IFireConsumeBlockEvent {
        getFinalState(): $BlockState;
        getFace(): $Direction;
        getChance(): number;
        setFinalState(state: $BlockState_): void;
        wasReplacedByFire(): boolean;
        getAge(): number;
        constructor(world: $Level_, pos: $BlockPos_, state: $BlockState_, chance: number, age: number, face: $Direction_, wasTurnedToFire: boolean);
        get face(): $Direction;
        get chance(): number;
        get age(): number;
    }
}
