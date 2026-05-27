import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ActivityAccessor } from "@package/com/blackgear/platform/core/mixin/access";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $Collection_, $Map } from "@package/java/util";

declare module "@package/net/minecraft/world/entity/schedule" {
    export class $Activity implements $ActivityAccessor {
        static createActivity$platform_$md$68cb88$0(arg0: string): $Activity;
        getName(): string;
        static CORE: $Activity;
        static ROAR: $Activity;
        static FIGHT: $Activity;
        static TONGUE: $Activity;
        static PLAY: $Activity;
        static PANIC: $Activity;
        static INVESTIGATE: $Activity;
        static CELEBRATE: $Activity;
        static RIDE: $Activity;
        static MEET: $Activity;
        static HIDE: $Activity;
        static DIG: $Activity;
        static PLAY_DEAD: $Activity;
        static LONG_JUMP: $Activity;
        static AVOID: $Activity;
        static RAID: $Activity;
        static SWIM: $Activity;
        static EMERGE: $Activity;
        static REST: $Activity;
        static IDLE: $Activity;
        static SNIFF: $Activity;
        static WORK: $Activity;
        static ADMIRE_ITEM: $Activity;
        static PRE_RAID: $Activity;
        static LAY_SPAWN: $Activity;
        static RAM: $Activity;
        constructor(arg0: string);
        get name(): string;
    }
    /**
     * Values that may be interpreted as {@link $Activity}.
     */
    export type $Activity_ = RegistryTypes.Activity;
    export class $ScheduleBuilder$ActivityTransition {
    }
    export class $ScheduleBuilder {
        changeActivityAt(arg0: number, arg1: $Activity_): $ScheduleBuilder;
        build(): $Schedule;
        constructor(arg0: $Schedule_);
    }
    export interface $Activity extends RegistryMarked<RegistryTypes.ActivityTag, RegistryTypes.Activity> {}
    export class $Keyframe {
        getTimeStamp(): number;
        getValue(): number;
        constructor(arg0: number, arg1: number);
        get timeStamp(): number;
        get value(): number;
    }
    export interface $Schedule extends RegistryMarked<RegistryTypes.ScheduleTag, RegistryTypes.Schedule> {}
    export class $Timeline {
        getKeyframes(): $ImmutableList<$Keyframe>;
        addKeyframe(arg0: number, arg1: number): $Timeline;
        addKeyframes(arg0: $Collection_<$Keyframe>): $Timeline;
        getValueAt(arg0: number): number;
        constructor();
        get keyframes(): $ImmutableList<$Keyframe>;
    }
    export class $Schedule {
        getActivityAt(arg0: number): $Activity;
        timelines: $Map<$Activity, $Timeline>;
        static WORK_START_TIME: number;
        static VILLAGER_DEFAULT: $Schedule;
        static VILLAGER_BABY: $Schedule;
        static SIMPLE: $Schedule;
        static TOTAL_WORK_TIME: number;
        static EMPTY: $Schedule;
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $Schedule}.
     */
    export type $Schedule_ = RegistryTypes.Schedule;
}
