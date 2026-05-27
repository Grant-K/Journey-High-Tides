import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Instant, $Duration, $Duration_ } from "@package/java/time";
import { $ColumnPos_, $ColumnPos } from "@package/net/minecraft/server/level";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $RecordedEvent } from "@package/jdk/jfr/consumer";
import { $ChunkStatus_, $ChunkStatus } from "@package/net/minecraft/world/level/chunk/status";
import { $List, $Map_, $Map, $List_ } from "@package/java/util";
import { $Enum, $Record } from "@package/java/lang";

declare module "@package/net/minecraft/util/profiling/jfr/stats" {
    export class $FileIOStat extends $Record {
        static summary(arg0: $Duration_, arg1: $List_<$FileIOStat_>): $FileIOStat$Summary;
        path(): string;
        bytes(): number;
        duration(): $Duration;
        constructor(arg0: $Duration_, arg1: string, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $FileIOStat}.
     */
    export type $FileIOStat_ = { path?: string, bytes?: number, duration?: $Duration_,  } | [path?: string, bytes?: number, duration?: $Duration_, ];
    export class $TimedStat {
    }
    export interface $TimedStat {
        duration(): $Duration;
    }
    /**
     * Values that may be interpreted as {@link $TimedStat}.
     */
    export type $TimedStat_ = (() => $Duration_);
    export class $IoSummary<T> {
        getTotalSize(): number;
        getSizePerSecond(): number;
        getCountsPerSecond(): number;
        largestSizeContributors(): $List<$Pair<T, $IoSummary$CountAndSize>>;
        getTotalCount(): number;
        constructor(arg0: $Duration_, arg1: $List_<$Pair<T, $IoSummary$CountAndSize_>>);
        get totalSize(): number;
        get sizePerSecond(): number;
        get countsPerSecond(): number;
        get totalCount(): number;
    }
    export class $ChunkGenStat extends $Record implements $TimedStat {
        chunkPos(): $ChunkPos;
        worldPos(): $ColumnPos;
        level(): string;
        static from(arg0: $RecordedEvent): $ChunkGenStat;
        status(): $ChunkStatus;
        duration(): $Duration;
        constructor(arg0: $Duration_, arg1: $ChunkPos, arg2: $ColumnPos_, arg3: $ChunkStatus_, arg4: string);
    }
    /**
     * Values that may be interpreted as {@link $ChunkGenStat}.
     */
    export type $ChunkGenStat_ = { worldPos?: $ColumnPos_, duration?: $Duration_, level?: string, chunkPos?: $ChunkPos, status?: $ChunkStatus_,  } | [worldPos?: $ColumnPos_, duration?: $Duration_, level?: string, chunkPos?: $ChunkPos, status?: $ChunkStatus_, ];
    export class $GcHeapStat$Timing extends $Enum<$GcHeapStat$Timing> {
    }
    /**
     * Values that may be interpreted as {@link $GcHeapStat$Timing}.
     */
    export type $GcHeapStat$Timing_ = "before_gc" | "after_gc";
    export class $IoSummary$CountAndSize extends $Record {
        totalSize(): number;
        averageSize(): number;
        totalCount(): number;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $IoSummary$CountAndSize}.
     */
    export type $IoSummary$CountAndSize_ = { totalSize?: number, totalCount?: number,  } | [totalSize?: number, totalCount?: number, ];
    export class $FileIOStat$Summary extends $Record {
        totalBytes(): number;
        bytesPerSecond(): number;
        countsPerSecond(): number;
        topTenContributorsByTotalBytes(): $List<$Pair<string, number>>;
        timeSpentInIO(): $Duration;
        counts(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Duration_, arg5: $List_<$Pair<string, number>>);
    }
    /**
     * Values that may be interpreted as {@link $FileIOStat$Summary}.
     */
    export type $FileIOStat$Summary_ = { countsPerSecond?: number, bytesPerSecond?: number, timeSpentInIO?: $Duration_, counts?: number, topTenContributorsByTotalBytes?: $List_<$Pair<string, number>>, totalBytes?: number,  } | [countsPerSecond?: number, bytesPerSecond?: number, timeSpentInIO?: $Duration_, counts?: number, topTenContributorsByTotalBytes?: $List_<$Pair<string, number>>, totalBytes?: number, ];
    export class $TimedStatSummary<T extends $TimedStat> extends $Record {
        totalDuration(): $Duration;
        percentilesNanos(): $Map<number, number>;
        fastest(): T;
        slowest(): T;
        secondSlowest(): T;
        static summary<T extends $TimedStat>(arg0: $List_<T>): $TimedStatSummary<T>;
        count(): number;
        constructor(arg0: T, arg1: T, arg2: T, arg3: number, arg4: $Map_<number, number>, arg5: $Duration_);
    }
    /**
     * Values that may be interpreted as {@link $TimedStatSummary}.
     */
    export type $TimedStatSummary_<T> = { slowest?: $TimedStat_, fastest?: $TimedStat_, count?: number, percentilesNanos?: $Map_<number, number>, secondSlowest?: $TimedStat_, totalDuration?: $Duration_,  } | [slowest?: $TimedStat_, fastest?: $TimedStat_, count?: number, percentilesNanos?: $Map_<number, number>, secondSlowest?: $TimedStat_, totalDuration?: $Duration_, ];
    export class $ThreadAllocationStat extends $Record {
        totalBytes(): number;
        static summary(arg0: $List_<$ThreadAllocationStat_>): $ThreadAllocationStat$Summary;
        threadName(): string;
        static from(arg0: $RecordedEvent): $ThreadAllocationStat;
        timestamp(): $Instant;
        constructor(arg0: $Instant, arg1: string, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $ThreadAllocationStat}.
     */
    export type $ThreadAllocationStat_ = { totalBytes?: number, threadName?: string, timestamp?: $Instant,  } | [totalBytes?: number, threadName?: string, timestamp?: $Instant, ];
    export class $TickTimeStat extends $Record {
        currentAverage(): $Duration;
        static from(arg0: $RecordedEvent): $TickTimeStat;
        timestamp(): $Instant;
        constructor(arg0: $Instant, arg1: $Duration_);
    }
    /**
     * Values that may be interpreted as {@link $TickTimeStat}.
     */
    export type $TickTimeStat_ = { timestamp?: $Instant, currentAverage?: $Duration_,  } | [timestamp?: $Instant, currentAverage?: $Duration_, ];
    export class $GcHeapStat$Summary extends $Record {
        gcTotalDuration(): $Duration;
        totalGCs(): number;
        gcOverHead(): number;
        allocationRateBytesPerSecond(): number;
        duration(): $Duration;
        constructor(arg0: $Duration_, arg1: $Duration_, arg2: number, arg3: number);
    }
    /**
     * Values that may be interpreted as {@link $GcHeapStat$Summary}.
     */
    export type $GcHeapStat$Summary_ = { totalGCs?: number, duration?: $Duration_, gcTotalDuration?: $Duration_, allocationRateBytesPerSecond?: number,  } | [totalGCs?: number, duration?: $Duration_, gcTotalDuration?: $Duration_, allocationRateBytesPerSecond?: number, ];
    export class $GcHeapStat extends $Record {
        heapUsed(): number;
        static summary(arg0: $Duration_, arg1: $List_<$GcHeapStat_>, arg2: $Duration_, arg3: number): $GcHeapStat$Summary;
        timing(): $GcHeapStat$Timing;
        static from(arg0: $RecordedEvent): $GcHeapStat;
        timestamp(): $Instant;
        constructor(arg0: $Instant, arg1: number, arg2: $GcHeapStat$Timing_);
    }
    /**
     * Values that may be interpreted as {@link $GcHeapStat}.
     */
    export type $GcHeapStat_ = { heapUsed?: number, timing?: $GcHeapStat$Timing_, timestamp?: $Instant,  } | [heapUsed?: number, timing?: $GcHeapStat$Timing_, timestamp?: $Instant, ];
    export class $ChunkIdentification extends $Record {
        dimension(): string;
        level(): string;
        x(): number;
        static from(arg0: $RecordedEvent): $ChunkIdentification;
        z(): number;
        constructor(arg0: string, arg1: string, arg2: number, arg3: number);
    }
    /**
     * Values that may be interpreted as {@link $ChunkIdentification}.
     */
    export type $ChunkIdentification_ = { z?: number, level?: string, dimension?: string, x?: number,  } | [z?: number, level?: string, dimension?: string, x?: number, ];
    export class $CpuLoadStat extends $Record {
        userJvm(): number;
        jvm(): number;
        static from(arg0: $RecordedEvent): $CpuLoadStat;
        system(): number;
        constructor(arg0: number, arg1: number, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $CpuLoadStat}.
     */
    export type $CpuLoadStat_ = { system?: number, jvm?: number, userJvm?: number,  } | [system?: number, jvm?: number, userJvm?: number, ];
    export class $PacketIdentification extends $Record {
        packetId(): string;
        protocolId(): string;
        direction(): string;
        static from(arg0: $RecordedEvent): $PacketIdentification;
        constructor(arg0: string, arg1: string, arg2: string);
    }
    /**
     * Values that may be interpreted as {@link $PacketIdentification}.
     */
    export type $PacketIdentification_ = { packetId?: string, protocolId?: string, direction?: string,  } | [packetId?: string, protocolId?: string, direction?: string, ];
    export class $ThreadAllocationStat$Summary extends $Record {
        allocationsPerSecondByThread(): $Map<string, number>;
        constructor(arg0: $Map_<string, number>);
    }
    /**
     * Values that may be interpreted as {@link $ThreadAllocationStat$Summary}.
     */
    export type $ThreadAllocationStat$Summary_ = { allocationsPerSecondByThread?: $Map_<string, number>,  } | [allocationsPerSecondByThread?: $Map_<string, number>, ];
}
