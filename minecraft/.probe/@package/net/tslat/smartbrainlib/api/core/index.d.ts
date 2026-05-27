import { $Behavior, $BehaviorControl } from "@package/net/minecraft/world/entity/ai/behavior";
import { $ExtendedSensor } from "@package/net/tslat/smartbrainlib/api/core/sensor";
import { $SensorType, $Sensor } from "@package/net/minecraft/world/entity/ai/sensing";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $List, $Map, $Set, $List_ } from "@package/java/util";
import { $Activity_, $Activity } from "@package/net/minecraft/world/entity/schedule";
import { $MemoryStatus, $MemoryModuleType_, $MemoryModuleType, $MemoryStatus_, $ExpirableValue } from "@package/net/minecraft/world/entity/ai/memory";
import { $Consumer_ } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $Brain } from "@package/net/minecraft/world/entity/ai";
import { $BrainBehaviourConsumer_, $BrainBehaviourPredicate_ } from "@package/net/tslat/smartbrainlib/object";
import { $SmartBrainSchedule } from "@package/net/tslat/smartbrainlib/api/core/schedule";
export * as schedule from "@package/net/tslat/smartbrainlib/api/core/schedule";
export * as sensor from "@package/net/tslat/smartbrainlib/api/core/sensor";

declare module "@package/net/tslat/smartbrainlib/api/core" {
    export class $SmartBrain<E extends $LivingEntity> extends $Brain<E> {
        scheduleTask(arg0: E, arg1: number, arg2: $Consumer_<E>): void;
        getBehaviours(): $Stream<$BehaviorControl<E>>;
        addBehaviour(arg0: number, arg1: $Activity_, arg2: $BehaviorControl<E>): void;
        addActivity(arg0: $BrainActivityGroup<E>): void;
        setSchedule(arg0: $SmartBrainSchedule): $SmartBrain<E>;
        addSensor(arg0: $ExtendedSensor<E>): void;
        forEachBehaviour(arg0: $BrainBehaviourConsumer_): void;
        removeBehaviour(arg0: E, arg1: $BrainBehaviourPredicate_): void;
        activityMemoriesToEraseWhenStopped: $Map<$Activity, $Set<$MemoryModuleType<never>>>;
        sensors: $Map<$SensorType<$Sensor<E>>, $Sensor<E>>;
        coreActivities: $Set<$Activity>;
        activeActivities: $Set<$Activity>;
        memories: $Map<$MemoryModuleType<never>, ($ExpirableValue<never>) | undefined>;
        availableBehaviorsByPriority: $Map<number, $Map<$Activity, $Set<$BehaviorControl<E>>>>;
        activityRequirements: $Map<$Activity, $Set<$Pair<$MemoryModuleType<never>, $MemoryStatus>>>;
        constructor(arg0: $List_<$MemoryModuleType_<never>>, arg1: $List_<$ExtendedSensor<E>>, arg2: $List_<$BrainActivityGroup<E>>);
        get behaviours(): $Stream<$BehaviorControl<E>>;
        set schedule(value: $SmartBrainSchedule);
    }
    export class $BrainActivityGroup<T extends $LivingEntity> {
        getActivityStartMemoryConditions(): $Set<$Pair<$MemoryModuleType<never>, $MemoryStatus>>;
        getBehaviours(): $List<$Behavior<T>>;
        getWipedMemoriesOnFinish(): $Set<$MemoryModuleType<never>>;
        pairBehaviourPriorities(): $ImmutableList<$Pair<number, $Behavior<T>>>;
        static coreTasks<T extends $LivingEntity>(...arg0: $Behavior<any>[]): $BrainActivityGroup<T>;
        static idleTasks<T extends $LivingEntity>(...arg0: $Behavior<any>[]): $BrainActivityGroup<T>;
        onlyStartWithMemoryStatus(arg0: $MemoryModuleType_<never>, arg1: $MemoryStatus_): $BrainActivityGroup<T>;
        wipeMemoriesWhenFinished(...arg0: $MemoryModuleType_<never>[]): $BrainActivityGroup<T>;
        requireAndWipeMemoriesOnUse(...arg0: $MemoryModuleType_<never>[]): $BrainActivityGroup<T>;
        getPriorityStart(): number;
        static fightTasks<T extends $LivingEntity>(...arg0: $Behavior<any>[]): $BrainActivityGroup<T>;
        getActivity(): $Activity;
        behaviours(...arg0: $Behavior<T>[]): $BrainActivityGroup<T>;
        priority(arg0: number): $BrainActivityGroup<T>;
        static empty<T extends $LivingEntity>(): $BrainActivityGroup<T>;
        constructor(arg0: $Activity_);
        get activityStartMemoryConditions(): $Set<$Pair<$MemoryModuleType<never>, $MemoryStatus>>;
        get wipedMemoriesOnFinish(): $Set<$MemoryModuleType<never>>;
        get priorityStart(): number;
        get activity(): $Activity;
    }
}
