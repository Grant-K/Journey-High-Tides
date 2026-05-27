import { $SmartBrain, $BrainActivityGroup } from "@package/net/tslat/smartbrainlib/api/core";
import { $ExtendedSensor } from "@package/net/tslat/smartbrainlib/api/core/sensor";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $SmartBrainSchedule } from "@package/net/tslat/smartbrainlib/api/core/schedule";
import { $Activity } from "@package/net/minecraft/world/entity/schedule";
import { $List_, $Map, $Set, $List } from "@package/java/util";
export * as core from "@package/net/tslat/smartbrainlib/api/core";

declare module "@package/net/tslat/smartbrainlib/api" {
    export class $SmartBrainOwner<T extends $LivingEntity> {
    }
    export interface $SmartBrainOwner<T extends $LivingEntity> {
        tickBrain(arg0: T): void;
        getFightTasks(): $BrainActivityGroup<T>;
        getAdditionalTasks(): $Map<$Activity, $BrainActivityGroup<T>>;
        getAlwaysRunningActivities(): $Set<$Activity>;
        getDefaultActivity(): $Activity;
        getActivityPriorities(): $List<$Activity>;
        getScheduleIgnoringActivities(): $Set<$Activity>;
        getCoreTasks(): $BrainActivityGroup<T>;
        getIdleTasks(): $BrainActivityGroup<T>;
        handleAdditionalBrainSetup(arg0: $SmartBrain<T>): void;
        getSchedule(): $SmartBrainSchedule;
        getSensors(): $List<$ExtendedSensor<T>>;
        get fightTasks(): $BrainActivityGroup<T>;
        get additionalTasks(): $Map<$Activity, $BrainActivityGroup<T>>;
        get alwaysRunningActivities(): $Set<$Activity>;
        get defaultActivity(): $Activity;
        get activityPriorities(): $List<$Activity>;
        get scheduleIgnoringActivities(): $Set<$Activity>;
        get coreTasks(): $BrainActivityGroup<T>;
        get idleTasks(): $BrainActivityGroup<T>;
        get schedule(): $SmartBrainSchedule;
        get sensors(): $List<$ExtendedSensor<T>>;
    }
    /**
     * Values that may be interpreted as {@link $SmartBrainOwner}.
     */
    export type $SmartBrainOwner_<T> = (() => $List_<$ExtendedSensor<T>>);
}
